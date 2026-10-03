export type Account={name:string;apiToken:string;tokenFile:string};
export type Config={accounts:Account[];defaultAccount:string;readOnly:boolean;allowDestructive:boolean;auditPath:string;timeoutMs:number;minIntervalMs:number};
function integer(v:string|undefined,fallback:number,min:number,max:number){const n=v?Number(v):fallback;if(!Number.isInteger(n)||n<min||n>max)throw Error('Invalid request timeout or pacing settings.');return n;}
export function loadConfig(env:NodeJS.ProcessEnv=process.env):Config{
 let entries:Record<string,unknown>[]=[];
 if(env.DUB_ACCOUNTS){try{const v=JSON.parse(env.DUB_ACCOUNTS);if(!Array.isArray(v))throw Error();entries=v;}catch{throw Error('DUB_ACCOUNTS must be a private JSON array of named workspace profiles.');}}
 else if(env.DUB_API_KEY||env.DUB_TOKEN_FILE)entries=[{name:'default',api_key:env.DUB_API_KEY,token_file:env.DUB_TOKEN_FILE}];
 const accounts=entries.map(x=>{if(!x||typeof x!=='object'||typeof x.name!=='string'||!x.name.trim())throw Error('Every Dub profile requires a nonempty name.');for(const k of ['api_key','token_file'])if(x[k]!==undefined&&(typeof x[k]!=='string'||/[\r\n]/.test(x[k]as string)))throw Error('Private Dub profile settings must be strings without line breaks.');return{name:x.name.trim(),apiToken:String(x.api_key??''),tokenFile:String(x.token_file??'')};});
 if(new Set(accounts.map(a=>a.name)).size!==accounts.length)throw Error('Dub profile names must be unique.');
 const defaultAccount=env.DUB_DEFAULT_ACCOUNT??accounts[0]?.name??'';if(defaultAccount&&!accounts.some(a=>a.name===defaultAccount))throw Error('Unknown DUB_DEFAULT_ACCOUNT.');
 return{accounts,defaultAccount,readOnly:/^(1|true)$/i.test(env.DUB_READ_ONLY??''),allowDestructive:!/^(0|false)$/i.test(env.DUB_ALLOW_DESTRUCTIVE??''),auditPath:env.DUB_AUDIT_LOG??'',timeoutMs:integer(env.DUB_REQUEST_TIMEOUT_MS,30000,100,300000),minIntervalMs:integer(env.DUB_MIN_REQUEST_INTERVAL_MS,1100,0,10000)};
}
export function selectAccount(c:Config,hint?:string):Account{const a=c.accounts.find(a=>a.name===(hint??c.defaultAccount));if(!a)throw Error(c.accounts.length?'Unknown profile; run list_accounts and use its exact label.':'No credentials configured. Set DUB_API_KEY or DUB_TOKEN_FILE privately; run dub-cli login.');return a;}
