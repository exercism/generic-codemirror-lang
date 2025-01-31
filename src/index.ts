import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { indentNodeProp, foldNodeProp, foldInside  } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

const addIndent = (context) => context.lineIndent(context.node.from) + context.unit // Indent for function body
const removeIndent = (context) => context.lineIndent(context.node.from)

export const jikiscriptLanguage = LRLanguage.define({
  name: "jikiscript",
  parser: parser.configure({
    props: [
      styleTags({
        String: t.string,
        Boolean: t.bool,
        LineComment: t.lineComment,
        Integer: t.number,
        Floating: t.float,
        "do end": t.keyword,
        "set change to": t.keyword,
        "function with": t.definitionKeyword,
        "repeat repeat_until_game_over times": t.keyword,
        "if else": t.keyword,
        "is equals": t.keyword,
        "return": t.keyword,
        Identifier: t.variableName,
        ArgumentList: t.variableName,
        "( )": t.paren

        /*
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "{ }": t.brace,
        Escape: t.escape,
        Identifier: t.function(t.definition(t.variableName)),
        Signature: t.meta,
        Glyph: t.atom,*/
      }),

      indentNodeProp.add({
        FunctionDefinition: addIndent,
        IfStatement: addIndent,
        ElseStatement: addIndent,
        RepeatStatement: addIndent,
        RepeatUntilGameOverStatement: addIndent,
        statement: addIndent, // Indent for nested statements
        EndStatement: removeIndent, // Reset for end statements
      }),

      foldNodeProp.add({
        FunctionDefinition: foldInside, // Allow folding of function blocks
        IfStatement: foldInside, // Allow folding of function blocks
      }),
    ],
  }),
  // languageData: {
  //   closeBrackets: { brackets: ["(", "[", "do", '"'] },
  //   commentTokens: { line: "//" },
  // },
});

export function jikiscript() {
  return new LanguageSupport(jikiscriptLanguage);
}
