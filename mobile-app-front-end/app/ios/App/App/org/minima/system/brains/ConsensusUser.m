//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/brains/ConsensusUser.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/ByteArrayInputStream.h"
#include "java/io/ByteArrayOutputStream.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "org/minima/GlobalParams.h"
#include "org/minima/database/MinimaDB.h"
#include "org/minima/database/coindb/CoinDB.h"
#include "org/minima/database/coindb/CoinDBRow.h"
#include "org/minima/database/mmr/MMRData.h"
#include "org/minima/database/mmr/MMREntry.h"
#include "org/minima/database/mmr/MMRProof.h"
#include "org/minima/database/mmr/MMRSet.h"
#include "org/minima/database/txpowtree/BlockTree.h"
#include "org/minima/database/txpowtree/BlockTreeNode.h"
#include "org/minima/database/userdb/UserDB.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/values/HEXValue.h"
#include "org/minima/miniscript/values/NumberValue.h"
#include "org/minima/miniscript/values/ScriptValue.h"
#include "org/minima/objects/Address.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/PubPrivKey.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusUser.h"
#include "org/minima/system/input/InputHandler.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/messages/Message.h"

@interface OrgMinimaSystemBrainsConsensusUser ()

- (OrgMinimaDatabaseMinimaDB *)getMainDB;

@end

__attribute__((unused)) static OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusUser_getMainDB(OrgMinimaSystemBrainsConsensusUser *self);

NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_PREFIX = @"CONSENSUSUSER_";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWKEY = @"CONSENSUSUSER_NEWKEY";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSIMPLE = @"CONSENSUSUSER_NEWSIMPLE";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSCRIPT = @"CONSENSUSUSER_NEWSCRIPT";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_RUNSCRIPT = @"CONSENSUSUSER_RUNSCRIPT";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTKEY = @"CONSENSUSUSER_EXPORTKEY";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTKEY = @"CONSENSUSUSER_IMPORTKEY";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTCOIN = @"CONSENSUSUSER_EXPORTCOIN";
NSString *OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTCOIN = @"CONSENSUSUSER_IMPORTCOIN";

@implementation OrgMinimaSystemBrainsConsensusUser

- (instancetype)initWithOrgMinimaDatabaseMinimaDB:(OrgMinimaDatabaseMinimaDB *)zDB
        withOrgMinimaSystemBrainsConsensusHandler:(OrgMinimaSystemBrainsConsensusHandler *)zHandler {
  OrgMinimaSystemBrainsConsensusUser_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(self, zDB, zHandler);
  return self;
}

- (OrgMinimaDatabaseMinimaDB *)getMainDB {
  return OrgMinimaSystemBrainsConsensusUser_getMainDB(self);
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSIMPLE]) {
    OrgMinimaObjectsAddress *addr = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) newSimpleAddress];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"address" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk([((OrgMinimaObjectsAddress *) nil_chk(addr)) getAddressData])) description]];
    [resp putWithId:@"script" withId:[((NSString *) nil_chk([addr getScript])) description]];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSCRIPT]) {
    NSString *script = [zMessage getStringWithNSString:@"script"];
    OrgMinimaObjectsAddress *addrchk = create_OrgMinimaObjectsAddress_initWithNSString_(script);
    NSString *scriptcheck = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) getScriptWithOrgMinimaObjectsBaseMiniHash:[addrchk getAddressData]];
    if (![((NSString *) nil_chk(scriptcheck)) isEqual:@""]) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, @"Address already exists..");
      return;
    }
    OrgMinimaObjectsAddress *addr = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) newScriptAddressWithNSString:script];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"address" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk([((OrgMinimaObjectsAddress *) nil_chk(addr)) getAddressData])) description]];
    [resp putWithId:@"script" withId:[((NSString *) nil_chk([addr getScript])) description]];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWKEY]) {
    OrgMinimaObjectsPubPrivKey *key = [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) newPublicKey];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"key" withId:[((OrgMinimaObjectsPubPrivKey *) nil_chk(key)) description]];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_RUNSCRIPT]) {
    NSString *script = [zMessage getStringWithNSString:@"script"];
    NSString *sigs = [zMessage getStringWithNSString:@"sigs"];
    script = OrgMinimaMiniscriptContract_cleanScriptWithNSString_(script);
    sigs = OrgMinimaMiniscriptContract_cleanScriptWithNSString_(sigs);
    OrgMinimaMiniscriptContract *cc = create_OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(script, sigs, create_OrgMinimaObjectsTransaction_init(), true);
    OrgMinimaObjectsBaseMiniNumber *blocknum = [((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getTopBlock];
    NSString *address = @"0x00";
    [cc setGlobalVariableWithNSString:@"@BLKNUM" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_(blocknum)];
    [cc setGlobalVariableWithNSString:@"@ADDRESS" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesHEXValue_initWithNSString_(address)];
    [cc setGlobalVariableWithNSString:@"@AMOUNT" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_(JreLoadStatic(OrgMinimaObjectsBaseMiniNumber, ZERO))];
    [cc setGlobalVariableWithNSString:@"@SCRIPT" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesScriptValue_initWithNSString_(script)];
    [cc run];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTCOIN]) {
    OrgMinimaObjectsBaseMiniData *data = (OrgMinimaObjectsBaseMiniData *) cast_chk([zMessage getObjectWithNSString:@"proof"], [OrgMinimaObjectsBaseMiniData class]);
    JavaIoByteArrayInputStream *bais = create_JavaIoByteArrayInputStream_initWithByteArray_([((OrgMinimaObjectsBaseMiniData *) nil_chk(data)) getData]);
    JavaIoDataInputStream *dis = create_JavaIoDataInputStream_initWithJavaIoInputStream_(bais);
    OrgMinimaDatabaseMmrMMRProof *proof = OrgMinimaDatabaseMmrMMRProof_ReadFromStreamWithJavaIoDataInputStream_(dis);
    OrgMinimaDatabaseMmrMMRSet *basemmr = [((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk([((OrgMinimaDatabaseTxpowtreeBlockTree *) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getMainTree])) getChainTip])) getMMRSet];
    jboolean valid = [((OrgMinimaDatabaseMmrMMRSet *) nil_chk(basemmr)) checkProofWithOrgMinimaDatabaseMmrMMRProof:proof];
    if (!valid) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, @"INVALID PROOF");
      return;
    }
    OrgMinimaDatabaseMmrMMRSet *proofmmr = [basemmr getParentAtTimeWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaDatabaseMmrMMRProof *) nil_chk(proof)) getBlockTime]];
    if (proofmmr == nil) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, JreStrcat("$@", @"Proof too old - no MMRSet found @ ", [proof getBlockTime]));
      return;
    }
    OrgMinimaDatabaseMmrMMREntry *entry_ = [proofmmr addExternalUnspentCoinWithOrgMinimaDatabaseMmrMMRProof:proof];
    if (entry_ == nil) {
      OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, false, @"Consensus error addding proof !");
      return;
    }
    [proofmmr finalizeSet];
    OrgMinimaObjectsCoin *cc = [((OrgMinimaDatabaseMmrMMRData *) nil_chk([entry_ getData])) getCoin];
    id<OrgMinimaDatabaseCoindbCoinDBRow> crow = [((id<OrgMinimaDatabaseCoindbCoinDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getCoinDB])) addCoinRowWithOrgMinimaObjectsCoin:cc];
    [((id<OrgMinimaDatabaseCoindbCoinDBRow>) nil_chk(crow)) setIsSpentWithBoolean:[((OrgMinimaDatabaseMmrMMRData *) nil_chk([entry_ getData])) isSpent]];
    [crow setIsInBlockWithBoolean:true];
    [crow setInBlockNumberWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaDatabaseMmrMMRData *) nil_chk([entry_ getData])) getInBlock]];
    [crow setMMREntryWithOrgMinimaObjectsBaseMiniNumber:[entry_ getEntry]];
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"proof" withId:[proof toJSON]];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTCOIN]) {
    OrgMinimaObjectsBaseMiniHash *coinid = (OrgMinimaObjectsBaseMiniHash *) cast_chk([zMessage getObjectWithNSString:@"coinid"], [OrgMinimaObjectsBaseMiniHash class]);
    OrgMinimaDatabaseMmrMMRSet *basemmr = [((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk([((OrgMinimaDatabaseTxpowtreeBlockTree *) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getMainTree])) getChainTip])) getMMRSet];
    OrgMinimaDatabaseMmrMMRSet *proofmmr = [((OrgMinimaDatabaseMmrMMRSet *) nil_chk(basemmr)) getParentAtTimeWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getTopBlock])) subWithOrgMinimaObjectsBaseMiniNumber:JreLoadStatic(OrgMinimaGlobalParams, MINIMA_CONFIRM_DEPTH)]];
    id<OrgMinimaDatabaseCoindbCoinDBRow> row = [((id<OrgMinimaDatabaseCoindbCoinDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getCoinDB])) getCoinRowWithOrgMinimaObjectsBaseMiniHash:coinid];
    OrgMinimaDatabaseMmrMMRProof *proof = [((OrgMinimaDatabaseMmrMMRSet *) nil_chk(proofmmr)) getProofWithOrgMinimaObjectsBaseMiniNumber:[((id<OrgMinimaDatabaseCoindbCoinDBRow>) nil_chk(row)) getMMREntry]];
    JavaIoByteArrayOutputStream *baos = create_JavaIoByteArrayOutputStream_init();
    JavaIoDataOutputStream *dos = create_JavaIoDataOutputStream_initWithJavaIoOutputStream_(baos);
    [((OrgMinimaDatabaseMmrMMRProof *) nil_chk(proof)) writeDataStreamWithJavaIoDataOutputStream:dos];
    [dos flush];
    OrgMinimaObjectsBaseMiniData *pd = create_OrgMinimaObjectsBaseMiniData_initWithByteArray_([baos toByteArray]);
    OrgMinimaUtilsJsonJSONObject *resp = OrgMinimaSystemInputInputHandler_getResponseJSONWithOrgMinimaUtilsMessagesMessage_(zMessage);
    [((OrgMinimaUtilsJsonJSONObject *) nil_chk(resp)) putWithId:@"coinid" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(coinid)) to0xString]];
    [resp putWithId:@"proof" withId:[proof toJSON]];
    [resp putWithId:@"data" withId:[pd to0xString]];
    OrgMinimaSystemInputInputHandler_endResponseWithOrgMinimaUtilsMessagesMessage_withBoolean_withNSString_(zMessage, true, @"");
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTKEY]) {
    OrgMinimaObjectsBaseMiniData *pubk = (OrgMinimaObjectsBaseMiniData *) cast_chk([zMessage getObjectWithNSString:@"publickey"], [OrgMinimaObjectsBaseMiniData class]);
    OrgMinimaObjectsBaseMiniData *priv = [((OrgMinimaObjectsPubPrivKey *) nil_chk([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) getPubPrivKeyWithOrgMinimaObjectsBaseMiniData:pubk])) getPrivateSeed];
    OrgMinimaUtilsMinimaLogger_logWithNSString_([((OrgMinimaObjectsBaseMiniData *) nil_chk(priv)) description]);
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTKEY]) {
    OrgMinimaObjectsBaseMiniData *priv = (OrgMinimaObjectsBaseMiniData *) cast_chk([zMessage getObjectWithNSString:@"privatekey"], [OrgMinimaObjectsBaseMiniData class]);
    OrgMinimaObjectsPubPrivKey *newkey = create_OrgMinimaObjectsPubPrivKey_initWithOrgMinimaObjectsBaseMiniData_(priv);
    if ([((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) getPubPrivKeyWithOrgMinimaObjectsBaseMiniData:[newkey getPublicKey]] != nil) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(@"Key allready in DB!");
    }
    else {
      [((id<OrgMinimaDatabaseUserdbUserDB>) nil_chk([((OrgMinimaDatabaseMinimaDB *) nil_chk(OrgMinimaSystemBrainsConsensusUser_getMainDB(self))) getUserDB])) newSimpleAddressWithOrgMinimaObjectsPubPrivKey:newkey];
    }
  }
}

- (void)dealloc {
  RELEASE_(mDB_);
  RELEASE_(mHandler_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseMinimaDB;", 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, 3, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaDatabaseMinimaDB:withOrgMinimaSystemBrainsConsensusHandler:);
  methods[1].selector = @selector(getMainDB);
  methods[2].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "CONSENSUS_PREFIX", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 4, -1, -1 },
    { "CONSENSUS_NEWKEY", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 5, -1, -1 },
    { "CONSENSUS_NEWSIMPLE", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 6, -1, -1 },
    { "CONSENSUS_NEWSCRIPT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 7, -1, -1 },
    { "CONSENSUS_RUNSCRIPT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 8, -1, -1 },
    { "CONSENSUS_EXPORTKEY", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 9, -1, -1 },
    { "CONSENSUS_IMPORTKEY", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "CONSENSUS_EXPORTCOIN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 11, -1, -1 },
    { "CONSENSUS_IMPORTCOIN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 12, -1, -1 },
    { "mDB_", "LOrgMinimaDatabaseMinimaDB;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mHandler_", "LOrgMinimaSystemBrainsConsensusHandler;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaDatabaseMinimaDB;LOrgMinimaSystemBrainsConsensusHandler;", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_PREFIX, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWKEY, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSIMPLE, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_NEWSCRIPT, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_RUNSCRIPT, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTKEY, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTKEY, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_EXPORTCOIN, &OrgMinimaSystemBrainsConsensusUser_CONSENSUS_IMPORTCOIN };
  static const J2ObjcClassInfo _OrgMinimaSystemBrainsConsensusUser = { "ConsensusUser", "org.minima.system.brains", ptrTable, methods, fields, 7, 0x1, 3, 11, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemBrainsConsensusUser;
}

@end

void OrgMinimaSystemBrainsConsensusUser_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaSystemBrainsConsensusUser *self, OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  NSObject_init(self);
  JreStrongAssign(&self->mDB_, zDB);
  JreStrongAssign(&self->mHandler_, zHandler);
}

OrgMinimaSystemBrainsConsensusUser *new_OrgMinimaSystemBrainsConsensusUser_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemBrainsConsensusUser, initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_, zDB, zHandler)
}

OrgMinimaSystemBrainsConsensusUser *create_OrgMinimaSystemBrainsConsensusUser_initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_(OrgMinimaDatabaseMinimaDB *zDB, OrgMinimaSystemBrainsConsensusHandler *zHandler) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemBrainsConsensusUser, initWithOrgMinimaDatabaseMinimaDB_withOrgMinimaSystemBrainsConsensusHandler_, zDB, zHandler)
}

OrgMinimaDatabaseMinimaDB *OrgMinimaSystemBrainsConsensusUser_getMainDB(OrgMinimaSystemBrainsConsensusUser *self) {
  return self->mDB_;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemBrainsConsensusUser)