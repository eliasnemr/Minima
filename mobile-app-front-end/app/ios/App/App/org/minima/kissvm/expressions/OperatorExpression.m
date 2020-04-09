//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/expressions/OperatorExpression.java
//

#include "J2ObjC_source.h"
#include "java/math/BigInteger.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/exceptions/ExecutionException.h"
#include "org/minima/kissvm/expressions/ConstantExpression.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/expressions/OperatorExpression.h"
#include "org/minima/kissvm/values/BooleanValue.h"
#include "org/minima/kissvm/values/HEXValue.h"
#include "org/minima/kissvm/values/NumberValue.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaKissvmExpressionsOperatorExpression

- (instancetype)initWithOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zLeft
                                                     withInt:(jint)zOperator {
  OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withInt_(self, zLeft, zOperator);
  return self;
}

- (instancetype)initWithOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zLeft
                    withOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zRight
                                                     withInt:(jint)zOperator {
  OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_(self, zLeft, zRight, zOperator);
  return self;
}

- (OrgMinimaKissvmValuesValue *)getValueWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  [((OrgMinimaKissvmContract *) nil_chk(zContract)) incrementInstructions];
  OrgMinimaKissvmValuesValue *ret = nil;
  OrgMinimaKissvmValuesValue *lval = [((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(mLeft_)) getValueWithOrgMinimaKissvmContract:zContract];
  OrgMinimaKissvmValuesValue *rval = [((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(mRight_)) getValueWithOrgMinimaKissvmContract:zContract];
  OrgMinimaObjectsBaseMiniNumber *left = [((OrgMinimaKissvmValuesValue *) nil_chk(lval)) getNumber];
  OrgMinimaObjectsBaseMiniNumber *right = [((OrgMinimaKissvmValuesValue *) nil_chk(rval)) getNumber];
  OrgMinimaObjectsBaseMiniData *ldata = [lval getMiniData];
  OrgMinimaObjectsBaseMiniData *rdata = [rval getMiniData];
  JavaMathBigInteger *lbig = [((OrgMinimaObjectsBaseMiniData *) nil_chk(ldata)) getDataValue];
  JavaMathBigInteger *rbig = [((OrgMinimaObjectsBaseMiniData *) nil_chk(rdata)) getDataValue];
  switch (mOperatorType_) {
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_ADD:
    ret = [lval addWithOrgMinimaKissvmValuesValue:rval];
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SUB:
    ret = [lval subWithOrgMinimaKissvmValuesValue:rval];
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MUL:
    ret = [lval multWithOrgMinimaKissvmValuesValue:rval];
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_DIV:
    if ([((OrgMinimaObjectsBaseMiniNumber *) nil_chk(right)) isEqualWithOrgMinimaObjectsBaseMiniNumber:JreLoadStatic(OrgMinimaObjectsBaseMiniNumber, ZERO)]) {
      @throw create_OrgMinimaKissvmExceptionsExecutionException_initWithNSString_(JreStrcat("$$", @"Divide By ZERO! ", [self description]));
    }
    ret = [lval divWithOrgMinimaKissvmValuesValue:rval];
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_NEG:
    ret = create_OrgMinimaKissvmValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_([((OrgMinimaObjectsBaseMiniNumber *) nil_chk(left)) multWithOrgMinimaObjectsBaseMiniNumber:JreLoadStatic(OrgMinimaObjectsBaseMiniNumber, MINUSONE)]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MODULO:
    ret = create_OrgMinimaKissvmValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_([((OrgMinimaObjectsBaseMiniNumber *) nil_chk(left)) moduloWithOrgMinimaObjectsBaseMiniNumber:right]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTL:
    ret = create_OrgMinimaKissvmValuesHEXValue_initWithNSString_([((OrgMinimaObjectsBaseMiniData *) nil_chk([ldata shiftlWithInt:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(right)) getAsInt]])) description]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTR:
    ret = create_OrgMinimaKissvmValuesHEXValue_initWithNSString_([((OrgMinimaObjectsBaseMiniData *) nil_chk([ldata shiftrWithInt:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(right)) getAsInt]])) description]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_AND:
    ret = create_OrgMinimaKissvmValuesHEXValue_initWithNSString_([((JavaMathBigInteger *) nil_chk([((JavaMathBigInteger *) nil_chk(lbig)) and__WithJavaMathBigInteger:rbig])) toStringWithInt:16]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_OR:
    ret = create_OrgMinimaKissvmValuesHEXValue_initWithNSString_([((JavaMathBigInteger *) nil_chk([((JavaMathBigInteger *) nil_chk(lbig)) or__WithJavaMathBigInteger:rbig])) toStringWithInt:16]);
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_XOR:
    ret = create_OrgMinimaKissvmValuesHEXValue_initWithNSString_([((JavaMathBigInteger *) nil_chk([((JavaMathBigInteger *) nil_chk(lbig)) xor__WithJavaMathBigInteger:rbig])) toStringWithInt:16]);
    break;
  }
  return ret;
}

- (NSString *)description {
  NSString *ret = @"ERROR";
  switch (mOperatorType_) {
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_ADD:
    ret = @"+";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SUB:
    ret = @"-";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MUL:
    ret = @"*";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_DIV:
    ret = @"/";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MODULO:
    ret = @"%";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTL:
    ret = @"<<";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTR:
    ret = @">>";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_NEG:
    return JreStrcat("$@$", @" - ( ", mLeft_, @" )");
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_AND:
    ret = @"&";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_OR:
    ret = @"|";
    break;
    case OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_XOR:
    ret = @"^";
    break;
  }
  return JreStrcat("$@C$C@$", @"( ", mLeft_, ' ', ret, ' ', mRight_, @" )");
}

- (void)dealloc {
  RELEASE_(mLeft_);
  RELEASE_(mRight_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaKissvmValuesValue;", 0x1, 2, 3, 4, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 5, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaKissvmExpressionsExpression:withInt:);
  methods[1].selector = @selector(initWithOrgMinimaKissvmExpressionsExpression:withOrgMinimaKissvmExpressionsExpression:withInt:);
  methods[2].selector = @selector(getValueWithOrgMinimaKissvmContract:);
  methods[3].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "OPERATOR_ADD", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_ADD, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_SUB", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SUB, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_MUL", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MUL, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_DIV", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_DIV, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_NEG", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_NEG, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_SHIFTL", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTL, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_SHIFTR", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_SHIFTR, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_MODULO", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_MODULO, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_AND", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_AND, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_OR", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_OR, 0x19, -1, -1, -1, -1 },
    { "OPERATOR_XOR", "I", .constantValue.asInt = OrgMinimaKissvmExpressionsOperatorExpression_OPERATOR_XOR, 0x19, -1, -1, -1, -1 },
    { "mOperatorType_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mLeft_", "LOrgMinimaKissvmExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mRight_", "LOrgMinimaKissvmExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaKissvmExpressionsExpression;I", "LOrgMinimaKissvmExpressionsExpression;LOrgMinimaKissvmExpressionsExpression;I", "getValue", "LOrgMinimaKissvmContract;", "LOrgMinimaKissvmExceptionsExecutionException;", "toString" };
  static const J2ObjcClassInfo _OrgMinimaKissvmExpressionsOperatorExpression = { "OperatorExpression", "org.minima.kissvm.expressions", ptrTable, methods, fields, 7, 0x1, 4, 14, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmExpressionsOperatorExpression;
}

@end

void OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withInt_(OrgMinimaKissvmExpressionsOperatorExpression *self, id<OrgMinimaKissvmExpressionsExpression> zLeft, jint zOperator) {
  OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_(self, zLeft, create_OrgMinimaKissvmExpressionsConstantExpression_initWithOrgMinimaKissvmValuesValue_(JreLoadStatic(OrgMinimaKissvmValuesBooleanValue, FALSE)), zOperator);
}

OrgMinimaKissvmExpressionsOperatorExpression *new_OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withInt_(id<OrgMinimaKissvmExpressionsExpression> zLeft, jint zOperator) {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmExpressionsOperatorExpression, initWithOrgMinimaKissvmExpressionsExpression_withInt_, zLeft, zOperator)
}

OrgMinimaKissvmExpressionsOperatorExpression *create_OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withInt_(id<OrgMinimaKissvmExpressionsExpression> zLeft, jint zOperator) {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmExpressionsOperatorExpression, initWithOrgMinimaKissvmExpressionsExpression_withInt_, zLeft, zOperator)
}

void OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_(OrgMinimaKissvmExpressionsOperatorExpression *self, id<OrgMinimaKissvmExpressionsExpression> zLeft, id<OrgMinimaKissvmExpressionsExpression> zRight, jint zOperator) {
  NSObject_init(self);
  JreStrongAssign(&self->mLeft_, zLeft);
  JreStrongAssign(&self->mRight_, zRight);
  self->mOperatorType_ = zOperator;
}

OrgMinimaKissvmExpressionsOperatorExpression *new_OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_(id<OrgMinimaKissvmExpressionsExpression> zLeft, id<OrgMinimaKissvmExpressionsExpression> zRight, jint zOperator) {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmExpressionsOperatorExpression, initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_, zLeft, zRight, zOperator)
}

OrgMinimaKissvmExpressionsOperatorExpression *create_OrgMinimaKissvmExpressionsOperatorExpression_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_(id<OrgMinimaKissvmExpressionsExpression> zLeft, id<OrgMinimaKissvmExpressionsExpression> zRight, jint zOperator) {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmExpressionsOperatorExpression, initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmExpressionsExpression_withInt_, zLeft, zRight, zOperator)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmExpressionsOperatorExpression)
