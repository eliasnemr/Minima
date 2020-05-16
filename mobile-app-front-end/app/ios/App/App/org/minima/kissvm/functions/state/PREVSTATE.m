//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/state/PREVSTATE.java
//

#include "J2ObjC_source.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/state/PREVSTATE.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmFunctionsStatePREVSTATE

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsStatePREVSTATE_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  jint statenum = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaKissvmContract:zContract])) getNumber])) getAsInt];
  return [((OrgMinimaKissvmContract *) nil_chk(zContract)) getPrevStateWithInt:statenum];
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return new_OrgMinimaKissvmFunctionsStatePREVSTATE_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsStatePREVSTATE = { "PREVSTATE", "org.minima.kissvm.functions.state", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsStatePREVSTATE;
}

@end

void OrgMinimaKissvmFunctionsStatePREVSTATE_init(OrgMinimaKissvmFunctionsStatePREVSTATE *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"PREVSTATE");
}

OrgMinimaKissvmFunctionsStatePREVSTATE *new_OrgMinimaKissvmFunctionsStatePREVSTATE_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsStatePREVSTATE, init)
}

OrgMinimaKissvmFunctionsStatePREVSTATE *create_OrgMinimaKissvmFunctionsStatePREVSTATE_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsStatePREVSTATE, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsStatePREVSTATE)