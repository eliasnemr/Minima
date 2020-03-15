//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/statements/commands/EXECstatement.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptStatementsCommandsEXECstatement")
#ifdef RESTRICT_OrgMinimaMiniscriptStatementsCommandsEXECstatement
#define INCLUDE_ALL_OrgMinimaMiniscriptStatementsCommandsEXECstatement 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptStatementsCommandsEXECstatement 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptStatementsCommandsEXECstatement

#if !defined (OrgMinimaMiniscriptStatementsCommandsEXECstatement_) && (INCLUDE_ALL_OrgMinimaMiniscriptStatementsCommandsEXECstatement || defined(INCLUDE_OrgMinimaMiniscriptStatementsCommandsEXECstatement))
#define OrgMinimaMiniscriptStatementsCommandsEXECstatement_

#define RESTRICT_OrgMinimaMiniscriptStatementsStatement 1
#define INCLUDE_OrgMinimaMiniscriptStatementsStatement 1
#include "org/minima/miniscript/statements/Statement.h"

@class OrgMinimaMiniscriptContract;
@protocol OrgMinimaMiniscriptExpressionsExpression;

@interface OrgMinimaMiniscriptStatementsCommandsEXECstatement : NSObject < OrgMinimaMiniscriptStatementsStatement > {
 @public
  id<OrgMinimaMiniscriptExpressionsExpression> mScript_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaMiniscriptExpressionsExpression:(id<OrgMinimaMiniscriptExpressionsExpression>)zScript;

- (void)executeWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

- (NSString *)description;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptStatementsCommandsEXECstatement)

J2OBJC_FIELD_SETTER(OrgMinimaMiniscriptStatementsCommandsEXECstatement, mScript_, id<OrgMinimaMiniscriptExpressionsExpression>)

FOUNDATION_EXPORT void OrgMinimaMiniscriptStatementsCommandsEXECstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(OrgMinimaMiniscriptStatementsCommandsEXECstatement *self, id<OrgMinimaMiniscriptExpressionsExpression> zScript);

FOUNDATION_EXPORT OrgMinimaMiniscriptStatementsCommandsEXECstatement *new_OrgMinimaMiniscriptStatementsCommandsEXECstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(id<OrgMinimaMiniscriptExpressionsExpression> zScript) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptStatementsCommandsEXECstatement *create_OrgMinimaMiniscriptStatementsCommandsEXECstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(id<OrgMinimaMiniscriptExpressionsExpression> zScript);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptStatementsCommandsEXECstatement)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptStatementsCommandsEXECstatement")