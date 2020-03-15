//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/json/ItemList.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaUtilsJsonItemList")
#ifdef RESTRICT_OrgMinimaUtilsJsonItemList
#define INCLUDE_ALL_OrgMinimaUtilsJsonItemList 0
#else
#define INCLUDE_ALL_OrgMinimaUtilsJsonItemList 1
#endif
#undef RESTRICT_OrgMinimaUtilsJsonItemList

#if !defined (OrgMinimaUtilsJsonItemList_) && (INCLUDE_ALL_OrgMinimaUtilsJsonItemList || defined(INCLUDE_OrgMinimaUtilsJsonItemList))
#define OrgMinimaUtilsJsonItemList_

@class IOSObjectArray;
@protocol JavaUtilList;

@interface OrgMinimaUtilsJsonItemList : NSObject {
 @public
  id<JavaUtilList> items_;
}

#pragma mark Public

- (instancetype)init;

- (instancetype)initWithNSString:(NSString *)s;

- (instancetype)initWithNSString:(NSString *)s
                    withNSString:(NSString *)sp;

- (instancetype)initWithNSString:(NSString *)s
                    withNSString:(NSString *)sp
                     withBoolean:(jboolean)isMultiToken;

- (void)addWithInt:(jint)i
      withNSString:(NSString *)item;

- (void)addWithNSString:(NSString *)item;

- (void)addAllWithOrgMinimaUtilsJsonItemList:(OrgMinimaUtilsJsonItemList *)list;

- (void)addAllWithNSString:(NSString *)s;

- (void)addAllWithNSString:(NSString *)s
              withNSString:(NSString *)sp;

- (void)addAllWithNSString:(NSString *)s
              withNSString:(NSString *)sp
               withBoolean:(jboolean)isMultiToken;

- (void)clear;

- (NSString *)getWithInt:(jint)i;

- (IOSObjectArray *)getArray;

- (id<JavaUtilList>)getItems;

- (void)reset;

- (void)setSPWithNSString:(NSString *)sp;

- (jint)size;

- (void)splitWithNSString:(NSString *)s
             withNSString:(NSString *)sp
         withJavaUtilList:(id<JavaUtilList>)append;

- (void)splitWithNSString:(NSString *)s
             withNSString:(NSString *)sp
         withJavaUtilList:(id<JavaUtilList>)append
              withBoolean:(jboolean)isMultiToken;

- (NSString *)description;

- (NSString *)toStringWithNSString:(NSString *)sp;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsJsonItemList)

J2OBJC_FIELD_SETTER(OrgMinimaUtilsJsonItemList, items_, id<JavaUtilList>)

FOUNDATION_EXPORT void OrgMinimaUtilsJsonItemList_init(OrgMinimaUtilsJsonItemList *self);

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *new_OrgMinimaUtilsJsonItemList_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *create_OrgMinimaUtilsJsonItemList_init(void);

FOUNDATION_EXPORT void OrgMinimaUtilsJsonItemList_initWithNSString_(OrgMinimaUtilsJsonItemList *self, NSString *s);

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *new_OrgMinimaUtilsJsonItemList_initWithNSString_(NSString *s) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *create_OrgMinimaUtilsJsonItemList_initWithNSString_(NSString *s);

FOUNDATION_EXPORT void OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_(OrgMinimaUtilsJsonItemList *self, NSString *s, NSString *sp);

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *new_OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_(NSString *s, NSString *sp) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *create_OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_(NSString *s, NSString *sp);

FOUNDATION_EXPORT void OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_withBoolean_(OrgMinimaUtilsJsonItemList *self, NSString *s, NSString *sp, jboolean isMultiToken);

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *new_OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_withBoolean_(NSString *s, NSString *sp, jboolean isMultiToken) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsJsonItemList *create_OrgMinimaUtilsJsonItemList_initWithNSString_withNSString_withBoolean_(NSString *s, NSString *sp, jboolean isMultiToken);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaUtilsJsonItemList)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaUtilsJsonItemList")