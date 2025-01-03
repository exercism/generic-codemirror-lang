import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const replace-this-with-the-track-slugLanguage = LRLanguage.define({
  name: "replace-this-with-the-track-slug",
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment,
        IntegerLiteral: t.number,
        FloatingLiteral: t.float,
        BooleanLiteral: t.bool,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "//" },
  },
});

export function replace-this-with-the-track-slug() {
  return new LanguageSupport(replace-this-with-the-track-slugLanguage);
}
