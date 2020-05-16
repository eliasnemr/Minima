//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/statements/commands/EXECstatement.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsEXECstatement")
#ifdef RESTRICT_OrgMinimaKissvmStatementsCommandsEXECstatement
#define INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsEXECstatement 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsEXECstatement 1
#endif
#undef RESTRICT_OrgMinimaKissvmStatementsCommandsEXECstatement

#if !defined (OrgMinimaKissvmStatementsCommandsEXECstatement_) && (INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsEXECstatement || defined(INCLUDE_OrgMinimaKissvmStatementsCommandsEXECstatement))
#define OrgMinimaKissvmStatementsCommandsEXECstatement_

#define RESTRICT_OrgMinimaKissvmStatementsStatement 1
#define INCLUDE_OrgMinimaKissvmStatementsStatement 1
#include "org/minima/kissvm/statements/Statement.h"

@class OrgMinimaKissvmContract;
@protocol OrgMinimaKissvmExpressionsExpression;

@interface OrgMinimaKissvmStatementsCommandsEXECstatement : NSObject < OrgMinimaKissvmStatementsStatement > {
 @public
  id<OrgMinimaKissvmExpressionsExpression> mScript_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaKissvmExpressionsExpression:(id<OrgMinimaKissvmExpressionsExpression>)zScript;

- (void)executeWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

- (NSString *)description;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmStatementsCommandsEXECstatement)

J2OBJC_FIELD_SETTER(OrgMinimaKissvmStatementsCommandsEXECstatement, mScript_, id<OrgMinimaKissvmExpressionsExpression>)

FOUNDATION_EXPORT void OrgMinimaKissvmStatementsCommandsEXECstatement_initWithOrgMinimaKissvmExpressionsExpression_(OrgMinimaKissvmStatementsCommandsEXECstatement *self, id<OrgMinimaKissvmExpressionsExpression> zScript);

FOUNDATION_EXPORT OrgMinimaKissvmStatementsCommandsEXECstatement *new_OrgMinimaKissvmStatementsCommandsEXECstatement_initWithOrgMinimaKissvmExpressionsExpression_(id<OrgMinimaKissvmExpressionsExpression> zScript) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmStatementsCommandsEXECstatement *create_OrgMinimaKissvmStatementsCommandsEXECstatement_initWithOrgMinimaKissvmExpressionsExpression_(id<OrgMinimaKissvmExpressionsExpression> zScript);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmStatementsCommandsEXECstatement)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmStatementsCommandsEXECstatement")