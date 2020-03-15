//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/txpowtree/BlockTreeNode.java
//

#include "J2ObjC_source.h"
#include "java/math/BigInteger.h"
#include "java/util/ArrayList.h"
#include "java/util/Collections.h"
#include "org/minima/database/mmr/MMRSet.h"
#include "org/minima/database/txpowtree/BlockTreeNode.h"
#include "org/minima/objects/TxPOW.h"
#include "org/minima/objects/base/MiniHash.h"
#include "org/minima/utils/Maths.h"

@interface OrgMinimaDatabaseTxpowtreeBlockTreeNode () {
 @public
  jint mBlockState_;
  OrgMinimaObjectsTxPOW *mTXPOW_;
  jint mSuperBlockLevel_;
  jint mCurrentLevel_;
  JavaUtilArrayList *mChildren_;
  OrgMinimaDatabaseTxpowtreeBlockTreeNode *mParent_;
  jboolean mCascade_;
  JavaMathBigInteger *mTotalWeight_;
  JavaMathBigInteger *mWeight_;
}

- (void)init__WithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPow OBJC_METHOD_FAMILY_NONE;

@end

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mTXPOW_, OrgMinimaObjectsTxPOW *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mChildren_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mParent_, OrgMinimaDatabaseTxpowtreeBlockTreeNode *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mTotalWeight_, JavaMathBigInteger *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mWeight_, JavaMathBigInteger *)

__attribute__((unused)) static void OrgMinimaDatabaseTxpowtreeBlockTreeNode_init__WithOrgMinimaObjectsTxPOW_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaObjectsTxPOW *zTxPow);

@implementation OrgMinimaDatabaseTxpowtreeBlockTreeNode

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaDatabaseTxpowtreeBlockTreeNode_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (instancetype)initWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPow {
  OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(self, zTxPow);
  return self;
}

- (void)init__WithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPow {
  OrgMinimaDatabaseTxpowtreeBlockTreeNode_init__WithOrgMinimaObjectsTxPOW_(self, zTxPow);
}

- (instancetype)initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zNode {
  OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(self, zNode);
  return self;
}

- (void)setStateWithInt:(jint)zState {
  mBlockState_ = zState;
}

- (jint)getState {
  return mBlockState_;
}

- (void)setMMRsetWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zMMRSet {
  JreStrongAssign(&mMMRSet_, zMMRSet);
}

- (OrgMinimaDatabaseMmrMMRSet *)getMMRSet {
  return mMMRSet_;
}

- (void)setCascadeWithBoolean:(jboolean)zCascade {
  mCascade_ = zCascade;
}

- (jboolean)isCascade {
  return mCascade_;
}

- (void)resetCurrentWeight {
  JreStrongAssign(&mWeight_, [((JavaMathBigInteger *) nil_chk(JreLoadStatic(OrgMinimaUtilsMaths, BI_TWO))) powWithInt:[self getCurrentLevel]]);
  JreStrongAssign(&mTotalWeight_, mWeight_);
}

- (JavaMathBigInteger *)getWeight {
  return mWeight_;
}

- (void)addToTotalWeightWithJavaMathBigInteger:(JavaMathBigInteger *)zTotal {
  JreStrongAssign(&mTotalWeight_, [((JavaMathBigInteger *) nil_chk(mTotalWeight_)) addWithJavaMathBigInteger:zTotal]);
}

- (JavaMathBigInteger *)getTotalWeight {
  return mTotalWeight_;
}

- (OrgMinimaObjectsTxPOW *)getTxPow {
  return mTXPOW_;
}

- (jint)getSuperBlockLevel {
  return mSuperBlockLevel_;
}

- (jint)getCurrentLevel {
  return mCurrentLevel_;
}

- (void)setCurrentLevelWithInt:(jint)zLevel {
  mCurrentLevel_ = zLevel;
  [self resetCurrentWeight];
}

- (OrgMinimaObjectsBaseMiniHash *)getTxPowID {
  return [((OrgMinimaObjectsTxPOW *) nil_chk([self getTxPow])) getTxPowID];
}

- (void)setParentWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zParent {
  JreStrongAssign(&mParent_, zParent);
}

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)getParent {
  return mParent_;
}

- (void)addChildWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zChild {
  [((JavaUtilArrayList *) nil_chk(mChildren_)) addWithId:zChild];
  [((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk(zChild)) setParentWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:self];
  JavaUtilCollections_sortWithJavaUtilList_(mChildren_);
}

- (JavaUtilArrayList *)getChildren {
  return mChildren_;
}

- (jint)getNumberChildren {
  return [((JavaUtilArrayList *) nil_chk(mChildren_)) size];
}

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)getChildWithInt:(jint)zChild {
  return [((JavaUtilArrayList *) nil_chk(mChildren_)) getWithInt:zChild];
}

- (void)resetNode {
  JreStrongAssign(&mParent_, nil);
  [((JavaUtilArrayList *) nil_chk(mChildren_)) clear];
}

- (jint)compareToWithId:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)o {
  cast_chk(o, [OrgMinimaDatabaseTxpowtreeBlockTreeNode class]);
  return [((OrgMinimaObjectsBaseMiniHash *) nil_chk([((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk(o)) getTxPowID])) compareWithOrgMinimaObjectsBaseMiniData:[self getTxPowID]];
}

- (NSString *)description {
  return JreStrcat("CICI$Z$IC$", '[', [self getCurrentLevel], '/', [self getSuperBlockLevel], @"] casc:", [self isCascade], @" state:", [self getState], ' ', [((OrgMinimaObjectsTxPOW *) nil_chk(mTXPOW_)) description]);
}

- (void)dealloc {
  RELEASE_(mTXPOW_);
  RELEASE_(mChildren_);
  RELEASE_(mParent_);
  RELEASE_(mTotalWeight_);
  RELEASE_(mWeight_);
  RELEASE_(mMMRSet_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x2, 1, 0, -1, -1, -1, -1 },
    { NULL, NULL, 0x1, -1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 4, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 5, 6, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseMmrMMRSet;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 7, 8, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LJavaMathBigInteger;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 9, 10, -1, -1, -1, -1 },
    { NULL, "LJavaMathBigInteger;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsTxPOW;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 11, 4, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsBaseMiniHash;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 12, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseTxpowtreeBlockTreeNode;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 13, 2, -1, -1, -1, -1 },
    { NULL, "LJavaUtilArrayList;", 0x1, -1, -1, -1, 14, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaDatabaseTxpowtreeBlockTreeNode;", 0x1, 15, 4, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, 16, 2, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 17, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(initWithOrgMinimaObjectsTxPOW:);
  methods[2].selector = @selector(init__WithOrgMinimaObjectsTxPOW:);
  methods[3].selector = @selector(initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:);
  methods[4].selector = @selector(setStateWithInt:);
  methods[5].selector = @selector(getState);
  methods[6].selector = @selector(setMMRsetWithOrgMinimaDatabaseMmrMMRSet:);
  methods[7].selector = @selector(getMMRSet);
  methods[8].selector = @selector(setCascadeWithBoolean:);
  methods[9].selector = @selector(isCascade);
  methods[10].selector = @selector(resetCurrentWeight);
  methods[11].selector = @selector(getWeight);
  methods[12].selector = @selector(addToTotalWeightWithJavaMathBigInteger:);
  methods[13].selector = @selector(getTotalWeight);
  methods[14].selector = @selector(getTxPow);
  methods[15].selector = @selector(getSuperBlockLevel);
  methods[16].selector = @selector(getCurrentLevel);
  methods[17].selector = @selector(setCurrentLevelWithInt:);
  methods[18].selector = @selector(getTxPowID);
  methods[19].selector = @selector(setParentWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:);
  methods[20].selector = @selector(getParent);
  methods[21].selector = @selector(addChildWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:);
  methods[22].selector = @selector(getChildren);
  methods[23].selector = @selector(getNumberChildren);
  methods[24].selector = @selector(getChildWithInt:);
  methods[25].selector = @selector(resetNode);
  methods[26].selector = @selector(compareToWithId:);
  methods[27].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "BLOCKSTATE_BASIC", "I", .constantValue.asInt = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_BASIC, 0x19, -1, -1, -1, -1 },
    { "BLOCKSTATE_VALID", "I", .constantValue.asInt = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_VALID, 0x19, -1, -1, -1, -1 },
    { "BLOCKSTATE_INVALID", "I", .constantValue.asInt = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_INVALID, 0x19, -1, -1, -1, -1 },
    { "mBlockState_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mTXPOW_", "LOrgMinimaObjectsTxPOW;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mSuperBlockLevel_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mCurrentLevel_", "I", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mChildren_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x2, -1, -1, 18, -1 },
    { "mParent_", "LOrgMinimaDatabaseTxpowtreeBlockTreeNode;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mCascade_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mTotalWeight_", "LJavaMathBigInteger;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mWeight_", "LJavaMathBigInteger;", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mMMRSet_", "LOrgMinimaDatabaseMmrMMRSet;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LOrgMinimaObjectsTxPOW;", "init", "LOrgMinimaDatabaseTxpowtreeBlockTreeNode;", "setState", "I", "setMMRset", "LOrgMinimaDatabaseMmrMMRSet;", "setCascade", "Z", "addToTotalWeight", "LJavaMathBigInteger;", "setCurrentLevel", "setParent", "addChild", "()Ljava/util/ArrayList<Lorg/minima/database/txpowtree/BlockTreeNode;>;", "getChild", "compareTo", "toString", "Ljava/util/ArrayList<Lorg/minima/database/txpowtree/BlockTreeNode;>;", "Ljava/lang/Object;Ljava/lang/Comparable<Lorg/minima/database/txpowtree/BlockTreeNode;>;" };
  static const J2ObjcClassInfo _OrgMinimaDatabaseTxpowtreeBlockTreeNode = { "BlockTreeNode", "org.minima.database.txpowtree", ptrTable, methods, fields, 7, 0x1, 28, 13, -1, -1, -1, 19, -1 };
  return &_OrgMinimaDatabaseTxpowtreeBlockTreeNode;
}

@end

void OrgMinimaDatabaseTxpowtreeBlockTreeNode_init(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self) {
  NSObject_init(self);
  self->mBlockState_ = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_BASIC;
  JreStrongAssignAndConsume(&self->mChildren_, new_JavaUtilArrayList_init());
  JreStrongAssign(&self->mParent_, nil);
  self->mCascade_ = false;
  JreStrongAssignAndConsume(&self->mTotalWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mMMRSet_, new_OrgMinimaDatabaseMmrMMRSet_init());
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_init() {
  J2OBJC_NEW_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, init)
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, init)
}

void OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaObjectsTxPOW *zTxPow) {
  NSObject_init(self);
  self->mBlockState_ = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_BASIC;
  JreStrongAssignAndConsume(&self->mChildren_, new_JavaUtilArrayList_init());
  JreStrongAssign(&self->mParent_, nil);
  self->mCascade_ = false;
  JreStrongAssignAndConsume(&self->mTotalWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mMMRSet_, new_OrgMinimaDatabaseMmrMMRSet_init());
  OrgMinimaDatabaseTxpowtreeBlockTreeNode_init__WithOrgMinimaObjectsTxPOW_(self, zTxPow);
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPow) {
  J2OBJC_NEW_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, initWithOrgMinimaObjectsTxPOW_, zTxPow)
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPow) {
  J2OBJC_CREATE_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, initWithOrgMinimaObjectsTxPOW_, zTxPow)
}

void OrgMinimaDatabaseTxpowtreeBlockTreeNode_init__WithOrgMinimaObjectsTxPOW_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaObjectsTxPOW *zTxPow) {
  JreStrongAssign(&self->mTXPOW_, zTxPow);
  self->mSuperBlockLevel_ = [((OrgMinimaObjectsTxPOW *) nil_chk(self->mTXPOW_)) getSuperLevel];
  self->mCurrentLevel_ = [((OrgMinimaObjectsTxPOW *) nil_chk(self->mTXPOW_)) getBlockDifficulty];
  [self resetCurrentWeight];
}

void OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode) {
  NSObject_init(self);
  self->mBlockState_ = OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_BASIC;
  JreStrongAssignAndConsume(&self->mChildren_, new_JavaUtilArrayList_init());
  JreStrongAssign(&self->mParent_, nil);
  self->mCascade_ = false;
  JreStrongAssignAndConsume(&self->mTotalWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mWeight_, new_JavaMathBigInteger_initWithNSString_(@"0"));
  JreStrongAssignAndConsume(&self->mMMRSet_, new_OrgMinimaDatabaseMmrMMRSet_init());
  JreStrongAssign(&self->mTXPOW_, [((OrgMinimaDatabaseTxpowtreeBlockTreeNode *) nil_chk(zNode)) getTxPow]);
  self->mSuperBlockLevel_ = [zNode getSuperBlockLevel];
  self->mCurrentLevel_ = [zNode getCurrentLevel];
  [self setMMRsetWithOrgMinimaDatabaseMmrMMRSet:[zNode getMMRSet]];
  [self setCascadeWithBoolean:[zNode isCascade]];
  [self setStateWithInt:[zNode getState]];
  [self resetCurrentWeight];
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode) {
  J2OBJC_NEW_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_, zNode)
}

OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode) {
  J2OBJC_CREATE_IMPL(OrgMinimaDatabaseTxpowtreeBlockTreeNode, initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_, zNode)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaDatabaseTxpowtreeBlockTreeNode)