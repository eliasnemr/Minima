//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/base/GET.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsBaseGET")
#ifdef RESTRICT_OrgMinimaKissvmFunctionsBaseGET
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsBaseGET 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsBaseGET 1
#endif
#undef RESTRICT_OrgMinimaKissvmFunctionsBaseGET

#if !defined (OrgMinimaKissvmFunctionsBaseGET_) && (INCLUDE_ALL_OrgMinimaKissvmFunctionsBaseGET || defined(INCLUDE_OrgMinimaKissvmFunctionsBaseGET))
#define OrgMinimaKissvmFunctionsBaseGET_

#define RESTRICT_OrgMinimaKissvmFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaKissvmFunctionsMinimaFunction 1
#include "org/minima/kissvm/functions/MinimaFunction.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmFunctionsBaseGET : OrgMinimaKissvmFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmFunctionsBaseGET)

FOUNDATION_EXPORT void OrgMinimaKissvmFunctionsBaseGET_init(OrgMinimaKissvmFunctionsBaseGET *self);

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsBaseGET *new_OrgMinimaKissvmFunctionsBaseGET_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsBaseGET *create_OrgMinimaKissvmFunctionsBaseGET_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmFunctionsBaseGET)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsBaseGET")
