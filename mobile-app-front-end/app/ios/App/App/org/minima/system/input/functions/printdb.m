//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/printdb.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusPrint.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/functions/printdb.h"
#include "org/minima/utils/ResponseStream.h"
#include "org/minima/utils/messages/Message.h"

@implementation OrgMinimaSystemInputFunctionsprintdb

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemInputFunctionsprintdb_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput {
  jboolean coins = false;
  jboolean txpow = false;
  jboolean mmr = false;
  jboolean tree = false;
  jint len = ((IOSObjectArray *) nil_chk(zInput))->size_;
  if (len == 1) {
    [((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) endStatusWithBoolean:true withNSString:@"Must choose at least one table"];
    return;
  }
  else {
    for (jint i = 1; i < len; i++) {
      if ([((NSString *) nil_chk(IOSObjectArray_Get(zInput, i))) isEqual:@"coins"]) {
        coins = true;
      }
      else if ([((NSString *) nil_chk(IOSObjectArray_Get(zInput, i))) isEqual:@"txpow"]) {
        txpow = true;
      }
      else if ([((NSString *) nil_chk(IOSObjectArray_Get(zInput, i))) isEqual:@"mmr"]) {
        mmr = true;
      }
      else if ([((NSString *) nil_chk(IOSObjectArray_Get(zInput, i))) isEqual:@"tree"]) {
        tree = true;
      }
    }
  }
  OrgMinimaUtilsMessagesMessage *msg = [self getResponseMessageWithNSString:OrgMinimaSystemBrainsConsensusPrint_CONSENSUS_PRINTCHAIN];
  (void) [((OrgMinimaUtilsMessagesMessage *) nil_chk(msg)) addBooleanWithNSString:@"coins" withBoolean:coins];
  (void) [msg addBooleanWithNSString:@"txpow" withBoolean:txpow];
  (void) [msg addBooleanWithNSString:@"mmr" withBoolean:mmr];
  (void) [msg addBooleanWithNSString:@"tree" withBoolean:tree];
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
}

- (OrgMinimaSystemInputCommandFunction *)getNewFunction {
  return new_OrgMinimaSystemInputFunctionsprintdb_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemInputCommandFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(doFunctionWithNSStringArray:);
  methods[2].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "doFunction", "[LNSString;", "LJavaLangException;" };
  static const J2ObjcClassInfo _OrgMinimaSystemInputFunctionsprintdb = { "printdb", "org.minima.system.input.functions", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemInputFunctionsprintdb;
}

@end

void OrgMinimaSystemInputFunctionsprintdb_init(OrgMinimaSystemInputFunctionsprintdb *self) {
  OrgMinimaSystemInputCommandFunction_initWithNSString_(self, @"printdb");
  [self setHelpWithNSString:@"(coins) (txpow) (mmr) (tree)" withNSString:@"Print out sections of the database. Useful DEBUG function. TREE ONLY works on command line.. :(" withNSString:@""];
}

OrgMinimaSystemInputFunctionsprintdb *new_OrgMinimaSystemInputFunctionsprintdb_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemInputFunctionsprintdb, init)
}

OrgMinimaSystemInputFunctionsprintdb *create_OrgMinimaSystemInputFunctionsprintdb_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemInputFunctionsprintdb, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemInputFunctionsprintdb)

J2OBJC_NAME_MAPPING(OrgMinimaSystemInputFunctionsprintdb, "org.minima.system.input.functions", "OrgMinimaSystemInputFunctions")