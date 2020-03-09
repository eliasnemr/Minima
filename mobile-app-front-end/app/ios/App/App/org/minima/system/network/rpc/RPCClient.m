//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/network/rpc/RPCClient.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/io/BufferedReader.h"
#include "java/io/IOException.h"
#include "java/io/InputStream.h"
#include "java/io/InputStreamReader.h"
#include "java/io/PrintStream.h"
#include "java/lang/StringBuffer.h"
#include "java/lang/System.h"
#include "java/net/HttpURLConnection.h"
#include "java/net/URL.h"
#include "java/net/URLConnection.h"
#include "java/net/URLEncoder.h"
#include "org/minima/system/network/rpc/RPCClient.h"

NSString *OrgMinimaSystemNetworkRpcRPCClient_USER_AGENT = @"Minima/1.0";

@implementation OrgMinimaSystemNetworkRpcRPCClient

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemNetworkRpcRPCClient_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (NSString *)sendGETWithNSString:(NSString *)zHost {
  return OrgMinimaSystemNetworkRpcRPCClient_sendGETWithNSString_(zHost);
}

+ (void)mainWithNSStringArray:(IOSObjectArray *)zArgs {
  OrgMinimaSystemNetworkRpcRPCClient_mainWithNSStringArray_(zArgs);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x9, 0, 1, 2, -1, -1, -1 },
    { NULL, "V", 0x9, 3, 4, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(sendGETWithNSString:);
  methods[2].selector = @selector(mainWithNSStringArray:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "USER_AGENT", "LNSString;", .constantValue.asLong = 0, 0x9, -1, 5, -1, -1 },
  };
  static const void *ptrTable[] = { "sendGET", "LNSString;", "LJavaIoIOException;", "main", "[LNSString;", &OrgMinimaSystemNetworkRpcRPCClient_USER_AGENT };
  static const J2ObjcClassInfo _OrgMinimaSystemNetworkRpcRPCClient = { "RPCClient", "org.minima.system.network.rpc", ptrTable, methods, fields, 7, 0x1, 3, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemNetworkRpcRPCClient;
}

@end

void OrgMinimaSystemNetworkRpcRPCClient_init(OrgMinimaSystemNetworkRpcRPCClient *self) {
  NSObject_init(self);
}

OrgMinimaSystemNetworkRpcRPCClient *new_OrgMinimaSystemNetworkRpcRPCClient_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemNetworkRpcRPCClient, init)
}

OrgMinimaSystemNetworkRpcRPCClient *create_OrgMinimaSystemNetworkRpcRPCClient_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemNetworkRpcRPCClient, init)
}

NSString *OrgMinimaSystemNetworkRpcRPCClient_sendGETWithNSString_(NSString *zHost) {
  OrgMinimaSystemNetworkRpcRPCClient_initialize();
  JavaNetURL *obj = create_JavaNetURL_initWithNSString_(zHost);
  JavaNetHttpURLConnection *con = (JavaNetHttpURLConnection *) cast_chk([obj openConnection], [JavaNetHttpURLConnection class]);
  [((JavaNetHttpURLConnection *) nil_chk(con)) setRequestMethodWithNSString:@"GET"];
  [con setRequestPropertyWithNSString:@"User-Agent" withNSString:OrgMinimaSystemNetworkRpcRPCClient_USER_AGENT];
  jint responseCode = [con getResponseCode];
  JavaLangStringBuffer *response = create_JavaLangStringBuffer_init();
  if (responseCode == JavaNetHttpURLConnection_HTTP_OK) {
    JavaIoInputStream *is = [con getInputStream];
    JavaIoBufferedReader *in = create_JavaIoBufferedReader_initWithJavaIoReader_(create_JavaIoInputStreamReader_initWithJavaIoInputStream_(is));
    NSString *inputLine;
    while ((inputLine = [in readLine]) != nil) {
      [response appendWithNSString:inputLine];
    }
    [in close];
    [((JavaIoInputStream *) nil_chk(is)) close];
  }
  else {
  }
  return [response description];
}

void OrgMinimaSystemNetworkRpcRPCClient_mainWithNSStringArray_(IOSObjectArray *zArgs) {
  OrgMinimaSystemNetworkRpcRPCClient_initialize();
  NSString *host = @"127.0.0.1";
  jint port = 8999;
  NSString *request = @"balance";
  @try {
    NSString *url = JreStrcat("$$CIC$", @"http://", host, ':', port, '/', JavaNetURLEncoder_encodeWithNSString_withNSString_(request, @"UTF-8"));
    [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:JreStrcat("$$", @"GET ", url)];
    NSString *resp = OrgMinimaSystemNetworkRpcRPCClient_sendGETWithNSString_(url);
    [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:resp];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemNetworkRpcRPCClient)
