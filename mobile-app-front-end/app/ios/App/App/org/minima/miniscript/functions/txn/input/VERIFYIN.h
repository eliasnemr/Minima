//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/txn/input/VERIFYIN.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN

#if !defined (OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN || defined(INCLUDE_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN))
#define OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN_init(OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN *new_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN *create_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnInputVERIFYIN")