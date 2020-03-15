//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/webproxy/MainProxyHandler.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyMainProxyHandler")
#ifdef RESTRICT_OrgMinimaSystemNetworkWebproxyMainProxyHandler
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyMainProxyHandler 0
#else
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyMainProxyHandler 1
#endif
#undef RESTRICT_OrgMinimaSystemNetworkWebproxyMainProxyHandler

#if !defined (OrgMinimaSystemNetworkWebproxyMainProxyHandler_) && (INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyMainProxyHandler || defined(INCLUDE_OrgMinimaSystemNetworkWebproxyMainProxyHandler))
#define OrgMinimaSystemNetworkWebproxyMainProxyHandler_

#define RESTRICT_OrgMinimaUtilsMessagesMessageProcessor 1
#define INCLUDE_OrgMinimaUtilsMessagesMessageProcessor 1
#include "org/minima/utils/messages/MessageProcessor.h"

@class IOSObjectArray;
@class JavaUtilConcurrentConcurrentHashMap;
@class JavaUtilRandom;
@class OrgMinimaSystemNetworkWebproxyNIOServerHost;
@class OrgMinimaSystemNetworkWebproxyProxyRPCServer;
@class OrgMinimaUtilsMessagesMessage;

@interface OrgMinimaSystemNetworkWebproxyMainProxyHandler : OrgMinimaUtilsMessagesMessageProcessor {
 @public
  OrgMinimaSystemNetworkWebproxyNIOServerHost *mUserHost_;
  OrgMinimaSystemNetworkWebproxyProxyRPCServer *mGETProxy_;
  JavaUtilConcurrentConcurrentHashMap *mResponses_;
  JavaUtilConcurrentConcurrentHashMap *mUserToWeb_;
  JavaUtilConcurrentConcurrentHashMap *mWebToUser_;
  JavaUtilRandom *mRand_;
}

#pragma mark Public

- (instancetype)init;

+ (void)mainWithNSStringArray:(IOSObjectArray *)zArgs;

#pragma mark Protected

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithNSString:(NSString *)arg0 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkWebproxyMainProxyHandler)

J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mUserHost_, OrgMinimaSystemNetworkWebproxyNIOServerHost *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mGETProxy_, OrgMinimaSystemNetworkWebproxyProxyRPCServer *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mResponses_, JavaUtilConcurrentConcurrentHashMap *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mUserToWeb_, JavaUtilConcurrentConcurrentHashMap *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mWebToUser_, JavaUtilConcurrentConcurrentHashMap *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyMainProxyHandler, mRand_, JavaUtilRandom *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_STARTUP(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_STARTUP;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_STARTUP, NSString *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_SHUTDOWN(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_SHUTDOWN;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_SHUTDOWN, NSString *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_RPC_REQUEST(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_RPC_REQUEST;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_RPC_REQUEST, NSString *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_USER_MESSAGE(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_USER_MESSAGE;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_USER_MESSAGE, NSString *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_USER_CLOSE(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_USER_CLOSE;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_USER_CLOSE, NSString *)

inline NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_get_PROXY_ADMIN_MESSAGE(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkWebproxyMainProxyHandler_PROXY_ADMIN_MESSAGE;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkWebproxyMainProxyHandler, PROXY_ADMIN_MESSAGE, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemNetworkWebproxyMainProxyHandler_init(OrgMinimaSystemNetworkWebproxyMainProxyHandler *self);

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyMainProxyHandler *new_OrgMinimaSystemNetworkWebproxyMainProxyHandler_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyMainProxyHandler *create_OrgMinimaSystemNetworkWebproxyMainProxyHandler_init(void);

FOUNDATION_EXPORT void OrgMinimaSystemNetworkWebproxyMainProxyHandler_mainWithNSStringArray_(IOSObjectArray *zArgs);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemNetworkWebproxyMainProxyHandler)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyMainProxyHandler")