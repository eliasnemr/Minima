//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/objects/base/MiniInteger.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaObjectsBaseMiniInteger")
#ifdef RESTRICT_OrgMinimaObjectsBaseMiniInteger
#define INCLUDE_ALL_OrgMinimaObjectsBaseMiniInteger 0
#else
#define INCLUDE_ALL_OrgMinimaObjectsBaseMiniInteger 1
#endif
#undef RESTRICT_OrgMinimaObjectsBaseMiniInteger

#if !defined (OrgMinimaObjectsBaseMiniInteger_) && (INCLUDE_ALL_OrgMinimaObjectsBaseMiniInteger || defined(INCLUDE_OrgMinimaObjectsBaseMiniInteger))
#define OrgMinimaObjectsBaseMiniInteger_

#define RESTRICT_OrgMinimaUtilsStreamable 1
#define INCLUDE_OrgMinimaUtilsStreamable 1
#include "org/minima/utils/Streamable.h"

@class JavaIoDataInputStream;
@class JavaIoDataOutputStream;
@class JavaMathBigInteger;

@interface OrgMinimaObjectsBaseMiniInteger : NSObject < OrgMinimaUtilsStreamable >

#pragma mark Public

- (instancetype)initWithJavaMathBigInteger:(JavaMathBigInteger *)zNumber;

- (instancetype)initWithInt:(jint)zNumber;

- (OrgMinimaObjectsBaseMiniInteger *)addWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (OrgMinimaObjectsBaseMiniInteger *)divRoundDownWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (JavaMathBigInteger *)getNumber;

- (OrgMinimaObjectsBaseMiniInteger *)increment;

- (jboolean)isEqualWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (jboolean)isLessWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (OrgMinimaObjectsBaseMiniInteger *)moduloWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (OrgMinimaObjectsBaseMiniInteger *)multWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (void)readDataStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

+ (OrgMinimaObjectsBaseMiniInteger *)ReadFromStreamWithJavaIoDataInputStream:(JavaIoDataInputStream *)zIn;

- (OrgMinimaObjectsBaseMiniInteger *)subWithOrgMinimaObjectsBaseMiniInteger:(OrgMinimaObjectsBaseMiniInteger *)zNumber;

- (NSString *)description;

- (void)writeDataStreamWithJavaIoDataOutputStream:(JavaIoDataOutputStream *)zOut;

@end

J2OBJC_STATIC_INIT(OrgMinimaObjectsBaseMiniInteger)

inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_get_ZERO(void);
inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_set_ZERO(OrgMinimaObjectsBaseMiniInteger *value);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_ZERO;
J2OBJC_STATIC_FIELD_OBJ(OrgMinimaObjectsBaseMiniInteger, ZERO, OrgMinimaObjectsBaseMiniInteger *)

inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_get_ONE(void);
inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_set_ONE(OrgMinimaObjectsBaseMiniInteger *value);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_ONE;
J2OBJC_STATIC_FIELD_OBJ(OrgMinimaObjectsBaseMiniInteger, ONE, OrgMinimaObjectsBaseMiniInteger *)

inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_get_TWO(void);
inline OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_set_TWO(OrgMinimaObjectsBaseMiniInteger *value);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_TWO;
J2OBJC_STATIC_FIELD_OBJ(OrgMinimaObjectsBaseMiniInteger, TWO, OrgMinimaObjectsBaseMiniInteger *)

FOUNDATION_EXPORT void OrgMinimaObjectsBaseMiniInteger_initWithJavaMathBigInteger_(OrgMinimaObjectsBaseMiniInteger *self, JavaMathBigInteger *zNumber);

FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *new_OrgMinimaObjectsBaseMiniInteger_initWithJavaMathBigInteger_(JavaMathBigInteger *zNumber) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *create_OrgMinimaObjectsBaseMiniInteger_initWithJavaMathBigInteger_(JavaMathBigInteger *zNumber);

FOUNDATION_EXPORT void OrgMinimaObjectsBaseMiniInteger_initWithInt_(OrgMinimaObjectsBaseMiniInteger *self, jint zNumber);

FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *new_OrgMinimaObjectsBaseMiniInteger_initWithInt_(jint zNumber) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *create_OrgMinimaObjectsBaseMiniInteger_initWithInt_(jint zNumber);

FOUNDATION_EXPORT OrgMinimaObjectsBaseMiniInteger *OrgMinimaObjectsBaseMiniInteger_ReadFromStreamWithJavaIoDataInputStream_(JavaIoDataInputStream *zIn);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaObjectsBaseMiniInteger)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaObjectsBaseMiniInteger")
