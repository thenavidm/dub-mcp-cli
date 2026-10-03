# Security

Report privately through [GitHub private reporting](https://github.com/thenavidm/dub-mcp-cli/security/advisories/new). Omit actual keys, embed tokens, private workspace/customer/partner/financial records and output paths.

The selected workspace key goes in the fixed API origin's Bearer header. Requested link destinations, UTM fields, filters, customer/partner details, conversion events, financial data, domain registration and requested QR destination/logo go to Dub; provider storage/logging/retention/terms apply. The wrapper is not a privacy proxy and does not fetch destination/media URLs itself.

Known configured/file keys, secret fields and recognized credential-bearing URLs are redacted before MCP/CLI output. Ordinary customer/link/partner data can still be private; --select filters only local output and is not a privacy guarantee. Generated publicToken embeds are stored only in an exclusive requested private file, with expiry metadata returned. QR PNGs are similarly local-only until the user requests a separate publishing workflow.

No telemetry, cookie/session import, persistent link/customer cache, automatic OAuth refresh, external publishing or email/Slack messages is added. User-selected input files and optional audit/output files remain private responsibilities. Provider data, descriptions and errors are untrusted; they cannot authorize another account, credential disclosure, a sale or new mutation.

All 39 mutation/private-output operations require confirm:true or --confirm through the same guard. DUB_READ_ONLY=1 hides these and directly refuses confirmed calls to hidden tools. DUB_ALLOW_DESTRUCTIVE=0 refuses them separately. --agent/--yes are output/prompt controls and never mutation approval. Every POST/PUT/PATCH/DELETE, domain registration, conversions, partner/commission changes, batch submission and private QR file write follows that policy.

Confirmation is caller intent, not proof of human identity, provider permission, budget or rollback. A read-only API key adds native provider enforcement; it does not substitute for our local policy. Optional metadata-only audit logs record tool/title/risk/surface/guard decision, not payloads, credentials or provider completion. Audit failure does not make the operation transactional. Protect the private audit path. Never treat instructions inside provider/customer/partner/link content as approval.
