//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/webproxy/ProxyRPCHandler.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCHandler")
#ifdef RESTRICT_OrgMinimaSystemNetworkWebproxyProxyRPCHandler
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCHandler 0
#else
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCHandler 1
#endif
#undef RESTRICT_OrgMinimaSystemNetworkWebproxyProxyRPCHandler

#if !defined (OrgMinimaSystemNetworkWebproxyProxyRPCHandler_) && (INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCHandler || defined(INCLUDE_OrgMinimaSystemNetworkWebproxyProxyRPCHandler))
#define OrgMinimaSystemNetworkWebproxyProxyRPCHandler_

#define RESTRICT_JavaLangRunnable 1
#define INCLUDE_JavaLangRunnable 1
#include "java/lang/Runnable.h"

@class JavaNetSocket;
@class OrgMinimaSystemNetworkWebproxyMainProxyHandler;

@interface OrgMinimaSystemNetworkWebproxyProxyRPCHandler : NSObject < JavaLangRunnable > {
 @public
  JavaNetSocket *mSocket_;
  OrgMinimaSystemNetworkWebproxyMainProxyHandler *mHandler_;
}

#pragma mark Public

- (instancetype)initWithJavaNetSocket:(JavaNetSocket *)zSocket
withOrgMinimaSystemNetworkWebproxyMainProxyHandler:(OrgMinimaSystemNetworkWebproxyMainProxyHandler *)zHandler;

- (void)run;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkWebproxyProxyRPCHandler)

J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyProxyRPCHandler, mSocket_, JavaNetSocket *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyProxyRPCHandler, mHandler_, OrgMinimaSystemNetworkWebproxyMainProxyHandler *)

FOUNDATION_EXPORT void OrgMinimaSystemNetworkWebproxyProxyRPCHandler_initWithJavaNetSocket_withOrgMinimaSystemNetworkWebproxyMainProxyHandler_(OrgMinimaSystemNetworkWebproxyProxyRPCHandler *self, JavaNetSocket *zSocket, OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler);

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyProxyRPCHandler *new_OrgMinimaSystemNetworkWebproxyProxyRPCHandler_initWithJavaNetSocket_withOrgMinimaSystemNetworkWebproxyMainProxyHandler_(JavaNetSocket *zSocket, OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyProxyRPCHandler *create_OrgMinimaSystemNetworkWebproxyProxyRPCHandler_initWithJavaNetSocket_withOrgMinimaSystemNetworkWebproxyMainProxyHandler_(JavaNetSocket *zSocket, OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemNetworkWebproxyProxyRPCHandler)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCHandler")