//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/maths/CEIL.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsCEIL")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsMathsCEIL
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsCEIL 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsCEIL 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsMathsCEIL

#if !defined (OrgMinimaMiniscriptFunctionsMathsCEIL_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsCEIL || defined(INCLUDE_OrgMinimaMiniscriptFunctionsMathsCEIL))
#define OrgMinimaMiniscriptFunctionsMathsCEIL_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsMathsCEIL : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsMathsCEIL)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsMathsCEIL_init(OrgMinimaMiniscriptFunctionsMathsCEIL *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsMathsCEIL *new_OrgMinimaMiniscriptFunctionsMathsCEIL_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsMathsCEIL *create_OrgMinimaMiniscriptFunctionsMathsCEIL_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsMathsCEIL)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsMathsCEIL")