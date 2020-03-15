//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/expressions/BooleanExpression.java
//

#include "J2ObjC_source.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/expressions/BooleanExpression.h"
#include "org/minima/miniscript/expressions/ConstantExpression.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/values/BooleanValue.h"
#include "org/minima/miniscript/values/Value.h"

@implementation OrgMinimaMiniscriptExpressionsBooleanExpression

- (instancetype)initWithOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zLeft
                                                         withInt:(jint)zBooleanType {
  OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withInt_(self, zLeft, zBooleanType);
  return self;
}

- (instancetype)initWithOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zLeft
                    withOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zRight
                                                         withInt:(jint)zBooleanType {
  OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_(self, zLeft, zRight, zBooleanType);
  return self;
}

- (OrgMinimaMiniscriptValuesValue *)getValueWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  [((OrgMinimaMiniscriptContract *) nil_chk(zContract)) countInstructions];
  OrgMinimaMiniscriptValuesValue *ret = nil;
  OrgMinimaMiniscriptValuesValue *lval = [((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk(mLeft_)) getValueWithOrgMinimaMiniscriptContract:zContract];
  OrgMinimaMiniscriptValuesValue *rval = [((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk(mRight_)) getValueWithOrgMinimaMiniscriptContract:zContract];
  jboolean left = [((OrgMinimaMiniscriptValuesValue *) nil_chk(lval)) isTrue];
  jboolean right = [((OrgMinimaMiniscriptValuesValue *) nil_chk(rval)) isTrue];
  switch (mBooleanType_) {
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_AND:
    ret = left && right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NAND:
    ret = left && right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_OR:
    ret = left || right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOR:
    ret = left || right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_XOR:
    ret = left ^ right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NXOR:
    ret = left ^ right ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_EQ:
    ret = [lval isEqualWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NEQ:
    ret = [lval isEqualWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LT:
    ret = [lval isLessWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LTE:
    ret = [lval isLessEqualWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GT:
    ret = [lval isMoreWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GTE:
    ret = [lval isMoreEqualWithOrgMinimaMiniscriptValuesValue:rval] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE);
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOT:
    ret = [lval isTrue] ? JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE) : JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE);
    break;
  }
  return ret;
}

- (NSString *)description {
  NSString *ret = @"ERROR";
  switch (mBooleanType_) {
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_AND:
    ret = @"AND";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NAND:
    ret = @"NAND";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_OR:
    ret = @"OR";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOR:
    ret = @"NOR";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_XOR:
    ret = @"XOR";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NXOR:
    ret = @"NXOR";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_EQ:
    ret = @"EQ";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NEQ:
    ret = @"NEQ";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LT:
    ret = @"LT";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LTE:
    ret = @"LTE";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GT:
    ret = @"GT";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GTE:
    ret = @"GTE";
    break;
    case OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOT:
    return JreStrcat("$@$", @"NOT ( ", mLeft_, @" )");
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
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 2, 3, 4, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 5, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaMiniscriptExpressionsExpression:withInt:);
  methods[1].selector = @selector(initWithOrgMinimaMiniscriptExpressionsExpression:withOrgMinimaMiniscriptExpressionsExpression:withInt:);
  methods[2].selector = @selector(getValueWithOrgMinimaMiniscriptContract:);
  methods[3].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "BOOLEAN_AND", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_AND, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_NAND", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NAND, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_OR", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_OR, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_NOR", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOR, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_XOR", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_XOR, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_NXOR", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NXOR, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_EQ", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_EQ, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_NEQ", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NEQ, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_LT", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LT, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_LTE", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_LTE, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_GT", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GT, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_GTE", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_GTE, 0x19, -1, -1, -1, -1 },
    { "BOOLEAN_NOT", "I", .constantValue.asInt = OrgMinimaMiniscriptExpressionsBooleanExpression_BOOLEAN_NOT, 0x19, -1, -1, -1, -1 },
    { "mBooleanType_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mLeft_", "LOrgMinimaMiniscriptExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mRight_", "LOrgMinimaMiniscriptExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaMiniscriptExpressionsExpression;I", "LOrgMinimaMiniscriptExpressionsExpression;LOrgMinimaMiniscriptExpressionsExpression;I", "getValue", "LOrgMinimaMiniscriptContract;", "LOrgMinimaMiniscriptExceptionsExecutionException;", "toString" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptExpressionsBooleanExpression = { "BooleanExpression", "org.minima.miniscript.expressions", ptrTable, methods, fields, 7, 0x1, 4, 16, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptExpressionsBooleanExpression;
}

@end

void OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withInt_(OrgMinimaMiniscriptExpressionsBooleanExpression *self, id<OrgMinimaMiniscriptExpressionsExpression> zLeft, jint zBooleanType) {
  OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_(self, zLeft, create_OrgMinimaMiniscriptExpressionsConstantExpression_initWithOrgMinimaMiniscriptValuesValue_(JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, FALSE)), zBooleanType);
}

OrgMinimaMiniscriptExpressionsBooleanExpression *new_OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withInt_(id<OrgMinimaMiniscriptExpressionsExpression> zLeft, jint zBooleanType) {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptExpressionsBooleanExpression, initWithOrgMinimaMiniscriptExpressionsExpression_withInt_, zLeft, zBooleanType)
}

OrgMinimaMiniscriptExpressionsBooleanExpression *create_OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withInt_(id<OrgMinimaMiniscriptExpressionsExpression> zLeft, jint zBooleanType) {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptExpressionsBooleanExpression, initWithOrgMinimaMiniscriptExpressionsExpression_withInt_, zLeft, zBooleanType)
}

void OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_(OrgMinimaMiniscriptExpressionsBooleanExpression *self, id<OrgMinimaMiniscriptExpressionsExpression> zLeft, id<OrgMinimaMiniscriptExpressionsExpression> zRight, jint zBooleanType) {
  NSObject_init(self);
  JreStrongAssign(&self->mLeft_, zLeft);
  JreStrongAssign(&self->mRight_, zRight);
  self->mBooleanType_ = zBooleanType;
}

OrgMinimaMiniscriptExpressionsBooleanExpression *new_OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_(id<OrgMinimaMiniscriptExpressionsExpression> zLeft, id<OrgMinimaMiniscriptExpressionsExpression> zRight, jint zBooleanType) {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptExpressionsBooleanExpression, initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_, zLeft, zRight, zBooleanType)
}

OrgMinimaMiniscriptExpressionsBooleanExpression *create_OrgMinimaMiniscriptExpressionsBooleanExpression_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_(id<OrgMinimaMiniscriptExpressionsExpression> zLeft, id<OrgMinimaMiniscriptExpressionsExpression> zRight, jint zBooleanType) {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptExpressionsBooleanExpression, initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptExpressionsExpression_withInt_, zLeft, zRight, zBooleanType)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptExpressionsBooleanExpression)