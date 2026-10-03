<img src="https://cdn.navid.me/repos/dubinc-dub-logo.png" alt="Dub" width="88">

# Dub MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/dub-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/dub-mcp-cli)
[![CI](https://github.com/thenavidm/dub-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/dub-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Dub MCP server and CLI for Codex and AI agents. 61 shared tools for current link, analytics, conversion and partner workflows, private workspace profiles and exact reviewed link batches.

One package provides a task CLI, local stdio MCP and versioned desktop bundle. Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=dub-mcp-cli&utm_content=readme). Complete setup: [navid.me](https://navid.me/mcp-servers/dub?utm_source=github&utm_medium=referral&utm_campaign=dub-mcp-cli&utm_content=guide).

<img src="https://cdn.navid.me/repos/dub-mcp-cli-retina.gif" alt="Illustrated Dub workflow using the shared navid.me terminal" width="520">

The terminal illustrates actual commands, not a recorded provider account session. Node 22+ is required for manual installs; private workspace API access and provider plans/costs remain separate.

## Two ways to use it

### Command line

```bash
dub-cli tools
dub-cli list-links --page-size 5 --account work --agent
dub-cli get-link --link-id YOUR_LINK_ID --account work --agent
```

### MCP server, for your AI app

```bash
codex mcp add dub --env DUB_TOKEN_FILE=/absolute/private/dub.txt -- npx -y @thenavidm/dub-mcp-cli@latest
```

### Which one

| Where you work | Route |
| --- | --- |
| Codex / Cursor / shell agents | Task CLI, local MCP or both |
| Claude Desktop | Versioned custom extension or manual stdio |
| Scripts / CI | Shared task CLI and approval/workspace routing |
| Remote-only clients / current provider guide | Official hosted MCP |

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| Links and native bulk | list-links / create-link / bulk-create-links | list_links / create_link / bulk_create_links |
| Analytics and events | get-link-stats / list-events | get_link_stats / list_events |
| Tags, folders and domains | list-tags / list-folders / list-domains | list_tags / list_folders / list_domains |
| Partners and applications | list-partners / list-program-applications | list_partners / list_program_applications |
| Financial records | list-commissions / list-payouts | list_commissions / list_payouts |
| Conversion tracking | track-lead / track-sale / track-open | track_lead / track_sale / track_open |
| Private PNG/embed output | get-qr-code / create-referrals-embed-token | get_qr_code / create_referrals_embed_token |
| Exact ordered review/submission | preview-link-batch / submit-link-batch | preview_link_batch / submit_link_batch |
| Private profiles/native schemas | list-accounts / get-operation-schema | list_accounts / get_operation_schema |

## Contents

| Number | Section | What it covers |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | Requested link/partner work |
| 2 | [Quick install](#2-quick-install) | npm binaries and discovery |
| 3 | [Set up Dub access](#3-set-up-dub-access) | Workspace keys, quotas and revocation |
| 4 | [Connect your client](#4-connect-your-client) | Codex first and supported clients |
| 5 | [Check it works](#5-check-it-works) | Local checks and deliberate read |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | JSON, private outputs and stable exits |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | Surface choice and pending usage evidence |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | All 61 tools and 57 native routes |
| 9 | [Link and partner workflows](#9-link-and-partner-workflows) | Link changes, partners, financial/private output |
| 10 | [Exact reviewed batches and pagination](#10-exact-reviewed-batches-and-pagination) | Exact approval, partial receipts and native pages |
| 11 | [Several private accounts](#11-several-private-accounts) | Private workspace selection without fallback |
| 12 | [Writing safely](#12-writing-safely) | Shared confirmation/read-only/audit rules |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | One catalogue, SDK bridge and pinned schema |
| 14 | [Your data](#14-your-data) | Private provider payloads, credentials and files |
| 15 | [Environment variables](#15-environment-variables) | Credentials, safety and request tuning |
| 16 | [Updates and removal](#16-updates-and-removal) | npm/desktop updates and revocation |
| 17 | [Troubleshooting](#17-troubleshooting) | Concrete failure outcomes and next actions |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | Official MCP/CLI/SDK and pinned community |
| 19 | [Versions and migration](#19-versions-and-migration) | Locked versions and legacy breaking changes |
| 20 | [FAQ](#20-faq) | Twenty provider-specific expanding answers |

## 1. What you can ask it

- Find the intended workspace's short links and inspect one exact link.
- Review and create only the approved destination/slug, including native tags and folders.
- Read eligible analytics/events using the precise date range and filters.
- Review ordered link/tag/folder tasks, then submit only the matching approved batch.
- Read partners/applications/commissions/payouts and approve only requested changes.
- Write one requested QR PNG or temporary referral embed credential into a new private file.

Actual discovery exposes **61 tools: 22 reads/helpers and 39 confirmed operations**. Fifty-seven current API operations and four local workflow helpers share one implementation. The old twelve-tool MCP had no declared task CLI; eleven names remain, and unsupported get_workspace is removed. list_accounts is local profile labels, not provider identity.

## 2. Quick install

```bash
npm install -g @thenavidm/dub-mcp-cli@latest
dub-cli --version
dub-cli tools
dub-cli schema create-link
dub-cli login
```

Node 22+ is required for manual CLI/local MCP. Discovery works without authentication. See [INSTALL.md](INSTALL.md) for every advertised client/OS and the versioned [desktop bundle](https://github.com/thenavidm/dub-mcp-cli/releases/download/v2.0.0/dub-2.0.0.mcpb). The official dub-cli package installs a different binary, dub; our binary is dub-cli.

## 3. Set up Dub access

### Private workspace access

1. Sign into the intended [Dub workspace](https://app.dub.co). Open Settings → API Keys / tokens. Verify the workspace before copying a key.
2. Create only the needed all-access, read-only or restricted link/analytics/domain/tag permissions. REST keys are workspace-specific; native read-only and workspace isolation already exist in Dub.
3. Store the key outside repositories as DUB_API_KEY in private user settings or DUB_TOKEN_FILE pointing to an absolute token-only file. On macOS/Linux use a private 0700 directory and 0600 regular non-symlink file, at most 64 KiB. On Windows restrict ACLs to yourself; POSIX mode checks do not verify ACLs.
4. Run dub-cli doctor for local settings. Deliberately run doctor --network for one GET /links?pageSize=1; it reports the returned count without echoing the link. This proves that read, not workspace ownership or every permission.
5. Discover actual link IDs and fields, review the requested change, and approve only that operation or matching reviewed batch. Do not delete links, register domains, track sales or change financial records just to test installation.

REST keys are sent only to https://api.dub.co as Authorization: Bearer. The official hosted MCP accepts OAuth or the documented Mcp-Dub-Token header; do not substitute that header for REST Bearer. Official dub CLI OAuth uses its own private session and scopes. This wrapper never imports those sessions, starts OAuth, loads .env, purchases access or saves a key through login. login prints private setup instructions only.

DUB_ACCOUNTS is a private array of unique {name,api_key,token_file} profiles. A token file overrides only that selected profile's key and caches until process restart. Profiles never fall back to DUB_API_KEY or another account when credentials are missing. Labels do not verify provider ownership. A tenantId filter is customer segmentation within a workspace, not another workspace's authentication.

### Plans, quotas and provider effects

The AGPL wrapper is free. Dub subscription limits, partner-program eligibility, domain-registration charges, conversions and financial actions remain provider costs and permissions. Check [current plans](https://dub.co/pricing) and [API limits](https://dub.co/docs/api-reference/rate-limits).

Documented standard per-key limits are Free 60/minute, Pro 600/minute, Business 1200/minute and Advanced 3000/minute; Enterprise is custom. Analytics/events additionally list Free unavailable, Pro two requests/second, Business four/second and Advanced eight/second. Successful installation does not unlock paid analytics. The default 1100 ms process-wide request-start spacing is conservative for one Free key; other processes/apps share its quota. It is not a guaranteed limiter for all plans or concurrent clients.

No request automatically retries, including 429, redirects, timeouts or 5xx. Respect Retry-After before deliberately repeating a read. Inspect actual provider state before repeating an unknown mutation. Requests are capped at 1 MiB and responses at 5 MiB. Each explicit list call reads one native page: links/customers/commissions support mutually exclusive startingAfter/endingBefore cursors; other families use their documented page/pageSize or limit. Deprecated page parameters remain marked, cannot be mixed with cursors, and require positive integers. There is no invented all_pages option or complete-backup claim.

Native bulk link creation/update/deletion already supports up to 100 items. Bulk create omits custom previews and webhook events, and HTTP 200 can mix successful links with per-link errors. The local reviewed batch is a separate ordered one-to-twenty link/tag/folder workflow, with all payloads checked and exact approval hash before first request. A bulk task can still affect up to 100 records; twenty tasks is not a twenty-record budget.

Domain deletion is irreversible and deletes its links. Partner ban cancels commissions and deletes links; financial changes and customer deletion need explicit user intent. create_commission can return HTTP 202 with a task receipt: acceptance is not completed financial work. Tracking events can affect analytics and commissions. No payout execution endpoint is invented.

### Rotation and revocation

Revoke the intended key in the correct workspace, replace private settings/files and restart every process. Native key/user role changes apply at the provider; machine-user keys share their owner's permissions and deleting a machine user revokes its keys. Do not create a machine user merely to test this package. Revoke official OAuth integrations separately. Removing npm/client entries does not revoke keys, undo links/events/commissions, refund a registered domain or remove saved private output files.

## 4. Connect your client

[INSTALL.md](INSTALL.md) leads with Codex and covers Claude Code, Claude Desktop extension/manual stdio, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Cline, Docker and other local stdio clients on macOS/Windows/Linux. Launch npx -y @thenavidm/dub-mcp-cli@latest with private environment settings. GUI/remote processes have their own filesystem and environment; restart/reconnect after settings or versions change.

Remote-only clients use Dub's official hosted MCP. The documented local mcp-remote route is a proxy of that hosted product. Our package supplies local stdio, not a public HTTP relay. Install SKILL.md in your agent's supported skill location if using the CLI; npm does not register a skill automatically.

```bash
codex mcp add dub --env DUB_TOKEN_FILE=/absolute/private/dub.txt -- npx -y @thenavidm/dub-mcp-cli@latest
```

## 5. Check it works

```bash
dub-cli --version
dub-cli tools
dub-cli list-accounts --agent
dub-cli doctor
dub-cli doctor --network
dub-cli list-links --page-size 1 --account work --agent
```

Local doctor reports profile count/default/policy without loading credentials or claiming authentication. --network opts into exactly one read, with count only. Actual account role/ownership, analytics plan, every endpoint and writes remain separate checks. Never use a destructive or paid call as an install test.

## 6. Output, flags and exit codes

Provider JSON returns as objects/arrays through both surfaces. The CLI emits JSON on stderr for failures. QR PNGs and generated publicToken credentials go only into exclusive private output files; returned data contains saved-file metadata, not the bytes/key. HTTP 202 commissions return accepted:true/http_status:202/result, not a finished commission. Native bulk-create HTTP 200 can contain per-link errors: inspect every item; CLI exit 0 alone is not per-item success.

| Flag | Contract |
| --- | --- |
| --agent | Compact JSON, no prompt/color; --yes does not approve writes |
| --select a,b.c | Local response field selection; does not reduce provider calls/quota |
| --confirm | Only the requested mutation or output-file write |
| --account NAME | Exact private profile |
| --payload JSON | Complete native body; arrays repeat once per item or use payload_file |
| --payload-file PATH | Absolute regular non-symlink JSON file, at most 1 MiB |
| --tasks JSON | Repeat per ordered task object; never pass one whole JSON array |
| --review-sha256 SHA256 | Hash from exact matching local batch review |
| --output-file PATH | New absolute exclusive private output file; no overwrite |

Native body flag names retain the current schema's camelCase, such as --externalId; query/path flags use snake-derived --page-size/--link-id. For nullable fields, unions and top-level commission oneOf bodies prefer complete payload JSON or a private JSON file; help/schema are authoritative.

| Exit | Meaning |
| --- | --- |
| 0 | Request/local operation worked; still inspect semantic result/per-link errors/accepted state |
| 2 | Invalid input or refused write |
| 3 | Resource not found |
| 4 | Provider authentication/permission error |
| 5 | Other provider/network/API failure |
| 7 | Rate limit |
| 10 | Missing/broken private configuration |

```bash
dub-cli list-links --help
dub-cli schema create-commission
dub-cli get-link --link-id YOUR_LINK_ID --account work --agent
dub-cli create-link --payload '{"url":"https://example.com/requested","key":"requested"}' --account work --confirm --agent
```

## 7. MCP or CLI and token cost

| Surface | What the agent receives | Verified scope |
| --- | --- | --- |
| Local MCP | Client-loaded schemas and requested results | Actual full/read-only discovery and shared policy fixtures |
| Task CLI | Discovered help/schema and selected command results | Actual house SDK bridge, same handlers/guard |
| Official MCP/CLI | Provider tools and OAuth workflows | Current docs, pinned CLI and controlled request fixture |

Fresh matched successful Codex task/token measurements are pending. Tool counts, schema characters, another client's results and --select are not an efficiency percentage. Measure actual client/model/package versions, loading mode, comparable successful task, API quota, input/output/cache usage and latency. Claude Code benchmarking remains deferred; it is optional for current Codex work.

## 8. Every tool and argument

| MCP tool | CLI command | Native route / mode |
| --- | --- | --- |
| `create_link` | `dub-cli create-link` | POST /links; confirmation required |
| `list_links` | `dub-cli list-links` | GET /links; read/helper |
| `get_links_count` | `dub-cli get-links-count` | GET /links/count; read/helper |
| `get_link` | `dub-cli get-link` | GET /links/info; read/helper |
| `update_link` | `dub-cli update-link` | PATCH /links/{linkId}; confirmation required |
| `delete_link` | `dub-cli delete-link` | DELETE /links/{linkId}; confirmation required |
| `bulk_create_links` | `dub-cli bulk-create-links` | POST /links/bulk; confirmation required |
| `bulk_update_links` | `dub-cli bulk-update-links` | PATCH /links/bulk; confirmation required |
| `bulk_delete_links` | `dub-cli bulk-delete-links` | DELETE /links/bulk; confirmation required |
| `upsert_link` | `dub-cli upsert-link` | PUT /links/upsert; confirmation required |
| `get_link_stats` | `dub-cli get-link-stats` | GET /analytics; read/helper |
| `list_events` | `dub-cli list-events` | GET /events; read/helper |
| `create_tag` | `dub-cli create-tag` | POST /tags; confirmation required |
| `list_tags` | `dub-cli list-tags` | GET /tags; read/helper |
| `update_tag` | `dub-cli update-tag` | PATCH /tags/{id}; confirmation required |
| `delete_tag` | `dub-cli delete-tag` | DELETE /tags/{id}; confirmation required |
| `create_folder` | `dub-cli create-folder` | POST /folders; confirmation required |
| `list_folders` | `dub-cli list-folders` | GET /folders; read/helper |
| `update_folder` | `dub-cli update-folder` | PATCH /folders/{id}; confirmation required |
| `delete_folder` | `dub-cli delete-folder` | DELETE /folders/{id}; confirmation required |
| `create_domain` | `dub-cli create-domain` | POST /domains; confirmation required |
| `list_domains` | `dub-cli list-domains` | GET /domains; read/helper |
| `update_domain` | `dub-cli update-domain` | PATCH /domains/{slug}; confirmation required |
| `delete_domain` | `dub-cli delete-domain` | DELETE /domains/{slug}; confirmation required |
| `register_domain` | `dub-cli register-domain` | POST /domains/register; confirmation required |
| `check_domain_status` | `dub-cli check-domain-status` | GET /domains/status; read/helper |
| `track_lead` | `dub-cli track-lead` | POST /track/lead; confirmation required |
| `track_sale` | `dub-cli track-sale` | POST /track/sale; confirmation required |
| `track_open` | `dub-cli track-open` | POST /track/open; confirmation required |
| `list_customers` | `dub-cli list-customers` | GET /customers; read/helper |
| `get_customer` | `dub-cli get-customer` | GET /customers/{id}; read/helper |
| `update_customer` | `dub-cli update-customer` | PATCH /customers/{id}; confirmation required |
| `delete_customer` | `dub-cli delete-customer` | DELETE /customers/{id}; confirmation required |
| `create_partner` | `dub-cli create-partner` | POST /partners; confirmation required |
| `list_partners` | `dub-cli list-partners` | GET /partners; read/helper |
| `create_partner_link` | `dub-cli create-partner-link` | POST /partners/links; confirmation required |
| `retrieve_partner_links` | `dub-cli retrieve-partner-links` | GET /partners/links; read/helper |
| `upsert_partner_link` | `dub-cli upsert-partner-link` | PUT /partners/links/upsert; confirmation required |
| `retrieve_partner_analytics` | `dub-cli retrieve-partner-analytics` | GET /partners/analytics; read/helper |
| `ban_partner` | `dub-cli ban-partner` | POST /partners/ban; confirmation required |
| `deactivate_partner` | `dub-cli deactivate-partner` | POST /partners/deactivate; confirmation required |
| `list_program_applications` | `dub-cli list-program-applications` | GET /program-applications; read/helper |
| `approve_program_application` | `dub-cli approve-program-application` | POST /program-applications/approve; confirmation required |
| `reject_program_application` | `dub-cli reject-program-application` | POST /program-applications/reject; confirmation required |
| `list_discount_codes` | `dub-cli list-discount-codes` | GET /discount-codes; read/helper |
| `create_discount_code` | `dub-cli create-discount-code` | POST /discount-codes; confirmation required |
| `delete_discount_code` | `dub-cli delete-discount-code` | DELETE /discount-codes/{idOrCode}; confirmation required |
| `create_commission` | `dub-cli create-commission` | POST /commissions; confirmation required |
| `list_commissions` | `dub-cli list-commissions` | GET /commissions; read/helper |
| `update_commission` | `dub-cli update-commission` | PATCH /commissions/{id}; confirmation required |
| `bulk_update_commissions` | `dub-cli bulk-update-commissions` | PATCH /commissions/bulk; confirmation required |
| `list_payouts` | `dub-cli list-payouts` | GET /payouts; read/helper |
| `create_referrals_embed_token` | `dub-cli create-referrals-embed-token` | POST /tokens/embed/referrals; confirmation required |
| `get_qr_code` | `dub-cli get-qr-code` | GET /qr; confirmation required |
| `list_bounty_submissions` | `dub-cli list-bounty-submissions` | GET /bounties/{bountyId}/submissions; read/helper |
| `approve_bounty_submission` | `dub-cli approve-bounty-submission` | POST /bounties/{bountyId}/submissions/{submissionId}/approve; confirmation required |
| `reject_bounty_submission` | `dub-cli reject-bounty-submission` | POST /bounties/{bountyId}/submissions/{submissionId}/reject; confirmation required |
| `list_accounts` | `dub-cli list-accounts` | Local workflow; read/helper |
| `get_operation_schema` | `dub-cli get-operation-schema` | Local workflow; read/helper |
| `preview_link_batch` | `dub-cli preview-link-batch` | Local workflow; read/helper |
| `submit_link_batch` | `dub-cli submit-link-batch` | Local workflow; confirmation required |

#### create_link

`dub-cli create-link`

Create a link for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.payload.tagIds**


**input.payload.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagIds anyOf branch 2**


**input.payload.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames**


**input.payload.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames anyOf branch 2**


**input.payload.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.testVariants**


**input.payload.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload.webhookIds**


**input.payload.webhookIds[]**

Native JSON value; inspect the full schema for validation.

#### list_links

`dub-cli list-links`

Retrieve a paginated list of links for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned. |
| `tag_id` | No; body/guard requirements still apply | string | Deprecated: Use `tagIds` instead. The tag ID to filter the links by. Deprecated native compatibility field. |
| `tag_ids` | No; body/guard requirements still apply | JSON | The tag IDs to filter the links by. |
| `tag_names` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folder_id` | No; body/guard requirements still apply | string | The folder ID to filter the links by. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the links by. The search term will be matched against the short link slug and the destination url. |
| `user_id` | No; body/guard requirements still apply | string | The user ID to filter the links by. |
| `tenant_id` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. If set, will only return links for the specified tenant. |
| `show_archived` | No; body/guard requirements still apply | boolean | Whether to include archived links in the response. Defaults to `false` if not provided. default: `false`. |
| `with_tags` | No; body/guard requirements still apply | boolean | DEPRECATED. Filter for links that have at least one tag assigned to them. default: `false`. Deprecated native compatibility field. |
| `ending_before` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `starting_after` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

**input.tag_ids**


**input.tag_ids anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tag_ids anyOf branch 2**


**input.tag_ids.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tag_names**


**input.tag_names anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tag_names anyOf branch 2**


**input.tag_names.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### get_links_count

`dub-cli get-links-count`

Retrieve the number of links for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned. |
| `tag_id` | No; body/guard requirements still apply | string | Deprecated: Use `tagIds` instead. The tag ID to filter the links by. Deprecated native compatibility field. |
| `tag_ids` | No; body/guard requirements still apply | JSON | The tag IDs to filter the links by. |
| `tag_names` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folder_id` | No; body/guard requirements still apply | string | The folder ID to filter the links by. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the links by. The search term will be matched against the short link slug and the destination url. |
| `user_id` | No; body/guard requirements still apply | string | The user ID to filter the links by. |
| `tenant_id` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. If set, will only return links for the specified tenant. |
| `show_archived` | No; body/guard requirements still apply | boolean | Whether to include archived links in the response. Defaults to `false` if not provided. default: `false`. |
| `with_tags` | No; body/guard requirements still apply | boolean | DEPRECATED. Filter for links that have at least one tag assigned to them. default: `false`. Deprecated native compatibility field. |
| `group_by` | No; body/guard requirements still apply | JSON | The field to group the links by. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

**input.tag_ids**


**input.tag_ids anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tag_ids anyOf branch 2**


**input.tag_ids.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tag_names**


**input.tag_names anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tag_names anyOf branch 2**


**input.tag_names.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.group_by**


**input.group_by anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.group_by anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.group_by anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.group_by anyOf branch 4**

Native JSON value; inspect the full schema for validation.

#### get_link

`dub-cli get-link`

Retrieve the info for a link.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain of the link to retrieve. E.g. for `d.to/github`, the domain is `d.to`. minLength: `1`. |
| `key` | No; body/guard requirements still apply | string | The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`. minLength: `1`. |
| `link_id` | No; body/guard requirements still apply | string | The unique ID of the short link. |
| `external_id` | No; body/guard requirements still apply | string | This is the ID of the link in the your database. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### update_link

`dub-cli update-link`

Update a link for the authenticated workspace. If there's no change, returns it as it is.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `link_id` | Yes | string | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.image**


**input.image anyOf branch 1**


**input.image.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.image.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.image anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.geo**


**input.geo allOf branch 1**

Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.payload.tagIds**


**input.payload.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagIds anyOf branch 2**


**input.payload.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames**


**input.payload.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames anyOf branch 2**


**input.payload.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.image**


**input.payload.image anyOf branch 1**


**input.payload.image.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.image.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload.image anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload.geo**


**input.payload.geo allOf branch 1**

Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information.

**input.payload.testVariants**


**input.payload.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload.webhookIds**


**input.payload.webhookIds[]**

Native JSON value; inspect the full schema for validation.

#### delete_link

`dub-cli delete-link`

Delete a link for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `link_id` | Yes | string | The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### bulk_create_links

`dub-cli bulk-create-links`

Bulk create up to 100 links for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | array | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**


**input.payload[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.payload[].tagIds**


**input.payload[].tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload[].tagIds anyOf branch 2**


**input.payload[].tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload[].tagNames**


**input.payload[].tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload[].tagNames anyOf branch 2**


**input.payload[].tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload[].testVariants**


**input.payload[].testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload[].webhookIds**


**input.payload[].webhookIds[]**

Native JSON value; inspect the full schema for validation.

#### bulk_update_links

`dub-cli bulk-update-links`

Bulk update up to 100 links with the same data for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkIds` | No; body/guard requirements still apply | array | The IDs of the links to update. Takes precedence over `externalIds`. maxItems: `100`. default: `[]`. |
| `externalIds` | No; body/guard requirements still apply | array | The external IDs of the links to update as stored in your database. maxItems: `100`. default: `[]`. |
| `data` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.linkIds**


**input.linkIds[]**

Native JSON value; inspect the full schema for validation.

**input.externalIds**


**input.externalIds[]**

Native JSON value; inspect the full schema for validation.

**input.data**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.data.tagIds**


**input.data.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.data.tagIds anyOf branch 2**


**input.data.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.data.tagNames**


**input.data.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.data.tagNames anyOf branch 2**


**input.data.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.data.testVariants**


**input.data.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.data.webhookIds**


**input.data.webhookIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkIds` | No; body/guard requirements still apply | array | The IDs of the links to update. Takes precedence over `externalIds`. maxItems: `100`. default: `[]`. |
| `externalIds` | No; body/guard requirements still apply | array | The external IDs of the links to update as stored in your database. maxItems: `100`. default: `[]`. |
| `data` | Yes | object | Native field; use the reviewed provider reference. |

**input.payload.linkIds**


**input.payload.linkIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload.externalIds**


**input.payload.externalIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload.data**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.payload.data.tagIds**


**input.payload.data.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.data.tagIds anyOf branch 2**


**input.payload.data.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.data.tagNames**


**input.payload.data.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.data.tagNames anyOf branch 2**


**input.payload.data.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.data.testVariants**


**input.payload.data.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload.data.webhookIds**


**input.payload.data.webhookIds[]**

Native JSON value; inspect the full schema for validation.

#### bulk_delete_links

`dub-cli bulk-delete-links`

Bulk delete up to 100 links for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `link_ids` | Yes | array | Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

**input.link_ids**


**input.link_ids[]**

Native JSON value; inspect the full schema for validation.

#### upsert_link

`dub-cli upsert-link`

Upsert a link for the authenticated workspace by its URL. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.payload.tagIds**


**input.payload.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagIds anyOf branch 2**


**input.payload.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames**


**input.payload.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.tagNames anyOf branch 2**


**input.payload.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.testVariants**


**input.payload.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload.webhookIds**


**input.payload.webhookIds[]**

Native JSON value; inspect the full schema for validation.

#### get_link_stats

`dub-cli get-link-stats`

Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the `event` and `type` query parameters.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `event` | No; body/guard requirements still apply | string | The type of event to retrieve analytics for. Defaults to `clicks`. enum: `["clicks", "leads", "sales", "composite"]`. default: `"clicks"`. |
| `group_by` | No; body/guard requirements still apply | string | The parameter to group the analytics data points by. Defaults to `count` if undefined. enum: `["count", "timeseries", "continents", "regions", "countries", "cities", "devices", "browsers", "os", "trigger", "triggers", "event_names", "referers", "referer_urls", "top_folders", "top_link_tags", "top_domains", "top_links", "top_urls", "top_base_urls", "top_partners", "top_groups", "top_partner_tags", "utm_sources", "utm_mediums", "utm_campaigns", "utm_terms", "utm_contents"]`. default: `"count"`. |
| `domain` | No; body/guard requirements still apply | string | The domain to filter analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `dub.co`, `dub.co,google.com`, `-spam.com`. |
| `key` | No; body/guard requirements still apply | string | The slug of the short link to retrieve analytics for. Must be used along with the corresponding `domain` of the short link to fetch analytics for a specific short link. |
| `link_id` | No; body/guard requirements still apply | string | The unique ID of the link to retrieve analytics for.Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `link_123`, `link_123,link_456`, `-link_789`. |
| `external_id` | No; body/guard requirements still apply | string | The ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| `tenant_id` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tenant_123`, `tenant_123,tenant_456`, `-tenant_789`. |
| `tag_id` | No; body/guard requirements still apply | string | The tag ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tag_123`, `tag_123,tag_456`, `-tag_789`. |
| `folder_id` | No; body/guard requirements still apply | string | The folder ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `folder_123`, `folder_123,folder_456`, `-folder_789`. If not provided, return analytics for all links. |
| `partner_tag_id` | No; body/guard requirements still apply | string | The partner tag ID(s) to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `ptag_123`, `ptag_123,ptag_456`, `-ptag_789`. |
| `group_id` | No; body/guard requirements still apply | string | The group ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `grp_123`, `grp_123,grp_456`, `-grp_789`. |
| `partner_id` | No; body/guard requirements still apply | string | The ID of the partner to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `pn_123`, `pn_123,pn_456`, `-pn_789`. |
| `customer_id` | No; body/guard requirements still apply | string | The ID of the customer to retrieve analytics for. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `country` | No; body/guard requirements still apply | string | The country to retrieve analytics for. Must be passed as a 2-letter ISO 3166-1 country code (see https://d.to/geo). Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `US`, `US,BR,FR`, `-US`. |
| `city` | No; body/guard requirements still apply | string | The city to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `New York`, `New York,London`, `-New York`. |
| `region` | No; body/guard requirements still apply | string | The ISO 3166-2 region code to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NY`, `NY,CA`, `-NY`. |
| `continent` | No; body/guard requirements still apply | string | The continent to retrieve analytics for. Valid values: AF, AN, AS, EU, NA, OC, SA. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NA`, `NA,EU`, `-AS`. |
| `device` | No; body/guard requirements still apply | string | The device to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Desktop`, `Mobile,Tablet`, `-Mobile`. |
| `browser` | No; body/guard requirements still apply | string | The browser to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Chrome`, `Chrome,Firefox,Safari`, `-IE`. |
| `os` | No; body/guard requirements still apply | string | The OS to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Windows`, `Mac,Windows,Linux`, `-Windows`. |
| `trigger` | No; body/guard requirements still apply | string | The trigger to retrieve analytics for. Valid values: qr, link, pageview. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `qr`, `qr,link`, `-qr`. If undefined, returns all trigger types. |
| `event_name` | No; body/guard requirements still apply | string | The conversion event name to retrieve analytics for. Only available for lead and sale events. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Sign up`, `Sign up,Purchase`, `-Sign up`. |
| `referer` | No; body/guard requirements still apply | string | The referer hostname to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google.com`, `google.com,twitter.com`, `-facebook.com`. |
| `referer_url` | No; body/guard requirements still apply | string | The full referer URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://google.com`, `https://google.com,https://twitter.com`, `-https://spam.com`. |
| `url` | No; body/guard requirements still apply | string | The destination URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://example.com`, `https://example.com,https://other.com`, `-https://spam.com`. |
| `utm_source` | No; body/guard requirements still apply | string | The UTM source to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google`, `google,twitter`, `-spam`. |
| `utm_medium` | No; body/guard requirements still apply | string | The UTM medium to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `cpc`, `cpc,social`, `-email`. |
| `utm_campaign` | No; body/guard requirements still apply | string | The UTM campaign to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `summer_sale`, `summer_sale,winter_sale`, `-old_campaign`. |
| `utm_term` | No; body/guard requirements still apply | string | The UTM term to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `utm_content` | No; body/guard requirements still apply | string | The UTM content to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `root` | No; body/guard requirements still apply | boolean | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| `sale_type` | No; body/guard requirements still apply | string | Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both. enum: `["new", "recurring"]`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `program_id` | No; body/guard requirements still apply | string | Deprecated: This is automatically inferred from your workspace's defaultProgramId. The ID of the program to retrieve analytics for. Deprecated native compatibility field. |
| `tag_ids` | No; body/guard requirements still apply | string | Deprecated: Use `tagId` instead. The tag IDs to retrieve analytics for. Deprecated native compatibility field. |
| `qr` | No; body/guard requirements still apply | boolean | Deprecated: Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### list_events

`dub-cli list-events`

Retrieve a paginated list of events for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `event` | No; body/guard requirements still apply | string | The type of event to retrieve analytics for. Defaults to 'clicks'. enum: `["clicks", "leads", "sales"]`. default: `"clicks"`. |
| `domain` | No; body/guard requirements still apply | string | The domain to filter analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `dub.co`, `dub.co,google.com`, `-spam.com`. |
| `key` | No; body/guard requirements still apply | string | The slug of the short link to retrieve analytics for. Must be used along with the corresponding `domain` of the short link to fetch analytics for a specific short link. |
| `link_id` | No; body/guard requirements still apply | string | The unique ID of the link to retrieve analytics for.Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `link_123`, `link_123,link_456`, `-link_789`. |
| `external_id` | No; body/guard requirements still apply | string | The ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| `tenant_id` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tenant_123`, `tenant_123,tenant_456`, `-tenant_789`. |
| `tag_id` | No; body/guard requirements still apply | string | The tag ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tag_123`, `tag_123,tag_456`, `-tag_789`. |
| `folder_id` | No; body/guard requirements still apply | string | The folder ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `folder_123`, `folder_123,folder_456`, `-folder_789`. If not provided, return analytics for all links. |
| `partner_tag_id` | No; body/guard requirements still apply | string | The partner tag ID(s) to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `ptag_123`, `ptag_123,ptag_456`, `-ptag_789`. |
| `group_id` | No; body/guard requirements still apply | string | The group ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `grp_123`, `grp_123,grp_456`, `-grp_789`. |
| `partner_id` | No; body/guard requirements still apply | string | The ID of the partner to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `pn_123`, `pn_123,pn_456`, `-pn_789`. |
| `customer_id` | No; body/guard requirements still apply | string | The ID of the customer to retrieve analytics for. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `country` | No; body/guard requirements still apply | string | The country to retrieve analytics for. Must be passed as a 2-letter ISO 3166-1 country code (see https://d.to/geo). Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `US`, `US,BR,FR`, `-US`. |
| `city` | No; body/guard requirements still apply | string | The city to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `New York`, `New York,London`, `-New York`. |
| `region` | No; body/guard requirements still apply | string | The ISO 3166-2 region code to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NY`, `NY,CA`, `-NY`. |
| `continent` | No; body/guard requirements still apply | string | The continent to retrieve analytics for. Valid values: AF, AN, AS, EU, NA, OC, SA. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NA`, `NA,EU`, `-AS`. |
| `device` | No; body/guard requirements still apply | string | The device to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Desktop`, `Mobile,Tablet`, `-Mobile`. |
| `browser` | No; body/guard requirements still apply | string | The browser to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Chrome`, `Chrome,Firefox,Safari`, `-IE`. |
| `os` | No; body/guard requirements still apply | string | The OS to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Windows`, `Mac,Windows,Linux`, `-Windows`. |
| `trigger` | No; body/guard requirements still apply | string | The trigger to retrieve analytics for. Valid values: qr, link, pageview. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `qr`, `qr,link`, `-qr`. If undefined, returns all trigger types. |
| `event_name` | No; body/guard requirements still apply | string | The conversion event name to retrieve analytics for. Only available for lead and sale events. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Sign up`, `Sign up,Purchase`, `-Sign up`. |
| `referer` | No; body/guard requirements still apply | string | The referer hostname to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google.com`, `google.com,twitter.com`, `-facebook.com`. |
| `referer_url` | No; body/guard requirements still apply | string | The full referer URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://google.com`, `https://google.com,https://twitter.com`, `-https://spam.com`. |
| `url` | No; body/guard requirements still apply | string | The destination URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://example.com`, `https://example.com,https://other.com`, `-https://spam.com`. |
| `utm_source` | No; body/guard requirements still apply | string | The UTM source to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google`, `google,twitter`, `-spam`. |
| `utm_medium` | No; body/guard requirements still apply | string | The UTM medium to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `cpc`, `cpc,social`, `-email`. |
| `utm_campaign` | No; body/guard requirements still apply | string | The UTM campaign to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `summer_sale`, `summer_sale,winter_sale`, `-old_campaign`. |
| `utm_term` | No; body/guard requirements still apply | string | The UTM term to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `utm_content` | No; body/guard requirements still apply | string | The UTM content to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `root` | No; body/guard requirements still apply | boolean | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| `sale_type` | No; body/guard requirements still apply | string | Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both. enum: `["new", "recurring"]`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `program_id` | No; body/guard requirements still apply | string | Deprecated: This is automatically inferred from your workspace's defaultProgramId. The ID of the program to retrieve analytics for. Deprecated native compatibility field. |
| `tag_ids` | No; body/guard requirements still apply | string | Deprecated: Use `tagId` instead. The tag IDs to retrieve analytics for. Deprecated native compatibility field. |
| `qr` | No; body/guard requirements still apply | boolean | Deprecated: Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both. Deprecated native compatibility field. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. default: `1`. |
| `limit` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `1000`. exclusiveMinimum: `0`. default: `100`. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the events by. The default is `timestamp`. enum: `["timestamp"]`. default: `"timestamp"`. |
| `order` | No; body/guard requirements still apply | string | DEPRECATED. Use `sortOrder` instead. enum: `["asc", "desc"]`. default: `"desc"`. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### create_tag

`dub-cli create-tag`

Create a tag for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |

#### list_tags

`dub-cli list-tags`

Retrieve a paginated list of tags for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the tags by. enum: `["name", "createdAt"]`. default: `"name"`. |
| `sort_order` | No; body/guard requirements still apply | string | The order to sort the tags by. enum: `["asc", "desc"]`. default: `"asc"`. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the tags by. |
| `ids` | No; body/guard requirements still apply | JSON | IDs of tags to filter by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

**input.ids**


**input.ids anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.ids anyOf branch 2**


**input.ids.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### update_tag

`dub-cli update-tag`

Update a tag in the workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the tag to update. |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |

#### delete_tag

`dub-cli delete-tag`

Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the tag to delete. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### create_folder

`dub-cli create-folder`

Create a folder for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The workspace-level access level settings for the folder. Default is `write` which allows full access to the folder for all team members. The other options are `read` (view-only access) and `null` (no access) and are only available on Business plans and above. enum: `["write", "read", null]`. default: `"write"`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The workspace-level access level settings for the folder. Default is `write` which allows full access to the folder for all team members. The other options are `read` (view-only access) and `null` (no access) and are only available on Business plans and above. enum: `["write", "read", null]`. default: `"write"`. |

#### list_folders

`dub-cli list-folders`

Retrieve a paginated list of folders for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | No; body/guard requirements still apply | string | The search term to filter the folders by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `50`. exclusiveMinimum: `0`. default: `50`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### update_folder

`dub-cli update-folder`

Update a folder in the workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the folder to update. |
| `name` | No; body/guard requirements still apply | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The access level of the folder within the workspace. enum: `["write", "read", null]`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The access level of the folder within the workspace. enum: `["write", "read", null]`. |

#### delete_folder

`dub-cli delete-folder`

Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the folder to delete. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### create_domain

`dub-cli create-domain`

Create a domain for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | No; body/guard requirements still apply | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.logo**


**input.logo anyOf branch 1**


**input.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |

**input.payload.logo**


**input.payload.logo anyOf branch 1**


**input.payload.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.payload.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

#### list_domains

`dub-cli list-domains`

Retrieve a paginated list of domains for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `archived` | No; body/guard requirements still apply | boolean | Whether to include archived domains in the response. Defaults to `false` if not provided. default: `false`. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the domains by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `50`. exclusiveMinimum: `0`. default: `50`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### update_domain

`dub-cli update-domain`

Update a domain for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.logo**


**input.logo anyOf branch 1**


**input.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | No; body/guard requirements still apply | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |

**input.payload.logo**


**input.payload.logo anyOf branch 1**


**input.payload.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.payload.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.payload.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

#### delete_domain

`dub-cli delete-domain`

Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | The domain name. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### register_domain

`dub-cli register-domain`

Register a domain for the authenticated workspace. Only available for Enterprise Plans.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain to claim. We only support .link domains for now. minLength: `1`. pattern: `".*\\.link$"`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | Yes | string | The domain to claim. We only support .link domains for now. minLength: `1`. pattern: `".*\\.link$"`. |

#### check_domain_status

`dub-cli check-domain-status`

Check if a domain name is available for purchase. You can check multiple domains at once.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domains` | Yes | JSON | The domains to search. We only support .link domains for now. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

**input.domains**


**input.domains anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.domains anyOf branch 2**


**input.domains.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### track_lead

`dub-cli track-lead`

Track a lead for a short link.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `clickId` | No; body/guard requirements still apply | string | The unique ID of the click that the lead conversion event is attributed to. You can read this value from `dub_id` cookie. [For deferred lead tracking]: If an empty string is provided, Dub will try to find an existing customer with the provided `customerExternalId` and use the `clickId` from the customer if found. |
| `eventName` | No; body/guard requirements still apply | string | The name of the lead event to track. Can also be used as a unique identifier to associate a given lead event for a customer for a subsequent sale event (via the `leadEventName` prop in `/track/sale`). minLength: `1`. maxLength: `255`. |
| `customerExternalId` | No; body/guard requirements still apply | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | The avatar URL of the customer. default: `null`. |
| `mode` | No; body/guard requirements still apply | string | The mode to use for tracking the lead event. `async` will not block the request; `wait` will block the request until the lead event is fully recorded in Dub; `deferred` will defer the lead event creation to a subsequent request. enum: `["async", "wait", "deferred"]`. default: `"async"`. |
| `eventQuantity` | No; body/guard requirements still apply | ['integer', 'null'] | The numerical value associated with this lead event (e.g., number of provisioned seats in a free trial). If defined as N, the lead event will be tracked N times. maximum: `100`. exclusiveMinimum: `0`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the lead event. Max 10,000 characters. default: `null`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `clickId` | Yes | string | The unique ID of the click that the lead conversion event is attributed to. You can read this value from `dub_id` cookie. [For deferred lead tracking]: If an empty string is provided, Dub will try to find an existing customer with the provided `customerExternalId` and use the `clickId` from the customer if found. |
| `eventName` | Yes | string | The name of the lead event to track. Can also be used as a unique identifier to associate a given lead event for a customer for a subsequent sale event (via the `leadEventName` prop in `/track/sale`). minLength: `1`. maxLength: `255`. |
| `customerExternalId` | Yes | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | The avatar URL of the customer. default: `null`. |
| `mode` | No; body/guard requirements still apply | string | The mode to use for tracking the lead event. `async` will not block the request; `wait` will block the request until the lead event is fully recorded in Dub; `deferred` will defer the lead event creation to a subsequent request. enum: `["async", "wait", "deferred"]`. default: `"async"`. |
| `eventQuantity` | No; body/guard requirements still apply | ['integer', 'null'] | The numerical value associated with this lead event (e.g., number of provisioned seats in a free trial). If defined as N, the lead event will be tracked N times. maximum: `100`. exclusiveMinimum: `0`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the lead event. Max 10,000 characters. default: `null`. |

#### track_sale

`dub-cli track-sale`

Track a sale for a short link.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `customerExternalId` | No; body/guard requirements still apply | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `amount` | No; body/guard requirements still apply | integer | The amount of the sale in cents (for all two-decimal currencies). If the sale is in a zero-decimal currency, pass the full integer value (e.g. `1580` JPY). Learn more: https://d.to/currency minimum: `0`. maximum: `9007199254740991`. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale. Accepts ISO 4217 currency codes. Sales will be automatically converted and stored as USD at the latest exchange rates. Learn more: https://d.to/currency default: `"usd"`. |
| `eventName` | No; body/guard requirements still apply | string | The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`. maxLength: `255`. default: `"Purchase"`. |
| `paymentProcessor` | No; body/guard requirements still apply | string | The payment processor via which the sale was made. enum: `["stripe", "shopify", "polar", "paddle", "apple", "revenuecat", "lemonsqueezy", "dub", "custom"]`. default: `"custom"`. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. default: `null`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the sale event. Max 10,000 characters when stringified. default: `null`. |
| `leadEventName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the lead event that occurred before the sale (case-sensitive). This is used to associate the sale event with a particular lead event (instead of the latest lead event for a link-customer combination, which is the default behavior). For direct sale tracking, this field can also be used to specify the lead event name. default: `null`. |
| `clickId` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The unique ID of the click that the sale conversion event is attributed to. You can read this value from `dub_id` cookie. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The avatar URL of the customer. default: `null`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `customerExternalId` | Yes | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `amount` | Yes | integer | The amount of the sale in cents (for all two-decimal currencies). If the sale is in a zero-decimal currency, pass the full integer value (e.g. `1580` JPY). Learn more: https://d.to/currency minimum: `0`. maximum: `9007199254740991`. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale. Accepts ISO 4217 currency codes. Sales will be automatically converted and stored as USD at the latest exchange rates. Learn more: https://d.to/currency default: `"usd"`. |
| `eventName` | No; body/guard requirements still apply | string | The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`. maxLength: `255`. default: `"Purchase"`. |
| `paymentProcessor` | No; body/guard requirements still apply | string | The payment processor via which the sale was made. enum: `["stripe", "shopify", "polar", "paddle", "apple", "revenuecat", "lemonsqueezy", "dub", "custom"]`. default: `"custom"`. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. default: `null`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the sale event. Max 10,000 characters when stringified. default: `null`. |
| `leadEventName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the lead event that occurred before the sale (case-sensitive). This is used to associate the sale event with a particular lead event (instead of the latest lead event for a link-customer combination, which is the default behavior). For direct sale tracking, this field can also be used to specify the lead event name. default: `null`. |
| `clickId` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The unique ID of the click that the sale conversion event is attributed to. You can read this value from `dub_id` cookie. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The avatar URL of the customer. default: `null`. |

#### track_open

`dub-cli track-open`

This endpoint is used to track when a user opens your app via a Dub-powered deep link (for both iOS and Android).

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `deepLink` | No; body/guard requirements still apply | string | The deep link that brought the user to the app. If left blank, Dub will fallback to probabilistic tracking by using the `dubDomain` parameter to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl maxLength: `32000`. |
| `dubDomain` | No; body/guard requirements still apply | string | Your deep link custom domain on Dub (e.g. `acme.link`). This is used in probabilistic tracking to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `deepLink` | No; body/guard requirements still apply | string | The deep link that brought the user to the app. If left blank, Dub will fallback to probabilistic tracking by using the `dubDomain` parameter to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl maxLength: `32000`. |
| `dubDomain` | No; body/guard requirements still apply | string | Your deep link custom domain on Dub (e.g. `acme.link`). This is used in probabilistic tracking to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl |

#### list_customers

`dub-cli list-customers`

Retrieve a paginated list of customers for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | string | A case-sensitive filter on the list based on the customer's `email` field. The value must be a string. Takes precedence over `externalId`. |
| `external_id` | No; body/guard requirements still apply | string | A case-sensitive filter on the list based on the customer's `externalId` field. The value must be a string. Takes precedence over `search`. |
| `search` | No; body/guard requirements still apply | string | A search query to filter customers by email, name, or customer ID (`cus_...`). If `email` or `externalId` is provided, this will be ignored. |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the customer's `country` field. |
| `link_id` | No; body/guard requirements still apply | string | A filter on the list based on the customer's `linkId` field (the referral link ID). |
| `program_id` | No; body/guard requirements still apply | string | Program ID to filter by. |
| `partner_id` | No; body/guard requirements still apply | string | Partner ID to filter by. |
| `include_expanded_fields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the customers by. The default is `createdAt`. enum: `["createdAt", "saleAmount", "firstSaleAt", "subscriptionCanceledAt"]`. default: `"createdAt"`. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `ending_before` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `starting_after` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### get_customer

`dub-cli get-customer`

Retrieve a customer by ID for the authenticated workspace. To retrieve a customer by external ID, prefix the ID with `ext_`.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `include_expanded_fields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### update_customer

`dub-cli update-customer`

Update a customer for the authenticated workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `include_expanded_fields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | No; body/guard requirements still apply | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | No; body/guard requirements still apply | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |
| `subscriptionCanceledAt` | No; body/guard requirements still apply | ['string', 'null'] | The date the customer canceled their subscription. Set to a timestamp to mark the subscription as canceled, or `null` to clear it (e.g. if they resubscribe). |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | No; body/guard requirements still apply | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | No; body/guard requirements still apply | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |
| `subscriptionCanceledAt` | No; body/guard requirements still apply | ['string', 'null'] | The date the customer canceled their subscription. Set to a timestamp to mark the subscription as canceled, or `null` to clear it (e.g. if they resubscribe). |

#### delete_customer

`dub-cli delete-customer`

Delete a customer from a workspace.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### create_partner

`dub-cli create-partner`

Creates or updates a partner record (upsert behavior). If a partner with the same email already exists, their program enrollment will be updated with the provided tenantId. If no existing partner is found, a new partner will be created using the supplied information.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | No; body/guard requirements still apply | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | Yes | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.payload.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.payload.linkProps.tagIds**


**input.payload.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagIds anyOf branch 2**


**input.payload.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames**


**input.payload.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames anyOf branch 2**


**input.payload.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.testVariants**


**input.payload.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

#### list_partners

`dub-cli list-partners`

List all partners for a partner program.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `group_id` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `groupId` field. |
| `status` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `status` field. enum: `["pending", "approved", "rejected", "invited", "declined", "deactivated", "banned", "archived"]`. |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `country` field. |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the partners by. The default is `totalSaleAmount`. enum: `["createdAt", "totalClicks", "totalLeads", "totalConversions", "totalSaleAmount", "totalCommissions", "netRevenue", "earningsPerClick", "averageLifetimeValue", "clickToLeadRate", "clickToConversionRate", "leadToConversionRate", "returnOnAdSpend"]`. default: `"totalSaleAmount"`. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `email` | No; body/guard requirements still apply | string | Filter the partner list based on the partner's `email`. The value must be a string. Takes precedence over `search`. |
| `tenant_id` | No; body/guard requirements still apply | string | Filter the partner list based on the partner's `tenantId`. The value must be a string. Combines with the other filters. |
| `search` | No; body/guard requirements still apply | string | A search query to filter partners by ID, name, email, company name, description, social platforms, or referral links. Partial matches are supported. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### create_partner_link

`dub-cli create-partner-link`

Create a link for a partner that is enrolled in your program.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | No; body/guard requirements still apply | ['string', 'null'] | The URL to shorten (if not provided, the program's default URL will be used). maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | No; body/guard requirements still apply | ['string', 'null'] | The URL to shorten (if not provided, the program's default URL will be used). maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.payload.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.payload.linkProps.tagIds**


**input.payload.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagIds anyOf branch 2**


**input.payload.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames**


**input.payload.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames anyOf branch 2**


**input.payload.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.testVariants**


**input.payload.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

#### retrieve_partner_links

`dub-cli retrieve-partner-links`

Retrieve a partner's links by their partner ID or tenant ID.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partner_id` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenant_id` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### upsert_partner_link

`dub-cli upsert-partner-link`

Upsert a link for a partner that is enrolled in your program. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | No; body/guard requirements still apply | string | The URL to upsert for. maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | Yes | string | The URL to upsert for. maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.payload.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.payload.linkProps.tagIds**


**input.payload.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagIds anyOf branch 2**


**input.payload.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames**


**input.payload.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.tagNames anyOf branch 2**


**input.payload.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.linkProps.testVariants**


**input.payload.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

#### retrieve_partner_analytics

`dub-cli retrieve-partner-analytics`

Retrieve analytics for a partner within a program. The response type vary based on the `groupBy` query parameter.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partner_id` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenant_id` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `group_by` | No; body/guard requirements still apply | string | The parameter to group the analytics data points by. Defaults to `count` if undefined. enum: `["top_links", "timeseries", "count"]`. default: `"count"`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### ban_partner

`dub-cli ban-partner`

Ban a partner from your program. This will disable all links and mark all commissions as canceled.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `reason` | No; body/guard requirements still apply | string | The reason for banning the partner. enum: `["tos_violation", "inappropriate_content", "fake_traffic", "fraud", "spam", "brand_abuse"]`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `reason` | Yes | string | The reason for banning the partner. enum: `["tos_violation", "inappropriate_content", "fake_traffic", "fraud", "spam", "brand_abuse"]`. |

#### deactivate_partner

`dub-cli deactivate-partner`

This will deactivate the partner from your program and disable all their active links. Their commissions and payouts will remain intact. You can reactivate them later if needed.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |

#### list_program_applications

`dub-cli list-program-applications`

Retrieve a paginated list of applications for your partner program. Filter by `status` to list pending, approved, or rejected applications.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `country` field. |
| `group_id` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `groupId` field. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `search` | No; body/guard requirements still apply | string | Filter applications by name, email, or company name. Partial matches are supported. An exact partner ID is also matched. |
| `status` | No; body/guard requirements still apply | string | Filter applications by status. One of `pending`, `approved`, or `rejected`. Defaults to `pending`. enum: `["pending", "approved", "rejected"]`. default: `"pending"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### approve_program_application

`dub-cli approve-program-application`

Approve a pending partner application to your program. The partner will be enrolled in the specified group and notified of the approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to approve. |
| `groupId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the group to assign the partner to. If not provided, the partner will be assigned to the group they applied to, or the program's default group if no application group is set. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | Yes | string | The ID of the partner to approve. |
| `groupId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the group to assign the partner to. If not provided, the partner will be assigned to the group they applied to, or the program's default group if no application group is set. |

#### reject_program_application

`dub-cli reject-program-application`

Reject a pending partner application to your program. The partner will be notified via email that their application was not approved.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to reject. |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the partner application. This will be shared with the partner via email. enum: `["needsMoreDetail", "doesNotMeetRequirements", "notTheRightFit", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | Additional details about the rejection. This will be shared with the partner via email. maxLength: `500`. |
| `reapplicationTimeframe` | No; body/guard requirements still apply | string | The mode for reapplying for the program. `instant`: The partner can reapply immediately. `standard`: The partner can reapply after 30 days. `never`: The partner can never reapply for the program. Defaults to `standard` if undefined. enum: `["instant", "standard", "never"]`. default: `"standard"`. |
| `flagForFraud` | No; body/guard requirements still apply | boolean | Whether to flag the partner for fraud review by the Dub team. Cannot be combined with `reapplicationTimeframe: instant`. |
| `flagForFraudReason` | No; body/guard requirements still apply | string | The reason for flagging the partner for fraud. Required when flagForFraud is true. maxLength: `2000`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | Yes | string | The ID of the partner to reject. |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the partner application. This will be shared with the partner via email. enum: `["needsMoreDetail", "doesNotMeetRequirements", "notTheRightFit", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | Additional details about the rejection. This will be shared with the partner via email. maxLength: `500`. |
| `reapplicationTimeframe` | No; body/guard requirements still apply | string | The mode for reapplying for the program. `instant`: The partner can reapply immediately. `standard`: The partner can reapply after 30 days. `never`: The partner can never reapply for the program. Defaults to `standard` if undefined. enum: `["instant", "standard", "never"]`. default: `"standard"`. |
| `flagForFraud` | No; body/guard requirements still apply | boolean | Whether to flag the partner for fraud review by the Dub team. Cannot be combined with `reapplicationTimeframe: instant`. |
| `flagForFraudReason` | No; body/guard requirements still apply | string | The reason for flagging the partner for fraud. Required when flagForFraud is true. maxLength: `2000`. |

#### list_discount_codes

`dub-cli list-discount-codes`

Retrieve a paginated list of discount codes in a program or filtered by partner, discount, or code.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partner_id` | No; body/guard requirements still apply | string | The ID of the partner to retrieve discount codes for. If omitted, returns discount codes for the whole program. |
| `discount_id` | No; body/guard requirements still apply | string | Filter discount codes by discount ID. |
| `code` | No; body/guard requirements still apply | string | Filter discount codes by the alphanumeric code (e.g. `PARTNER10OFF`). |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### create_discount_code

`dub-cli create-discount-code`

Create a discount code for a partner. The partner's group must already have a discount assigned to it, and the discount code must be associated with a link that is not already linked with another discount code.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `code` | No; body/guard requirements still apply | string | The discount code to create. If omitted, a unique code will be generated automatically from the partner's name. Stripe and Shopify codes can only contain letters, numbers, dashes, and underscores. Custom provider codes can contain any characters. maxLength: `100`. |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to create a discount code for. |
| `linkId` | No; body/guard requirements still apply | string | The ID of the partner's referral link to associate this discount code with. Each link can only have one discount code. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `code` | No; body/guard requirements still apply | string | The discount code to create. If omitted, a unique code will be generated automatically from the partner's name. Stripe and Shopify codes can only contain letters, numbers, dashes, and underscores. Custom provider codes can contain any characters. maxLength: `100`. |
| `partnerId` | Yes | string | The ID of the partner to create a discount code for. |
| `linkId` | Yes | string | The ID of the partner's referral link to associate this discount code with. Each link can only have one discount code. |

#### delete_discount_code

`dub-cli delete-discount-code`

Delete a discount code for a partner by its unique ID or alphanumeric code. This will also disable the code in your connected discount provider (Stripe, Shopify, or custom via `disccount.deleted` webhook).

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id_or_code` | Yes | string | The unique ID (e.g. `dcode_...`) or alphanumeric code (e.g. `ABC123`) of the discount code to delete. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

#### create_commission

`dub-cli create-commission`

Create one or more commissions (custom, lead or sale) for a partner. Custom commissions accept a negative `amount` to create a clawback. Commission creation is processed asynchronously – use the GET /commissions endpoint or webhooks to be notified when the commission is created.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**


**input.payload oneOf branch 1**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["custom"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `amount` | Yes | number | The commission earnings amount in cents. Use a negative amount to create a clawback. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | If not provided, the current date will be used. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the commission. Required for clawbacks (negative `amount`). May be a known clawback reason (`order_canceled`, `fraud`, `terms_violation`, `tracking_error`, `payment_failed`, `ineligible_partner`, `duplicate_commission`) or an arbitrary string (max 190 characters). maxLength: `190`. |

**input.payload oneOf branch 2**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["lead"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `customerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer ID to associate the commission with. Useful if the customer was already created in a prior operation and you want to associate the commission with it. |
| `customer` | No; body/guard requirements still apply | ['object', 'null'] | The full customer object to associate the commission with. Useful for creating the customer on demand. |
| `linkId` | No; body/guard requirements still apply | ['string', 'null'] | The partner link ID to associate the commission with. If not provided, default to the link with the most revenue. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | The date and time of the lead event. If not provided, defaults to the current date and time. |
| `lead` | No; body/guard requirements still apply | ['object', 'null'] | The lead event object to associate the commission with. |
| `leadEventDate` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `date` instead. The date and time of the lead event. If not provided, defaults to the current date and time. Deprecated native compatibility field. |
| `leadEventName` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `lead.eventName` instead. The name of the lead event. If not provided, defaults to 'Sign up'. default: `"Sign up"`. Deprecated native compatibility field. |

**input.payload.oneOf2.customer**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | Yes | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | Yes | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |

**input.payload.oneOf2.lead**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `eventName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the lead event to track. If not provided, defaults to 'Sign up'. minLength: `1`. maxLength: `255`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the lead event. Max 10,000 characters. default: `null`. |

**input.payload oneOf branch 3**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["sale"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `customerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer ID to associate the commission with. Useful if the customer was already created in a prior operation and you want to associate the commission with it. |
| `customer` | No; body/guard requirements still apply | ['object', 'null'] | The full customer object to associate the commission with. Useful for creating the customer on demand. |
| `linkId` | No; body/guard requirements still apply | ['string', 'null'] | The partner link ID to associate the commission with. If neither `linkId` nor `discountCode` is provided, default to the link with the most revenue. |
| `discountCode` | No; body/guard requirements still apply | ['string', 'null'] | The partner discount code to resolve the associated link. Use this when the link ID is unknown. Cannot be provided together with `linkId`. minLength: `1`. |
| `importStripeInvoices` | No; body/guard requirements still apply | ['boolean', 'null'] | When `true`, import all unimported paid Stripe invoices for the customer and create a commission for each. When `false`, create a single manual sale event using `sale.amount` (or deprecated `saleAmount`). default: `false`. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | Only used when `importStripeInvoices` is `false`. The date of the manual sale event. Defaults to the current date and time if not provided. |
| `sale` | No; body/guard requirements still apply | ['object', 'null'] | The sale event object to associate the commission with. |
| `saleEventDate` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `date` instead. Deprecated native compatibility field. |
| `saleAmount` | No; body/guard requirements still apply | ['number', 'null'] | Deprecated: Use `sale.amount` instead. Deprecated native compatibility field. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `sale.invoiceId` instead. Deprecated native compatibility field. |
| `productId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `sale.metadata.productId` instead. Deprecated native compatibility field. |

**input.payload.oneOf3.customer**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | Yes | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | Yes | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |

**input.payload.oneOf3.sale**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `amount` | No; body/guard requirements still apply | ['number', 'null'] | The amount of the sale in cents (for all two-decimal currencies). If the sale is in a zero-decimal currency, pass the full integer value (e.g. `1580` JPY). Learn more: https://d.to/currency |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale. Accepts ISO 4217 currency codes. Sales will be automatically converted and stored as USD at the latest exchange rates. Learn more: https://d.to/currency default: `"usd"`. |
| `eventName` | No; body/guard requirements still apply | string | The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`. maxLength: `255`. default: `"Purchase"`. |
| `paymentProcessor` | No; body/guard requirements still apply | string | The payment processor via which the sale was made. enum: `["stripe", "shopify", "polar", "paddle", "apple", "revenuecat", "lemonsqueezy", "dub", "custom"]`. default: `"custom"`. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. default: `null`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the sale event. Max 10,000 characters when stringified. default: `null`. |

#### list_commissions

`dub-cli list-commissions`

Retrieve a paginated list of commissions for your partner program.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | No; body/guard requirements still apply | string | Filter the list of commissions by type. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "sale" - "sale,lead" - "-click" enum: `["click", "lead", "sale", "referral", "custom"]`. |
| `customer_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated customer. |
| `payout_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated payout. |
| `bounty_submission_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated bounty submission. |
| `partner_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner. When specified, takes precedence over `tenantId`. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "partner_abc" - "partner_abc,partner_xyz" - "-partner_abc" |
| `tenant_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner's `tenantId` (their unique ID within your database). |
| `group_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner group. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "group_abc" - "group_abc,group_xyz" - "-group_abc" |
| `partner_tag_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner tag. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "ptag_abc" - "ptag_abc,ptag_xyz" - "-ptag_abc" |
| `invoice_id` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated invoice. Since invoiceId is unique on a per-program basis, this will only return one commission per invoice. |
| `status` | No; body/guard requirements still apply | string | Filter the list of commissions by their corresponding status. enum: `["pending", "processed", "paid", "refunded", "duplicate", "fraud", "canceled", "hold"]`. |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the list of commissions by. enum: `["createdAt", "amount"]`. default: `"createdAt"`. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order for the list of commissions. enum: `["asc", "desc"]`. default: `"desc"`. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve commissions for. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. default: `"all"`. |
| `start` | No; body/guard requirements still apply | string | The start date of the date range to filter the commissions by. |
| `end` | No; body/guard requirements still apply | string | The end date of the date range to filter the commissions by. |
| `timezone` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `query` | No; body/guard requirements still apply | string | Filter by lead or sale event metadata. Top-level keys only. Compares string values only :  numeric and boolean metadata values are not matched. Examples: - "metadata['key']='value'" - "metadata['key']!='value'" maxLength: `10000`. |
| `ending_before` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `starting_after` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### update_commission

`dub-cli update-commission`

Update an existing commission amount. This is useful for handling refunds (partial or full) or fraudulent sales.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The commission's unique ID on Dub. |
| `earnings` | No; body/guard requirements still apply | number | The new earnings amount for the commission. Paid commissions cannot be updated. If provided, will override the earnings calculated based on the sale amount and currency. minimum: `0`. |
| `saleAmount` | No; body/guard requirements still apply | number | The new absolute amount for the sale. Paid commissions cannot be updated. minimum: `0`. |
| `modifySaleAmount` | No; body/guard requirements still apply | number | Modify the current sale amount: use positive values to increase the amount, negative values to decrease it. Takes precedence over `saleAmount`. Paid commissions cannot be updated. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale amount to update. Accepts ISO 4217 currency codes. default: `"usd"`. |
| `status` | No; body/guard requirements still apply | string | Useful for marking a commission as pending, refunded, duplicate, canceled, or fraudulent. Takes precedence over `saleAmount` and `modifySaleAmount`. When a commission is marked as pending, refunded, duplicate, canceled, or fraudulent, it will be omitted from the payout, and the payout amount will be recalculated accordingly. Paid commissions cannot be updated. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |
| `amount` | No; body/guard requirements still apply | number | Deprecated. Use `saleAmount` instead. minimum: `0`. Deprecated native compatibility field. |
| `modifyAmount` | No; body/guard requirements still apply | number | Deprecated. Use `modifySaleAmount` instead. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `earnings` | No; body/guard requirements still apply | number | The new earnings amount for the commission. Paid commissions cannot be updated. If provided, will override the earnings calculated based on the sale amount and currency. minimum: `0`. |
| `saleAmount` | No; body/guard requirements still apply | number | The new absolute amount for the sale. Paid commissions cannot be updated. minimum: `0`. |
| `modifySaleAmount` | No; body/guard requirements still apply | number | Modify the current sale amount: use positive values to increase the amount, negative values to decrease it. Takes precedence over `saleAmount`. Paid commissions cannot be updated. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale amount to update. Accepts ISO 4217 currency codes. default: `"usd"`. |
| `status` | No; body/guard requirements still apply | string | Useful for marking a commission as pending, refunded, duplicate, canceled, or fraudulent. Takes precedence over `saleAmount` and `modifySaleAmount`. When a commission is marked as pending, refunded, duplicate, canceled, or fraudulent, it will be omitted from the payout, and the payout amount will be recalculated accordingly. Paid commissions cannot be updated. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |
| `amount` | No; body/guard requirements still apply | number | Deprecated. Use `saleAmount` instead. minimum: `0`. Deprecated native compatibility field. |
| `modifyAmount` | No; body/guard requirements still apply | number | Deprecated. Use `modifySaleAmount` instead. Deprecated native compatibility field. |

#### bulk_update_commissions

`dub-cli bulk-update-commissions`

Bulk update up to 100 commissions with the same status.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `commissionIds` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. minItems: `1`. maxItems: `100`. |
| `status` | No; body/guard requirements still apply | string | The status to apply to every commission in the batch. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.commissionIds**


**input.commissionIds[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `commissionIds` | Yes | array | Native field; use the reviewed provider reference. minItems: `1`. maxItems: `100`. |
| `status` | Yes | string | The status to apply to every commission in the batch. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |

**input.payload.commissionIds**


**input.payload.commissionIds[]**

Native JSON value; inspect the full schema for validation.

#### list_payouts

`dub-cli list-payouts`

Retrieve a paginated list of payouts for your partner program.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `status` | No; body/guard requirements still apply | string | Filter the list of payouts by their corresponding status. enum: `["pending", "processing", "processed", "sent", "completed", "failed", "canceled"]`. |
| `partner_id` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner. When specified, takes precedence over `tenantId`. |
| `tenant_id` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner's `tenantId` (their unique ID within your database). |
| `invoice_id` | No; body/guard requirements still apply | string | Filter the list of payouts by invoice ID (the unique ID of the invoice you receive for each batch payout you process on Dub). Pending payouts will not have an invoice ID. |
| `group_id` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner group. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `group_abc`, `group_abc,group_xyz`, `-group_abc`. |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the list of payouts by. enum: `["amount", "initiatedAt", "paidAt"]`. default: `"amount"`. |
| `sort_order` | No; body/guard requirements still apply | string | The sort order for the list of payouts. enum: `["asc", "desc"]`. default: `"desc"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### create_referrals_embed_token

`dub-cli create-referrals-embed-token`

Create a referrals embed token for the given partner/tenant. The endpoint first attempts to locate an existing enrollment using the provided tenantId. If no enrollment is found, it resolves the partner by email and creates a new enrollment as needed. This results in an upsert-style flow that guarantees a valid enrollment and returns a usable embed token.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `tenantId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `partner` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |
| `output_file` | Yes | string | Required absolute new private file. Exclusive 0600 creation; never overwrites or echoes PNG/embed credentials. minLength: `1`. |

**input.partner**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | Yes | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.partner.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.partner.linkProps.tagIds**


**input.partner.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagIds anyOf branch 2**


**input.partner.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagNames**


**input.partner.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagNames anyOf branch 2**


**input.partner.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.testVariants**


**input.partner.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `tenantId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `partner` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.payload.partner**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | Yes | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.payload.partner.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.payload.partner.linkProps.tagIds**


**input.payload.partner.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.partner.linkProps.tagIds anyOf branch 2**


**input.payload.partner.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.partner.linkProps.tagNames**


**input.payload.partner.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.payload.partner.linkProps.tagNames anyOf branch 2**


**input.payload.partner.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.payload.partner.linkProps.testVariants**


**input.payload.partner.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

#### get_qr_code

`dub-cli get-qr-code`

Retrieve a QR code for a link.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The URL to generate a QR code for. maxLength: `32000`. |
| `logo` | No; body/guard requirements still apply | string | The logo to include in the QR code. Can only be used with a paid plan on Dub. |
| `size` | No; body/guard requirements still apply | number | The size of the QR code in pixels. Defaults to `600` if not provided. default: `600`. |
| `level` | No; body/guard requirements still apply | string | The level of error correction to use for the QR code. Defaults to `L` if not provided. enum: `["L", "M", "Q", "H"]`. default: `"L"`. |
| `fg_color` | No; body/guard requirements still apply | string | The foreground color of the QR code in hex format. Defaults to `#000000` if not provided. default: `"#000000"`. |
| `bg_color` | No; body/guard requirements still apply | string | The background color of the QR code in hex format. Defaults to `#ffffff` if not provided. default: `"#FFFFFF"`. |
| `hide_logo` | No; body/guard requirements still apply | boolean | Whether to hide the logo in the QR code. Can only be used with a paid plan on Dub. default: `false`. |
| `margin` | No; body/guard requirements still apply | number | The size of the margin around the QR code. Defaults to 2 if not provided. default: `2`. |
| `include_margin` | No; body/guard requirements still apply | boolean | DEPRECATED: Margin is included by default. Use the `margin` prop to customize the margin size. default: `true`. Deprecated native compatibility field. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `output_file` | Yes | string | Required absolute new private file. Exclusive 0600 creation; never overwrites or echoes PNG/embed credentials. minLength: `1`. |

#### list_bounty_submissions

`dub-cli list-bounty-submissions`

List all submissions for a specific bounty in your partner program.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bounty_id` | Yes | string | The unique ID of the bounty on Dub. Can be found in the URL of the bounty page, prefixed with `bnty_`. |
| `status` | No; body/guard requirements still apply | string | The status of the submissions to list. enum: `["draft", "submitted", "approved", "rejected"]`. |
| `group_id` | No; body/guard requirements still apply | string | The ID of the group to list submissions for. |
| `partner_id` | No; body/guard requirements still apply | string | The ID of the partner to list submissions for. |
| `sort_by` | No; body/guard requirements still apply | string | The field to sort the submissions by. enum: `["completedAt", "performanceCount", "socialMetricCount"]`. default: `"completedAt"`. |
| `sort_order` | No; body/guard requirements still apply | string | The order to sort the submissions by. enum: `["asc", "desc"]`. default: `"asc"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `page_size` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |

#### approve_bounty_submission

`dub-cli approve-bounty-submission`

Approve a bounty submission. Optionally specify a custom reward amount.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bounty_id` | Yes | string | The ID of the bounty |
| `submission_id` | Yes | string | The ID of the bounty submission |
| `rewardAmount` | No; body/guard requirements still apply | ['number', 'null'] | The reward amount for the performance-based bounty. Applicable if the bounty reward amount is not set. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `rewardAmount` | No; body/guard requirements still apply | ['number', 'null'] | The reward amount for the performance-based bounty. Applicable if the bounty reward amount is not set. |

#### reject_bounty_submission

`dub-cli reject-bounty-submission`

Reject a bounty submission with a specified reason and optional note.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bounty_id` | Yes | string | The ID of the bounty |
| `submission_id` | Yes | string | The ID of the bounty submission |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the submission. enum: `["invalidProof", "duplicateSubmission", "outOfTimeWindow", "didNotMeetCriteria", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | The note for rejecting the submission. maxLength: `5000`. |
| `account` | No; body/guard requirements still apply | string | Exact configured private workspace profile label; not a tenant or provider account ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the submission. enum: `["invalidProof", "duplicateSubmission", "outOfTimeWindow", "didNotMeetCriteria", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | The note for rejecting the submission. maxLength: `5000`. |

#### list_accounts

`dub-cli list-accounts`

Local profile labels/default/auth method only. No keys, token paths, provider identity or network request.

Native JSON value; inspect the full schema for validation.

#### get_operation_schema

`dub-cli get-operation-schema`

Local reviewed method/path/query/body schema and provenance for one native tool. No credentials or provider request.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | Exact native tool name, e.g. create_link or approve_program_application. enum: `["create_link", "list_links", "get_links_count", "get_link", "update_link", "delete_link", "bulk_create_links", "bulk_update_links", "bulk_delete_links", "upsert_link", "get_link_stats", "list_events", "create_tag", "list_tags", "update_tag", "delete_tag", "create_folder", "list_folders", "update_folder", "delete_folder", "create_domain", "list_domains", "update_domain", "delete_domain", "register_domain", "check_domain_status", "track_lead", "track_sale", "track_open", "list_customers", "get_customer", "update_customer", "delete_customer", "create_partner", "list_partners", "create_partner_link", "retrieve_partner_links", "upsert_partner_link", "retrieve_partner_analytics", "ban_partner", "deactivate_partner", "list_program_applications", "approve_program_application", "reject_program_application", "list_discount_codes", "create_discount_code", "delete_discount_code", "create_commission", "list_commissions", "update_commission", "bulk_update_commissions", "list_payouts", "create_referrals_embed_token", "get_qr_code", "list_bounty_submissions", "approve_bounty_submission", "reject_bounty_submission"]`. |

#### preview_link_batch

`dub-cli preview-link-batch`

Local validation and SHA-256 of exact ordered link/tag/folder work, selected profile label and reviewed schema. No provider reads, key load, identity check, price or rollback guarantee.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty ordered link/tag/folder operations. CLI repeats --tasks with individual JSON objects; native bulk work still counts all affected records. minItems: `1`. maxItems: `20`. |
| `account` | No; body/guard requirements still apply | string | Exact selected private workspace profile; binds label, not key ownership. |

**input.tasks**


**input.tasks[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tool` | Yes | string | Native field; use the reviewed provider reference. enum: `["create_link", "update_link", "delete_link", "bulk_create_links", "bulk_update_links", "bulk_delete_links", "upsert_link", "create_tag", "update_tag", "delete_tag", "create_folder", "update_folder", "delete_folder"]`. |
| `arguments` | Yes | object | Native tool arguments only; no account, confirm or payload_file. Use inline complete payload/native fields. |

#### submit_link_batch

`dub-cli submit-link-batch`

Confirmed one-to-twenty ordered link/tag/folder tasks. Prevalidate all and verify exact hash before first request. Stop on first failure with known results/failed index/unattempted indices; no retries, rollback or implicit continuation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty ordered link/tag/folder operations. CLI repeats --tasks with individual JSON objects; native bulk work still counts all affected records. minItems: `1`. maxItems: `20`. |
| `account` | No; body/guard requirements still apply | string | Exact selected private workspace profile; binds label, not key ownership. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for this exact requested ordered batch. |
| `review_sha256` | Yes | string | Exact preview_link_batch hash for identical requests, profile label, schema and order. pattern: `"^[a-f0-9]{64}$"`. |

**input.tasks**


**input.tasks[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tool` | Yes | string | Native field; use the reviewed provider reference. enum: `["create_link", "update_link", "delete_link", "bulk_create_links", "bulk_update_links", "bulk_delete_links", "upsert_link", "create_tag", "update_tag", "delete_tag", "create_folder", "update_folder", "delete_folder"]`. |
| `arguments` | Yes | object | Native tool arguments only; no account, confirm or payload_file. Use inline complete payload/native fields. |

### Native request contracts

The reviewed snapshot contains every current native route. Query/path flags map back to their native names below; body JSON retains native keys. Body requirements apply to either body flags or payload/file. Response union/plan/provider rules are not overridden by local schema acceptance.

##### createLink

`POST /links`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

##### getLinks

`GET /links`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned. |
| `tagId` | No; body/guard requirements still apply | string | Deprecated: Use `tagIds` instead. The tag ID to filter the links by. Deprecated native compatibility field. |
| `tagIds` | No; body/guard requirements still apply | JSON | The tag IDs to filter the links by. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | string | The folder ID to filter the links by. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the links by. The search term will be matched against the short link slug and the destination url. |
| `userId` | No; body/guard requirements still apply | string | The user ID to filter the links by. |
| `tenantId` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. If set, will only return links for the specified tenant. |
| `showArchived` | No; body/guard requirements still apply | boolean | Whether to include archived links in the response. Defaults to `false` if not provided. default: `false`. |
| `withTags` | No; body/guard requirements still apply | boolean | DEPRECATED. Filter for links that have at least one tag assigned to them. default: `false`. Deprecated native compatibility field. |
| `endingBefore` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `startingAfter` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

No native JSON request body.

##### getLinksCount

`GET /links/count`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned. |
| `tagId` | No; body/guard requirements still apply | string | Deprecated: Use `tagIds` instead. The tag ID to filter the links by. Deprecated native compatibility field. |
| `tagIds` | No; body/guard requirements still apply | JSON | The tag IDs to filter the links by. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | string | The folder ID to filter the links by. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the links by. The search term will be matched against the short link slug and the destination url. |
| `userId` | No; body/guard requirements still apply | string | The user ID to filter the links by. |
| `tenantId` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. If set, will only return links for the specified tenant. |
| `showArchived` | No; body/guard requirements still apply | boolean | Whether to include archived links in the response. Defaults to `false` if not provided. default: `false`. |
| `withTags` | No; body/guard requirements still apply | boolean | DEPRECATED. Filter for links that have at least one tag assigned to them. default: `false`. Deprecated native compatibility field. |
| `groupBy` | No; body/guard requirements still apply | JSON | The field to group the links by. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.groupBy**


**input.groupBy anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.groupBy anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.groupBy anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.groupBy anyOf branch 4**

Native JSON value; inspect the full schema for validation.

No native JSON request body.

##### getLinkInfo

`GET /links/info`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | No; body/guard requirements still apply | string | The domain of the link to retrieve. E.g. for `d.to/github`, the domain is `d.to`. minLength: `1`. |
| `key` | No; body/guard requirements still apply | string | The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`. minLength: `1`. |
| `linkId` | No; body/guard requirements still apply | string | The unique ID of the short link. |
| `externalId` | No; body/guard requirements still apply | string | This is the ID of the link in the your database. |

No native JSON request body.

##### updateLink

`PATCH /links/{linkId}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkId` | Yes | string | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.image**


**input.image anyOf branch 1**


**input.image.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.image.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.image anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.geo**


**input.geo allOf branch 1**

Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

##### deleteLink

`DELETE /links/{linkId}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkId` | Yes | string | The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |

No native JSON request body.

##### bulkCreateLinks

`POST /links/bulk`

Native JSON value; inspect the full schema for validation.


**input[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input[].tagIds**


**input[].tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input[].tagIds anyOf branch 2**


**input[].tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input[].tagNames**


**input[].tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input[].tagNames anyOf branch 2**


**input[].tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input[].testVariants**


**input[].testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input[].webhookIds**


**input[].webhookIds[]**

Native JSON value; inspect the full schema for validation.

##### bulkUpdateLinks

`PATCH /links/bulk`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkIds` | No; body/guard requirements still apply | array | The IDs of the links to update. Takes precedence over `externalIds`. maxItems: `100`. default: `[]`. |
| `externalIds` | No; body/guard requirements still apply | array | The external IDs of the links to update as stored in your database. maxItems: `100`. default: `[]`. |
| `data` | Yes | object | Native field; use the reviewed provider reference. |

**input.linkIds**


**input.linkIds[]**

Native JSON value; inspect the full schema for validation.

**input.externalIds**


**input.externalIds[]**

Native JSON value; inspect the full schema for validation.

**input.data**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | No; body/guard requirements still apply | string | The destination URL of the short link. maxLength: `32000`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.data.tagIds**


**input.data.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.data.tagIds anyOf branch 2**


**input.data.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.data.tagNames**


**input.data.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.data.tagNames anyOf branch 2**


**input.data.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.data.testVariants**


**input.data.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.data.webhookIds**


**input.data.webhookIds[]**

Native JSON value; inspect the full schema for validation.

##### bulkDeleteLinks

`DELETE /links/bulk`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `linkIds` | Yes | array | Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |

**input.linkIds**


**input.linkIds[]**

Native JSON value; inspect the full schema for validation.

No native JSON request body.

##### upsertLink

`PUT /links/upsert`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The destination URL of the short link. maxLength: `32000`. |
| `domain` | No; body/guard requirements still apply | string | The domain of the short link (without protocol). If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). maxLength: `190`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `keyLength` | No; body/guard requirements still apply | number | The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`. minimum: `3`. maximum: `190`. |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `programId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the program the short link is associated with. |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner the short link is associated with. |
| `prefix` | No; body/guard requirements still apply | string | The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided. |
| `trackConversion` | No; body/guard requirements still apply | boolean | Whether to track conversions for the short link. Defaults to `false` if not provided. |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `folderId` | No; body/guard requirements still apply | ['string', 'null'] | The unique ID existing folder to assign the short link to. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `geo` | No; body/guard requirements still apply | ['object', 'null'] | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. See https://d.to/geo for more information. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `utm_source` | No; body/guard requirements still apply | ['string', 'null'] | The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL. maxLength: `255`. |
| `utm_medium` | No; body/guard requirements still apply | ['string', 'null'] | The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL. maxLength: `255`. |
| `utm_campaign` | No; body/guard requirements still apply | ['string', 'null'] | The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL. maxLength: `255`. |
| `utm_term` | No; body/guard requirements still apply | ['string', 'null'] | The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL. maxLength: `255`. |
| `utm_content` | No; body/guard requirements still apply | ['string', 'null'] | The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL. maxLength: `255`. |
| `ref` | No; body/guard requirements still apply | ['string', 'null'] | The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL. maxLength: `255`. |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |
| `publicStats` | No; body/guard requirements still apply | boolean | Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided. Deprecated native compatibility field. |
| `tagId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `tagIds` instead. The unique ID of the tag assigned to the short link. Deprecated native compatibility field. |
| `webhookIds` | No; body/guard requirements still apply | ['array', 'null'] | Deprecated: You can now enable link.clicked webhooks for all links in a workspace or folder without passing this field manually. An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data. Deprecated native compatibility field. |

**input.tagIds**


**input.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagIds anyOf branch 2**


**input.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.tagNames**


**input.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.tagNames anyOf branch 2**


**input.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.testVariants**


**input.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

**input.webhookIds**


**input.webhookIds[]**

Native JSON value; inspect the full schema for validation.

##### retrieveAnalytics

`GET /analytics`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `event` | No; body/guard requirements still apply | string | The type of event to retrieve analytics for. Defaults to `clicks`. enum: `["clicks", "leads", "sales", "composite"]`. default: `"clicks"`. |
| `groupBy` | No; body/guard requirements still apply | string | The parameter to group the analytics data points by. Defaults to `count` if undefined. enum: `["count", "timeseries", "continents", "regions", "countries", "cities", "devices", "browsers", "os", "trigger", "triggers", "event_names", "referers", "referer_urls", "top_folders", "top_link_tags", "top_domains", "top_links", "top_urls", "top_base_urls", "top_partners", "top_groups", "top_partner_tags", "utm_sources", "utm_mediums", "utm_campaigns", "utm_terms", "utm_contents"]`. default: `"count"`. |
| `domain` | No; body/guard requirements still apply | string | The domain to filter analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `dub.co`, `dub.co,google.com`, `-spam.com`. |
| `key` | No; body/guard requirements still apply | string | The slug of the short link to retrieve analytics for. Must be used along with the corresponding `domain` of the short link to fetch analytics for a specific short link. |
| `linkId` | No; body/guard requirements still apply | string | The unique ID of the link to retrieve analytics for.Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `link_123`, `link_123,link_456`, `-link_789`. |
| `externalId` | No; body/guard requirements still apply | string | The ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| `tenantId` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tenant_123`, `tenant_123,tenant_456`, `-tenant_789`. |
| `tagId` | No; body/guard requirements still apply | string | The tag ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tag_123`, `tag_123,tag_456`, `-tag_789`. |
| `folderId` | No; body/guard requirements still apply | string | The folder ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `folder_123`, `folder_123,folder_456`, `-folder_789`. If not provided, return analytics for all links. |
| `partnerTagId` | No; body/guard requirements still apply | string | The partner tag ID(s) to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `ptag_123`, `ptag_123,ptag_456`, `-ptag_789`. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `grp_123`, `grp_123,grp_456`, `-grp_789`. |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `pn_123`, `pn_123,pn_456`, `-pn_789`. |
| `customerId` | No; body/guard requirements still apply | string | The ID of the customer to retrieve analytics for. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `country` | No; body/guard requirements still apply | string | The country to retrieve analytics for. Must be passed as a 2-letter ISO 3166-1 country code (see https://d.to/geo). Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `US`, `US,BR,FR`, `-US`. |
| `city` | No; body/guard requirements still apply | string | The city to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `New York`, `New York,London`, `-New York`. |
| `region` | No; body/guard requirements still apply | string | The ISO 3166-2 region code to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NY`, `NY,CA`, `-NY`. |
| `continent` | No; body/guard requirements still apply | string | The continent to retrieve analytics for. Valid values: AF, AN, AS, EU, NA, OC, SA. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NA`, `NA,EU`, `-AS`. |
| `device` | No; body/guard requirements still apply | string | The device to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Desktop`, `Mobile,Tablet`, `-Mobile`. |
| `browser` | No; body/guard requirements still apply | string | The browser to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Chrome`, `Chrome,Firefox,Safari`, `-IE`. |
| `os` | No; body/guard requirements still apply | string | The OS to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Windows`, `Mac,Windows,Linux`, `-Windows`. |
| `trigger` | No; body/guard requirements still apply | string | The trigger to retrieve analytics for. Valid values: qr, link, pageview. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `qr`, `qr,link`, `-qr`. If undefined, returns all trigger types. |
| `eventName` | No; body/guard requirements still apply | string | The conversion event name to retrieve analytics for. Only available for lead and sale events. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Sign up`, `Sign up,Purchase`, `-Sign up`. |
| `referer` | No; body/guard requirements still apply | string | The referer hostname to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google.com`, `google.com,twitter.com`, `-facebook.com`. |
| `refererUrl` | No; body/guard requirements still apply | string | The full referer URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://google.com`, `https://google.com,https://twitter.com`, `-https://spam.com`. |
| `url` | No; body/guard requirements still apply | string | The destination URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://example.com`, `https://example.com,https://other.com`, `-https://spam.com`. |
| `utm_source` | No; body/guard requirements still apply | string | The UTM source to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google`, `google,twitter`, `-spam`. |
| `utm_medium` | No; body/guard requirements still apply | string | The UTM medium to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `cpc`, `cpc,social`, `-email`. |
| `utm_campaign` | No; body/guard requirements still apply | string | The UTM campaign to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `summer_sale`, `summer_sale,winter_sale`, `-old_campaign`. |
| `utm_term` | No; body/guard requirements still apply | string | The UTM term to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `utm_content` | No; body/guard requirements still apply | string | The UTM content to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `root` | No; body/guard requirements still apply | boolean | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| `saleType` | No; body/guard requirements still apply | string | Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both. enum: `["new", "recurring"]`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `programId` | No; body/guard requirements still apply | string | Deprecated: This is automatically inferred from your workspace's defaultProgramId. The ID of the program to retrieve analytics for. Deprecated native compatibility field. |
| `tagIds` | No; body/guard requirements still apply | string | Deprecated: Use `tagId` instead. The tag IDs to retrieve analytics for. Deprecated native compatibility field. |
| `qr` | No; body/guard requirements still apply | boolean | Deprecated: Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both. Deprecated native compatibility field. |

No native JSON request body.

##### listEvents

`GET /events`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `event` | No; body/guard requirements still apply | string | The type of event to retrieve analytics for. Defaults to 'clicks'. enum: `["clicks", "leads", "sales"]`. default: `"clicks"`. |
| `domain` | No; body/guard requirements still apply | string | The domain to filter analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `dub.co`, `dub.co,google.com`, `-spam.com`. |
| `key` | No; body/guard requirements still apply | string | The slug of the short link to retrieve analytics for. Must be used along with the corresponding `domain` of the short link to fetch analytics for a specific short link. |
| `linkId` | No; body/guard requirements still apply | string | The unique ID of the link to retrieve analytics for.Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `link_123`, `link_123,link_456`, `-link_789`. |
| `externalId` | No; body/guard requirements still apply | string | The ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| `tenantId` | No; body/guard requirements still apply | string | The ID of the tenant that created the link inside your system. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tenant_123`, `tenant_123,tenant_456`, `-tenant_789`. |
| `tagId` | No; body/guard requirements still apply | string | The tag ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `tag_123`, `tag_123,tag_456`, `-tag_789`. |
| `folderId` | No; body/guard requirements still apply | string | The folder ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `folder_123`, `folder_123,folder_456`, `-folder_789`. If not provided, return analytics for all links. |
| `partnerTagId` | No; body/guard requirements still apply | string | The partner tag ID(s) to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `ptag_123`, `ptag_123,ptag_456`, `-ptag_789`. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `grp_123`, `grp_123,grp_456`, `-grp_789`. |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `pn_123`, `pn_123,pn_456`, `-pn_789`. |
| `customerId` | No; body/guard requirements still apply | string | The ID of the customer to retrieve analytics for. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `country` | No; body/guard requirements still apply | string | The country to retrieve analytics for. Must be passed as a 2-letter ISO 3166-1 country code (see https://d.to/geo). Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `US`, `US,BR,FR`, `-US`. |
| `city` | No; body/guard requirements still apply | string | The city to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `New York`, `New York,London`, `-New York`. |
| `region` | No; body/guard requirements still apply | string | The ISO 3166-2 region code to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NY`, `NY,CA`, `-NY`. |
| `continent` | No; body/guard requirements still apply | string | The continent to retrieve analytics for. Valid values: AF, AN, AS, EU, NA, OC, SA. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `NA`, `NA,EU`, `-AS`. |
| `device` | No; body/guard requirements still apply | string | The device to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Desktop`, `Mobile,Tablet`, `-Mobile`. |
| `browser` | No; body/guard requirements still apply | string | The browser to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Chrome`, `Chrome,Firefox,Safari`, `-IE`. |
| `os` | No; body/guard requirements still apply | string | The OS to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Windows`, `Mac,Windows,Linux`, `-Windows`. |
| `trigger` | No; body/guard requirements still apply | string | The trigger to retrieve analytics for. Valid values: qr, link, pageview. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `qr`, `qr,link`, `-qr`. If undefined, returns all trigger types. |
| `eventName` | No; body/guard requirements still apply | string | The conversion event name to retrieve analytics for. Only available for lead and sale events. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `Sign up`, `Sign up,Purchase`, `-Sign up`. |
| `referer` | No; body/guard requirements still apply | string | The referer hostname to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google.com`, `google.com,twitter.com`, `-facebook.com`. |
| `refererUrl` | No; body/guard requirements still apply | string | The full referer URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://google.com`, `https://google.com,https://twitter.com`, `-https://spam.com`. |
| `url` | No; body/guard requirements still apply | string | The destination URL to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `https://example.com`, `https://example.com,https://other.com`, `-https://spam.com`. |
| `utm_source` | No; body/guard requirements still apply | string | The UTM source to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `google`, `google,twitter`, `-spam`. |
| `utm_medium` | No; body/guard requirements still apply | string | The UTM medium to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `cpc`, `cpc,social`, `-email`. |
| `utm_campaign` | No; body/guard requirements still apply | string | The UTM campaign to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `summer_sale`, `summer_sale,winter_sale`, `-old_campaign`. |
| `utm_term` | No; body/guard requirements still apply | string | The UTM term to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `utm_content` | No; body/guard requirements still apply | string | The UTM content to retrieve analytics for. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). |
| `root` | No; body/guard requirements still apply | boolean | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| `saleType` | No; body/guard requirements still apply | string | Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both. enum: `["new", "recurring"]`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `programId` | No; body/guard requirements still apply | string | Deprecated: This is automatically inferred from your workspace's defaultProgramId. The ID of the program to retrieve analytics for. Deprecated native compatibility field. |
| `tagIds` | No; body/guard requirements still apply | string | Deprecated: Use `tagId` instead. The tag IDs to retrieve analytics for. Deprecated native compatibility field. |
| `qr` | No; body/guard requirements still apply | boolean | Deprecated: Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both. Deprecated native compatibility field. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. default: `1`. |
| `limit` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `1000`. exclusiveMinimum: `0`. default: `100`. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the events by. The default is `timestamp`. enum: `["timestamp"]`. default: `"timestamp"`. |
| `order` | No; body/guard requirements still apply | string | DEPRECATED. Use `sortOrder` instead. enum: `["asc", "desc"]`. default: `"desc"`. Deprecated native compatibility field. |

No native JSON request body.

##### createTag

`POST /tags`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |

##### getTags

`GET /tags`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the tags by. enum: `["name", "createdAt"]`. default: `"name"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The order to sort the tags by. enum: `["asc", "desc"]`. default: `"asc"`. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the tags by. |
| `ids` | No; body/guard requirements still apply | JSON | IDs of tags to filter by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

**input.ids**


**input.ids anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.ids anyOf branch 2**


**input.ids.anyOf2[]**

Native JSON value; inspect the full schema for validation.

No native JSON request body.

##### updateTag

`PATCH /tags/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the tag to update. |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. |
| `color` | No; body/guard requirements still apply | string | The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, brown, gray. enum: `["red", "yellow", "green", "blue", "purple", "brown", "gray", "pink"]`. |
| `tag` | No; body/guard requirements still apply | string | The name of the tag to create. minLength: `1`. maxLength: `190`. Deprecated native compatibility field. |

##### deleteTag

`DELETE /tags/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the tag to delete. |

No native JSON request body.

##### createFolder

`POST /folders`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The workspace-level access level settings for the folder. Default is `write` which allows full access to the folder for all team members. The other options are `read` (view-only access) and `null` (no access) and are only available on Business plans and above. enum: `["write", "read", null]`. default: `"write"`. |

##### listFolders

`GET /folders`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | No; body/guard requirements still apply | string | The search term to filter the folders by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `50`. exclusiveMinimum: `0`. default: `50`. |

No native JSON request body.

##### updateFolder

`PATCH /folders/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the folder to update. |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | The name of the folder. maxLength: `190`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the folder. maxLength: `500`. |
| `accessLevel` | No; body/guard requirements still apply | ['string', 'null'] | The access level of the folder within the workspace. enum: `["write", "read", null]`. |

##### deleteFolder

`DELETE /folders/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The ID of the folder to delete. |

No native JSON request body.

##### createDomain

`POST /domains`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |

**input.logo**


**input.logo anyOf branch 1**


**input.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

##### listDomains

`GET /domains`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `archived` | No; body/guard requirements still apply | boolean | Whether to include archived domains in the response. Defaults to `false` if not provided. default: `false`. |
| `search` | No; body/guard requirements still apply | string | The search term to filter the domains by. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `50`. exclusiveMinimum: `0`. default: `50`. |

No native JSON request body.

##### updateDomain

`PATCH /domains/{slug}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | The domain name. |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | No; body/guard requirements still apply | string | Name of the domain. minLength: `1`. maxLength: `190`. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when any link under this domain has expired. maxLength: `32000`. |
| `notFoundUrl` | No; body/guard requirements still apply | ['string', 'null'] | Redirect users to a specific URL when a link under this domain doesn't exist. maxLength: `32000`. |
| `archived` | No; body/guard requirements still apply | boolean | Whether to archive this domain. `false` will unarchive a previously archived domain. default: `false`. |
| `placeholder` | No; body/guard requirements still apply | ['string', 'null'] | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. maxLength: `100`. |
| `logo` | No; body/guard requirements still apply | JSON | Native field; use the reviewed provider reference. |
| `assetLinks` | No; body/guard requirements still apply | ['string', 'null'] | assetLinks.json configuration file (for deep link support on Android). |
| `appleAppSiteAssociation` | No; body/guard requirements still apply | ['string', 'null'] | apple-app-site-association configuration file (for deep link support on iOS). |

**input.logo**


**input.logo anyOf branch 1**


**input.logo.anyOf1 anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.logo.anyOf1 anyOf branch 3**

Native JSON value; inspect the full schema for validation.

**input.logo anyOf branch 2**

Native JSON value; inspect the full schema for validation.

##### deleteDomain

`DELETE /domains/{slug}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | The domain name. |

No native JSON request body.

##### registerDomain

`POST /domains/register`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domain` | Yes | string | The domain to claim. We only support .link domains for now. minLength: `1`. pattern: `".*\\.link$"`. |

##### checkDomainStatus

`GET /domains/status`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `domains` | Yes | JSON | The domains to search. We only support .link domains for now. |

**input.domains**


**input.domains anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.domains anyOf branch 2**


**input.domains.anyOf2[]**

Native JSON value; inspect the full schema for validation.

No native JSON request body.

##### trackLead

`POST /track/lead`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `clickId` | Yes | string | The unique ID of the click that the lead conversion event is attributed to. You can read this value from `dub_id` cookie. [For deferred lead tracking]: If an empty string is provided, Dub will try to find an existing customer with the provided `customerExternalId` and use the `clickId` from the customer if found. |
| `eventName` | Yes | string | The name of the lead event to track. Can also be used as a unique identifier to associate a given lead event for a customer for a subsequent sale event (via the `leadEventName` prop in `/track/sale`). minLength: `1`. maxLength: `255`. |
| `customerExternalId` | Yes | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | The avatar URL of the customer. default: `null`. |
| `mode` | No; body/guard requirements still apply | string | The mode to use for tracking the lead event. `async` will not block the request; `wait` will block the request until the lead event is fully recorded in Dub; `deferred` will defer the lead event creation to a subsequent request. enum: `["async", "wait", "deferred"]`. default: `"async"`. |
| `eventQuantity` | No; body/guard requirements still apply | ['integer', 'null'] | The numerical value associated with this lead event (e.g., number of provisioned seats in a free trial). If defined as N, the lead event will be tracked N times. maximum: `100`. exclusiveMinimum: `0`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the lead event. Max 10,000 characters. default: `null`. |

##### trackSale

`POST /track/sale`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `customerExternalId` | Yes | string | The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer. minLength: `1`. maxLength: `100`. |
| `amount` | Yes | integer | The amount of the sale in cents (for all two-decimal currencies). If the sale is in a zero-decimal currency, pass the full integer value (e.g. `1580` JPY). Learn more: https://d.to/currency minimum: `0`. maximum: `9007199254740991`. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale. Accepts ISO 4217 currency codes. Sales will be automatically converted and stored as USD at the latest exchange rates. Learn more: https://d.to/currency default: `"usd"`. |
| `eventName` | No; body/guard requirements still apply | string | The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`. maxLength: `255`. default: `"Purchase"`. |
| `paymentProcessor` | No; body/guard requirements still apply | string | The payment processor via which the sale was made. enum: `["stripe", "shopify", "polar", "paddle", "apple", "revenuecat", "lemonsqueezy", "dub", "custom"]`. default: `"custom"`. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. default: `null`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the sale event. Max 10,000 characters when stringified. default: `null`. |
| `leadEventName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the lead event that occurred before the sale (case-sensitive). This is used to associate the sale event with a particular lead event (instead of the latest lead event for a link-customer combination, which is the default behavior). For direct sale tracking, this field can also be used to specify the lead event name. default: `null`. |
| `clickId` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The unique ID of the click that the sale conversion event is attributed to. You can read this value from `dub_id` cookie. |
| `customerName` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”). maxLength: `100`. default: `null`. |
| `customerEmail` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The email address of the customer. maxLength: `100`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. default: `null`. format: `"email"`. |
| `customerAvatar` | No; body/guard requirements still apply | ['string', 'null'] | [For direct sale tracking]: The avatar URL of the customer. default: `null`. |

##### trackOpen

`POST /track/open`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `deepLink` | No; body/guard requirements still apply | string | The deep link that brought the user to the app. If left blank, Dub will fallback to probabilistic tracking by using the `dubDomain` parameter to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl maxLength: `32000`. |
| `dubDomain` | No; body/guard requirements still apply | string | Your deep link custom domain on Dub (e.g. `acme.link`). This is used in probabilistic tracking to check if there is an associated click event for the user's IP address. Learn more: https://d.to/ddl |

##### getCustomers

`GET /customers`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | string | A case-sensitive filter on the list based on the customer's `email` field. The value must be a string. Takes precedence over `externalId`. |
| `externalId` | No; body/guard requirements still apply | string | A case-sensitive filter on the list based on the customer's `externalId` field. The value must be a string. Takes precedence over `search`. |
| `search` | No; body/guard requirements still apply | string | A search query to filter customers by email, name, or customer ID (`cus_...`). If `email` or `externalId` is provided, this will be ignored. |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the customer's `country` field. |
| `linkId` | No; body/guard requirements still apply | string | A filter on the list based on the customer's `linkId` field (the referral link ID). |
| `programId` | No; body/guard requirements still apply | string | Program ID to filter by. |
| `partnerId` | No; body/guard requirements still apply | string | Partner ID to filter by. |
| `includeExpandedFields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the customers by. The default is `createdAt`. enum: `["createdAt", "saleAmount", "firstSaleAt", "subscriptionCanceledAt"]`. default: `"createdAt"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `endingBefore` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `startingAfter` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### getCustomer

`GET /customers/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `includeExpandedFields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |

No native JSON request body.

##### updateCustomer

`PATCH /customers/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `includeExpandedFields` | No; body/guard requirements still apply | boolean | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | No; body/guard requirements still apply | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | No; body/guard requirements still apply | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |
| `subscriptionCanceledAt` | No; body/guard requirements still apply | ['string', 'null'] | The date the customer canceled their subscription. Set to a timestamp to mark the subscription as canceled, or `null` to clear it (e.g. if they resubscribe). |

##### deleteCustomer

`DELETE /customers/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |

No native JSON request body.

##### createPartner

`POST /partners`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | Yes | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

##### listPartners

`GET /partners`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `groupId` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `groupId` field. |
| `status` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `status` field. enum: `["pending", "approved", "rejected", "invited", "declined", "deactivated", "banned", "archived"]`. |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `country` field. |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the partners by. The default is `totalSaleAmount`. enum: `["createdAt", "totalClicks", "totalLeads", "totalConversions", "totalSaleAmount", "totalCommissions", "netRevenue", "earningsPerClick", "averageLifetimeValue", "clickToLeadRate", "clickToConversionRate", "leadToConversionRate", "returnOnAdSpend"]`. default: `"totalSaleAmount"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `email` | No; body/guard requirements still apply | string | Filter the partner list based on the partner's `email`. The value must be a string. Takes precedence over `search`. |
| `tenantId` | No; body/guard requirements still apply | string | Filter the partner list based on the partner's `tenantId`. The value must be a string. Combines with the other filters. |
| `search` | No; body/guard requirements still apply | string | A search query to filter partners by ID, name, email, company name, description, social platforms, or referral links. Partial matches are supported. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### createPartnerLink

`POST /partners/links`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | No; body/guard requirements still apply | ['string', 'null'] | The URL to shorten (if not provided, the program's default URL will be used). maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

##### retrievePartnerLinks

`GET /partners/links`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |

No native JSON request body.

##### upsertPartnerLink

`PUT /partners/links/upsert`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `url` | Yes | string | The URL to upsert for. maxLength: `32000`. |
| `key` | No; body/guard requirements still apply | string | The short link slug. If not provided, a random 7-character slug will be generated. maxLength: `190`. |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.linkProps.tagIds**


**input.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagIds anyOf branch 2**


**input.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames**


**input.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.linkProps.tagNames anyOf branch 2**


**input.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.linkProps.testVariants**


**input.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

##### retrievePartnerAnalytics

`GET /partners/analytics`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve analytics for. If undefined, defaults to 24h. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. |
| `start` | No; body/guard requirements still apply | string | The start date and time when to retrieve analytics from. If set, takes precedence over `interval`. |
| `end` | No; body/guard requirements still apply | string | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`. |
| `timezone` | No; body/guard requirements still apply | string | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC. default: `"UTC"`. |
| `query` | No; body/guard requirements still apply | string | Search the events by a custom metadata value. Only available for lead and sale events. Examples: `metadata['key']:'value'` maxLength: `10000`. |
| `groupBy` | No; body/guard requirements still apply | string | The parameter to group the analytics data points by. Defaults to `count` if undefined. enum: `["top_links", "timeseries", "count"]`. default: `"count"`. |

No native JSON request body.

##### banPartner

`POST /partners/ban`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `reason` | Yes | string | The reason for banning the partner. enum: `["tos_violation", "inappropriate_content", "fake_traffic", "fraud", "spam", "brand_abuse"]`. |

##### deactivatePartner

`POST /partners/deactivate`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |

##### listProgramApplications

`GET /program-applications`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `country` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `country` field. |
| `groupId` | No; body/guard requirements still apply | string | A filter on the list based on the partner's `groupId` field. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order. The default is `desc`. enum: `["asc", "desc"]`. default: `"desc"`. |
| `search` | No; body/guard requirements still apply | string | Filter applications by name, email, or company name. Partial matches are supported. An exact partner ID is also matched. |
| `status` | No; body/guard requirements still apply | string | Filter applications by status. One of `pending`, `approved`, or `rejected`. Defaults to `pending`. enum: `["pending", "approved", "rejected"]`. default: `"pending"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### approveProgramApplication

`POST /program-applications/approve`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | Yes | string | The ID of the partner to approve. |
| `groupId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the group to assign the partner to. If not provided, the partner will be assigned to the group they applied to, or the program's default group if no application group is set. |

##### rejectProgramApplication

`POST /program-applications/reject`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | Yes | string | The ID of the partner to reject. |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the partner application. This will be shared with the partner via email. enum: `["needsMoreDetail", "doesNotMeetRequirements", "notTheRightFit", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | Additional details about the rejection. This will be shared with the partner via email. maxLength: `500`. |
| `reapplicationTimeframe` | No; body/guard requirements still apply | string | The mode for reapplying for the program. `instant`: The partner can reapply immediately. `standard`: The partner can reapply after 30 days. `never`: The partner can never reapply for the program. Defaults to `standard` if undefined. enum: `["instant", "standard", "never"]`. default: `"standard"`. |
| `flagForFraud` | No; body/guard requirements still apply | boolean | Whether to flag the partner for fraud review by the Dub team. Cannot be combined with `reapplicationTimeframe: instant`. |
| `flagForFraudReason` | No; body/guard requirements still apply | string | The reason for flagging the partner for fraud. Required when flagForFraud is true. maxLength: `2000`. |

##### listDiscountCodes

`GET /discount-codes`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to retrieve discount codes for. If omitted, returns discount codes for the whole program. |
| `discountId` | No; body/guard requirements still apply | string | Filter discount codes by discount ID. |
| `code` | No; body/guard requirements still apply | string | Filter discount codes by the alphanumeric code (e.g. `PARTNER10OFF`). |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### createDiscountCode

`POST /discount-codes`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `code` | No; body/guard requirements still apply | string | The discount code to create. If omitted, a unique code will be generated automatically from the partner's name. Stripe and Shopify codes can only contain letters, numbers, dashes, and underscores. Custom provider codes can contain any characters. maxLength: `100`. |
| `partnerId` | Yes | string | The ID of the partner to create a discount code for. |
| `linkId` | Yes | string | The ID of the partner's referral link to associate this discount code with. Each link can only have one discount code. |

##### deleteDiscountCode

`DELETE /discount-codes/{idOrCode}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `idOrCode` | Yes | string | The unique ID (e.g. `dcode_...`) or alphanumeric code (e.g. `ABC123`) of the discount code to delete. |

No native JSON request body.

##### createCommission

`POST /commissions`

Native JSON value; inspect the full schema for validation.


**input oneOf branch 1**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["custom"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `amount` | Yes | number | The commission earnings amount in cents. Use a negative amount to create a clawback. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | If not provided, the current date will be used. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The description of the commission. Required for clawbacks (negative `amount`). May be a known clawback reason (`order_canceled`, `fraud`, `terms_violation`, `tracking_error`, `payment_failed`, `ineligible_partner`, `duplicate_commission`) or an arbitrary string (max 190 characters). maxLength: `190`. |

**input oneOf branch 2**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["lead"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `customerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer ID to associate the commission with. Useful if the customer was already created in a prior operation and you want to associate the commission with it. |
| `customer` | No; body/guard requirements still apply | ['object', 'null'] | The full customer object to associate the commission with. Useful for creating the customer on demand. |
| `linkId` | No; body/guard requirements still apply | ['string', 'null'] | The partner link ID to associate the commission with. If not provided, default to the link with the most revenue. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | The date and time of the lead event. If not provided, defaults to the current date and time. |
| `lead` | No; body/guard requirements still apply | ['object', 'null'] | The lead event object to associate the commission with. |
| `leadEventDate` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `date` instead. The date and time of the lead event. If not provided, defaults to the current date and time. Deprecated native compatibility field. |
| `leadEventName` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `lead.eventName` instead. The name of the lead event. If not provided, defaults to 'Sign up'. default: `"Sign up"`. Deprecated native compatibility field. |

**input.oneOf2.customer**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | Yes | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | Yes | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |

**input.oneOf2.lead**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `eventName` | No; body/guard requirements still apply | ['string', 'null'] | The name of the lead event to track. If not provided, defaults to 'Sign up'. minLength: `1`. maxLength: `255`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the lead event. Max 10,000 characters. default: `null`. |

**input oneOf branch 3**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | Native field; use the reviewed provider reference. enum: `["sale"]`. |
| `partnerId` | Yes | string | The ID of the partner to create the commission for. |
| `customerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer ID to associate the commission with. Useful if the customer was already created in a prior operation and you want to associate the commission with it. |
| `customer` | No; body/guard requirements still apply | ['object', 'null'] | The full customer object to associate the commission with. Useful for creating the customer on demand. |
| `linkId` | No; body/guard requirements still apply | ['string', 'null'] | The partner link ID to associate the commission with. If neither `linkId` nor `discountCode` is provided, default to the link with the most revenue. |
| `discountCode` | No; body/guard requirements still apply | ['string', 'null'] | The partner discount code to resolve the associated link. Use this when the link ID is unknown. Cannot be provided together with `linkId`. minLength: `1`. |
| `importStripeInvoices` | No; body/guard requirements still apply | ['boolean', 'null'] | When `true`, import all unimported paid Stripe invoices for the customer and create a commission for each. When `false`, create a single manual sale event using `sale.amount` (or deprecated `saleAmount`). default: `false`. |
| `date` | No; body/guard requirements still apply | ['string', 'null'] | Only used when `importStripeInvoices` is `false`. The date of the manual sale event. Defaults to the current date and time if not provided. |
| `sale` | No; body/guard requirements still apply | ['object', 'null'] | The sale event object to associate the commission with. |
| `saleEventDate` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `date` instead. Deprecated native compatibility field. |
| `saleAmount` | No; body/guard requirements still apply | ['number', 'null'] | Deprecated: Use `sale.amount` instead. Deprecated native compatibility field. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `sale.invoiceId` instead. Deprecated native compatibility field. |
| `productId` | No; body/guard requirements still apply | ['string', 'null'] | Deprecated: Use `sale.metadata.productId` instead. Deprecated native compatibility field. |

**input.oneOf3.customer**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | No; body/guard requirements still apply | ['string', 'null'] | The customer's email address. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The customer's name. If not provided, the email address will be used, and if email is not provided, a random name will be generated. |
| `avatar` | No; body/guard requirements still apply | ['string', 'null'] | The customer's avatar URL. If not provided, a random avatar will be generated. format: `"uri"`. |
| `externalId` | Yes | string | The customer's unique identifier your database. This is useful for associating subsequent conversion events from Dub's API to your internal systems. |
| `stripeCustomerId` | No; body/guard requirements still apply | ['string', 'null'] | The customer's Stripe customer ID. This is useful for attributing recurring sale events to the partner who referred the customer. |
| `country` | Yes | string | The customer's country in ISO 3166-1 alpha-2 format. Updating this field will only affect the customer's country in Dub's system (and has no effect on existing conversion events). |

**input.oneOf3.sale**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `amount` | No; body/guard requirements still apply | ['number', 'null'] | The amount of the sale in cents (for all two-decimal currencies). If the sale is in a zero-decimal currency, pass the full integer value (e.g. `1580` JPY). Learn more: https://d.to/currency |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale. Accepts ISO 4217 currency codes. Sales will be automatically converted and stored as USD at the latest exchange rates. Learn more: https://d.to/currency default: `"usd"`. |
| `eventName` | No; body/guard requirements still apply | string | The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`. maxLength: `255`. default: `"Purchase"`. |
| `paymentProcessor` | No; body/guard requirements still apply | string | The payment processor via which the sale was made. enum: `["stripe", "shopify", "polar", "paddle", "apple", "revenuecat", "lemonsqueezy", "dub", "custom"]`. default: `"custom"`. |
| `invoiceId` | No; body/guard requirements still apply | ['string', 'null'] | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. default: `null`. |
| `metadata` | No; body/guard requirements still apply | ['object', 'null'] | Additional metadata to be stored with the sale event. Max 10,000 characters when stringified. default: `null`. |

##### listCommissions

`GET /commissions`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | No; body/guard requirements still apply | string | Filter the list of commissions by type. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "sale" - "sale,lead" - "-click" enum: `["click", "lead", "sale", "referral", "custom"]`. |
| `customerId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated customer. |
| `payoutId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated payout. |
| `bountySubmissionId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated bounty submission. |
| `partnerId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner. When specified, takes precedence over `tenantId`. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "partner_abc" - "partner_abc,partner_xyz" - "-partner_abc" |
| `tenantId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner's `tenantId` (their unique ID within your database). |
| `groupId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner group. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "group_abc" - "group_abc,group_xyz" - "-group_abc" |
| `partnerTagId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated partner tag. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: - "ptag_abc" - "ptag_abc,ptag_xyz" - "-ptag_abc" |
| `invoiceId` | No; body/guard requirements still apply | string | Filter the list of commissions by the associated invoice. Since invoiceId is unique on a per-program basis, this will only return one commission per invoice. |
| `status` | No; body/guard requirements still apply | string | Filter the list of commissions by their corresponding status. enum: `["pending", "processed", "paid", "refunded", "duplicate", "fraud", "canceled", "hold"]`. |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the list of commissions by. enum: `["createdAt", "amount"]`. default: `"createdAt"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order for the list of commissions. enum: `["asc", "desc"]`. default: `"desc"`. |
| `interval` | No; body/guard requirements still apply | string | The interval to retrieve commissions for. enum: `["24h", "7d", "30d", "90d", "1y", "mtd", "qtd", "ytd", "all"]`. default: `"all"`. |
| `start` | No; body/guard requirements still apply | string | The start date of the date range to filter the commissions by. |
| `end` | No; body/guard requirements still apply | string | The end date of the date range to filter the commissions by. |
| `timezone` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `query` | No; body/guard requirements still apply | string | Filter by lead or sale event metadata. Top-level keys only. Compares string values only :  numeric and boolean metadata values are not matched. Examples: - "metadata['key']='value'" - "metadata['key']!='value'" maxLength: `10000`. |
| `endingBefore` | No; body/guard requirements still apply | string | If specified, the query only searches for results before this cursor. Mutually exclusive with `startingAfter`. |
| `startingAfter` | No; body/guard requirements still apply | string | If specified, the query only searches for results after this cursor. Mutually exclusive with `endingBefore`. |
| `page` | No; body/guard requirements still apply | integer | DEPRECATED. Use `startingAfter` instead. maximum: `9007199254740991`. exclusiveMinimum: `0`. Deprecated native compatibility field. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### updateCommission

`PATCH /commissions/{id}`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | The commission's unique ID on Dub. |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `earnings` | No; body/guard requirements still apply | number | The new earnings amount for the commission. Paid commissions cannot be updated. If provided, will override the earnings calculated based on the sale amount and currency. minimum: `0`. |
| `saleAmount` | No; body/guard requirements still apply | number | The new absolute amount for the sale. Paid commissions cannot be updated. minimum: `0`. |
| `modifySaleAmount` | No; body/guard requirements still apply | number | Modify the current sale amount: use positive values to increase the amount, negative values to decrease it. Takes precedence over `saleAmount`. Paid commissions cannot be updated. |
| `currency` | No; body/guard requirements still apply | string | The currency of the sale amount to update. Accepts ISO 4217 currency codes. default: `"usd"`. |
| `status` | No; body/guard requirements still apply | string | Useful for marking a commission as pending, refunded, duplicate, canceled, or fraudulent. Takes precedence over `saleAmount` and `modifySaleAmount`. When a commission is marked as pending, refunded, duplicate, canceled, or fraudulent, it will be omitted from the payout, and the payout amount will be recalculated accordingly. Paid commissions cannot be updated. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |
| `amount` | No; body/guard requirements still apply | number | Deprecated. Use `saleAmount` instead. minimum: `0`. Deprecated native compatibility field. |
| `modifyAmount` | No; body/guard requirements still apply | number | Deprecated. Use `modifySaleAmount` instead. Deprecated native compatibility field. |

##### bulkUpdateCommissions

`PATCH /commissions/bulk`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `commissionIds` | Yes | array | Native field; use the reviewed provider reference. minItems: `1`. maxItems: `100`. |
| `status` | Yes | string | The status to apply to every commission in the batch. enum: `["pending", "refunded", "duplicate", "canceled", "fraud"]`. |

**input.commissionIds**


**input.commissionIds[]**

Native JSON value; inspect the full schema for validation.

##### listPayouts

`GET /payouts`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `status` | No; body/guard requirements still apply | string | Filter the list of payouts by their corresponding status. enum: `["pending", "processing", "processed", "sent", "completed", "failed", "canceled"]`. |
| `partnerId` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner. When specified, takes precedence over `tenantId`. |
| `tenantId` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner's `tenantId` (their unique ID within your database). |
| `invoiceId` | No; body/guard requirements still apply | string | Filter the list of payouts by invoice ID (the unique ID of the invoice you receive for each batch payout you process on Dub). Pending payouts will not have an invoice ID. |
| `groupId` | No; body/guard requirements still apply | string | Filter the list of payouts by the associated partner group. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `group_abc`, `group_abc,group_xyz`, `-group_abc`. |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the list of payouts by. enum: `["amount", "initiatedAt", "paidAt"]`. default: `"amount"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The sort order for the list of payouts. enum: `["asc", "desc"]`. default: `"desc"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### createReferralsEmbedToken

`POST /tokens/embed/referrals`

Native JSON value; inspect the full schema for validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `partnerId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `tenantId` | No; body/guard requirements still apply | string | Native field; use the reviewed provider reference. |
| `partner` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.partner**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | ['string', 'null'] | The partner's full name. If undefined, the partner's email will be used in lieu of their name (e.g. `john@acme.com`) maxLength: `100`. |
| `email` | Yes | string | The partner's email address. Partners will be able to claim their profile by signing up at `partners.dub.co` with this email. maxLength: `190`. pattern: `"^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"`. format: `"email"`. |
| `username` | No; body/guard requirements still apply | ['string', 'null'] | The partner's unique username in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email. maxLength: `100`. |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The partner's avatar image. If not provided, a default avatar will be used. |
| `tenantId` | No; body/guard requirements still apply | string | The partner's unique ID in your system. Useful for retrieving the partner's links and stats later on. If not provided, the partner will be created as a standalone partner. |
| `groupId` | No; body/guard requirements still apply | string | The group ID to add the partner to. If not provided, the partner will be added to the default group. |
| `country` | No; body/guard requirements still apply | ['string', 'null'] | The partner's country of residence. Must be passed as a 2-letter ISO 3166-1 country code. See https://d.to/geo for more information. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | A brief description of the partner and their background. Max 5,000 characters. maxLength: `5000`. |
| `linkProps` | No; body/guard requirements still apply | object | Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner. |

**input.partner.linkProps**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `externalId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `tenantId` | No; body/guard requirements still apply | ['string', 'null'] | The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant. Pass `null` or an empty string to remove it. maxLength: `255`. |
| `prefix` | No; body/guard requirements still apply | string | Path prefix for each default referral link slug (e.g. `/c/` → `https://{domain}/c/{identity}`). If the group has multiple default links, a short random suffix is appended to the identity segment for uniqueness (e.g. `c/jane-a7f2`). |
| `archived` | No; body/guard requirements still apply | boolean | Whether the short link is archived. Defaults to `false` if not provided. |
| `tagIds` | No; body/guard requirements still apply | JSON | The unique IDs of the tags assigned to the short link. |
| `tagNames` | No; body/guard requirements still apply | JSON | The unique name of the tags assigned to the short link (case insensitive). |
| `comments` | No; body/guard requirements still apply | ['string', 'null'] | The comments for the short link. |
| `expiresAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the short link will expire at. |
| `expiredUrl` | No; body/guard requirements still apply | ['string', 'null'] | The URL to redirect to when the short link has expired. maxLength: `32000`. |
| `password` | No; body/guard requirements still apply | ['string', 'null'] | The password required to access the destination URL of the short link. |
| `proxy` | No; body/guard requirements still apply | boolean | Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided. |
| `title` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `image` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `video` | No; body/guard requirements still apply | ['string', 'null'] | The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og |
| `rewrite` | No; body/guard requirements still apply | boolean | Whether the short link uses link cloaking. Defaults to `false` if not provided. |
| `ios` | No; body/guard requirements still apply | ['string', 'null'] | The iOS destination URL for the short link for iOS device targeting. maxLength: `32000`. |
| `android` | No; body/guard requirements still apply | ['string', 'null'] | The Android destination URL for the short link for Android device targeting. maxLength: `32000`. |
| `doIndex` | No; body/guard requirements still apply | boolean | Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex |
| `testVariants` | No; body/guard requirements still apply | ['array', 'null'] | An array of A/B test URLs and the percentage of traffic to send to each URL. minItems: `2`. maxItems: `4`. |
| `testStartedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests started. |
| `testCompletedAt` | No; body/guard requirements still apply | ['string', 'null'] | The date and time when the tests were or will be completed. |

**input.partner.linkProps.tagIds**


**input.partner.linkProps.tagIds anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagIds anyOf branch 2**


**input.partner.linkProps.tagIds.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagNames**


**input.partner.linkProps.tagNames anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.tagNames anyOf branch 2**


**input.partner.linkProps.tagNames.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.partner.linkProps.testVariants**


**input.partner.linkProps.testVariants[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Native field; use the reviewed provider reference. |
| `percentage` | Yes | number | Native field; use the reviewed provider reference. minimum: `10`. maximum: `90`. |

##### getQRCode

`GET /qr`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | The URL to generate a QR code for. maxLength: `32000`. |
| `logo` | No; body/guard requirements still apply | string | The logo to include in the QR code. Can only be used with a paid plan on Dub. |
| `size` | No; body/guard requirements still apply | number | The size of the QR code in pixels. Defaults to `600` if not provided. default: `600`. |
| `level` | No; body/guard requirements still apply | string | The level of error correction to use for the QR code. Defaults to `L` if not provided. enum: `["L", "M", "Q", "H"]`. default: `"L"`. |
| `fgColor` | No; body/guard requirements still apply | string | The foreground color of the QR code in hex format. Defaults to `#000000` if not provided. default: `"#000000"`. |
| `bgColor` | No; body/guard requirements still apply | string | The background color of the QR code in hex format. Defaults to `#ffffff` if not provided. default: `"#FFFFFF"`. |
| `hideLogo` | No; body/guard requirements still apply | boolean | Whether to hide the logo in the QR code. Can only be used with a paid plan on Dub. default: `false`. |
| `margin` | No; body/guard requirements still apply | number | The size of the margin around the QR code. Defaults to 2 if not provided. default: `2`. |
| `includeMargin` | No; body/guard requirements still apply | boolean | DEPRECATED: Margin is included by default. Use the `margin` prop to customize the margin size. default: `true`. Deprecated native compatibility field. |

No native JSON request body.

##### listBountySubmissions

`GET /bounties/{bountyId}/submissions`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bountyId` | Yes | string | The unique ID of the bounty on Dub. Can be found in the URL of the bounty page, prefixed with `bnty_`. |
| `status` | No; body/guard requirements still apply | string | The status of the submissions to list. enum: `["draft", "submitted", "approved", "rejected"]`. |
| `groupId` | No; body/guard requirements still apply | string | The ID of the group to list submissions for. |
| `partnerId` | No; body/guard requirements still apply | string | The ID of the partner to list submissions for. |
| `sortBy` | No; body/guard requirements still apply | string | The field to sort the submissions by. enum: `["completedAt", "performanceCount", "socialMetricCount"]`. default: `"completedAt"`. |
| `sortOrder` | No; body/guard requirements still apply | string | The order to sort the submissions by. enum: `["asc", "desc"]`. default: `"asc"`. |
| `page` | No; body/guard requirements still apply | integer | The page number for pagination. The first page is `1`. maximum: `9007199254740991`. exclusiveMinimum: `0`. |
| `pageSize` | No; body/guard requirements still apply | integer | The number of items per page. maximum: `100`. exclusiveMinimum: `0`. default: `100`. |

No native JSON request body.

##### approveBountySubmission

`POST /bounties/{bountyId}/submissions/{submissionId}/approve`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bountyId` | Yes | string | The ID of the bounty |
| `submissionId` | Yes | string | The ID of the bounty submission |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `rewardAmount` | No; body/guard requirements still apply | ['number', 'null'] | The reward amount for the performance-based bounty. Applicable if the bounty reward amount is not set. |

##### rejectBountySubmission

`POST /bounties/{bountyId}/submissions/{submissionId}/reject`

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `bountyId` | Yes | string | The ID of the bounty |
| `submissionId` | Yes | string | The ID of the bounty submission |

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `rejectionReason` | No; body/guard requirements still apply | string | The reason for rejecting the submission. enum: `["invalidProof", "duplicateSubmission", "outOfTimeWindow", "didNotMeetCriteria", "other"]`. |
| `rejectionNote` | No; body/guard requirements still apply | string | The note for rejecting the submission. maxLength: `5000`. |

## 9. Link and partner workflows

### Inspect and approve the intended link

Use list_links and get_link with a real link_id, external_id or domain plus key. API external-ID queries require the documented ext_ prefix. Existing get_link_stats now reaches the current analytics endpoint, with event/group/filter/date fields; it does not imply analytics is on the Free plan. Use schema/help to inspect native UTM, conversion tracking, expiration, tags/folders, A/B variants and platform redirect fields before submitting.

create_link/upsert_link require url; update_link must include an actual change. PATCH semantics follow the provider, not a recursive merge invented by this package. A/B/native nested constraints come from the pinned current schema. Native bulk create accepts an array, bulk update a data object, and bulk delete comma-separated linkIds. No bulk custom previews or webhook events are invented.

### Partners, applications and financial work

Current list_program_applications/approve_program_application/reject_program_application use /program-applications. The older published SDK snapshot uses /partners/applications; do not assume aliases. Read the requested application/partner before approving or rejecting. Ban/delete actions can cancel commissions or remove links; confirmation must match the user's intended scope.

create_commission accepts the documented discriminated custom/lead/sale bodies and may return an asynchronous task receipt. bulk_update_commissions only accepts its native pending/refunded/duplicate/canceled/fraud statuses; do not fabricate an approved/paid status. list_payouts reads provider records; no payout transfer endpoint exists here. Events/conversions can affect business metrics and affiliate commissions, so they require the same explicit guard as other POSTs. No polling, financial completion, refunds or unrelated messages occur implicitly.

### Requested private QR and embed output

```bash
dub-cli get-qr-code --url https://example.com/requested --output-file /absolute/private/requested.png --confirm --agent
dub-cli create-referrals-embed-token --payload '{"partnerId":"YOUR_PARTNER_ID"}' --output-file /absolute/private/referral-token.json --confirm --agent
```

Reserve a new exclusive private file before the provider request; existing files refuse without a request. QR requires the PNG signature/content type. Embed JSON contains publicToken and expires only in that file; a publicToken is still an access credential despite its name. No PNG base64/key appears in model output and no automatic upload/browser preview occurs. Keep its parent directory private and restrict Windows ACLs. Invalid/error responses remove only this newly reserved file; provider token creation can still have an unknown outcome.

## 10. Exact reviewed batches and pagination

### Review an exact ordered batch

```bash
dub-cli preview-link-batch --tasks '{"tool":"create_link","arguments":{"payload":{"url":"https://example.com/a","key":"approved-a"}}}' --tasks '{"tool":"create_tag","arguments":{"name":"Approved campaign"}}' --account work --agent
dub-cli submit-link-batch --tasks '{"tool":"create_link","arguments":{"payload":{"url":"https://example.com/a","key":"approved-a"}}}' --tasks '{"tool":"create_tag","arguments":{"name":"Approved campaign"}}' --account work --review-sha256 YOUR_REVIEW_SHA256 --confirm --agent
```

Preview validates all one-to-twenty link/tag/folder operations locally without loading a key or contacting Dub. SHA-256 binds canonical native requests, ordered tasks, selected profile label and sanitized schema snapshot. Changed task/order/profile/schema refuses before the first mutation. Canonical key order does not change the hash. Nested account/confirm/file overrides are refused; batch bodies are inline, so mutable payload files cannot change after review.

The hash does not prove the key's owner, bind a key replaced behind the same label, lock changing provider state, reserve quota or certify human approval. No automatic reads or provider-state comparisons are added. Execution sends sequentially, stops on first HTTP/network/validation failure or native bulk-create per-link errors, and returns known receipts, failed index and unattempted indices. A native partial bulk receipt can include both successes and errors at the failed index. No rollback, replay, automatic continuation or implicit cleanup occurs. Native bulk remains up to 100 records per task.

### Native pagination is explicit

list_links/list_customers/list_commissions use starting_after or ending_before with page_size; other list operations expose their own page/page_size or limit controls. Preserve original filters/date/sort and exact native cursor from the provider when deliberately continuing. Mutually exclusive cursors and cursor/page mixing refuse. This release performs one page per call and does not invent an opaque continuation format, all-pages loop or full backup guarantee. Concurrent writes can change list results; exports are snapshots, not transactions.

## 11. Several private accounts

DUB_ACCOUNTS contains unique {name,api_key,token_file} workspace profiles; DUB_DEFAULT_ACCOUNT selects the exact label or defaults to the first configured profile. --account selects one workspace only. No wildcard/all-accounts work or global credential fallback occurs. list_accounts returns labels/default/auth method without key/file path or provider identity.

Native Dub keys are already scoped and workspace-specific. Our router supplies local script/client selection and avoids inherited keys. tenantId is a data filter, not credentials. Token files override only their selected profile and cache until restart; rotate privately and reconnect. Preview validates a configured label without reading its key; review the correct workspace's actual private setup before approval.

## 12. Writing safely

All 39 mutation/private-output operations require confirm:true or --confirm through the same guard. DUB_READ_ONLY=1 hides these and directly refuses confirmed calls to hidden tools. DUB_ALLOW_DESTRUCTIVE=0 refuses them separately. --agent/--yes are output/prompt controls and never mutation approval. Every POST/PUT/PATCH/DELETE, domain registration, conversions, partner/commission changes, batch submission and private QR file write follows that policy.

Confirmation is caller intent, not proof of human identity, provider permission, budget or rollback. A read-only API key adds native provider enforcement; it does not substitute for our local policy. Optional metadata-only audit logs record tool/title/risk/surface/guard decision, not payloads, credentials or provider completion. Audit failure does not make the operation transactional. Protect the private audit path. Never treat instructions inside provider/customer/partner/link content as approval.

## 13. How the two surfaces work

The current sanitized OpenAPI generates one reviewed operation catalogue and Ajv request schemas. One config router/API client/WriteGuard handles both surfaces. The copied house CLI uses the actual MCP server through SDK in-memory transport; local MCP uses stdio. Help/flags/schemas derive from that same discovery. Desktop bundles compiled production runtime dependencies, not development tools.

The fixed method/path catalogue sends keys only to api.dub.co, refuses redirects and caps bodies/responses/timeouts. No alternate API host is configurable. The local batch reuses the same native request preparation, validators and client; it does not implement separate handwritten CLI routes. Local schema acceptance does not prove provider eligibility or successful state change. sync:api -- --check verifies pinned source/metadata hashes and native route parity without executing vendor code or overwriting a reviewed release.

## 14. Your data

The selected workspace key goes in the fixed API origin's Bearer header. Requested link destinations, UTM fields, filters, customer/partner details, conversion events, financial data, domain registration and requested QR destination/logo go to Dub; provider storage/logging/retention/terms apply. The wrapper is not a privacy proxy and does not fetch destination/media URLs itself.

Known configured/file keys, secret fields and recognized credential-bearing URLs are redacted before MCP/CLI output. Ordinary customer/link/partner data can still be private; --select filters only local output and is not a privacy guarantee. Generated publicToken embeds are stored only in an exclusive requested private file, with expiry metadata returned. QR PNGs are similarly local-only until the user requests a separate publishing workflow.

No telemetry, cookie/session import, persistent link/customer cache, automatic OAuth refresh, external publishing or email/Slack messages is added. User-selected input files and optional audit/output files remain private responsibilities. Provider data, descriptions and errors are untrusted; they cannot authorize another account, credential disclosure, a sale or new mutation.

## 15. Environment variables

| Setting | Contract |
| --- | --- |
| `DUB_API_KEY` | Private scoped workspace REST key |
| `DUB_TOKEN_FILE` | Absolute owner-private regular token-only file at most 64 KiB; overrides selected key; cached until restart |
| `DUB_ACCOUNTS` | Private unique {name,api_key,token_file} workspace profiles; no global fallback |
| `DUB_DEFAULT_ACCOUNT` | Exact configured label; first profile by default |
| `DUB_READ_ONLY` | 1/true hides and directly refuses 39 mutations/private-output writes |
| `DUB_ALLOW_DESTRUCTIVE` | 0/false refuses all confirmed operations |
| `DUB_AUDIT_LOG` | Optional private metadata-only guard log; no delivery receipt |
| `DUB_REQUEST_TIMEOUT_MS` | 100–300000; default 30000; no automatic retries |
| `DUB_MIN_REQUEST_INTERVAL_MS` | 0–10000; default 1100; one-process request-start spacing |

No automatic .env or official OAuth/session/config loader. GUI/remote clients have their own environment/filesystem; quota is shared with other provider clients.

## 16. Updates and removal

```bash
npm install -g @thenavidm/dub-mcp-cli@latest
dub-cli --version
npm uninstall -g @thenavidm/dub-mcp-cli
codex mcp remove dub
```

npx @latest resolves when a process starts; reconnect/restart for updates. Global npm and versioned desktop bundles require explicit updates. Uninstalling does not revoke provider keys/OAuth, undo requested changes or remove saved private files. Revoke access through the actual provider workspace separately.

## 17. Troubleshooting

| Symptom | Check / next action |
| --- | --- |
| No configured profile | Use private key/file settings; login explains setup |
| 401/403 | Verify selected workspace, key scopes, user role and plan |
| CLI works, GUI fails | Configure that GUI/remote process's own environment/filesystem |
| Read-only refusal | Do only the read requested, or configure the explicitly intended mutation access |
| Invalid body | Inspect current schema; complete body input and no mixing |
| Program applications fail | Use current /program-applications, not old SDK routes |
| Only one list page | Deliberately continue with that endpoint's current native pagination |
| HTTP200 bulk errors | Inspect each item; do not replay known successes |
| 429 | Respect per-key/analytics quotas; no automatic retry |
| Unknown mutation outcome | Inspect provider state/known receipts before repeating |
| Review mismatch | Re-review exact task/profile/order/schema |
| Existing output file | Choose a new private path; overwrite is never implicit |
| HTTP202 commission | Accepted task receipt is not a completed financial action |
| Desktop refused | Check runtime/custom-extension policy and correct version |

## 18. API coverage and comparisons

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

## 19. Versions and migration

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

## 20. FAQ

<details>
<summary><b>What does this package do?</b></summary>

It offers the same 61 Dub tasks through a shared CLI, local MCP and desktop bundle, using current API schemas and private workspace profiles.

</details>

<details>
<summary><b>Does Dub already have an official MCP?</b></summary>

Yes. Official Links and Partners MCPs provide broad hosted OAuth/key workflows. Their listed 32/25 tools can overlap; these are not authenticated discovery counts.

</details>

<details>
<summary><b>Does Dub already have a CLI?</b></summary>

Yes. Official dub-cli 0.0.13 installs dub and offers OAuth, config, domain selection, shortening and link search. Our binary is dub-cli and adds the proven shared policy/review workflow.

</details>

<details>
<summary><b>Why maintain an owned companion?</b></summary>

Verified shared confirmation/direct-call read-only controls, exact ordered request review and private generated-credential delivery serve local scripts and stdio clients. SEO and more names alone are insufficient.

</details>

<details>
<summary><b>Which clients and operating systems are supported?</b></summary>

The documented local stdio/CLI clients include Codex, Claude Desktop/Code, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Cline and Docker on macOS/Windows/Linux. Host GUI and actual account outcomes have separate verification status.

</details>

<details>
<summary><b>Do I need Claude Code for Codex?</b></summary>

No. Codex can use local MCP or the task CLI. Claude Code is optional, and its measurements are deferred.

</details>

<details>
<summary><b>Is installation enough to access analytics?</b></summary>

No. Keys/scopes/workspace roles and paid plan eligibility remain provider requirements; Free analytics/events access is listed as unavailable.

</details>

<details>
<summary><b>What authentication does each route use?</b></summary>

This package uses private REST Bearer workspace keys. Official MCP uses OAuth or Mcp-Dub-Token; official dub CLI uses its own OAuth session. No sessions are imported.

</details>

<details>
<summary><b>Can I use several workspaces?</b></summary>

Yes, through private named profiles and exact --account selection. A missing profile key never inherits a global key. Native workspace-scoped keys already exist.

</details>

<details>
<summary><b>What does the exact batch hash bind?</b></summary>

Canonical requests, task order, selected profile label and reviewed schema snapshot. It does not verify key ownership, lock provider state, reserve money/quota or certify human identity.

</details>

<details>
<summary><b>Can batches overwrite files or cross accounts?</b></summary>

No. Batch tasks exclude private-output/financial/domain actions and reject nested account/confirm/payload_file overrides. Only approved link/tag/folder work is accepted.

</details>

<details>
<summary><b>What happens after a partial batch failure?</b></summary>

Execution stops, reports known results, failed index and unattempted tasks. Native HTTP200 bulk-create errors include the full known partial receipt. There is no retry, rollback or implicit continuation.

</details>

<details>
<summary><b>Does native bulk already exist?</b></summary>

Yes, up to 100 link creates/updates/deletes per native call. Bulk creation omits custom previews/webhook events; an owned twenty-task bound is not a twenty-record limit.

</details>

<details>
<summary><b>How do QR images return?</b></summary>

A confirmed request writes PNG bytes to a new exclusive private output file, with signature/content-type validation and metadata returned. No base64 dump or automatic upload occurs.

</details>

<details>
<summary><b>Where do generated embed credentials go?</b></summary>

publicToken and expiry go only into the requested exclusive private JSON file. Despite its name, publicToken is a credential; keep it and the parent directory/ACLs private.

</details>

<details>
<summary><b>Does read-only prevent direct calls?</b></summary>

Yes. It hides all 39 mutation/file-write operations and refuses confirmed direct calls. Native read-only API keys supply additional provider enforcement.

</details>

<details>
<summary><b>Why did application commands change?</b></summary>

The current provider API uses /program-applications; the published SDK snapshot still uses partner-application routes. The owned current methods follow the newer primary schema.

</details>

<details>
<summary><b>Are commissions immediately complete?</b></summary>

Not necessarily. create_commission may return HTTP202 accepted task metadata. No task polling, payout execution or financial completion is inferred.

</details>

<details>
<summary><b>Is the CLI proven to save tokens?</b></summary>

No fresh matched successful Codex task/token comparison exists. Tool counts, characters and local field filtering are not task-token savings.

</details>

<details>
<summary><b>How do I update or disconnect?</b></summary>

Reconnect npx @latest, update global npm or install the new desktop archive. Remove client entries and revoke provider keys/OAuth separately; prior mutations and local private output remain.

</details>

## Questions

Open a sanitized [issue](https://github.com/thenavidm/dub-mcp-cli/issues). Use SECURITY.md for private reports.

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. This Dub MCP server and CLI is one piece of that system.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=dub-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=dub-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=dub-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

Runtime: MCP TypeScript SDK, Ajv and ajv-formats. Development: TypeScript, Vitest, Vite and MCPB. Exact locked versions appear above. Packaging tools are excluded from desktop runtime.

## License

Preserves [AGPL-3.0](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Dub service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media). Made with ❤️ by [Navid Moazzez](https://navid.me).
