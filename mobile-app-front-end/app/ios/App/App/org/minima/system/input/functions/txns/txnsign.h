//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/txns/txnsign.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnsign")
#ifdef RESTRICT_OrgMinimaSystemInputFunctionsTxnsTxnsign
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnsign 0
#else
#define INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnsign 1
#endif
#undef RESTRICT_OrgMinimaSystemInputFunctionsTxnsTxnsign

#if !defined (OrgMinimaSystemInputFunctionsTxnstxnsign_) && (INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnsign || defined(INCLUDE_OrgMinimaSystemInputFunctionsTxnstxnsign))
#define OrgMinimaSystemInputFunctionsTxnstxnsign_

#define RESTRICT_OrgMinimaSystemInputCommandFunction 1
#define INCLUDE_OrgMinimaSystemInputCommandFunction 1
#include "org/minima/system/input/CommandFunction.h"

@class IOSObjectArray;

@interface OrgMinimaSystemInputFunctionsTxnstxnsign : OrgMinimaSystemInputCommandFunction

#pragma mark Public

- (instancetype)init;

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput;

- (OrgMinimaSystemInputCommandFunction *)getNewFunction;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemInputFunctionsTxnstxnsign)

FOUNDATION_EXPORT void OrgMinimaSystemInputFunctionsTxnstxnsign_init(OrgMinimaSystemInputFunctionsTxnstxnsign *self);

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsTxnstxnsign *new_OrgMinimaSystemInputFunctionsTxnstxnsign_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemInputFunctionsTxnstxnsign *create_OrgMinimaSystemInputFunctionsTxnstxnsign_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemInputFunctionsTxnstxnsign)

@compatibility_alias OrgMinimaSystemInputFunctionsTxnsTxnsign OrgMinimaSystemInputFunctionsTxnstxnsign;

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemInputFunctionsTxnsTxnsign")