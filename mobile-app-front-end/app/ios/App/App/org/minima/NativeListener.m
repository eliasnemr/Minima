//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/NativeListener.java
//

#include "J2ObjC_source.h"
#include "org/minima/NativeListener.h"

@interface OrgMinimaNativeListener : NSObject

@end

@implementation OrgMinimaNativeListener

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, "V", 0x401, 0, 1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(processMessageWithOrgMinimaUtilsMessagesMessage:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "processMessage", "LOrgMinimaUtilsMessagesMessage;" };
  static const J2ObjcClassInfo _OrgMinimaNativeListener = { "NativeListener", "org.minima", ptrTable, methods, NULL, 7, 0x609, 1, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaNativeListener;
}

@end

J2OBJC_INTERFACE_TYPE_LITERAL_SOURCE(OrgMinimaNativeListener)