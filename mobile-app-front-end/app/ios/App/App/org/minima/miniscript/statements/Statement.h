//
//  Generated by the J2ObjC translator.  DO NOT EDIT!
//  source: ./org/minima/miniscript/statements/Statement.java
//

#include "J2ObjC_header.h"

#pragma push_macro("INCLUDE_ALL_OrgMinimaMiniscriptStatementsStatement")
#ifdef RESTRICT_OrgMinimaMiniscriptStatementsStatement
#define INCLUDE_ALL_OrgMinimaMiniscriptStatementsStatement 0
#else
#define INCLUDE_ALL_OrgMinimaMiniscriptStatementsStatement 1
#endif
#undef RESTRICT_OrgMinimaMiniscriptStatementsStatement

#if !defined (OrgMinimaMiniscriptStatementsStatement_) && (INCLUDE_ALL_OrgMinimaMiniscriptStatementsStatement || defined(INCLUDE_OrgMinimaMiniscriptStatementsStatement))
#define OrgMinimaMiniscriptStatementsStatement_

@class OrgMinimaMiniscriptContract;

@protocol OrgMinimaMiniscriptStatementsStatement < JavaObject >

- (void)executeWithOrgMinimaMiniscriptContract:(OrgMinimaMiniscriptContract *)zContract;

@end

J2OBJC_EMPTY_STATIC_INIT(OrgMinimaMiniscriptStatementsStatement)

J2OBJC_TYPE_LITERAL_HEADER(OrgMinimaMiniscriptStatementsStatement)

#endif

#pragma pop_macro("INCLUDE_ALL_OrgMinimaMiniscriptStatementsStatement")