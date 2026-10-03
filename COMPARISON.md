# Dub comparisons

| Offering | Reviewed version/surface | Strengths and limits |
| --- | --- | --- |
| [Official Links MCP](https://mcp.dub.sh/mcp/dub-links) | Public listed 32 tools, checked 2026-10-03 | Hosted OAuth or headless key access, links/bulk operations, analytics/events, QR, customers/conversions, domains/tags/folders. Count is listed documentation, not authenticated discovery. |
| [Official Partners MCP](https://mcp.dub.sh/mcp/dub-partners) | Public listed 25 tools, checked 2026-10-03 | Hosted partner/application/bounty/commission workflows. Overlapping tools must not be summed as unique coverage. Client approval behavior was not authenticated here. |
| [Official CLI](https://www.npmjs.com/package/dub-cli) | dub-cli 0.0.13, bin dub, source 53808cb1e89254fd0746bd3294b434866c9d34a6 | OAuth login, private configuration, domain selection, shorten and link search. Actual released shorten command constructed one POST without a confirmation flag in an intercepted fixture. No provider request or account outcome was tested. No documented shared exact reviewed batch/mandatory read-only guard in this inspected command surface. |
| [Official SDK](https://github.com/dubinc/dub-ts) | dub 0.73.5, source eff8e92e06dcd77c03155b03ea7575ccf409cc21 | Broad typed application API, optional pagination/retry configuration and custom HTTP client. Default retries are none, not an owned improvement. Current provider schema has program-application routes newer than this SDK's partner-application snapshot. SDK is separate from official dub-cli. |
| [Community MCP](https://github.com/Gitmaxd/dubco-mcp-server-npm) | Pinned source 08bc2649fdbc2d338dab81d3c8db829b9a95c8a6 | Three inspected create/update/delete link tools using DUBCO_API_KEY. No task CLI bin, private profile routing or common direct-call guard found in this reviewed source. Source inspection is not a runtime benchmark. |
| This owned companion | Local stdio MCP, shared task CLI and versioned desktop bundle | 61 tools, 22 reads/helpers and 39 confirmed operations. Current 57 native routes, isolated workspace profiles, exact reviewed link/tag/folder batches, exclusive private QR/embed-token files and shared direct-call policy. No hosted OAuth, official session import, browser dashboard or proven task-token winner. |

Dub already has an official CLI, hosted action MCPs, native bulk actions, scoped/read-only workspace keys and useful provider logs. None are described as missing. The owned product qualifies through verified shared local confirmation/direct-call read-only rules and exact payload/profile/order batch review, plus private generated-credential delivery. The real official CLI baseline made one intercepted POST without a confirmation flag; our same create_link refuses before fetch until explicitly approved. This does not establish missing approvals in the hosted MCP.

Official SDK delete was separately exercised through its real export and injected HTTP, with one intentionally unsuccessful fixture request and no mandatory confirmation argument. Neither fixture proves a successful account task or universal superiority. A human/client can already coordinate official tools; our exact hash provides a repeatable local request review boundary, not a unique ability to do bulk work or cryptographic human approval.

The current API was fetched from the official SDK workflow's observed source https://api.dub.co. Its 57 operations rename list/approve/reject partner applications to /program-applications. Source/provenance records both snapshots and sanitized hashes. Native schemas are converted to Ajv JSON Schema; malformed positive exclusiveMinimum booleans without a numeric minimum are documented as explicit local positive pagination/event-quantity validation, not asserted SDK behavior.


| Surface | What the agent receives | Verified scope |
| --- | --- | --- |
| Local MCP | Client-loaded schemas and requested results | Actual full/read-only discovery and shared policy fixtures |
| Task CLI | Discovered help/schema and selected command results | Actual house SDK bridge, same handlers/guard |
| Official MCP/CLI | Provider tools and OAuth workflows | Current docs, pinned CLI and controlled request fixture |

Fresh matched successful Codex task/token measurements are pending. Tool counts, schema characters, another client's results and --select are not an efficiency percentage. Measure actual client/model/package versions, loading mode, comparable successful task, API quota, input/output/cache usage and latency. Claude Code benchmarking remains deferred; it is optional for current Codex work.
