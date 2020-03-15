//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/statements/commands/RETURNstatement.java
//

#include "J2ObjC_source.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/statements/commands/RETURNstatement.h"
#include "org/minima/miniscript/values/Value.h"

@implementation OrgMinimaMiniscriptStatementsCommandsRETURNstatement

- (instancetype)initWithOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zReturnValue {
  OrgMinimaMiniscriptStatementsCommandsRETURNstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(self, zReturnValue);
  return self;
}

- (void)executeWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  jboolean success = [((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk(mReturnValue_)) getValueWithOrgMinimaMiniscriptContract:zContract])) isTrue];
  [((OrgMinimaMiniscriptContract *) nil_chk(zContract)) traceLogWithNSString:JreStrcat("$$Z", [self description], @" result:", success)];
  [zContract setRETURNValueWithBoolean:success];
}

- (NSString *)description {
  return JreStrcat("$$", @"RETURN ", [((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk(mReturnValue_)) description]);
}

- (void)dealloc {
  RELEASE_(mReturnValue_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, 3, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 4, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaMiniscriptExpressionsExpression:);
  methods[1].selector = @selector(executeWithOrgMinimaMiniscriptContract:);
  methods[2].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mReturnValue_", "LOrgMinimaMiniscriptExpressionsExpression;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaMiniscriptExpressionsExpression;", "execute", "LOrgMinimaMiniscriptContract;", "LOrgMinimaMiniscriptExceptionsExecutionException;", "toString" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptStatementsCommandsRETURNstatement = { "RETURNstatement", "org.minima.miniscript.statements.commands", ptrTable, methods, fields, 7, 0x1, 3, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptStatementsCommandsRETURNstatement;
}

@end

void OrgMinimaMiniscriptStatementsCommandsRETURNstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(OrgMinimaMiniscriptStatementsCommandsRETURNstatement *self, id<OrgMinimaMiniscriptExpressionsExpression> zReturnValue) {
  NSObject_init(self);
  JreStrongAssign(&self->mReturnValue_, zReturnValue);
}

OrgMinimaMiniscriptStatementsCommandsRETURNstatement *new_OrgMinimaMiniscriptStatementsCommandsRETURNstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(id<OrgMinimaMiniscriptExpressionsExpression> zReturnValue) {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptStatementsCommandsRETURNstatement, initWithOrgMinimaMiniscriptExpressionsExpression_, zReturnValue)
}

OrgMinimaMiniscriptStatementsCommandsRETURNstatement *create_OrgMinimaMiniscriptStatementsCommandsRETURNstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(id<OrgMinimaMiniscriptExpressionsExpression> zReturnValue) {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptStatementsCommandsRETURNstatement, initWithOrgMinimaMiniscriptExpressionsExpression_, zReturnValue)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptStatementsCommandsRETURNstatement)