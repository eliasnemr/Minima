//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/tests/chatter/ChatterClient.java
//

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/BufferedReader.h"
#include "java/io/IOException.h"
#include "java/io/InputStream.h"
#include "java/io/InputStreamReader.h"
#include "java/io/PrintStream.h"
#include "java/lang/Exception.h"
#include "java/lang/InterruptedException.h"
#include "java/lang/StringBuffer.h"
#include "java/lang/System.h"
#include "java/lang/Thread.h"
#include "java/net/ConnectException.h"
#include "java/net/InetAddress.h"
#include "java/net/InetSocketAddress.h"
#include "java/net/UnknownHostException.h"
#include "java/nio/Buffer.h"
#include "java/nio/ByteBuffer.h"
#include "java/nio/CharBuffer.h"
#include "java/nio/channels/ClosedChannelException.h"
#include "java/nio/channels/SelectableChannel.h"
#include "java/nio/channels/SelectionKey.h"
#include "java/nio/channels/Selector.h"
#include "java/nio/channels/SocketChannel.h"
#include "java/nio/charset/Charset.h"
#include "java/nio/charset/CharsetDecoder.h"
#include "java/util/Iterator.h"
#include "java/util/Set.h"
#include "org/minima/utils/tests/chatter/ChatterClient.h"

@interface OrgMinimaUtilsTestsChatterChatterClient () {
 @public
  JavaNioByteBuffer *writeBuffer_;
  JavaNioByteBuffer *readBuffer_;
  jboolean running_;
  JavaNioChannelsSocketChannel *channel_;
  NSString *host_;
  JavaNioChannelsSelector *readSelector_;
  JavaNioCharsetCharsetDecoder *asciiDecoder_;
  OrgMinimaUtilsTestsChatterChatterClient_InputThread *it_;
}

- (void)connectWithNSString:(NSString *)hostname;

- (void)readIncomingMessages;

- (void)sendMessageWithNSString:(NSString *)mesg;

- (void)prepWriteBufferWithNSString:(NSString *)mesg;

- (void)channelWriteWithJavaNioChannelsSocketChannel:(JavaNioChannelsSocketChannel *)channel
                               withJavaNioByteBuffer:(JavaNioByteBuffer *)writeBuffer;

@end

J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, writeBuffer_, JavaNioByteBuffer *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, readBuffer_, JavaNioByteBuffer *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, channel_, JavaNioChannelsSocketChannel *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, host_, NSString *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, readSelector_, JavaNioChannelsSelector *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, asciiDecoder_, JavaNioCharsetCharsetDecoder *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient, it_, OrgMinimaUtilsTestsChatterChatterClient_InputThread *)

inline jint OrgMinimaUtilsTestsChatterChatterClient_get_BUFFER_SIZE(void);
#define OrgMinimaUtilsTestsChatterChatterClient_BUFFER_SIZE 255
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsTestsChatterChatterClient, BUFFER_SIZE, jint)

inline jlong OrgMinimaUtilsTestsChatterChatterClient_get_CHANNEL_WRITE_SLEEP(void);
#define OrgMinimaUtilsTestsChatterChatterClient_CHANNEL_WRITE_SLEEP 10LL
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsTestsChatterChatterClient, CHANNEL_WRITE_SLEEP, jlong)

inline jint OrgMinimaUtilsTestsChatterChatterClient_get_PORT(void);
#define OrgMinimaUtilsTestsChatterChatterClient_PORT 10997
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsTestsChatterChatterClient, PORT, jint)

__attribute__((unused)) static void OrgMinimaUtilsTestsChatterChatterClient_connectWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *hostname);

__attribute__((unused)) static void OrgMinimaUtilsTestsChatterChatterClient_readIncomingMessages(OrgMinimaUtilsTestsChatterChatterClient *self);

__attribute__((unused)) static void OrgMinimaUtilsTestsChatterChatterClient_sendMessageWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *mesg);

__attribute__((unused)) static void OrgMinimaUtilsTestsChatterChatterClient_prepWriteBufferWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *mesg);

__attribute__((unused)) static void OrgMinimaUtilsTestsChatterChatterClient_channelWriteWithJavaNioChannelsSocketChannel_withJavaNioByteBuffer_(OrgMinimaUtilsTestsChatterChatterClient *self, JavaNioChannelsSocketChannel *channel, JavaNioByteBuffer *writeBuffer);

@interface OrgMinimaUtilsTestsChatterChatterClient_InputThread () {
 @public
  OrgMinimaUtilsTestsChatterChatterClient *cc_;
  jboolean running_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsChatterChatterClient_InputThread, cc_, OrgMinimaUtilsTestsChatterChatterClient *)

@implementation OrgMinimaUtilsTestsChatterChatterClient

+ (void)mainWithNSStringArray:(IOSObjectArray *)args {
  OrgMinimaUtilsTestsChatterChatterClient_mainWithNSStringArray_(args);
}

- (instancetype)initWithNSString:(NSString *)host {
  OrgMinimaUtilsTestsChatterChatterClient_initWithNSString_(self, host);
  return self;
}

- (void)run {
  OrgMinimaUtilsTestsChatterChatterClient_connectWithNSString_(self, host_);
  JreStrongAssignAndConsume(&it_, new_OrgMinimaUtilsTestsChatterChatterClient_InputThread_initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_(self, self));
  [it_ start];
  running_ = true;
  while (running_) {
    OrgMinimaUtilsTestsChatterChatterClient_readIncomingMessages(self);
    @try {
      JavaLangThread_sleepWithLong_(50);
    }
    @catch (JavaLangInterruptedException *ie) {
    }
  }
}

- (void)connectWithNSString:(NSString *)hostname {
  OrgMinimaUtilsTestsChatterChatterClient_connectWithNSString_(self, hostname);
}

- (void)readIncomingMessages {
  OrgMinimaUtilsTestsChatterChatterClient_readIncomingMessages(self);
}

- (void)sendMessageWithNSString:(NSString *)mesg {
  OrgMinimaUtilsTestsChatterChatterClient_sendMessageWithNSString_(self, mesg);
}

- (void)prepWriteBufferWithNSString:(NSString *)mesg {
  OrgMinimaUtilsTestsChatterChatterClient_prepWriteBufferWithNSString_(self, mesg);
}

- (void)channelWriteWithJavaNioChannelsSocketChannel:(JavaNioChannelsSocketChannel *)channel
                               withJavaNioByteBuffer:(JavaNioByteBuffer *)writeBuffer {
  OrgMinimaUtilsTestsChatterChatterClient_channelWriteWithJavaNioChannelsSocketChannel_withJavaNioByteBuffer_(self, channel, writeBuffer);
}

- (void)shutdown {
  running_ = false;
  [self interrupt];
}

- (void)dealloc {
  RELEASE_(writeBuffer_);
  RELEASE_(readBuffer_);
  RELEASE_(channel_);
  RELEASE_(host_);
  RELEASE_(readSelector_);
  RELEASE_(asciiDecoder_);
  RELEASE_(it_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, "V", 0x9, 0, 1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 3, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 4, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 5, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 6, 7, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(mainWithNSStringArray:);
  methods[1].selector = @selector(initWithNSString:);
  methods[2].selector = @selector(run);
  methods[3].selector = @selector(connectWithNSString:);
  methods[4].selector = @selector(readIncomingMessages);
  methods[5].selector = @selector(sendMessageWithNSString:);
  methods[6].selector = @selector(prepWriteBufferWithNSString:);
  methods[7].selector = @selector(channelWriteWithJavaNioChannelsSocketChannel:withJavaNioByteBuffer:);
  methods[8].selector = @selector(shutdown);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "BUFFER_SIZE", "I", .constantValue.asInt = OrgMinimaUtilsTestsChatterChatterClient_BUFFER_SIZE, 0x1a, -1, -1, -1, -1 },
    { "CHANNEL_WRITE_SLEEP", "J", .constantValue.asLong = OrgMinimaUtilsTestsChatterChatterClient_CHANNEL_WRITE_SLEEP, 0x1a, -1, -1, -1, -1 },
    { "PORT", "I", .constantValue.asInt = OrgMinimaUtilsTestsChatterChatterClient_PORT, 0x1a, -1, -1, -1, -1 },
    { "writeBuffer_", "LJavaNioByteBuffer;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "readBuffer_", "LJavaNioByteBuffer;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "running_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "channel_", "LJavaNioChannelsSocketChannel;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "host_", "LNSString;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "readSelector_", "LJavaNioChannelsSelector;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "asciiDecoder_", "LJavaNioCharsetCharsetDecoder;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "it_", "LOrgMinimaUtilsTestsChatterChatterClient_InputThread;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "main", "[LNSString;", "LNSString;", "connect", "sendMessage", "prepWriteBuffer", "channelWrite", "LJavaNioChannelsSocketChannel;LJavaNioByteBuffer;", "LOrgMinimaUtilsTestsChatterChatterClient_InputThread;" };
  static const J2ObjcClassInfo _OrgMinimaUtilsTestsChatterChatterClient = { "ChatterClient", "org.minima.utils.tests.chatter", ptrTable, methods, fields, 7, 0x1, 9, 11, -1, 8, -1, -1, -1 };
  return &_OrgMinimaUtilsTestsChatterChatterClient;
}

@end

void OrgMinimaUtilsTestsChatterChatterClient_mainWithNSStringArray_(IOSObjectArray *args) {
  OrgMinimaUtilsTestsChatterChatterClient_initialize();
  NSString *host = IOSObjectArray_Get(nil_chk(args), 0);
  OrgMinimaUtilsTestsChatterChatterClient *cc = create_OrgMinimaUtilsTestsChatterChatterClient_initWithNSString_(host);
  [cc start];
}

void OrgMinimaUtilsTestsChatterChatterClient_initWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *host) {
  JavaLangThread_init(self);
  JreStrongAssign(&self->host_, host);
  JreStrongAssign(&self->writeBuffer_, JavaNioByteBuffer_allocateDirectWithInt_(OrgMinimaUtilsTestsChatterChatterClient_BUFFER_SIZE));
  JreStrongAssign(&self->readBuffer_, JavaNioByteBuffer_allocateDirectWithInt_(OrgMinimaUtilsTestsChatterChatterClient_BUFFER_SIZE));
  JreStrongAssign(&self->asciiDecoder_, [((JavaNioCharsetCharset *) nil_chk(JavaNioCharsetCharset_forNameWithNSString_(@"US-ASCII"))) newDecoder]);
  
  ;
}

OrgMinimaUtilsTestsChatterChatterClient *new_OrgMinimaUtilsTestsChatterChatterClient_initWithNSString_(NSString *host) {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsTestsChatterChatterClient, initWithNSString_, host)
}

OrgMinimaUtilsTestsChatterChatterClient *create_OrgMinimaUtilsTestsChatterChatterClient_initWithNSString_(NSString *host) {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsTestsChatterChatterClient, initWithNSString_, host)
}

void OrgMinimaUtilsTestsChatterChatterClient_connectWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *hostname) {
  @try {
    JreStrongAssign(&self->readSelector_, JavaNioChannelsSelector_open());
    JavaNetInetAddress *addr = JavaNetInetAddress_getByNameWithNSString_(hostname);
    JreStrongAssign(&self->channel_, JavaNioChannelsSocketChannel_openWithJavaNetSocketAddress_(create_JavaNetInetSocketAddress_initWithJavaNetInetAddress_withInt_(addr, OrgMinimaUtilsTestsChatterChatterClient_PORT)));
    [((JavaNioChannelsSocketChannel *) nil_chk(self->channel_)) configureBlockingWithBoolean:false];
    [((JavaNioChannelsSocketChannel *) nil_chk(self->channel_)) register__WithJavaNioChannelsSelector:self->readSelector_ withInt:JavaNioChannelsSelectionKey_OP_READ withId:create_JavaLangStringBuffer_init()];
  }
  @catch (JavaNetUnknownHostException *uhe) {
  }
  @catch (JavaNetConnectException *ce) {
  }
  @catch (JavaLangException *e) {
  }
}

void OrgMinimaUtilsTestsChatterChatterClient_readIncomingMessages(OrgMinimaUtilsTestsChatterChatterClient *self) {
  @try {
    [((JavaNioChannelsSelector *) nil_chk(self->readSelector_)) selectNow];
    id<JavaUtilSet> readyKeys = [((JavaNioChannelsSelector *) nil_chk(self->readSelector_)) selectedKeys];
    id<JavaUtilIterator> i = [((id<JavaUtilSet>) nil_chk(readyKeys)) iterator];
    while ([((id<JavaUtilIterator>) nil_chk(i)) hasNext]) {
      JavaNioChannelsSelectionKey *key = (JavaNioChannelsSelectionKey *) cast_chk([i next], [JavaNioChannelsSelectionKey class]);
      [i remove];
      JavaNioChannelsSocketChannel *channel = (JavaNioChannelsSocketChannel *) cast_chk([((JavaNioChannelsSelectionKey *) nil_chk(key)) channel], [JavaNioChannelsSocketChannel class]);
      [((JavaNioByteBuffer *) nil_chk(self->readBuffer_)) clear];
      jlong nbytes = [((JavaNioChannelsSocketChannel *) nil_chk(channel)) readWithJavaNioByteBuffer:self->readBuffer_];
      if (nbytes == -1) {
        [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:@"disconnected from server: end-of-stream"];
        [channel close];
        [self shutdown];
        [((OrgMinimaUtilsTestsChatterChatterClient_InputThread *) nil_chk(self->it_)) shutdown];
      }
      else {
        JavaLangStringBuffer *sb = (JavaLangStringBuffer *) cast_chk([key attachment], [JavaLangStringBuffer class]);
        [((JavaNioByteBuffer *) nil_chk(self->readBuffer_)) flip];
        NSString *str = [((JavaNioCharBuffer *) nil_chk([((JavaNioCharsetCharsetDecoder *) nil_chk(self->asciiDecoder_)) decodeWithJavaNioByteBuffer:self->readBuffer_])) description];
        [((JavaLangStringBuffer *) nil_chk(sb)) appendWithNSString:str];
        [((JavaNioByteBuffer *) nil_chk(self->readBuffer_)) clear];
        NSString *line = [sb description];
        if (([((NSString *) nil_chk(line)) java_indexOfString:@"\n"] != -1) || ([line java_indexOfString:@"\x0d"] != -1)) {
          [sb delete__WithInt:0 withInt:[sb java_length]];
          [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printWithNSString:JreStrcat("C$", 0x000a, line)];
          [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printWithNSString:@"> "];
        }
      }
    }
  }
  @catch (JavaIoIOException *ioe) {
  }
  @catch (JavaLangException *e) {
  }
}

void OrgMinimaUtilsTestsChatterChatterClient_sendMessageWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *mesg) {
  OrgMinimaUtilsTestsChatterChatterClient_prepWriteBufferWithNSString_(self, mesg);
  OrgMinimaUtilsTestsChatterChatterClient_channelWriteWithJavaNioChannelsSocketChannel_withJavaNioByteBuffer_(self, self->channel_, self->writeBuffer_);
}

void OrgMinimaUtilsTestsChatterChatterClient_prepWriteBufferWithNSString_(OrgMinimaUtilsTestsChatterChatterClient *self, NSString *mesg) {
  [((JavaNioByteBuffer *) nil_chk(self->writeBuffer_)) clear];
  [((JavaNioByteBuffer *) nil_chk(self->writeBuffer_)) putWithByteArray:[((NSString *) nil_chk(mesg)) java_getBytes]];
  [((JavaNioByteBuffer *) nil_chk(self->writeBuffer_)) putCharWithChar:0x000a];
  [((JavaNioByteBuffer *) nil_chk(self->writeBuffer_)) flip];
}

void OrgMinimaUtilsTestsChatterChatterClient_channelWriteWithJavaNioChannelsSocketChannel_withJavaNioByteBuffer_(OrgMinimaUtilsTestsChatterChatterClient *self, JavaNioChannelsSocketChannel *channel, JavaNioByteBuffer *writeBuffer) {
  jlong nbytes = 0;
  jlong toWrite = [((JavaNioByteBuffer *) nil_chk(writeBuffer)) remaining];
  @try {
    while (nbytes != toWrite) {
      nbytes += [((JavaNioChannelsSocketChannel *) nil_chk(channel)) writeWithJavaNioByteBuffer:writeBuffer];
      @try {
        JavaLangThread_sleepWithLong_(OrgMinimaUtilsTestsChatterChatterClient_CHANNEL_WRITE_SLEEP);
      }
      @catch (JavaLangInterruptedException *e) {
      }
    }
  }
  @catch (JavaNioChannelsClosedChannelException *cce) {
  }
  @catch (JavaLangException *e) {
  }
  [writeBuffer rewind];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsTestsChatterChatterClient)

@implementation OrgMinimaUtilsTestsChatterChatterClient_InputThread

- (instancetype)initWithOrgMinimaUtilsTestsChatterChatterClient:(OrgMinimaUtilsTestsChatterChatterClient *)outer$
                    withOrgMinimaUtilsTestsChatterChatterClient:(OrgMinimaUtilsTestsChatterChatterClient *)cc {
  OrgMinimaUtilsTestsChatterChatterClient_InputThread_initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_(self, outer$, cc);
  return self;
}

- (void)run {
  JavaIoBufferedReader *br = create_JavaIoBufferedReader_initWithJavaIoReader_(create_JavaIoInputStreamReader_initWithJavaIoInputStream_(JreLoadStatic(JavaLangSystem, in)));
  running_ = true;
  while (running_) {
    @try {
      NSString *s;
      [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printWithNSString:@"> "];
      [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) flush];
      s = [br readLine];
      if ([((NSString *) nil_chk(s)) java_length] > 0) OrgMinimaUtilsTestsChatterChatterClient_sendMessageWithNSString_(nil_chk(cc_), JreStrcat("$C", s, 0x000a));
      if ([s isEqual:@"quit"]) running_ = false;
    }
    @catch (JavaIoIOException *ioe) {
      running_ = false;
    }
  }
  [((OrgMinimaUtilsTestsChatterChatterClient *) nil_chk(cc_)) shutdown];
}

- (void)shutdown {
  running_ = false;
  [self interrupt];
}

- (void)dealloc {
  RELEASE_(cc_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaUtilsTestsChatterChatterClient:withOrgMinimaUtilsTestsChatterChatterClient:);
  methods[1].selector = @selector(run);
  methods[2].selector = @selector(shutdown);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "cc_", "LOrgMinimaUtilsTestsChatterChatterClient;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "running_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaUtilsTestsChatterChatterClient;" };
  static const J2ObjcClassInfo _OrgMinimaUtilsTestsChatterChatterClient_InputThread = { "InputThread", "org.minima.utils.tests.chatter", ptrTable, methods, fields, 7, 0x0, 3, 2, 0, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsTestsChatterChatterClient_InputThread;
}

@end

void OrgMinimaUtilsTestsChatterChatterClient_InputThread_initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_(OrgMinimaUtilsTestsChatterChatterClient_InputThread *self, OrgMinimaUtilsTestsChatterChatterClient *outer$, OrgMinimaUtilsTestsChatterChatterClient *cc) {
  JavaLangThread_init(self);
  JreStrongAssign(&self->cc_, cc);
}

OrgMinimaUtilsTestsChatterChatterClient_InputThread *new_OrgMinimaUtilsTestsChatterChatterClient_InputThread_initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_(OrgMinimaUtilsTestsChatterChatterClient *outer$, OrgMinimaUtilsTestsChatterChatterClient *cc) {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsTestsChatterChatterClient_InputThread, initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_, outer$, cc)
}

OrgMinimaUtilsTestsChatterChatterClient_InputThread *create_OrgMinimaUtilsTestsChatterChatterClient_InputThread_initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_(OrgMinimaUtilsTestsChatterChatterClient *outer$, OrgMinimaUtilsTestsChatterChatterClient *cc) {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsTestsChatterChatterClient_InputThread, initWithOrgMinimaUtilsTestsChatterChatterClient_withOrgMinimaUtilsTestsChatterChatterClient_, outer$, cc)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsTestsChatterChatterClient_InputThread)