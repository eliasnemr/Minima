//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/NetworkHandler.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemNetworkNetworkHandler")
#ifdef RESTRICT_OrgMinimaSystemNetworkNetworkHandler
#define INCLUDE_ALL_OrgMinimaSystemNetworkNetworkHandler 0
#else
#define INCLUDE_ALL_OrgMinimaSystemNetworkNetworkHandler 1
#endif
#undef RESTRICT_OrgMinimaSystemNetworkNetworkHandler

#if !defined (OrgMinimaSystemNetworkNetworkHandler_) && (INCLUDE_ALL_OrgMinimaSystemNetworkNetworkHandler || defined(INCLUDE_OrgMinimaSystemNetworkNetworkHandler))
#define OrgMinimaSystemNetworkNetworkHandler_

#define RESTRICT_OrgMinimaSystemSystemHandler 1
#define INCLUDE_OrgMinimaSystemSystemHandler 1
#include "org/minima/system/SystemHandler.h"

@class JavaUtilArrayList;
@class OrgMinimaSystemMain;
@class OrgMinimaSystemNetworkMultiServer;
@class OrgMinimaSystemNetworkRpcRPCServer;
@class OrgMinimaSystemNetworkWebProxyManager;
@class OrgMinimaUtilsMessagesMessage;

@interface OrgMinimaSystemNetworkNetworkHandler : OrgMinimaSystemSystemHandler {
 @public
  OrgMinimaSystemNetworkMultiServer *mServer_;
  OrgMinimaSystemNetworkRpcRPCServer *mRPCServer_;
  OrgMinimaSystemNetworkWebProxyManager *mProxyManager_;
  JavaUtilArrayList *mClients_;
  jboolean mGlobalReconnect_;
  NSString *mMifiProxy_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain;

- (JavaUtilArrayList *)getNetClients;

- (OrgMinimaSystemNetworkRpcRPCServer *)getRPCServer;

- (OrgMinimaSystemNetworkMultiServer *)getServer;

- (void)setGlobalReconnectWithBoolean:(jboolean)zGlobalReconnect;

- (void)setProxyWithNSString:(NSString *)zProxy;

#pragma mark Protected

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)arg0
                               withNSString:(NSString *)arg1 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkNetworkHandler)

J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkNetworkHandler, mServer_, OrgMinimaSystemNetworkMultiServer *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkNetworkHandler, mRPCServer_, OrgMinimaSystemNetworkRpcRPCServer *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkNetworkHandler, mProxyManager_, OrgMinimaSystemNetworkWebProxyManager *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkNetworkHandler, mClients_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkNetworkHandler, mMifiProxy_, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_STARTUP(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_STARTUP;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_STARTUP, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_SHUTDOWN(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_SHUTDOWN;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_SHUTDOWN, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_CONNECT(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_CONNECT;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_CONNECT, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_DISCONNECT(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_DISCONNECT;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_DISCONNECT, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_NEWCLIENT(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_NEWCLIENT;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_NEWCLIENT, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_CLIENTERROR(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_CLIENTERROR;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_CLIENTERROR, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_PING(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_PING;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_PING, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_TRACE(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_TRACE;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_TRACE, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_SENDALL(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_SENDALL;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_SENDALL, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_ALLSTOP(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_ALLSTOP;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_ALLSTOP, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_WEBPROXY(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_WEBPROXY;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_WEBPROXY, NSString *)

inline NSString *OrgMinimaSystemNetworkNetworkHandler_get_NETWORK_NOTIFY(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT NSString *OrgMinimaSystemNetworkNetworkHandler_NETWORK_NOTIFY;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaSystemNetworkNetworkHandler, NETWORK_NOTIFY, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemNetworkNetworkHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemNetworkNetworkHandler *self, OrgMinimaSystemMain *zMain);

FOUNDATION_EXPORT OrgMinimaSystemNetworkNetworkHandler *new_OrgMinimaSystemNetworkNetworkHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemNetworkNetworkHandler *create_OrgMinimaSystemNetworkNetworkHandler_initWithOrgMinimaSystemMain_(OrgMinimaSystemMain *zMain);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemNetworkNetworkHandler)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemNetworkNetworkHandler")
