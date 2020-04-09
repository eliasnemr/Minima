//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/mmr/MMRData.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaDatabaseMmrMMRData")
#ifdef RESTRICT_OrgMinimaDatabaseMmrMMRData
#define INCLUDE_ALL_OrgMinimaDatabaseMmrMMRData 0
#else
#define INCLUDE_ALL_OrgMinimaDatabaseMmrMMRData 1
#endif
#undef RESTRICT_OrgMinimaDatabaseMmrMMRData

#if !defined (OrgMinimaDatabaseMmrMMRData_) && (INCLUDE_ALL_OrgMinimaDatabaseMmrMMRData || defined(INCLUDE_OrgMinimaDatabaseMmrMMRData))
#define OrgMinimaDatabaseMmrMMRData_

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class JavaUtilArrayList;
@class OrgMinimaObjectsBaseMiniByte;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsBaseMiniNumber;
@class OrgMinimaObjectsCoin;
@class OrgMinimaUtilsJsonJSONObject;

@interface OrgMinimaDatabaseMmrMMRData : NSObject < OrgMinimaUtilsStreamable > {
 @public
  OrgMinimaObjectsBaseMiniByte *mSpent_;
  OrgMinimaObjectsCoin *mCoin_;
  OrgMinimaObjectsBaseMiniNumber *mBlockNumber_;
  JavaUtilArrayList *mPrevState_;
  OrgMinimaObjectsBaseMiniData *mFinalHash_;
  OrgMinimaObjectsBaseMiniNumber *mValueSum_;
  jboolean mHashOnly_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaObjectsBaseMiniByte:(OrgMinimaObjectsBaseMiniByte *)zSpent
                            withOrgMinimaObjectsCoin:(OrgMinimaObjectsCoin *)zCoin
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zInBlock
                               withJavaUtilArrayList:(JavaUtilArrayList *)zState;

- (instancetype)initWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zData
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zValueSum;

- (OrgMinimaObjectsCoin *)getCoin;

- (OrgMinimaObjectsBaseMiniData *)getFinalHash;

- (OrgMinimaObjectsBaseMiniNumber *)getInBlock;

- (JavaUtilArrayList *)getPrevState;

- (OrgMinimaObjectsBaseMiniNumber *)getValueSum;

- (jboolean)isHashOnly;

- (jboolean)isSpent;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

+ (OrgMinimaDatabaseMmrMMRData *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (OrgMinimaUtilsJsonJSONObject *)toJSON;

- (NSString *)description;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaDatabaseMmrMMRData)

J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mSpent_, OrgMinimaObjectsBaseMiniByte *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mCoin_, OrgMinimaObjectsCoin *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mBlockNumber_, OrgMinimaObjectsBaseMiniNumber *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mPrevState_, JavaUtilArrayList *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mFinalHash_, OrgMinimaObjectsBaseMiniData *)
J2OBJC_FIELD_SETTER(OrgMinimaDatabaseMmrMMRData, mValueSum_, OrgMinimaObjectsBaseMiniNumber *)

FOUNDATION_EXPORT void OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_(OrgMinimaDatabaseMmrMMRData *self, OrgMinimaObjectsBaseMiniData *zData, OrgMinimaObjectsBaseMiniNumber *zValueSum);

FOUNDATION_EXPORT OrgMinimaDatabaseMmrMMRData *new_OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_(OrgMinimaObjectsBaseMiniData *zData, OrgMinimaObjectsBaseMiniNumber *zValueSum) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseMmrMMRData *create_OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_(OrgMinimaObjectsBaseMiniData *zData, OrgMinimaObjectsBaseMiniNumber *zValueSum);

FOUNDATION_EXPORT void OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniByte_withOrgMinimaObjectsCoin_withOrgMinimaObjectsBaseMiniNumber_withJavaUtilArrayList_(OrgMinimaDatabaseMmrMMRData *self, OrgMinimaObjectsBaseMiniByte *zSpent, OrgMinimaObjectsCoin *zCoin, OrgMinimaObjectsBaseMiniNumber *zInBlock, JavaUtilArrayList *zState);

FOUNDATION_EXPORT OrgMinimaDatabaseMmrMMRData *new_OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniByte_withOrgMinimaObjectsCoin_withOrgMinimaObjectsBaseMiniNumber_withJavaUtilArrayList_(OrgMinimaObjectsBaseMiniByte *zSpent, OrgMinimaObjectsCoin *zCoin, OrgMinimaObjectsBaseMiniNumber *zInBlock, JavaUtilArrayList *zState) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaDatabaseMmrMMRData *create_OrgMinimaDatabaseMmrMMRData_initWithOrgMinimaObjectsBaseMiniByte_withOrgMinimaObjectsCoin_withOrgMinimaObjectsBaseMiniNumber_withJavaUtilArrayList_(OrgMinimaObjectsBaseMiniByte *zSpent, OrgMinimaObjectsCoin *zCoin, OrgMinimaObjectsBaseMiniNumber *zInBlock, JavaUtilArrayList *zState);

FOUNDATION_EXPORT OrgMinimaDatabaseMmrMMRData *OrgMinimaDatabaseMmrMMRData_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaDatabaseMmrMMRData)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaDatabaseMmrMMRData")
