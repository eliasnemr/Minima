//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/values/BooleanValue.java
//

#include "J2ObjC_source.h"
#include "org/minima/miniscript/values/BooleanValue.h"
#include "org/minima/miniscript/values/NumberValue.h"

J2OBJC_INITIALIZED_DEFN(OrgMinimaMiniscriptValuesBooleanValue)

OrgMinimaMiniscriptValuesBooleanValue *OrgMinimaMiniscriptValuesBooleanValue_FALSE;
OrgMinimaMiniscriptValuesBooleanValue *OrgMinimaMiniscriptValuesBooleanValue_TRUE;

@implementation OrgMinimaMiniscriptValuesBooleanValue

- (instancetype)initWithBoolean:(jboolean)zValue {
  OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(self, zValue);
  return self;
}

- (NSString *)description {
  return ([self isTrue] ? @"TRUE" : @"FALSE");
}

- (jint)getValueType {
  return OrgMinimaMiniscriptValuesBooleanValue_VALUE_BOOLEAN;
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithBoolean:);
  methods[1].selector = @selector(description);
  methods[2].selector = @selector(getValueType);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "VALUE_BOOLEAN", "I", .constantValue.asInt = OrgMinimaMiniscriptValuesBooleanValue_VALUE_BOOLEAN, 0x19, -1, -1, -1, -1 },
    { "FALSE", "LOrgMinimaMiniscriptValuesBooleanValue;", .constantValue.asLong = 0, 0x19, -1, 2, -1, -1 },
    { "TRUE", "LOrgMinimaMiniscriptValuesBooleanValue;", .constantValue.asLong = 0, 0x19, -1, 3, -1, -1 },
  };
  static const void *ptrTable[] = { "Z", "toString", &OrgMinimaMiniscriptValuesBooleanValue_FALSE, &OrgMinimaMiniscriptValuesBooleanValue_TRUE };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptValuesBooleanValue = { "BooleanValue", "org.minima.miniscript.values", ptrTable, methods, fields, 7, 0x1, 3, 3, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptValuesBooleanValue;
}

+ (void)initialize {
  if (self == [OrgMinimaMiniscriptValuesBooleanValue class]) {
    JreStrongAssignAndConsume(&OrgMinimaMiniscriptValuesBooleanValue_FALSE, new_OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(false));
    JreStrongAssignAndConsume(&OrgMinimaMiniscriptValuesBooleanValue_TRUE, new_OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(true));
    J2OBJC_SET_INITIALIZED(OrgMinimaMiniscriptValuesBooleanValue)
  }
}

@end

void OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(OrgMinimaMiniscriptValuesBooleanValue *self, jboolean zValue) {
  OrgMinimaMiniscriptValuesNumberValue_initWithInt_(self, zValue ? 1 : 0);
}

OrgMinimaMiniscriptValuesBooleanValue *new_OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(jboolean zValue) {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptValuesBooleanValue, initWithBoolean_, zValue)
}

OrgMinimaMiniscriptValuesBooleanValue *create_OrgMinimaMiniscriptValuesBooleanValue_initWithBoolean_(jboolean zValue) {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptValuesBooleanValue, initWithBoolean_, zValue)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptValuesBooleanValue)