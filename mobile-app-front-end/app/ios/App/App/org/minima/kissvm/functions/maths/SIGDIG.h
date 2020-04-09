//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/maths/SIGDIG.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsSIGDIG")
#ifdef RESTRICT_OrgMinimaKissvmFunctionsMathsSIGDIG
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsSIGDIG 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsSIGDIG 1
#endif
#undef RESTRICT_OrgMinimaKissvmFunctionsMathsSIGDIG

#if !defined (OrgMinimaKissvmFunctionsMathsSIGDIG_) && (INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsSIGDIG || defined(INCLUDE_OrgMinimaKissvmFunctionsMathsSIGDIG))
#define OrgMinimaKissvmFunctionsMathsSIGDIG_

#define RESTRICT_OrgMinimaKissvmFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaKissvmFunctionsMinimaFunction 1
#include "org/minima/kissvm/functions/MinimaFunction.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmFunctionsMathsSIGDIG : OrgMinimaKissvmFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmFunctionsMathsSIGDIG)

FOUNDATION_EXPORT void OrgMinimaKissvmFunctionsMathsSIGDIG_init(OrgMinimaKissvmFunctionsMathsSIGDIG *self);

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsMathsSIGDIG *new_OrgMinimaKissvmFunctionsMathsSIGDIG_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsMathsSIGDIG *create_OrgMinimaKissvmFunctionsMathsSIGDIG_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmFunctionsMathsSIGDIG)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsSIGDIG")
