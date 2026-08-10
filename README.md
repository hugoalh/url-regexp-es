# URL RegExp (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/url_regexp_ecmascript)
● [GitHub](https://github.com/hugoalh/url-regexp-es)
● [JSR](https://jsr.io/@hugoalh/url-regexp)
● [NPM](https://www.npmjs.com/package/@hugoalh/url-regexp)

An ECMAScript module for URL regular expression.

This is a modified edition of the [URL RegEx Safe](https://github.com/spamscanner/url-regex-safe) which aim for:

- ECMAScript
- Not use of RE2
- TypeScript first

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the entrypoints, visit the runtime documentation for more information.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  function urlRegExp(options?: URLRegExpOptions): RegExp;
  ```
- ```ts
  function urlRegExpSource(options?: URLRegExpOptions): string;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc)
>   - [JSR](https://jsr.io/@hugoalh/url-regexp)
