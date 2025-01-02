# replace-this-with-the-track-name language support for CodeMirror

![NPM Version](https://img.shields.io/npm/v/@exercism/codemirror-lang-replace-this-with-the-track-slug)

This repo contains the grammar for the replace-this-with-the-track-name language.

## Resources

- [Lezer](https://lezer.codemirror.net/docs/guide/)
  - [Writing a Grammar](https://lezer.codemirror.net/docs/guide/#writing-a-grammar)
  - [Examples](https://lezer.codemirror.net/examples/)

## Prerequisites

- [Bun](https://bun.sh/)

## Setup

Run `bun install` to install all dependencies.

## Developing

To help with development, run `bun run dev`.
This will start a [Vite](https://vite.dev/) dev server (usually at http://localhost:5173/) that renders the `index.html` file.
The `#editor` element gets populated with some sample source code of your choosing and then it will get transformed by the grammar defined in `src/syntax.grammar`.
Any changes to the grammar will auto-refresh the dev server's rendered contents.

## Testing

The `test/cases` directory contains the tests files.
Run `bun test` to run these tests.

Note: test (case) files should be relatively small and focus on a single aspect of a grammar.

## Publishing

Run `bun publish` to publish the plugin to NPM.
