//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/Address.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/objects/Address.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/utils/Crypto.h"
#include "org/minima/utils/json/JSONObject.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaObjectsAddress)

OrgMinimaObjectsAddress *OrgMinimaObjectsAddress_TRUE_ADDRESS;

@implementation OrgMinimaObjectsAddress

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsAddress_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithNSString:(NSString *)zScript {
  OrgMinimaObjectsAddress_initWithNSString_(self, zScript);
  return self;
}

- (instancetype)initWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddressData {
  OrgMinimaObjectsAddress_initWithOrgMinimaObjectsBaseMiniHash_(self, zAddressData);
  return self;
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *addr = create_OrgMinimaUtilsJsonJSONObject_init();
  [addr putWithId:@"address" withId:[((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddressData_)) description]];
  [addr putWithId:@"script" withId:mScript_];
  return addr;
}

- (NSString *)description {
  return [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddressData_)) description];
}

- (NSString *)toFullString {
  return [((OrgMinimaUtilsJsonJSONObject *) nil_chk([self toJSON])) description];
}

- (NSString *)getScript {
  return mScript_;
}

- (OrgMinimaObjectsBaseMiniHash *)getAddressData {
  return mAddressData_;
}

- (jboolean)isEqualWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress {
  return [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddressData_)) isNumericallyEqualWithOrgMinimaObjectsBaseMiniData:zAddress];
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((OrgMinimaObjectsBaseMiniHash *) nil_chk(mAddressData_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [((JavaIoDataOutputStream *) nil_chk(zOut)) writeUTFWithNSString:mScript_];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  JreStrongAssign(&mAddressData_, OrgMinimaObjectsBaseMiniHash_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  JreStrongAssign(&mScript_, [((JavaIoDataInputStream *) nil_chk(zIn)) readUTF]);
}

- (void)dealloc {
  RELEASE_(mScript_);
  RELEASE_(mAddressData_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 2, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 3, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, 6, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 8, 6, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithNSString:);
  methods[2].selector = @selector(initWithOrgMinimaObjectsBaseMiniHash:);
  methods[3].selector = @selector(toJSON);
  methods[4].selector = @selector(description);
  methods[5].selector = @selector(toFullString);
  methods[6].selector = @selector(getScript);
  methods[7].selector = @selector(getAddressData);
  methods[8].selector = @selector(isEqualWithOrgMinimaObjectsBaseMiniHash:);
  methods[9].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[10].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "TRUE_ADDRESS", "LOrgMinimaObjectsAddress;", .constantValue.asLong = 0, 0x9, -1, 9, -1, -1 },
    { "mScript_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mAddressData_", "LOrgMinimaObjectsBaseMiniHash;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LNSString;", "LOrgMinimaObjectsBaseMiniHash;", "toString", "isEqual", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", &OrgMinimaObjectsAddress_TRUE_ADDRESS };
  static const J2ObjcClassInfo _OrgMinimaObjectsAddress = { "Address", "org.minima.objects", ptrTable, methods, fields, 7, 0x1, 11, 3, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsAddress;
}

+ (void)initialize {
  if (self == [OrgMinimaObjectsAddress class]) {
    JreStrongAssignAndConsume(&OrgMinimaObjectsAddress_TRUE_ADDRESS, new_OrgMinimaObjectsAddress_initWithNSString_(@"RETURN TRUE"));
    J2OBJC_SET_INITIALIZED(OrgMinimaObjectsAddress)
  }
}

@end

void OrgMinimaObjectsAddress_init(OrgMinimaObjectsAddress *self) {
  NSObject_init(self);
}

OrgMinimaObjectsAddress *new_OrgMinimaObjectsAddress_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsAddress, init)
}

OrgMinimaObjectsAddress *create_OrgMinimaObjectsAddress_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsAddress, init)
}

void OrgMinimaObjectsAddress_initWithNSString_(OrgMinimaObjectsAddress *self, NSString *zScript) {
  NSObject_init(self);
  JreStrongAssign(&self->mScript_, OrgMinimaMiniscriptContract_cleanScriptWithNSString_(zScript));
  IOSByteArray *hdata = [((OrgMinimaUtilsCrypto *) nil_chk(OrgMinimaUtilsCrypto_getInstance())) hashDataWithByteArray:[((NSString *) nil_chk(self->mScript_)) java_getBytes]];
  JreStrongAssignAndConsume(&self->mAddressData_, new_OrgMinimaObjectsBaseMiniHash_initWithByteArray_(hdata));
}

OrgMinimaObjectsAddress *new_OrgMinimaObjectsAddress_initWithNSString_(NSString *zScript) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsAddress, initWithNSString_, zScript)
}

OrgMinimaObjectsAddress *create_OrgMinimaObjectsAddress_initWithNSString_(NSString *zScript) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsAddress, initWithNSString_, zScript)
}

void OrgMinimaObjectsAddress_initWithOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsAddress *self, OrgMinimaObjectsBaseMiniHash *zAddressData) {
  NSObject_init(self);
  JreStrongAssign(&self->mAddressData_, zAddressData);
  JreStrongAssign(&self->mScript_, @"");
}

OrgMinimaObjectsAddress *new_OrgMinimaObjectsAddress_initWithOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsBaseMiniHash *zAddressData) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsAddress, initWithOrgMinimaObjectsBaseMiniHash_, zAddressData)
}

OrgMinimaObjectsAddress *create_OrgMinimaObjectsAddress_initWithOrgMinimaObjectsBaseMiniHash_(OrgMinimaObjectsBaseMiniHash *zAddressData) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsAddress, initWithOrgMinimaObjectsBaseMiniHash_, zAddressData)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsAddress)