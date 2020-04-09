//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/txpowtree/SimpleBlockTreePrinter.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter")
#ifdef RESTRICT_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter 1
#endif
#undef RESTRICT_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter

#if !defined (OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_) && (INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter || defined(INCLUDE_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter))
#define OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_

@class OrgMinimaDatabaseTxpowtreeBlockTree;
@class OrgMinimaObjectsBaseMiniData;

@interface OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter : NSObject {
 @public
  OrgMinimaDatabaseTxpowtreeBlockTree *mTree_;
  jlong mCascadeNode_;
  OrgMinimaObjectsBaseMiniData *mTipID_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaDatabaseTxpowtreeBlockTree:(OrgMinimaDatabaseTxpowtreeBlockTree *)zTree;

+ (void)clearScreen;

- (NSString *)printtree;

// Disallowed inherited constructors, do not use.

- (instancetype)init NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter, mTree_, OrgMinimaDatabaseTxpowtreeBlockTree *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter, mTipID_, OrgMinimaObjectsBaseMiniData *)

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter *self, OrgMinimaDatabaseTxpowtreeBlockTree *zTree);

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter *new_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeBlockTree *zTree) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter *create_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_initWithOrgMinimaDatabaseTxpowtreeBlockTree_(OrgMinimaDatabaseTxpowtreeBlockTree *zTree);

FOUNDATION_EXPORT void OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter_clearScreen(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseTxpowtreeSimpleBlockTreePrinter")
