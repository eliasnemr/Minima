//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/kissvm/functions/txn/output/GETOUTAMT.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/kissvm/Contract.h"
#include "org/minima/kissvm/exceptions/ExecutionException.h"
#include "org/minima/kissvm/expressions/Expression.h"
#include "org/minima/kissvm/functions/MinimaFunction.h"
#include "org/minima/kissvm/functions/txn/output/GETOUTAMT.h"
#include "org/minima/kissvm/values/NumberValue.h"
#include "org/minima/kissvm/values/Value.h"
#include "org/minima/objects/Coin.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/Witness.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/objects/proofs/TokenProof.h"

@implementation OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaKissvmValuesValue *)runFunctionWithOrgMinimaKissvmContract:(OrgMinimaKissvmContract *)zContract {
  jint output = [((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaKissvmValuesValue *) nil_chk([((id<OrgMinimaKissvmExpressionsExpression>) nil_chk([self getParameterWithInt:0])) getValueWithOrgMinimaKissvmContract:zContract])) getNumber])) getAsInt];
  OrgMinimaObjectsTransaction *trans = [((OrgMinimaKissvmContract *) nil_chk(zContract)) getTransaction];
  JavaUtilArrayList *outs = [((OrgMinimaObjectsTransaction *) nil_chk(trans)) getAllOutputs];
  if ([((JavaUtilArrayList *) nil_chk(outs)) size] <= output) {
    @throw create_OrgMinimaKissvmExceptionsExecutionException_initWithNSString_(JreStrcat("$ICI", @"Output number too high ", output, '/', [outs size]));
  }
  OrgMinimaObjectsCoin *cc = [outs getWithInt:output];
  if (![((OrgMinimaObjectsBaseMiniData *) nil_chk([((OrgMinimaObjectsCoin *) nil_chk(cc)) getTokenID])) isEqualWithOrgMinimaObjectsBaseMiniData:JreLoadStatic(OrgMinimaObjectsCoin, MINIMA_TOKENID)]) {
    OrgMinimaObjectsProofsTokenProof *td = [((OrgMinimaObjectsWitness *) nil_chk([zContract getWitness])) getTokenDetailWithOrgMinimaObjectsBaseMiniData:[cc getTokenID]];
    return create_OrgMinimaKissvmValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_([((OrgMinimaObjectsBaseMiniNumber *) nil_chk([cc getAmount])) multWithOrgMinimaObjectsBaseMiniNumber:[((OrgMinimaObjectsProofsTokenProof *) nil_chk(td)) getScaleFactor]]);
  }
  return create_OrgMinimaKissvmValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_([cc getAmount]);
}

- (OrgMinimaKissvmFunctionsMinimaFunction *)getNewFunction {
  return create_OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaKissvmValuesValue;", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LOrgMinimaKissvmFunctionsMinimaFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(runFunctionWithOrgMinimaKissvmContract:);
  methods[2].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "runFunction", "LOrgMinimaKissvmContract;", "LOrgMinimaKissvmExceptionsExecutionException;" };
  static const J2ObjcClassInfo _OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT = { "GETOUTAMT", "org.minima.kissvm.functions.txn.output", ptrTable, methods, NULL, 7, 0x1, 3, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT;
}

@end

void OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT_init(OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT *self) {
  OrgMinimaKissvmFunctionsMinimaFunction_initWithNSString_(self, @"GETOUTAMT");
}

OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT *new_OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT_init() {
  J2OBJC_NEW_IMPL(OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT, init)
}

OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT *create_OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaKissvmFunctionsTxnOutputGETOUTAMT)
