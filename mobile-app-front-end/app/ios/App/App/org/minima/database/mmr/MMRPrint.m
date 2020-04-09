//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/database/mmr/MMRPrint.java
//

#include "J2ObjC_source.h"
#include "java/io/PrintStream.h"
#include "java/lang/System.h"
#include "java/util/ArrayList.h"
#include "java/util/Collections.h"
#include "org/minima/database/mmr/MMRData.h"
#include "org/minima/database/mmr/MMREntry.h"
#include "org/minima/database/mmr/MMRPrint.h"
#include "org/minima/database/mmr/MMRSet.h"
#include "org/minima/objects/base/MiniNumber.h"

@interface OrgMinimaDatabaseMmrMMRPrint ()

+ (void)PrintSetWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zSet;

@end

__attribute__((unused)) static void OrgMinimaDatabaseMmrMMRPrint_PrintSetWithOrgMinimaDatabaseMmrMMRSet_(OrgMinimaDatabaseMmrMMRSet *zSet);

@implementation OrgMinimaDatabaseMmrMMRPrint

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaDatabaseMmrMMRPrint_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (void)PrintWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zSet {
  OrgMinimaDatabaseMmrMMRPrint_PrintWithOrgMinimaDatabaseMmrMMRSet_(zSet);
}

+ (void)PrintWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zSet
                                withBoolean:(jboolean)zComplete {
  OrgMinimaDatabaseMmrMMRPrint_PrintWithOrgMinimaDatabaseMmrMMRSet_withBoolean_(zSet, zComplete);
}

+ (void)PrintSetWithOrgMinimaDatabaseMmrMMRSet:(OrgMinimaDatabaseMmrMMRSet *)zSet {
  OrgMinimaDatabaseMmrMMRPrint_PrintSetWithOrgMinimaDatabaseMmrMMRSet_(zSet);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 0, 2, -1, -1, -1, -1 },
    { NULL, "V", 0xa, 3, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(PrintWithOrgMinimaDatabaseMmrMMRSet:);
  methods[2].selector = @selector(PrintWithOrgMinimaDatabaseMmrMMRSet:withBoolean:);
  methods[3].selector = @selector(PrintSetWithOrgMinimaDatabaseMmrMMRSet:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "Print", "LOrgMinimaDatabaseMmrMMRSet;", "LOrgMinimaDatabaseMmrMMRSet;Z", "PrintSet" };
  static const J2ObjcClassInfo _OrgMinimaDatabaseMmrMMRPrint = { "MMRPrint", "org.minima.database.mmr", ptrTable, methods, NULL, 7, 0x1, 4, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaDatabaseMmrMMRPrint;
}

@end

void OrgMinimaDatabaseMmrMMRPrint_init(OrgMinimaDatabaseMmrMMRPrint *self) {
  NSObject_init(self);
}

OrgMinimaDatabaseMmrMMRPrint *new_OrgMinimaDatabaseMmrMMRPrint_init() {
  J2OBJC_NEW_IMPL(OrgMinimaDatabaseMmrMMRPrint, init)
}

OrgMinimaDatabaseMmrMMRPrint *create_OrgMinimaDatabaseMmrMMRPrint_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaDatabaseMmrMMRPrint, init)
}

void OrgMinimaDatabaseMmrMMRPrint_PrintWithOrgMinimaDatabaseMmrMMRSet_(OrgMinimaDatabaseMmrMMRSet *zSet) {
  OrgMinimaDatabaseMmrMMRPrint_initialize();
  OrgMinimaDatabaseMmrMMRPrint_PrintWithOrgMinimaDatabaseMmrMMRSet_withBoolean_(zSet, true);
}

void OrgMinimaDatabaseMmrMMRPrint_PrintWithOrgMinimaDatabaseMmrMMRSet_withBoolean_(OrgMinimaDatabaseMmrMMRSet *zSet, jboolean zComplete) {
  OrgMinimaDatabaseMmrMMRPrint_initialize();
  if (!zComplete) {
    OrgMinimaDatabaseMmrMMRPrint_PrintSetWithOrgMinimaDatabaseMmrMMRSet_(zSet);
    return;
  }
  OrgMinimaDatabaseMmrMMRSet *current = zSet;
  while (current != nil) {
    OrgMinimaDatabaseMmrMMRPrint_PrintSetWithOrgMinimaDatabaseMmrMMRSet_(current);
    current = [current getParent];
  }
}

void OrgMinimaDatabaseMmrMMRPrint_PrintSetWithOrgMinimaDatabaseMmrMMRSet_(OrgMinimaDatabaseMmrMMRSet *zSet) {
  OrgMinimaDatabaseMmrMMRPrint_initialize();
  OrgMinimaDatabaseMmrMMRSet *current = zSet;
  [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:JreStrcat("$@$@", @"BLK:", [((OrgMinimaDatabaseMmrMMRSet *) nil_chk(current)) getBlockTime], @" KEEPER:", [current getKeepers])];
  [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:JreStrcat("$@", @"Root  : ", [current getMMRRoot])];
  [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:JreStrcat("$@", @"Peaks : ", [current getMMRPeaks])];
  jint max = [current getMaxRow];
  for (jint i = max; i >= 0; i--) {
    JavaUtilArrayList *entries = [current getRowWithInt:i];
    JavaUtilCollections_sortWithJavaUtilList_(entries);
    for (OrgMinimaDatabaseMmrMMREntry * __strong entry_ in nil_chk(entries)) {
      [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithId:entry_];
    }
  }
  [((JavaIoPrintStream *) nil_chk(JreLoadStatic(JavaLangSystem, out))) printlnWithNSString:@""];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaDatabaseMmrMMRPrint)
