//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/MinimaLogger.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaUtilsMinimaLogger")
#ifdef RESTRICT_OrgMinimaUtilsMinimaLogger
#define INCLUDE_ALL_OrgMinimaUtilsMinimaLogger 0
#else
#define INCLUDE_ALL_OrgMinimaUtilsMinimaLogger 1
#endif
#undef RESTRICT_OrgMinimaUtilsMinimaLogger

#if !defined (OrgMinimaUtilsMinimaLogger_) && (INCLUDE_ALL_OrgMinimaUtilsMinimaLogger || defined(INCLUDE_OrgMinimaUtilsMinimaLogger))
#define OrgMinimaUtilsMinimaLogger_

@interface OrgMinimaUtilsMinimaLogger : NSObject

#pragma mark Public

- (instancetype)init;

+ (void)logWithNSString:(NSString *)zLog;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsMinimaLogger)

inline jboolean OrgMinimaUtilsMinimaLogger_get_LOGGING_ON(void);
inline jboolean OrgMinimaUtilsMinimaLogger_set_LOGGING_ON(jboolean value);
inline jboolean *OrgMinimaUtilsMinimaLogger_getRef_LOGGING_ON(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT jboolean OrgMinimaUtilsMinimaLogger_LOGGING_ON;
J2OBJC_STATIC_FIELD_PRIMITIVE(OrgMinimaUtilsMinimaLogger, LOGGING_ON, jboolean)

inline jint OrgMinimaUtilsMinimaLogger_get_LOG_ERROR(void);
#define OrgMinimaUtilsMinimaLogger_LOG_ERROR 0
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsMinimaLogger, LOG_ERROR, jint)

inline jint OrgMinimaUtilsMinimaLogger_get_LOG_INFO(void);
#define OrgMinimaUtilsMinimaLogger_LOG_INFO 1
J2OBJC_STATIC_FIELD_CONSTANT(OrgMinimaUtilsMinimaLogger, LOG_INFO, jint)

FOUNDATION_EXPORT void OrgMinimaUtilsMinimaLogger_init(OrgMinimaUtilsMinimaLogger *self);

FOUNDATION_EXPORT OrgMinimaUtilsMinimaLogger *new_OrgMinimaUtilsMinimaLogger_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsMinimaLogger *create_OrgMinimaUtilsMinimaLogger_init(void);

FOUNDATION_EXPORT void OrgMinimaUtilsMinimaLogger_logWithNSString_(NSString *zLog);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaUtilsMinimaLogger)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaUtilsMinimaLogger")