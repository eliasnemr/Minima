//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/tests/cascader/CascadingChain.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaUtilsTestsCascaderCascadingChain")
#ifdef RESTRICT_OrgMinimaUtilsTestsCascaderCascadingChain
#define INCLUDE_ALL_OrgMinimaUtilsTestsCascaderCascadingChain 0
#else
#define INCLUDE_ALL_OrgMinimaUtilsTestsCascaderCascadingChain 1
#endif
#undef RESTRICT_OrgMinimaUtilsTestsCascaderCascadingChain

#if !defined (OrgMinimaUtilsTestsCascaderCascadingChain_) && (INCLUDE_ALL_OrgMinimaUtilsTestsCascaderCascadingChain || defined(INCLUDE_OrgMinimaUtilsTestsCascaderCascadingChain))
#define OrgMinimaUtilsTestsCascaderCascadingChain_

@class IOSObjectArray;
@class JavaUtilArrayList;

@interface OrgMinimaUtilsTestsCascaderCascadingChain : NSObject

#pragma mark Public

- (instancetype)init;

+ (JavaUtilArrayList *)getBlocksWithJavaUtilArrayList:(JavaUtilArrayList *)zAllBlocks
                                              withInt:(jint)zLevel
                                              withInt:(jint)zStart
                                              withInt:(jint)zEnd;

+ (void)mainWithNSStringArray:(IOSObjectArray *)zArgs;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsTestsCascaderCascadingChain)

inline jint OrgMinimaUtilsTestsCascaderCascadingChain_get_NUMBER_BLOCKS(void);
inline jint OrgMinimaUtilsTestsCascaderCascadingChain_set_NUMBER_BLOCKS(jint value);
inline jint *OrgMinimaUtilsTestsCascaderCascadingChain_getRef_NUMBER_BLOCKS(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT jint OrgMinimaUtilsTestsCascaderCascadingChain_NUMBER_BLOCKS;
J2OBJC_STATIC_FIELD_PRIMITIVE(OrgMinimaUtilsTestsCascaderCascadingChain, NUMBER_BLOCKS, jint)

inline jint OrgMinimaUtilsTestsCascaderCascadingChain_get_NUMBER_SIMULATIONS(void);
inline jint OrgMinimaUtilsTestsCascaderCascadingChain_set_NUMBER_SIMULATIONS(jint value);
inline jint *OrgMinimaUtilsTestsCascaderCascadingChain_getRef_NUMBER_SIMULATIONS(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT jint OrgMinimaUtilsTestsCascaderCascadingChain_NUMBER_SIMULATIONS;
J2OBJC_STATIC_FIELD_PRIMITIVE(OrgMinimaUtilsTestsCascaderCascadingChain, NUMBER_SIMULATIONS, jint)

inline jint OrgMinimaUtilsTestsCascaderCascadingChain_get_MAX_BLOCK_LEVEL(void);
inline jint OrgMinimaUtilsTestsCascaderCascadingChain_set_MAX_BLOCK_LEVEL(jint value);
inline jint *OrgMinimaUtilsTestsCascaderCascadingChain_getRef_MAX_BLOCK_LEVEL(void);
/*! INTERNAL ONLY - Use accessor function from above. */
FOUNDATION_EXPORT jint OrgMinimaUtilsTestsCascaderCascadingChain_MAX_BLOCK_LEVEL;
J2OBJC_STATIC_FIELD_PRIMITIVE(OrgMinimaUtilsTestsCascaderCascadingChain, MAX_BLOCK_LEVEL, jint)

FOUNDATION_EXPORT void OrgMinimaUtilsTestsCascaderCascadingChain_init(OrgMinimaUtilsTestsCascaderCascadingChain *self);

FOUNDATION_EXPORT OrgMinimaUtilsTestsCascaderCascadingChain *new_OrgMinimaUtilsTestsCascaderCascadingChain_init(void) NS_RETURNS_RETAINED;

FOUNDATION_EXPORT OrgMinimaUtilsTestsCascaderCascadingChain *create_OrgMinimaUtilsTestsCascaderCascadingChain_init(void);

FOUNDATION_EXPORT void OrgMinimaUtilsTestsCascaderCascadingChain_mainWithNSStringArray_(IOSObjectArray *zArgs);

FOUNDATION_EXPORT JavaUtilArrayList *OrgMinimaUtilsTestsCascaderCascadingChain_getBlocksWithJavaUtilArrayList_withInt_withInt_withInt_(JavaUtilArrayList *zAllBlocks, jint zLevel, jint zStart, jint zEnd);

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaUtilsTestsCascaderCascadingChain)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaUtilsTestsCascaderCascadingChain")