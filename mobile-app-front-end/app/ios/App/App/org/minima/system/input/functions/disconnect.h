//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/disconnect.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsDisconnect")
#ifdef RESTRICT_OrgMinimaSystemInputFunctionsDisconnect
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsDisconnect 0
#else
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsDisconnect 1
#endif
#undef RESTRICT_OrgMinimaSystemInputFunctionsDisconnect

#if !defined (OrgMinimaSystemInputFunctionsdisconnect_) && (INCLUDE_ALL_OrgMinimaSystemInputFunctionsDisconnect || defined(INCLUDE_OrgMinimaSystemInputFunctionsdisconnect))
#define OrgMinimaSystemInputFunctionsdisconnect_

#define RESTRICT_OrgMinimaSystemInputCommandFunction 1
#define INCLUDE_OrgMinimaSystemInputCommandFunction 1
#include "org/minima/system/input/CommandFunction.h"

@class IOSObjectArray;

@interface OrgMinimaSystemInputFunctionsdisconnect : OrgMinimaSystemInputCommandFunction

#pragma mark Public

- (instancetype)init;

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput;

- (OrgMinimaSystemInputCommandFunction *)getNewFunction;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemInputFunctionsdisconnect)

FOUNDATION_EXPORT void OrgMinimaSystemInputFunctionsdisconnect_init(OrgMinimaSystemInputFunctionsdisconnect *self);

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsdisconnect *new_OrgMinimaSystemInputFunctionsdisconnect_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsdisconnect *create_OrgMinimaSystemInputFunctionsdisconnect_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemInputFunctionsdisconnect)

@compatibility_alias OrgMinimaSystemInputFunctionsDisconnect OrgMinimaSystemInputFunctionsdisconnect;

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsDisconnect")