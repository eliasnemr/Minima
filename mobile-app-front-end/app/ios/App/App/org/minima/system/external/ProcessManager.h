//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/external/ProcessManager.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemExternalProcessManager")
#ifdef RESTRICT_OrgMinimaSystemExternalProcessManager
#define INCLUDE_ALL_OrgMinimaSystemExternalProcessManager 0
#else
#define INCLUDE_ALL_OrgMinimaSystemExternalProcessManager 1
#endif
#undef RESTRICT_OrgMinimaSystemExternalProcessManager

#if !defined (OrgMinimaSystemExternalProcessManager_) && (INCLUDE_ALL_OrgMinimaSystemExternalProcessManager || defined(INCLUDE_OrgMinimaSystemExternalProcessManager))
#define OrgMinimaSystemExternalProcessManager_

#define RESTRICT_OrgMinimaSystemSystemHandler 1
#define INCLUDE_OrgMinimaSystemSystemHandler 1
#include "org/minima/system/SystemHandler.h"

@class OrgMinimaSystemMain;
@class OrgMinimaUtilsMessagesMessage;

@interface OrgMinimaSystemExternalProcessManager : OrgMinimaSystemSystemHandler {
 @public
  NSString *mTxnCall_;
  NSString *mRelCoin_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain;

- (void)setRelCoinWithNSString:(NSString *)zPostURL;

- (void)setTXNCallFunctionWithNSString:(NSString *)zFunction;

#pragma mark Protected

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)arg0
                               withNSString:(NSString *)arg1 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemExternalProcessManager)

J2OBJC_FIELD_SETTER(OrgMinimaSystemExternalProcessManager, mTxnCall_, NSString *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemExternalProcessManager, mRelCoin_, NSString *)

inline NSString *OrgMinimaSystemExternalProcessManager_get_PROCESS_TXNCALL(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemExternalProcessManager_PROCESS_TXNCALL;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemExternalProcessManager, PROCESS_TXNCALL, NSString *)

inline NSString *OrgMinimaSystemExternalProcessManager_get_PROCESS_RELCOIN(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemExternalProcessManager_PROCESS_RELCOIN;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemExternalProcessManager, PROCESS_RELCOIN, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemExternalProcessManager *self, OrgMinimaSystemMain *zMain);

FOUNDATION_EXPORT OrgMinimaSystemExternalProcessManager *new_OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemExternalProcessManager *create_OrgMinimaSystemExternalProcessManager_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemExternalProcessManager)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemExternalProcessManager")