//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/NetClient.java
//

#include "IOSClass.h"
#include "J2ObjC_source.h"
#include "java/io/DataOutputStream.h"
#include "java/io/OutputStream.h"
#include "java/lang/Exception.h"
#include "java/lang/Integer.h"
#include "java/lang/Math.h"
#include "java/lang/Thread.h"
#include "java/net/InetAddress.h"
#include "java/net/InetSocketAddress.h"
#include "java/net/Socket.h"
#include "java/util/Random.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusNet.h"
#include "org/minima/system/network/NetClient.h"
#include "org/minima/system/network/NetClientReader.h"
#include "org/minima/system/network/NetworkHandler.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/Streamable.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/messages/Message.h"
#include "org/minima/utils/messages/MessageProcessor.h"

@interface OrgMinimaSystemNetworkNetClient ()

- (OrgMinimaSystemMain *)getMain;

@end

__attribute__((unused)) static OrgMinimaSystemMain *OrgMinimaSystemNetworkNetClient_getMain(OrgMinimaSystemNetworkNetClient *self);

NSString *OrgMinimaSystemNetworkNetClient_NETCLIENT_INITCONNECT = @"NETCLIENT_INITCONNECT";
NSString *OrgMinimaSystemNetworkNetClient_NETCLIENT_STARTUP = @"NETCLIENT_STARTUP";
NSString *OrgMinimaSystemNetworkNetClient_NETCLIENT_SHUTDOWN = @"NETCLIENT_SHUTDOWN";
NSString *OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDOBJECT = @"NETCLIENT_SENDOBJECT";
NSString *OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDTXPOW = @"NETCLIENT_SENDTXPOW";

@implementation OrgMinimaSystemNetworkNetClient

- (instancetype)initWithNSString:(NSString *)zHost
                         withInt:(jint)zPort
withOrgMinimaSystemNetworkNetworkHandler:(OrgMinimaSystemNetworkNetworkHandler *)zNetwork {
  OrgMinimaSystemNetworkNetClient_initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_(self, zHost, zPort, zNetwork);
  return self;
}

- (instancetype)initWithJavaNetSocket:(JavaNetSocket *)zSock
withOrgMinimaSystemNetworkNetworkHandler:(OrgMinimaSystemNetworkNetworkHandler *)zNetwork {
  OrgMinimaSystemNetworkNetClient_initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_(self, zSock, zNetwork);
  return self;
}

- (JavaNetSocket *)getSocket {
  return mSocket_;
}

- (jboolean)isReconnect {
  return mReconnect_;
}

- (void)noReconnect {
  mReconnect_ = false;
}

- (NSString *)getHost {
  return mHost_;
}

- (jint)getPort {
  return mPort_;
}

- (NSString *)getUID {
  return mUID_;
}

- (OrgMinimaSystemNetworkNetworkHandler *)getNetworkHandler {
  return mNetworkMain_;
}

- (OrgMinimaSystemMain *)getMain {
  return OrgMinimaSystemNetworkNetClient_getMain(self);
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *ret = create_OrgMinimaUtilsJsonJSONObject_init();
  [ret putWithId:@"uid" withId:mUID_];
  [ret putWithId:@"host" withId:[self getHost]];
  [ret putWithId:@"port" withId:JavaLangInteger_valueOfWithInt_([self getPort])];
  return ret;
}

- (NSString *)description {
  return [((OrgMinimaUtilsJsonJSONObject *) nil_chk([self toJSON])) description];
}

- (void)stopMessageProcessor {
  @try {
    [((JavaIoDataOutputStream *) nil_chk(mOutput_)) close];
  }
  @catch (JavaLangException *exc) {
  }
  @try {
    [((JavaLangThread *) nil_chk(mInputThread_)) interrupt];
  }
  @catch (JavaLangException *exc) {
  }
  @try {
    [((JavaNetSocket *) nil_chk(mSocket_)) close];
  }
  @catch (JavaLangException *exc) {
  }
  [super stopMessageProcessor];
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_INITCONNECT]) {
    @try {
      JreStrongAssignAndConsume(&mSocket_, new_JavaNetSocket_init());
      [mSocket_ connectWithJavaNetSocketAddress:create_JavaNetInetSocketAddress_initWithNSString_withInt_(mHost_, mPort_) withInt:10000];
    }
    @catch (JavaLangException *e) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$$CI", @"Error @ connection start : ", mHost_, ':', mPort_));
      [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(mNetworkMain_)) PostMessageWithOrgMinimaUtilsMessagesMessage:[create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_CLIENTERROR) addObjectWithNSString:@"client" withId:self]];
      return;
    }
    [self PostMessageWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_STARTUP];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_STARTUP]) {
    JreStrongAssignAndConsume(&mOutput_, new_JavaIoDataOutputStream_initWithJavaIoOutputStream_([((JavaNetSocket *) nil_chk(mSocket_)) getOutputStream]));
    JreStrongAssignAndConsume(&mInputReader_, new_OrgMinimaSystemNetworkNetClientReader_initWithOrgMinimaSystemNetworkNetClient_(self));
    JreStrongAssignAndConsume(&mInputThread_, new_JavaLangThread_initWithJavaLangRunnable_(mInputReader_));
    [mInputThread_ start];
    OrgMinimaUtilsMessagesMessage *init_ = create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemBrainsConsensusNet_CONSENSUS_NET_INITIALISE);
    [init_ addObjectWithNSString:@"netclient" withId:self];
    [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([((OrgMinimaSystemMain *) nil_chk(OrgMinimaSystemNetworkNetClient_getMain(self))) getConsensusHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:init_];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDTXPOW]) {
    OrgMinimaObjectsTxPOW *txpow = (OrgMinimaObjectsTxPOW *) cast_chk([zMessage getObjectWithNSString:@"txpow"], [OrgMinimaObjectsTxPOW class]);
    [((OrgMinimaObjectsBaseMiniByte *) nil_chk(JreLoadStatic(OrgMinimaSystemNetworkNetClientReader, NETMESSAGE_TXPOW))) writeDataStreamWithJavaIoDataOutputStream:mOutput_];
    [((OrgMinimaObjectsTxPOW *) nil_chk(txpow)) writeDataStreamWithJavaIoDataOutputStream:mOutput_];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDOBJECT]) {
    OrgMinimaObjectsBaseMiniByte *type = (OrgMinimaObjectsBaseMiniByte *) cast_chk([zMessage getObjectWithNSString:@"type"], [OrgMinimaObjectsBaseMiniByte class]);
    id<OrgMinimaUtilsStreamable> obj = nil;
    if ([zMessage existsWithNSString:@"object"]) {
      obj = (id<OrgMinimaUtilsStreamable>) cast_check([zMessage getObjectWithNSString:@"object"], OrgMinimaUtilsStreamable_class_());
    }
    [self sendMessageWithOrgMinimaUtilsStreamable:type withOrgMinimaUtilsStreamable:obj];
  }
  else if ([zMessage isMessageTypeWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_SHUTDOWN]) {
    @try {
      [((JavaIoDataOutputStream *) nil_chk(mOutput_)) close];
    }
    @catch (JavaLangException *exc) {
    }
    @try {
      [((JavaLangThread *) nil_chk(mInputThread_)) interrupt];
    }
    @catch (JavaLangException *exc) {
    }
    @try {
      [((JavaNetSocket *) nil_chk(mSocket_)) close];
    }
    @catch (JavaLangException *exc) {
    }
    [self stopMessageProcessor];
  }
}

- (void)sendMessageWithOrgMinimaUtilsStreamable:(id<OrgMinimaUtilsStreamable>)zMessageType
                   withOrgMinimaUtilsStreamable:(id<OrgMinimaUtilsStreamable>)zMessage {
  @try {
    [((id<OrgMinimaUtilsStreamable>) nil_chk(zMessageType)) writeDataStreamWithJavaIoDataOutputStream:mOutput_];
    if (zMessage != nil) {
      [zMessage writeDataStreamWithJavaIoDataOutputStream:mOutput_];
    }
    [((JavaIoDataOutputStream *) nil_chk(mOutput_)) flush];
  }
  @catch (JavaLangException *ec) {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@C@", @"Error sending message : ", zMessage, ' ', ec));
    [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(mNetworkMain_)) PostMessageWithOrgMinimaUtilsMessagesMessage:[create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_CLIENTERROR) addObjectWithNSString:@"client" withId:self]];
  }
}

- (void)dealloc {
  RELEASE_(mNetworkMain_);
  RELEASE_(mSocket_);
  RELEASE_(mOutput_);
  RELEASE_(mInputThread_);
  RELEASE_(mInputReader_);
  RELEASE_(mUID_);
  RELEASE_(mHost_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, "LJavaNetSocket;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemNetworkNetworkHandler;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemMain;", 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 2, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 3, 4, 5, -1, -1, -1 },
    { NULL, "V", 0x4, 6, 7, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithNSString:withInt:withOrgMinimaSystemNetworkNetworkHandler:);
  methods[1].selector = @selector(initWithJavaNetSocket:withOrgMinimaSystemNetworkNetworkHandler:);
  methods[2].selector = @selector(getSocket);
  methods[3].selector = @selector(isReconnect);
  methods[4].selector = @selector(noReconnect);
  methods[5].selector = @selector(getHost);
  methods[6].selector = @selector(getPort);
  methods[7].selector = @selector(getUID);
  methods[8].selector = @selector(getNetworkHandler);
  methods[9].selector = @selector(getMain);
  methods[10].selector = @selector(toJSON);
  methods[11].selector = @selector(description);
  methods[12].selector = @selector(stopMessageProcessor);
  methods[13].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  methods[14].selector = @selector(sendMessageWithOrgMinimaUtilsStreamable:withOrgMinimaUtilsStreamable:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "NETCLIENT_INITCONNECT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 8, -1, -1 },
    { "NETCLIENT_STARTUP", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 9, -1, -1 },
    { "NETCLIENT_SHUTDOWN", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 10, -1, -1 },
    { "NETCLIENT_SENDOBJECT", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 11, -1, -1 },
    { "NETCLIENT_SENDTXPOW", "LNSString;", .constantValue.asLong = 0, 0x19, -1, 12, -1, -1 },
    { "mNetworkMain_", "LOrgMinimaSystemNetworkNetworkHandler;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mSocket_", "LJavaNetSocket;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mOutput_", "LJavaIoDataOutputStream;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mInputThread_", "LJavaLangThread;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mInputReader_", "LOrgMinimaSystemNetworkNetClientReader;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mUID_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mHost_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mPort_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mReconnect_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mReconnectAttempts_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mStartOK_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LNSString;ILOrgMinimaSystemNetworkNetworkHandler;", "LJavaNetSocket;LOrgMinimaSystemNetworkNetworkHandler;", "toString", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", "sendMessage", "LOrgMinimaUtilsStreamable;LOrgMinimaUtilsStreamable;", &OrgMinimaSystemNetworkNetClient_NETCLIENT_INITCONNECT, &OrgMinimaSystemNetworkNetClient_NETCLIENT_STARTUP, &OrgMinimaSystemNetworkNetClient_NETCLIENT_SHUTDOWN, &OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDOBJECT, &OrgMinimaSystemNetworkNetClient_NETCLIENT_SENDTXPOW };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkNetClient = { "NetClient", "org.minima.system.network", ptrTable, methods, fields, 7, 0x1, 15, 16, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemNetworkNetClient;
}

@end

void OrgMinimaSystemNetworkNetClient_initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_(OrgMinimaSystemNetworkNetClient *self, NSString *zHost, jint zPort, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  OrgMinimaUtilsMessagesMessageProcessor_initWithNSString_(self, @"NETCLIENT");
  self->mReconnect_ = false;
  self->mReconnectAttempts_ = 0;
  JreStrongAssign(&self->mHost_, zHost);
  self->mPort_ = zPort;
  self->mReconnect_ = true;
  self->mReconnectAttempts_ = 0;
  JreStrongAssign(&self->mNetworkMain_, zNetwork);
  JreStrongAssign(&self->mUID_, JreStrcat("I", JavaLangMath_absWithInt_([create_JavaUtilRandom_init() nextInt])));
  [self PostMessageWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_INITCONNECT];
}

OrgMinimaSystemNetworkNetClient *new_OrgMinimaSystemNetworkNetClient_initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_(NSString *zHost, jint zPort, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkNetClient, initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_, zHost, zPort, zNetwork)
}

OrgMinimaSystemNetworkNetClient *create_OrgMinimaSystemNetworkNetClient_initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_(NSString *zHost, jint zPort, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkNetClient, initWithNSString_withInt_withOrgMinimaSystemNetworkNetworkHandler_, zHost, zPort, zNetwork)
}

void OrgMinimaSystemNetworkNetClient_initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_(OrgMinimaSystemNetworkNetClient *self, JavaNetSocket *zSock, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  OrgMinimaUtilsMessagesMessageProcessor_initWithNSString_(self, @"NETCLIENT");
  self->mReconnect_ = false;
  self->mReconnectAttempts_ = 0;
  self->mReconnect_ = false;
  JreStrongAssign(&self->mSocket_, zSock);
  JreStrongAssign(&self->mHost_, [((JavaNetInetAddress *) nil_chk([((JavaNetSocket *) nil_chk(self->mSocket_)) getInetAddress])) getHostAddress]);
  self->mPort_ = [((JavaNetSocket *) nil_chk(self->mSocket_)) getPort];
  JreStrongAssign(&self->mNetworkMain_, zNetwork);
  JreStrongAssign(&self->mUID_, JreStrcat("I", JavaLangMath_absWithInt_([create_JavaUtilRandom_init() nextInt])));
  [self PostMessageWithNSString:OrgMinimaSystemNetworkNetClient_NETCLIENT_STARTUP];
}

OrgMinimaSystemNetworkNetClient *new_OrgMinimaSystemNetworkNetClient_initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_(JavaNetSocket *zSock, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkNetClient, initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_, zSock, zNetwork)
}

OrgMinimaSystemNetworkNetClient *create_OrgMinimaSystemNetworkNetClient_initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_(JavaNetSocket *zSock, OrgMinimaSystemNetworkNetworkHandler *zNetwork) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkNetClient, initWithJavaNetSocket_withOrgMinimaSystemNetworkNetworkHandler_, zSock, zNetwork)
}

OrgMinimaSystemMain *OrgMinimaSystemNetworkNetClient_getMain(OrgMinimaSystemNetworkNetClient *self) {
  return [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk(self->mNetworkMain_)) getMainHandler];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemNetworkNetClient)