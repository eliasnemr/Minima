//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/proofs/TokenProof.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaObjectsProofsTokenProof")
#ifdef RESTRICT_OrgMinimaObjectsProofsTokenProof
#define INCLUDE_ALL_OrgMinimaObjectsProofsTokenProof 0
#else
#define INCLUDE_ALL_OrgMinimaObjectsProofsTokenProof 1
#endif
#undef RESTRICT_OrgMinimaObjectsProofsTokenProof

#if !defined (OrgMinimaObjectsProofsTokenProof_) && (INCLUDE_ALL_OrgMinimaObjectsProofsTokenProof || defined(INCLUDE_OrgMinimaObjectsProofsTokenProof))
#define OrgMinimaObjectsProofsTokenProof_

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class OrgMinimaObjectsBaseMiniData;
@class OrgMinimaObjectsBaseMiniNumber;
@class OrgMinimaObjectsBaseMiniScript;
@class OrgMinimaUtilsJsonJSONObject;

@interface OrgMinimaObjectsProofsTokenProof : NSObject < OrgMinimaUtilsStreamable > {
 @public
  OrgMinimaObjectsBaseMiniData *mCoinID_;
  OrgMinimaObjectsBaseMiniNumber *mTokenScale_;
  OrgMinimaObjectsBaseMiniNumber *mTokenTotalAmount_;
  OrgMinimaObjectsBaseMiniScript *mTokenName_;
  OrgMinimaObjectsBaseMiniScript *mTokenScript_;
  OrgMinimaObjectsBaseMiniData *mTokenID_;
}

#pragma mark Public

- (instancetype)initWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zCoindID
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zScale
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zAmount
                  withOrgMinimaObjectsBaseMiniScript:(OrgMinimaObjectsBaseMiniScript *)zName;

- (instancetype)initWithOrgMinimaObjectsBaseMiniData:(OrgMinimaObjectsBaseMiniData *)zCoindID
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zScale
                  withOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zAmount
                  withOrgMinimaObjectsBaseMiniScript:(OrgMinimaObjectsBaseMiniScript *)zName
                  withOrgMinimaObjectsBaseMiniScript:(OrgMinimaObjectsBaseMiniScript *)zTokenScript;

- (OrgMinimaObjectsBaseMiniNumber *)getAmount;

- (OrgMinimaObjectsBaseMiniData *)getCoinID;

- (OrgMinimaObjectsBaseMiniScript *)getName;

- (OrgMinimaObjectsBaseMiniNumber *)getScale;

- (OrgMinimaObjectsBaseMiniNumber *)getScaleFactor;

- (OrgMinimaObjectsBaseMiniData *)getTokenID;

- (OrgMinimaObjectsBaseMiniScript *)getTokenScript;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

+ (OrgMinimaObjectsProofsTokenProof *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (OrgMinimaUtilsJsonJSONObject *)toJSON;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaObjectsProofsTokenProof)

J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mCoinID_, OrgMinimaObjectsBaseMiniData *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mTokenScale_, OrgMinimaObjectsBaseMiniNumber *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mTokenTotalAmount_, OrgMinimaObjectsBaseMiniNumber *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mTokenName_, OrgMinimaObjectsBaseMiniScript *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mTokenScript_, OrgMinimaObjectsBaseMiniScript *)
J2OBJC_FIELD_SETTER(OrgMinimaObjectsProofsTokenProof, mTokenID_, OrgMinimaObjectsBaseMiniData *)

FOUNDATION_EXPORT void OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsProofsTokenProof *self, OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName);

FOUNDATION_EXPORT OrgMinimaObjectsProofsTokenProof *new_OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsProofsTokenProof *create_OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName);

FOUNDATION_EXPORT void OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsProofsTokenProof *self, OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName, OrgMinimaObjectsBaseMiniScript *zTokenScript);

FOUNDATION_EXPORT OrgMinimaObjectsProofsTokenProof *new_OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName, OrgMinimaObjectsBaseMiniScript *zTokenScript) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsProofsTokenProof *create_OrgMinimaObjectsProofsTokenProof_initWithOrgMinimaObjectsBaseMiniData_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniNumber_withOrgMinimaObjectsBaseMiniScript_withOrgMinimaObjectsBaseMiniScript_(OrgMinimaObjectsBaseMiniData *zCoindID, OrgMinimaObjectsBaseMiniNumber *zScale, OrgMinimaObjectsBaseMiniNumber *zAmount, OrgMinimaObjectsBaseMiniScript *zName, OrgMinimaObjectsBaseMiniScript *zTokenScript);

FOUNDATION_EXPORT OrgMinimaObjectsProofsTokenProof *OrgMinimaObjectsProofsTokenProof_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaObjectsProofsTokenProof)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaObjectsProofsTokenProof")
