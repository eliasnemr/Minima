//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/bretty/TreePrinter.java
//

#include "J2ObjC_source.h"
#include "java/lang/StringBuilder.h"
#include "java/util/List.h"
#include "org/minima/utils/bretty/PrintableTreeNode.h"
#include "org/minima/utils/bretty/TreeNodeConverter.h"
#include "org/minima/utils/bretty/TreePrinter.h"

@interface OrgMinimaUtilsBrettyTreePrinter ()

- (instancetype)init;

+ (void)processWithOrgMinimaUtilsBrettyPrintableTreeNode:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)current
                                            withNSString:(NSString *)prefix
                                             withBoolean:(jboolean)isRoot
                                             withBoolean:(jboolean)lastInPeers
                               withJavaLangStringBuilder:(JavaLangStringBuilder *)stringBuilder;

+ (void)processWithId:(id)current
withOrgMinimaUtilsBrettyTreeNodeConverter:(id<OrgMinimaUtilsBrettyTreeNodeConverter>)treeNodeConverter
         withNSString:(NSString *)prefix
          withBoolean:(jboolean)isRoot
          withBoolean:(jboolean)lastInPeers
withJavaLangStringBuilder:(JavaLangStringBuilder *)stringBuilder;

@end

__attribute__((unused)) static void OrgMinimaUtilsBrettyTreePrinter_init(OrgMinimaUtilsBrettyTreePrinter *self);

__attribute__((unused)) static OrgMinimaUtilsBrettyTreePrinter *new_OrgMinimaUtilsBrettyTreePrinter_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaUtilsBrettyTreePrinter *create_OrgMinimaUtilsBrettyTreePrinter_init(void);

__attribute__((unused)) static void OrgMinimaUtilsBrettyTreePrinter_processWithOrgMinimaUtilsBrettyPrintableTreeNode_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(id<OrgMinimaUtilsBrettyPrintableTreeNode> current, NSString *prefix, jboolean isRoot, jboolean lastInPeers, JavaLangStringBuilder *stringBuilder);

__attribute__((unused)) static void OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(id current, id<OrgMinimaUtilsBrettyTreeNodeConverter> treeNodeConverter, NSString *prefix, jboolean isRoot, jboolean lastInPeers, JavaLangStringBuilder *stringBuilder);

@interface OrgMinimaUtilsBrettyTreePrinter_1 : NSObject < OrgMinimaUtilsBrettyTreeNodeConverter >

- (instancetype)init;

- (NSString *)nameWithId:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)printableTreeNode;

- (id<JavaUtilList>)childrenWithId:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)printableTreeNode;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaUtilsBrettyTreePrinter_1)

__attribute__((unused)) static void OrgMinimaUtilsBrettyTreePrinter_1_init(OrgMinimaUtilsBrettyTreePrinter_1 *self);

__attribute__((unused)) static OrgMinimaUtilsBrettyTreePrinter_1 *new_OrgMinimaUtilsBrettyTreePrinter_1_init(void) NS_RETURNS_RETAINED;

__attribute__((unused)) static OrgMinimaUtilsBrettyTreePrinter_1 *create_OrgMinimaUtilsBrettyTreePrinter_1_init(void);

@implementation OrgMinimaUtilsBrettyTreePrinter

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsBrettyTreePrinter_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (void)processWithOrgMinimaUtilsBrettyPrintableTreeNode:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)current
                                            withNSString:(NSString *)prefix
                                             withBoolean:(jboolean)isRoot
                                             withBoolean:(jboolean)lastInPeers
                               withJavaLangStringBuilder:(JavaLangStringBuilder *)stringBuilder {
  OrgMinimaUtilsBrettyTreePrinter_processWithOrgMinimaUtilsBrettyPrintableTreeNode_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(current, prefix, isRoot, lastInPeers, stringBuilder);
}

+ (void)processWithId:(id)current
withOrgMinimaUtilsBrettyTreeNodeConverter:(id<OrgMinimaUtilsBrettyTreeNodeConverter>)treeNodeConverter
         withNSString:(NSString *)prefix
          withBoolean:(jboolean)isRoot
          withBoolean:(jboolean)lastInPeers
withJavaLangStringBuilder:(JavaLangStringBuilder *)stringBuilder {
  OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(current, treeNodeConverter, prefix, isRoot, lastInPeers, stringBuilder);
}

+ (NSString *)toStringWithOrgMinimaUtilsBrettyPrintableTreeNode:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)root {
  return OrgMinimaUtilsBrettyTreePrinter_toStringWithOrgMinimaUtilsBrettyPrintableTreeNode_(root);
}

+ (NSString *)toStringWithId:(id)root
withOrgMinimaUtilsBrettyTreeNodeConverter:(id<OrgMinimaUtilsBrettyTreeNodeConverter>)treeNodeConverter {
  return OrgMinimaUtilsBrettyTreePrinter_toStringWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_(root, treeNodeConverter);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x2, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0xa, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0xa, 0, 2, -1, 3, -1, -1 },
    { NULL, "LNSString;", 0x9, 4, 5, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x9, 4, 6, -1, 7, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(processWithOrgMinimaUtilsBrettyPrintableTreeNode:withNSString:withBoolean:withBoolean:withJavaLangStringBuilder:);
  methods[2].selector = @selector(processWithId:withOrgMinimaUtilsBrettyTreeNodeConverter:withNSString:withBoolean:withBoolean:withJavaLangStringBuilder:);
  methods[3].selector = @selector(toStringWithOrgMinimaUtilsBrettyPrintableTreeNode:);
  methods[4].selector = @selector(toStringWithId:withOrgMinimaUtilsBrettyTreeNodeConverter:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "process", "LOrgMinimaUtilsBrettyPrintableTreeNode;LNSString;ZZLJavaLangStringBuilder;", "LNSObject;LOrgMinimaUtilsBrettyTreeNodeConverter;LNSString;ZZLJavaLangStringBuilder;", "<T:Ljava/lang/Object;>(TT;Lorg/minima/utils/bretty/TreeNodeConverter<TT;>;Ljava/lang/String;ZZLjava/lang/StringBuilder;)V", "toString", "LOrgMinimaUtilsBrettyPrintableTreeNode;", "LNSObject;LOrgMinimaUtilsBrettyTreeNodeConverter;", "<T:Ljava/lang/Object;>(TT;Lorg/minima/utils/bretty/TreeNodeConverter<TT;>;)Ljava/lang/String;" };
  static const J2ObjcClassInfo _OrgMinimaUtilsBrettyTreePrinter = { "TreePrinter", "org.minima.utils.bretty", ptrTable, methods, NULL, 7, 0x1, 5, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsBrettyTreePrinter;
}

@end

void OrgMinimaUtilsBrettyTreePrinter_init(OrgMinimaUtilsBrettyTreePrinter *self) {
  NSObject_init(self);
}

OrgMinimaUtilsBrettyTreePrinter *new_OrgMinimaUtilsBrettyTreePrinter_init() {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsBrettyTreePrinter, init)
}

OrgMinimaUtilsBrettyTreePrinter *create_OrgMinimaUtilsBrettyTreePrinter_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsBrettyTreePrinter, init)
}

void OrgMinimaUtilsBrettyTreePrinter_processWithOrgMinimaUtilsBrettyPrintableTreeNode_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(id<OrgMinimaUtilsBrettyPrintableTreeNode> current, NSString *prefix, jboolean isRoot, jboolean lastInPeers, JavaLangStringBuilder *stringBuilder) {
  OrgMinimaUtilsBrettyTreePrinter_initialize();
  [((JavaLangStringBuilder *) nil_chk(stringBuilder)) appendWithNSString:prefix];
  if (!isRoot) {
    [stringBuilder appendWithNSString:(lastInPeers ? @"\u2514\u2500\u2500 " : @"\u251c\u2500\u2500 ")];
  }
  else {
    [stringBuilder appendWithNSString:@" \u2500\u2500 "];
  }
  [stringBuilder appendWithNSString:[((id<OrgMinimaUtilsBrettyPrintableTreeNode>) nil_chk(current)) name]];
  [stringBuilder appendWithChar:0x000a];
  id<JavaUtilList> children = [current children];
  NSString *indentation = isRoot ? @"    " : @"    ";
  for (jint i = 0; i < [((id<JavaUtilList>) nil_chk(children)) size] - 1; ++i) {
    OrgMinimaUtilsBrettyTreePrinter_processWithOrgMinimaUtilsBrettyPrintableTreeNode_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_([children getWithInt:i], JreStrcat("$$", prefix, (lastInPeers ? indentation : @"\u2502   ")), false, false, stringBuilder);
  }
  if ([children size] > 0) {
    OrgMinimaUtilsBrettyTreePrinter_processWithOrgMinimaUtilsBrettyPrintableTreeNode_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_([children getWithInt:[children size] - 1], JreStrcat("$$", prefix, (lastInPeers ? indentation : @"\u2502   ")), false, true, stringBuilder);
  }
}

void OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(id current, id<OrgMinimaUtilsBrettyTreeNodeConverter> treeNodeConverter, NSString *prefix, jboolean isRoot, jboolean lastInPeers, JavaLangStringBuilder *stringBuilder) {
  OrgMinimaUtilsBrettyTreePrinter_initialize();
  [((JavaLangStringBuilder *) nil_chk(stringBuilder)) appendWithNSString:prefix];
  if (!isRoot) {
    [stringBuilder appendWithNSString:(lastInPeers ? @"\u2514\u2500\u2500 " : @"\u251c\u2500\u2500 ")];
  }
  else {
    [stringBuilder appendWithNSString:@" \u2500\u2500 "];
  }
  [stringBuilder appendWithNSString:[((id<OrgMinimaUtilsBrettyTreeNodeConverter>) nil_chk(treeNodeConverter)) nameWithId:current]];
  [stringBuilder appendWithChar:0x000a];
  id<JavaUtilList> children = [treeNodeConverter childrenWithId:current];
  NSString *indentation = isRoot ? @"    " : @"    ";
  for (jint i = 0; i < [((id<JavaUtilList>) nil_chk(children)) size] - 1; ++i) {
    OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_([children getWithInt:i], treeNodeConverter, JreStrcat("$$", prefix, (lastInPeers ? indentation : @"\u2502   ")), false, false, stringBuilder);
  }
  if ([children size] > 0) {
    OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_([children getWithInt:[children size] - 1], treeNodeConverter, JreStrcat("$$", prefix, (lastInPeers ? indentation : @"\u2502   ")), false, true, stringBuilder);
  }
}

NSString *OrgMinimaUtilsBrettyTreePrinter_toStringWithOrgMinimaUtilsBrettyPrintableTreeNode_(id<OrgMinimaUtilsBrettyPrintableTreeNode> root) {
  OrgMinimaUtilsBrettyTreePrinter_initialize();
  JavaLangStringBuilder *stringBuilder = create_JavaLangStringBuilder_init();
  id<OrgMinimaUtilsBrettyTreeNodeConverter> converter = create_OrgMinimaUtilsBrettyTreePrinter_1_init();
  OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(root, converter, @"", true, true, stringBuilder);
  return [stringBuilder description];
}

NSString *OrgMinimaUtilsBrettyTreePrinter_toStringWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_(id root, id<OrgMinimaUtilsBrettyTreeNodeConverter> treeNodeConverter) {
  OrgMinimaUtilsBrettyTreePrinter_initialize();
  JavaLangStringBuilder *stringBuilder = create_JavaLangStringBuilder_init();
  OrgMinimaUtilsBrettyTreePrinter_processWithId_withOrgMinimaUtilsBrettyTreeNodeConverter_withNSString_withBoolean_withBoolean_withJavaLangStringBuilder_(root, treeNodeConverter, @"", true, true, stringBuilder);
  return [stringBuilder description];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsBrettyTreePrinter)

@implementation OrgMinimaUtilsBrettyTreePrinter_1

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsBrettyTreePrinter_1_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (NSString *)nameWithId:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)printableTreeNode {
  return [((id<OrgMinimaUtilsBrettyPrintableTreeNode>) nil_chk(printableTreeNode)) name];
}

- (id<JavaUtilList>)childrenWithId:(id<OrgMinimaUtilsBrettyPrintableTreeNode>)printableTreeNode {
  return [((id<OrgMinimaUtilsBrettyPrintableTreeNode>) nil_chk(printableTreeNode)) children];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x0, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "LJavaUtilList;", 0x1, 2, 1, -1, 3, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(nameWithId:);
  methods[2].selector = @selector(childrenWithId:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "name", "LOrgMinimaUtilsBrettyPrintableTreeNode;", "children", "(Lorg/minima/utils/bretty/PrintableTreeNode;)Ljava/util/List<+Lorg/minima/utils/bretty/PrintableTreeNode;>;", "LOrgMinimaUtilsBrettyTreePrinter;", "toStringWithOrgMinimaUtilsBrettyPrintableTreeNode:", "Ljava/lang/Object;Lorg/minima/utils/bretty/TreeNodeConverter<Lorg/minima/utils/bretty/PrintableTreeNode;>;" };
  static const J2ObjcClassInfo _OrgMinimaUtilsBrettyTreePrinter_1 = { "", "org.minima.utils.bretty", ptrTable, methods, NULL, 7, 0x8018, 3, 0, 4, -1, 5, 6, -1 };
  return &_OrgMinimaUtilsBrettyTreePrinter_1;
}

@end

void OrgMinimaUtilsBrettyTreePrinter_1_init(OrgMinimaUtilsBrettyTreePrinter_1 *self) {
  NSObject_init(self);
}

OrgMinimaUtilsBrettyTreePrinter_1 *new_OrgMinimaUtilsBrettyTreePrinter_1_init() {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsBrettyTreePrinter_1, init)
}

OrgMinimaUtilsBrettyTreePrinter_1 *create_OrgMinimaUtilsBrettyTreePrinter_1_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsBrettyTreePrinter_1, init)
}