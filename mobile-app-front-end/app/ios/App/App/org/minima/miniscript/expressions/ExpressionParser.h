//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/expressions/ExpressionParser.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptExpressionsExpressionParser")
#ifdef RESTRICT_OrgMinimaMiniscriptExpressionsExpressionParser
#define INCLUDE_ALL_OrgMinimaMiniscriptExpressionsExpressionParser 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptExpressionsExpressionParser 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptExpressionsExpressionParser

#if !defined (OrgMinimaMiniscriptExpressionsExpressionParser_) && (INCLUDE_ALL_OrgMinimaMiniscriptExpressionsExpressionParser || defined(INCLUDE_OrgMinimaMiniscriptExpressionsExpressionParser))
#define OrgMinimaMiniscriptExpressionsExpressionParser_

@protocol JavaUtilList;
@protocol OrgMinimaMiniscriptExpressionsExpression;

@interface OrgMinimaMiniscriptExpressionsExpressionParser : NSObject

#pragma mark Public

- (instancetype)init;

+ (id<OrgMinimaMiniscriptExpressionsExpression>)getExpressionWithJavaUtilList:(id<JavaUtilList>)zTokens;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptExpressionsExpressionParser)

FOUNDATION_EXPORT void OrgMinimaMiniscriptExpressionsExpressionParser_init(OrgMinimaMiniscriptExpressionsExpressionParser *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptExpressionsExpressionParser *new_OrgMinimaMiniscriptExpressionsExpressionParser_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptExpressionsExpressionParser *create_OrgMinimaMiniscriptExpressionsExpressionParser_init(void);

FOUNDATION_EXPORT id<OrgMinimaMiniscriptExpressionsExpression> OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(id<JavaUtilList> zTokens);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptExpressionsExpressionParser)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptExpressionsExpressionParser")