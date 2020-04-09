//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/rpc/RPCServer.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemNetworkRpcRPCServer")
#ifdef RESTRICT_OrgMinimaSystemNetworkRpcRPCServer
#define INCLUDE_ALL_OrgMinimaSystemNetworkRpcRPCServer 0
#else
#define INCLUDE_ALL_OrgMinimaSystemNetworkRpcRPCServer 1
#endif
#undef RESTRICT_OrgMinimaSystemNetworkRpcRPCServer

#if !defined (OrgMinimaSystemNetworkRpcRPCServer_) && (INCLUDE_ALL_OrgMinimaSystemNetworkRpcRPCServer || defined(INCLUDE_OrgMinimaSystemNetworkRpcRPCServer))
#define OrgMinimaSystemNetworkRpcRPCServer_

#define RESTRICT_JavaLangRunnable 1
#define INCLUDE_JavaLangRunnable 1
#include "java/lang/Runnable.h"

@class JavaNetServerSocket;
@class OrgMinimaSystemInputInputHandler;

@interface OrgMinimaSystemNetworkRpcRPCServer : NSObject < JavaLangRunnable > {
 @public
  OrgMinimaSystemInputInputHandler *mInputHandler_;
  JavaNetServerSocket *mServerSocket_;
  jint mPort_;
  NSString *mHost_;
  jboolean mRunning_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaSystemInputInputHandler:(OrgMinimaSystemInputInputHandler *)zInput
                                                 withInt:(jint)zPort;

- (NSString *)getHost;

- (jint)getPort;

- (NSString *)getIPAddress;

- (void)run;

- (void)stop;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkRpcRPCServer)

J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkRpcRPCServer, mInputHandler_, OrgMinimaSystemInputInputHandler *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkRpcRPCServer, mServerSocket_, JavaNetServerSocket *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemNetworkRpcRPCServer, mHost_, NSString *)

FOUNDATION_EXPORT void OrgMinimaSystemNetworkRpcRPCServer_initWithOrgMinimaSystemInputInputHandler_withInt_(OrgMinimaSystemNetworkRpcRPCServer *self, OrgMinimaSystemInputInputHandler *zInput, jint zPort);

FOUNDATION_EXPORT OrgMinimaSystemNetworkRpcRPCServer *new_OrgMinimaSystemNetworkRpcRPCServer_initWithOrgMinimaSystemInputInputHandler_withInt_(OrgMinimaSystemInputInputHandler *zInput, jint zPort) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemNetworkRpcRPCServer *create_OrgMinimaSystemNetworkRpcRPCServer_initWithOrgMinimaSystemInputInputHandler_withInt_(OrgMinimaSystemInputInputHandler *zInput, jint zPort);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemNetworkRpcRPCServer)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemNetworkRpcRPCServer")
