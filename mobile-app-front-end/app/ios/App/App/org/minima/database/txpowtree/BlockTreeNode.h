//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/txpowtree/BlockTreeNode.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeBlockTreeNode")
#ifdef RESTRICT_OrgMinimaDatabaseTxpowtreeBlockTreeNode
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeBlockTreeNode 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeBlockTreeNode 1
#endif
#undef RESTRICT_OrgMinimaDatabaseTxpowtreeBlockTreeNode

#if !defined (OrgMinimaDatabaseTxpowtreeBlockTreeNode_) && (INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeBlockTreeNode || defined(INCLUDE_OrgMinimaDatabaseTxpowtreeBlockTreeNode))
#define OrgMinimaDatabaseTxpowtreeBlockTreeNode_

#define RESTRICT_JavaLangComparable 1
#define INCLUDE_JavaLangComparable 1
#include "java/lang/Comparable.h"

@class JavaMathBigInteger;
@class JavaUtilArrayList;
@class OrgMinimaDatabaseMmrMMRSet;
@class OrgMinimaObjectsBaseMiniHash;
@class OrgMinimaObjectsTxPOW;

@interface OrgMinimaDatabaseTxpowtreeBlockTreeNode : NSObject < JavaLangComparable > {
 @public
  OrgMinimaDatabaseMmrMMRSet *mMMRSet_;
}

#pragma mark Public

- (instancetype)init;

- (instancetype)initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zNode;

- (instancetype)initWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPow;

- (void)addChildWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zChild;

- (void)addToTotalWeightWithJavaMathBigInteger:(JavaMathBigInteger *)zTotal;

- (jint)compareToWithId:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)o;

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)getChildWithInt:(jint)zChild;

- (JavaUtilArrayList *)getChildren;

- (jint)getCurrentLevel;

- (OrgMinimaDatabaseMmrMMRSet *)getMMRSet;

- (jint)getNumberChildren;

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)getParent;

- (jint)getState;

- (jint)getSuperBlockLevel;

- (JavaMathBigInteger *)getTotalWeight;

- (OrgMinimaObjectsTxPOW *)getTxPow;

- (OrgMinimaObjectsBaseMiniHash *)getTxPowID;

- (JavaMathBigInteger *)getWeight;

- (jboolean)isCascade;

- (void)resetCurrentWeight;

- (void)resetNode;

- (void)setCascadeWithBoolean:(jboolean)zCascade;

- (void)setCurrentLevelWithInt:(jint)zLevel;

- (void)setMMRsetWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zMMRSet;

- (void)setParentWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zParent;

- (void)setStateWithInt:(jint)zState;

- (NSString *)description;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseTxpowtreeBlockTreeNode)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeBlockTreeNode, mMMRSet_, OrgMinimaDatabaseMmrMMRSet *)

inline jint OrgMinimaDatabaseTxpowtreeBlockTreeNode_get_BLOCKSTATE_BASIC(void);
#define OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_BASIC 10
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaDatabaseTxpowtreeBlockTreeNode, BLOCKSTATE_BASIC, jint)

inline jint OrgMinimaDatabaseTxpowtreeBlockTreeNode_get_BLOCKSTATE_VALID(void);
#define OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_VALID 11
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaDatabaseTxpowtreeBlockTreeNode, BLOCKSTATE_VALID, jint)

inline jint OrgMinimaDatabaseTxpowtreeBlockTreeNode_get_BLOCKSTATE_INVALID(void);
#define OrgMinimaDatabaseTxpowtreeBlockTreeNode_BLOCKSTATE_INVALID 12
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaDatabaseTxpowtreeBlockTreeNode, BLOCKSTATE_INVALID, jint)

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeBlockTreeNode_init(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self);

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_init(void);

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaObjectsTxPOW *zTxPow);

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPow) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaObjectsTxPOW_(OrgMinimaObjectsTxPOW *zTxPow);

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *self, OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode);

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *new_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeBlockTreeNode *create_OrgMinimaDatabaseTxpowtreeBlockTreeNode_initWithOrgMinimaDatabaseTxpowtreeBlockTreeNode_(OrgMinimaDatabaseTxpowtreeBlockTreeNode *zNode);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseTxpowtreeBlockTreeNode)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeBlockTreeNode")