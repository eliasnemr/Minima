//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/functions/txn/STATE.java
//

#include "J2ObjC_source.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/exceptions/ExecutionException.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/functions/txn/STATE.h"
#include "org/minima/miniscript/values/Value.h"
#include "org/minima/objects/StateVariable.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/objects/base/MiniString.h"

@implementation OrgMinimaMiniscriptFunctionsTxnSTATE

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaMiniscriptFunctionsTxnSTATE_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaMiniscriptValuesValue *)runFunctionWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract {
  OrgMinimaObjectsBaseMiniNumber *statenum = [((OrgMinimaMiniscriptValuesValue *) nil_chk([((id<OrgMinimaMiniscriptExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaMiniscriptContract:zContract])) getNumber];
  OrgMinimaObjectsTransaction *trans = [((OrgMinimaMiniscriptContract *) nil_chk(zContract)) getTransaction];
  if (![((OrgMinimaObjectsTransaction *) nil_chk(trans)) stateExistsWithOrgMinimaObjectsBaseMiniNumber:statenum]) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$@", @"Invalid State Variable ", statenum));
  }
  NSString *stateval = [((OrgMinimaObjectsBaseMiniString *) nil_chk([((OrgMinimaObjectsStateVariable *) nil_chk([trans getStateValueWithOrgMinimaObjectsBaseMiniNumber:statenum])) getData])) description];
  stateval = OrgMinimaMiniscriptContract_cleanScriptWithNSString_(stateval);
  return OrgMinimaMiniscriptValuesValue_getValueWithNSString_(stateval);
}

- (OrgMinimaMiniscriptFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaMiniscriptFunctionsTxnSTATE_init();
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
  static const J2ObjcClassInfo _OrgMinimaMiniscriptFunctionsTxnSTATE = { "STATE", "org.minima.miniscript.functions.txn", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptFunctionsTxnSTATE;
}

@end

void OrgMinimaMiniscriptFunctionsTxnSTATE_init(OrgMinimaMiniscriptFunctionsTxnSTATE *self) {
  OrgMinimaMiniscriptFunctionsMinimaFunction_initWithNSString_(self, @"STATE");
}

OrgMinimaMiniscriptFunctionsTxnSTATE *new_OrgMinimaMiniscriptFunctionsTxnSTATE_init() {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptFunctionsTxnSTATE, init)
}

OrgMinimaMiniscriptFunctionsTxnSTATE *create_OrgMinimaMiniscriptFunctionsTxnSTATE_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptFunctionsTxnSTATE, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptFunctionsTxnSTATE)
