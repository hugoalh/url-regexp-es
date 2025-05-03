# URL RegExp (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/url-regexp-es](https://img.shields.io/github/v/release/hugoalh/url-regexp-es?label=hugoalh/url-regexp-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/url-regexp-es")](https://github.com/hugoalh/url-regexp-es)
[![JSR: @hugoalh/url-regexp](https://img.shields.io/jsr/v/@hugoalh/url-regexp?label=@hugoalh/url-regexp&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/url-regexp")](https://jsr.io/@hugoalh/url-regexp)
[![NPM: @hugoalh/url-regexp](https://img.shields.io/npm/v/@hugoalh/url-regexp?label=@hugoalh/url-regexp&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/url-regexp")](https://www.npmjs.com/package/@hugoalh/url-regexp)

An ECMAScript (JavaScript & TypeScript) module for URL regular expression.

This is a modified edition of the NPM packages [`url-regex-safe`](https://www.npmjs.com/package/url-regex-safe) and [`@types/url-regex-safe`](https://www.npmjs.com/package/@types/url-regex-safe) which aim for:

- ECMAScript
- Not use of RE2
- TypeScript first

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/url-regexp-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/url-regexp[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/url-regexp[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

## 🧩 APIs

- ```ts
  function urlRegExp(options?: URLRegExpOptions & { returnString?: false; }): RegExp;
  function urlRegExp(options: URLRegExpOptions & { returnString: true; }): string;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/url-regexp)
