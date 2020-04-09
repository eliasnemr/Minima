//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/cast/NUMBER.java
//

#include "J2ObjC_source.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/cast/NUMBER.h"
#include "org/minima/kissvm/values/NumberValue.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmFunctionsCastNUMBER

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsCastNUMBER_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  OrgMinimaKissvmValuesValue *hex = [((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaKissvmContract:zContract];
  OrgMinimaKissvmValuesNumberValue *num = create_OrgMinimaKissvmValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_([((OrgMinimaKissvmValuesValue *) nil_chk(hex)) getNumber]);
  return num;
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaKissvmFunctionsCastNUMBER_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsCastNUMBER = { "NUMBER", "org.minima.kissvm.functions.cast", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsCastNUMBER;
}

@end

void OrgMinimaKissvmFunctionsCastNUMBER_init(OrgMinimaKissvmFunctionsCastNUMBER *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"NUMBER");
}

OrgMinimaKissvmFunctionsCastNUMBER *new_OrgMinimaKissvmFunctionsCastNUMBER_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsCastNUMBER, init)
}

OrgMinimaKissvmFunctionsCastNUMBER *create_OrgMinimaKissvmFunctionsCastNUMBER_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsCastNUMBER, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsCastNUMBER)
