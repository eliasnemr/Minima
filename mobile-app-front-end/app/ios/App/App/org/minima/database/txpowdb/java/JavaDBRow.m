//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/txpowdb/java/JavaDBRow.java
//

#include "J2ObjC_source.h"
#include "java/lang/System.h"
#include "org/minima/database/txpowdb/TxPOWDBRow.h"
#include "org/minima/database/txpowdb/java/JavaDBRow.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/base/MiniNumber.h"

@interface OrgMinimaDatabaseTxpowdbJavaJavaDBRow () {
 @public
  OrgMinimaObjectsTxPOW *mTxPOW_;
  jboolean mIsOnChainBlock_;
  jboolean mIsInBlock_;
  OrgMinimaObjectsBaseMiniNumber *mInBlocknumber_;
  jint mBlockState_;
  jlong mDeleteTime_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowdbJavaJavaDBRow, mTxPOW_, OrgMinimaObjectsTxPOW *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowdbJavaJavaDBRow, mInBlocknumber_, OrgMinimaObjectsBaseMiniNumber *)

@implementation OrgMinimaDatabaseTxpowdbJavaJavaDBRow

- (instancetype)initWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW {
  OrgMinimaDatabaseTxpowdbJavaJavaDBRow_initWithOrgMinimaObjectsTxPOW_(self, zTxPOW);
  return self;
}

- (OrgMinimaObjectsTxPOW *)getTxPOW {
  return mTxPOW_;
}

- (void)setIsInBlockWithBoolean:(jboolean)zIsInBlock {
  mIsInBlock_ = zIsInBlock;
}

- (jboolean)isInBlock {
  return mIsInBlock_;
}

- (OrgMinimaObjectsBaseMiniNumber *)getInBlockNumber {
  return mInBlocknumber_;
}

- (void)setInBlockNumberWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zBlockNumber {
  JreStrongAssign(&mInBlocknumber_, zBlockNumber);
}

- (NSString *)description {
  return JreStrcat("$$Z$Z$@C@", [self getStatusAsString], @" ONCHAINBLK:", [self isOnChainBlock], @" IS_IN_BLOCK (", mIsInBlock_, @") :", mInBlocknumber_, ' ', mTxPOW_);
}

- (NSString *)getStatusAsString {
  switch (mBlockState_) {
    case OrgMinimaDatabaseTxpowdbTxPOWDBRow_TXPOWDBROW_STATE_BASIC:
    return @"BASIC";
    case OrgMinimaDatabaseTxpowdbTxPOWDBRow_TXPOWDBROW_STATE_FULL:
    return @"FULL";
    default:
    return @"ERROR";
  }
}

- (jboolean)isOnChainBlock {
  return mIsOnChainBlock_;
}

- (void)setOnChainBlockWithBoolean:(jboolean)zOnChain {
  mIsOnChainBlock_ = zOnChain;
}

- (jint)getBlockState {
  return mBlockState_;
}

- (void)setBlockStateWithInt:(jint)zState {
  mBlockState_ = zState;
}

- (void)deleteRow {
  if (mDeleteTime_ == 0) {
    mDeleteTime_ = JavaLangSystem_currentTimeMillis();
  }
}

- (jlong)getDeleteTime {
  return mDeleteTime_;
}

- (void)dealloc {
  RELEASE_(mTxPOW_);
  RELEASE_(mInBlocknumber_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsTxPOW;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniNumber;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 4, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 5, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 6, 2, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 8, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "J", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithOrgMinimaObjectsTxPOW:);
  methods[1].selector = @selector(getTxPOW);
  methods[2].selector = @selector(setIsInBlockWithBoolean:);
  methods[3].selector = @selector(isInBlock);
  methods[4].selector = @selector(getInBlockNumber);
  methods[5].selector = @selector(setInBlockNumberWithOrgMinimaObjectsBaseMiniNumber:);
  methods[6].selector = @selector(description);
  methods[7].selector = @selector(getStatusAsString);
  methods[8].selector = @selector(isOnChainBlock);
  methods[9].selector = @selector(setOnChainBlockWithBoolean:);
  methods[10].selector = @selector(getBlockState);
  methods[11].selector = @selector(setBlockStateWithInt:);
  methods[12].selector = @selector(deleteRow);
  methods[13].selector = @selector(getDeleteTime);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mTxPOW_", "LOrgMinimaObjectsTxPOW;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mIsOnChainBlock_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mIsInBlock_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mInBlocknumber_", "LOrgMinimaObjectsBaseMiniNumber;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mBlockState_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mDeleteTime_", "J", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaObjectsTxPOW;", "setIsInBlock", "Z", "setInBlockNumber", "LOrgMinimaObjectsBaseMiniNumber;", "toString", "setOnChainBlock", "setBlockState", "I" };
  static const J2ObjcClassInfo _OrgMinimaDatabaseTxpowdbJavaJavaDBRow = { "JavaDBRow", "org.minima.database.txpowdb.java", ptrTable, methods, fields, 7, 0x1, 14, 6, -1, -1, -1, -1, -1 };
  return &_OrgMinimaDatabaseTxpowdbJavaJavaDBRow;
}

@end

void OrgMinimaDatabaseTxpowdbJavaJavaDBRow_initWithOrgMinimaObjectsTxPOW_(OrgMinimaDatabaseTxpowdbJavaJavaDBRow *self, OrgMinimaObjectsTxPOW *zTxPOW) {
  NSObject_init(self);
  JreStrongAssign(&self->mTxPOW_, zTxPOW);
  self->mIsInBlock_ = false;
  self->mIsOnChainBlock_ = false;
  self->mBlockState_ = OrgMinimaDatabaseTxpowdbTxPOWDBRow_TXPOWDBROW_STATE_BASIC;
  self->mDeleteTime_ = 0;
}

OrgMinimaDatabaseTxpowdbJavaJavaDBRow *new_OrgMinimaDatabaseTxpowdbJavaJavaDBRow_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPOW) {
  J2OBJC_NEW_IMPL(OrgMinimaDatabaseTxpowdbJavaJavaDBRow, initWithOrgMinimaObjectsTxPOW_, zTxPOW)
}

OrgMinimaDatabaseTxpowdbJavaJavaDBRow *create_OrgMinimaDatabaseTxpowdbJavaJavaDBRow_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPOW) {
  J2OBJC_CREATE_IMPL(OrgMinimaDatabaseTxpowdbJavaJavaDBRow, initWithOrgMinimaObjectsTxPOW_, zTxPOW)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaDatabaseTxpowdbJavaJavaDBRow)
