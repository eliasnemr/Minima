//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/base/GET.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/base/GET.h"
#include "org/minima/kissvm/values/NumberValue.h"
#include "org/minima/kissvm/values/Value.h"

@implementation OrgMinimaKissvmFunctionsBaseGET

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsBaseGET_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  NSString *ps = @"";
  JavaUtilArrayList *params = [self getAllParameters];
  for (id<OrgMinimaKissvmExpressionsExpression> __strong exp in nil_chk(params)) {
    JreStrAppend(&ps, "$C", [((NSString *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(exp)) getValueWithOrgMinimaKissvmContract:zContract])) description])) java_trim], ',');
  }
  OrgMinimaKissvmValuesValue *val = [((OrgMinimaKissvmContract *) nil_chk(zContract)) getVariableWithNSString:ps];
  if (val == nil) {
    return create_OrgMinimaKissvmValuesNumberValue_initWithInt_(0);
  }
  return val;
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaKissvmFunctionsBaseGET_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsBaseGET = { "GET", "org.minima.kissvm.functions.base", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsBaseGET;
}

@end

void OrgMinimaKissvmFunctionsBaseGET_init(OrgMinimaKissvmFunctionsBaseGET *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"GET");
}

OrgMinimaKissvmFunctionsBaseGET *new_OrgMinimaKissvmFunctionsBaseGET_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsBaseGET, init)
}

OrgMinimaKissvmFunctionsBaseGET *create_OrgMinimaKissvmFunctionsBaseGET_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsBaseGET, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsBaseGET)
