//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/NetClientReader.java
//

#include "J2ObjC_source.h"
#include "java/io/BufferedInputStream.h"
#include "java/io/DataInputStream.h"
#include "java/io/InputStream.h"
#include "java/lang/Exception.h"
#include "java/net/Socket.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/backup/SyncPackage.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/brains/ConsensusNet.h"
#include "org/minima/system/network/NetClient.h"
#include "org/minima/system/network/NetClientReader.h"
#include "org/minima/system/network/NetworkHandler.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/messages/Message.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaSystemNetworkNetClientReader)

OrgMinimaObjectsBaseMiniByte *OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_INTRO;
OrgMinimaObjectsBaseMiniByte *OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOWID;
OrgMinimaObjectsBaseMiniByte *OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW_REQUEST;
OrgMinimaObjectsBaseMiniByte *OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW;

@implementation OrgMinimaSystemNetworkNetClientReader

- (instancetype)initWithOrgMinimaSystemNetworkNetClient:(OrgMinimaSystemNetworkNetClient *)zNetClient {
  OrgMinimaSystemNetworkNetClientReader_initWithOrgMinimaSystemNetworkNetClient_(self, zNetClient);
  return self;
}

- (void)run {
  @try {
    JavaIoDataInputStream *mInput = create_JavaIoDataInputStream_initWithJavaIoInputStream_(create_JavaIoBufferedInputStream_initWithJavaIoInputStream_([((JavaNetSocket *) nil_chk([((OrgMinimaSystemNetworkNetClient *) nil_chk(mNetClient_)) getSocket])) getInputStream]));
    OrgMinimaObjectsBaseMiniByte *msgtype = create_OrgMinimaObjectsBaseMiniByte_init();
    OrgMinimaSystemBrainsConsensusHandler *consensus = [((OrgMinimaSystemMain *) nil_chk([((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([((OrgMinimaSystemNetworkNetClient *) nil_chk(mNetClient_)) getNetworkHandler])) getMainHandler])) getConsensusHandler];
    while (true) {
      [msgtype readDataStreamWithJavaIoDataInputStream:mInput];
      OrgMinimaUtilsMessagesMessage *rec = create_OrgMinimaUtilsMessagesMessage_initWithNSString_(JreStrcat("$$@", OrgMinimaSystemBrainsConsensusNet_CONSENSUS_PREFIX, @"NET_MESSAGE_", msgtype));
      [rec addObjectWithNSString:@"netclient" withId:mNetClient_];
      jboolean valid = true;
      if ([msgtype isEqualWithOrgMinimaObjectsBaseMiniByte:OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_INTRO]) {
        OrgMinimaSystemBackupSyncPackage *sp = create_OrgMinimaSystemBackupSyncPackage_init();
        [sp readDataStreamWithJavaIoDataInputStream:mInput];
        [rec addObjectWithNSString:@"sync" withId:sp];
      }
      else if ([msgtype isEqualWithOrgMinimaObjectsBaseMiniByte:OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOWID]) {
        OrgMinimaObjectsBaseMiniHash *hash_ = create_OrgMinimaObjectsBaseMiniHash_init();
        [hash_ readDataStreamWithJavaIoDataInputStream:mInput];
        [rec addObjectWithNSString:@"txpowid" withId:hash_];
      }
      else if ([msgtype isEqualWithOrgMinimaObjectsBaseMiniByte:OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW]) {
        OrgMinimaObjectsTxPOW *tx = create_OrgMinimaObjectsTxPOW_init();
        [tx readDataStreamWithJavaIoDataInputStream:mInput];
        [rec addObjectWithNSString:@"txpow" withId:tx];
      }
      else if ([msgtype isEqualWithOrgMinimaObjectsBaseMiniByte:OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW_REQUEST]) {
        OrgMinimaObjectsBaseMiniHash *hash_ = create_OrgMinimaObjectsBaseMiniHash_init();
        [hash_ readDataStreamWithJavaIoDataInputStream:mInput];
        [rec addObjectWithNSString:@"txpowid" withId:hash_];
      }
      else {
        valid = false;
        OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@", @"Invalid message on network : ", rec));
      }
      if (valid) {
        [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk(consensus)) PostMessageWithOrgMinimaUtilsMessagesMessage:rec];
      }
      else {
        break;
      }
    }
  }
  @catch (JavaLangException *exc) {
  }
  [((OrgMinimaSystemNetworkNetworkHandler *) nil_chk([((OrgMinimaSystemNetworkNetClient *) nil_chk(mNetClient_)) getNetworkHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:[create_OrgMinimaUtilsMessagesMessage_initWithNSString_(OrgMinimaSystemNetworkNetworkHandler_NETWORK_CLIENTERROR) addObjectWithNSString:@"client" withId:mNetClient_]];
}

- (void)dealloc {
  RELEASE_(mNetClient_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemNetworkNetClient:);
  methods[1].selector = @selector(run);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "NETMESSAGE_INTRO", "LOrgMinimaObjectsBaseMiniByte;", .constantValue.asLong = 0, 0x19, -1, 1, -1, -1 },
    { "NETMESSAGE_TXPOWID", "LOrgMinimaObjectsBaseMiniByte;", .constantValue.asLong = 0, 0x19, -1, 2, -1, -1 },
    { "NETMESSAGE_TXPOW_REQUEST", "LOrgMinimaObjectsBaseMiniByte;", .constantValue.asLong = 0, 0x19, -1, 3, -1, -1 },
    { "NETMESSAGE_TXPOW", "LOrgMinimaObjectsBaseMiniByte;", .constantValue.asLong = 0, 0x19, -1, 4, -1, -1 },
    { "mNetClient_", "LOrgMinimaSystemNetworkNetClient;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemNetworkNetClient;", &OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_INTRO, &OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOWID, &OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW_REQUEST, &OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkNetClientReader = { "NetClientReader", "org.minima.system.network", ptrTable, methods, fields, 7, 0x1, 2, 5, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemNetworkNetClientReader;
}

+ (void)initialize {
  if (self == [OrgMinimaSystemNetworkNetClientReader class]) {
    JreStrongAssignAndConsume(&OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_INTRO, new_OrgMinimaObjectsBaseMiniByte_initWithInt_(0));
    JreStrongAssignAndConsume(&OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOWID, new_OrgMinimaObjectsBaseMiniByte_initWithInt_(1));
    JreStrongAssignAndConsume(&OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW_REQUEST, new_OrgMinimaObjectsBaseMiniByte_initWithInt_(2));
    JreStrongAssignAndConsume(&OrgMinimaSystemNetworkNetClientReader_NETMESSAGE_TXPOW, new_OrgMinimaObjectsBaseMiniByte_initWithInt_(3));
    J2OBJC_SET_INITIALIZED(OrgMinimaSystemNetworkNetClientReader)
  }
}

@end

void OrgMinimaSystemNetworkNetClientReader_initWithOrgMinimaSystemNetworkNetClient_(OrgMinimaSystemNetworkNetClientReader *self, OrgMinimaSystemNetworkNetClient *zNetClient) {
  NSObject_init(self);
  JreStrongAssign(&self->mNetClient_, zNetClient);
}

OrgMinimaSystemNetworkNetClientReader *new_OrgMinimaSystemNetworkNetClientReader_initWithOrgMinimaSystemNetworkNetClient_(OrgMinimaSystemNetworkNetClient *zNetClient) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkNetClientReader, initWithOrgMinimaSystemNetworkNetClient_, zNetClient)
}

OrgMinimaSystemNetworkNetClientReader *create_OrgMinimaSystemNetworkNetClientReader_initWithOrgMinimaSystemNetworkNetClient_(OrgMinimaSystemNetworkNetClient *zNetClient) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkNetClientReader, initWithOrgMinimaSystemNetworkNetClient_, zNetClient)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemNetworkNetClientReader)