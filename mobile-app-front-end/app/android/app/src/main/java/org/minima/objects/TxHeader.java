package org.minima.objects;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.Date;

import org.minima.GlobalParams;
import org.minima.objects.base.MMRSumNumber;
import org.minima.objects.base.MiniByte;
import org.minima.objects.base.MiniData;
import org.minima.objects.base.MiniInteger;
import org.minima.objects.base.MiniNumber;
import org.minima.utils.Crypto;
import org.minima.utils.Streamable;
import org.minima.utils.json.JSONArray;
import org.minima.utils.json.JSONObject;

public class TxHeader implements Streamable {

	/**
	 * The NONCE - the user definable data you cycle through to change the final hash of this TxPow
	 */
	public MiniInteger mNonce = new MiniInteger(0);
	
	/**
	 * Time Secs - nneds to be MiniNumber as is used in Scripts.. 
	 */
	public MiniNumber 	mTimeSecs = new MiniNumber(System.currentTimeMillis() / 1000);
	
	/**
	 * The Block Number - needs to be a MiniNumber as is used in Scripts..
	 */
	public MiniNumber  mBlockNumber = new MiniNumber(0);
	
	/**
	 * The BASE Block Difficulty
	 */
	public MiniData mBlockDifficulty = Crypto.MAX_HASH;
	
	/**
	 * A list of all the parent blocks at all the Super Block Levels..
	 */
	public MiniData[] mSuperParents;
	
	/**
	 * A Chain ID. Useful when running side-chains, as only this TokenID will be valid to POS mine it. 
	 * 0x00 is the main chain
	 */
	public MiniData mChainID      = new MiniData("0x00");
	
	/**
	 * Every Side chain has a parent chain
	 */
	public MiniData mParentChainID = new MiniData("0x00");
	
	/**
	 * The MMR Root!
	 */
	public MiniData mMMRRoot = new MiniData();
	
	/**
	 * The Total Sum Of All coins in the system
	 */
	public MMRSumNumber mMMRTotal = MMRSumNumber.ZERO;
	
	/**
	 * The HASH of the TxBody
	 */
	public MiniData mTxBodyHash    = new MiniData("0x00");
	
	/**
	 * In the long run ONLY this header is kept and the body is discarded..
	 */
	public TxHeader() {
		//How many super block levels..
		mSuperParents = new MiniData[GlobalParams.MINIMA_CASCADE_LEVELS];
		
		//Super Block Levels..
		for(int i=0;i<GlobalParams.MINIMA_CASCADE_LEVELS;i++) {
			mSuperParents[i] = new MiniData();
		}
	}
	
	public MiniData getBodyHash() {
		return mTxBodyHash;
	}

	public JSONObject toJSON() {
		JSONObject txpow = new JSONObject();
		
		txpow.put("block", mBlockNumber.toString());
		txpow.put("blkdiff", mBlockDifficulty.to0xString());
		
		//The Super parents are efficiently encoded in RLE
		txpow.put("cascadelevels", GlobalParams.MINIMA_CASCADE_LEVELS);
		JSONArray supers = new JSONArray();
		MiniData old = null;
		int counter=0;
		for(int i=0;i<GlobalParams.MINIMA_CASCADE_LEVELS;i++) {
			MiniData curr = mSuperParents[i];
			
			if(old == null) {
				old = curr;
				counter++;				
			}else {
				if(old.isEqual(curr)) {
					counter++;
				}else{
					//Write the old one..
					JSONObject sp = new JSONObject();
					sp.put("difficulty", i-1);
					sp.put("count", counter);
					sp.put("parent", old.to0xString());
					supers.add(sp);
					
					//Reset
					old     = curr;
					counter = 1;
				}
			}
			
			//Is this the last one..
			if(i==GlobalParams.MINIMA_CASCADE_LEVELS-1) {
				//Write it anyway..
				JSONObject sp = new JSONObject();
				sp.put("difficulty", i);
				sp.put("count", counter);
				sp.put("parent", curr.to0xString());
				supers.add(sp);						
			}
		}
		txpow.put("superparents", supers);
		
		txpow.put("chainid", mChainID.toString());
		txpow.put("parentchainid", mParentChainID.toString());
		
		txpow.put("mmr", mMMRRoot.toString());
		txpow.put("total", mMMRTotal.toString());
		
		txpow.put("nonce", mNonce.toString());
		txpow.put("timesecs", mTimeSecs.toString());
		
		long timemilli = mTimeSecs.mult(MiniNumber.THOUSAND).getAsLong();
		txpow.put("date", new Date(timemilli).toString());
		
		return txpow;
	}
	
	@Override
	public void writeDataStream(DataOutputStream zOut) throws IOException {
		mNonce.writeDataStream(zOut);
		mTimeSecs.writeDataStream(zOut);
		mBlockNumber.writeDataStream(zOut);
		mBlockDifficulty.writeDataStream(zOut);
		
		mChainID.writeHashToStream(zOut);
		mParentChainID.writeHashToStream(zOut);
		
		//The Super parents are efficiently encoded in RLE
		MiniByte cascnum = new MiniByte(GlobalParams.MINIMA_CASCADE_LEVELS);
		cascnum.writeDataStream(zOut);
		
		MiniData sparent = null;
		int counter  = 0;
		for(int i=0;i<GlobalParams.MINIMA_CASCADE_LEVELS;i++) {
			MiniData curr = mSuperParents[i];
			if(sparent == null) {
				sparent = curr;
				counter++;
			}else {
				if(sparent.isEqual(curr)) {
					counter++;
				}else {
					//Write the old one..
					MiniByte count = new MiniByte(counter);
					count.writeDataStream(zOut);
					sparent.writeHashToStream(zOut);
									
					//Reset
					sparent = curr;
					counter = 1;
				}
			}
			
			//Is this the last one..
			if(i==GlobalParams.MINIMA_CASCADE_LEVELS-1) {
				//Write it anyway..
				MiniByte count = new MiniByte(counter);
				count.writeDataStream(zOut);
				sparent.writeHashToStream(zOut);						
			}
		}
		
		//Write out the MMR DB
		mMMRRoot.writeHashToStream(zOut);
		mMMRTotal.writeDataStream(zOut);
		
		//Write the Boddy Hash
		mTxBodyHash.writeHashToStream(zOut);
	}

	@Override
	public void readDataStream(DataInputStream zIn) throws IOException {
		mNonce           = MiniInteger.ReadFromStream(zIn);
		mTimeSecs        = MiniNumber.ReadFromStream(zIn);
		mBlockNumber     = MiniNumber.ReadFromStream(zIn);
		mBlockDifficulty = MiniData.ReadFromStream(zIn);
		
		mChainID         = MiniData.ReadHashFromStream(zIn);
		mParentChainID   = MiniData.ReadHashFromStream(zIn);
		
		//How many cascade levels.. will probably NEVER change..
		MiniByte cascnum = MiniByte.ReadFromStream(zIn);
		int tot = 0;
		while(tot<cascnum.getValue()) {
			MiniByte len = MiniByte.ReadFromStream(zIn);
			MiniData sup = MiniData.ReadHashFromStream(zIn);
			int count = len.getValue();
			for(int i=0;i<count;i++) {
				mSuperParents[tot++] = sup;
			}
		}
		
		//read in the MMR state..
		mMMRRoot  = MiniData.ReadHashFromStream(zIn);
		mMMRTotal = MMRSumNumber.ReadFromStream(zIn);
		
		//The TxBody Hash
		mTxBodyHash = MiniData.ReadHashFromStream(zIn);
	}
}
