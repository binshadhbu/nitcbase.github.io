"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[4562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=b({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var g=n(2389);const f="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(d(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function D(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},3706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"GNU Debugger(GDB)"},u=void 0,s={unversionedId:"Misc/GDB",id:"Misc/GDB",title:"GNU Debugger(GDB)",description:"Introduction",source:"@site/docs/Misc/GDB.md",sourceDirName:"Misc",slug:"/Misc/GDB",permalink:"/docs/Misc/GDB",draft:!1,tags:[],version:"current",frontMatter:{title:"GNU Debugger(GDB)"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Docker Based Setup",id:"docker-based-setup",level:3},{value:"Manual Setup",id:"manual-setup",level:3},{value:"Using GDB",id:"using-gdb",level:2},{value:"Using GDB in a Docker Container",id:"using-gdb-in-a-docker-container",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A debugger is a program that runs other programs, allowing the user to exercise control over these programs, and to examine variables when problems arise. GDB allows you to run the program up to a certain point, then stop and print out the values of certain variables at that point, or step through the program one line at a time and print out the values of each variable after executing each line."),(0,r.kt)("p",null,"Errors like segmentation faults may be easier to find with the help of GDB."),(0,r.kt)("p",null,"GDB allows you to:-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pause and continue its execution"),(0,r.kt)("li",{parentName:"ul"},'Set "break points" or conditions where the execution pauses so you can look at its state (the value of the variables at that point).'),(0,r.kt)("li",{parentName:"ul"},'View and "watch" variable values'),(0,r.kt)("li",{parentName:"ul"},"Step through the program line-by-line (or instruction by instruction)")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"docker-based-setup"},"Docker Based Setup"),(0,r.kt)("p",null,"If you followed the Docker-based setup, GDB should have already been included in the docker image you built and will be available in the container. You can proceed to the section on ",(0,r.kt)("a",{parentName:"p",href:"#using-gdb"},"using GDB"),"."),(0,r.kt)("h3",{id:"manual-setup"},"Manual Setup"),(0,r.kt)("p",null,"If you followed the manual setup process, you might have to install GDB. Before you do, check whether it is already present in your system by running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gdb -help\n")),(0,r.kt)("p",null,'If you have already installed GDB, then it will display all the available options within your GDB, else if the terminal says "command not found", then you can proceed with the installation process.'),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ubuntu",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt-get install -y gdb\n"))),(0,r.kt)(l.Z,{value:"fedora",label:"Fedora / Red Hat",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install gdb\n"))),(0,r.kt)(l.Z,{value:"arch",label:"Arch Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy gdb\n")))),(0,r.kt)("p",null,"Now you can confirm the installation of GDB by executing the command ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb -help")," again."),(0,r.kt)("h2",{id:"using-gdb"},"Using GDB"),(0,r.kt)("p",null,"You have to tell your compiler to compile your code with symbolic debugging information included. Here's how to do it with gcc, using the -g flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"g++ -g nitcbase.cpp -o nitcbase\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Makefile provided with NITCbase supports compiling in debug mode by running it as"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make mode=debug\n")),(0,r.kt)("p",{parentName:"admonition"},"This will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"nitcbase-debug")," executable.")),(0,r.kt)("p",null,"Once you've done that, you should be able to debug your program in the debugger."),(0,r.kt)("p",null,"Your text editor/IDE might already come with debug functionality built-in. You can find below config for various text editors and IDEs to take advantage of their frontends."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"vscode",label:"VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug nitcbase",\n      "cwd": "${workspaceFolder}",\n      "type": "cppdbg",\n      "request": "launch",\n      "program": "${workspaceFolder}/nitcbase-debug", // Binary to exec\n      "stopAtEntry": false,\n      "environment": [],\n      "externalConsole": false,\n      "MIMode": "gdb",\n      "setupCommands": [\n        {\n          "description": "Enable pretty-printing for gdb",\n          "text": "-enable-pretty-printing",\n          "ignoreFailures": true\n        }\n      ],\n      "preLaunchTask": "Build debug nitcbase",\n      "miDebuggerPath": "/usr/bin/gdb"\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/tasks.json"',title:'".vscode/tasks.json"'},'{\n  "tasks": [\n    {\n      "type": "shell",\n      "label": "Build debug nitcbase",\n      "command": "/usr/bin/make",\n      "args": ["mode=debug"],\n      "group": {\n        "kind": "build",\n        "isDefault": true\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'The "Debug nitcbase" task can be launched from the "Run and Debug" menu.')),(0,r.kt)(l.Z,{value:"tui",label:"Terminal",mdxType:"TabItem"},(0,r.kt)("p",null,"If you prefer to keep it within the terminal itself, you can use gdb with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-tui")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gdb -tui nitcbase-debug\n# nitcbase-debug is the executable here\n"))),(0,r.kt)(l.Z,{value:"emacs",label:"Emacs",mdxType:"TabItem"},(0,r.kt)("p",null,"looking for contributions"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,'There\'s also the possibility of using the gdb prompt (that is, the "dumb terminal mode") which might be harder to use than the earlier mentioned options.'),(0,r.kt)("p",null,"You could find online documentation for how to use the debugger in your editor of choice, or just jump right into it and figure it out as you go."),(0,r.kt)("p",null,"If you feel you need a general overview of the usage of GDB, ",(0,r.kt)("a",{parentName:"p",href:"https://beej.us/guide/bggdb/"},"Beej's Quick Guide to GDB")," will be helpful."),(0,r.kt)("h3",{id:"using-gdb-in-a-docker-container"},"Using GDB in a Docker Container"),(0,r.kt)("p",null,"This section explains how to use GDB from within a docker container. If you followed the Docker-based setup, it is recommended to keep reading."),(0,r.kt)("p",null,"For working with the VSCode frontend for GDB, you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/devcontainers/attach-container"},"attach to the nitcbase container")," and then launch the debugger from ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/devcontainers/containers#_debugging-in-a-container"},"within the container"),". You might be prompted to install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ VSCode extension")," the first time you run the debugger."),(0,r.kt)("p",null,"For terminal-based usage, gdb can be accessed from ",(0,r.kt)("a",{parentName:"p",href:"./Installation%20Guidelines#connecting-to-the-container"},"a shell in the container"),"."))}m.isMDXComponent=!0}}]);