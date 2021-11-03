"use strict";(self.webpackChunknear_wiki=self.webpackChunknear_wiki||[]).push([[1445],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?n.createElement(k,i(i({ref:a},p),{},{components:t})):n.createElement(k,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8359:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={},s="Running a Validator (PT)",d={unversionedId:"validator/validator-guides/running-a-validator-pt",id:"validator/validator-guides/running-a-validator-pt",isDocsHomePage:!1,title:"Running a Validator (PT)",description:"Staking na NEAR",source:"@site/docs/validator/validator-guides/running-a-validator-pt.md",sourceDirName:"validator/validator-guides",slug:"/validator/validator-guides/running-a-validator-pt",permalink:"/wiki/docs/validator/validator-guides/running-a-validator-pt",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/validator/validator-guides/running-a-validator-pt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running a Validator (KR)",permalink:"/wiki/docs/validator/validator-guides/running-a-validator-kr"},next:{title:"Running a Validator",permalink:"/wiki/docs/validator/validator-guides/running-a-validator"}},p=[{value:"Staking na NEAR",id:"staking-na-near",children:[{value:"Tradu\xe7\xf5es",id:"tradu\xe7\xf5es",children:[],level:3},{value:"<em>LEIA ANTES DE COME\xc7AR</em>",id:"leia-antes-de-come\xe7ar",children:[],level:3}],level:2},{value:"Requisitos de hardware para o n\xf3",id:"requisitos-de-hardware-para-o-n\xf3",children:[],level:2},{value:"Configurando seu ambiente",id:"configurando-seu-ambiente",children:[],level:2},{value:"Executando o N\xf3",id:"executando-o-n\xf3",children:[],level:2},{value:"Autorize o acesso do <code>near-cli</code> \xe0 sua conta TestNet",id:"autorize-o-acesso-do-near-cli-\xe0-sua-conta-testnet",children:[],level:2},{value:"Coloque a staking pool no ar",id:"coloque-a-staking-pool-no-ar",children:[],level:2},{value:"Configurar seu n\xf3 <code>validator_key.json</code> e reiniciar o nearup",id:"configurar-seu-n\xf3-validator_keyjson-e-reiniciar-o-nearup",children:[],level:2},{value:"Se Tornando um Validador no <em>Conjunto Ativo</em>",id:"se-tornando-um-validador-no-conjunto-ativo",children:[],level:2},{value:"Veja a lista de validadores atuais e futuros",id:"veja-a-lista-de-validadores-atuais-e-futuros",children:[],level:2},{value:"Re-staking autom\xe1tico",id:"re-staking-autom\xe1tico",children:[],level:2},{value:"Links Adicionais",id:"links-adicionais",children:[],level:2}],u={toc:p};function c(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-validator-pt"},"Running a Validator (PT)"),(0,r.kt)("h2",{id:"staking-na-near"},"Staking na NEAR"),(0,r.kt)("h3",{id:"tradu\xe7\xf5es"},"Tradu\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wiki/docs/validator/validator-guides/running-a-validator"},"Ingl\xeas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wiki/docs/validator/validator-guides/running-a-validator-kr"},"Coreano")),(0,r.kt)("li",{parentName:"ul"},"Adicione seu idioma tamb\xe9m atrav\xe9s do ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/docs/pull/385"},"Github pull request"))),(0,r.kt)("h3",{id:"leia-antes-de-come\xe7ar"},(0,r.kt)("em",{parentName:"h3"},"LEIA ANTES DE COME\xc7AR")),(0,r.kt)("p",null,"Aguarde at\xe9 que o seu n\xf3 esteja totalmente sincronizado antes de enviar uma transa\xe7\xe3o de staking. Um n\xf3 fora de sincroniza\xe7\xe3o n\xe3o pode produzir ou validar blocos, ent\xe3o se voc\xea for escolhido como validador, voc\xea est\xe1 correndo o risco de ser expulso da cole\xe7\xe3o de validadores e perder suas recompensas se o seu n\xf3 n\xe3o mant\xe9m o tempo de uptime apropriado (ou seja, validar/produzir o n\xfamero de blocos necess\xe1rios para esse per\xedodo)."),(0,r.kt)("p",null,"Voc\xea pode testar sua infraestrutura de validador na NEAR ",(0,r.kt)("em",{parentName:"p"},"TestNet"),". Voc\xea pode gerar uma conta com alguns tokens na ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org"},"carteira NEAR")," e us\xe1-la para fazer deploy do seu staking pool. Em seguida, entre em contato com o NEAR Core-dev no ",(0,r.kt)("a",{parentName:"p",href:"https://near.chat"},"Discord")," para solicitar stake suficiente para se tornar um validador na TestNet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Para esta sess\xe3o atual: execute o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet")),(0,r.kt)("li",{parentName:"ol"},"Adicione esta mesma linha (",(0,r.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet"),") ao final do arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," para garantir que esta vari\xe1vel de ambiente persista se a m\xe1quina reiniciar.")),(0,r.kt)("p",null,"TestNet est\xe1 sendo executado em URLs separadas para o explorador, a carteira e o Json RPC:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u26d4\ufe0f MainNet"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2705 TestNet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://explorer.near.org"},"https://explorer.near.org")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org"},"https://explorer.testnet.near.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://wallet.near.org"},"https://wallet.near.org")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://wallet.testnet.near.org"},"https://wallet.testnet.near.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://rpc.near.org"},"https://rpc.near.org")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://rpc.testnet.near.org"},"https://rpc.testnet.near.org"))))),(0,r.kt)("p",null,"Cada nova conta TestNet recebe automaticamente algumas centenas de tokens para fazer deploy de contratos inteligentes e testar as suas APIs."),(0,r.kt)("p",null,"Voc\xea pode usar o ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/nearup"},"nearup")," para facilmente fazer deploy do seu n\xf3 na TestNet em um VPS. Se voc\xea planeja fazer deploy na MainNet, ",(0,r.kt)("strong",{parentName:"p"},"voc\xea n\xe3o pode usar o nearup"),", e sugerimos seguir as diretrizes ",(0,r.kt)("a",{parentName:"p",href:"../../docs/develop/node/validator/deploy-on-mainnet/"},"aqui"),". Junte-se aos canais de validadores da NEAR ",(0,r.kt)("a",{parentName:"p",href:"https://near.chat"},"no Discord")," para receber suporte t\xe9cnico da equipe NEAR e do resto da comunidade."),(0,r.kt)("p",null,"Validadores NEAR devem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Saber como compilar, fazer deploy e configurar os n\xf3s de Validadores NEAR"),(0,r.kt)("li",{parentName:"ul"},"Entender a diferen\xe7a entre ",(0,r.kt)("inlineCode",{parentName:"li"},"account_key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"node_key")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"validator_key")," (consulte as ",(0,r.kt)("a",{parentName:"li",href:"../../docs/develop/node/intro/keys/"},"chaves no documento")," da Plataforma NEAR)"),(0,r.kt)("li",{parentName:"ul"},"Entender como fazer deploy de um contrato NEAR e a diferen\xe7a entre m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"li"},"view")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"call"),". Saber como alavanc\xe1-los atrav\xe9s do ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"near RPC")),(0,r.kt)("li",{parentName:"ul"},"Ter uma plataforma de monitoramento para medir os blocos gerados e perdidos, pares e conectividade, vers\xe3o atual do n\xf3, al\xe9m de cpu, mem\xf3ria, armazenamento e desempenho de rede"),(0,r.kt)("li",{parentName:"ul"},"Entender o estado de um validador: ",(0,r.kt)("inlineCode",{parentName:"li"},"proposals"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"next")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"current")),(0,r.kt)("li",{parentName:"ul"},"Usar as informa\xe7\xf5es acima para controlar se o validador est\xe1 caindo fora do conjunto de validadores ativos, e o que precisa ser feito para corrigir o problema"),(0,r.kt)("li",{parentName:"ul"},"Saber onde encontrar informa\xe7\xf5es sobre os pr\xf3ximos ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/nearcore/releases"},"lan\xe7amentos do nearcore")," e outras melhorias de ferramentas")),(0,r.kt)("h2",{id:"requisitos-de-hardware-para-o-n\xf3"},"Requisitos de hardware para o n\xf3"),(0,r.kt)("p",null,"Os requisitos m\xednimos para executar um n\xf3 de validador na NEAR s\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Pelo menos 4 n\xfacleos de CPU\nPelo menos 16GB RAM\nPelo menos 100GB de SSD (Nota: HDD n\xe3o funcionar\xe1)\n")),(0,r.kt)("p",null,"Mais informa\xe7\xf5es est\xe3o na documenta\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"../../docs/develop/node/validator/hardware/"},"Requisitos de Hardware"),"."),(0,r.kt)("h2",{id:"configurando-seu-ambiente"},"Configurando seu ambiente"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANTE: Certifique-se de que voc\xea tem a vers\xe3o mais recente do")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-cli"},(0,r.kt)("strong",{parentName:"a"},"NEAR CLI"))," ",(0,r.kt)("strong",{parentName:"p"},"e uma vers\xe3o 12.x do Node")),(0,r.kt)("p",null,"Voc\xea pode instalar e atualizar o Near CLI usando npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Baixar Near CLI com npm:\nnpm i -g near-cli\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," A rede padr\xe3o para a ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," \xe9 a ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),". Se voc\xea quiser mudar para a ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"betanet"),", por favor veja instru\xe7\xf5es de ",(0,r.kt)("a",{parentName:"p",href:"../../docs/tools/near-cli/#network-selection"},"sele\xe7\xe3o de redes usando ",(0,r.kt)("inlineCode",{parentName:"a"},"near-cli")),"."),(0,r.kt)("p",null,"Uma vez que o Near CLI estiver instalado, v\xe1 em frente e execute seu n\xf3."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Dica Profissional")),(0,r.kt)("p",{parentName:"blockquote"},"Voc\xea n\xe3o precisa rodar o near-cli no seu n\xf3 validador: todos os comandos de staking s\xe3o emitidos para o pool de staking, que \xe9 um contrato inteligente normal.")),(0,r.kt)("h2",{id:"executando-o-n\xf3"},"Executando o N\xf3"),(0,r.kt)("p",null,"Por favor, siga a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/nearup"},"Documenta\xe7\xe3o do Nearup")," para iniciar o seu n\xf3 na TestNet. Lembre-se que ",(0,r.kt)("inlineCode",{parentName:"p"},"Nearup")," n\xe3o suporta a MainNet, ent\xe3o voc\xea ter\xe1 que construir seus scripts de inicializa\xe7\xe3o e seguir o ",(0,r.kt)("a",{parentName:"p",href:"../../docs/develop/node/validator/deploy-on-mainnet/"},"guia de implanta\xe7\xe3o na MainNet"),"."),(0,r.kt)("p",null,"Na primeira inicializa\xe7\xe3o, o nearup pedir\xe1 o ID da sua conta de validador. Coloque um texto de exemplo, como ",(0,r.kt)("inlineCode",{parentName:"p"},"coming_soon"),", para deixar o node sincronizar com a rede enquanto voc\xea coloca a staking pool no ar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ nearup run testnet --account-id coming_soon\n2020-10-16 14:02:29.190 INFO nearup - run: Home directory is /home/nearkat/.near/testnet...\n2020-10-16 14:02:29.191 INFO nodelib - setup_and_run: Using officially compiled binary\n2020-10-16 14:02:30.027 INFO util - download_binaries: Downloading latest deployed version for testnet\n2020-10-16 14:02:30.028 INFO util - download_binaries: Downloading near to /home/nearkat/.nearup/near/testnet/near from nearcore/Linux/1.16.0/974d93dc657f620d98de6589a2b5bc97be1db816/near...\n2020-10-16 14:02:33.755 INFO util - download_binaries: Downloaded near to /home/nearkat/.nearup/near/testnet/near...\n2020-10-16 14:02:33.758 INFO util - download_binaries: Making the near executable...\n2020-10-16 14:02:33.758 INFO util - download_binaries: Downloading genesis-csv-to-json to /home/nearkat/.nearup/near/testnet/genesis-csv-to-json from nearcore/Linux/1.16.0/974d93dc657f620d98de6589a2b5bc97be1db816/genesis-csv-to-json...\n2020-10-16 14:02:34.710 INFO util - download_binaries: Downloaded genesis-csv-to-json to /home/nearkat/.nearup/near/testnet/genesis-csv-to-json...\n2020-10-16 14:02:34.710 INFO util - download_binaries: Making the genesis-csv-to-json executable...\n2020-10-16 14:02:34.712 INFO nodelib - check_and_setup: Setting up network configuration.\n2020-10-16 14:02:34.712 INFO nodelib - init_near: Initializing the node configuration using near binary...\nOct 16 14:02:34.726  INFO near: Version: 1.16.0-rc.1, Build: 974d93dc-modified, Latest Protocol: 39\nOct 16 14:02:34.727  INFO near: Use key ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer for coming_soon to stake.\nOct 16 14:02:34.727  INFO near: Downloading config file from: https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/genesis.json ...\n")),(0,r.kt)("p",null,"Enquanto a sincroniza\xe7\xe3o estiver em andamento, voc\xea ",(0,r.kt)("strong",{parentName:"p"},"tem que recuperar sua chave de validador em")," ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.near/testnet/validator_key.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "account_id": "coming_soon",\n  "public_key": "ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer",\n  "secret_key": "ed25519:<PRIVATE_KEY>"\n}\n')),(0,r.kt)("p",null,"Esta chave ser\xe1 necess\xe1ria para ",(0,r.kt)("em",{parentName:"p"},"emparelhar")," o seu n\xf3 validador e sua staking pool."),(0,r.kt)("h2",{id:"autorize-o-acesso-do-near-cli-\xe0-sua-conta-testnet"},"Autorize o acesso do ",(0,r.kt)("inlineCode",{parentName:"h2"},"near-cli")," \xe0 sua conta TestNet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure o ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli")," para usar a TestNet, executando o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=testnet")),(0,r.kt)("li",{parentName:"ol"},"Autentique-se no ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli")," com sua conta da NEAR Wallet, executando o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"near login"))),(0,r.kt)("p",null,"Ser\xe1 solicitado que navegue at\xe9 uma URL para autenticar sua conta de staking. Voc\xea pode esperar um resultado semelhante ao seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ near login\n\nPlease authorize NEAR CLI on at least one of your accounts.\n\nIf your browser doesn't automatically open, please visit this URL\nhttps://wallet.testnet.near.org/login/?title=NEAR+CLI&public_key=ed25519%3A7xuBXjTabXM1yZ8WQB1Ezj95BjDnqX63cKj6RBgYa3it&success_url=http%3A%2F%2F127.0.0.1%3A5000\nPlease authorize at least one account at the URL above.\n\nWhich account did you authorize for use with NEAR CLI?\nEnter it here (if not redirected automatically):\n")),(0,r.kt)("p",null,"Tome o cuidado de especificar o mesmo ID de conta da TestNet no navegador e no ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Which account did you authorize for use with NEAR CLI?\nEnter it here (if not redirected automatically):\n")),(0,r.kt)("p",null,"Depois de concluir a autentica\xe7\xe3o no navegador e colocar o ID da conta no campo de entrada acima voc\xea deve esperar uma mensagem como a abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nearkat.testnet\nLogged in as [ nearkat.testnet ] with public key [ ed25519:7xuBXj... ] successfully\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o!")),(0,r.kt)("p",{parentName:"blockquote"},"Se voc\xea receber um erro ERR_CONNECTION_REFUSED, verifique se seu navegador n\xe3o est\xe1 tentando abrir o endere\xe7o ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000"},"http://127.0.0.1:5000"),". Este \xe9 um redirecionamento incorreto do near-cli executando em uma inst\xe2ncia remota, e pode ser ignorado.")),(0,r.kt)("p",null,"Para testar se seu ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," \xe9 capaz de controlar sua conta ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),", execute o comando: ",(0,r.kt)("inlineCode",{parentName:"p"},"$ near send nearkat.testnet testnet 0.1"),", em que ",(0,r.kt)("inlineCode",{parentName:"p"},"nearkat.testnet")," \xe9 o remetente, e ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," o destinat\xe1rio de ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1")," tokens NEAR. Voc\xea pode esperar um resultado semelhante ao seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ near send quato.testnet testnet 0.1\nSending 0.1 NEAR to testnet from quato.testnet\nTransaction Id Hm6hRz8NS9sXV6yPzeyYJZwqTSUTYcifws3iu3VcbkyW\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/Hm6hRz8NS9sXV6yPzeyYJZwqTSUTYcifws3iu3VcbkyW\n")),(0,r.kt)("h2",{id:"coloque-a-staking-pool-no-ar"},"Coloque a staking pool no ar"),(0,r.kt)("p",null,"O NEAR Protocol fornece um contrato inteligente de staking pool no reposit\xf3rio ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/initial-contracts"},"initial-contracts")," (contratos iniciais) do GitHub."),(0,r.kt)("p",null,"Coloque no ar a sua staking pool enviando o m\xe9todo de chamada abaixo para a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/core-contracts/tree/master/staking-pool-factory"},"f\xe1brica de staking pools"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call pool.f863973.m0 create_staking_pool \'{"staking_pool_id":"<POOL_ID>", "owner_id":"<OWNER_ID>", "stake_public_key":"<VALIDATOR_KEY>", "reward_fee_fraction": {"numerator": <X>, "denominator": <Y>}}\' --account_id <OWNER_ID> --amount 50 --gas 300000000000000\n')),(0,r.kt)("p",null,"Em que:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pool.f863973.m0")," \xe9 a f\xe1brica de staking pools mencionada acima"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<POOL_ID>")," \xe9 o nome do contrato da staking pool. Se voc\xea passar o par\xe2metro ",(0,r.kt)("inlineCode",{parentName:"li"},"heyheyhey")," o resultado ser\xe1 ",(0,r.kt)("inlineCode",{parentName:"li"},"heyheyhey.pool.f863973.m0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<OWNER_ID>")," \xe9 a conta autorizada a enviar os ",(0,r.kt)("em",{parentName:"li"},"m\xe9todos do propriet\xe1rio")," para a pool, como a chave de validador ou as taxas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<VALIDATOR_KEY>")," \xe9 a chave p\xfablica salva em ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.near/testnet/validator_key.json")," em seu n\xf3 validador (veja o passo ",(0,r.kt)("a",{parentName:"li",href:"staking/#run-the-node"},"staking#run-the-node")," acima)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"numerator": <X>, "denominator": <Y>}')," configura as taxas do validador. Para uma taxa de 10% \xe9 preciso usar ",(0,r.kt)("inlineCode",{parentName:"li"},"x=10")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"y=100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--amount 50")," atribui 50 $NEAR \xe0 transa\xe7\xe3o, como uma reserva para pagar o armazenamento do contrato"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--gas 300000000000000")," especifica o g\xe1s para a transa\xe7\xe3o (optional)")),(0,r.kt)("p",null,"Voc\xea pode esperar um resultado semelhante ao seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ near call pool.f863973.m0 create_staking_pool \'{"staking_pool_id":"quato", "owner_id":"quato.testnet", "stake_public_key":"ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}\' --account_id quato.testnet --amount 50 --gas 300000000000000\nScheduling a call: pool.f863973.m0.create_staking_pool({"staking_pool_id":"quato", "owner_id":"quato.testnet", "stake_public_key":"ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}) with attached 50 NEAR\nReceipt: ByuKqFBuQY4oBu7GypRWEwUjAvxHacTJLGLfwUNjRunV\n  Failure [pool.f863973.m0]: Error: {"index":0}\nReceipts: 3Y8yjPkd894WSTaapyURe1moMtY8Yvbrjwmz3Pv3N2RZ, EeCy4HyRs8cuxsraxcaiW53gmvWL55xzTqDjfUaPcoXM\n  Log [pool.f863973.m0]: The staking pool @quato.pool.f863973.m0 was successfully created. Whitelisting...\nTransaction Id BYAffkmrssiErMDbmDrF2AoHKDLCQrcCe1Vk1CGEnBZB\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/BYAffkmrssiErMDbmDrF2AoHKDLCQrcCe1Vk1CGEnBZB\ntrue\n')),(0,r.kt)("p",null,"A express\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," na \xfaltima linha e o link para o explorer, s\xe3o a prova de que a pool de staking est\xe1 rodando e pronta para receber stake."),(0,r.kt)("h2",{id:"configurar-seu-n\xf3-validator_keyjson-e-reiniciar-o-nearup"},"Configurar seu n\xf3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"validator_key.json")," e reiniciar o nearup"),(0,r.kt)("p",null,"Uma vez que o deploy da pool de staking esteja executado, edite manualmente o arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.near/testnet/validator_key.json")," em seu n\xf3 validador e substitua ",(0,r.kt)("inlineCode",{parentName:"p"},"coming_soon")," com o nome da conta de sua pool de staking:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "account_id": "quato.pool.f863973.m0",\n  "public_key": "ed25519:4msyQstQ3Z7Gq1qrwE78HPTRYdLFtCmJ9dydrrbUtrer",\n  "secret_key": "ed25519:<PRIVATE_KEY>"\n}\n')),(0,r.kt)("p",null,"Uma vez feito, voc\xea pode parar e reiniciar o nearup com o comando: ",(0,r.kt)("inlineCode",{parentName:"p"},"nearup stop")),(0,r.kt)("p",null,"seguido por: ",(0,r.kt)("inlineCode",{parentName:"p"},"nearup run testnet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o!")),(0,r.kt)("p",{parentName:"blockquote"},"Certifique-se de que o seu n\xf3 baixou inteiramente o arquivo genesis.json antes de executar o comando de parar o nearup.")),(0,r.kt)("h2",{id:"se-tornando-um-validador-no-conjunto-ativo"},"Se Tornando um Validador no ",(0,r.kt)("em",{parentName:"h2"},"Conjunto Ativo")),(0,r.kt)("p",null,"Uma vez que a pool esteja no ar, voc\xea pode fazer ",(0,r.kt)("em",{parentName:"p"},"stake")," de seus tokens usando qualquer um dos m\xe9todos oferecidos na ",(0,r.kt)("a",{parentName:"p",href:"delegation/"},"documenta\xe7\xe3o sobre delega\xe7\xe3o"),". Certifique-se que voc\xea est\xe1 usando a ferramenta que suporta a TestNet, e n\xe3o somente a MainNet."),(0,r.kt)("p",null,'A TestNet e a MainNet da NEAR exigem um per\xedodo de no m\xednimo 24 horas de ativa\xe7\xe3o para aceitar sua oferta de pool. Voc\xea pode verificar se voc\xea \xe9 um validador quando, nos logs do n\xf3, voc\xea ver "V/" - onde V significa que esse n\xf3 \xe9 validador:'),(0,r.kt)("p",null,"![# 7153 | Altura do bloco V/1 | 'V' (validador) ou '\u2014' (n\xf3 regular)]"),(0,r.kt)("p",null,"O valor 0/0/40 mostra o total de validadores: pares conectados / pares atualizados / meus pares. Este n\xfamero pode mudar ao longo do tempo."),(0,r.kt)("p",null,"Para saber mais sobre como os validadores s\xe3o escolhidos, d\xea uma olhada nas ",(0,r.kt)("a",{parentName:"p",href:"/wiki/docs/validator/validator-support/faq"},"Perguntas Frequentes Sobre Staking"),"."),(0,r.kt)("h2",{id:"veja-a-lista-de-validadores-atuais-e-futuros"},"Veja a lista de validadores atuais e futuros"),(0,r.kt)("p",null,"Voc\xea pode usar ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," para rever o conjunto de validadores nos pr\xf3ximos tr\xeas per\xedodos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comandos"),(0,r.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"near proposals")),(0,r.kt)("td",{parentName:"tr",align:null},"Todos os validadores que mandaram transa\xe7\xf5es de staking (",(0,r.kt)("inlineCode",{parentName:"td"},"Proposal(Accepted)"),"), ou que foram reeleitos (",(0,r.kt)("inlineCode",{parentName:"td"},"Rollover"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"near validators next")),(0,r.kt)("td",{parentName:"tr",align:null},"Todos os validadores que v\xe3o produzir blocos na pr\xf3xima \xe9poca (epoch). Pode ser ",(0,r.kt)("inlineCode",{parentName:"td"},"New")," (Criado), ",(0,r.kt)("inlineCode",{parentName:"td"},"Rewarded")," (Recompensado) ou ",(0,r.kt)("inlineCode",{parentName:"td"},"Kicked out")," (Exclu\xeddo)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"near validators current")),(0,r.kt)("td",{parentName:"tr",align:null},"Todos os validadores que est\xe3o produzindo blocos na \xe9poca corrente, e o n\xfamero total de blocos que eles produziram")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o!")),(0,r.kt)("p",{parentName:"blockquote"},"Voc\xea tem que esperar pelo menos 2 \xe9pocas (43.200 blocos cada) antes do seu")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," A rede padr\xe3o para o ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," \xe9 a ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),". Se voc\xea quiser mudar para a ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"betanet"),", por favor veja instru\xe7\xf5es de ",(0,r.kt)("a",{parentName:"p",href:"../../docs/tools/near-cli/#network-selection"},"sele\xe7\xe3o de redes usando ",(0,r.kt)("inlineCode",{parentName:"a"},"near-cli")),"."),(0,r.kt)("h2",{id:"re-staking-autom\xe1tico"},"Re-staking autom\xe1tico"),(0,r.kt)("p",null,"O Protocolo NEAR reposiciona todas as recompensas inflacion\xe1rias automaticamente, a menos que voc\xea decida deixar de investir manualmente alguns dos fundos."),(0,r.kt)("h2",{id:"links-adicionais"},"Links Adicionais"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tokens/lockup/"},"Contratos de bloqueio explicados")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/core-contracts"},"NEAR Core Contracts no Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nearprotocol/stakewars"},"NEAR Stake Wars"))),(0,r.kt)("p",null,"Tem alguma d\xfavida? ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/nearprotocol"},"Pergunte no StackOverflow!")))}c.isMDXComponent=!0}}]);