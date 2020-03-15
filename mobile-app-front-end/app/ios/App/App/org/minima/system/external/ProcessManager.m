//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/external/ProcessManager.java
//

#include "J2ObjC_source.h"
#include "java/lang/Boolean.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/SystemHandler.h"
#include "org/minima/system/external/ProcessManager.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/messages/Message.h"

NSString *OrgMinimaSystemExternalProcessManager_PROCESS_TXNCALL = @"PROCESS_TXNCALL";
NSString *OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN = @"PROCESS_RELCOIN";

@implementation OrgMinimaSystemExternalProcessManager

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain {
  OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(self, zMain);
  return self;
}

- (void)setTXNCallFunctionWithNSString:(NSString *)zFunction {
  JreStrongAssign(&mTxnCall_, [((NSString *) nil_chk(zFunction)) java_trim]);
}

- (void)setRelCoinWithNSString:(NSString *)zPostURL {
  JreStrongAssign(&mRelCoin_, [((NSString *) nil_chk(zPostURL)) java_trim]);
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((NSString *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) getMessageType])) isEqual:OrgMinimaSystemExternalProcessManager_PROCESS_TXNCALL]) {
  }
  else if ([((NSString *) nil_chk([zMessage getMessageType])) isEqual:OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN]) {
    if (![((NSString *) nil_chk(mRelCoin_)) isEqual:@""]) {
      OrgMinimaObjectsCoin *cc = (OrgMinimaObjectsCoin *) cast_chk([zMessage getObjectWithNSString:@"coin"], [OrgMinimaObjectsCoin class]);
      OrgMinimaObjectsBaseMiniHash *transid = (OrgMinimaObjectsBaseMiniHash *) cast_chk([zMessage getObjectWithNSString:@"transid"], [OrgMinimaObjectsBaseMiniHash class]);
      OrgMinimaObjectsBaseMiniHash *txpowid = (OrgMinimaObjectsBaseMiniHash *) cast_chk([zMessage getObjectWithNSString:@"txpowid"], [OrgMinimaObjectsBaseMiniHash class]);
      jboolean spent = [zMessage getBooleanWithNSString:@"spent"];
      OrgMinimaUtilsJsonJSONObject *data = create_OrgMinimaUtilsJsonJSONObject_init();
      [data putWithId:@"coin" withId:[((OrgMinimaObjectsCoin *) nil_chk(cc)) toJSON]];
      [data putWithId:@"transid" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(transid)) description]];
      [data putWithId:@"txpowid" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(txpowid)) description]];
      [data putWithId:@"spent" withId:JavaLangBoolean_valueOfWithBoolean_(spent)];
    }
  }
}

- (void)dealloc {
  RELEASE_(mTxnCall_);
  RELEASE_(mRelCoin_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 4, 5, 6, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemMain:);
  methods[1].selector = @selector(setTXNCallFunctionWithNSString:);
  methods[2].selector = @selector(setRelCoinWithNSString:);
  methods[3].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "PROCESS_TXNCALL", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 7, -1, -1 },
    { "PROCESS_RELCOIN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 8, -1, -1 },
    { "mTxnCall_", "LNSString;", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mRelCoin_", "LNSString;", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemMain;", "setTXNCallFunction", "LNSString;", "setRelCoin", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", &OrgMinimaSystemExternalProcessManager_PROCESS_TXNCALL, &OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN };
  static const J2ObjcClassInfo _OrgMinimaSystemExternalProcessManager = { "ProcessManager", "org.minima.system.external", ptrTable, methods, fields, 7, 0x1, 4, 4, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemExternalProcessManager;
}

@end

void OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemExternalProcessManager *self, OrgMinimaSystemMain *zMain) {
  OrgMinimaSystemSystemHandler_initWithOrgMinimaSystemMain_withNSString_(self, zMain, @"PROCESS");
  JreStrongAssign(&self->mTxnCall_, @"");
  JreStrongAssign(&self->mRelCoin_, @"");
}

OrgMinimaSystemExternalProcessManager *new_OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemExternalProcessManager, initWithOrgMinimaSystemMain_, zMain)
}

OrgMinimaSystemExternalProcessManager *create_OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemExternalProcessManager, initWithOrgMinimaSystemMain_, zMain)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemExternalProcessManager)