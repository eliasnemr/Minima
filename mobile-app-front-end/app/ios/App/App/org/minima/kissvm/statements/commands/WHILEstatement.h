//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/statements/commands/WHILEstatement.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsWHILEstatement")
#ifdef RESTRICT_OrgMinimaKissvmStatementsCommandsWHILEstatement
#define INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsWHILEstatement 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsWHILEstatement 1
#endif
#undef RESTRICT_OrgMinimaKissvmStatementsCommandsWHILEstatement

#if !defined (OrgMinimaKissvmStatementsCommandsWHILEstatement_) && (INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsWHILEstatement || defined(INCLUDE_OrgMinimaKissvmStatementsCommandsWHILEstatement))
#define OrgMinimaKissvmStatementsCommandsWHILEstatement_

#define RESTRICT_OrgMinimaKissvmStatementsStatement 1
#define INCLUDE_OrgMinimaKissvmStatementsStatement 1
#include "org/minima/kissvm/statements/Statement.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmStatementsStatementBlock;
@protocol OrgMinimaKissvmExpressionsExpression;

@interface OrgMinimaKissvmStatementsCommandsWHILEstatement : NSObject < OrgMinimaKissvmStatementsStatement > {
 @public
  id<OrgMinimaKissvmExpressionsExpression> mWhileCheck_;
  OrgMinimaKissvmStatementsStatementBlock *mWhileBlock_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zWhileCheck
                 withOrgMinimaKissvmStatementsStatementBlock:(OrgMinimaKissvmStatementsStatementBlock *)zCodeBlock;

- (void)executeWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

- (NSString *)description;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmStatementsCommandsWHILEstatement)

J2OBJC_FIELD_SETTER(OrgMinimaKissvmStatementsCommandsWHILEstatement, mWhileCheck_, id<OrgMinimaKissvmExpressionsExpression>)
J2OBJC_FIELD_SETTER(OrgMinimaKissvmStatementsCommandsWHILEstatement, mWhileBlock_, OrgMinimaKissvmStatementsStatementBlock *)

FOUNDATION_EXPORT void OrgMinimaKissvmStatementsCommandsWHILEstatement_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmStatementsStatementBlock_(OrgMinimaKissvmStatementsCommandsWHILEstatement *self, id<OrgMinimaKissvmExpressionsExpression> zWhileCheck, OrgMinimaKissvmStatementsStatementBlock *zCodeBlock);

FOUNDATION_EXPORT OrgMinimaKissvmStatementsCommandsWHILEstatement *new_OrgMinimaKissvmStatementsCommandsWHILEstatement_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmStatementsStatementBlock_(id<OrgMinimaKissvmExpressionsExpression> zWhileCheck, OrgMinimaKissvmStatementsStatementBlock *zCodeBlock) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmStatementsCommandsWHILEstatement *create_OrgMinimaKissvmStatementsCommandsWHILEstatement_initWithOrgMinimaKissvmExpressionsExpression_withOrgMinimaKissvmStatementsStatementBlock_(id<OrgMinimaKissvmExpressionsExpression> zWhileCheck, OrgMinimaKissvmStatementsStatementBlock *zCodeBlock);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmStatementsCommandsWHILEstatement)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsWHILEstatement")
