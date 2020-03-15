//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/json/JSONObject.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaUtilsJsonJSONObject")
#ifdef RESTRICT_OrgMinimaUtilsJsonJSONObject
#define INCLUDE_ALL_OrgMinimaUtilsJsonJSONObject 0
#else
#define INCLUDE_ALL_OrgMinimaUtilsJsonJSONObject 1
#endif
#undef RESTRICT_OrgMinimaUtilsJsonJSONObject

#if !defined (OrgMinimaUtilsJsonJSONObject_) && (INCLUDE_ALL_OrgMinimaUtilsJsonJSONObject || defined(INCLUDE_OrgMinimaUtilsJsonJSONObject))
#define OrgMinimaUtilsJsonJSONObject_

#define RESTRICT_JavaUtilLinkedHashMap 1
#define INCLUDE_JavaUtilLinkedHashMap 1
#include "java/util/LinkedHashMap.h"

#define RESTRICT_OrgMinimaUtilsJsonJSONAware 1
#define INCLUDE_OrgMinimaUtilsJsonJSONAware 1
#include "org/minima/utils/json/JSONAware.h"

#define RESTRICT_OrgMinimaUtilsJsonJSONStreamAware 1
#define INCLUDE_OrgMinimaUtilsJsonJSONStreamAware 1
#include "org/minima/utils/json/JSONStreamAware.h"

@class JavaIoWriter;
@protocol JavaUtilMap;

@interface OrgMinimaUtilsJsonJSONObject : JavaUtilLinkedHashMap < OrgMinimaUtilsJsonJSONAware, OrgMinimaUtilsJsonJSONStreamAware >

#pragma mark Public

- (instancetype)init;

- (instancetype)initWithJavaUtilMap:(id<JavaUtilMap>)map;

+ (NSString *)escapeWithNSString:(NSString *)s;

- (NSString *)toJSONString;

+ (NSString *)toJSONStringWithJavaUtilMap:(id<JavaUtilMap>)map;

- (NSString *)description;

+ (NSString *)toStringWithNSString:(NSString *)key
                            withId:(id)value;

+ (void)writeJSONStringWithJavaUtilMap:(id<JavaUtilMap>)map
                      withJavaIoWriter:(JavaIoWriter *)outArg;

- (void)writeJSONStringWithJavaIoWriter:(JavaIoWriter *)outArg;

// Disallowed inherited constructors, do not use.

- (instancetype)initWithInt:(jint)arg0 NS_UNAVAILABLE;

- (instancetype)initWithInt:(jint)arg0
                  withFloat:(jfloat)arg1 NS_UNAVAILABLE;

- (instancetype)initWithInt:(jint)arg0
                  withFloat:(jfloat)arg1
                withBoolean:(jboolean)arg2 NS_UNAVAILABLE;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsJsonJSONObject)

FOUNDATION_EXPORT void OrgMinimaUtilsJsonJSONObject_init(OrgMinimaUtilsJsonJSONObject *self);

FOUNDATION_EXPORT OrgMinimaUtilsJsonJSONObject *new_OrgMinimaUtilsJsonJSONObject_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonJSONObject *create_OrgMinimaUtilsJsonJSONObject_init(void);

FOUNDATION_EXPORT void OrgMinimaUtilsJsonJSONObject_initWithJavaUtilMap_(OrgMinimaUtilsJsonJSONObject *self, id<JavaUtilMap> map);

FOUNDATION_EXPORT OrgMinimaUtilsJsonJSONObject *new_OrgMinimaUtilsJsonJSONObject_initWithJavaUtilMap_(id<JavaUtilMap> map) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonJSONObject *create_OrgMinimaUtilsJsonJSONObject_initWithJavaUtilMap_(id<JavaUtilMap> map);

FOUNDATION_EXPORT void OrgMinimaUtilsJsonJSONObject_writeJSONStringWithJavaUtilMap_withJavaIoWriter_(id<JavaUtilMap> map, JavaIoWriter *outArg);

FOUNDATION_EXPORT NSString *OrgMinimaUtilsJsonJSONObject_toJSONStringWithJavaUtilMap_(id<JavaUtilMap> map);

FOUNDATION_EXPORT NSString *OrgMinimaUtilsJsonJSONObject_toStringWithNSString_withId_(NSString *key, id value);

FOUNDATION_EXPORT NSString *OrgMinimaUtilsJsonJSONObject_escapeWithNSString_(NSString *s);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaUtilsJsonJSONObject)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaUtilsJsonJSONObject")