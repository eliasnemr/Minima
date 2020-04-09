//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/StateVariable.java
//

#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "java/io/IOException.h"
#include "org/minima/objects/StateVariable.h"
#include "org/minima/objects/base/MiniByte.h"
#include "org/minima/objects/base/MiniScript.h"
#include "org/minima/utils/json/JSONObject.h"

@interface OrgMinimaObjectsStateVariable ()

- (instancetype)init;

@end

__attribute__((unused)) static void OrgMinimaObjectsStateVariable_init(OrgMinimaObjectsStateVariable *self);

__attribute__((unused)) static OrgMinimaObjectsStateVariable *new_OrgMinimaObjectsStateVariable_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsStateVariable *create_OrgMinimaObjectsStateVariable_init(void);

@implementation OrgMinimaObjectsStateVariable

- (instancetype)initWithInt:(jint)zPort
               withNSString:(NSString *)zData {
  OrgMinimaObjectsStateVariable_initWithInt_withNSString_(self, zPort, zData);
  return self;
}

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsStateVariable_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)resetDataWithOrgMinimaObjectsBaseMiniScript:(OrgMinimaObjectsBaseMiniScript *)zData {
  JreStrongAssign(&mData_, zData);
}

- (OrgMinimaObjectsBaseMiniScript *)getData {
  return mData_;
}

- (jint)getPort {
  return [((OrgMinimaObjectsBaseMiniByte *) nil_chk(mPort_)) getValue];
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *ret = create_OrgMinimaUtilsJsonJSONObject_init();
  [ret putWithId:@"port" withId:[((OrgMinimaObjectsBaseMiniByte *) nil_chk(mPort_)) description]];
  [ret putWithId:@"data" withId:[((OrgMinimaObjectsBaseMiniScript *) nil_chk(mData_)) description]];
  return ret;
}

- (NSString *)description {
  return [((OrgMinimaUtilsJsonJSONObject *) nil_chk([self toJSON])) description];
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((OrgMinimaObjectsBaseMiniByte *) nil_chk(mPort_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [((OrgMinimaObjectsBaseMiniScript *) nil_chk(mData_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  JreStrongAssign(&mPort_, OrgMinimaObjectsBaseMiniByte_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  JreStrongAssign(&mData_, OrgMinimaObjectsBaseMiniScript_ReadFromStreamWithJavaIoDataInputStream_(zIn));
}

+ (OrgMinimaObjectsStateVariable *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsStateVariable_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mPort_);
  RELEASE_(mData_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniScript;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 3, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, 6, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 8, 6, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsStateVariable;", 0x9, 9, 8, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithInt:withNSString:);
  methods[1].selector = @selector(init);
  methods[2].selector = @selector(resetDataWithOrgMinimaObjectsBaseMiniScript:);
  methods[3].selector = @selector(getData);
  methods[4].selector = @selector(getPort);
  methods[5].selector = @selector(toJSON);
  methods[6].selector = @selector(description);
  methods[7].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[8].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[9].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mPort_", "LOrgMinimaObjectsBaseMiniByte;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mData_", "LOrgMinimaObjectsBaseMiniScript;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "ILNSString;", "resetData", "LOrgMinimaObjectsBaseMiniScript;", "toString", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream" };
  static const J2ObjcClassInfo _OrgMinimaObjectsStateVariable = { "StateVariable", "org.minima.objects", ptrTable, methods, fields, 7, 0x1, 10, 2, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsStateVariable;
}

@end

void OrgMinimaObjectsStateVariable_initWithInt_withNSString_(OrgMinimaObjectsStateVariable *self, jint zPort, NSString *zData) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mPort_, new_OrgMinimaObjectsBaseMiniByte_initWithInt_(zPort));
  JreStrongAssignAndConsume(&self->mData_, new_OrgMinimaObjectsBaseMiniScript_initWithNSString_(zData));
}

OrgMinimaObjectsStateVariable *new_OrgMinimaObjectsStateVariable_initWithInt_withNSString_(jint zPort, NSString *zData) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsStateVariable, initWithInt_withNSString_, zPort, zData)
}

OrgMinimaObjectsStateVariable *create_OrgMinimaObjectsStateVariable_initWithInt_withNSString_(jint zPort, NSString *zData) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsStateVariable, initWithInt_withNSString_, zPort, zData)
}

void OrgMinimaObjectsStateVariable_init(OrgMinimaObjectsStateVariable *self) {
  NSObject_init(self);
}

OrgMinimaObjectsStateVariable *new_OrgMinimaObjectsStateVariable_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsStateVariable, init)
}

OrgMinimaObjectsStateVariable *create_OrgMinimaObjectsStateVariable_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsStateVariable, init)
}

OrgMinimaObjectsStateVariable *OrgMinimaObjectsStateVariable_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsStateVariable_initialize();
  OrgMinimaObjectsStateVariable *statevar = create_OrgMinimaObjectsStateVariable_init();
  @try {
    [statevar readDataStreamWithJavaIoDataInputStream:zIn];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
    return nil;
  }
  return statevar;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsStateVariable)
