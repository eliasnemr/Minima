//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/backup/SyncPackage.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaSystemBackupSyncPackage")
#ifdef RESTRICT_OrgMinimaSystemBackupSyncPackage
#define INCLUDE_ALL_OrgMinimaSystemBackupSyncPackage 0
#else
#define INCLUDE_ALL_OrgMinimaSystemBackupSyncPackage 1
#endif
#undef RESTRICT_OrgMinimaSystemBackupSyncPackage

#if !defined (OrgMinimaSystemBackupSyncPackage_) && (INCLUDE_ALL_OrgMinimaSystemBackupSyncPackage || defined(INCLUDE_OrgMinimaSystemBackupSyncPackage))
#define OrgMinimaSystemBackupSyncPackage_

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class JavaUtilArrayList;
@class OrgMinimaObjectsBaseMiniNumber;

@interface OrgMinimaSystemBackupSyncPackage : NSObject < OrgMinimaUtilsStreamable > {
 @public
  OrgMinimaObjectsBaseMiniNumber *mCascadeNode_;
  JavaUtilArrayList *mNodes_;
}

#pragma mark Public

- (instancetype)init;

- (JavaUtilArrayList *)getAllNodes;

- (OrgMinimaObjectsBaseMiniNumber *)getCascadeNode;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (void)setCascadeNodeWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zNumber;

- (NSString *)description;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaSystemBackupSyncPackage)

J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupSyncPackage, mCascadeNode_, OrgMinimaObjectsBaseMiniNumber *)
J2OBJC_FIELD_SETTER(OrgMinimaSystemBackupSyncPackage, mNodes_, JavaUtilArrayList *)

FOUNDATION_EXPORT void OrgMinimaSystemBackupSyncPackage_init(OrgMinimaSystemBackupSyncPackage *self);

FOUNDATION_EXPORT OrgMinimaSystemBackupSyncPackage *new_OrgMinimaSystemBackupSyncPackage_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaSystemBackupSyncPackage *create_OrgMinimaSystemBackupSyncPackage_init(void);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaSystemBackupSyncPackage)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaSystemBackupSyncPackage")
