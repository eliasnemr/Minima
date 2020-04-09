//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/MinimaDB.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseMinimaDB")
#ifdef RESTRICT_OrgMinimaDatabaseMinimaDB
#define INCLUDE_ALL_OrgMinimaDatabaseMinimaDB 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseMinimaDB 1
#endif
#undef RESTRICT_OrgMinimaDatabaseMinimaDB

#if !defined (OrgMinimaDatabaseMinimaDB_) && (INCLUDE_ALL_OrgMinimaDatabaseMinimaDB || defined(INCLUDE_OrgMinimaDatabaseMinimaDB))
#define OrgMinimaDatabaseMinimaDB_

@class JavaUtilArrayList;
@class JavaUtilHashtable;
@class OrgMinimaDatabaseMmrMMRSet;
@class OrgMinimaDatabaseTxpowtreeBlockTree;
@class OrgMinimaDatabaseTxpowtreeBlockTreeNode;
@class OrgMinimaDatabaseUserdbJavaJavaUserDB;
@class OrgMinimaObjectsAddress;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsBaseMiniNumber;
@class OrgMinimaObjectsProofsTokenProof;
@class OrgMinimaObjectsTransaction;
@class OrgMinimaObjectsTxPOW;
@class OrgMinimaObjectsWitness;
@class OrgMinimaSystemBackupBackupManager;
@class OrgMinimaUtilsJsonJSONArray;
@class OrgMinimaUtilsMessagesMessage;
@protocol OrgMinimaDatabaseCoindbCoinDB;
@protocol OrgMinimaDatabaseTxpowdbTxPOWDBRow;
@protocol OrgMinimaDatabaseTxpowdbTxPowDB;
@protocol OrgMinimaDatabaseUserdbUserDB;

@interface OrgMinimaDatabaseMinimaDB : NSObject {
 @public
  OrgMinimaSystemBackupBackupManager *mBackup_;
}

#pragma mark Public

- (instancetype)init;

- (id<OrgMinimaDatabaseTxpowdbTxPOWDBRow>)addNewTxPowWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW;

- (OrgMinimaUtilsMessagesMessage *)createTransactionWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zAmount
                                                           withOrgMinimaObjectsAddress:(OrgMinimaObjectsAddress *)zToAddress
                                                           withOrgMinimaObjectsAddress:(OrgMinimaObjectsAddress *)zChangeAddress
                                                                 withJavaUtilArrayList:(JavaUtilArrayList *)zConfirmed
                                                      withOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTokenID
                                                      withOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zChangeTokenID
                                                  withOrgMinimaObjectsProofsTokenProof:(OrgMinimaObjectsProofsTokenProof *)zTokenGen;

- (OrgMinimaObjectsWitness *)createValidMMRPRoofsWithOrgMinimaObjectsTransaction:(OrgMinimaObjectsTransaction *)zTransaction
                                                     withOrgMinimaObjectsWitness:(OrgMinimaObjectsWitness *)zWitness;

- (void)DoGenesis;

- (OrgMinimaSystemBackupBackupManager *)getBackup;

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)getBlockTreeNodeWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTxPowID;

- (id<OrgMinimaDatabaseCoindbCoinDB>)getCoinDB;

- (OrgMinimaObjectsTxPOW *)getCurrentTxPowWithOrgMinimaObjectsTransaction:(OrgMinimaObjectsTransaction *)zTrans
                                              withOrgMinimaObjectsWitness:(OrgMinimaObjectsWitness *)zWitness
                                          withOrgMinimaUtilsJsonJSONArray:(OrgMinimaUtilsJsonJSONArray *)zContractLogs;

- (jint)getIntroSyncSize;

- (OrgMinimaDatabaseTxpowtreeBlockTree *)getMainTree;

- (JavaUtilArrayList *)getMempoolCoins;

- (OrgMinimaObjectsBaseMiniNumber *)getTopBlock;

- (JavaUtilArrayList *)getTotalSimpleSpendableCoinsWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTokenID;

- (JavaUtilHashtable *)getTotalUnusedAmount;

- (JavaUtilHashtable *)getTransactionTokenAmountsWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW;

- (OrgMinimaObjectsTxPOW *)getTxPOWWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTxPOWID;

- (id<OrgMinimaDatabaseTxpowdbTxPowDB>)getTxPowDB;

- (id<OrgMinimaDatabaseTxpowdbTxPOWDBRow>)getTxPOWRowWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTxPOWID;

- (id<OrgMinimaDatabaseUserdbUserDB>)getUserDB;

- (OrgMinimaDatabaseTxpowtreeBlockTreeNode *)hardAddTxPOWBlockWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zRoot
                                                         withOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zMMR
                                                                            withBoolean:(jboolean)zCascade;

- (void)hardResetChain;

- (void)hardSetCascadeNodeWithOrgMinimaDatabaseTxpowtreeBlockTreeNode:(OrgMinimaDatabaseTxpowtreeBlockTreeNode *)zNode;

- (jboolean)isChainRoot;

- (jboolean)isTxPOWFoundWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTxPOWID;

- (void)processTxPOWWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPow;

- (void)scanMMRSetForCoinsWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zMMRSet
                                             withBoolean:(jboolean)zAddKeeper;

- (void)setBackupManagerWithOrgMinimaSystemBackupBackupManager:(OrgMinimaSystemBackupBackupManager *)zBackup;

- (void)setUserDBWithOrgMinimaDatabaseUserdbJavaJavaUserDB:(OrgMinimaDatabaseUserdbJavaJavaUserDB *)zJDB;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseMinimaDB)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMinimaDB, mBackup_, OrgMinimaSystemBackupBackupManager *)

FOUNDATION_EXPORT void OrgMinimaDatabaseMinimaDB_init(OrgMinimaDatabaseMinimaDB *self);

FOUNDATION_EXPORT OrgMinimaDatabaseMinimaDB *new_OrgMinimaDatabaseMinimaDB_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseMinimaDB *create_OrgMinimaDatabaseMinimaDB_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseMinimaDB)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseMinimaDB")
