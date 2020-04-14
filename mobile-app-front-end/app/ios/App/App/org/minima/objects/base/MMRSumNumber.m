//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/base/MMRSumNumber.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/io/DataInputStream.h"
#include "java/io/DataOutputStream.h"
#include "java/io/IOException.h"
#include "java/math/BigDecimal.h"
#include "java/math/BigInteger.h"
#include "java/math/MathContext.h"
#include "java/math/RoundingMode.h"
#include "org/minima/objects/base/MMRSumNumber.h"
#include "org/minima/objects/base/MiniNumber.h"

@interface OrgMinimaObjectsBaseMMRSumNumber () {
 @public
  JavaMathBigDecimal *mNumber_;
}

- (instancetype)init;

- (instancetype)initWithJavaMathBigDecimal:(JavaMathBigDecimal *)zNumber;

@end

J2OBJC_FIELD_SETTER(OrgMinimaObjectsBaseMMRSumNumber, mNumber_, JavaMathBigDecimal *)

inline JavaMathMathContext *OrgMinimaObjectsBaseMMRSumNumber_get_mMathContext(void);
static JavaMathMathContext *OrgMinimaObjectsBaseMMRSumNumber_mMathContext;
J2OBJC_STATIC_FIELD_OBJ_FINAL(OrgMinimaObjectsBaseMMRSumNumber, mMathContext, JavaMathMathContext *)

__attribute__((unused)) static void OrgMinimaObjectsBaseMMRSumNumber_init(OrgMinimaObjectsBaseMMRSumNumber *self);

__attribute__((unused)) static OrgMinimaObjectsBaseMMRSumNumber *new_OrgMinimaObjectsBaseMMRSumNumber_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsBaseMMRSumNumber *create_OrgMinimaObjectsBaseMMRSumNumber_init(void);

__attribute__((unused)) static void OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(OrgMinimaObjectsBaseMMRSumNumber *self, JavaMathBigDecimal *zNumber);

__attribute__((unused)) static OrgMinimaObjectsBaseMMRSumNumber *new_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zNumber) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaObjectsBaseMMRSumNumber *create_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zNumber);

J2OBJC_INITIALIZED_DEFN(OrgMinimaObjectsBaseMMRSumNumber)

OrgMinimaObjectsBaseMMRSumNumber *OrgMinimaObjectsBaseMMRSumNumber_ZERO;

@implementation OrgMinimaObjectsBaseMMRSumNumber

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsBaseMMRSumNumber_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithJavaMathBigDecimal:(JavaMathBigDecimal *)zNumber {
  OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(self, zNumber);
  return self;
}

- (instancetype)initWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  OrgMinimaObjectsBaseMMRSumNumber_initWithOrgMinimaObjectsBaseMiniNumber_(self, zNumber);
  return self;
}

- (JavaMathBigDecimal *)getNumber {
  return mNumber_;
}

- (OrgMinimaObjectsBaseMMRSumNumber *)addWithOrgMinimaObjectsBaseMMRSumNumber:(OrgMinimaObjectsBaseMMRSumNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) addWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMMRSumNumber *) nil_chk(zNumber)) getNumber] withJavaMathMathContext:OrgMinimaObjectsBaseMMRSumNumber_mMathContext]);
}

- (jboolean)isEqualWithOrgMinimaObjectsBaseMMRSumNumber:(OrgMinimaObjectsBaseMMRSumNumber *)zNumber {
  return [((JavaMathBigDecimal *) nil_chk([((OrgMinimaObjectsBaseMMRSumNumber *) nil_chk(zNumber)) getNumber])) compareToWithId:mNumber_] == 0;
}

- (NSString *)description {
  return [((JavaMathBigDecimal *) nil_chk([((JavaMathBigDecimal *) nil_chk(mNumber_)) stripTrailingZeros])) toPlainString];
}

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut {
  [((JavaIoDataOutputStream *) nil_chk(zOut)) writeIntWithInt:[((JavaMathBigDecimal *) nil_chk(mNumber_)) scale__]];
  IOSByteArray *data = [((JavaMathBigInteger *) nil_chk([((JavaMathBigDecimal *) nil_chk(mNumber_)) unscaledValue])) toByteArray];
  jint len = ((IOSByteArray *) nil_chk(data))->size_;
  [zOut writeIntWithInt:len];
  [zOut writeWithByteArray:data];
}

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  jint scale_ = [((JavaIoDataInputStream *) nil_chk(zIn)) readInt];
  jint len = [zIn readInt];
  IOSByteArray *data = [IOSByteArray arrayWithLength:len];
  [zIn readFullyWithByteArray:data];
  JavaMathBigInteger *unscaled = create_JavaMathBigInteger_initWithByteArray_(data);
  JreStrongAssignAndConsume(&mNumber_, new_JavaMathBigDecimal_initWithJavaMathBigInteger_withInt_withJavaMathMathContext_(unscaled, scale_, OrgMinimaObjectsBaseMMRSumNumber_mMathContext));
}

+ (OrgMinimaObjectsBaseMMRSumNumber *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsBaseMMRSumNumber_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mNumber_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x2, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, "LJavaMathBigDecimal;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMMRSumNumber;", 0x1, 2, 3, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 4, 3, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 5, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 6, 7, 8, -1, -1, -1 },
    { NULL, "V", 0x1, 9, 10, 8, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMMRSumNumber;", 0x9, 11, 10, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithJavaMathBigDecimal:);
  methods[2].selector = @selector(initWithOrgMinimaObjectsBaseMiniNumber:);
  methods[3].selector = @selector(getNumber);
  methods[4].selector = @selector(addWithOrgMinimaObjectsBaseMMRSumNumber:);
  methods[5].selector = @selector(isEqualWithOrgMinimaObjectsBaseMMRSumNumber:);
  methods[6].selector = @selector(description);
  methods[7].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[8].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[9].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mMathContext", "LJavaMathMathContext;", .constantValue.asLong = 0, 0x1a, -1, 12, -1, -1 },
    { "ZERO", "LOrgMinimaObjectsBaseMMRSumNumber;", .constantValue.asLong = 0, 0x19, -1, 13, -1, -1 },
    { "mNumber_", "LJavaMathBigDecimal;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LJavaMathBigDecimal;", "LOrgMinimaObjectsBaseMiniNumber;", "add", "LOrgMinimaObjectsBaseMMRSumNumber;", "isEqual", "toString", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream", &OrgMinimaObjectsBaseMMRSumNumber_mMathContext, &OrgMinimaObjectsBaseMMRSumNumber_ZERO };
  static const J2ObjcClassInfo _OrgMinimaObjectsBaseMMRSumNumber = { "MMRSumNumber", "org.minima.objects.base", ptrTable, methods, fields, 7, 0x1, 10, 3, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsBaseMMRSumNumber;
}

+ (void)initialize {
  if (self == [OrgMinimaObjectsBaseMMRSumNumber class]) {
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMMRSumNumber_mMathContext, new_JavaMathMathContext_initWithInt_withJavaMathRoundingMode_(100, JreLoadEnum(JavaMathRoundingMode, DOWN)));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMMRSumNumber_ZERO, new_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(JreLoadStatic(JavaMathBigDecimal, ZERO)));
    J2OBJC_SET_INITIALIZED(OrgMinimaObjectsBaseMMRSumNumber)
  }
}

@end

void OrgMinimaObjectsBaseMMRSumNumber_init(OrgMinimaObjectsBaseMMRSumNumber *self) {
  NSObject_init(self);
}

OrgMinimaObjectsBaseMMRSumNumber *new_OrgMinimaObjectsBaseMMRSumNumber_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMMRSumNumber, init)
}

OrgMinimaObjectsBaseMMRSumNumber *create_OrgMinimaObjectsBaseMMRSumNumber_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMMRSumNumber, init)
}

void OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(OrgMinimaObjectsBaseMMRSumNumber *self, JavaMathBigDecimal *zNumber) {
  NSObject_init(self);
  JreStrongAssign(&self->mNumber_, zNumber);
}

OrgMinimaObjectsBaseMMRSumNumber *new_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zNumber) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMMRSumNumber, initWithJavaMathBigDecimal_, zNumber)
}

OrgMinimaObjectsBaseMMRSumNumber *create_OrgMinimaObjectsBaseMMRSumNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zNumber) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMMRSumNumber, initWithJavaMathBigDecimal_, zNumber)
}

void OrgMinimaObjectsBaseMMRSumNumber_initWithOrgMinimaObjectsBaseMiniNumber_(OrgMinimaObjectsBaseMMRSumNumber *self, OrgMinimaObjectsBaseMiniNumber *zNumber) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mNumber_, new_JavaMathBigDecimal_initWithNSString_withJavaMathMathContext_([((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) description], OrgMinimaObjectsBaseMMRSumNumber_mMathContext));
}

OrgMinimaObjectsBaseMMRSumNumber *new_OrgMinimaObjectsBaseMMRSumNumber_initWithOrgMinimaObjectsBaseMiniNumber_(OrgMinimaObjectsBaseMiniNumber *zNumber) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMMRSumNumber, initWithOrgMinimaObjectsBaseMiniNumber_, zNumber)
}

OrgMinimaObjectsBaseMMRSumNumber *create_OrgMinimaObjectsBaseMMRSumNumber_initWithOrgMinimaObjectsBaseMiniNumber_(OrgMinimaObjectsBaseMiniNumber *zNumber) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMMRSumNumber, initWithOrgMinimaObjectsBaseMiniNumber_, zNumber)
}

OrgMinimaObjectsBaseMMRSumNumber *OrgMinimaObjectsBaseMMRSumNumber_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsBaseMMRSumNumber_initialize();
  OrgMinimaObjectsBaseMMRSumNumber *data = create_OrgMinimaObjectsBaseMMRSumNumber_init();
  @try {
    [data readDataStreamWithJavaIoDataInputStream:zIn];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
    return nil;
  }
  return data;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsBaseMMRSumNumber)
