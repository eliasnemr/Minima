//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/txn/output/VERIFYOUT.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT")
#ifdef RESTRICT_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT

#if !defined (OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_) && (INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT || defined(INCLUDE_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT))
#define OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_

#define RESTRICT_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaMiniscriptFunctionsMinimaFunction 1
#include "org/minima/miniscript/functions/MinimaFunction.h"

@class OrgMinimaMiniscriptContract;
@class OrgMinimaMiniscriptValuesValue;

@interface OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT : OrgMinimaMiniscriptFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT)

FOUNDATION_EXPORT void OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_init(OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT *self);

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT *new_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT *create_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptFunctionsTxnOutputVERIFYOUT")