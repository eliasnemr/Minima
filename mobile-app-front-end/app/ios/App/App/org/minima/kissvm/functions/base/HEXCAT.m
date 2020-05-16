//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/base/HEXCAT.java
//

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/lang/System.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/exceptions/ExecutionException.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/base/HEXCAT.h"
#include "org/minima/kissvm/values/HEXValue.h"
#include "org/minima/kissvm/values/Value.h"

@implementation OrgMinimaKissvmFunctionsBaseHEXCAT

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsBaseHEXCAT_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  JavaUtilArrayList *params = [self getAllParameters];
  jint paramnum = [((JavaUtilArrayList *) nil_chk(params)) size];
  IOSObjectArray *parambytes = [IOSObjectArray newArrayWithLength:paramnum type:IOSClass_byteArray(1)];
  if (paramnum < 1) {
    @throw new_OrgMinimaKissvmExceptionsExecutionException_initWithNSString_(@"HEXCAT requires at least 1 parameter");
  }
  jint totlen = 0;
  jint counter = 0;
  for (id<OrgMinimaKissvmExpressionsExpression> __strong exp in params) {
    (void) IOSObjectArray_Set(parambytes, counter, [((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(exp)) getValueWithOrgMinimaKissvmContract:zContract])) getRawData]);
    totlen += ((IOSByteArray *) nil_chk(IOSObjectArray_Get(parambytes, counter)))->size_;
    counter++;
  }
  IOSByteArray *result = [IOSByteArray newArrayWithLength:totlen];
  jint pos = 0;
  for (jint i = 0; i < counter; i++) {
    JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(IOSObjectArray_Get(parambytes, i), 0, result, pos, ((IOSByteArray *) nil_chk(IOSObjectArray_Get(parambytes, i)))->size_);
    pos += ((IOSByteArray *) nil_chk(IOSObjectArray_Get(parambytes, i)))->size_;
  }
  return new_OrgMinimaKissvmValuesHEXValue_initWithByteArray_(result);
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return new_OrgMinimaKissvmFunctionsBaseHEXCAT_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsBaseHEXCAT = { "HEXCAT", "org.minima.kissvm.functions.base", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsBaseHEXCAT;
}

@end

void OrgMinimaKissvmFunctionsBaseHEXCAT_init(OrgMinimaKissvmFunctionsBaseHEXCAT *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"HEXCAT");
}

OrgMinimaKissvmFunctionsBaseHEXCAT *new_OrgMinimaKissvmFunctionsBaseHEXCAT_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsBaseHEXCAT, init)
}

OrgMinimaKissvmFunctionsBaseHEXCAT *create_OrgMinimaKissvmFunctionsBaseHEXCAT_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsBaseHEXCAT, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsBaseHEXCAT)