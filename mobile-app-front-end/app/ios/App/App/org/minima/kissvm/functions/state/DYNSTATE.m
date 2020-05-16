//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/state/DYNSTATE.java
//

#include "J2ObjC_source.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/state/DYNSTATE.h"
#include "org/minima/kissvm/values/BooleanValue.h"
#include "org/minima/kissvm/values/ScriptValue.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmFunctionsStateDYNSTATE

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsStateDYNSTATE_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  jint statenum = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaKissvmContract:zContract])) getNumber])) getAsInt];
  OrgMinimaKissvmValuesValue *val = [((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:1])) getValueWithOrgMinimaKissvmContract:zContract];
  jint type = [((OrgMinimaKissvmValuesValue *) nil_chk(val)) getValueType];
  jboolean setsuccess = false;
  if (type == OrgMinimaKissvmValuesScriptValue_VALUE_SCRIPT) {
    setsuccess = [((OrgMinimaKissvmContract *) nil_chk(zContract)) setDYNStateWithInt:statenum withNSString:JreStrcat("$$$", @"[ ", [val description], @" ]")];
  }
  else {
    setsuccess = [((OrgMinimaKissvmContract *) nil_chk(zContract)) setDYNStateWithInt:statenum withNSString:[val description]];
  }
  return new_OrgMinimaKissvmValuesBooleanValue_initWithBoolean_(setsuccess);
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return new_OrgMinimaKissvmFunctionsStateDYNSTATE_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaKissvmValuesValue;", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LOrgMinimaKissvmFunctionsMinimaFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(runFunctionWithOrgMinimaKissvmContract:);
  methods[2].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "runFunction", "LOrgMinimaKissvmContract;", "LOrgMinimaKissvmExceptionsExecutionException;" };
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsStateDYNSTATE = { "DYNSTATE", "org.minima.kissvm.functions.state", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsStateDYNSTATE;
}

@end

void OrgMinimaKissvmFunctionsStateDYNSTATE_init(OrgMinimaKissvmFunctionsStateDYNSTATE *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"DYNSTATE");
}

OrgMinimaKissvmFunctionsStateDYNSTATE *new_OrgMinimaKissvmFunctionsStateDYNSTATE_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsStateDYNSTATE, init)
}

OrgMinimaKissvmFunctionsStateDYNSTATE *create_OrgMinimaKissvmFunctionsStateDYNSTATE_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsStateDYNSTATE, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsStateDYNSTATE)