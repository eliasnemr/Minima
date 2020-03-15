//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/tests/cchain/CChainBlock.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaUtilsTestsCchainCChainBlock")
#ifdef RESTRICT_OrgMinimaUtilsTestsCchainCChainBlock
#define INCLUDE_ALL_OrgMinimaUtilsTestsCchainCChainBlock 0
#else
#define INCLUDE_ALL_OrgMinimaUtilsTestsCchainCChainBlock 1
#endif
#undef RESTRICT_OrgMinimaUtilsTestsCchainCChainBlock

#if !defined (OrgMinimaUtilsTestsCchainCChainBlock_) && (INCLUDE_ALL_OrgMinimaUtilsTestsCchainCChainBlock || defined(INCLUDE_OrgMinimaUtilsTestsCchainCChainBlock))
#define OrgMinimaUtilsTestsCchainCChainBlock_

@class IOSObjectArray;

@interface OrgMinimaUtilsTestsCchainCChainBlock : NSObject {
 @public
  jint mBaseBlockNumber_;
  jdouble mBasePrevBlockHash_;
  jdouble mBlockHash_;
  jint mMaxBlockLevel_;
  jint mCurrentBlockLevel_;
  IOSObjectArray *mBlockLevels_;
  jdouble mFinalWeight_;
  jdouble mFinalLevel_;
  OrgMinimaUtilsTestsCchainCChainBlock *mParent_;
  OrgMinimaUtilsTestsCchainCChainBlock *mChild_;
}

#pragma mark Public

- (instancetype)init;

- (jint)getFinalLevel;

- (NSString *)description;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsTestsCchainCChainBlock)

J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsCchainCChainBlock, mBlockLevels_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsCchainCChainBlock, mParent_, OrgMinimaUtilsTestsCchainCChainBlock *)
J2OBJC_FIELD_SETTER(OrgMinimaUtilsTestsCchainCChainBlock, mChild_, OrgMinimaUtilsTestsCchainCChainBlock *)

inline jint OrgMinimaUtilsTestsCchainCChainBlock_get_MAX_LEVELS(void);
#define OrgMinimaUtilsTestsCchainCChainBlock_MAX_LEVELS 2
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsTestsCchainCChainBlock, MAX_LEVELS, jint)

FOUNDATION_EXPORT void OrgMinimaUtilsTestsCchainCChainBlock_init(OrgMinimaUtilsTestsCchainCChainBlock *self);

FOUNDATION_EXPORT OrgMinimaUtilsTestsCchainCChainBlock *new_OrgMinimaUtilsTestsCchainCChainBlock_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsTestsCchainCChainBlock *create_OrgMinimaUtilsTestsCchainCChainBlock_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaUtilsTestsCchainCChainBlock)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaUtilsTestsCchainCChainBlock")