//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/cast/BOOL.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsCastBOOL")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsCastBOOL
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsCastBOOL 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsCastBOOL 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsCastBOOL

#if !defined (OrgMinimaMiniscriptFunctionsCastBOOL_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsCastBOOL || defined(INCLUDE_OrgMinimaMiniscriptFunctionsCastBOOL))
#define OrgMinimaMiniscriptFunctionsCastBOOL_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsCastBOOL : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsCastBOOL)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsCastBOOL_init(OrgMinimaMiniscriptFunctionsCastBOOL *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsCastBOOL *new_OrgMinimaMiniscriptFunctionsCastBOOL_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsCastBOOL *create_OrgMinimaMiniscriptFunctionsCastBOOL_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsCastBOOL)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsCastBOOL")