"use strict";(self.webpackChunknitcbase_beta=self.webpackChunknitcbase_beta||[]).push([[2278],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:2,title:"Script Commands",tags:["Script","commands"]},s=void 0,m={unversionedId:"User Interface Commands/script-cmds",id:"User Interface Commands/script-cmds",isDocsHomePage:!1,title:"Script Commands",description:"Script commands are available for both XFS interface and frontend interface. These commands help the user to execute mutliple commands sequentially from a file and also to print out custom useful messages into terminal for debugging and informational purposes.",source:"@site/docs/User Interface Commands/script-cmds.md",sourceDirName:"User Interface Commands",slug:"/User Interface Commands/script-cmds",permalink:"/docs/User Interface Commands/script-cmds",tags:[{label:"Script",permalink:"/docs/tags/script"},{label:"commands",permalink:"/docs/tags/commands"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Script Commands",tags:["Script","commands"]}},l=[{value:"Batch Execution",id:"batch-execution",children:[{value:"Description",id:"description",children:[],level:4},{value:"Syntax",id:"syntax",children:[],level:4}],level:3},{value:"Echo",id:"echo",children:[{value:"Description",id:"description-1",children:[],level:4},{value:"Syntax",id:"syntax-1",children:[],level:4}],level:3}],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Script commands are available for both XFS interface and frontend interface. These commands help the user to execute mutliple commands sequentially from a file and also to print out custom useful messages into terminal for debugging and informational purposes."),(0,i.kt)("h3",{id:"batch-execution"},"Batch Execution"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"This command is used to run multiple commands in sequence by reading the commands line-by-line from an external file. For example the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command given below will execute commands present in ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),". If there is an error on running a command at a given line, all commands after that ",(0,i.kt)("strong",{parentName:"p"},"will not be excuted")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command fails by giving the line number of the command in which error occurred."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run filename\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is useful to execute multiple commonly used commands while debugging."))),(0,i.kt)("h3",{id:"echo"},"Echo"),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"This command is used to echo back the message given as argument to the command line."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is useful while debugging in combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command."))),(0,i.kt)("h4",{id:"syntax-1"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo <any message>\n")))}p.isMDXComponent=!0}}]);