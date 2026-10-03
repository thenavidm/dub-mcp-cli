#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Dub MCP and shared task CLI ${VERSION}
dub-mcp                            Local stdio MCP
dub-cli <command> --help            Actual shared arguments
dub-cli schema <command>            Actual JSON input schema
dub-cli doctor [--network]          Local settings / explicit links read
dub-cli login                      Private setup instructions only
DUB_API_KEY / DUB_TOKEN_FILE        Private scoped workspace REST API key
DUB_ACCOUNTS                       Named isolated JSON workspace profiles
DUB_DEFAULT_ACCOUNT                Exact workspace profile label
DUB_READ_ONLY=1                    Hide and directly refuse mutations/file writes
DUB_ALLOW_DESTRUCTIVE=0             Refuse mutations even when confirmed
DUB_REQUEST_TIMEOUT_MS             Default 30000; no automatic retries
DUB_MIN_REQUEST_INTERVAL_MS        Default 1100; process-wide request pacing
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Create the intended workspace API key through https://app.dub.co/settings/tokens, with only required all/read-only/restricted permissions. Store privately in DUB_API_KEY or absolute owner-only DUB_TOKEN_FILE. Named DUB_ACCOUNTS profiles never inherit a global key. Official dub CLI OAuth and hosted MCP OAuth/Mcp-Dub-Token are separate. login prints instructions only; it does not save keys, start OAuth, inspect official sessions or purchase access.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('dub-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
