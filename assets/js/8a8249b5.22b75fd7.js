"use strict";(self.webpackChunknear_wiki=self.webpackChunknear_wiki||[]).push([[3682],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1062:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Integrator FAQ",c={unversionedId:"resources/faq/integrator-faq",id:"resources/faq/integrator-faq",isDocsHomePage:!1,title:"Integrator FAQ",description:"Orientation",source:"@site/docs/resources/faq/integrator-faq.md",sourceDirName:"resources/faq",slug:"/resources/faq/integrator-faq",permalink:"/wiki/docs/resources/faq/integrator-faq",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/resources/faq/integrator-faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/wiki/docs/resources/faq/README"},next:{title:"Onboarding With LinkDrop",permalink:"/wiki/docs/resources/faq/onboarding-with-linkdrop"}},h=[{value:"Orientation",id:"orientation",children:[{value:"What is a good project summary for NEAR?",id:"what-is-a-good-project-summary-for-near",children:[],level:3},{value:"What&#39;s special about NEAR?",id:"whats-special-about-near",children:[],level:3},{value:"Is NEAR open source?",id:"is-near-open-source",children:[],level:3},{value:"How are cryptographic functions used?",id:"how-are-cryptographic-functions-used",children:[],level:3},{value:"Do you have any on-chain governance mechanisms?",id:"do-you-have-any-on-chain-governance-mechanisms",children:[],level:3},{value:"Do you have a bug-bounty program?",id:"do-you-have-a-bug-bounty-program",children:[],level:3},{value:"What contracts should we be aware of right now?",id:"what-contracts-should-we-be-aware-of-right-now",children:[],level:3},{value:"Do you have a cold wallet implementation (ie. Ledger)?",id:"do-you-have-a-cold-wallet-implementation-ie-ledger",children:[],level:3}],level:2},{value:"Validators",id:"validators",children:[{value:"What is the process for becoming a validator?",id:"what-is-the-process-for-becoming-a-validator",children:[],level:3},{value:"How long does a validator remain a validator?",id:"how-long-does-a-validator-remain-a-validator",children:[],level:3},{value:"What is the penalty for misbehaving validators?",id:"what-is-the-penalty-for-misbehaving-validators",children:[],level:3},{value:"What is the mechanism for for delegating stake to validators?",id:"what-is-the-mechanism-for-for-delegating-stake-to-validators",children:[],level:3},{value:"Does a validator control funds that have been delegated to them?",id:"does-a-validator-control-funds-that-have-been-delegated-to-them",children:[],level:3},{value:"How do we get the balance of an account after it has delegated funds?",id:"how-do-we-get-the-balance-of-an-account-after-it-has-delegated-funds",children:[],level:3}],level:2},{value:"Nodes",id:"nodes",children:[{value:"Can a node be configured to archive all blockchain data since genesis?",id:"can-a-node-be-configured-to-archive-all-blockchain-data-since-genesis",children:[],level:3},{value:"Can a node be configured to expose an RPC (ex: HTTP) interface?",id:"can-a-node-be-configured-to-expose-an-rpc-ex-http-interface",children:[],level:3},{value:"Can a node be gracefully terminated and restarted (using archived data on disk to continue syncing)?",id:"can-a-node-be-gracefully-terminated-and-restarted-using-archived-data-on-disk-to-continue-syncing",children:[],level:3},{value:"Does a node expose an interface for retrieving health telemetry in a structured format (ex: JSON) over RPC?",id:"does-a-node-expose-an-interface-for-retrieving-health-telemetry-in-a-structured-format-ex-json-over-rpc",children:[],level:3},{value:"Can a node can be started using a Dockerfile without human supervision?",id:"can-a-node-can-be-started-using-a-dockerfile-without-human-supervision",children:[],level:3},{value:"What is the source of truth for current block height exposed via API?",id:"what-is-the-source-of-truth-for-current-block-height-exposed-via-api",children:[],level:3},{value:"How old can the referenced block hash be before it&#39;s invalid?",id:"how-old-can-the-referenced-block-hash-be-before-its-invalid",children:[],level:3}],level:2},{value:"Blockchain",id:"blockchain",children:[{value:"How will the network be bootstrapped?",id:"how-will-the-network-be-bootstrapped",children:[],level:3},{value:"What is the network upgrade process?",id:"what-is-the-network-upgrade-process",children:[],level:3},{value:"Which consensus algorithm does NEAR use?",id:"which-consensus-algorithm-does-near-use",children:[],level:3},{value:"How does on-chain transaction finality work?",id:"how-does-on-chain-transaction-finality-work",children:[],level:3}],level:2},{value:"Accounts",id:"accounts",children:[{value:"How are addresses generated?",id:"how-are-addresses-generated",children:[],level:3},{value:"What is the balance record-keeping model on the NEAR platform?",id:"what-is-the-balance-record-keeping-model-on-the-near-platform",children:[],level:3},{value:"How are user accounts represented on-chain?",id:"how-are-user-accounts-represented-on-chain",children:[],level:3},{value:"Is there a minimum account balance?",id:"is-there-a-minimum-account-balance",children:[],level:3},{value:"How many keys are used?",id:"how-many-keys-are-used",children:[],level:3},{value:"Which balance look-ups exists? What is required?",id:"which-balance-look-ups-exists-what-is-required",children:[],level:3}],level:2},{value:"Fees",id:"fees",children:[{value:"What is the fee structure for on-chain transactions?",id:"what-is-the-fee-structure-for-on-chain-transactions",children:[],level:3},{value:"How do we know how much gas to add to a transaction?",id:"how-do-we-know-how-much-gas-to-add-to-a-transaction",children:[],level:3}],level:2},{value:"Transactions",id:"transactions",children:[{value:"How do we follow Tx status?",id:"how-do-we-follow-tx-status",children:[],level:3},{value:"How are transactions constructed and signed?",id:"how-are-transactions-constructed-and-signed",children:[],level:3},{value:"How is the hash preimage generated? Which fields does the raw transaction consist of?",id:"how-is-the-hash-preimage-generated-which-fields-does-the-raw-transaction-consist-of",children:[],level:3},{value:"How do transactions work on the NEAR platform?",id:"how-do-transactions-work-on-the-near-platform",children:[],level:3},{value:"How does NEAR serialize transactions?",id:"how-does-near-serialize-transactions",children:[],level:3}],level:2},{value:"Additional Resources",id:"additional-resources",children:[],level:2}],d={toc:h};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrator-faq"},"Integrator FAQ"),(0,r.kt)("h2",{id:"orientation"},"Orientation"),(0,r.kt)("h3",{id:"what-is-a-good-project-summary-for-near"},"What is a good project summary for NEAR?"),(0,r.kt)("p",null,"NEAR is a sharded, public, proof-of-stake blockchain and smart contract platform. It is built in Rust and contracts compile to WASM. It is conceptually similar to Ethereum 2.0."),(0,r.kt)("h3",{id:"whats-special-about-near"},"What's special about NEAR?"),(0,r.kt)("p",null,"NEAR is the blockchain for builders."),(0,r.kt)("p",null,"If you understand the basics of web development, you can write, test and deploy scalable decentralized applications in minutes on the most developer-friendly blockchain without having to learn new tools or languages."),(0,r.kt)("h3",{id:"is-near-open-source"},"Is NEAR open source?"),(0,r.kt)("p",null,"Yes. Have look at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near"},"GitHub organization"),"."),(0,r.kt)("h3",{id:"how-are-cryptographic-functions-used"},"How are cryptographic functions used?"),(0,r.kt)("p",null,"We support both ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519")," for account keys and ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519")," for signing transactions. We currently use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519_dalek")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sha2")," libraries for crypto."),(0,r.kt)("h3",{id:"do-you-have-any-on-chain-governance-mechanisms"},"Do you have any on-chain governance mechanisms?"),(0,r.kt)("p",null,"NEAR does not have any on-chain governance at the moment. Any changes to state or state transition function must be done through a hard fork."),(0,r.kt)("h3",{id:"do-you-have-a-bug-bounty-program"},"Do you have a bug-bounty program?"),(0,r.kt)("p",null,"Our plan is to have a transparent Bug Bounty program with clear guidelines for paying out to those reporting issues. Payments will likely be based on publicly available rankings provided by protocol developers based on issue severity."),(0,r.kt)("h3",{id:"what-contracts-should-we-be-aware-of-right-now"},"What contracts should we be aware of right now?"),(0,r.kt)("p",null,"We have developed a number of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/initial-contracts"},"initial contracts")," with ",(0,r.kt)("strong",{parentName:"p"},"ones in bold")," being most mature at time of writing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking Pool / Delegation contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lockup / Vesting contract")),(0,r.kt)("li",{parentName:"ul"},"Whitelist Contract"),(0,r.kt)("li",{parentName:"ul"},"Staking Pool Factory"),(0,r.kt)("li",{parentName:"ul"},"Multisig contract")),(0,r.kt)("h3",{id:"do-you-have-a-cold-wallet-implementation-ie-ledger"},"Do you have a cold wallet implementation (ie. Ledger)?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-ledger-app"},"https://github.com/near/near-ledger-app")),(0,r.kt)("h2",{id:"validators"},"Validators"),(0,r.kt)("h3",{id:"what-is-the-process-for-becoming-a-validator"},"What is the process for becoming a validator?"),(0,r.kt)("p",null,"Validation is permissionless and determined via auction. Parties who want to become a validator submit a special transaction to the chain one day ahead which indicates how many tokens they want to stake. An auction is run which determines the minimum necessary stake to get a validation seat during the next epoch and, if the amount submitted is greater than the minimum threshold, the submitter will validate at least one shard during the next epoch."),(0,r.kt)("h3",{id:"how-long-does-a-validator-remain-a-validator"},"How long does a validator remain a validator?"),(0,r.kt)("p",null,"A validator will stop being a validator for the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not producing enough blocks or chunks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not getting elected in the auction for next epoch because their stake is not large enough.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Getting slashed."),(0,r.kt)("p",{parentName:"li"},"Otherwise a validator will remain a validator indefinitely."))),(0,r.kt)("p",null,"Validator election happens in epochs. The ",(0,r.kt)("a",{parentName:"p",href:"https://near.org/downloads/Nightshade.pdf"},"Nightshade whitepaper"),' introduces epochs this way: "the maintenance of the network is done in epochs" where an epoch is a period of time on the order of half a day.'),(0,r.kt)("p",null,"At the beginning of each epoch, some computation produces a list of validators for the ",(0,r.kt)("em",{parentName:"p"},"very next epoch"),'. The input to this computation includes all accounts that have "raised their hand to be a validator" by submitting a special transaction (',(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions.html#stakeaction"},(0,r.kt)("inlineCode",{parentName:"a"},"StakeAction")),") expressing the committment of some amount of tokens over the system's staking threshold, as well as validators from the previous epoch. The output of this computation is a list of the validators for the very next epoch."),(0,r.kt)("h3",{id:"what-is-the-penalty-for-misbehaving-validators"},"What is the penalty for misbehaving validators?"),(0,r.kt)("p",null,"Validators are not slashed for being offline but they do miss out on the rewards of validating. Validators who miss too many blocks or chunks will be removed from the validation set in the next auction and not get any reward (but, again, without slashing)."),(0,r.kt)("p",null,'Any foul play on the part of the validator that is detected by the system may result is a "slashing event" where the validator is marked as out of integrity and forfeit their stake (according to some formula of progressive severity). The slashed stake is burnt.'),(0,r.kt)("h3",{id:"what-is-the-mechanism-for-for-delegating-stake-to-validators"},"What is the mechanism for for delegating stake to validators?"),(0,r.kt)("p",null,"NEAR supports separate validation keys that can be used in smart contracts to delegate stake. Delegation is done via smart contract which allows for a validator to define a custom way to collect stake, manage it and split rewards. This also allows validators to provide leverage or derivatives on stake. Delegated stake will be slashed like any other stake if the node misbehaves."),(0,r.kt)("p",null,"If a validator misbehaves the funds of the delegators are also slashed. There is no waiting period for delegators to withdraw their stake."),(0,r.kt)("h3",{id:"does-a-validator-control-funds-that-have-been-delegated-to-them"},"Does a validator control funds that have been delegated to them?"),(0,r.kt)("p",null,"Delegation is custodial (you are transferring funds to a different account, the smart contract that implements staking pool). We provide a reference implementation being security reviewed and tested by 100 validators at time of writing."),(0,r.kt)("p",null,"We allow validators to write and deploy new contracts but it is up to users to decide if they want to delegate. Validators can compete for delegation by choosing different logic and conditions around tax optimization, etc."),(0,r.kt)("p",null,"Currently no slashing but will be added as we add shards into the system. At some point validators will be able to add an option to shield delegators from slashing (similar to Tezos model)."),(0,r.kt)("h3",{id:"how-do-we-get-the-balance-of-an-account-after-it-has-delegated-funds"},"How do we get the balance of an account after it has delegated funds?"),(0,r.kt)("p",null,"One would need to query the staking pool contract to get balance."),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("h3",{id:"can-a-node-be-configured-to-archive-all-blockchain-data-since-genesis"},"Can a node be configured to archive all blockchain data since genesis?"),(0,r.kt)("p",null,"v Yes. Start the node using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./target/release/near run --archive\n")),(0,r.kt)("h3",{id:"can-a-node-be-configured-to-expose-an-rpc-ex-http-interface"},"Can a node be configured to expose an RPC (ex: HTTP) interface?"),(0,r.kt)("p",null,"Yes. All nodes expose this interface by default which can be configured by setting the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"listen_addr:port")," in the node's ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," file."),(0,r.kt)("h3",{id:"can-a-node-be-gracefully-terminated-and-restarted-using-archived-data-on-disk-to-continue-syncing"},"Can a node be gracefully terminated and restarted (using archived data on disk to continue syncing)?"),(0,r.kt)("p",null,"Yes."),(0,r.kt)("h3",{id:"does-a-node-expose-an-interface-for-retrieving-health-telemetry-in-a-structured-format-ex-json-over-rpc"},"Does a node expose an interface for retrieving health telemetry in a structured format (ex: JSON) over RPC?"),(0,r.kt)("p",null,"Yes. ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /health")," provide this interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/status"),": block height, syncing status, peer count, etc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/health"),": success/failure if node is up running & progressing")),(0,r.kt)("h3",{id:"can-a-node-can-be-started-using-a-dockerfile-without-human-supervision"},"Can a node can be started using a Dockerfile without human supervision?"),(0,r.kt)("p",null,"Yes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run <port mapping> <mount data folder> <ENV vars> nearprotocol/nearcore:latest\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"nearcore/scripts/nodelib.py")," for different examples of configuration."),(0,r.kt)("h3",{id:"what-is-the-source-of-truth-for-current-block-height-exposed-via-api"},"What is the source of truth for current block height exposed via API?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MainNet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.mainnet.near.org"},"https://explorer.mainnet.near.org")," (also ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.near.org"},"https://explorer.near.org"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.mainnet.near.org/status"},"https://rpc.mainnet.near.org/status")))),(0,r.kt)("li",{parentName:"ul"},"TestNet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.testnet.near.org"},"https://explorer.testnet.near.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.testnet.near.org/status"},"https://rpc.testnet.near.org/status")))),(0,r.kt)("li",{parentName:"ul"},"BetaNet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.betanet.near.org"},"https://explorer.betanet.near.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.betanet.near.org/status"},"https://rpc.betanet.near.org/status"))))),(0,r.kt)("h3",{id:"how-old-can-the-referenced-block-hash-be-before-its-invalid"},"How old can the referenced block hash be before it's invalid?"),(0,r.kt)("p",null,"There is a genesis parameter which can be discovered for any network using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_genesis_config\n# in the line above, testnet may be replaced with mainnet or betanet\n")),(0,r.kt)("p",null,"It's ",(0,r.kt)("inlineCode",{parentName:"p"},"43200")," seconds or ",(0,r.kt)("inlineCode",{parentName:"p"},"~12")," hours. You can view the live configuration for ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch_length")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/api/rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"protocol_config")," RPC endpoint"),"."),(0,r.kt)("p",null,"In the response we find ",(0,r.kt)("inlineCode",{parentName:"p"},'transaction_validity_period": 86400')," (and since it takes about 1 second to produce a block, this period is about 24 hrs)"),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("h3",{id:"how-will-the-network-be-bootstrapped"},"How will the network be bootstrapped?"),(0,r.kt)("p",null,"Distribution at genesis will be spread among the NEAR team, our contributors, project partners (ie. contributor, beta applications, infrastructure developers, etc.) and the NEAR foundation (with many portions of that segregated for post-MainNet distribution activity and unavailable to stake so the foundation isn\u2019t able to control the network)."),(0,r.kt)("p",null,"There will be auctions occurring on the platform after launch which will allocate large amounts of tokens over the next 2 years. Additionally we are planning to run TestNet where any validator who participates will receive rewards in real tokens. We are planning to onboard at least 50 separate entities to be validators at launch."),(0,r.kt)("h3",{id:"what-is-the-network-upgrade-process"},"What is the network upgrade process?"),(0,r.kt)("p",null,"We are currently upgrading via restarting with a new genesis block."),(0,r.kt)("h3",{id:"which-consensus-algorithm-does-near-use"},"Which consensus algorithm does NEAR use?"),(0,r.kt)("p",null,"NEAR is a sharded ",(0,r.kt)("strong",{parentName:"p"},"proof-of-stake")," blockchain."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You can read more in our "),(0,r.kt)("a",{parentName:"p",href:"https://near.org/downloads/Nightshade.pdf"},(0,r.kt)("em",{parentName:"a"},"Nightshade whitepaper")),(0,r.kt)("em",{parentName:"p"},".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"A few relevant details have been extracted here for convenience:")),(0,r.kt)("p",{parentName:"blockquote"},"[","Since NEAR is a sharded blockchain, there are challenges that need to be overcome] including state validity and data availability problems. ",(0,r.kt)("em",{parentName:"p"},"Nightshade")," is the solution Near Protocol is built upon that addresses these issues."),(0,r.kt)("p",{parentName:"blockquote"},"Nightshade uses the heaviest chain consensus. Specifically when a block producer produces a block (see section 3.3), they can collect signatures from other block producers and validators attesting to the previous block. The weight of a block is then the cumulative stake of all the signers whose signatures are included in the block. The weight of a chain is the sum of the block weights."),(0,r.kt)("p",{parentName:"blockquote"},"On top of the heaviest chain consensus we use a finality gadget that uses the attestations to finalize the blocks. To reduce the complexity of the system, we use a finality gadget that doesn\u2019t influence the fork choice rule in any way, and instead only introduces extra slashing conditions, such that once a block is finalized by the finality gadget, a fork is impossible unless a very large percentage of the total stake is slashed.")),(0,r.kt)("h3",{id:"how-does-on-chain-transaction-finality-work"},"How does on-chain transaction finality work?"),(0,r.kt)("p",null,"Finality is deterministic, and requires at least 3 blocks as well as (2/3 +1) signatures of the current validator set."),(0,r.kt)("p",null,"In a normal operation, we expect this to happen right at 3 blocks but it is not guaranteed."),(0,r.kt)("p",null,"Finality will be exposed via RPC when querying block or transaction."),(0,r.kt)("p",null,"Our definition of finality is BOTH:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block has quorum pre-commit from the finality gadget. See details of the finality gadget ",(0,r.kt)("a",{parentName:"li",href:"https://near.org/downloads/PoST.pdf"},"[","here","]")),(0,r.kt)("li",{parentName:"ul"},"At least 120 blocks (2-3 minutes) built on top of the block of interest. This is relevant in case of invalid state transition in some shard and provides enough time for state change challenges. In case all shards are tracked and some mechanics to pause across nodes is employed, this is not needed. We recommend exchanges track all shards.")),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("h3",{id:"how-are-addresses-generated"},"How are addresses generated?"),(0,r.kt)("p",null,"Please check out the spec here on accounts ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/DataStructures/Account.html"},"https://nomicon.io/DataStructures/Account.html"),"."),(0,r.kt)("h3",{id:"what-is-the-balance-record-keeping-model-on-the-near-platform"},"What is the balance record-keeping model on the NEAR platform?"),(0,r.kt)("p",null,"NEAR uses an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),"-based model. All users and contracts are associated with at least 1 account. Each account lives on a single shard. Each account can have multiple keys for signing transactions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You can read "),(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/DataStructures/Account.html"},(0,r.kt)("em",{parentName:"a"},"more about NEAR accounts here"))),(0,r.kt)("h3",{id:"how-are-user-accounts-represented-on-chain"},"How are user accounts represented on-chain?"),(0,r.kt)("p",null,"Users create accounts with human-readable names (eg ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),") which can contain multiple keypairs with individual permissions. Accounts can be atomically and securely transferred between parties as a native transaction on the network. Permissions are programmable with smart contracts as well. For example, a lock up contract is just an account with permission on the key that does not allow to transfer funds greater than those unlocked."),(0,r.kt)("h3",{id:"is-there-a-minimum-account-balance"},"Is there a minimum account balance?"),(0,r.kt)("p",null,'To limit on-chain "dust", accounts (and contracts) are charged rent for storing data on the chain. This means that if the balance of the account goes below some ',(0,r.kt)("inlineCode",{parentName:"p"},"threshold * rent_on_block")," then account can be removed by anyone. Also any user can remove their own account and transfer left over balance to another (beneficiary) account."),(0,r.kt)("p",null,"There will be a restoration mechanism for accounts removed (or slept) in this way implemented in the future."),(0,r.kt)("h3",{id:"how-many-keys-are-used"},"How many keys are used?"),(0,r.kt)("p",null,"An account can have arbitrarily many keys, as long as it has enough tokens for their storage."),(0,r.kt)("h3",{id:"which-balance-look-ups-exists-what-is-required"},"Which balance look-ups exists? What is required?"),(0,r.kt)("p",null,"We have an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/api/rpc"},"RPC method for viewing account"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/d7f0cb87ec320b723734045a4ee9d17d94574a19/src/providers/json-rpc-provider.ts#L73"},"JS implementation is here"),". Note that in this RPC interface you can specify the finality requirement (whether to query the latest state or finalized state)."),(0,r.kt)("p",null,"For custody purposes, it is recommended not to rely on latest state but only on what is finalized."),(0,r.kt)("h2",{id:"fees"},"Fees"),(0,r.kt)("h3",{id:"what-is-the-fee-structure-for-on-chain-transactions"},"What is the fee structure for on-chain transactions?"),(0,r.kt)("p",null,"NEAR uses a gas-based model where prices are generally deterministically adjusted based on the congestion of the network."),(0,r.kt)("p",null,"We avoid making changes that are too large through re-sharding by changing the number of available shards (and thus throughput)."),(0,r.kt)("p",null,"Accounts don\u2019t have associated resources. Gas amount is predetermined for all transactions except function calls. For function call transactions the user (or more likely the developer) attaches the required amount of gas. If some gas is left over after the function call, it is converted back to Near and refunded to the original funding account."),(0,r.kt)("h3",{id:"how-do-we-know-how-much-gas-to-add-to-a-transaction"},"How do we know how much gas to add to a transaction?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See reference documentation here: ",(0,r.kt)("a",{parentName:"li",href:"https://nomicon.io/Economics/README.html"},"https://nomicon.io/Economics/README.html")),(0,r.kt)("li",{parentName:"ul"},"See API documentation for ",(0,r.kt)("a",{parentName:"li",href:"https://docs.near.org/docs/api/rpc"},"discovering gas price via RPC here"),".")),(0,r.kt)("p",null,"The issuer of a transaction should attach some amount of gas by taking a guess at budget which will get the transaction processed. The contract knows how much to fund different cross contract calls. Gas price is calculated and fixed per block, but may change from block to block depending on how full / busy the block is. If blocks become more than half full then gas price increases."),(0,r.kt)("p",null,"We're also considering adding a max gas price limit."),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("h3",{id:"how-do-we-follow-tx-status"},"How do we follow Tx status?"),(0,r.kt)("p",null,"See related ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/api/rpc"},"RPC interface for fetching transaction status here"),"."),(0,r.kt)("h3",{id:"how-are-transactions-constructed-and-signed"},"How are transactions constructed and signed?"),(0,r.kt)("p",null,"Transactions are a collection of related data that is composed and cryptographically signed by the sender using their private key. The related public key is part of the transaction and used for signature verification. Only signed transactions may be sent to the network for processing."),(0,r.kt)("p",null,"Transactions can be constructed and signed offline. Nodes are not required for signing. We are planning to add optional recent block hash to help prevent various replay attacks."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/transaction"},"transactions")," in the concepts section of our documentation."),(0,r.kt)("h3",{id:"how-is-the-hash-preimage-generated-which-fields-does-the-raw-transaction-consist-of"},"How is the hash preimage generated? Which fields does the raw transaction consist of?"),(0,r.kt)("p",null,"For a transaction, we sign the hash of the transaction. More specifically, what is signed is the ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256")," of the transaction object serialized in borsh (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/borsh"},"https://github.com/near/borsh"),")."),(0,r.kt)("h3",{id:"how-do-transactions-work-on-the-near-platform"},"How do transactions work on the NEAR platform?"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction")," is made up of one of more ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"s. An action can (currently) be one of 8 types: ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAccount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DeployContract"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionCall"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stake"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AddKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteAccount"),". Transactions are composed by a sender and then signed using the private keys of a valid NEAR account to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SignedTransaction"),". This signed transaction is considered ready to send to the network for processing."),(0,r.kt)("p",null,"Transactions are received via our JSON-RPC endpoint and routed to the shared where the ",(0,r.kt)("inlineCode",{parentName:"p"},"sender"),' account lives. This "home shard" for the sender account is then responsible for processing the transaction and generating related receipts to be applied across the network.'),(0,r.kt)("p",null,"Once received by the network, signed transactions are verified (using the embedded public key of the signer) and transformed into a collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"s, one per action. Receipts are of two types: ",(0,r.kt)("inlineCode",{parentName:"p"},"Action Receipt")," is the most common and represents almost all actions on the network while ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Receipt"),' handles the very special case of "a ',(0,r.kt)("inlineCode",{parentName:"p"},"FunctionCallAction"),' which includes a Promise". These receipts are then propagated and applied across the network according to the "home shard" rule for all affected receiver accounts.'),(0,r.kt)("p",null,'These receipts are then propagated around the network using the receiver account\'s "home shard" since each account lives on one and only one shard. Once located on the correct shard, receipts are pulled from a nonce-based ',(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/ChainSpec/Transactions.html#pool-iterator"},"queue"),"."),(0,r.kt)("p",null,"Receipts may generate other, new receipts which in turn are propagated around the network until all receipts have been applied. If any action within a transaction fails, the entire transaction is rolled back and any unburnt fees are refunded to the proper accounts."),(0,r.kt)("p",null,"For more detail, see specs on ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Transactions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Transactions")),", ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Actions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Actions")),", ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/RuntimeSpec/Receipts.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Receipts"))),(0,r.kt)("h3",{id:"how-does-near-serialize-transactions"},"How does NEAR serialize transactions?"),(0,r.kt)("p",null,"We use a simple binary serialization format that's deterministic: ",(0,r.kt)("a",{parentName:"p",href:"https://borsh.io"},"https://borsh.io")),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whitepaper",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"General overview at ",(0,r.kt)("a",{parentName:"li",href:"https://near.org/blog/the-beginners-guide-to-the-near-blockchain"},"The Beginner's Guide to the NEAR Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://near.org/papers/the-official-near-white-paper/"},"NEAR Whitepaper")))),(0,r.kt)("li",{parentName:"ul"},"Github",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/near"},"https://www.github.com/near"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Got a question? "),(0,r.kt)("p",{parentName:"blockquote"},"Ask it on ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/nearprotocol"},"StackOverflow"),"!")))}u.isMDXComponent=!0}}]);