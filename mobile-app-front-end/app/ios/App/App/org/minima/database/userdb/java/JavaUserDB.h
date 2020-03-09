//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/userdb/java/JavaUserDB.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseUserdbJavaJavaUserDB")
#ifdef RESTRICT_OrgMinimaDatabaseUserdbJavaJavaUserDB
#define INCLUDE_ALL_OrgMinimaDatabaseUserdbJavaJavaUserDB 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseUserdbJavaJavaUserDB 1
#endif
#undef RESTRICT_OrgMinimaDatabaseUserdbJavaJavaUserDB

#if !defined (OrgMinimaDatabaseUserdbJavaJavaUserDB_) && (INCLUDE_ALL_OrgMinimaDatabaseUserdbJavaJavaUserDB || defined(INCLUDE_OrgMinimaDatabaseUserdbJavaJavaUserDB))
#define OrgMinimaDatabaseUserdbJavaJavaUserDB_

#define RESTRICT_OrgMinimaDatabaseUserdbUserDB 1
#define INCLUDE_OrgMinimaDatabaseUserdbUserDB 1
#include "org/minima/database/userdb/UserDB.h"

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class JavaUtilArrayList;
@class OrgMinimaObjectsAddress;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsBaseMiniHash;
@class OrgMinimaObjectsBaseMiniNumber;
@class OrgMinimaObjectsPubPrivKey;
@class OrgMinimaObjectsTokenDetails;
@class OrgMinimaObjectsTransaction;
@class OrgMinimaObjectsTxPOW;
@protocol OrgMinimaDatabaseUserdbUserDBRow;

@interface OrgMinimaDatabaseUserdbJavaJavaUserDB : NSObject < OrgMinimaDatabaseUserdbUserDB, OrgMinimaUtilsStreamable > {
 @public
  JavaUtilArrayList *mPubPrivKeys_;
  JavaUtilArrayList *mAddresses_;
  JavaUtilArrayList *mScriptAddresses_;
  jint mCounter_;
  JavaUtilArrayList *mRows_;
  JavaUtilArrayList *mTotalAddresses_;
  JavaUtilArrayList *mAllTokens_;
  JavaUtilArrayList *mHistory_;
}

#pragma mark Public

- (instancetype)init;

- (void)addToHistoryWithOrgMinimaObjectsTxPOW:(OrgMinimaObjectsTxPOW *)zTxPOW
           withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zValue;

- (void)addTokenDetailsWithOrgMinimaObjectsTokenDetails:(OrgMinimaObjectsTokenDetails *)zToken;

- (id<OrgMinimaDatabaseUserdbUserDBRow>)addUserRowWithInt:(jint)zID;

- (void)clearHistory;

- (void)deleteUserRowWithInt:(jint)zID;

- (JavaUtilArrayList *)getAllAddresses;

- (JavaUtilArrayList *)getAllKnownTokens;

- (JavaUtilArrayList *)getAllRows;

- (JavaUtilArrayList *)getHistory;

- (JavaUtilArrayList *)getKeys;

- (OrgMinimaObjectsBaseMiniData *)getPublicKeyWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress;

- (OrgMinimaObjectsPubPrivKey *)getPubPrivKeyWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zPubKey;

- (NSString *)getScriptWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress;

- (JavaUtilArrayList *)getScriptAddresses;

- (JavaUtilArrayList *)getSimpleAddresses;

- (OrgMinimaObjectsTokenDetails *)getTokenDetailWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zTokenID;

- (id<OrgMinimaDatabaseUserdbUserDBRow>)getUserRowWithInt:(jint)zID;

- (jboolean)isAddressRelevantWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress;

- (jboolean)isSimpleAddressWithOrgMinimaObjectsBaseMiniHash:(OrgMinimaObjectsBaseMiniHash *)zAddress;

- (jboolean)isTransactionRelevantWithOrgMinimaObjectsTransaction:(OrgMinimaObjectsTransaction *)zTrans;

- (OrgMinimaObjectsPubPrivKey *)newPublicKey OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsAddress *)newScriptAddressWithNSString:(NSString *)zScript OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsAddress *)newSimpleAddress OBJC_METHOD_FAMILY_NONE;

- (OrgMinimaObjectsAddress *)newSimpleAddressWithOrgMinimaObjectsPubPrivKey:(OrgMinimaObjectsPubPrivKey *)zPubPriv OBJC_METHOD_FAMILY_NONE;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseUserdbJavaJavaUserDB)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mPubPrivKeys_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mAddresses_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mScriptAddresses_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mRows_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mTotalAddresses_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mAllTokens_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseUserdbJavaJavaUserDB, mHistory_, JavaUtilArrayList *)

FOUNDATION_EXPORT void OrgMinimaDatabaseUserdbJavaJavaUserDB_init(OrgMinimaDatabaseUserdbJavaJavaUserDB *self);

FOUNDATION_EXPORT OrgMinimaDatabaseUserdbJavaJavaUserDB *new_OrgMinimaDatabaseUserdbJavaJavaUserDB_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseUserdbJavaJavaUserDB *create_OrgMinimaDatabaseUserdbJavaJavaUserDB_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseUserdbJavaJavaUserDB)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseUserdbJavaJavaUserDB")
