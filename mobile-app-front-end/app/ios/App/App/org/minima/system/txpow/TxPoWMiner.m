//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/txpow/TxPoWMiner.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/lang/System.h"
#include "java/lang/Thread.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/Witness.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniInteger.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/SystemHandler.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusNet.h"
#include "org/minima/system/txpow/TxPoWMiner.h"
#include "org/minima/utils/Crypto.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/messages/Message.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaSystemTxpowTxPoWMiner)

OrgMinimaObjectsBaseMiniData *OrgMinimaSystemTxpowTxPoWMiner_BASE_TXN;
OrgMinimaObjectsBaseMiniData *OrgMinimaSystemTxpowTxPoWMiner_BASE_BLOCK;
NSString *OrgMinimaSystemTxpowTxPoWMiner_TXMINER_TESTHASHING = @"MINE_TESTHASHING";
NSString *OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MINETXPOW = @"MINE_MINETXPOW";
NSString *OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MEGAMINER = @"MINE_MEGAMINER";

@implementation OrgMinimaSystemTxpowTxPoWMiner

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain {
  OrgMinimaSystemTxpowTxPoWMiner_initWithOrgMinimaSystemMain_(self, zMain);
  return self;
}

- (void)setAutoMiningWithBoolean:(jboolean)zMining {
  mAutoMining_ = zMining;
}

- (jboolean)isAutoMining {
  return mAutoMining_;
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MINETXPOW]) {
    OrgMinimaObjectsTxPOW *txpow = (OrgMinimaObjectsTxPOW *) cast_chk([zMessage getObjectWithNSString:@"txpow"], [OrgMinimaObjectsTxPOW class]);
    OrgMinimaObjectsBaseMiniInteger *nonce = new_OrgMinimaObjectsBaseMiniInteger_initWithInt_(0);
    OrgMinimaObjectsBaseMiniData *hash_ = nil;
    jboolean mining = true;
    jlong currentTime = JavaLangSystem_currentTimeMillis();
    jlong maxTime = currentTime + 5000;
    if (mShowTXPOWMine_) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$J", @"START TXPOW MINING ", currentTime));
    }
    while (mining && currentTime < maxTime && [self isRunning]) {
      [((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) setNonceWithOrgMinimaObjectsBaseMiniInteger:nonce];
      hash_ = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectWithOrgMinimaUtilsStreamable:txpow];
      if ([((OrgMinimaObjectsBaseMiniData *) nil_chk(hash_)) isLessWithOrgMinimaObjectsBaseMiniData:[txpow getTxnDifficulty]]) {
        mining = false;
        break;
      }
      nonce = [((OrgMinimaObjectsBaseMiniInteger *) nil_chk(nonce)) increment];
      currentTime = JavaLangSystem_currentTimeMillis();
    }
    if (mining) {
      if (mShowTXPOWMine_) {
        OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@CJ", @"NOTFINISHED ", nonce, ' ', currentTime));
      }
      OrgMinimaUtilsMessagesMessage *sametr = [((OrgMinimaUtilsMessagesMessage *) nil_chk([new_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_SENDTRANS) addObjectWithNSString:@"transaction" withId:[((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) getTransaction]])) addObjectWithNSString:@"witness" withId:[txpow getWitness]];
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:sametr];
    }
    else {
      if (mShowTXPOWMine_) {
        OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@CJ", @"TXPOW MINED! ", nonce, ' ', currentTime));
      }
      [((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) calculateTXPOWID];
      OrgMinimaUtilsMessagesMessage *msg = [new_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_FINISHED_MINE) addObjectWithNSString:@"txpow" withId:txpow];
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
    }
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MEGAMINER]) {
    OrgMinimaObjectsTxPOW *txpow = (OrgMinimaObjectsTxPOW *) cast_chk([zMessage getObjectWithNSString:@"txpow"], [OrgMinimaObjectsTxPOW class]);
    jlong currentTime = JavaLangSystem_currentTimeMillis();
    jlong maxTime = currentTime + 2000;
    jboolean mining = true;
    OrgMinimaObjectsBaseMiniData *hash_ = nil;
    while (mining && currentTime < maxTime && [self isRunning]) {
      hash_ = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectWithOrgMinimaUtilsStreamable:txpow];
      if ([((OrgMinimaObjectsBaseMiniData *) nil_chk(hash_)) isLessWithOrgMinimaObjectsBaseMiniData:[((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) getBlockDifficulty]]) {
        mining = false;
      }
      else {
        [txpow setNonceWithOrgMinimaObjectsBaseMiniInteger:[((OrgMinimaObjectsBaseMiniInteger *) nil_chk([txpow getNonce])) increment]];
      }
      currentTime = JavaLangSystem_currentTimeMillis();
    }
    if (![self isRunning]) {
      return;
    }
    [((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) calculateTXPOWID];
    if ([txpow isBlock]) {
      OrgMinimaUtilsMessagesMessage *msg = [new_OrgMinimaUtilsMessagesMessage_initWithNSString_(JreLoadStatic(OrgMinimaSystemBrainsConsensusNet, CONSENSUS_NET_TXPOW)) addObjectWithNSString:@"txpow" withId:txpow];
      [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
    }
    JavaLangThread_sleepWithLong_(200);
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_MINEBLOCK];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemTxpowTxPoWMiner_TXMINER_TESTHASHING]) {
    jlong timenow = JavaLangSystem_currentTimeMillis();
    IOSByteArray *data = [IOSByteArray newArrayWithLength:32];
    OrgMinimaUtilsMinimaLogger_logWithNSString_(@"Testing hashing on this machine.. please wait..");
    for (jint i = 0; i < 10000000; i++) {
      IOSByteArray *hash_ = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashDataWithByteArray:data];
    }
    jdouble diff = (jdouble) (JavaLangSystem_currentTimeMillis() - timenow) / (jdouble) 1000;
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$D$", @"Finished. 10,000,000 hashes took ", diff, @" seconds"));
    jdouble speed = (10000000 / diff) / 1000000;
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$D$", @"Speed : ", speed, @" MHashes/sec"));
  }
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 3, 4, 5, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemMain:);
  methods[1].selector = @selector(setAutoMiningWithBoolean:);
  methods[2].selector = @selector(isAutoMining);
  methods[3].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "BASE_TXN", "LOrgMinimaObjectsBaseMiniData;", .constantValue.asLong = 0, 0x19, -1, 6, -1, -1 },
    { "BASE_BLOCK", "LOrgMinimaObjectsBaseMiniData;", .constantValue.asLong = 0, 0x19, -1, 7, -1, -1 },
    { "TXMINER_TESTHASHING", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 8, -1, -1 },
    { "TXMINER_MINETXPOW", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 9, -1, -1 },
    { "TXMINER_MEGAMINER", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "mAutoMining_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mShowTXPOWMine_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemMain;", "setAutoMining", "Z", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", &OrgMinimaSystemTxpowTxPoWMiner_BASE_TXN, &OrgMinimaSystemTxpowTxPoWMiner_BASE_BLOCK, &OrgMinimaSystemTxpowTxPoWMiner_TXMINER_TESTHASHING, &OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MINETXPOW, &OrgMinimaSystemTxpowTxPoWMiner_TXMINER_MEGAMINER };
  static const J2ObjcClassInfo _OrgMinimaSystemTxpowTxPoWMiner = { "TxPoWMiner", "org.minima.system.txpow", ptrTable, methods, fields, 7, 0x1, 4, 7, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemTxpowTxPoWMiner;
}

+ (void)initialize {
  if (self == [OrgMinimaSystemTxpowTxPoWMiner class]) {
    OrgMinimaSystemTxpowTxPoWMiner_BASE_TXN = JreLoadStatic(OrgMinimaUtilsCrypto, MEGA_HASH);
    OrgMinimaSystemTxpowTxPoWMiner_BASE_BLOCK = JreLoadStatic(OrgMinimaUtilsCrypto, MAX_HASH);
    J2OBJC_SET_INITIALIZED(OrgMinimaSystemTxpowTxPoWMiner)
  }
}

@end

void OrgMinimaSystemTxpowTxPoWMiner_initWithOrgMinimaSystemMain_(OrgMinimaSystemTxpowTxPoWMiner *self, OrgMinimaSystemMain *zMain) {
  OrgMinimaSystemSystemHandler_initWithOrgMinimaSystemMain_withNSString_(self, zMain, @"TXMINER");
  self->mAutoMining_ = false;
  self->mShowTXPOWMine_ = false;
}

OrgMinimaSystemTxpowTxPoWMiner *new_OrgMinimaSystemTxpowTxPoWMiner_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemTxpowTxPoWMiner, initWithOrgMinimaSystemMain_, zMain)
}

OrgMinimaSystemTxpowTxPoWMiner *create_OrgMinimaSystemTxpowTxPoWMiner_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemTxpowTxPoWMiner, initWithOrgMinimaSystemMain_, zMain)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemTxpowTxPoWMiner)