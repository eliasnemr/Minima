//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/gimme50.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/functions/gimme50.h"
#include "org/minima/utils/messages/Message.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaSystemInputFunctionsgimme50)

OrgMinimaObjectsBaseMiniHash *OrgMinimaSystemInputFunctionsgimme50_COINID_INPUT;

@implementation OrgMinimaSystemInputFunctionsgimme50

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemInputFunctionsgimme50_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput {
  OrgMinimaUtilsMessagesMessage *msg = [self getResponseMessageWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_GIMME50];
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
}

- (OrgMinimaSystemInputCommandFunction *)getNewFunction {
  return create_OrgMinimaSystemInputFunctionsgimme50_init();
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
  static const J2ObjcFieldInfo fields[] = {
    { "COINID_INPUT", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x9, -1, 3, -1, -1 },
  };
  static const void *ptrTable[] = { "doFunction", "[LNSString;", "LJavaLangException;", &OrgMinimaSystemInputFunctionsgimme50_COINID_INPUT };
  static const J2ObjcClassInfo _OrgMinimaSystemInputFunctionsgimme50 = { "gimme50", "org.minima.system.input.functions", ptrTable, methods, fields, 7, 0x1, 3, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemInputFunctionsgimme50;
}

+ (void)initialize {
  if (self == [OrgMinimaSystemInputFunctionsgimme50 class]) {
    JreStrongAssignAndConsume(&OrgMinimaSystemInputFunctionsgimme50_COINID_INPUT, new_OrgMinimaObjectsBaseMiniHash_initWithNSString_(@"0xFEED50FEED50FEED50FEED50"));
    J2OBJC_SET_INITIALIZED(OrgMinimaSystemInputFunctionsgimme50)
  }
}

@end

void OrgMinimaSystemInputFunctionsgimme50_init(OrgMinimaSystemInputFunctionsgimme50 *self) {
  OrgMinimaSystemInputCommandFunction_initWithNSString_(self, @"gimme50");
  [self setHelpWithNSString:@"" withNSString:@"Give yourself 50 TestNet Mini!" withNSString:@""];
}

OrgMinimaSystemInputFunctionsgimme50 *new_OrgMinimaSystemInputFunctionsgimme50_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemInputFunctionsgimme50, init)
}

OrgMinimaSystemInputFunctionsgimme50 *create_OrgMinimaSystemInputFunctionsgimme50_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemInputFunctionsgimme50, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemInputFunctionsgimme50)

J2OBJC_NAME_MAPPING(OrgMinimaSystemInputFunctionsgimme50, "org.minima.system.input.functions", "OrgMinimaSystemInputFunctions")