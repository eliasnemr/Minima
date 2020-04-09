//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/maths/BITGET.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/lang/Math.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/exceptions/ExecutionException.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/maths/BITGET.h"
#include "org/minima/kissvm/values/BooleanValue.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmFunctionsMathsBITGET

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsMathsBITGET_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  IOSByteArray *data = [((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaKissvmContract:zContract])) getRawData];
  jint datalen = ((IOSByteArray *) nil_chk(data))->size_;
  jint bit = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:1])) getValueWithOrgMinimaKissvmContract:zContract])) getNumber])) getAsInt];
  jint reqbyte = JreFpToInt(JavaLangMath_floorWithDouble_(bit / 8));
  if (reqbyte >= datalen) {
    @throw create_OrgMinimaKissvmExceptionsExecutionException_initWithNSString_(JreStrcat("$I$I", @"Overflow Bit set. Total Bytes ", datalen, @". Requested ", reqbyte));
  }
  jint bitbyte = bit - (reqbyte * 8);
  jboolean isSet = (IOSByteArray_Get(data, reqbyte) & (JreLShift32(1, bitbyte))) != 0;
  return create_OrgMinimaKissvmValuesBooleanValue_initWithBoolean_(isSet);
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaKissvmFunctionsMathsBITGET_init();
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
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsMathsBITGET = { "BITGET", "org.minima.kissvm.functions.maths", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsMathsBITGET;
}

@end

void OrgMinimaKissvmFunctionsMathsBITGET_init(OrgMinimaKissvmFunctionsMathsBITGET *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"BITGET");
}

OrgMinimaKissvmFunctionsMathsBITGET *new_OrgMinimaKissvmFunctionsMathsBITGET_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsMathsBITGET, init)
}

OrgMinimaKissvmFunctionsMathsBITGET *create_OrgMinimaKissvmFunctionsMathsBITGET_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsMathsBITGET, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsMathsBITGET)
