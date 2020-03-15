//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/txn/SUMOUTTOK.java
//

#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/functions/txn/SUMOUTTOK.h"
#include "org/minima/miniscript/values/NumberValue.h"
#include "org/minima/miniscript/values/Value.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/objects/base/MiniNumber.h"

@implementation OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  OrgMinimaObjectsBaseMiniHash *token = create_OrgMinimaObjectsBaseMiniHash_initWithByteArray_([((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaMiniscriptContract:zContract])) getRawData]);
  OrgMinimaObjectsTransaction *trans = [((OrgMinimaMiniscriptContract *) nil_chk(zContract)) getTransaction];
  JavaUtilArrayList *outs = [((OrgMinimaObjectsTransaction *) nil_chk(trans)) getAllOutputs];
  OrgMinimaObjectsBaseMiniNumber *total = JreLoadStatic(OrgMinimaObjectsBaseMiniNumber, ZERO);
  for (OrgMinimaObjectsCoin * __strong cc in nil_chk(outs)) {
    if ([((OrgMinimaObjectsBaseMiniHash *) nil_chk([((OrgMinimaObjectsCoin *) nil_chk(cc)) getTokenID])) isExactlyEqualWithOrgMinimaObjectsBaseMiniData:token]) {
      total = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk(total)) addWithOrgMinimaObjectsBaseMiniNumber:[cc getAmount]];
    }
  }
  return create_OrgMinimaMiniscriptValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_(total);
}

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK_init();
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
  static const J2ObjcClassInfo _OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK = { "SUMOUTTOK", "org.minima.miniscript.functions.txn", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK;
}

@end

void OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK_init(OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK *self) {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(self, @"SUMOUTTOK");
}

OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK *new_OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK_init() {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK, init)
}

OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK *create_OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptFunctionsTxnSUMOUTTOK)