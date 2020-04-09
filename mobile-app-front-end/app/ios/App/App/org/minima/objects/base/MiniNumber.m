//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/base/MiniNumber.java
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
#include "org/minima/objects/base/MiniNumber.h"

@interface OrgMinimaObjectsBaseMiniNumber () {
 @public
  JavaMathBigDecimal *mNumber_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaObjectsBaseMiniNumber, mNumber_, JavaMathBigDecimal *)

J2OBJC_INITIALIZED_DEFN(OrgMinimaObjectsBaseMiniNumber)

JavaMathMathContext *OrgMinimaObjectsBaseMiniNumber_mMathContext;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_ZERO;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_ONE;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_TWO;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_EIGHT;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_THIRTYTWO;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_SIXTYFOUR;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_TEN;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_HUNDRED;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_THOUSAND;
OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_MINUSONE;

@implementation OrgMinimaObjectsBaseMiniNumber

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaObjectsBaseMiniNumber_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithInt:(jint)zNumber {
  OrgMinimaObjectsBaseMiniNumber_initWithInt_(self, zNumber);
  return self;
}

- (instancetype)initWithJavaMathBigInteger:(JavaMathBigInteger *)zNumber {
  OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigInteger_(self, zNumber);
  return self;
}

- (instancetype)initWithJavaMathBigDecimal:(JavaMathBigDecimal *)zBigD {
  OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_(self, zBigD);
  return self;
}

- (instancetype)initWithNSString:(NSString *)zNumber {
  OrgMinimaObjectsBaseMiniNumber_initWithNSString_(self, zNumber);
  return self;
}

- (JavaMathBigDecimal *)getAsBigDecimal {
  return mNumber_;
}

- (JavaMathBigInteger *)getAsBigInteger {
  return [((JavaMathBigDecimal *) nil_chk(mNumber_)) toBigInteger];
}

- (jdouble)getAsDouble {
  return [((JavaMathBigDecimal *) nil_chk(mNumber_)) doubleValue];
}

- (jlong)getAsLong {
  return [((JavaMathBigDecimal *) nil_chk(mNumber_)) longLongValue];
}

- (jint)getAsInt {
  return [((JavaMathBigDecimal *) nil_chk(mNumber_)) intValue];
}

- (OrgMinimaObjectsBaseMiniNumber *)addWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) addWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)subWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) subtractWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)divWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) divideWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)divRoundDownWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) divideWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathRoundingMode:JreLoadEnum(JavaMathRoundingMode, DOWN)]);
}

- (OrgMinimaObjectsBaseMiniNumber *)multWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) multiplyWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)powWithInt:(jint)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) powWithInt:zNumber withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)moduloWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) remainderWithJavaMathBigDecimal:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zNumber)) getAsBigDecimal] withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)floor {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) setScaleWithInt:0 withJavaMathRoundingMode:JreLoadEnum(JavaMathRoundingMode, FLOOR)]);
}

- (OrgMinimaObjectsBaseMiniNumber *)ceil {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) setScaleWithInt:0 withJavaMathRoundingMode:JreLoadEnum(JavaMathRoundingMode, CEILING)]);
}

- (OrgMinimaObjectsBaseMiniNumber *)setSignificantDigitsWithInt:(jint)zSignificantDigits {
  jint sigdig = zSignificantDigits;
  if (sigdig > 18) {
    sigdig = 18;
  }
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) roundWithJavaMathMathContext:create_JavaMathMathContext_initWithInt_withJavaMathRoundingMode_(sigdig, JreLoadEnum(JavaMathRoundingMode, DOWN))]);
}

- (OrgMinimaObjectsBaseMiniNumber *)abs {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) abs]);
}

- (OrgMinimaObjectsBaseMiniNumber *)increment {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) addWithJavaMathBigDecimal:JreLoadStatic(JavaMathBigDecimal, ONE) withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (OrgMinimaObjectsBaseMiniNumber *)decrement {
  return create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_([((JavaMathBigDecimal *) nil_chk(mNumber_)) subtractWithJavaMathBigDecimal:JreLoadStatic(JavaMathBigDecimal, ONE) withJavaMathMathContext:OrgMinimaObjectsBaseMiniNumber_mMathContext]);
}

- (jint)compareToWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zCompare {
  return [((JavaMathBigDecimal *) nil_chk(mNumber_)) compareToWithId:[((OrgMinimaObjectsBaseMiniNumber *) nil_chk(zCompare)) getAsBigDecimal]];
}

- (jboolean)isEqualWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return [self compareToWithOrgMinimaObjectsBaseMiniNumber:zNumber] == 0;
}

- (jboolean)isLessWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return [self compareToWithOrgMinimaObjectsBaseMiniNumber:zNumber] < 0;
}

- (jboolean)isLessEqualWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return [self compareToWithOrgMinimaObjectsBaseMiniNumber:zNumber] <= 0;
}

- (jboolean)isMoreWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return [self compareToWithOrgMinimaObjectsBaseMiniNumber:zNumber] > 0;
}

- (jboolean)isMoreEqualWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber {
  return [self compareToWithOrgMinimaObjectsBaseMiniNumber:zNumber] >= 0;
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
  JreStrongAssignAndConsume(&mNumber_, new_JavaMathBigDecimal_initWithJavaMathBigInteger_withInt_withJavaMathMathContext_(unscaled, scale_, OrgMinimaObjectsBaseMiniNumber_mMathContext));
}

+ (OrgMinimaObjectsBaseMiniNumber *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn {
  return OrgMinimaObjectsBaseMiniNumber_ReadFromStreamWithJavaIoDataInputStream_(zIn);
}

- (void)dealloc {
  RELEASE_(mNumber_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 2, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 3, -1, -1, -1, -1 },
    { NULL, "LJavaMathBigDecimal;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LJavaMathBigInteger;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "D", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "J", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 4, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 6, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 7, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 8, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 9, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 10, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 11, 5, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, 12, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, 13, 5, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 14, 5, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 15, 5, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 16, 5, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 17, 5, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, 18, 5, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 19, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 20, 21, 22, -1, -1, -1 },
    { NULL, "V", 0x1, 23, 24, 22, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x9, 25, 24, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithInt:);
  methods[2].selector = @selector(initWithJavaMathBigInteger:);
  methods[3].selector = @selector(initWithJavaMathBigDecimal:);
  methods[4].selector = @selector(initWithNSString:);
  methods[5].selector = @selector(getAsBigDecimal);
  methods[6].selector = @selector(getAsBigInteger);
  methods[7].selector = @selector(getAsDouble);
  methods[8].selector = @selector(getAsLong);
  methods[9].selector = @selector(getAsInt);
  methods[10].selector = @selector(addWithOrgMinimaObjectsBaseMiniNumber:);
  methods[11].selector = @selector(subWithOrgMinimaObjectsBaseMiniNumber:);
  methods[12].selector = @selector(divWithOrgMinimaObjectsBaseMiniNumber:);
  methods[13].selector = @selector(divRoundDownWithOrgMinimaObjectsBaseMiniNumber:);
  methods[14].selector = @selector(multWithOrgMinimaObjectsBaseMiniNumber:);
  methods[15].selector = @selector(powWithInt:);
  methods[16].selector = @selector(moduloWithOrgMinimaObjectsBaseMiniNumber:);
  methods[17].selector = @selector(floor);
  methods[18].selector = @selector(ceil);
  methods[19].selector = @selector(setSignificantDigitsWithInt:);
  methods[20].selector = @selector(abs);
  methods[21].selector = @selector(increment);
  methods[22].selector = @selector(decrement);
  methods[23].selector = @selector(compareToWithOrgMinimaObjectsBaseMiniNumber:);
  methods[24].selector = @selector(isEqualWithOrgMinimaObjectsBaseMiniNumber:);
  methods[25].selector = @selector(isLessWithOrgMinimaObjectsBaseMiniNumber:);
  methods[26].selector = @selector(isLessEqualWithOrgMinimaObjectsBaseMiniNumber:);
  methods[27].selector = @selector(isMoreWithOrgMinimaObjectsBaseMiniNumber:);
  methods[28].selector = @selector(isMoreEqualWithOrgMinimaObjectsBaseMiniNumber:);
  methods[29].selector = @selector(description);
  methods[30].selector = @selector(writeDataStreamWithJavaIoDataOutputStream:);
  methods[31].selector = @selector(readDataStreamWithJavaIoDataInputStream:);
  methods[32].selector = @selector(ReadFromStreamWithJavaIoDataInputStream:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mMathContext", "LJavaMathMathContext;", .constantValue.asLong = 0, 0x19, -1, 26, -1, -1 },
    { "ZERO", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 27, -1, -1 },
    { "ONE", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 28, -1, -1 },
    { "TWO", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 29, -1, -1 },
    { "EIGHT", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 30, -1, -1 },
    { "THIRTYTWO", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 31, -1, -1 },
    { "SIXTYFOUR", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 32, -1, -1 },
    { "TEN", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 33, -1, -1 },
    { "HUNDRED", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 34, -1, -1 },
    { "THOUSAND", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 35, -1, -1 },
    { "MINUSONE", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x19, -1, 36, -1, -1 },
    { "mNumber_", "LJavaMathBigDecimal;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "I", "LJavaMathBigInteger;", "LJavaMathBigDecimal;", "LNSString;", "add", "LOrgMinimaObjectsBaseMiniNumber;", "sub", "div", "divRoundDown", "mult", "pow", "modulo", "setSignificantDigits", "compareTo", "isEqual", "isLess", "isLessEqual", "isMore", "isMoreEqual", "toString", "writeDataStream", "LJavaIoDataOutputStream;", "LJavaIoIOException;", "readDataStream", "LJavaIoDataInputStream;", "ReadFromStream", &OrgMinimaObjectsBaseMiniNumber_mMathContext, &OrgMinimaObjectsBaseMiniNumber_ZERO, &OrgMinimaObjectsBaseMiniNumber_ONE, &OrgMinimaObjectsBaseMiniNumber_TWO, &OrgMinimaObjectsBaseMiniNumber_EIGHT, &OrgMinimaObjectsBaseMiniNumber_THIRTYTWO, &OrgMinimaObjectsBaseMiniNumber_SIXTYFOUR, &OrgMinimaObjectsBaseMiniNumber_TEN, &OrgMinimaObjectsBaseMiniNumber_HUNDRED, &OrgMinimaObjectsBaseMiniNumber_THOUSAND, &OrgMinimaObjectsBaseMiniNumber_MINUSONE };
  static const J2ObjcClassInfo _OrgMinimaObjectsBaseMiniNumber = { "MiniNumber", "org.minima.objects.base", ptrTable, methods, fields, 7, 0x1, 33, 12, -1, -1, -1, -1, -1 };
  return &_OrgMinimaObjectsBaseMiniNumber;
}

+ (void)initialize {
  if (self == [OrgMinimaObjectsBaseMiniNumber class]) {
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_mMathContext, new_JavaMathMathContext_initWithInt_withJavaMathRoundingMode_(20, JreLoadEnum(JavaMathRoundingMode, DOWN)));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_ZERO, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"0"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_ONE, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"1"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_TWO, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"2"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_EIGHT, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"8"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_THIRTYTWO, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"32"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_SIXTYFOUR, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"64"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_TEN, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"10"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_HUNDRED, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"100"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_THOUSAND, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"1000"));
    JreStrongAssignAndConsume(&OrgMinimaObjectsBaseMiniNumber_MINUSONE, new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"-1"));
    J2OBJC_SET_INITIALIZED(OrgMinimaObjectsBaseMiniNumber)
  }
}

@end

void OrgMinimaObjectsBaseMiniNumber_init(OrgMinimaObjectsBaseMiniNumber *self) {
  NSObject_init(self);
  JreStrongAssign(&self->mNumber_, JreLoadStatic(JavaMathBigDecimal, ZERO));
}

OrgMinimaObjectsBaseMiniNumber *new_OrgMinimaObjectsBaseMiniNumber_init() {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMiniNumber, init)
}

OrgMinimaObjectsBaseMiniNumber *create_OrgMinimaObjectsBaseMiniNumber_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMiniNumber, init)
}

void OrgMinimaObjectsBaseMiniNumber_initWithInt_(OrgMinimaObjectsBaseMiniNumber *self, jint zNumber) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mNumber_, new_JavaMathBigDecimal_initWithInt_withJavaMathMathContext_(zNumber, OrgMinimaObjectsBaseMiniNumber_mMathContext));
}

OrgMinimaObjectsBaseMiniNumber *new_OrgMinimaObjectsBaseMiniNumber_initWithInt_(jint zNumber) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithInt_, zNumber)
}

OrgMinimaObjectsBaseMiniNumber *create_OrgMinimaObjectsBaseMiniNumber_initWithInt_(jint zNumber) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithInt_, zNumber)
}

void OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigInteger_(OrgMinimaObjectsBaseMiniNumber *self, JavaMathBigInteger *zNumber) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mNumber_, new_JavaMathBigDecimal_initWithJavaMathBigInteger_withJavaMathMathContext_(zNumber, OrgMinimaObjectsBaseMiniNumber_mMathContext));
}

OrgMinimaObjectsBaseMiniNumber *new_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigInteger_(JavaMathBigInteger *zNumber) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithJavaMathBigInteger_, zNumber)
}

OrgMinimaObjectsBaseMiniNumber *create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigInteger_(JavaMathBigInteger *zNumber) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithJavaMathBigInteger_, zNumber)
}

void OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_(OrgMinimaObjectsBaseMiniNumber *self, JavaMathBigDecimal *zBigD) {
  NSObject_init(self);
  JreStrongAssign(&self->mNumber_, zBigD);
}

OrgMinimaObjectsBaseMiniNumber *new_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zBigD) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithJavaMathBigDecimal_, zBigD)
}

OrgMinimaObjectsBaseMiniNumber *create_OrgMinimaObjectsBaseMiniNumber_initWithJavaMathBigDecimal_(JavaMathBigDecimal *zBigD) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithJavaMathBigDecimal_, zBigD)
}

void OrgMinimaObjectsBaseMiniNumber_initWithNSString_(OrgMinimaObjectsBaseMiniNumber *self, NSString *zNumber) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mNumber_, new_JavaMathBigDecimal_initWithNSString_withJavaMathMathContext_(zNumber, OrgMinimaObjectsBaseMiniNumber_mMathContext));
}

OrgMinimaObjectsBaseMiniNumber *new_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(NSString *zNumber) {
  J2OBJC_NEW_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithNSString_, zNumber)
}

OrgMinimaObjectsBaseMiniNumber *create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(NSString *zNumber) {
  J2OBJC_CREATE_IMPL(OrgMinimaObjectsBaseMiniNumber, initWithNSString_, zNumber)
}

OrgMinimaObjectsBaseMiniNumber *OrgMinimaObjectsBaseMiniNumber_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn) {
  OrgMinimaObjectsBaseMiniNumber_initialize();
  OrgMinimaObjectsBaseMiniNumber *data = create_OrgMinimaObjectsBaseMiniNumber_init();
  @try {
    [data readDataStreamWithJavaIoDataInputStream:zIn];
  }
  @catch (JavaIoIOException *e) {
    [e printStackTrace];
    return nil;
  }
  return data;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaObjectsBaseMiniNumber)
