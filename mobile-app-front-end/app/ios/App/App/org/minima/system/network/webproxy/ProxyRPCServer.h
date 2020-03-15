//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/webproxy/ProxyRPCServer.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCServer")
#ifdef RESTRICT_OrgMinimaSystemNetworkWebproxyProxyRPCServer
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCServer 0
#else
#define INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCServer 1
#endif
#undef RESTRICT_OrgMinimaSystemNetworkWebproxyProxyRPCServer

#if !defined (OrgMinimaSystemNetworkWebproxyProxyRPCServer_) && (INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCServer || defined(INCLUDE_OrgMinimaSystemNetworkWebproxyProxyRPCServer))
#define OrgMinimaSystemNetworkWebproxyProxyRPCServer_

#define RESTRICT_JavaLangRunnable 1
#define INCLUDE_JavaLangRunnable 1
#include "java/lang/Runnable.h"

@class JavaNetServerSocket;
@class OrgMinimaSystemNetworkWebproxyMainProxyHandler;

@interface OrgMinimaSystemNetworkWebproxyProxyRPCServer : NSObject < JavaLangRunnable > {
 @public
  OrgMinimaSystemNetworkWebproxyMainProxyHandler *mHandler_;
  JavaNetServerSocket *mServerSocket_;
  jint mPort_;
  jboolean mRunning_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler:(OrgMinimaSystemNetworkWebproxyMainProxyHandler *)zHandler
                                                               withInt:(jint)zPort;

- (jint)getPort;

- (void)run;

- (void)stop;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkWebproxyProxyRPCServer)

J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyProxyRPCServer, mHandler_, OrgMinimaSystemNetworkWebproxyMainProxyHandler *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkWebproxyProxyRPCServer, mServerSocket_, JavaNetServerSocket *)

FOUNDATION_EXPORT void OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyProxyRPCServer *self, OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort);

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyProxyRPCServer *new_OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemNetworkWebproxyProxyRPCServer *create_OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemNetworkWebproxyProxyRPCServer)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemNetworkWebproxyProxyRPCServer")