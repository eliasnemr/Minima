//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/tests/cchain/CChain.java
//

#include "IOSObjectArray.h"
#include "IOSPrimitiveArray.h"
#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "org/minima/utils/tests/cchain/CChain.h"
#include "org/minima/utils/tests/cchain/CChainBlock.h"
#include "org/minima/utils/tests/cchain/CChainLevel.h"

@implementation OrgMinimaUtilsTestsCchainCChain

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsTestsCchainCChain_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (OrgMinimaUtilsTestsCchainCChainBlock *)getRoot {
  return mRoot_;
}

- (OrgMinimaUtilsTestsCchainCChainBlock *)getCurrent {
  return mCurrent_;
}

- (void)addBlockWithOrgMinimaUtilsTestsCchainCChainBlock:(OrgMinimaUtilsTestsCchainCChainBlock *)zBlock {
  if (mCurrent_ == nil) {
    JreStrongAssign(&mRoot_, zBlock);
    JreStrongAssign(&((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(mRoot_))->mParent_, nil);
    JreStrongAssign(&mRoot_->mChild_, nil);
  }
  else {
    JreStrongAssign(&((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(zBlock))->mParent_, mCurrent_);
    JreStrongAssign(&mCurrent_->mChild_, zBlock);
  }
  JreStrongAssign(&mCurrent_, zBlock);
}

- (void)setCurrentWithOrgMinimaUtilsTestsCchainCChainBlock:(OrgMinimaUtilsTestsCchainCChainBlock *)zBLock {
  JreStrongAssign(&mCurrent_, zBLock);
}

- (JavaUtilArrayList *)getAsList {
  JavaUtilArrayList *ret = create_JavaUtilArrayList_init();
  OrgMinimaUtilsTestsCchainCChainBlock *curr = mRoot_;
  [ret addWithId:curr];
  while (((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(curr))->mChild_ != nil) {
    curr = curr->mChild_;
    [ret addWithId:curr];
  }
  return ret;
}

- (IOSBooleanArray *)getLevels {
  IOSBooleanArray *ret = [IOSBooleanArray arrayWithLength:OrgMinimaUtilsTestsCchainCChainBlock_MAX_LEVELS];
  for (jint i = 0; i < OrgMinimaUtilsTestsCchainCChainBlock_MAX_LEVELS; i++) {
    *IOSBooleanArray_GetRef(ret, i) = false;
  }
  JavaUtilArrayList *blocks = [self getAsList];
  for (OrgMinimaUtilsTestsCchainCChainBlock * __strong block in nil_chk(blocks)) {
    *IOSBooleanArray_GetRef(ret, [((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(block)) getFinalLevel]) = true;
  }
  return ret;
}

- (jint)getSize {
  return [((JavaUtilArrayList *) nil_chk([self getAsList])) size];
}

- (jint)getMaxLevel {
  jint max = 0;
  JavaUtilArrayList *blocks = [self getAsList];
  for (OrgMinimaUtilsTestsCchainCChainBlock * __strong block in nil_chk(blocks)) {
    jint lev = [((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(block)) getFinalLevel];
    if (lev > max) {
      max = lev;
    }
  }
  return max;
}

+ (jdouble)getTotalLevelDiffWithOrgMinimaUtilsTestsCchainCChainBlock:(OrgMinimaUtilsTestsCchainCChainBlock *)zBlock
                                                             withInt:(jint)zLevel {
  return OrgMinimaUtilsTestsCchainCChain_getTotalLevelDiffWithOrgMinimaUtilsTestsCchainCChainBlock_withInt_(zBlock, zLevel);
}

- (NSString *)toLevelChain {
  NSString *ret = [NSString string];
  JavaUtilArrayList *blocks = [self getAsList];
  jint current = [((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk([((JavaUtilArrayList *) nil_chk(blocks)) getWithInt:0])) getFinalLevel];
  jint lev = current;
  jint tot = 0;
  jboolean added = false;
  for (OrgMinimaUtilsTestsCchainCChainBlock * __strong block in blocks) {
    lev = [((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(block)) getFinalLevel];
    if (lev == current) {
      tot++;
      added = false;
    }
    else {
      JreStrAppend(&ret, "$I$I", @",L:", current, @" * ", tot);
      tot = 1;
      current = lev;
      added = false;
    }
  }
  if (!added) {
    JreStrAppend(&ret, "$I$I", @",L:", lev, @" * ", tot);
  }
  return ret;
}

- (jdouble)getTotalPOW {
  jdouble ret = 0;
  JavaUtilArrayList *blocks = [self getAsList];
  for (OrgMinimaUtilsTestsCchainCChainBlock * __strong block in nil_chk(blocks)) {
    jint lev = [((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(block)) getFinalLevel];
    JrePlusAssignDoubleD(&ret, ((OrgMinimaUtilsTestsCchainCChainLevel *) nil_chk(IOSObjectArray_Get(nil_chk(block->mBlockLevels_), lev)))->mBlockDifficulty_);
  }
  return ret;
}

- (OrgMinimaUtilsTestsCchainCChain *)cascadeChain {
  OrgMinimaUtilsTestsCchainCChain *newChain = create_OrgMinimaUtilsTestsCchainCChain_init();
  return newChain;
}

- (void)dealloc {
  RELEASE_(mRoot_);
  RELEASE_(mCurrent_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsTestsCchainCChainBlock;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsTestsCchainCChainBlock;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 2, 1, -1, -1, -1, -1 },
    { NULL, "LJavaUtilArrayList;", 0x1, -1, -1, -1, 3, -1, -1 },
    { NULL, "[Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "D", 0x9, 4, 5, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "D", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsTestsCchainCChain;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(getRoot);
  methods[2].selector = @selector(getCurrent);
  methods[3].selector = @selector(addBlockWithOrgMinimaUtilsTestsCchainCChainBlock:);
  methods[4].selector = @selector(setCurrentWithOrgMinimaUtilsTestsCchainCChainBlock:);
  methods[5].selector = @selector(getAsList);
  methods[6].selector = @selector(getLevels);
  methods[7].selector = @selector(getSize);
  methods[8].selector = @selector(getMaxLevel);
  methods[9].selector = @selector(getTotalLevelDiffWithOrgMinimaUtilsTestsCchainCChainBlock:withInt:);
  methods[10].selector = @selector(toLevelChain);
  methods[11].selector = @selector(getTotalPOW);
  methods[12].selector = @selector(cascadeChain);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mRoot_", "LOrgMinimaUtilsTestsCchainCChainBlock;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mCurrent_", "LOrgMinimaUtilsTestsCchainCChainBlock;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "addBlock", "LOrgMinimaUtilsTestsCchainCChainBlock;", "setCurrent", "()Ljava/util/ArrayList<Lorg/minima/utils/tests/cchain/CChainBlock;>;", "getTotalLevelDiff", "LOrgMinimaUtilsTestsCchainCChainBlock;I" };
  static const J2ObjcClassInfo _OrgMinimaUtilsTestsCchainCChain = { "CChain", "org.minima.utils.tests.cchain", ptrTable, methods, fields, 7, 0x1, 13, 2, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsTestsCchainCChain;
}

@end

void OrgMinimaUtilsTestsCchainCChain_init(OrgMinimaUtilsTestsCchainCChain *self) {
  NSObject_init(self);
}

OrgMinimaUtilsTestsCchainCChain *new_OrgMinimaUtilsTestsCchainCChain_init() {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsTestsCchainCChain, init)
}

OrgMinimaUtilsTestsCchainCChain *create_OrgMinimaUtilsTestsCchainCChain_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsTestsCchainCChain, init)
}

jdouble OrgMinimaUtilsTestsCchainCChain_getTotalLevelDiffWithOrgMinimaUtilsTestsCchainCChainBlock_withInt_(OrgMinimaUtilsTestsCchainCChainBlock *zBlock, jint zLevel) {
  OrgMinimaUtilsTestsCchainCChain_initialize();
  jdouble diff = 0;
  OrgMinimaUtilsTestsCchainCChainBlock *parent = ((OrgMinimaUtilsTestsCchainCChainBlock *) nil_chk(zBlock))->mParent_;
  while (parent != nil) {
    jint plevel = [parent getFinalLevel];
    if (plevel < zLevel) {
      JrePlusAssignDoubleD(&diff, ((OrgMinimaUtilsTestsCchainCChainLevel *) nil_chk(IOSObjectArray_Get(nil_chk(parent->mBlockLevels_), plevel)))->mBlockDifficulty_);
    }
    else {
      break;
    }
    parent = parent->mParent_;
  }
  return diff + 1;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsTestsCchainCChain)