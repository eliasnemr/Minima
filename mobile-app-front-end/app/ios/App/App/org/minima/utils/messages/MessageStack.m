//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/utils/messages/MessageStack.java
//

#include "J2ObjC_source.h"
#include "java/util/LinkedList.h"
#include "org/minima/utils/messages/Message.h"
#include "org/minima/utils/messages/MessageStack.h"

@interface OrgMinimaUtilsMessagesMessageStack () {
 @public
  JavaUtilLinkedList *mMessages_;
}

@end

J2OBJC_FIELD_SETTER(OrgMinimaUtilsMessagesMessageStack, mMessages_, JavaUtilLinkedList *)

@implementation OrgMinimaUtilsMessagesMessageStack

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaUtilsMessagesMessageStack_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)PostMessageWithNSString:(NSString *)zMessage {
  [self PostMessageWithOrgMinimaUtilsMessagesMessage:create_OrgMinimaUtilsMessagesMessage_initWithNSString_(zMessage)];
}

- (void)PostMessageWithOrgMinimaUtilsMessagesMessage:(OrgMinimaUtilsMessagesMessage *)zMessage {
  @synchronized(self) {
    [((JavaUtilLinkedList *) nil_chk(mMessages_)) addWithId:zMessage];
  }
}

- (OrgMinimaUtilsMessagesMessage *)getNextMessage {
  @synchronized(self) {
    if (![((JavaUtilLinkedList *) nil_chk(mMessages_)) isEmpty]) {
      OrgMinimaUtilsMessagesMessage *msg = [((JavaUtilLinkedList *) nil_chk(mMessages_)) getFirst];
      [((JavaUtilLinkedList *) nil_chk(mMessages_)) removeWithId:msg];
      return JreRetainedLocalValue(msg);
    }
    return JreRetainedLocalValue(nil);
  }
}

- (jint)getSize {
  @synchronized(self) {
    return [((JavaUtilLinkedList *) nil_chk(mMessages_)) size];
  }
}

- (void)dealloc {
  RELEASE_(mMessages_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, -1, -1, -1, -1 },
    { NULL, "V", 0x21, 0, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaUtilsMessagesMessage;", 0x24, -1, -1, -1, -1, -1, -1 },
    { NULL, "I", 0x24, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(PostMessageWithNSString:);
  methods[2].selector = @selector(PostMessageWithOrgMinimaUtilsMessagesMessage:);
  methods[3].selector = @selector(getNextMessage);
  methods[4].selector = @selector(getSize);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mMessages_", "LJavaUtilLinkedList;", .constantValue.asLong = 0, 0x2, -1, -1, 3, -1 },
  };
  static const void *ptrTable[] = { "PostMessage", "LNSString;", "LOrgMinimaUtilsMessagesMessage;", "Ljava/util/LinkedList<Lorg/minima/utils/messages/Message;>;" };
  static const J2ObjcClassInfo _OrgMinimaUtilsMessagesMessageStack = { "MessageStack", "org.minima.utils.messages", ptrTable, methods, fields, 7, 0x1, 5, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaUtilsMessagesMessageStack;
}

@end

void OrgMinimaUtilsMessagesMessageStack_init(OrgMinimaUtilsMessagesMessageStack *self) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mMessages_, new_JavaUtilLinkedList_init());
}

OrgMinimaUtilsMessagesMessageStack *new_OrgMinimaUtilsMessagesMessageStack_init() {
  J2OBJC_NEW_IMPL(OrgMinimaUtilsMessagesMessageStack, init)
}

OrgMinimaUtilsMessagesMessageStack *create_OrgMinimaUtilsMessagesMessageStack_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaUtilsMessagesMessageStack, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaUtilsMessagesMessageStack)