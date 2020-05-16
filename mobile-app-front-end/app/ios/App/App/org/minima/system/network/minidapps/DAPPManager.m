//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/minidapps/DAPPManager.java
//

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/BufferedInputStream.h"
#include "java/io/BufferedOutputStream.h"
#include "java/io/BufferedReader.h"
#include "java/io/ByteArrayInputStream.h"
#include "java/io/File.h"
#include "java/io/FileInputStream.h"
#include "java/io/FileOutputStream.h"
#include "java/io/IOException.h"
#include "java/io/InputStreamReader.h"
#include "java/io/PrintStream.h"
#include "java/lang/Exception.h"
#include "java/lang/StringBuilder.h"
#include "java/lang/System.h"
#include "java/lang/Thread.h"
#include "java/net/InetAddress.h"
#include "java/net/NetworkInterface.h"
#include "java/net/SocketException.h"
#include "java/nio/charset/Charset.h"
#include "java/util/Collections.h"
#include "java/util/Comparator.h"
#include "java/util/Enumeration.h"
#include "java/util/function/Function.h"
#include "java/util/function/ToDoubleFunction.h"
#include "java/util/function/ToIntFunction.h"
#include "java/util/function/ToLongFunction.h"
#include "java/util/zip/ZipEntry.h"
#include "java/util/zip/ZipInputStream.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/SystemHandler.h"
#include "org/minima/system/backup/BackupManager.h"
#include "org/minima/system/network/minidapps/DAPPManager.h"
#include "org/minima/system/network/minidapps/DAPPServer.h"
#include "org/minima/system/network/minidapps/hexdata/minimajs.h"
#include "org/minima/utils/Crypto.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/json/JSONArray.h"
#include "org/minima/utils/json/JSONObject.h"
#include "org/minima/utils/json/parser/JSONParser.h"
#include "org/minima/utils/json/parser/ParseException.h"
#include "org/minima/utils/messages/Message.h"

#pragma clang diagnostic ignored "-Wprotocol"

@interface OrgMinimaSystemNetworkMinidappsDAPPManager_1 : NSObject < JavaUtilComparator >

- (instancetype)init;

- (jint)compareWithId:(OrgMinimaUtilsJsonJSONObject *)o1
               withId:(OrgMinimaUtilsJsonJSONObject *)o2;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemNetworkMinidappsDAPPManager_1)

__attribute__((unused)) static void OrgMinimaSystemNetworkMinidappsDAPPManager_1_init(OrgMinimaSystemNetworkMinidappsDAPPManager_1 *self);

__attribute__((unused)) static OrgMinimaSystemNetworkMinidappsDAPPManager_1 *new_OrgMinimaSystemNetworkMinidappsDAPPManager_1_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaSystemNetworkMinidappsDAPPManager_1 *create_OrgMinimaSystemNetworkMinidappsDAPPManager_1_init(void);

NSString *OrgMinimaSystemNetworkMinidappsDAPPManager_DAPP_INSTALL = @"DAPP_INSTALL";

@implementation OrgMinimaSystemNetworkMinidappsDAPPManager

- (instancetype)initWithOrgMinimaSystemMain:(OrgMinimaSystemMain *)zMain
                                    withInt:(jint)zPort
                                    withInt:(jint)zRPCPort {
  OrgMinimaSystemNetworkMinidappsDAPPManager_initWithOrgMinimaSystemMain_withInt_withInt_(self, zMain, zPort, zRPCPort);
  return self;
}

- (NSString *)getCurrentHost {
  return mHost_;
}

- (IOSByteArray *)getMinimaJS {
  return mMINIMAJS_;
}

- (void)stop {
  [((OrgMinimaSystemNetworkMinidappsDAPPServer *) nil_chk(mDAPPServer_)) stop];
  [self stopMessageProcessor];
}

- (OrgMinimaUtilsJsonJSONArray *)getMiniDAPPS {
  return CURRENT_MINIDAPPS_;
}

- (NSString *)getMiniDAPPSFolder {
  return MINIDAPPS_FOLDER_;
}

- (OrgMinimaUtilsJsonJSONObject *)loadConfFileWithJavaIoFile:(JavaIoFile *)zConf {
  OrgMinimaUtilsJsonJSONObject *ret = new_OrgMinimaUtilsJsonJSONObject_init();
  @try {
    JavaLangStringBuilder *tot = new_JavaLangStringBuilder_init();
    JavaIoFileInputStream *fis = new_JavaIoFileInputStream_initWithJavaIoFile_(zConf);
    JavaIoInputStreamReader *is = new_JavaIoInputStreamReader_initWithJavaIoInputStream_(fis);
    JavaIoBufferedReader *bis = new_JavaIoBufferedReader_initWithJavaIoReader_(is);
    NSString *sCurrentLine;
    while ((sCurrentLine = [bis readLine]) != nil) {
      (void) [((JavaLangStringBuilder *) nil_chk([tot appendWithNSString:sCurrentLine])) appendWithNSString:@"\n"];
    }
    OrgMinimaUtilsJsonParserJSONParser *parser = new_OrgMinimaUtilsJsonParserJSONParser_init();
    ret = (OrgMinimaUtilsJsonJSONObject *) cast_chk([parser parseWithNSString:[tot description]], [OrgMinimaUtilsJsonJSONObject class]);
    NSString *root = [((JavaIoFile *) nil_chk(zConf)) getParent];
    jint start = [((NSString *) nil_chk(root)) java_indexOfString:@"/minidapps/"];
    NSString *webroot = [root java_substring:start];
    NSString *approot = [root java_substring:start + 11];
    jint firstfolder = [((NSString *) nil_chk(approot)) java_indexOfString:@"/"];
    if (firstfolder != -1) {
      approot = [approot java_substring:0 endIndex:firstfolder];
    }
    (void) [((OrgMinimaUtilsJsonJSONObject *) nil_chk(ret)) putWithId:@"root" withId:webroot];
    (void) [ret putWithId:@"approot" withId:approot];
    [bis close];
    [fis close];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
  @catch (OrgMinimaUtilsJsonParserParseException *e) {
    [e printStackTrace];
  }
  return ret;
}

- (OrgMinimaUtilsJsonJSONArray *)recalculateMiniDAPPS {
  [((OrgMinimaUtilsJsonJSONArray *) nil_chk(CURRENT_MINIDAPPS_)) clear];
  JavaIoFile *root = [((OrgMinimaSystemBackupBackupManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getBackupManager])) getRootFolder];
  JavaIoFile *alldapps = new_JavaIoFile_initWithJavaIoFile_withNSString_(root, @"minidapps");
  if (![alldapps exists]) {
    [alldapps mkdirs];
  }
  MINIDAPPS_FOLDER_ = [alldapps getAbsolutePath];
  IOSObjectArray *apps = [alldapps listFiles];
  if (apps != nil) {
    {
      IOSObjectArray *a__ = apps;
      JavaIoFile * const *b__ = a__->buffer_;
      JavaIoFile * const *e__ = b__ + a__->size_;
      while (b__ < e__) {
        JavaIoFile *app = *b__++;
        JavaIoFile *conf = new_JavaIoFile_initWithJavaIoFile_withNSString_(app, @"minidapp.conf");
        if (![conf exists]) {
          IOSObjectArray *subapps = [((JavaIoFile *) nil_chk(app)) listFiles];
          if (subapps != nil) {
            if ([((JavaIoFile *) nil_chk(IOSObjectArray_Get(subapps, 0))) isDirectory]) {
              conf = new_JavaIoFile_initWithJavaIoFile_withNSString_(IOSObjectArray_Get(subapps, 0), @"minidapp.conf");
            }
          }
        }
        if ([conf exists]) {
          OrgMinimaUtilsJsonJSONObject *confjson = [self loadConfFileWithJavaIoFile:conf];
          [((OrgMinimaUtilsJsonJSONArray *) nil_chk(CURRENT_MINIDAPPS_)) addWithId:confjson];
        }
      }
    }
  }
  JavaUtilCollections_sortWithJavaUtilList_withJavaUtilComparator_(CURRENT_MINIDAPPS_, new_OrgMinimaSystemNetworkMinidappsDAPPManager_1_init());
  return CURRENT_MINIDAPPS_;
}

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  if ([((NSString *) nil_chk([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) getMessageType])) isEqual:OrgMinimaSystemNetworkMinidappsDAPPManager_DAPP_INSTALL]) {
    OrgMinimaObjectsBaseMiniData *data = (OrgMinimaObjectsBaseMiniData *) cast_chk([zMessage getObjectWithNSString:@"minidapp"], [OrgMinimaObjectsBaseMiniData class]);
    OrgMinimaObjectsBaseMiniData *hash_ = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashObjectWithOrgMinimaUtilsStreamable:data withInt:160];
    JavaIoFile *root = [((OrgMinimaSystemBackupBackupManager *) nil_chk([((OrgMinimaSystemMain *) nil_chk([self getMainHandler])) getBackupManager])) getRootFolder];
    JavaIoFile *alldapps = new_JavaIoFile_initWithJavaIoFile_withNSString_(root, @"minidapps");
    JavaIoFile *dapp = new_JavaIoFile_initWithJavaIoFile_withNSString_(alldapps, [((OrgMinimaObjectsBaseMiniData *) nil_chk(hash_)) to0xString]);
    [dapp mkdirs];
    IOSByteArray *buffer = [IOSByteArray newArrayWithLength:2048];
    JavaIoByteArrayInputStream *bais = new_JavaIoByteArrayInputStream_initWithByteArray_([((OrgMinimaObjectsBaseMiniData *) nil_chk(data)) getData]);
    JavaIoBufferedInputStream *bis = new_JavaIoBufferedInputStream_initWithJavaIoInputStream_(bais);
    JavaUtilZipZipInputStream *stream = new_JavaUtilZipZipInputStream_initWithJavaIoInputStream_(bis);
    JavaUtilZipZipEntry *entry_ = nil;
    while ((entry_ = [stream getNextEntry]) != nil) {
      JavaIoFile *filePath = new_JavaIoFile_initWithJavaIoFile_withNSString_(dapp, [((JavaUtilZipZipEntry *) nil_chk(entry_)) getName]);
      JavaIoFile *parent = [filePath getParentFile];
      if (![((JavaIoFile *) nil_chk(parent)) exists]) {
        [parent mkdirs];
      }
      if ([entry_ isDirectory]) {
        [filePath mkdirs];
      }
      else {
        if ([filePath exists]) {
          [filePath delete__];
        }
        JavaIoFileOutputStream *fos = new_JavaIoFileOutputStream_initWithJavaIoFile_(filePath);
        JavaIoBufferedOutputStream *bos = new_JavaIoBufferedOutputStream_initWithJavaIoOutputStream_withInt_(fos, buffer->size_);
        jint len;
        while ((len = [stream readWithByteArray:buffer]) > 0) {
          [bos writeWithByteArray:buffer withInt:0 withInt:len];
        }
        [bos flush];
      }
    }
    (void) [self recalculateMiniDAPPS];
  }
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "[B", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONArray;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONArray;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x4, 3, 4, 5, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaSystemMain:withInt:withInt:);
  methods[1].selector = @selector(getCurrentHost);
  methods[2].selector = @selector(getMinimaJS);
  methods[3].selector = @selector(stop);
  methods[4].selector = @selector(getMiniDAPPS);
  methods[5].selector = @selector(getMiniDAPPSFolder);
  methods[6].selector = @selector(loadConfFileWithJavaIoFile:);
  methods[7].selector = @selector(recalculateMiniDAPPS);
  methods[8].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "DAPP_INSTALL", "LNSString;", .constantValue.asLong = 0, 0x9, -1, 6, -1, -1 },
    { "CURRENT_MINIDAPPS_", "LOrgMinimaUtilsJsonJSONArray;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "MINIDAPPS_FOLDER_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mDAPPServer_", "LOrgMinimaSystemNetworkMinidappsDAPPServer;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mMINIMAJS_", "[B", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mHost_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaSystemMain;II", "loadConfFile", "LJavaIoFile;", "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LJavaLangException;", &OrgMinimaSystemNetworkMinidappsDAPPManager_DAPP_INSTALL };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkMinidappsDAPPManager = { "DAPPManager", "org.minima.system.network.minidapps", ptrTable, methods, fields, 7, 0x1, 9, 6, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemNetworkMinidappsDAPPManager;
}

@end

void OrgMinimaSystemNetworkMinidappsDAPPManager_initWithOrgMinimaSystemMain_withInt_withInt_(OrgMinimaSystemNetworkMinidappsDAPPManager *self, OrgMinimaSystemMain *zMain, jint zPort, jint zRPCPort) {
  OrgMinimaSystemSystemHandler_initWithOrgMinimaSystemMain_withNSString_(self, zMain, @"DAPPMAnager");
  self->CURRENT_MINIDAPPS_ = new_OrgMinimaUtilsJsonJSONArray_init();
  self->MINIDAPPS_FOLDER_ = @"";
  self->mMINIMAJS_ = [IOSByteArray newArrayWithLength:0];
  self->mHost_ = @"127.0.0.1";
//  jboolean found = false;
//  @try {
//    id<JavaUtilEnumeration> interfaces = JavaNetNetworkInterface_getNetworkInterfaces();
//    while (!found && [((id<JavaUtilEnumeration>) nil_chk(interfaces)) hasMoreElements]) {
//      JavaNetNetworkInterface *iface = [((id<JavaUtilEnumeration>) nil_chk(interfaces)) nextElement];
//      if ([((JavaNetNetworkInterface *) nil_chk(iface)) isLoopback] || ![iface isUp]) continue;
//      id<JavaUtilEnumeration> addresses = [iface getInetAddresses];
//      while (!found && [((id<JavaUtilEnumeration>) nil_chk(addresses)) hasMoreElements]) {
//        JavaNetInetAddress *addr = [((id<JavaUtilEnumeration>) nil_chk(addresses)) nextElement];
//        NSString *ip = [((JavaNetInetAddress *) nil_chk(addr)) getHostAddress];
//        NSString *name = [iface getDisplayName];
//        if (![((NSString *) nil_chk(ip)) java_contains:@":"]) {
//          self->mHost_ = ip;
//          if ([((NSString *) nil_chk(name)) java_hasPrefix:@"wl"]) {
//            found = true;
//            break;
//          }
//        }
//      }
//    }
//  }
//  @catch (JavaNetSocketException *e) {
//    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$@", @"DAPPMANAGER : ", e));
//  }
  NSString *hostport = JreStrcat("$CI", self->mHost_, ':', zRPCPort);
  @try {
    IOSByteArray *minima = OrgMinimaSystemNetworkMinidappsHexdataminimajs_returnData();
    NSString *minstring = [NSString java_stringWithBytes:minima charset:JavaNioCharsetCharset_forNameWithNSString_(@"UTF-8")];
    NSString *editstring = [minstring java_replace:@"######" withSequence:JreStrcat("$$$", @"var MINIMA_MINIDAPP_HOST = \"", hostport, @"\";")];
    self->mMINIMAJS_ = [((NSString *) nil_chk(editstring)) java_getBytes];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
  (void) [self recalculateMiniDAPPS];
  self->mDAPPServer_ = new_OrgMinimaSystemNetworkMinidappsDAPPServer_initWithInt_withOrgMinimaSystemNetworkMinidappsDAPPManager_(zPort, self);
  JavaLangThread *tt = new_JavaLangThread_initWithJavaLangRunnable_withNSString_(self->mDAPPServer_, @"DAPP Server");
  [tt start];
}

OrgMinimaSystemNetworkMinidappsDAPPManager *new_OrgMinimaSystemNetworkMinidappsDAPPManager_initWithOrgMinimaSystemMain_withInt_withInt_(OrgMinimaSystemMain *zMain, jint zPort, jint zRPCPort) {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkMinidappsDAPPManager, initWithOrgMinimaSystemMain_withInt_withInt_, zMain, zPort, zRPCPort)
}

OrgMinimaSystemNetworkMinidappsDAPPManager *create_OrgMinimaSystemNetworkMinidappsDAPPManager_initWithOrgMinimaSystemMain_withInt_withInt_(OrgMinimaSystemMain *zMain, jint zPort, jint zRPCPort) {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkMinidappsDAPPManager, initWithOrgMinimaSystemMain_withInt_withInt_, zMain, zPort, zRPCPort)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemNetworkMinidappsDAPPManager)

@implementation OrgMinimaSystemNetworkMinidappsDAPPManager_1

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemNetworkMinidappsDAPPManager_1_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (jint)compareWithId:(OrgMinimaUtilsJsonJSONObject *)o1
               withId:(OrgMinimaUtilsJsonJSONObject *)o2 {
  @try {
    NSString *name1 = (NSString *) cast_chk([((OrgMinimaUtilsJsonJSONObject *) nil_chk(o1)) getWithId:@"name"], [NSString class]);
    NSString *name2 = (NSString *) cast_chk([((OrgMinimaUtilsJsonJSONObject *) nil_chk(o2)) getWithId:@"name"], [NSString class]);
    return [((NSString *) nil_chk(name1)) compareToWithId:name2];
  }
  @catch (JavaLangException *exc) {
    [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:JreStrcat("$@", @"Error in MiniDAPP CONF ", exc)];
  }
  return 0;
}

- (id<JavaUtilComparator>)reversed {
  return JavaUtilComparator_reversed(self);
}

- (id<JavaUtilComparator>)thenComparingWithJavaUtilComparator:(id<JavaUtilComparator>)arg0 {
  return JavaUtilComparator_thenComparingWithJavaUtilComparator_(self, arg0);
}

- (id<JavaUtilComparator>)thenComparingWithJavaUtilFunctionFunction:(id<JavaUtilFunctionFunction>)arg0
                                             withJavaUtilComparator:(id<JavaUtilComparator>)arg1 {
  return JavaUtilComparator_thenComparingWithJavaUtilFunctionFunction_withJavaUtilComparator_(self, arg0, arg1);
}

- (id<JavaUtilComparator>)thenComparingWithJavaUtilFunctionFunction:(id<JavaUtilFunctionFunction>)arg0 {
  return JavaUtilComparator_thenComparingWithJavaUtilFunctionFunction_(self, arg0);
}

- (id<JavaUtilComparator>)thenComparingIntWithJavaUtilFunctionToIntFunction:(id<JavaUtilFunctionToIntFunction>)arg0 {
  return JavaUtilComparator_thenComparingIntWithJavaUtilFunctionToIntFunction_(self, arg0);
}

- (id<JavaUtilComparator>)thenComparingLongWithJavaUtilFunctionToLongFunction:(id<JavaUtilFunctionToLongFunction>)arg0 {
  return JavaUtilComparator_thenComparingLongWithJavaUtilFunctionToLongFunction_(self, arg0);
}

- (id<JavaUtilComparator>)thenComparingDoubleWithJavaUtilFunctionToDoubleFunction:(id<JavaUtilFunctionToDoubleFunction>)arg0 {
  return JavaUtilComparator_thenComparingDoubleWithJavaUtilFunctionToDoubleFunction_(self, arg0);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x0, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, 0, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(compareWithId:withId:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "compare", "LOrgMinimaUtilsJsonJSONObject;LOrgMinimaUtilsJsonJSONObject;", "LOrgMinimaSystemNetworkMinidappsDAPPManager;", "recalculateMiniDAPPS", "Ljava/lang/Object;Ljava/util/Comparator<Lorg/minima/utils/json/JSONObject;>;" };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkMinidappsDAPPManager_1 = { "", "org.minima.system.network.minidapps", ptrTable, methods, NULL, 7, 0x8010, 2, 0, 2, -1, 3, 4, -1 };
  return &_OrgMinimaSystemNetworkMinidappsDAPPManager_1;
}

@end

void OrgMinimaSystemNetworkMinidappsDAPPManager_1_init(OrgMinimaSystemNetworkMinidappsDAPPManager_1 *self) {
  NSObject_init(self);
}

OrgMinimaSystemNetworkMinidappsDAPPManager_1 *new_OrgMinimaSystemNetworkMinidappsDAPPManager_1_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkMinidappsDAPPManager_1, init)
}

OrgMinimaSystemNetworkMinidappsDAPPManager_1 *create_OrgMinimaSystemNetworkMinidappsDAPPManager_1_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkMinidappsDAPPManager_1, init)
}