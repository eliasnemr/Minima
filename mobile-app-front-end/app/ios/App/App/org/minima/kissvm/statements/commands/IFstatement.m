//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/statements/commands/IFstatement.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/statements/StatementBlock.h"
#include "org/minima/kissvm/statements/commands/IFstatement.h"
#include "org/minima/kissvm/values/Value.h"

@implementation OrgMinimaKissvmStatementsCommandsIFstatement

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmStatementsCommandsIFstatement_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)addConditionWithOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zCondition
                 withOrgMinimaKissvmStatementsStatementBlock:(OrgMinimaKissvmStatementsStatementBlock *)zCodeBlock {
  [((JavaUtilArrayList *) nil_chk(mConditions_)) addWithId:zCondition];
  [((JavaUtilArrayList *) nil_chk(mActions_)) addWithId:zCodeBlock];
}

- (void)executeWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  [((OrgMinimaKissvmContract *) nil_chk(zContract)) traceLogWithNSString:[self description]];
  jint size = [((JavaUtilArrayList *) nil_chk(mConditions_)) size];
  for (jint loop = 0; loop < size; loop++) {
    id<OrgMinimaKissvmExpressionsExpression> conditional = [((JavaUtilArrayList *) nil_chk(mConditions_)) getWithInt:loop];
    if ([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk(conditional)) getValueWithOrgMinimaKissvmContract:zContract])) isTrue]) {
      OrgMinimaKissvmStatementsStatementBlock *codeblock = [((JavaUtilArrayList *) nil_chk(mActions_)) getWithInt:loop];
      [((OrgMinimaKissvmStatementsStatementBlock *) nil_chk(codeblock)) runWithOrgMinimaKissvmContract:zContract];
      break;
    }
  }
}

- (NSString *)description {
  NSString *ret = @"";
  jint size = [((JavaUtilArrayList *) nil_chk(mConditions_)) size];
  for (jint loop = 0; loop < size; loop++) {
    id<OrgMinimaKissvmExpressionsExpression> conditional = [((JavaUtilArrayList *) nil_chk(mConditions_)) getWithInt:loop];
    if (loop == 0) {
      ret = JreStrcat("$@", @"IF ", conditional);
    }
    else {
      JreStrAppend(&ret, "$@", @", ELSEIF ", conditional);
    }
  }
  return ret;
}

- (void)dealloc {
  RELEASE_(mConditions_);
  RELEASE_(mActions_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 2, 3, 4, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 5, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(addConditionWithOrgMinimaKissvmExpressionsExpression:withOrgMinimaKissvmStatementsStatementBlock:);
  methods[2].selector = @selector(executeWithOrgMinimaKissvmContract:);
  methods[3].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mConditions_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 6, -1 },
    { "mActions_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 7, -1 },
  };
  static const void *ptrTable[] = { "addCondition", "LOrgMinimaKissvmExpressionsExpression;LOrgMinimaKissvmStatementsStatementBlock;", "execute", "LOrgMinimaKissvmContract;", "LOrgMinimaKissvmExceptionsExecutionException;", "toString", "Ljava/util/ArrayList<Lorg/minima/kissvm/expressions/Expression;>;", "Ljava/util/ArrayList<Lorg/minima/kissvm/statements/StatementBlock;>;" };
  static const J2ObjcClassInfo _OrgMinimaKissvmStatementsCommandsIFstatement = { "IFstatement", "org.minima.kissvm.statements.commands", ptrTable, methods, fields, 7, 0x1, 4, 2, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmStatementsCommandsIFstatement;
}

@end

void OrgMinimaKissvmStatementsCommandsIFstatement_init(OrgMinimaKissvmStatementsCommandsIFstatement *self) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mConditions_, new_JavaUtilArrayList_init());
  JreStrongAssignAndConsume(&self->mActions_, new_JavaUtilArrayList_init());
}

OrgMinimaKissvmStatementsCommandsIFstatement *new_OrgMinimaKissvmStatementsCommandsIFstatement_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmStatementsCommandsIFstatement, init)
}

OrgMinimaKissvmStatementsCommandsIFstatement *create_OrgMinimaKissvmStatementsCommandsIFstatement_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmStatementsCommandsIFstatement, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmStatementsCommandsIFstatement)
