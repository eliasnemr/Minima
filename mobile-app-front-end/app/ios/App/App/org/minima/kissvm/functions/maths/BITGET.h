//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/maths/BITGET.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsBITGET")
#ifdef RESTRICT_OrgMinimaKissvmFunctionsMathsBITGET
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsBITGET 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsBITGET 1
#endif
#undef RESTRICT_OrgMinimaKissvmFunctionsMathsBITGET

#if !defined (OrgMinimaKissvmFunctionsMathsBITGET_) && (INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsBITGET || defined(INCLUDE_OrgMinimaKissvmFunctionsMathsBITGET))
#define OrgMinimaKissvmFunctionsMathsBITGET_

#define RESTRICT_OrgMinimaKissvmFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaKissvmFunctionsMinimaFunction 1
#include "org/minima/kissvm/functions/MinimaFunction.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmFunctionsMathsBITGET : OrgMinimaKissvmFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmFunctionsMathsBITGET)

FOUNDATION_EXPORT void OrgMinimaKissvmFunctionsMathsBITGET_init(OrgMinimaKissvmFunctionsMathsBITGET *self);

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsMathsBITGET *new_OrgMinimaKissvmFunctionsMathsBITGET_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsMathsBITGET *create_OrgMinimaKissvmFunctionsMathsBITGET_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmFunctionsMathsBITGET)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsMathsBITGET")