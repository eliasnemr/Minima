//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/maths/MAX.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/maths/MAX.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmFunctionsMathsMAX

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsMathsMAX_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  JavaUtilArrayList *params = [self getAllParameters];
  jboolean first = true;
  OrgMinimaKissvmValuesValue *max = nil;
  for (id<OrgMinimaKissvmExpressionsExpression> __strong exp in nil_chk(params)) {
    OrgMinimaKissvmValuesValue *chk = [((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(exp)) getValueWithOrgMinimaKissvmContract:zContract];
    if (first) {
      first = false;
      max = chk;
    }
    else {
      if ([((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk(chk)) getNumber])) isMoreWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaKissvmValuesValue *) nil_chk(max)) getNumber]]) {
        max = chk;
      }
    }
  }
  return max;
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaKissvmFunctionsMathsMAX_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsMathsMAX = { "MAX", "org.minima.kissvm.functions.maths", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsMathsMAX;
}

@end

void OrgMinimaKissvmFunctionsMathsMAX_init(OrgMinimaKissvmFunctionsMathsMAX *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"MAX");
}

OrgMinimaKissvmFunctionsMathsMAX *new_OrgMinimaKissvmFunctionsMathsMAX_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsMathsMAX, init)
}

OrgMinimaKissvmFunctionsMathsMAX *create_OrgMinimaKissvmFunctionsMathsMAX_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsMathsMAX, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsMathsMAX)
