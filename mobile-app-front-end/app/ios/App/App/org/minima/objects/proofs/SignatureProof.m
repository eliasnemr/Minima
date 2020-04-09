//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/proofs/SignatureProof.java
//

#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "java/io/IOException.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/proofs/Proof.h"
#include "org/minima/objects/proofs/SignatureProof.h"
#include "org/minima/utils/json/JSONObject.h"

@interface OrgMinimaObjectsProofsSignatureProof ()

- (instancetype)init;

@end

__attribute__((unused)) static void OrgMinimaObjectsProofsSignatureProof_init(OrgMinimaObjectsProofsSignatureProof *self);

__attribute__((unused)) static OrgMinimaObjectsProofsSignatureProof *new_OrgMinimaObjectsProofsSignatureProof_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsProofsSignatureProof *create_OrgMinimaObjectsProofsSignatureProof_init(void);

@implementation OrgMinimaObjectsProofsSignatureProof

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsProofsSignatureProof_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)mPublicKey
                    withOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zSignature {
  OrgMinimaObjectsProofsSignatureProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_(self, mPublicKey, zSignature);
  return self;
}

- (OrgMinimaObjectsBaseMiniData *)getSignature {
  return mSignature_;
}

- (OrgMinimaUtilsJsonJSONObject *)toJSON {
  OrgMinimaUtilsJsonJSONObject *json = create_OrgMinimaUtilsJsonJSONObject_init();
  [json putWithId:@"signature" withId:[((OrgMinimaObjectsBaseMiniData *) nil_chk(mSignature_)) to0xString]];
  [json putWithId:@"proof" withId:[super toJSON]];
  return json;
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((OrgMinimaObjectsBaseMiniData *) nil_chk(mSignature_)) writeDataStreamWithJavaIoDataOutputStream:zOut];
  [super writeDataStreamWithJavaIoDataOutputStream:zOut];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  JreStrongAssign(&mSignature_, OrgMinimaObjectsBaseMiniData_ReadFromStreamWithJavaIoDataInputStream_(zIn));
  [super readDataStreamWithJavaIoDataInputStream:zIn];
}

+ (OrgMinimaObjectsProofsSignatureProof *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsProofsSignatureProof_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mSignature_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniData;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsJsonJSONObject;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, 3, -1, -1, -1 },
    { NULL, "V", 0x1, 4, 5, 3, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsProofsSignatureProof;", 0x9, 6, 5, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithOrgMinimaObjectsBaseMiniData:withOrgMinimaObjectsBaseMiniData:);
  methods[2].selector = @selector(getSignature);
  methods[3].selector = @selector(toJSON);
  methods[4].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[5].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[6].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mSignature_", "LOrgMinimaObjectsBaseMiniData;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaObjectsBaseMiniData;LOrgMinimaObjectsBaseMiniData;", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream" };
  static const J2ObjcClassInfo _OrgMinimaObjectsProofsSignatureProof = { "SignatureProof", "org.minima.objects.proofs", ptrTable, methods, fields, 7, 0x1, 7, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsProofsSignatureProof;
}

@end

void OrgMinimaObjectsProofsSignatureProof_init(OrgMinimaObjectsProofsSignatureProof *self) {
  OrgMinimaObjectsProofsProof_init(self);
}

OrgMinimaObjectsProofsSignatureProof *new_OrgMinimaObjectsProofsSignatureProof_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsProofsSignatureProof, init)
}

OrgMinimaObjectsProofsSignatureProof *create_OrgMinimaObjectsProofsSignatureProof_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsProofsSignatureProof, init)
}

void OrgMinimaObjectsProofsSignatureProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsProofsSignatureProof *self, OrgMinimaObjectsBaseMiniData *mPublicKey, OrgMinimaObjectsBaseMiniData *zSignature) {
  OrgMinimaObjectsProofsProof_init(self);
  [self setDataWithOrgMinimaObjectsBaseMiniData:mPublicKey];
  JreStrongAssign(&self->mSignature_, zSignature);
}

OrgMinimaObjectsProofsSignatureProof *new_OrgMinimaObjectsProofsSignatureProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsBaseMiniData *mPublicKey, OrgMinimaObjectsBaseMiniData *zSignature) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsProofsSignatureProof, initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_, mPublicKey, zSignature)
}

OrgMinimaObjectsProofsSignatureProof *create_OrgMinimaObjectsProofsSignatureProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_(OrgMinimaObjectsBaseMiniData *mPublicKey, OrgMinimaObjectsBaseMiniData *zSignature) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsProofsSignatureProof, initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniData_, mPublicKey, zSignature)
}

OrgMinimaObjectsProofsSignatureProof *OrgMinimaObjectsProofsSignatureProof_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsProofsSignatureProof_initialize();
  OrgMinimaObjectsProofsSignatureProof *sigproof = create_OrgMinimaObjectsProofsSignatureProof_init();
  @try {
    [sigproof readDataStreamWithJavaIoDataInputStream:zIn];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
  }
  return sigproof;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsProofsSignatureProof)
