//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/Start.java
//

#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/io/BufferedReader.h"
#include "java/io/File.h"
#include "java/io/IOException.h"
#include "java/io/InputStream.h"
#include "java/io/InputStreamReader.h"
#include "java/io/PrintStream.h"
#include "java/lang/Integer.h"
#include "java/lang/InterruptedException.h"
#include "java/lang/Runnable.h"
#include "java/lang/System.h"
#include "java/lang/Thread.h"
#include "java/util/ArrayList.h"
#include "org/minima/NativeListener.h"
#include "org/minima/Start.h"
#include "org/minima/system/Main.h"
#include "org/minima/system/backup/BackupManager.h"
#include "org/minima/system/brains/ConsensusHandler.h"
#include "org/minima/system/input/InputHandler.h"
#include "org/minima/system/input/InputMessage.h"
#include "org/minima/utils/MiniFormat.h"
#include "org/minima/utils/MinimaLogger.h"
#include "org/minima/utils/ResponseStream.h"
#include "org/minima/utils/messages/Message.h"
#import "App-Swift.h"

@interface OrgMinimaStart_1 : NSObject < JavaLangRunnable >

- (instancetype)init;

- (void)run;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaStart_1)

__attribute__((unused)) static void OrgMinimaStart_1_init(OrgMinimaStart_1 *self);

__attribute__((unused)) static OrgMinimaStart_1 *new_OrgMinimaStart_1_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaStart_1 *create_OrgMinimaStart_1_init(void);

@interface OrgMinimaStart_2 : NSObject < OrgMinimaNativeListener >

- (instancetype)init;

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaStart_2)

__attribute__((unused)) static void OrgMinimaStart_2_init(OrgMinimaStart_2 *self);

__attribute__((unused)) static OrgMinimaStart_2 *new_OrgMinimaStart_2_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaStart_2 *create_OrgMinimaStart_2_init(void);

OrgMinimaSystemMain *OrgMinimaStart_mMainServer;

@implementation OrgMinimaStart

+ (OrgMinimaSystemMain *)getServer {
  return OrgMinimaStart_getServer();
}

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaStart_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (void)mainWithNSStringArray:(IOSObjectArray *)zArgs {
  OrgMinimaStart_mainWithNSStringArray_(zArgs);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, "LOrgMinimaSystemMain;", 0x9, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 0, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(getServer);
  methods[1].selector = @selector(init);
  methods[2].selector = @selector(mainWithNSStringArray:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mMainServer", "LOrgMinimaSystemMain;", .constantValue.asLong = 0, 0x9, -1, 2, -1, -1 },
  };
  static const void *ptrTable[] = { "main", "[LNSString;", &OrgMinimaStart_mMainServer };
  static const J2ObjcClassInfo _OrgMinimaStart = { "Start", "org.minima", ptrTable, methods, fields, 7, 0x1, 3, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaStart;
}

@end

OrgMinimaSystemMain *OrgMinimaStart_getServer() {
  OrgMinimaStart_initialize();
  return OrgMinimaStart_mMainServer;
}

void OrgMinimaStart_init(OrgMinimaStart *self) {
  NSObject_init(self);
  id<JavaLangRunnable> mainrunner = create_OrgMinimaStart_1_init();
  JavaLangThread *mainthread = create_JavaLangThread_initWithJavaLangRunnable_(mainrunner);
  [mainthread start];
}

OrgMinimaStart *new_OrgMinimaStart_init() {
  J2OBJC_NEW_IMPL(OrgMinimaStart, init)
}

OrgMinimaStart *create_OrgMinimaStart_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaStart, init)
}

void OrgMinimaStart_mainWithNSStringArray_(IOSObjectArray *zArgs) {
  OrgMinimaStart_initialize();
  jint arglen = ((IOSObjectArray *) nil_chk(zArgs))->size_;
  jint port = 9001;
  jint rpcport = 8999;
  NSString *txnfunction = @"";
  NSString *relcoin = @"";
  jboolean connect = true;
  NSString *connecthost = @"34.90.172.118";
  jint connectport = 9001;
  NSString *mifiProxy = @"http://mifi.minima.global:9000/";
  jboolean clean = false;
  jboolean genesis = false;
  jboolean daemon = false;
  JavaIoFile *conf = create_JavaIoFile_initWithNSString_withNSString_(JavaLangSystem_getPropertyWithNSString_(@"user.home"), @".minima");
  NSString *conffolder = [conf getAbsolutePath];
  if (arglen > 0) {
    jint counter = 0;
    while (counter < arglen) {
      NSString *arg = IOSObjectArray_Get(zArgs, counter);
      counter++;
      if ([((NSString *) nil_chk(arg)) isEqual:@"-port"]) {
        port = JavaLangInteger_parseIntWithNSString_(IOSObjectArray_Get(zArgs, counter++));
      }
      else if ([arg isEqual:@"-rpcport"]) {
        rpcport = JavaLangInteger_parseIntWithNSString_(IOSObjectArray_Get(zArgs, counter++));
      }
      else if ([arg isEqual:@"-help"]) {
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"Minima v0.4 Alpha Test Net");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -port [port number]    : Specify port to listen on");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -rpcport [port number] : Specify port to listen on for RPC connections");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -conf [folder]         : Specify configuration folder, where data is saved");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -private               : Run a private chain. Don't connect to MainNet. Create a genesis tx-pow. Simulate some users.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -noconnect             : Don't connect to MainNet. Can then connect to private chains.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -connect [host] [port] : Don't connect to MainNet. Connect to this node.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -mifiproxy [host:port] : Use this address for MiFi proxy requests and not the default.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -clean                 : Wipe user files and chain backup. Start afresh.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -daemon                : Accepts no input from STDIN. Can run in background process.");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"        -help                  : Show this help");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"");
        OrgMinimaUtilsMinimaLogger_logWithNSString_(@"With zero params Minima will start and connect to the Main Net.");
        return;
      }
      else if ([arg isEqual:@"-private"]) {
        genesis = true;
        connect = false;
        clean = true;
      }
      else if ([arg isEqual:@"-noconnect"]) {
        connect = false;
      }
      else if ([arg isEqual:@"-daemon"]) {
        daemon = true;
      }
      else if ([arg isEqual:@"-connect"]) {
        connect = true;
        connecthost = IOSObjectArray_Get(zArgs, counter++);
        connectport = JavaLangInteger_parseIntWithNSString_(IOSObjectArray_Get(zArgs, counter++));
      }
      else if ([arg isEqual:@"-mifiproxy"]) {
        mifiProxy = IOSObjectArray_Get(zArgs, counter++);
      }
      else if ([arg isEqual:@"-clean"]) {
        clean = true;
      }
      else if ([arg isEqual:@"-txncall"]) {
        txnfunction = IOSObjectArray_Get(zArgs, counter++);
      }
      else if ([arg isEqual:@"-relcoin"]) {
        relcoin = IOSObjectArray_Get(zArgs, counter++);
      }
      else if ([arg isEqual:@"-conf"]) {
        conffolder = IOSObjectArray_Get(zArgs, counter++);
      }
      else {
        OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$$", @"UNKNOWN arg.. : ", arg));
        JavaLangSystem_exitWithInt_(0);
      }
    }
  }
  if (clean) {
    OrgMinimaSystemBackupBackupManager_deleteFolderWithJavaIoFile_(create_JavaIoFile_initWithNSString_(conffolder));
  }
  OrgMinimaSystemMain *rcmainserver = create_OrgMinimaSystemMain_initWithInt_withInt_withBoolean_withNSString_(port, rpcport, genesis, conffolder);
  JreStrongAssign(&OrgMinimaStart_mMainServer, rcmainserver);
  [rcmainserver setAutoConnectWithBoolean:connect];
  JreStrongAssign(&rcmainserver->mAutoHost_, connecthost);
  rcmainserver->mAutoPort_ = connectport;
  [rcmainserver setMiFiProxyWithNSString:mifiProxy];
  if (![((NSString *) nil_chk(txnfunction)) isEqual:@""]) {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$$", @"New Txn function : ", txnfunction));
    [rcmainserver setNewTxnCommandWithNSString:txnfunction];
  }
  if (![((NSString *) nil_chk(relcoin)) isEqual:@""]) {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$$", @"New Relevant Coin URL : ", relcoin));
    [rcmainserver setNewRelCoinWithNSString:relcoin];
  }
  [rcmainserver PostMessageWithNSString:OrgMinimaSystemMain_SYSTEM_STARTUP];
  [((OrgMinimaSystemBrainsConsensusHandler *) nil_chk([rcmainserver getConsensusHandler])) addListenerWithOrgMinimaNativeListener:create_OrgMinimaStart_2_init()];
  if (daemon) {
    [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:@"Daemon Started.."];
    while ([rcmainserver isRunning]) {
      @try {
        JavaLangThread_sleepWithLong_(1000);
      }
      @catch (JavaLangInterruptedException *e) {
        [e printStackTrace];
      }
    }
  }
  else {
    JavaIoInputStreamReader *is = create_JavaIoInputStreamReader_initWithJavaIoInputStream_(JreLoadStatic(JavaLangSystem, in));
    JavaIoBufferedReader *bis = create_JavaIoBufferedReader_initWithJavaIoReader_(is);
    while ([rcmainserver isRunning]) {
      @try {
        NSString *input = [((NSString *) nil_chk([bis readLine])) java_trim];
        if (input != nil && ![input isEqual:@""]) {
          OrgMinimaUtilsResponseStream *response = create_OrgMinimaUtilsResponseStream_init();
          OrgMinimaSystemInputInputMessage *inmsg = create_OrgMinimaSystemInputInputMessage_initWithNSString_withOrgMinimaUtilsResponseStream_(input, response);
          [((OrgMinimaSystemInputInputHandler *) nil_chk([rcmainserver getInputHandler])) PostMessageWithOrgMinimaUtilsMessagesMessage:inmsg];
          if ([((NSString *) nil_chk([input lowercaseString])) isEqual:@"quit"]) {
            break;
          }
          [response waitToFinish];
          NSString *resp = [response getResponse];
          if ([((NSString *) nil_chk(resp)) java_hasPrefix:@"{"] || [resp java_hasPrefix:@"["]) {
            resp = OrgMinimaUtilsMiniFormat_PrettyJSONWithNSString_(resp);
          }
          [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:resp];
        }
      }
      @catch (JavaIoIOException *ex) {
        OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("@", ex));
      }
    }
    @try {
      [bis close];
      [is close];
    }
    @catch (JavaIoIOException *ex) {
      OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("@", ex));
    }
  }
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaStart)

@implementation OrgMinimaStart_1

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaStart_1_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)run {
  [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:@"Minima Started.."];
  JavaUtilArrayList *vars = create_JavaUtilArrayList_init();
  [vars addWithId:@"-private"];
  [vars addWithId:@"-daemon"];
  [vars addWithId:@"-clean"];
  OrgMinimaStart_mainWithNSStringArray_([vars toArrayWithNSObjectArray:[IOSObjectArray arrayWithLength:0 type:NSString_class_()]]);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x0, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(run);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "LOrgMinimaStart;", "init" };
  static const J2ObjcClassInfo _OrgMinimaStart_1 = { "", "org.minima", ptrTable, methods, NULL, 7, 0x8010, 2, 0, 0, -1, 1, -1, -1 };
  return &_OrgMinimaStart_1;
}

@end

void OrgMinimaStart_1_init(OrgMinimaStart_1 *self) {
  NSObject_init(self);
}

OrgMinimaStart_1 *new_OrgMinimaStart_1_init() {
  J2OBJC_NEW_IMPL(OrgMinimaStart_1, init)
}

OrgMinimaStart_1 *create_OrgMinimaStart_1_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaStart_1, init)
}

@implementation OrgMinimaStart_2

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaStart_2_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)processMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
    if ([((OrgMinimaUtilsMessagesMessage *) nil_chk(zMessage)) isMessageTypeWithNSString:OrgMinimaSystemBrainsConsensusHandler_CONSENSUS_NOTIFY_BALANCE]) {
        
        //Notification call through Swift
        TestClass *insta = [[TestClass alloc] init];
        
        
        [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out)))printlnWithNSString:JreStrcat("$@", @"You just received some Minima. ", zMessage)];
    }

}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x0, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "processMessage", "LOrgMinimaUtilsMessagesMessage;", "LOrgMinimaStart;", "mainWithNSStringArray:" };
  static const J2ObjcClassInfo _OrgMinimaStart_2 = { "", "org.minima", ptrTable, methods, NULL, 7, 0x8018, 2, 0, 2, -1, 3, -1, -1 };
  return &_OrgMinimaStart_2;
}

@end

void OrgMinimaStart_2_init(OrgMinimaStart_2 *self) {
  NSObject_init(self);
}

OrgMinimaStart_2 *new_OrgMinimaStart_2_init() {
  J2OBJC_NEW_IMPL(OrgMinimaStart_2, init)
}

OrgMinimaStart_2 *create_OrgMinimaStart_2_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaStart_2, init)
}