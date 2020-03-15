//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/webproxy/ProxyRPCServer.java
//

#include "J2ObjC_source.h"
#include "java/io/IOException.h"
#include "java/lang/Exception.h"
#include "java/lang/Thread.h"
#include "java/net/BindException.h"
#include "java/net/ServerSocket.h"
#include "java/net/Socket.h"
#include "java/net/SocketException.h"
#include "org/minima/system/network/webproxy/MainProxyHandler.h"
#include "org/minima/system/network/webproxy/ProxyRPCHandler.h"
#include "org/minima/system/network/webproxy/ProxyRPCServer.h"
#include "org/minima/utils/MinimaLogger.h"

@implementation OrgMinimaSystemNetworkWebproxyProxyRPCServer

- (instancetype)initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler:(OrgMinimaSystemNetworkWebproxyMainProxyHandler *)zHandler
                                                               withInt:(jint)zPort {
  OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(self, zHandler, zPort);
  return self;
}

- (jint)getPort {
  return mPort_;
}

- (void)stop {
  mRunning_ = false;
  @try {
    if (mServerSocket_ != nil) {
      [mServerSocket_ close];
    }
  }
  @catch (JavaLangException *e) {
    [e printStackTrace];
  }
}

- (void)run {
  @try {
    JreStrongAssignAndConsume(&mServerSocket_, new_JavaNetServerSocket_initWithInt_(mPort_));
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$I", @"ProxyRPCServer running on port ", mPort_));
    while (mRunning_) {
      JavaNetSocket *clientsock = [((JavaNetServerSocket *) nil_chk(mServerSocket_)) accept];
      OrgMinimaSystemNetworkWebproxyProxyRPCHandler *rpc = create_OrgMinimaSystemNetworkWebproxyProxyRPCHandler_initWithJavaNetSocket_withOrgMinimaSystemNetworkWebproxyMainProxyHandler_(clientsock, mHandler_);
      JavaLangThread *rpcthread = create_JavaLangThread_initWithJavaLangRunnable_(rpc);
      [rpcthread start];
    }
  }
  @catch (JavaNetBindException *e) {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$I$", @"ProxyRPCServer : Port ", mPort_, @" allready in use!.. restart required.."));
  }
  @catch (JavaNetSocketException *e) {
    if (!mRunning_) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(@"ProxyRPCServer : Socket Shutdown..");
    }
    else {
      [e printStackTrace];
    }
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
}

- (void)dealloc {
  RELEASE_(mHandler_);
  RELEASE_(mServerSocket_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler:withInt:);
  methods[1].selector = @selector(getPort);
  methods[2].selector = @selector(stop);
  methods[3].selector = @selector(run);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mHandler_", "LOrgMinimaSystemNetworkWebproxyMainProxyHandler;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mServerSocket_", "LJavaNetServerSocket;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mPort_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mRunning_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemNetworkWebproxyMainProxyHandler;I" };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkWebproxyProxyRPCServer = { "ProxyRPCServer", "org.minima.system.network.webproxy", ptrTable, methods, fields, 7, 0x1, 4, 4, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemNetworkWebproxyProxyRPCServer;
}

@end

void OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyProxyRPCServer *self, OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort) {
  NSObject_init(self);
  self->mRunning_ = true;
  JreStrongAssign(&self->mHandler_, zHandler);
  self->mPort_ = zPort;
  JavaLangThread *tt = create_JavaLangThread_initWithJavaLangRunnable_(self);
  [tt start];
}

OrgMinimaSystemNetworkWebproxyProxyRPCServer *new_OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkWebproxyProxyRPCServer, initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_, zHandler, zPort)
}

OrgMinimaSystemNetworkWebproxyProxyRPCServer *create_OrgMinimaSystemNetworkWebproxyProxyRPCServer_initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_(OrgMinimaSystemNetworkWebproxyMainProxyHandler *zHandler, jint zPort) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkWebproxyProxyRPCServer, initWithOrgMinimaSystemNetworkWebproxyMainProxyHandler_withInt_, zHandler, zPort)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemNetworkWebproxyProxyRPCServer)