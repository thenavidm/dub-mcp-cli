# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.14. The 61 tools keep their names and arguments, and every difference below was measured against 2.0.1, the last version on npm, before release.

- **A smaller tool list.** Each write's body appeared twice, as its own fields and inside `payload`; 3.0.0 writes each repeated part once under `$defs`, and nothing is lost: Claude Code and Codex both read fields that appear only there, and validation still checks the full schema. Every tool loaded costs 74,231 tokens in Claude Code instead of 86,431.
- **A person approves each write over MCP.** All 39 still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `DUB_CONFIRM=model` makes it enough everywhere. The audit log records who approved each write.
- **`DUB_ALLOW_DESTRUCTIVE=0` still refuses every write**, confirmed or not, as 2.0 did.
- **Dub's status picks the exit code.** A request Dub rejects (400 or 422) exits 2 instead of 5, and a removed resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that creates a short link took a median of 110,559 input tokens over the CLI instead of 129,621 (five runs each): three 2.0.1 runs ran `schema` without a command, and every 3.0.0 run asked `which`.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`dub-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **Less work to start.** Each input and body schema now compiles on its first use rather than at load, and the entry turns on Node's compile cache. The server spends 204 ms of CPU before its first answer where 2.0.1 spent 431, and answers in 129 ms of wall time instead of 236 (median of 21 runs, taking turns on one busy Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **Docs.** README section 7 has the measured Claude Code and Codex costs, where 2.0 said they were pending; the version table says 3.0.0; and the exit codes include 1.

### Upgrading

Over MCP, expect an approval prompt or form before any write; a headless agent that should write with `confirm: true` alone needs `DUB_CONFIRM=model`. A script that read exit 5 as a rejected request should read 2, and as a removed resource 3. An error's JSON keeps `error` and `status`; its `code` is now Slipway's (`usage`, `auth`, `not_found`, `rate_limited`, `api`, `not_configured`). Over MCP, an argument that fails the schema comes back as the MCP SDK's own message, "Input validation error: …", instead of JSON. With `DUB_READ_ONLY=1`, a client that calls a hidden write gets "tool not found" instead of a refusal naming `DUB_READ_ONLY`; the CLI still names it. The audit log's lines gain `confirmed_by`, and each allowed write is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `DUB_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 199 tokens, for `which`, `install`, the flags and the exit codes it now lists; the command list by 15; `create-link --help` by 16; and a missing argument's error by 14, for its code and a hint. `SKILL.md` is 63 tokens longer in Claude Code, because it says how approval works over MCP and lists every exit code.

## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/dub-mcp-cli` starts the MCP server whatever order npm keeps.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order. For this package that happened to be the server; for 23 others it was the CLI. A third binary named after the package, on its own file, now always starts the server, and npx picks it by name.

Use the native terminal capture at 1040 source pixels with lossless GIF optimization, displayed at 520 pixels, matching the Bluesky/Substack reference. Original assets remain available.

## 2.0.0 - 2026-10-03

- Modernize the private twelve-tool MCP as the house shared TypeScript CLI, stdio MCP and versioned desktop package.
- Add all 57 current native routes and four local workflow helpers; follow new program-application routes, current cursors, nullable/discriminated bodies and explicit local positive pagination rules.
- Enforce confirmation/read-only on 39 mutations/private-output writes, isolate workspace keys, bound requests/responses/timeouts and never retry unknown outcomes.
- Add exact reviewed ordered link/tag/folder batches, prevalidation, schema/profile/order hashes and stop-on-failure known/partial receipts.
- Handle native bulk HTTP200 per-link errors, HTTP202 commission acceptance, real PNG responses and private file-only embed credentials.
- Remove unsupported get_workspace, preserve eleven legacy names with changed current arguments, and document actual official MCP/CLI/SDK/community alternatives.
- Preserve AGPL and private legacy history; maintain full repo/CMS/client setup, accordion FAQs, topics/keywords, release tags and artifact evidence.

## 1.0.0 - private legacy source

Twelve JavaScript MCP registrations and a global DUB_API_KEY; no declared task CLI. Existing private history is preserved, not published into the new source repo. No earlier owned public npm release is assumed.

| Component | Reviewed / locked version |
| --- | --- |
| Owned package | 2.0.0 |
| Current native API operations | 57 |
| MCP SDK | 1.32.0 |
| Ajv | 8.20.0 |
| Ajv formats | 3.0.1 |
| TypeScript | 7.0.2 |
| Vitest | 5.0.3 |
| Vite | 8.3.2 |
| MCPB | 2.1.2 |
| Official CLI | dub-cli 0.0.13 |
| Official SDK | dub 0.73.5 |

2.0.0 is a breaking modernization of the private twelve-tool JavaScript MCP. Both owned binaries now live under @thenavidm/dub-mcp-cli; the old generic package name is not republished. Eleven legacy names remain with current schemas; unsupported get_workspace is removed. get_link now uses link_id/external_id/domain+key selectors, get_link_stats uses current analytics parameters and domain reads use current list fields. New folder/partner/program-application/commission/conversion/bounty/discount/embed/QR routes follow current primary contracts.

All mutations now need confirmation, private account files/profiles use the documented new config, PNG/embed outputs require a new output_file, and reviewed batches require an exact hash. Native body JSON retains camelCase; query/path wrapper flags use snake-derived dashes. There is no invented account-wide workspace identity read or legacy route alias. Preserve private legacy history; do not push old refs or private credential files. Record future provider changes in dated changelog/provenance, meaningful fixtures and complete repo/CMS/client docs before release.
