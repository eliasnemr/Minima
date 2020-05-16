//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/chainsha.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/lang/Integer.h"
#include "java/util/ArrayList.h"
#include "org/minima/objects/base/MiniScript.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusUser.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/functions/chainsha.h"
#include "org/minima/utils/messages/Message.h"

@implementation OrgMinimaSystemInputFunctionschainsha

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemInputFunctionschainsha_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput {
  OrgMinimaUtilsMessagesMessage *msg = [self getResponseMessageWithNSString:OrgMinimaSystemBrainsConsensusUser_CONSENSUS_MMRTREE];
  (void) [((OrgMinimaUtilsMessagesMessage *) nil_chk(msg)) addIntWithNSString:@"bitlength" withInt:JavaLangInteger_parseIntWithNSString_(IOSObjectArray_Get(nil_chk(zInput), 1))];
  JavaUtilArrayList *data = new_JavaUtilArrayList_init();
  for (jint i = 2; i < zInput->size_; i++) {
    [data addWithId:new_OrgMinimaObjectsBaseMiniScript_initWithNSString_(IOSObjectArray_Get(zInput, i))];
  }
  (void) [msg addObjectWithNSString:@"leaves" withId:data];
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:msg];
}

- (OrgMinimaSystemInputCommandFunction *)getNewFunction {
  return new_OrgMinimaSystemInputFunctionschainsha_init();
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
  static const J2ObjcClassInfo _OrgMinimaSystemInputFunctionschainsha = { "chainsha", "org.minima.system.input.functions", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemInputFunctionschainsha;
}

@end

void OrgMinimaSystemInputFunctionschainsha_init(OrgMinimaSystemInputFunctionschainsha *self) {
  OrgMinimaSystemInputCommandFunction_initWithNSString_(self, @"chainsha");
  [self setHelpWithNSString:@"[bitlength] [data_list]" withNSString:@"Build an MMR Hash Tree from the data list. Use with CHAINSHA in script." withNSString:@""];
}

OrgMinimaSystemInputFunctionschainsha *new_OrgMinimaSystemInputFunctionschainsha_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemInputFunctionschainsha, init)
}

OrgMinimaSystemInputFunctionschainsha *create_OrgMinimaSystemInputFunctionschainsha_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemInputFunctionschainsha, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemInputFunctionschainsha)

J2OBJC_NAME_MAPPING(OrgMinimaSystemInputFunctionschainsha, "org.minima.system.input.functions", "OrgMinimaSystemInputFunctions")