//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/sha/SHA2.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsShaSHA2")
#ifdef RESTRICT_OrgMinimaKissvmFunctionsShaSHA2
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsShaSHA2 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsShaSHA2 1
#endif
#undef RESTRICT_OrgMinimaKissvmFunctionsShaSHA2

#if !defined (OrgMinimaKissvmFunctionsShaSHA2_) && (INCLUDE_ALL_OrgMinimaKissvmFunctionsShaSHA2 || defined(INCLUDE_OrgMinimaKissvmFunctionsShaSHA2))
#define OrgMinimaKissvmFunctionsShaSHA2_

#define RESTRICT_OrgMinimaKissvmFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaKissvmFunctionsMinimaFunction 1
#include "org/minima/kissvm/functions/MinimaFunction.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmFunctionsShaSHA2 : OrgMinimaKissvmFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmFunctionsShaSHA2)

FOUNDATION_EXPORT void OrgMinimaKissvmFunctionsShaSHA2_init(OrgMinimaKissvmFunctionsShaSHA2 *self);

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsShaSHA2 *new_OrgMinimaKissvmFunctionsShaSHA2_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsShaSHA2 *create_OrgMinimaKissvmFunctionsShaSHA2_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmFunctionsShaSHA2)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsShaSHA2")
