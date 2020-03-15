//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/statements/StatementParser.java
//

#include "J2ObjC_source.h"
#include "java/util/ArrayList.h"
#include "java/util/List.h"
#include "org/minima/miniscript/exceptions/MinimaParseException.h"
#include "org/minima/miniscript/expressions/ConstantExpression.h"
#include "org/minima/miniscript/expressions/Expression.h"
#include "org/minima/miniscript/expressions/ExpressionParser.h"
#include "org/minima/miniscript/statements/StatementBlock.h"
#include "org/minima/miniscript/statements/StatementParser.h"
#include "org/minima/miniscript/statements/commands/ASSERTstatement.h"
#include "org/minima/miniscript/statements/commands/EXECstatement.h"
#include "org/minima/miniscript/statements/commands/IFstatement.h"
#include "org/minima/miniscript/statements/commands/LETstatement.h"
#include "org/minima/miniscript/statements/commands/RETURNstatement.h"
#include "org/minima/miniscript/statements/commands/WHILEstatement.h"
#include "org/minima/miniscript/tokens/Token.h"
#include "org/minima/miniscript/values/BooleanValue.h"

@interface OrgMinimaMiniscriptStatementsStatementParser ()

+ (id<JavaUtilList>)getElseOrElseIfOrEndIFWithJavaUtilList:(id<JavaUtilList>)zTokens
                                                   withInt:(jint)zCurrentPosition
                                               withBoolean:(jboolean)zElseAlso;

+ (id<JavaUtilList>)getEndWHILEWithJavaUtilList:(id<JavaUtilList>)zTokens
                                        withInt:(jint)zCurrentPosition;

+ (id<JavaUtilList>)getTokensToNextCommandWithJavaUtilList:(id<JavaUtilList>)zTokens
                                                   withInt:(jint)zCurrentPosition;

@end

__attribute__((unused)) static id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(id<JavaUtilList> zTokens, jint zCurrentPosition, jboolean zElseAlso);

__attribute__((unused)) static id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getEndWHILEWithJavaUtilList_withInt_(id<JavaUtilList> zTokens, jint zCurrentPosition);

__attribute__((unused)) static id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(id<JavaUtilList> zTokens, jint zCurrentPosition);

@implementation OrgMinimaMiniscriptStatementsStatementParser

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaMiniscriptStatementsStatementParser_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

+ (OrgMinimaMiniscriptStatementsStatementBlock *)parseTokensWithJavaUtilList:(id<JavaUtilList>)zTokens {
  return OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(zTokens);
}

+ (id<JavaUtilList>)getElseOrElseIfOrEndIFWithJavaUtilList:(id<JavaUtilList>)zTokens
                                                   withInt:(jint)zCurrentPosition
                                               withBoolean:(jboolean)zElseAlso {
  return OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(zTokens, zCurrentPosition, zElseAlso);
}

+ (id<JavaUtilList>)getEndWHILEWithJavaUtilList:(id<JavaUtilList>)zTokens
                                        withInt:(jint)zCurrentPosition {
  return OrgMinimaMiniscriptStatementsStatementParser_getEndWHILEWithJavaUtilList_withInt_(zTokens, zCurrentPosition);
}

+ (id<JavaUtilList>)getTokensToNextCommandWithJavaUtilList:(id<JavaUtilList>)zTokens
                                                   withInt:(jint)zCurrentPosition {
  return OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, zCurrentPosition);
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaMiniscriptStatementsStatementBlock;", 0x9, 0, 1, 2, 3, -1, -1 },
    { NULL, "LJavaUtilList;", 0xa, 4, 5, -1, 6, -1, -1 },
    { NULL, "LJavaUtilList;", 0xa, 7, 8, -1, 9, -1, -1 },
    { NULL, "LJavaUtilList;", 0xa, 10, 8, -1, 9, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(parseTokensWithJavaUtilList:);
  methods[2].selector = @selector(getElseOrElseIfOrEndIFWithJavaUtilList:withInt:withBoolean:);
  methods[3].selector = @selector(getEndWHILEWithJavaUtilList:withInt:);
  methods[4].selector = @selector(getTokensToNextCommandWithJavaUtilList:withInt:);
  #pragma clang diagnostic pop
  static const void *ptrTable[] = { "parseTokens", "LJavaUtilList;", "LOrgMinimaMiniscriptExceptionsMinimaParseException;", "(Ljava/util/List<Lorg/minima/miniscript/tokens/Token;>;)Lorg/minima/miniscript/statements/StatementBlock;", "getElseOrElseIfOrEndIF", "LJavaUtilList;IZ", "(Ljava/util/List<Lorg/minima/miniscript/tokens/Token;>;IZ)Ljava/util/List<Lorg/minima/miniscript/tokens/Token;>;", "getEndWHILE", "LJavaUtilList;I", "(Ljava/util/List<Lorg/minima/miniscript/tokens/Token;>;I)Ljava/util/List<Lorg/minima/miniscript/tokens/Token;>;", "getTokensToNextCommand" };
  static const J2ObjcClassInfo _OrgMinimaMiniscriptStatementsStatementParser = { "StatementParser", "org.minima.miniscript.statements", ptrTable, methods, NULL, 7, 0x1, 5, 0, -1, -1, -1, -1, -1 };
  return &_OrgMinimaMiniscriptStatementsStatementParser;
}

@end

void OrgMinimaMiniscriptStatementsStatementParser_init(OrgMinimaMiniscriptStatementsStatementParser *self) {
  NSObject_init(self);
}

OrgMinimaMiniscriptStatementsStatementParser *new_OrgMinimaMiniscriptStatementsStatementParser_init() {
  J2OBJC_NEW_IMPL(OrgMinimaMiniscriptStatementsStatementParser, init)
}

OrgMinimaMiniscriptStatementsStatementParser *create_OrgMinimaMiniscriptStatementsStatementParser_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaMiniscriptStatementsStatementParser, init)
}

OrgMinimaMiniscriptStatementsStatementBlock *OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(id<JavaUtilList> zTokens) {
  OrgMinimaMiniscriptStatementsStatementParser_initialize();
  id<JavaUtilList> stats = create_JavaUtilArrayList_init();
  jint currentPosition = 0;
  jint totaltokens = [((id<JavaUtilList>) nil_chk(zTokens)) size];
  while (currentPosition < totaltokens) {
    OrgMinimaMiniscriptTokensToken *tok = [zTokens getWithInt:currentPosition++];
    NSString *token = [((OrgMinimaMiniscriptTokensToken *) nil_chk(tok)) getToken];
    jint type = [tok getTokenType];
    if (type != OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND) {
      @throw create_OrgMinimaMiniscriptExceptionsMinimaParseException_initWithNSString_(JreStrcat("$$", @"Invalid Token where there should be a Command - ", token));
    }
    if ([((NSString *) nil_chk(token)) java_equalsIgnoreCase:@"LET"]) {
      OrgMinimaMiniscriptTokensToken *var = [zTokens getWithInt:currentPosition++];
      if ([((OrgMinimaMiniscriptTokensToken *) nil_chk(var)) getTokenType] != OrgMinimaMiniscriptTokensToken_TOKEN_VARIABLE) {
        @throw create_OrgMinimaMiniscriptExceptionsMinimaParseException_initWithNSString_(JreStrcat("$$C", @"Not a variable after LET (..", [var getToken], ')'));
      }
      NSString *varname = [var getToken];
      var = [zTokens getWithInt:currentPosition++];
      if ([((OrgMinimaMiniscriptTokensToken *) nil_chk(var)) getTokenType] != OrgMinimaMiniscriptTokensToken_TOKEN_OPERATOR && ![((NSString *) nil_chk([var getToken])) isEqual:@"="]) {
        @throw create_OrgMinimaMiniscriptExceptionsMinimaParseException_initWithNSString_(JreStrcat("$$C", @"Incorrect LET statement, missing = (..", [var getToken], ')'));
      }
      id<JavaUtilList> lettokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      currentPosition += [((id<JavaUtilList>) nil_chk(lettokens)) size];
      id<OrgMinimaMiniscriptExpressionsExpression> exp = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(lettokens);
      [stats addWithId:create_OrgMinimaMiniscriptStatementsCommandsLETstatement_initWithNSString_withOrgMinimaMiniscriptExpressionsExpression_(varname, exp)];
    }
    else if ([token java_equalsIgnoreCase:@"EXEC"]) {
      id<JavaUtilList> exectokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      currentPosition += [((id<JavaUtilList>) nil_chk(exectokens)) size];
      id<OrgMinimaMiniscriptExpressionsExpression> exp = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(exectokens);
      [stats addWithId:create_OrgMinimaMiniscriptStatementsCommandsEXECstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(exp)];
    }
    else if ([token java_equalsIgnoreCase:@"IF"]) {
      OrgMinimaMiniscriptStatementsCommandsIFstatement *ifsx = create_OrgMinimaMiniscriptStatementsCommandsIFstatement_init();
      id<JavaUtilList> conditiontokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      id<OrgMinimaMiniscriptExpressionsExpression> IFcondition = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(conditiontokens);
      currentPosition += [((id<JavaUtilList>) nil_chk(conditiontokens)) size] + 1;
      id<JavaUtilList> actiontokens = OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(zTokens, currentPosition, true);
      currentPosition += [((id<JavaUtilList>) nil_chk(actiontokens)) size];
      NSString *nexttok = [((OrgMinimaMiniscriptTokensToken *) nil_chk([actiontokens getWithInt:[actiontokens size] - 1])) getToken];
      actiontokens = [actiontokens subListWithInt:0 withInt:[actiontokens size] - 1];
      OrgMinimaMiniscriptStatementsStatementBlock *IFaction = OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(actiontokens);
      [ifsx addConditionWithOrgMinimaMiniscriptExpressionsExpression:IFcondition withOrgMinimaMiniscriptStatementsStatementBlock:IFaction];
      while (![((NSString *) nil_chk(nexttok)) isEqual:@"ENDIF"]) {
        id<OrgMinimaMiniscriptExpressionsExpression> ELSEcondition = nil;
        OrgMinimaMiniscriptStatementsStatementBlock *ELSEaction = nil;
        if ([nexttok isEqual:@"ELSE"]) {
          ELSEcondition = create_OrgMinimaMiniscriptExpressionsConstantExpression_initWithOrgMinimaMiniscriptValuesValue_(JreLoadStatic(OrgMinimaMiniscriptValuesBooleanValue, TRUE));
        }
        else {
          conditiontokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
          ELSEcondition = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(conditiontokens);
          currentPosition += [((id<JavaUtilList>) nil_chk(conditiontokens)) size] + 1;
        }
        actiontokens = OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(zTokens, currentPosition, true);
        currentPosition += [((id<JavaUtilList>) nil_chk(actiontokens)) size];
        nexttok = [((OrgMinimaMiniscriptTokensToken *) nil_chk([actiontokens getWithInt:[actiontokens size] - 1])) getToken];
        actiontokens = [actiontokens subListWithInt:0 withInt:[actiontokens size] - 1];
        ELSEaction = OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(actiontokens);
        [ifsx addConditionWithOrgMinimaMiniscriptExpressionsExpression:ELSEcondition withOrgMinimaMiniscriptStatementsStatementBlock:ELSEaction];
      }
      [stats addWithId:ifsx];
    }
    else if ([token java_equalsIgnoreCase:@"WHILE"]) {
      id<JavaUtilList> conditiontokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      id<OrgMinimaMiniscriptExpressionsExpression> WHILEcondition = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(conditiontokens);
      currentPosition += [((id<JavaUtilList>) nil_chk(conditiontokens)) size] + 1;
      id<JavaUtilList> actiontokens = OrgMinimaMiniscriptStatementsStatementParser_getEndWHILEWithJavaUtilList_withInt_(zTokens, currentPosition);
      currentPosition += [((id<JavaUtilList>) nil_chk(actiontokens)) size];
      actiontokens = [actiontokens subListWithInt:0 withInt:[actiontokens size] - 1];
      OrgMinimaMiniscriptStatementsStatementBlock *WHILEaction = OrgMinimaMiniscriptStatementsStatementParser_parseTokensWithJavaUtilList_(actiontokens);
      OrgMinimaMiniscriptStatementsCommandsWHILEstatement *ws = create_OrgMinimaMiniscriptStatementsCommandsWHILEstatement_initWithOrgMinimaMiniscriptExpressionsExpression_withOrgMinimaMiniscriptStatementsStatementBlock_(WHILEcondition, WHILEaction);
      [stats addWithId:ws];
    }
    else if ([token java_equalsIgnoreCase:@"ASSERT"]) {
      id<JavaUtilList> returntokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      currentPosition += [((id<JavaUtilList>) nil_chk(returntokens)) size];
      id<OrgMinimaMiniscriptExpressionsExpression> exp = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(returntokens);
      [stats addWithId:create_OrgMinimaMiniscriptStatementsCommandsASSERTstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(exp)];
    }
    else if ([token java_equalsIgnoreCase:@"RETURN"]) {
      id<JavaUtilList> returntokens = OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(zTokens, currentPosition);
      currentPosition += [((id<JavaUtilList>) nil_chk(returntokens)) size];
      id<OrgMinimaMiniscriptExpressionsExpression> exp = OrgMinimaMiniscriptExpressionsExpressionParser_getExpressionWithJavaUtilList_(returntokens);
      [stats addWithId:create_OrgMinimaMiniscriptStatementsCommandsRETURNstatement_initWithOrgMinimaMiniscriptExpressionsExpression_(exp)];
    }
    else {
      @throw create_OrgMinimaMiniscriptExceptionsMinimaParseException_initWithNSString_(JreStrcat("$$", @"Invalid Token where there should be a Command - ", token));
    }
  }
  return create_OrgMinimaMiniscriptStatementsStatementBlock_initWithJavaUtilList_(stats);
}

id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(id<JavaUtilList> zTokens, jint zCurrentPosition, jboolean zElseAlso) {
  OrgMinimaMiniscriptStatementsStatementParser_initialize();
  id<JavaUtilList> rettokens = create_JavaUtilArrayList_init();
  jint currentpos = zCurrentPosition;
  jint total = [((id<JavaUtilList>) nil_chk(zTokens)) size];
  while (currentpos < total) {
    OrgMinimaMiniscriptTokensToken *tok = [zTokens getWithInt:currentpos];
    if ([((OrgMinimaMiniscriptTokensToken *) nil_chk(tok)) getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"ENDIF"]) {
      [rettokens addWithId:tok];
      return rettokens;
    }
    else if (zElseAlso && ([tok getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"ELSEIF"])) {
      [rettokens addWithId:tok];
      return rettokens;
    }
    else if (zElseAlso && ([tok getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"ELSE"])) {
      [rettokens addWithId:tok];
      return rettokens;
    }
    else if ([tok getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"IF"]) {
      [rettokens addWithId:tok];
      currentpos++;
      id<JavaUtilList> toks = OrgMinimaMiniscriptStatementsStatementParser_getElseOrElseIfOrEndIFWithJavaUtilList_withInt_withBoolean_(zTokens, currentpos, false);
      [rettokens addAllWithJavaUtilCollection:toks];
      currentpos += [((id<JavaUtilList>) nil_chk(toks)) size];
    }
    else {
      [rettokens addWithId:tok];
      currentpos++;
    }
  }
  return rettokens;
}

id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getEndWHILEWithJavaUtilList_withInt_(id<JavaUtilList> zTokens, jint zCurrentPosition) {
  OrgMinimaMiniscriptStatementsStatementParser_initialize();
  id<JavaUtilList> rettokens = create_JavaUtilArrayList_init();
  jint currentpos = zCurrentPosition;
  jint total = [((id<JavaUtilList>) nil_chk(zTokens)) size];
  while (currentpos < total) {
    OrgMinimaMiniscriptTokensToken *tok = [zTokens getWithInt:currentpos];
    if ([((OrgMinimaMiniscriptTokensToken *) nil_chk(tok)) getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"ENDWHILE"]) {
      [rettokens addWithId:tok];
      return rettokens;
    }
    else if ([tok getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND && [((NSString *) nil_chk([tok getToken])) isEqual:@"WHILE"]) {
      [rettokens addWithId:tok];
      currentpos++;
      id<JavaUtilList> toks = OrgMinimaMiniscriptStatementsStatementParser_getEndWHILEWithJavaUtilList_withInt_(zTokens, currentpos);
      [rettokens addAllWithJavaUtilCollection:toks];
      currentpos += [((id<JavaUtilList>) nil_chk(toks)) size];
    }
    else {
      [rettokens addWithId:tok];
      currentpos++;
    }
  }
  return rettokens;
}

id<JavaUtilList> OrgMinimaMiniscriptStatementsStatementParser_getTokensToNextCommandWithJavaUtilList_withInt_(id<JavaUtilList> zTokens, jint zCurrentPosition) {
  OrgMinimaMiniscriptStatementsStatementParser_initialize();
  id<JavaUtilList> rettokens = create_JavaUtilArrayList_init();
  jint ret = zCurrentPosition;
  jint total = [((id<JavaUtilList>) nil_chk(zTokens)) size];
  while (ret < total) {
    OrgMinimaMiniscriptTokensToken *tok = [zTokens getWithInt:ret];
    if ([((OrgMinimaMiniscriptTokensToken *) nil_chk(tok)) getTokenType] == OrgMinimaMiniscriptTokensToken_TOKEN_COMMAND) {
      return rettokens;
    }
    else {
      [rettokens addWithId:tok];
    }
    ret++;
  }
  return rettokens;
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaMiniscriptStatementsStatementParser)