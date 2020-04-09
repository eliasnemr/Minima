//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/statements/commands/LETstatement.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/statements/commands/LETstatement.h"
#include "org/minima/kissvm/values/Value.h"

jint OrgMinimaKissvmStatementsCommandsLETstatement_LET_VARIABLE = 0;
jint OrgMinimaKissvmStatementsCommandsLETstatement_LET_ARRAY = 1;

@implementation OrgMinimaKissvmStatementsCommandsLETstatement

- (instancetype)initWithNSString:(NSString *)zVariableName
withOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zExpression {
  OrgMinimaKissvmStatementsCommandsLETstatement_initWithNSString_withOrgMinimaKissvmExpressionsExpression_(self, zVariableName, zExpression);
  return self;
}

- (instancetype)initWithJavaUtilArrayList:(JavaUtilArrayList *)zArrayPos
 withOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zExpression {
  OrgMinimaKissvmStatementsCommandsLETstatement_initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_(self, zArrayPos, zExpression);
  return self;
}

- (void)executeWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  [((OrgMinimaKissvmContract *) nil_chk(zContract)) traceLogWithNSString:[self description]];
  if (mLETType_ == OrgMinimaKissvmStatementsCommandsLETstatement_LET_VARIABLE) {
    [zContract setVariableWithNSString:mName_ withOrgMinimaKissvmValuesValue:[((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(mValue_)) getValueWithOrgMinimaKissvmContract:zContract]];
  }
  else {
    NSString *pos = @"";
    for (id<OrgMinimaKissvmExpressionsExpression> __strong exp in nil_chk(mArrayPos_)) {
      JreStrAppend(&pos, "$C", [((NSString *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(exp)) getValueWithOrgMinimaKissvmContract:zContract])) description])) java_trim], ',');
    }
    [zContract setVariableWithNSString:pos withOrgMinimaKissvmValuesValue:[((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(mValue_)) getValueWithOrgMinimaKissvmContract:zContract]];
  }
}

- (NSString *)description {
  if (mLETType_ == OrgMinimaKissvmStatementsCommandsLETstatement_LET_VARIABLE) {
    return JreStrcat("$$$@", @"LET ", mName_, @" = ", mValue_);
  }
  NSString *let = @"LET ( ";
  for (id<OrgMinimaKissvmExpressionsExpression> __strong exp in nil_chk(mArrayPos_)) {
    JreStrAppend(&let, "$C", [((NSString *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(exp)) description])) java_trim], ' ');
  }
  let = JreStrcat("$$@", [let java_trim], @" ) = ", mValue_);
  return let;
}

- (void)dealloc {
  RELEASE_(mArrayPos_);
  RELEASE_(mName_);
  RELEASE_(mValue_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, 2, -1, -1 },
    { NULL, "V", 0x1, 3, 4, 5, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 6, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithNSString:withOrgMinimaKissvmExpressionsExpression:);
  methods[1].selector = @selector(initWithJavaUtilArrayList:withOrgMinimaKissvmExpressionsExpression:);
  methods[2].selector = @selector(executeWithOrgMinimaKissvmContract:);
  methods[3].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "LET_VARIABLE", "I", .constantValue.asLong = 0, 0x9, -1, 7, -1, -1 },
    { "LET_ARRAY", "I", .constantValue.asLong = 0, 0x9, -1, 8, -1, -1 },
    { "mLETType_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mArrayPos_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 9, -1 },
    { "mName_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mValue_", "LOrgMinimaKissvmExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LNSString;LOrgMinimaKissvmExpressionsExpression;", "LJavaUtilArrayList;LOrgMinimaKissvmExpressionsExpression;", "(Ljava/util/ArrayList<Lorg/minima/kissvm/expressions/Expression;>;Lorg/minima/kissvm/expressions/Expression;)V", "execute", "LOrgMinimaKissvmContract;", "LOrgMinimaKissvmExceptionsExecutionException;", "toString", &OrgMinimaKissvmStatementsCommandsLETstatement_LET_VARIABLE, &OrgMinimaKissvmStatementsCommandsLETstatement_LET_ARRAY, "Ljava/util/ArrayList<Lorg/minima/kissvm/expressions/Expression;>;" };
  static const J2ObjcClassInfo _OrgMinimaKissvmStatementsCommandsLETstatement = { "LETstatement", "org.minima.kissvm.statements.commands", ptrTable, methods, fields, 7, 0x1, 4, 6, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmStatementsCommandsLETstatement;
}

@end

void OrgMinimaKissvmStatementsCommandsLETstatement_initWithNSString_withOrgMinimaKissvmExpressionsExpression_(OrgMinimaKissvmStatementsCommandsLETstatement *self, NSString *zVariableName, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  NSObject_init(self);
  self->mLETType_ = OrgMinimaKissvmStatementsCommandsLETstatement_LET_VARIABLE;
  JreStrongAssign(&self->mName_, zVariableName);
  JreStrongAssign(&self->mValue_, zExpression);
}

OrgMinimaKissvmStatementsCommandsLETstatement *new_OrgMinimaKissvmStatementsCommandsLETstatement_initWithNSString_withOrgMinimaKissvmExpressionsExpression_(NSString *zVariableName, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmStatementsCommandsLETstatement, initWithNSString_withOrgMinimaKissvmExpressionsExpression_, zVariableName, zExpression)
}

OrgMinimaKissvmStatementsCommandsLETstatement *create_OrgMinimaKissvmStatementsCommandsLETstatement_initWithNSString_withOrgMinimaKissvmExpressionsExpression_(NSString *zVariableName, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmStatementsCommandsLETstatement, initWithNSString_withOrgMinimaKissvmExpressionsExpression_, zVariableName, zExpression)
}

void OrgMinimaKissvmStatementsCommandsLETstatement_initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_(OrgMinimaKissvmStatementsCommandsLETstatement *self, JavaUtilArrayList *zArrayPos, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  NSObject_init(self);
  self->mLETType_ = OrgMinimaKissvmStatementsCommandsLETstatement_LET_ARRAY;
  JreStrongAssign(&self->mArrayPos_, zArrayPos);
  JreStrongAssign(&self->mValue_, zExpression);
}

OrgMinimaKissvmStatementsCommandsLETstatement *new_OrgMinimaKissvmStatementsCommandsLETstatement_initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_(JavaUtilArrayList *zArrayPos, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmStatementsCommandsLETstatement, initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_, zArrayPos, zExpression)
}

OrgMinimaKissvmStatementsCommandsLETstatement *create_OrgMinimaKissvmStatementsCommandsLETstatement_initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_(JavaUtilArrayList *zArrayPos, id<OrgMinimaKissvmExpressionsExpression> zExpression) {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmStatementsCommandsLETstatement, initWithJavaUtilArrayList_withOrgMinimaKissvmExpressionsExpression_, zArrayPos, zExpression)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmStatementsCommandsLETstatement)
