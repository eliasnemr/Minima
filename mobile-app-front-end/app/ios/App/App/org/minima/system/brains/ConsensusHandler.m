//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/brains/ConsensusHandler.java
//

#include "J2ObjC_source.h"
#include "java/lang/Boolean.h"
#include "java/math/BigDecimal.h"
#include "java/util/ArrayList.h"
#include "java/util/Hashtable.h"
#include "org/minima/NativeListener.h"
#include "org/minima/database/MinimaDB.h"
#include "org/minima/database/txpowdb/TxPOWDBRow.h"
#include "org/minima/database/userdb/UserDB.h"
#include "org/minima/objects/Address.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/Witness.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/objects/base/MiniScript.h"
#include "org/minima/objects/proofs/TokenProof.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/SystemHandler.h"
#include "org/minima/system/backup/BackupManager.h"
#include "org/minima/system/brains/ConsensusBackup.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusNet.h"
#include "org/minima/system/brains/ConsensusPrint.h"
#include "org/minima/system/brains/ConsensusTxn.h"
#include "org/minima/system/brains/ConsensusUser.h"
#include "org/minima/system/external/ProcessManager.h"
#include "org/minima/system/input/InputHandler.h"
#include "org/minima/system/input/functions/gimme50.h"
#include "org/minima/system/network/NetClient.h"
#include "org/minima/system/network/NetClientReader.h"
#include "org/minima/system/network/NetworkHandler.h"
#include "org/minima/system/tx/TXMiner.h"
#include "org/minima/utils/Crypto.h"
#include "org/minima/utils/json/JSONArray.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/messages/Message.h"
#include "org/minima/utils/messages/TimerMessage.h"

@interface OrgMinimaSystemBrainsConsensusHandler ()

- (OrgMinimaDatabaseMinimaDB *)getMainDB;

@end

__attribute__((unused)) static OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusHandler_getMainDB(OrgMinimaSystemBrainsConsensusHandler *self);

NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PROCESSTXPOW = @"CONSENSUS_PROCESSTXPOW";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PRE_PROCESSTXPOW = @"CONSENSUS_PREPROCESSTXPOW";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_ACTIVATEMINE = @"CONSENSUS_ACTIVATEMINE";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK = @"CONSENSUS_MINEBLOCK";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS = @"CONSENSUS_SENDTRANS";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETRANS = @"CONSENSUS_CREATETRANS";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETOKEN = @"CONSENSUS_CREATETOKEN";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PRINTCHAIN = @"CONSENSUS_PRINTCHAIN";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_STATUS = @"CONSENSUS_STATUS";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_QUIT = @"CONSENSUS_NOTIFY_QUIT";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_BALANCE = @"CONSENSUS_NOTIFY_BALANCE";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_NEWBLOCK = @"CONSENSUS_NOTIFY_NEWBLOCK";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_RELCOIN = @"CONSENSUS_NOTIFY_RELCOIN";
NSString *OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_GIMME50 = @"CONSENSUS_GIMME50";

@implementation OrgMinimaSystemBrainsConsensusHandler

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain {
  OrgMinimaSystemBrainsConsensusHandler_initWithOrgMinimaSystemMain_(self, zMain);
  return self;
}

- (void)setBackUpManager {
  [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) setBackupManagerWithOrgMinimaSystemBackupBackupManager:[((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getBackupManager]];
}

- (void)clearListeners {
  [((JavaUtilArrayList *) nil_chk(mListeners_)) clear];
}

- (void)addListenerWithOrgMinimaNativeListener:(id<OrgMinimaNativeListener>)zListen {
  [((JavaUtilArrayList *) nil_chk(mListeners_)) addWithId:zListen];
}

- (void)removeListenerWithOrgMinimaNativeListener:(id<OrgMinimaNativeListener>)zListen {
  [((JavaUtilArrayList *) nil_chk(mListeners_)) removeWithId:zListen];
}

- (void)updateListenersWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  for (id<OrgMinimaNativeListener> __strong listen in nil_chk(mListeners_)) {
    [((id<OrgMinimaNativeListener>) nil_chk(listen)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
}

- (void)genesis {
  [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) DoGenesis];
}

- (OrgMinimaDatabaseMinimaDB *)getMainDB {
  return OrgMinimaSystemBrainsConsensusHandler_getMainDB(self);
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PROCESSTXPOW]) {
    OrgMinimaObjectsTxPOW *txpow = (OrgMinimaObjectsTxPOW *) cast_chk([zMessage getObjectWithNSString:@"txpow"], [OrgMinimaObjectsTxPOW class]);
    [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) processTxPOWWithOrgMinimaObjectsTxPOW:txpow];
    if (mPrintChain_) {
      OrgMinimaUtilsMessagesMessage *print = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusPrint_CONSENSUS_PRINTCHAIN_TREE) addBooleanWithNSString:@"systemout" withBoolean:true];
      [self PostMessageWithOrgMinimaUtilsMessagesMessage:print];
    }
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PRE_PROCESSTXPOW]) {
    OrgMinimaObjectsTxPOW *txpow = (OrgMinimaObjectsTxPOW *) cast_chk([zMessage getObjectWithNSString:@"txpow"], [OrgMinimaObjectsTxPOW class]);
    if ([((OrgMinimaObjectsTransaction *) nil_chk([((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) getTransaction])) isEmpty] && ![txpow isBlock]) {
      return;
    }
    [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) addNewTxPowWithOrgMinimaObjectsTxPOW:txpow];
    [((OrgMinimaSystemBackupBackupManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getBackupManager])) backupTxpowWithOrgMinimaObjectsTxPOW:txpow];
    jboolean relevant = false;
    if ([txpow isTransaction]) {
      relevant = [self checkTransactionRelevantWithOrgMinimaObjectsTxPOW:txpow withOrgMinimaUtilsMessagesMessage:zMessage];
    }
    if (relevant) {
      OrgMinimaUtilsMessagesMessage *backup = create_OrgMinimaUtilsMessagesMessage_initWithNSString_(JreLoadStatic(OrgMinimaSystemBrainsConsensusBackup, CONSENSUSBACKUP_BACKUP));
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(backup, zMessage);
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:backup];
      [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getNetworkHandler])) PostMessageWithNSString:OrgMinimaSystemNetworkNetworkHandler_NETWORK_NOTIFY];
    }
    OrgMinimaUtilsMessagesMessage *msg = [((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDOBJECT) addObjectWithNSString:@"type" withId:JreLoadStatic(OrgMinimaSystemNetworkNetClientReader, NETMESSAGE_TXPOWID)])) addObjectWithNSString:@"object" withId:[txpow getTxPowID]];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(msg, zMessage);
    OrgMinimaUtilsMessagesMessage *netw = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_SENDALL) addObjectWithNSString:@"message" withId:msg];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(netw, zMessage);
    [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getNetworkHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:netw];
    OrgMinimaUtilsMessagesMessage *proc = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PROCESSTXPOW) addObjectWithNSString:@"txpow" withId:txpow];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(proc, zMessage);
    [self PostMessageWithOrgMinimaUtilsMessagesMessage:proc];
    if ([txpow isBlock]) {
      OrgMinimaUtilsMessagesMessage *upd = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_NEWBLOCK) addObjectWithNSString:@"txpow" withId:txpow];
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(upd, zMessage);
      [self updateListenersWithOrgMinimaUtilsMessagesMessage:upd];
    }
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) java_hasPrefix:OrgMinimaSystemBrainsConsensusNet_CONSENSUS_PREFIX]) {
    [((OrgMinimaSystemBrainsConsensusNet *) nil_chk(mConsensusNet_)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) java_hasPrefix:OrgMinimaSystemBrainsConsensusTxn_CONSENSUS_PREFIX]) {
    [((OrgMinimaSystemBrainsConsensusTxn *) nil_chk(mConsensusTxn_)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) java_hasPrefix:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_PREFIX]) {
    [((OrgMinimaSystemBrainsConsensusUser *) nil_chk(mConsensusUser_)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) java_hasPrefix:OrgMinimaSystemBrainsConsensusPrint_CONSENSUS_PREFIX]) {
    [((OrgMinimaSystemBrainsConsensusPrint *) nil_chk(mConsensusPrint_)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) java_hasPrefix:OrgMinimaSystemBrainsConsensusBackup_CONSENSUS_PREFIX]) {
    [((OrgMinimaSystemBrainsConsensusBackup *) nil_chk(mConsensusBackup_)) processMessageWithOrgMinimaUtilsMessagesMessage:zMessage];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS]) {
    OrgMinimaObjectsTransaction *trans = (OrgMinimaObjectsTransaction *) cast_chk([zMessage getObjectWithNSString:@"transaction"], [OrgMinimaObjectsTransaction class]);
    OrgMinimaObjectsWitness *wit = (OrgMinimaObjectsWitness *) cast_chk([zMessage getObjectWithNSString:@"witness"], [OrgMinimaObjectsWitness class]);
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    OrgMinimaUtilsJsonJSONArray *contractlogs = create_OrgMinimaUtilsJsonJSONArray_init();
    OrgMinimaObjectsTxPOW *txpow = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getCurrentTxPowWithOrgMinimaObjectsTransaction:trans withOrgMinimaObjectsWitness:wit withOrgMinimaUtilsJsonJSONArray:contractlogs];
    if (txpow == nil) {
      [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"contractlogs" withId:contractlogs];
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, @"Invalid Transaction");
      return;
    }
    OrgMinimaUtilsMessagesMessage *mine = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemTxTXMiner_TXMINER_MINETXPOW) addObjectWithNSString:@"txpow" withId:txpow];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(mine, zMessage);
    [((OrgMinimaSystemTxTXMiner *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getMiner])) PostMessageWithOrgMinimaUtilsMessagesMessage:mine];
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"txpow" withId:txpow];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"Send Success");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_ACTIVATEMINE]) {
    jboolean mining = [zMessage getBooleanWithNSString:@"automining"];
    [((OrgMinimaSystemTxTXMiner *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getMiner])) setAutoMiningWithBoolean:mining];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"automining" withId:JavaLangBoolean_valueOfWithBoolean_(mining)];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK]) {
    if (![((OrgMinimaSystemTxTXMiner *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getMiner])) isAutoMining]) {
      [self PostTimerMessageWithOrgMinimaUtilsMessagesTimerMessage:create_OrgMinimaUtilsMessagesTimerMessage_initWithInt_withNSString_(5000, OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK)];
      return;
    }
    OrgMinimaObjectsTxPOW *txpow = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getCurrentTxPowWithOrgMinimaObjectsTransaction:create_OrgMinimaObjectsTransaction_init() withOrgMinimaObjectsWitness:create_OrgMinimaObjectsWitness_init() withOrgMinimaUtilsJsonJSONArray:create_OrgMinimaUtilsJsonJSONArray_init()];
    OrgMinimaUtilsMessagesMessage *mine = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemTxTXMiner_TXMINER_MEGAMINER) addObjectWithNSString:@"txpow" withId:txpow];
    [((OrgMinimaSystemTxTXMiner *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getMiner])) PostMessageWithOrgMinimaUtilsMessagesMessage:mine];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETRANS]) {
    NSString *address = [zMessage getStringWithNSString:@"address"];
    if ([((NSString *) nil_chk(address)) java_hasPrefix:@"0x"]) {
      address = [create_OrgMinimaObjectsBaseMiniData_initWithNSString_(address) to0xString];
    }
    else if ([address java_hasPrefix:@"Mx"]) {
      address = [((OrgMinimaObjectsBaseMiniData *) nil_chk(OrgMinimaObjectsAddress_convertMinimAddressWithNSString_(address))) to0xString];
    }
    NSString *tokenid = [create_OrgMinimaObjectsBaseMiniData_initWithNSString_([zMessage getStringWithNSString:@"tokenid"]) to0xString];
    NSString *amount = [zMessage getStringWithNSString:@"amount"];
    OrgMinimaObjectsBaseMiniData *tok = create_OrgMinimaObjectsBaseMiniData_initWithNSString_(tokenid);
    OrgMinimaObjectsBaseMiniData *changetok = create_OrgMinimaObjectsBaseMiniData_initWithNSString_(tokenid);
    tokenid = [tok to0xString];
    OrgMinimaObjectsProofsTokenProof *tokendets = nil;
    if (![tok isEqualWithOrgMinimaObjectsBaseMiniData:JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID)]) {
      OrgMinimaObjectsBaseMiniNumber *samount = create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(amount);
      tokendets = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) getTokenDetailWithOrgMinimaObjectsBaseMiniData:create_OrgMinimaObjectsBaseMiniData_initWithNSString_(tokenid)];
      if (tokendets == nil) {
        OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$$", @"No details found for the specified token : ", tokenid));
        return;
      }
      samount = [samount divWithOrgMinimaObjectsBaseMiniNumber:[tokendets getScaleFactor]];
      amount = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(samount)) description];
    }
    OrgMinimaObjectsBaseMiniNumber *sendamount = create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(amount);
    OrgMinimaObjectsBaseMiniNumber *total = create_OrgMinimaObjectsBaseMiniNumber_init();
    JavaUtilArrayList *confirmed = nil;
    if ([tok isEqualWithOrgMinimaObjectsBaseMiniData:JreLoadStatic(OrgMinimaObjectsCoin, TOKENID_CREATE)]) {
      confirmed = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getTotalSimpleSpendableCoinsWithOrgMinimaObjectsBaseMiniData:JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID)];
      changetok = JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID);
    }
    else {
      confirmed = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getTotalSimpleSpendableCoinsWithOrgMinimaObjectsBaseMiniData:tok];
    }
    for (OrgMinimaObjectsCoin * __strong cc in nil_chk(confirmed)) {
      total = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(total)) addWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaObjectsCoin *) nil_chk(cc)) getAmount]];
    }
    if ([total isLessWithOrgMinimaObjectsBaseMiniNumber:sendamount]) {
      if (![((NSString *) nil_chk(tokenid)) isEqual:[((OrgMinimaObjectsBaseMiniData *) nil_chk(JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID))) to0xString]]) {
        total = [total multWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaObjectsProofsTokenProof *) nil_chk(tokendets)) getScaleFactor]];
        OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@", @"Insufficient funds! You only have : ", total));
      }
      else {
        OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@", @"Insufficient funds! You only have : ", total));
      }
      return;
    }
    else {
      OrgMinimaObjectsAddress *recipient = create_OrgMinimaObjectsAddress_initWithOrgMinimaObjectsBaseMiniData_(create_OrgMinimaObjectsBaseMiniData_initWithNSString_(address));
      OrgMinimaObjectsAddress *change = create_OrgMinimaObjectsAddress_init();
      if (![total isEqualWithOrgMinimaObjectsBaseMiniNumber:sendamount]) {
        change = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) newSimpleAddress];
      }
      OrgMinimaUtilsMessagesMessage *ret = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) createTransactionWithOrgMinimaObjectsBaseMiniNumber:sendamount withOrgMinimaObjectsAddress:recipient withOrgMinimaObjectsAddress:change withJavaUtilArrayList:confirmed withOrgMinimaObjectsBaseMiniData:tok withOrgMinimaObjectsBaseMiniData:changetok withOrgMinimaObjectsProofsTokenProof:nil];
      if (tokendets != nil) {
        OrgMinimaObjectsWitness *wit = (OrgMinimaObjectsWitness *) cast_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk(ret)) getObjectWithNSString:@"witness"], [OrgMinimaObjectsWitness class]);
        [((OrgMinimaObjectsWitness *) nil_chk(wit)) addTokenDetailsWithOrgMinimaObjectsProofsTokenProof:tokendets];
      }
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(ret, zMessage);
      [self PostMessageWithOrgMinimaUtilsMessagesMessage:ret];
    }
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_GIMME50]) {
    OrgMinimaObjectsAddress *addr = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) newSimpleAddress];
    OrgMinimaObjectsTransaction *trans = create_OrgMinimaObjectsTransaction_init();
    OrgMinimaObjectsWitness *wit = create_OrgMinimaObjectsWitness_init();
    OrgMinimaObjectsCoin *in = create_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniData_(JreLoadStatic(OrgMinimaSystemInputFunctionsgimme50, COINID_INPUT), [((OrgMinimaObjectsAddress *) nil_chk(JreLoadStatic(OrgMinimaObjectsAddress, TRUE_ADDRESS))) getAddressData], create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"50"), JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID));
    [trans addInputWithOrgMinimaObjectsCoin:in];
    [wit addScriptWithNSString:[((OrgMinimaObjectsAddress *) nil_chk(JreLoadStatic(OrgMinimaObjectsAddress, TRUE_ADDRESS))) getScript] withInt:[((OrgMinimaObjectsBaseMiniData *) nil_chk([in getAddress])) getLength] * 8];
    OrgMinimaObjectsCoin *out = create_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniData_(JreLoadStatic(OrgMinimaObjectsCoin, COINID_OUTPUT), [((OrgMinimaObjectsAddress *) nil_chk(addr)) getAddressData], create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"50"), JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID));
    [trans addOutputWithOrgMinimaObjectsCoin:out];
    OrgMinimaUtilsMessagesMessage *mine = [((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS) addObjectWithNSString:@"transaction" withId:trans])) addObjectWithNSString:@"witness" withId:wit];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(mine, zMessage);
    [self PostMessageWithOrgMinimaUtilsMessagesMessage:mine];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETOKEN]) {
    NSString *amount = [zMessage getStringWithNSString:@"amount"];
    NSString *name = [zMessage getStringWithNSString:@"name"];
    NSString *script = [zMessage getStringWithNSString:@"script"];
    OrgMinimaObjectsBaseMiniData *tok = JreLoadStatic(OrgMinimaObjectsCoin, TOKENID_CREATE);
    OrgMinimaObjectsBaseMiniData *changetok = JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID);
    OrgMinimaObjectsAddress *recipient = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) newSimpleAddress];
    JavaMathBigDecimal *max = create_JavaMathBigDecimal_initWithNSString_(@"0.01");
    JavaMathBigDecimal *num = create_JavaMathBigDecimal_initWithNSString_(amount);
    JavaMathBigDecimal *actnum = create_JavaMathBigDecimal_initWithNSString_(amount);
    jint scale_ = 0;
    while ([((JavaMathBigDecimal *) nil_chk(actnum)) compareToWithId:max] > 0) {
      actnum = [actnum divideWithJavaMathBigDecimal:JreLoadStatic(JavaMathBigDecimal, TEN)];
      scale_++;
    }
    OrgMinimaObjectsBaseMiniNumber *sendamount = create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_(actnum);
    OrgMinimaObjectsBaseMiniNumber *total = create_OrgMinimaObjectsBaseMiniNumber_init();
    JavaUtilArrayList *confirmed = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getTotalSimpleSpendableCoinsWithOrgMinimaObjectsBaseMiniData:JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID)];
    for (OrgMinimaObjectsCoin * __strong cc in nil_chk(confirmed)) {
      total = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(total)) addWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaObjectsCoin *) nil_chk(cc)) getAmount]];
    }
    if ([total isLessWithOrgMinimaObjectsBaseMiniNumber:sendamount]) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@", @"Insufficient funds! You only have : ", total));
    }
    else {
      OrgMinimaObjectsAddress *change = create_OrgMinimaObjectsAddress_init();
      if (![total isEqualWithOrgMinimaObjectsBaseMiniNumber:sendamount]) {
        change = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) newSimpleAddress];
      }
      OrgMinimaObjectsProofsTokenProof *tokengen = create_OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_withOrgMinimaObjectsBaseMiniScript_(JreLoadStatic(OrgMinimaObjectsCoin, COINID_OUTPUT), create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(JreStrcat("I", scale_)), sendamount, create_OrgMinimaObjectsBaseMiniScript_initWithNSString_(name), create_OrgMinimaObjectsBaseMiniScript_initWithNSString_(script));
      OrgMinimaUtilsMessagesMessage *ret = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) createTransactionWithOrgMinimaObjectsBaseMiniNumber:sendamount withOrgMinimaObjectsAddress:recipient withOrgMinimaObjectsAddress:change withJavaUtilArrayList:confirmed withOrgMinimaObjectsBaseMiniData:tok withOrgMinimaObjectsBaseMiniData:changetok withOrgMinimaObjectsProofsTokenProof:tokengen];
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(ret, zMessage);
      [self PostMessageWithOrgMinimaUtilsMessagesMessage:ret];
    }
  }
}

- (jboolean)checkTransactionRelevantWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW
                            withOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zOriginal {
  OrgMinimaObjectsTransaction *trans = [((OrgMinimaObjectsTxPOW *) nil_chk(zTxPOW)) getTransaction];
  JavaUtilArrayList *ins = [((OrgMinimaObjectsTransaction *) nil_chk(trans)) getAllInputs];
  JavaUtilArrayList *outs = [trans getAllOutputs];
  OrgMinimaObjectsBaseMiniData *transhash = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectWithOrgMinimaUtilsStreamable:trans];
  jboolean rel = false;
  OrgMinimaObjectsBaseMiniNumber *tot = JreLoadStatic(OrgMinimaObjectsBaseMiniNumber, ZERO);
  for (OrgMinimaObjectsCoin * __strong in in nil_chk(ins)) {
    if ([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) isAddressRelevantWithOrgMinimaObjectsBaseMiniData:[((OrgMinimaObjectsCoin *) nil_chk(in)) getAddress]]) {
      rel = true;
      OrgMinimaUtilsMessagesMessage *relmsg = [((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN) addObjectWithNSString:@"coin" withId:in])) addObjectWithNSString:@"txpowid" withId:[zTxPOW getTxPowID]])) addObjectWithNSString:@"transid" withId:transhash])) addObjectWithNSString:@"spent" withId:JavaLangBoolean_valueOfWithBoolean_(true)];
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(relmsg, zOriginal);
      [((OrgMinimaSystemExternalProcessManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getProcessManager])) PostMessageWithOrgMinimaUtilsMessagesMessage:relmsg];
      tot = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(tot)) subWithOrgMinimaObjectsBaseMiniNumber:[in getAmount]];
    }
  }
  jint len = [((JavaUtilArrayList *) nil_chk(outs)) size];
  for (jint i = 0; i < len; i++) {
    OrgMinimaObjectsCoin *out = [outs getWithInt:i];
    if ([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) isAddressRelevantWithOrgMinimaObjectsBaseMiniData:[((OrgMinimaObjectsCoin *) nil_chk(out)) getAddress]]) {
      rel = true;
      OrgMinimaObjectsBaseMiniData *coinid = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectsWithOrgMinimaUtilsStreamable:transhash withOrgMinimaUtilsStreamable:create_OrgMinimaObjectsBaseMiniByte_initWithInt_(i)];
      OrgMinimaObjectsCoin *fullcoin = create_OrgMinimaObjectsCoin_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniData_(coinid, [out getAddress], [out getAmount], [out getTokenID]);
      OrgMinimaUtilsMessagesMessage *relmsg = [((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN) addObjectWithNSString:@"coin" withId:fullcoin])) addObjectWithNSString:@"txpowid" withId:[zTxPOW getTxPowID]])) addObjectWithNSString:@"transid" withId:transhash])) addObjectWithNSString:@"spent" withId:JavaLangBoolean_valueOfWithBoolean_(false)];
      OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(relmsg, zOriginal);
      [((OrgMinimaSystemExternalProcessManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getProcessManager])) PostMessageWithOrgMinimaUtilsMessagesMessage:relmsg];
      tot = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(tot)) addWithOrgMinimaObjectsBaseMiniNumber:[out getAmount]];
    }
  }
  if (rel) {
    OrgMinimaUtilsMessagesMessage *upd = [create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_BALANCE) addStringWithNSString:@"change" withNSString:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(tot)) description]];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(upd, zOriginal);
    [self updateListenersWithOrgMinimaUtilsMessagesMessage:upd];
    JavaUtilHashtable *tokamt = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getTransactionTokenAmountsWithOrgMinimaObjectsTxPOW:zTxPOW];
    [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusHandler_getMainDB(self))) getUserDB])) addToHistoryWithOrgMinimaObjectsTxPOW:zTxPOW withJavaUtilHashtable:tokamt];
    OrgMinimaUtilsMessagesMessage *command = [((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk([create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemExternalProcessManager_PROCESS_TXNCALL) addObjectWithNSString:@"transaction" withId:trans])) addObjectWithNSString:@"transid" withId:transhash])) addObjectWithNSString:@"txpowid" withId:[zTxPOW getTxPowID]])) addObjectWithNSString:@"total" withId:tot];
    OrgMinimaSystemInputInputHandler_addResponseMesageWithOrgMinimaUtilsMessagesMessage_withOrgMinimaUtilsMessagesMessage_(command, zOriginal);
    [((OrgMinimaSystemExternalProcessManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getProcessManager])) PostMessageWithOrgMinimaUtilsMessagesMessage:command];
  }
  return rel;
}

- (void)dealloc {
  RELEASE_(mMainDB_);
  RELEASE_(mConsensusTxn_);
  RELEASE_(mConsensusNet_);
  RELEASE_(mConsensusUser_);
  RELEASE_(mConsensusPrint_);
  RELEASE_(mConsensusBackup_);
  RELEASE_(mListeners_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseMinimaDB;", 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 6, 5, 7, -1, -1, -1 },
    { NULL, "Z", 0x1, 8, 9, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemMain:);
  methods[1].selector = @selector(setBackUpManager);
  methods[2].selector = @selector(clearListeners);
  methods[3].selector = @selector(addListenerWithOrgMinimaNativeListener:);
  methods[4].selector = @selector(removeListenerWithOrgMinimaNativeListener:);
  methods[5].selector = @selector(updateListenersWithOrgMinimaUtilsMessagesMessage:);
  methods[6].selector = @selector(genesis);
  methods[7].selector = @selector(getMainDB);
  methods[8].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  methods[9].selector = @selector(checkTransactionRelevantWithOrgMinimaObjectsTxPOW:withOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "CONSENSUS_PROCESSTXPOW", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "CONSENSUS_PRE_PROCESSTXPOW", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 11, -1, -1 },
    { "CONSENSUS_ACTIVATEMINE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 12, -1, -1 },
    { "CONSENSUS_MINEBLOCK", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 13, -1, -1 },
    { "CONSENSUS_SENDTRANS", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 14, -1, -1 },
    { "CONSENSUS_CREATETRANS", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 15, -1, -1 },
    { "CONSENSUS_CREATETOKEN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 16, -1, -1 },
    { "CONSENSUS_PRINTCHAIN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 17, -1, -1 },
    { "CONSENSUS_STATUS", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 18, -1, -1 },
    { "CONSENSUS_NOTIFY_QUIT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 19, -1, -1 },
    { "CONSENSUS_NOTIFY_BALANCE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 20, -1, -1 },
    { "CONSENSUS_NOTIFY_NEWBLOCK", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 21, -1, -1 },
    { "CONSENSUS_NOTIFY_RELCOIN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 22, -1, -1 },
    { "CONSENSUS_GIMME50", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 23, -1, -1 },
    { "mPrintChain_", "Z", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mMainDB_", "LOrgMinimaDatabaseMinimaDB;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mConsensusTxn_", "LOrgMinimaSystemBrainsConsensusTxn;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mConsensusNet_", "LOrgMinimaSystemBrainsConsensusNet;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mConsensusUser_", "LOrgMinimaSystemBrainsConsensusUser;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mConsensusPrint_", "LOrgMinimaSystemBrainsConsensusPrint;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mConsensusBackup_", "LOrgMinimaSystemBrainsConsensusBackup;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mListeners_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 24, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemMain;", "addListener", "LOrgMinimaNativeListener;", "removeListener", "updateListeners", "LOrgMinimaUtilsMessagesMessage;", "processMessage", "LJavaLangException;", "checkTransactionRelevant", "LOrgMinimaObjectsTxPOW;LOrgMinimaUtilsMessagesMessage;", &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PROCESSTXPOW, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PRE_PROCESSTXPOW, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_ACTIVATEMINE, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETRANS, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_CREATETOKEN, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_PRINTCHAIN, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_STATUS, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_QUIT, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_BALANCE, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_NEWBLOCK, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_RELCOIN, &OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_GIMME50, "Ljava/util/ArrayList<Lorg/minima/NativeListener;>;" };
  static const J2ObjcClassInfo _OrgMinimaSystemBrainsConsensusHandler = { "ConsensusHandler", "org.minima.system.brains", ptrTable, methods, fields, 7, 0x1, 10, 22, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemBrainsConsensusHandler;
}

@end

void OrgMinimaSystemBrainsConsensusHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemBrainsConsensusHandler *self, OrgMinimaSystemMain *zMain) {
  OrgMinimaSystemSystemHandler_initWithOrgMinimaSystemMain_withNSString_(self, zMain, @"CONSENSUS");
  self->mPrintChain_ = false;
  JreStrongAssignAndConsume(&self->mMainDB_, new_OrgMinimaDatabaseMinimaDB_init());
  JreStrongAssignAndConsume(&self->mListeners_, new_JavaUtilArrayList_init());
  JreStrongAssignAndConsume(&self->mConsensusTxn_, new_OrgMinimaSystemBrainsConsensusTxn_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self->mMainDB_, self));
  JreStrongAssignAndConsume(&self->mConsensusNet_, new_OrgMinimaSystemBrainsConsensusNet_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self->mMainDB_, self));
  JreStrongAssignAndConsume(&self->mConsensusUser_, new_OrgMinimaSystemBrainsConsensusUser_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self->mMainDB_, self));
  JreStrongAssignAndConsume(&self->mConsensusPrint_, new_OrgMinimaSystemBrainsConsensusPrint_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self->mMainDB_, self));
  JreStrongAssignAndConsume(&self->mConsensusBackup_, new_OrgMinimaSystemBrainsConsensusBackup_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self->mMainDB_, self));
  [self PostTimerMessageWithOrgMinimaUtilsMessagesTimerMessage:create_OrgMinimaUtilsMessagesTimerMessage_initWithInt_withNSString_(2000, OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK)];
}

OrgMinimaSystemBrainsConsensusHandler *new_OrgMinimaSystemBrainsConsensusHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemBrainsConsensusHandler, initWithOrgMinimaSystemMain_, zMain)
}

OrgMinimaSystemBrainsConsensusHandler *create_OrgMinimaSystemBrainsConsensusHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemBrainsConsensusHandler, initWithOrgMinimaSystemMain_, zMain)
}

OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusHandler_getMainDB(OrgMinimaSystemBrainsConsensusHandler *self) {
  return self->mMainDB_;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemBrainsConsensusHandler)
