//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/txn/input/GETINID.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsTxnInputGETINID")
#ifdef RESTRICT_OrgMinimaKissvmFunctionsTxnInputGETINID
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsTxnInputGETINID 0
#else
#define INCLUDE_ALL_OrgMinimaKissvmFunctionsTxnInputGETINID 1
#endif
#undef RESTRICT_OrgMinimaKissvmFunctionsTxnInputGETINID

#if !defined (OrgMinimaKissvmFunctionsTxnInputGETINID_) && (INCLUDE_ALL_OrgMinimaKissvmFunctionsTxnInputGETINID || defined(INCLUDE_OrgMinimaKissvmFunctionsTxnInputGETINID))
#define OrgMinimaKissvmFunctionsTxnInputGETINID_

#define RESTRICT_OrgMinimaKissvmFunctionsMinimaFunction 1
#define INCLUDE_OrgMinimaKissvmFunctionsMinimaFunction 1
#include "org/minima/kissvm/functions/MinimaFunction.h"

@class OrgMinimaKissvmContract;
@class OrgMinimaKissvmValuesValue;

@interface OrgMinimaKissvmFunctionsTxnInputGETINID : OrgMinimaKissvmFunctionsMinimaFunction

#pragma mark Public

- (instancetype)init;

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction;

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaKissvmFunctionsTxnInputGETINID)

FOUNDATION_EXPORT void OrgMinimaKissvmFunctionsTxnInputGETINID_init(OrgMinimaKissvmFunctionsTxnInputGETINID *self);

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsTxnInputGETINID *new_OrgMinimaKissvmFunctionsTxnInputGETINID_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaKissvmFunctionsTxnInputGETINID *create_OrgMinimaKissvmFunctionsTxnInputGETINID_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaKissvmFunctionsTxnInputGETINID)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaKissvmFunctionsTxnInputGETINID")