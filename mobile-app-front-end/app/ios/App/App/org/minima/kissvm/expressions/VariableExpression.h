//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/expressions/VariableExpression.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmExpressionsVariableExpression")
#ifdef RESTRICT_OrgMinimaKissvmExpressionsVariableExpression
#define INCLUDE_ALL_OrgMinimaKissvmExpressionsVariableExpression 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmExpressionsVariableExpression 1
#endif
#undef RESTRICT_OrgMinimaKissvmExpressionsVariableExpression

#if !defined (OrgMinimaKissvmExpressionsVariableExpression_) && (INCLUDE_ALL_OrgMinimaKissvmExpressionsVariableExpression || defined(INCLUDE_OrgMinimaKissvmExpressionsVariableExpression))
#define OrgMinimaKissvmExpressionsVariableExpression_

#define RESTRICT_OrgMinimaKissvmExpressionsExpression 1
#define INCLUDE_OrgMinimaKissvmExpressionsExpression 1
#include "org/minima/kissvm/expressions/Expression.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmExpressionsVariableExpression : NSObject < OrgMinimaKissvmExpressionsExpression > {
 @public
  NSString *mVariableName_;
}

#pragma mark Public

- (instancetype)initWithNSString:(NSString *)zName;

- (OrgMinimaKissvmValuesValue *)getValueWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

- (NSString *)description;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmExpressionsVariableExpression)

J2OBJC_FIELD_SETTER(OrgMinimaKissvmExpressionsVariableExpression, mVariableName_, NSString *)

FOUNDATION_EXPORT void OrgMinimaKissvmExpressionsVariableExpression_initWithNSString_(OrgMinimaKissvmExpressionsVariableExpression *self, NSString *zName);

FOUNDATION_EXPORT OrgMinimaKissvmExpressionsVariableExpression *new_OrgMinimaKissvmExpressionsVariableExpression_initWithNSString_(NSString *zName) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmExpressionsVariableExpression *create_OrgMinimaKissvmExpressionsVariableExpression_initWithNSString_(NSString *zName);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmExpressionsVariableExpression)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmExpressionsVariableExpression")