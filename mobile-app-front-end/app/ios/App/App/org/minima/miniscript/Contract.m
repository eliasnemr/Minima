//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/Contract.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "java/lang/Boolean.h"
#include "java/lang/Exception.h"
#include "java/util/ArrayList.h"
#include "java/util/Enumeration.h"
#include "java/util/Hashtable.h"
#include "java/util/List.h"
#include "java/util/StringTokenizer.h"
#include "org/minima/miniscript/Contract.h"
#include "org/minima/miniscript/exceptions/ExecutionException.h"
#include "org/minima/miniscript/exceptions/MinimaParseException.h"
#include "org/minima/miniscript/functions/MinimaFunction.h"
#include "org/minima/miniscript/statements/StatementBlock.h"
#include "org/minima/miniscript/statements/StatementParser.h"
#include "org/minima/miniscript/tokens/Token.h"
#include "org/minima/miniscript/values/BooleanValue.h"
#include "org/minima/miniscript/values/HEXValue.h"
#include "org/minima/miniscript/values/NumberValue.h"
#include "org/minima/miniscript/values/ScriptValue.h"
#include "org/minima/miniscript/values/Value.h"
#include "org/minima/objects/StateVariable.h"
#include "org/minima/objects/Transaction.h"
#include "org/minima/objects/base/MiniData.h"
#include "org/minima/objects/base/MiniNumber.h"
#include "org/minima/objects/base/MiniString.h"
#include "org/minima/utils/MinimaLogger.h"

@interface OrgMinimaMiniscriptContract () {
 @public
  jboolean mSuccess_;
  jboolean mSuccessSet_;
}

@end

@implementation OrgMinimaMiniscriptContract

- (instancetype)initWithNSString:(NSString *)zRamScript
                    withNSString:(NSString *)zSigs
 withOrgMinimaObjectsTransaction:(OrgMinimaObjectsTransaction *)zTransaction
                     withBoolean:(jboolean)zTraceON {
  OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(self, zRamScript, zSigs, zTransaction, zTraceON);
  return self;
}

- (void)setGlobalVariableWithNSString:(NSString *)zGlobal
   withOrgMinimaMiniscriptValuesValue:(OrgMinimaMiniscriptValuesValue *)zValue {
  [((JavaUtilHashtable *) nil_chk(mGlobals_)) putWithId:zGlobal withId:zValue];
  [self traceLogWithNSString:JreStrcat("$$$@", @"Global [", zGlobal, @"] : ", zValue)];
}

- (void)setPrevStateWithJavaUtilArrayList:(JavaUtilArrayList *)zPrevState {
  JreStrongAssign(&mPrevState_, zPrevState);
}

- (OrgMinimaMiniscriptValuesValue *)getPrevStateWithOrgMinimaObjectsBaseMiniNumber:(OrgMinimaObjectsBaseMiniNumber *)zPrev {
  for (OrgMinimaObjectsStateVariable * __strong sv in nil_chk(mPrevState_)) {
    if ([((OrgMinimaObjectsBaseMiniNumber *) nil_chk([((OrgMinimaObjectsStateVariable *) nil_chk(sv)) getPort])) isEqualWithOrgMinimaObjectsBaseMiniNumber:zPrev]) {
      NSString *stateval = OrgMinimaMiniscriptContract_cleanScriptWithNSString_([((OrgMinimaObjectsBaseMiniString *) nil_chk([sv getData])) description]);
      return OrgMinimaMiniscriptValuesValue_getValueWithNSString_(stateval);
    }
  }
  return nil;
}

- (jboolean)isParseOK {
  return mParseOK_;
}

- (jboolean)isTrace {
  return mTraceON_;
}

- (void)traceLogWithNSString:(NSString *)zLog {
  if ([self isTrace]) {
    OrgMinimaUtilsMinimaLogger_logWithNSString_(JreStrcat("$I$$", @"INST[", mNumInstructions_, @"] - ", zLog));
  }
  JreStrAppendStrong(&mCompleteLog_, "$C", zLog, 0x000a);
}

- (NSString *)getCompleteTraceLog {
  return mCompleteLog_;
}

- (void)countInstructions {
  mNumInstructions_++;
  if (mNumInstructions_ > OrgMinimaMiniscriptContract_MAX_INSTRUCTIONS) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$I", @"MAX instruction number reached! ", mNumInstructions_));
  }
}

- (void)run {
  if (!mParseOK_) {
    [self traceLogWithNSString:@"Script parse FAILED. Please fix and retry."];
    return;
  }
  @try {
    [self traceLogWithNSString:@"Start executing the contract"];
    [((OrgMinimaMiniscriptStatementsStatementBlock *) nil_chk(mBlock_)) runWithOrgMinimaMiniscriptContract:self];
  }
  @catch (JavaLangException *e) {
    [e printStackTrace];
    [self traceLogWithNSString:JreStrcat("$@", @"Execution Error - ", e)];
    mSuccess_ = false;
    mSuccessSet_ = true;
  }
  [self traceLogWithNSString:JreStrcat("$I", @"Contract instructions : ", mNumInstructions_)];
  [self traceLogWithNSString:JreStrcat("$Z", @"Contract finished     : ", mSuccess_)];
}

- (void)setRETURNValueWithBoolean:(jboolean)zSUCCESS {
  if (!mSuccessSet_) {
    mSuccess_ = zSUCCESS;
    mSuccessSet_ = true;
  }
}

- (jboolean)isSuccess {
  return mSuccess_;
}

- (jboolean)isSuccessSet {
  return mSuccessSet_;
}

- (NSString *)getRamScript {
  return mRamScript_;
}

- (OrgMinimaObjectsTransaction *)getTransaction {
  return mTransaction_;
}

- (OrgMinimaMiniscriptValuesValue *)getVariableWithNSString:(NSString *)zName {
  OrgMinimaMiniscriptValuesValue *ret = [((JavaUtilHashtable *) nil_chk(mVariables_)) getWithId:zName];
  if (ret == nil) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$$", @"Variable not found - ", zName));
  }
  return ret;
}

- (void)setVariableWithNSString:(NSString *)zName
withOrgMinimaMiniscriptValuesValue:(OrgMinimaMiniscriptValuesValue *)zValue {
  [((JavaUtilHashtable *) nil_chk(mVariables_)) putWithId:zName withId:zValue];
  NSString *varlist = @"{ ";
  id<JavaUtilEnumeration> keys = [((JavaUtilHashtable *) nil_chk(mVariables_)) keys];
  while ([((id<JavaUtilEnumeration>) nil_chk(keys)) hasMoreElements]) {
    NSString *key = [keys nextElement];
    OrgMinimaMiniscriptValuesValue *val = [((JavaUtilHashtable *) nil_chk(mVariables_)) getWithId:key];
    jint type = [((OrgMinimaMiniscriptValuesValue *) nil_chk(val)) getValueType];
    switch (type) {
      case OrgMinimaMiniscriptValuesBooleanValue_VALUE_BOOLEAN:
      JreStrAppend(&varlist, "$$$$", key, @" = ", [((NSString *) nil_chk(JavaLangBoolean_toStringWithBoolean_([val isTrue]))) uppercaseString], @", ");
      break;
      case OrgMinimaMiniscriptValuesHEXValue_VALUE_HEX:
      JreStrAppend(&varlist, "$$@$", key, @" = ", val, @", ");
      break;
      case OrgMinimaMiniscriptValuesNumberValue_VALUE_NUMBER:
      JreStrAppend(&varlist, "$$@$", key, @" = ", val, @", ");
      break;
      case OrgMinimaMiniscriptValuesScriptValue_VALUE_SCRIPT:
      JreStrAppend(&varlist, "$$@$", key, @" = [ ", val, @" ], ");
      break;
    }
  }
  [self traceLogWithNSString:JreStrcat("$C", varlist, '}')];
}

- (OrgMinimaMiniscriptValuesValue *)getGlobalWithNSString:(NSString *)zGlobal {
  OrgMinimaMiniscriptValuesValue *ret = [((JavaUtilHashtable *) nil_chk(mGlobals_)) getWithId:zGlobal];
  if (ret == nil) {
    @throw create_OrgMinimaMiniscriptExceptionsExecutionException_initWithNSString_(JreStrcat("$$", @"Global not found - ", zGlobal));
  }
  return ret;
}

- (jboolean)checkSignatureWithOrgMinimaMiniscriptValuesValue:(OrgMinimaMiniscriptValuesValue *)zSignature {
  OrgMinimaObjectsBaseMiniData *checksig = [((OrgMinimaMiniscriptValuesValue *) nil_chk(zSignature)) getMiniData];
  for (OrgMinimaMiniscriptValuesValue * __strong sig in nil_chk(mSignatures_)) {
    if ([((OrgMinimaObjectsBaseMiniData *) nil_chk([((OrgMinimaMiniscriptValuesValue *) nil_chk(sig)) getMiniData])) isNumericallyEqualWithOrgMinimaObjectsBaseMiniData:checksig]) {
      return true;
    }
  }
  return false;
}

+ (NSString *)cleanScriptWithNSString:(NSString *)zScript {
  return OrgMinimaMiniscriptContract_cleanScriptWithNSString_(zScript);
}

+ (void)mainWithNSStringArray:(IOSObjectArray *)zArgs {
  OrgMinimaMiniscriptContract_mainWithNSStringArray_(zArgs);
}

- (void)dealloc {
  RELEASE_(mTransaction_);
  RELEASE_(mRamScript_);
  RELEASE_(mBlock_);
  RELEASE_(mSignatures_);
  RELEASE_(mVariables_);
  RELEASE_(mGlobals_);
  RELEASE_(mPrevState_);
  RELEASE_(mCompleteLog_);
  [super dealloc];
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, 0, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 1, 2, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 3, 4, -1, 5, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 6, 7, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 8, 9, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, 10, -1, -1, -1 },
    { NULL, "V", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 11, 12, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "Z", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaObjectsTransaction;", 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 13, 9, 10, -1, -1, -1 },
    { NULL, "V", 0x1, 14, 2, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptValuesValue;", 0x1, 15, 9, 10, -1, -1, -1 },
    { NULL, "Z", 0x1, 16, 17, -1, -1, -1, -1 },
    { NULL, "LNSString;", 0x9, 18, 9, -1, -1, -1, -1 },
    { NULL, "V", 0x9, 19, 20, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(initWithNSString:withNSString:withOrgMinimaObjectsTransaction:withBoolean:);
  methods[1].selector = @selector(setGlobalVariableWithNSString:withOrgMinimaMiniscriptValuesValue:);
  methods[2].selector = @selector(setPrevStateWithJavaUtilArrayList:);
  methods[3].selector = @selector(getPrevStateWithOrgMinimaObjectsBaseMiniNumber:);
  methods[4].selector = @selector(isParseOK);
  methods[5].selector = @selector(isTrace);
  methods[6].selector = @selector(traceLogWithNSString:);
  methods[7].selector = @selector(getCompleteTraceLog);
  methods[8].selector = @selector(countInstructions);
  methods[9].selector = @selector(run);
  methods[10].selector = @selector(setRETURNValueWithBoolean:);
  methods[11].selector = @selector(isSuccess);
  methods[12].selector = @selector(isSuccessSet);
  methods[13].selector = @selector(getRamScript);
  methods[14].selector = @selector(getTransaction);
  methods[15].selector = @selector(getVariableWithNSString:);
  methods[16].selector = @selector(setVariableWithNSString:withOrgMinimaMiniscriptValuesValue:);
  methods[17].selector = @selector(getGlobalWithNSString:);
  methods[18].selector = @selector(checkSignatureWithOrgMinimaMiniscriptValuesValue:);
  methods[19].selector = @selector(cleanScriptWithNSString:);
  methods[20].selector = @selector(mainWithNSStringArray:);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "mTransaction_", "LOrgMinimaObjectsTransaction;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mRamScript_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mBlock_", "LOrgMinimaMiniscriptStatementsStatementBlock;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mSignatures_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 21, -1 },
    { "mVariables_", "LJavaUtilHashtable;", .constantValue.asLong = 0, 0x0, -1, -1, 22, -1 },
    { "mGlobals_", "LJavaUtilHashtable;", .constantValue.asLong = 0, 0x0, -1, -1, 22, -1 },
    { "mPrevState_", "LJavaUtilArrayList;", .constantValue.asLong = 0, 0x0, -1, -1, 23, -1 },
    { "mSuccess_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mSuccessSet_", "Z", .constantValue.asLong = 0, 0x2, -1, -1, -1, -1 },
    { "mTraceON_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mParseOK_", "Z", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "mNumInstructions_", "I", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
    { "MAX_INSTRUCTIONS", "I", .constantValue.asInt = OrgMinimaMiniscriptContract_MAX_INSTRUCTIONS, 0x19, -1, -1, -1, -1 },
    { "mCompleteLog_", "LNSString;", .constantValue.asLong = 0, 0x0, -1, -1, -1, -1 },
  };
  static const void *ptrTable[] = { "LNSString;LNSString;LOrgMinimaObjectsTransaction;Z", "setGlobalVariable", "LNSString;LOrgMinimaMiniscriptValuesValue;", "setPrevState", "LJavaUtilArrayList;", "(Ljava/util/ArrayList<Lorg/minima/objects/StateVariable;>;)V", "getPrevState", "LOrgMinimaObjectsBaseMiniNumber;", "traceLog", "LNSString;", "LOrgMinimaMiniscriptExceptionsExecutionException;", "setRETURNValue", "Z", "getVariable", "setVariable", "getGlobal", "checkSignature", "LOrgMinimaMiniscriptValuesValue;", "cleanScript", "main", "[LNSString;", "Ljava/util/ArrayList<Lorg/minima/miniscript/values/Value;>;", "Ljava/util/Hashtable<Ljava/lang/String;Lorg/minima/miniscript/values/Value;>;", "Ljava/util/ArrayList<Lorg/minima/objects/StateVariable;>;" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptContract = { "Contract", "org.minima.miniscript", ptrTable, methods, fields, 7, 0x1, 21, 14, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptContract;
}

@end

void OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(OrgMinimaMiniscriptContract *self, NSString *zRamScript, NSString *zSigs, OrgMinimaObjectsTransaction *zTransaction, jboolean zTraceON) {
  NSObject_init(self);
  JreStrongAssignAndConsume(&self->mPrevState_, new_JavaUtilArrayList_init());
  self->mTraceON_ = true;
  JreStrongAssign(&self->mCompleteLog_, @"");
  self->mTraceON_ = zTraceON;
  JreStrongAssign(&self->mCompleteLog_, @"");
  JreStrongAssign(&self->mRamScript_, OrgMinimaMiniscriptContract_cleanScriptWithNSString_(zRamScript));
  JreStrongAssign(&self->mTransaction_, zTransaction);
  JreStrongAssignAndConsume(&self->mSignatures_, new_JavaUtilArrayList_init());
  JreStrongAssignAndConsume(&self->mVariables_, new_JavaUtilHashtable_init());
  JreStrongAssignAndConsume(&self->mGlobals_, new_JavaUtilHashtable_init());
  JreStrongAssign(&self->mBlock_, nil);
  self->mSuccess_ = false;
  self->mSuccessSet_ = false;
  self->mParseOK_ = false;
  self->mNumInstructions_ = 0;
  JavaUtilStringTokenizer *strtok = create_JavaUtilStringTokenizer_initWithNSString_withNSString_(zSigs, @",");
  while ([strtok hasMoreTokens]) {
    NSString *sig = [((NSString *) nil_chk([strtok nextToken])) java_trim];
    [((JavaUtilArrayList *) nil_chk(self->mSignatures_)) addWithId:OrgMinimaMiniscriptValuesValue_getValueWithNSString_(sig)];
  }
  [self traceLogWithNSString:JreStrcat("$$", @"Contract   : ", self->mRamScript_)];
  JavaUtilArrayList *svs = [((OrgMinimaObjectsTransaction *) nil_chk(self->mTransaction_)) getCompleteState];
  for (OrgMinimaObjectsStateVariable * __strong sv in nil_chk(svs)) {
    [self traceLogWithNSString:JreStrcat("$@$$", @"State[", [((OrgMinimaObjectsStateVariable *) nil_chk(sv)) getPort], @"] : ", [((OrgMinimaObjectsBaseMiniString *) nil_chk([sv getData])) description])];
  }
  jint counter = 0;
  for (OrgMinimaMiniscriptValuesValue * __strong val in nil_chk(self->mSignatures_)) {
    [self traceLogWithNSString:JreStrcat("$I$$", @"Signatures[", counter, @"] : ", [((OrgMinimaMiniscriptValuesValue *) nil_chk(val)) description])];
    counter++;
  }
  @try {
    id<JavaUtilList> tokens = OrgMinimaMiniscriptTokensToken_tokenizeWithNSString_(self->mRamScript_);
    jint count = 0;
    for (OrgMinimaMiniscriptTokensToken * __strong tok in nil_chk(tokens)) {
      [self traceLogWithNSString:JreStrcat("I$$$$", (count++), @") Token : [", [((OrgMinimaMiniscriptTokensToken *) nil_chk(tok)) getTokenTypeString], @"] ", [tok getToken])];
    }
    JreStrongAssign(&self->mBlock_, OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(tokens));
    [self traceLogWithNSString:@"Script token parse OK."];
    self->mParseOK_ = true;
  }
  @catch (OrgMinimaMiniscriptExceptionsMinimaParseException *e) {
    [e printStackTrace];
  }
}

OrgMinimaMiniscriptContract *new_OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(NSString *zRamScript, NSString *zSigs, OrgMinimaObjectsTransaction *zTransaction, jboolean zTraceON) {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptContract, initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_, zRamScript, zSigs, zTransaction, zTraceON)
}

OrgMinimaMiniscriptContract *create_OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(NSString *zRamScript, NSString *zSigs, OrgMinimaObjectsTransaction *zTransaction, jboolean zTraceON) {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptContract, initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_, zRamScript, zSigs, zTransaction, zTraceON)
}

NSString *OrgMinimaMiniscriptContract_cleanScriptWithNSString_(NSString *zScript) {
  OrgMinimaMiniscriptContract_initialize();
  NSString *script = [NSString stringWithString:JreStrcat("C$C", ' ', [((NSString *) nil_chk(zScript)) lowercaseString], ' ')];
  script = [script java_replaceAll:@"," withReplacement:@" , "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" " withReplacement:@"  "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\(" withReplacement:@" ( "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\)" withReplacement:@" ) "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\[" withReplacement:@" [ "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\]" withReplacement:@" ] "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"<<" withReplacement:@" << "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@">>" withReplacement:@" >> "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\&" withReplacement:@" & "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\|" withReplacement:@" | "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\^" withReplacement:@" ^ "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\*" withReplacement:@" * "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\+" withReplacement:@" + "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\=" withReplacement:@" = "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@"\\%" withReplacement:@" % "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" nand " withReplacement:@" NAND "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" nxor " withReplacement:@" NXOR "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" nor " withReplacement:@" NOR "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" and " withReplacement:@" AND "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" xor " withReplacement:@" XOR "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" or " withReplacement:@" OR "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" not " withReplacement:@" NOT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" neg " withReplacement:@" NEG "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" neq " withReplacement:@" NEQ "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" gte " withReplacement:@" GTE "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" lte " withReplacement:@" LTE "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" gt " withReplacement:@" GT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" eq " withReplacement:@" EQ "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" lt " withReplacement:@" LT "];
  IOSObjectArray *allcommands = JreLoadStatic(OrgMinimaMiniscriptTokensToken, TOKENS_COMMAND);
  for (jint i = 0; i < ((IOSObjectArray *) nil_chk(allcommands))->size_; i++) {
    NSString *find = JreStrcat("C$C", ' ', [((NSString *) nil_chk(IOSObjectArray_Get(allcommands, i))) lowercaseString], ' ');
    NSString *repl = JreStrcat("C$C", ' ', IOSObjectArray_Get(allcommands, i), ' ');
    script = [((NSString *) nil_chk(script)) java_replaceAll:find withReplacement:repl];
  }
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" true " withReplacement:@" TRUE "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" false " withReplacement:@" FALSE "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @blknum " withReplacement:@" @BLKNUM "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @input " withReplacement:@" @INPUT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @address " withReplacement:@" @ADDRESS "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @amount " withReplacement:@" @AMOUNT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @tokenid " withReplacement:@" @TOKENID "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @coinid " withReplacement:@" @COINID "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @script " withReplacement:@" @SCRIPT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @totin " withReplacement:@" @TOTIN "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @totout " withReplacement:@" @TOTOUT "];
  script = [((NSString *) nil_chk(script)) java_replaceAll:@" @inblknum " withReplacement:@" @INBLKNUM "];
  {
    IOSObjectArray *a__ = JreLoadStatic(OrgMinimaMiniscriptFunctionsMinimaFunction, ALL_FUNCTIONS);
    OrgMinimaMiniscriptFunctionsMinimaFunction * const *b__ = ((IOSObjectArray *) nil_chk(a__))->buffer_;
    OrgMinimaMiniscriptFunctionsMinimaFunction * const *e__ = b__ + a__->size_;
    while (b__ < e__) {
      OrgMinimaMiniscriptFunctionsMinimaFunction *func = *b__++;
      NSString *name = [((OrgMinimaMiniscriptFunctionsMinimaFunction *) nil_chk(func)) getName];
      script = [((NSString *) nil_chk(script)) java_replaceAll:JreStrcat("C$C", ' ', [((NSString *) nil_chk(name)) lowercaseString], ' ') withReplacement:JreStrcat("C$C", ' ', name, ' ')];
    }
  }
  script = [((NSString *) nil_chk([((NSString *) nil_chk(script)) java_replaceAll:@"\\s+" withReplacement:@" "])) java_trim];
  NSString *finalstring = @"";
  JavaUtilStringTokenizer *strtok = create_JavaUtilStringTokenizer_initWithNSString_withNSString_(script, @" ");
  while ([strtok hasMoreTokens]) {
    NSString *tok = [strtok nextToken];
    if ([((NSString *) nil_chk(tok)) java_hasPrefix:@"0x"]) {
      finalstring = [((NSString *) nil_chk(finalstring)) java_concat:JreStrcat("$$", @" 0x", [((NSString *) nil_chk([tok java_substring:2])) uppercaseString])];
    }
    else {
      finalstring = [((NSString *) nil_chk(finalstring)) java_concat:JreStrcat("C$", ' ', tok)];
    }
  }
  return [((NSString *) nil_chk(finalstring)) java_trim];
}

void OrgMinimaMiniscriptContract_mainWithNSStringArray_(IOSObjectArray *zArgs) {
  OrgMinimaMiniscriptContract_initialize();
  NSString *RamScript = @"let gg = [hello] let ff = 0x45678 let t = CONCAT ( gg [if signedby] SCRIPT(ff) [and @blknum gt 12345])";
  OrgMinimaObjectsTransaction *tt = create_OrgMinimaObjectsTransaction_init();
  OrgMinimaMiniscriptContract *ctr = create_OrgMinimaMiniscriptContract_initWithNSString_withNSString_withOrgMinimaObjectsTransaction_withBoolean_(RamScript, @"0x1234,0x00FF", tt, true);
  [ctr setGlobalVariableWithNSString:@"@SCRIPT" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesScriptValue_initWithNSString_(RamScript)];
  [ctr setGlobalVariableWithNSString:@"@BLKNUM" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_(create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"10"))];
  [ctr setGlobalVariableWithNSString:@"@ADDRESS" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesHEXValue_initWithNSString_(@"0x67876AB")];
  [ctr setGlobalVariableWithNSString:@"@AMOUNT" withOrgMinimaMiniscriptValuesValue:create_OrgMinimaMiniscriptValuesNumberValue_initWithOrgMinimaObjectsBaseMiniNumber_(create_OrgMinimaObjectsBaseMiniNumber_initWithNSString_(@"1"))];
  [ctr run];
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptContract)