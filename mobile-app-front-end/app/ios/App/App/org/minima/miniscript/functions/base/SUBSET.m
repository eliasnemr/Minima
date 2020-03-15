//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/base/SUBSET.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/lang/System.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/exceptions/ExecutionException.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/functions/base/SUBSET.h"
#include "org/minima/miniscript/values/HEXValue.h"
#include "org/minima/miniscript/values/ScriptValue.h"
#include "org/minima/miniscript/values/Value.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaMiniscriptFunctionsBaseSUBSET

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaMiniscriptFunctionsBaseSUBSET_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  jint type = [((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:2])) getValueWithOrgMinimaMiniscriptContract:zContract])) getValueType];
  jint start = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaMiniscriptContract:zContract])) getNumber])) getAsInt];
  jint end = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:1])) getValueWithOrgMinimaMiniscriptContract:zContract])) getNumber])) getAsInt];
  jint len = end - start;
  IOSByteArray *orig = [((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:2])) getValueWithOrgMinimaMiniscriptContract:zContract])) getRawData];
  IOSByteArray *subs = [IOSByteArray arrayWithLength:len];
  JavaLangSystem_arraycopyWithId_withInt_withId_withInt_withInt_(orig, start, subs, 0, len);
  if (type == OrgMinimaMiniscriptValuesHEXValue_VALUE_HEX) {
    return create_OrgMinimaMiniscriptValuesHEXValue_initWithByteArray_(subs);
  }
  else if (type == OrgMinimaMiniscriptValuesScriptValue_VALUE_SCRIPT) {
    return create_OrgMinimaMiniscriptValuesScriptValue_initWithNSString_([NSString java_stringWithBytes:subs]);
  }
  else {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$I$$", @"Invaid Value Type in SUBSET ", type, @") ", [((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:2])) description]));
  }
}

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaMiniscriptFunctionsBaseSUBSET_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptFunctionsMinimaFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(runFunctionWithOrgMinimaMiniscriptContract:);
  methods[2].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "runFunction", "LOrgMinimaMiniscriptContract;", "LOrgMinimaMiniscriptExceptionsExecutionException;" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptFunctionsBaseSUBSET = { "SUBSET", "org.minima.miniscript.functions.base", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptFunctionsBaseSUBSET;
}

@end

void OrgMinimaMiniscriptFunctionsBaseSUBSET_init(OrgMinimaMiniscriptFunctionsBaseSUBSET *self) {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(self, @"SUBSET");
}

OrgMinimaMiniscriptFunctionsBaseSUBSET *new_OrgMinimaMiniscriptFunctionsBaseSUBSET_init() {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptFunctionsBaseSUBSET, init)
}

OrgMinimaMiniscriptFunctionsBaseSUBSET *create_OrgMinimaMiniscriptFunctionsBaseSUBSET_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptFunctionsBaseSUBSET, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptFunctionsBaseSUBSET)