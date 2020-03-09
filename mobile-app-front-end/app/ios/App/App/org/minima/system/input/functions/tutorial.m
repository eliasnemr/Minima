//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/system/input/functions/tutorial.java
//

#include "IOSObjectArray.h"
#include "J2ObjC_source.h"
#include "org/minima/system/input/CommandFunction.h"
#include "org/minima/system/input/functions/tutorial.h"
#include "org/minima/utils/ResponseStream.h"

NSString *OrgMinimaSystemInputFunctionstutorial_TUTORIAL_TEXT = @"Minima transactions are a series of inputs, a series of outputs and a variable list known as the state, which you can access from the script with GETSTATE. The state can be accessed by all the input scripts, and is stored in the MMR database, so can be accessed by PREVSTATE in the next transaction the outputs are added to, as inputs. \n\nThe sum of the outputs must be less than or equal to the sum of the inputs, for every tokenid used. The difference in raw minima is the Burn. \n\nA Minima input script returns true or false. The default is return FALSE, so all inputs must explicitly return true for the transaction to be valid.\n\nA transaction can be signed, in full, by one or more public keys.\n\nMinima allows input scripts to have perfect knowledge of the entire transaction. How many, their token type, the amount and address of all inputs and outputs are available. An input knows it's own script ( @SCRIPT ) and can ensure an output of a similar address exists in the outputs. \n\nUsing REPLVAR new addresses can be created by replacing existing variables in the current  or pre-existing scripts, and checking of complex addresses can be achieved by using MAST and a list a variables before the main bulk of the hashed script.\n\nThe addition of the state variables in the MMR Proof DB, allow for complex scripts with knowledge of their past to be created.\n\nMinima transactions are complex Logic Gates, with analogue inputs and outputs, a simple yet powerful control language, and a single-shot history state mechanic.\n\nI think of them as \"Script Gates\".    \n\nGrammar\n-------\n\nADDRESS     ::= SHA3 ( BLOCK )\nBLOCK       ::= STATEMENT_1 STATEMENT_2 ... STATEMENT_n\nSTATEMENT   ::= LET VARIABLE = EXPRESSION | \n                IF EXPRESSION THEN BLOCK \n                [ELSEIF EXPRESSION THEN BLOCK]* \n                [ELSE BLOCK] ENDIF | \n                MAST BLOCK [ORMAST BLOCK]* ENDMAST |\n                ASSERT EXPRESSION |\n                RETURN EXPRESSION\nEXPRESSION  ::= RELATION AND RELATION  | RELATION OR RELATION  |  \n                RELATION XOR RELATION  | RELATION NAND RELATION | \n                RELATION NOR RELATION  |  RELATION NXOR RELATION | RELATION\nRELATION    ::= LOGIC EQ LOGIC  | LOGIC NEQ LOGIC  | \n                LOGIC GT LOGIC  | LOGIC GTE LOGIC  | \n                LOGIC LT LOGIC  | LOGIC LTE LOGIC  | LOGIC\nLOGIC       ::= LOGIC & OPERATION | LOGIC | OPERATION | \n                LOGIC ^ OPERATION | OPERATION\nOPERATION   ::= OPERATION + MULDIV | OPERATION - MULDIV | \n                OPERATION % MULDIV | \n                OPERATION << MULDIV | OPERATION >> MULDIV | MULDIV\nMULDIV      ::= MULDIV * PRIME | MULDIV / PRIME | PRIME\nPRIME       ::= NOT PRIME |  NEG PRIME | BASEUNIT\nBASEUNIT    ::= VAR | VALUE | GLOBAL | FUNCTION | ( EXPRESSION )\nVAR         ::= ^[a-z]{1,10}$\nVALUE       ::= NUMBER | DATA | BINARY\nDATA        ::= HEX | SCRIPT\nBINARY      ::= TRUE | FALSE\nGLOBAL      ::= @BLKNUM | @INPUTNUM |\n      \t        @AMOUNT | @ADDRESS | @TOKENID | @COINID |\n                @SCRIPT | @TOTIN | @TOTOUT\nNUMBER      ::= \"^-?\\\\d*(\\\\.\\\\d+)?$\"\nBYTE        ::= [0-255]\nHEX         ::= 0x[0-9A-F]{2}*\nSCRIPT      ::= [ ASCII ]\nFALSE       ::= 0\nTRUE        ::= NOT FALSE\nMAST        ::= $HEX\nFUNCTION    ::= FUNC ( EXPRESSION1 EXPRESSION2 .. EXPRESSIONn ) \nFUNC        ::= CONCAT | LEN | REV | SUBSET | RPLVAR |\n                ASCII | BOOL | HEX | NUMBER | SCRIPT |\n                ABS | CEIL | FLOOR | MIN | MAX | INC | DEC |\n                BITSET | BITGET | PROOF | SHA3 | SHA2 |\n                SIGNEDBY | MULTISIG | CHECKSIG |\n                GETOUTADDR | GETOUTAMT | GETOUTTOK | VERIFYOUT |\n                GETINADDR | GETINAMT | GETINTOK | GETINID | VERIFYIN |\n                SUMINTOK | SUMOUTTOK | STATE | PREVSTATE | *DYNSTATE\n\nGlobals\n-------\n\n@BLKNUM    : Block number this transaction is in\n@INPUT     : Input number in the transaction\n@AMOUNT    : Amount of this input\n@ADDRESS   : Address of this input\n@TOKENID   : TokenID of this input\n@COINID    : CoinID of this input\n@SCRIPT    : Script for this input\n@TOTIN     : Total number of inputs for this transaction\n@TOTOUT    : Total number of outputs for this transaction\n@INBLKNUM  : Block number this output was created - useful for OP_CSV\n\nFunctions\n---------\n\nCONCAT ( DATA DATA )\nConcatenate the 2 data values into 1 value . Both values must be the same DATA type. \n\nLEN ( HEX )\nLength of the data\n\nREV ( HEX )\nReverse the data\n\nSUBSET ( HEX NUMBER NUMBER )\nReturn a subset of the data start length\n\nRPLVAR ( SCRIPT SCRIPT SCRIPT ) \nIn a script, replace a variable definition with the following Expression. Can be used on @SCRIPT or other to create a covenant with new variables and check outputs.\n\nASCII ( HEX )\nConvert the HEX value of a script value to a script\n\nBOOLEAN ( VALUE )\nConvert to TRUE or FALSE value.\n\nHEX ( SCRIPT )\nConvert SCRIPT to HEX\n\nNUMBER ( HEX )\nConvert HEX to NUMBER\n\nSCRIPT ( HEX ) \nConvert a HEX value to SCRIPT\n\nABS ( NUMBER )\nReturn the absolute value of a number\n\nCEIL ( NUMBER )\nReturn the number rounded up\n\nFLOOR ( NUMBER ) \nReturn the number rounded down\n\nMIN ( NUMBER NUMBER )\nReturn the minimum value of the 2 numbers\n\nMAX ( NUMBER NUMBER )\nReturn the maximum value of the 2 numbers\n\nINC ( NUMBER )\nIncrement a number\n\nDEC ( NUMBER )\nDecrement a number\n\nBITSET ( HEX NUMBER BINARY )\nSet the value of the BIT at that Position to 0 or 1\n\nBITGET ( HEX NUMBER ) \nGet the BINARY value of the bit at the position.\n\nCHAINSHA ( HEX HEX ) \nRecursively hash the first HEX value with the proof provided in the second. A proof is a BYTE denoting left or right with a hex data value. Returns the final result that can be checked in script. \n\nSHA3 ( HEX ) \nReturns the SHA3 value of the HEX value\n\nSHA2 ( HEX ) \nReturns the SHA2 value of the HEX value\n\nSIGNEDBY ( HEX )\nReturns true if the transaction is signed by this public key\n\nMULTISIG ( BYTE HEX1 HEX2 .. HEXn )\nReturns true if the transaction is signed by N of the public keys\n\nCHECKSIG ( HEX HEX )\nCheck valid signature with provided public key.\n\nGETOUTADDR ( BYTE ) \nReturn the HEX address of the specified output\n\nGETOUTAMT ( BYTE ) \nReturn the amount of the specified output \n\nGETOUTTOK ( BYTE ) \nReturn the token id of the specified output\n\nVERIFYOUT ( BYTE HEX NUMBER HEX )\nVerify the specified output has the specified address, amount and tokenid. \n\nGETINADDR ( BYTE ) \nReturn the HEX address of the specified input\n\nGETINAMT ( BYTE ) \nReturn the amount of the specified input\n\nGETINTOK ( BYTE ) \nReturn the token id of the specified input\n\nVERIFYIN ( BYTE HEX NUMBER HEX )\nVerify the specified input has the specified address, amount and tokenid. \n\nSUMINTOK ( HEX )\nSum the input values of a certain token \n\nSUMOUTTOK ( HEX )\nSum the output values of a certain token \n\nSTATE ( NUMBER )\nReturn the state value for the given number\n\nPREVSTATE ( NUMBER )\nReturn the state value stored in the MMR data in the initial transaction this input was created. Allows for a state to be maintained from 1 spend to the next.\n\n*DYNSTATE ( NUMBER  EXPRESSION )\nCan be called only once per transaction. Will change the State value to the expression value.  N = N+1. This way rolling transactions are possible. Multiple calls to the same input in the same block.\n\nExamples\n--------\n\nRETURN SIGNEDBY ( 0x12345.. )\n\nIF SIGNEDBY ( 0x123456.. ) AND SIGNEDBY ( 0x987654.. ) THEN\n   RETURN TRUE\nELSE IF @BLKNUM GT 198765 AND SIGNEDBY ( 0x12345.. ) THEN\n   RETURN TRUE\nENDIF\n\nLET x = GETSATE ( 23 )\nLET shax = SHA3 ( x )\nIF shax EQ 0x6785456 AND SIGNEDBY ( 0x12345.. ) THEN RETURN TRUE ENDIF";

@implementation OrgMinimaSystemInputFunctionstutorial

J2OBJC_IGNORE_DESIGNATED_BEGIN
- (instancetype)init {
  OrgMinimaSystemInputFunctionstutorial_init(self);
  return self;
}
J2OBJC_IGNORE_DESIGNATED_END

- (void)doFunctionWithNSStringArray:(IOSObjectArray *)zInput {
  [((OrgMinimaUtilsResponseStream *) nil_chk([self getResponseStream])) hardEndStatusWithNSString:OrgMinimaSystemInputFunctionstutorial_TUTORIAL_TEXT];
}

- (NSString *)getLineNumberWithInt:(jint)zLine {
  if (zLine < 10) {
    return JreStrcat("$I", @"00", zLine);
  }
  else if (zLine < 100) {
    return JreStrcat("CI", '0', zLine);
  }
  return JreStrcat("I", zLine);
}

- (OrgMinimaSystemInputCommandFunction *)getNewFunction {
  return create_OrgMinimaSystemInputFunctionstutorial_init();
}

+ (const J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { NULL, NULL, 0x1, -1, -1, -1, -1, -1, -1 },
    { NULL, "V", 0x1, 0, 1, 2, -1, -1, -1 },
    { NULL, "LNSString;", 0x1, 3, 4, -1, -1, -1, -1 },
    { NULL, "LOrgMinimaSystemInputCommandFunction;", 0x1, -1, -1, -1, -1, -1, -1 },
  };
  #pragma clang diagnostic push
  #pragma clang diagnostic ignored "-Wobjc-multiple-method-names"
  #pragma clang diagnostic ignored "-Wundeclared-selector"
  methods[0].selector = @selector(init);
  methods[1].selector = @selector(doFunctionWithNSStringArray:);
  methods[2].selector = @selector(getLineNumberWithInt:);
  methods[3].selector = @selector(getNewFunction);
  #pragma clang diagnostic pop
  static const J2ObjcFieldInfo fields[] = {
    { "TUTORIAL_TEXT", "LNSString;", .constantValue.asLong = 0, 0x9, -1, 5, -1, -1 },
  };
  static const void *ptrTable[] = { "doFunction", "[LNSString;", "LJavaLangException;", "getLineNumber", "I", &OrgMinimaSystemInputFunctionstutorial_TUTORIAL_TEXT };
  static const J2ObjcClassInfo _OrgMinimaSystemInputFunctionstutorial = { "tutorial", "org.minima.system.input.functions", ptrTable, methods, fields, 7, 0x1, 4, 1, -1, -1, -1, -1, -1 };
  return &_OrgMinimaSystemInputFunctionstutorial;
}

@end

void OrgMinimaSystemInputFunctionstutorial_init(OrgMinimaSystemInputFunctionstutorial *self) {
  OrgMinimaSystemInputCommandFunction_initWithNSString_(self, @"tutorial");
  [self setHelpWithNSString:@"" withNSString:@"Explain Minima and go through Scripting" withNSString:@""];
}

OrgMinimaSystemInputFunctionstutorial *new_OrgMinimaSystemInputFunctionstutorial_init() {
  J2OBJC_NEW_IMPL(OrgMinimaSystemInputFunctionstutorial, init)
}

OrgMinimaSystemInputFunctionstutorial *create_OrgMinimaSystemInputFunctionstutorial_init() {
  J2OBJC_CREATE_IMPL(OrgMinimaSystemInputFunctionstutorial, init)
}

J2OBJC_CLASS_TYPE_LITERAL_SOURCE(OrgMinimaSystemInputFunctionstutorial)

J2OBJC_NAME_MAPPING(OrgMinimaSystemInputFunctionstutorial, "org.minima.system.input.functions", "OrgMinimaSystemInputFunctions")
