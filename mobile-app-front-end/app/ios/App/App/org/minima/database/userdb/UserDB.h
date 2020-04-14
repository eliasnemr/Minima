//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/userdb/UserDB.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseUserdbUserDB")
#ifdef RESTRICT_OrgMinimaDatabaseUserdbUserDB
#define INCLUDE_ALL_OrgMinimaDatabaseUserdbUserDB 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseUserdbUserDB 1
#endif
#undef RESTRICT_OrgMinimaDatabaseUserdbUserDB

#if !defined (OrgMinimaDatabaseUserdbUserDB_) && (INCLUDE_ALL_OrgMinimaDatabaseUserdbUserDB || defined(INCLUDE_OrgMinimaDatabaseUserdbUserDB))
#define OrgMinimaDatabaseUserdbUserDB_

@class JavaUtilArrayList;
@class JavaUtilHashtable;
@class OrgMinimaObjectsAddress;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsProofsTokenProof;
@class OrgMinimaObjectsPubPrivKey;
@class OrgMinimaObjectsTransaction;
@class OrgMinimaObjectsTxPOW;
@protocol OrgMinimaDatabaseUserdbUserDBRow;

@protocol OrgMinimaDatabaseUserdbUserDB < JavaObject >

- (JavaUtilArrayList *)getKeys;

- (OrgMinimaObjectsPubPrivKey *)newPublicKeyWithInt:(jint)zBitLength OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsPubPrivKey *)getPubPrivKeyWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zPubKey;

- (JavaUtilArrayList *)getSimpleAddresses;

- (OrgMinimaObjectsAddress *)newSimpleAddress OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsAddress *)newSimpleAddressWithInt:(jint)zBitLength OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsAddress *)newSimpleAddressWithOrgMinimaObjectsPubPrivKey:(OrgMinimaObjectsPubPrivKey *)zPubPriv OBJC_METHOD_FAMILY_NONE;

- (jboolean)isSimpleAddressWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zAddress;

- (OrgMinimaObjectsBaseMiniData *)getPublicKeyWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zAddress;

- (JavaUtilArrayList *)getScriptAddresses;

- (OrgMinimaObjectsAddress *)newScriptAddressWithNSString:(NSString *)zScript OBJC_METHOD_FAMILY_NONE;

- (JavaUtilArrayList *)getAllAddresses;

- (NSString *)getScriptWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zAddress;

- (jboolean)isAddressRelevantWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zAddress;

- (jboolean)isTransactionRelevantWithOrgMinimaObjectsTransaction:(OrgMinimaObjectsTransaction *)zTrans;

- (JavaUtilArrayList *)getAllRows;

- (id<OrgMinimaDatabaseUserdbUserDBRow>)getUserRowWithInt:(jint)zID;

- (id<OrgMinimaDatabaseUserdbUserDBRow>)addUserRowWithInt:(jint)zID;

- (void)deleteUserRowWithInt:(jint)zID;

- (JavaUtilArrayList *)getAllKnownTokens;

- (OrgMinimaObjectsProofsTokenProof *)getTokenDetailWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zTokenID;

- (void)addTokenDetailsWithOrgMinimaObjectsProofsTokenProof:(OrgMinimaObjectsProofsTokenProof *)zToken;

- (JavaUtilArrayList *)getHistory;

- (void)addToHistoryWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW
                        withJavaUtilHashtable:(JavaUtilHashtable *)zValues;

- (void)clearHistory;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseUserdbUserDB)

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseUserdbUserDB)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseUserdbUserDB")
