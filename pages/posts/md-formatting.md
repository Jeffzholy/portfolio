---
title: Formatting and linting markdown files
date: 2023/5/17
description: Format and lint markdown files in codebase
tag: development
author: Jeff Zhang
---

# Formatting and linting markdown files

> TL;DR Formatting with Prettier, linting with markdownlint

This site is powered by [Nextra](https://nextra.site/), which uses markdown-based contents to generate static sites. It's good to have markdown and mdx formatter and linter in the codebase. In this post, only markdown formatting and linting will be covered.

## Prettier

[Prettier](https://prettier.io/), the opinionated code formatter, is used to format the whole codebase. Followings are the Prettier config and the project formatting script respectively. The CLI flags are listed [here](https://prettier.io/docs/en/cli.html).

```json
{
  "arrowParens": "always",
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "semi": false
}
```

```bash
...
"format": "prettier -w -u --cache --cache-strategy content pages",
...
```

## markdownlint

[markdownlint](https://github.com/igorshubovych/markdownlint-cli) is into consideration due to thriving popularity, configurable with Prettier and good clear rules. With [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli), it can fix some lint errors automatically.

According to [this blog](https://blog.joshuakgoldberg.com/configuring-markdownlint-alongside-prettier/#code-classlanguage-textstyleprettierjsoncode-to-the-rescue) and [this discussion](https://github.com/DavidAnson/markdownlint/pull/594), it's very straightforward to disable all formatting lint rules which might conflict with Prettier.

The config in `.markdownlint.json` file is like this in my codebase:

```json
{
  "extends": "markdownlint/style/prettier",
  "single-title": false,
  "no-inline-html": false,
  "line-length": false
}
```

The reason I turned the [_single-title_](https://github.com/DavidAnson/markdownlint/blob/v0.28.2/doc/md025.md) rule off is that the rule is not only checking `h1` tag but also the word `title` which will cause lint error if yaml styled [meta data](https://yaml.org/spec/1.2-old/spec.html#id2760395) is in the top of the markdown file.

The CLI script can be like this:

```bash
...
"lint:md": "markdownlint \"pages/**/*.md\" -f"
...
```

## Husky and Lint-staged

[Husky](https://typicode.github.io/husky/) is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages, I introduce Husky in this project to automatically run lint and formatting work before git commit.
[Lint-staged](https://www.npmjs.com/package/lint-staged) is a tool that allows us to run linters against staged git files and prevent them from slipping into our code base.

Until now only markdown files are hosted in the codebase, so I configured formatting and linting against markdown files only.

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged --verbose
```

Following is the lint-staged object in `package.json`.

```json
"lint-staged": {
    "pages/!*.md": "prettier --write",
    "pages/*.md": [
      "markdownlint -c .markdownlint.json -f",
      "prettier --write"
    ]
  }
```
