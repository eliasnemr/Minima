//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/base/LEN.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsBaseLEN")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsBaseLEN
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsBaseLEN 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsBaseLEN 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsBaseLEN

#if !defined (OrgMinimaMiniscriptFunctionsBaseLEN_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsBaseLEN || defined(INCLUDE_OrgMinimaMiniscriptFunctionsBaseLEN))
#define OrgMinimaMiniscriptFunctionsBaseLEN_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsBaseLEN : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsBaseLEN)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsBaseLEN_init(OrgMinimaMiniscriptFunctionsBaseLEN *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsBaseLEN *new_OrgMinimaMiniscriptFunctionsBaseLEN_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsBaseLEN *create_OrgMinimaMiniscriptFunctionsBaseLEN_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsBaseLEN)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsBaseLEN")