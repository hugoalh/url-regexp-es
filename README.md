# URL RegExp (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/url-regexp-es](https://img.shields.io/github/v/release/hugoalh/url-regexp-es?label=hugoalh/url-regexp-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/url-regexp-es")](https://github.com/hugoalh/url-regexp-es)
[![JSR: @hugoalh/url-regexp](https://img.shields.io/jsr/v/@hugoalh/url-regexp?label=@hugoalh/url-regexp&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/url-regexp")](https://jsr.io/@hugoalh/url-regexp)
[![NPM: @hugoalh/url-regexp](https://img.shields.io/npm/v/@hugoalh/url-regexp?label=@hugoalh/url-regexp&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/url-regexp")](https://www.npmjs.com/package/@hugoalh/url-regexp)

An ECMAScript module for URL regular expression.

This is a modified edition of the [URL RegEx Safe](https://github.com/spamscanner/url-regex-safe) which aim for:

- ECMAScript
- Not use of RE2
- TypeScript first

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/url-regexp-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/url-regexp[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/url-regexp[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

## 🧩 APIs

- ```ts
  function urlRegExp(options?: URLRegExpOptions): RegExp;
  ```
- ```ts
  function urlRegExpSource(options?: URLRegExpOptions): string;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/url-regexp)
