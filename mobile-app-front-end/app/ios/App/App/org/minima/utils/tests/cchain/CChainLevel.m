//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/tests/cchain/CChainLevel.java
//

#include "J2ObjC_source.h"
#include "org/minima/utils/tests/cchain/CChainLevel.h"

@implementation OrgMinimaUtilsTestsCchainCChainLevel

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsTestsCchainCChainLevel_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (NSString *)description {
  if (mBlockDifficulty_ != 0) {
    return JreStrcat("$I$I$D$D$D", @"N:", mBlockNumber_, @" L:", mBlockLevel_, @" D:", mBlockDifficulty_, @" ( < ", (1.0 / mBlockDifficulty_), @") P:", mPreviousBlock_);
  }
  else {
    return JreStrcat("$I$I$D$D", @"N:", mBlockNumber_, @" L:", mBlockLevel_, @" D:", mBlockDifficulty_, @" P:", mPreviousBlock_);
  }
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 0, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(description);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mBlockLevel_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mBlockNumber_", "I", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mPreviousBlock_", "D", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
    { "mBlockDifficulty_", "D", .constantValue.asLong = 0, 0x1, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "toString" };
  static const J2ObjcClassInfo _OrgMinimaUtilsTestsCchainCChainLevel = { "CChainLevel", "org.minima.utils.tests.cchain", ptrTable, methods, fields, 7, 0x1, 2, 4, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsTestsCchainCChainLevel;
}

@end

void OrgMinimaUtilsTestsCchainCChainLevel_init(OrgMinimaUtilsTestsCchainCChainLevel *self) {
  NSObject_init(self);
  self->mBlockDifficulty_ = 0;
}

OrgMinimaUtilsTestsCchainCChainLevel *new_OrgMinimaUtilsTestsCchainCChainLevel_init() {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsTestsCchainCChainLevel, init)
}

OrgMinimaUtilsTestsCchainCChainLevel *create_OrgMinimaUtilsTestsCchainCChainLevel_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsTestsCchainCChainLevel, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsTestsCchainCChainLevel)