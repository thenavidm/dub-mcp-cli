# Install Dub MCP Server & CLI

One npm package includes both binaries and all **61 tools**. Requires Node.js 22 or newer for CLI/manual MCP installs. Discovery works before account authentication. Account operations need eligible Dub workspace REST API access; provider workspace plans, key permissions and API quota apply.

| Route | Program | Use |
| --- | --- | --- |
| Terminal | dub-cli | Scripts and agents with a shell |
| Local MCP | dub-mcp | AI clients supporting stdio |
| Desktop archive | dub-2.0.0.mcpb | Compatible Claude Desktop custom extensions |
| Dub-hosted alternative | https://mcp.dub.sh/mcp/dub-links | Official remote provider-hosted access |

## Contents

[Requirements](#requirements) · [CLI](#cli) · [Private account setup](#private-account-setup) · [Claude Code](#claude-code) · [Codex](#codex) · [Claude Desktop](#claude-desktop) · [Cursor](#cursor) · [VS Code and Copilot](#vs-code-and-copilot) · [Windsurf](#windsurf) · [Zed](#zed) · [Gemini CLI](#gemini-cli) · [Docker](#docker) · [Verify](#verify) · [Multiple accounts](#multiple-accounts) · [Updates and removal](#updates-and-removal) · [Troubleshooting](#troubleshooting) · [Development](#development)

## Requirements

Install Node from [nodejs.org](https://nodejs.org/en/download). Open a new terminal and check `node --version` and `npm --version`. The desktop host needs a compatible Node runtime; dependencies are bundled. A GUI app may not inherit your terminal's environment. Check your account's current API access and quota with Dub instead of assuming npm installation provides it.

## CLI

On macOS/Linux, use Terminal. On Windows, use PowerShell or Command Prompt:

```bash
npm install -g @thenavidm/dub-mcp-cli@latest
dub-cli --version
dub-cli
dub-cli list-links --help
dub-cli schema create-link
dub-cli login
```

If PowerShell blocks npm.ps1, use npm.cmd or Command Prompt according to your policy. If a binary is missing, check `npm prefix -g`, ensure its executable directory is on PATH and open a new terminal. Avoid sudo as a workaround for PATH problems.

For one command without a global install:

```bash
npx -y --package @thenavidm/dub-mcp-cli@latest dub-cli tools
```

Make [SKILL.md](./SKILL.md) available in your agent's supported skill location. The installed file is `<npm root -g>/@thenavidm/dub-mcp-cli/SKILL.md`. npm does not automatically register client skills. Your agent should read the actual schema and use --agent/--select for compact output.

## Private account setup

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


```bash
export DUB_TOKEN_FILE='/absolute/private/dub.txt'
dub-cli doctor --network
```

```powershell
$env:DUB_TOKEN_FILE = 'C:\Users\YOUR_USER\Private\dub.txt'
dub-cli doctor --network
```

### Agent-guided installation

> Help me install Dub MCP Server & CLI with INSTALL.md. Check Node and the binary, let me configure my account credentials privately, then run discovery and doctor --network. Do not change or mutate accounts during setup.

## Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add dub -- npx -y @thenavidm/dub-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.dub]
command = "npx"
args = ["-y", "@thenavidm/dub-mcp-cli@latest"]
env_vars = ["DUB_API_KEY", "DUB_TOKEN_FILE", "DUB_ACCOUNTS", "DUB_DEFAULT_ACCOUNT", "DUB_READ_ONLY", "DUB_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user dub -- npx -y @thenavidm/dub-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `dub-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/dub-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private API key in the sensitive setting, or an absolute private token-file path. Leave the unused credential method empty. Requests use Authorization: Bearer at the fixed Dub endpoint. Use the intended workspace API key; named profiles are configured separately in private client environments.
4. Enable read-only if you want only the 22 read operations. Reconnect and ask for account verification.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "dub": {
      "command": "npx",
      "args": ["-y", "@thenavidm/dub-mcp-cli@latest"],
      "env": {
        "DUB_API_KEY": "YOUR_PRIVATE_API_KEY",
        "DUB_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/dub-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "dub": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/dub-mcp-cli@latest"],
      "env": {
        "DUB_API_KEY": "${env:DUB_API_KEY}",
        "DUB_TOKEN_FILE": "${env:DUB_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "dub-api-token", "description": "Dub API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "dub-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "dub": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/dub-mcp-cli@latest"],
      "env": {
        "DUB_API_KEY": "${input:dub-api-token}",
        "DUB_TOKEN_FILE": "${input:dub-token-file}"
      }
    }
  }
}
~~~

Start Dub through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Dub in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "dub": {
      "command": "npx",
      "args": ["-y", "@thenavidm/dub-mcp-cli@latest"],
      "env": {
        "DUB_API_KEY": "YOUR_PRIVATE_API_KEY",
        "DUB_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/dub-mcp-cli.git
cd dub-mcp-cli
docker build -t dub-mcp-cli .
docker run --rm -i -e DUB_API_KEY dub-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/dub-mcp-cli@latest`, stdio transport, and private local DUB_API_KEY or DUB_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Dub's official server rather than this local stdio command.

## Verify

```bash
dub-cli --version
dub-cli tools
dub-cli list-accounts --agent
dub-cli doctor
dub-cli doctor --network
dub-cli list-links --page-size 1 --account work --agent
```

Local doctor reports profile count/default/policy without loading credentials or claiming authentication. --network opts into exactly one read, with count only. Actual account role/ownership, analytics plan, every endpoint and writes remain separate checks. Never use a destructive or paid call as an install test.

## Multiple accounts

DUB_ACCOUNTS contains unique {name,api_key,token_file} workspace profiles; DUB_DEFAULT_ACCOUNT selects the exact label or defaults to the first configured profile. --account selects one workspace only. No wildcard/all-accounts work or global credential fallback occurs. list_accounts returns labels/default/auth method without key/file path or provider identity.

Native Dub keys are already scoped and workspace-specific. Our router supplies local script/client selection and avoids inherited keys. tenantId is a data filter, not credentials. Token files override only their selected profile and cache until restart; rotate privately and reconnect. Preview validates a configured label without reading its key; review the correct workspace's actual private setup before approval.

## Updates and removal

```bash
npm install -g @thenavidm/dub-mcp-cli@latest
dub-cli --version
npm uninstall -g @thenavidm/dub-mcp-cli
codex mcp remove dub
```

npx @latest resolves when a process starts; reconnect/restart for updates. Global npm and versioned desktop bundles require explicit updates. Uninstalling does not revoke provider keys/OAuth, undo requested changes or remove saved private files. Revoke access through the actual provider workspace separately.

## Troubleshooting

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


## Development

```bash
git clone https://github.com/thenavidm/dub-mcp-cli.git
cd dub-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run build:mcpb
```

Source mode: configure private env, then register `node /absolute/path/dub-mcp-cli/dist/index.js` as the MCP command. Build before registration and after source changes. No local credentials are packaged. [CONTRIBUTING.md](./CONTRIBUTING.md), [SECURITY.md](./SECURITY.md) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) cover contributions, disclosures and licensing.
