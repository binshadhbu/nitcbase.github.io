"use strict";(self.webpackChunknitcbase_beta=self.webpackChunknitcbase_beta||[]).push([[8770],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),N=i,u=c["".concat(d,".").concat(N)]||c[N]||p[N]||r;return a?n.createElement(u,l(l({ref:e},m),{},{components:a})):n.createElement(u,l({ref:e},m))}));function N(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3566:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={sidebar_position:5,title:"Data Manipulation Language Commands",tags:["Data","Manipulation","Commands","xfs","interface"]},d=void 0,s={unversionedId:"User Interface Commands/dml",id:"User Interface Commands/dml",isDocsHomePage:!1,title:"Data Manipulation Language Commands",description:"The Data Manipulation Language(DML) commands are used to manipulate the data stored in the relations of the database. DML Commands are supported by both XFS Interface and Frontend Interface. The following are the DML commands supported by NITCBase:",source:"@site/docs/User Interface Commands/dml.md",sourceDirName:"User Interface Commands",slug:"/User Interface Commands/dml",permalink:"/docs/User Interface Commands/dml",tags:[{label:"Data",permalink:"/docs/tags/data"},{label:"Manipulation",permalink:"/docs/tags/manipulation"},{label:"Commands",permalink:"/docs/tags/commands"},{label:"xfs",permalink:"/docs/tags/xfs"},{label:"interface",permalink:"/docs/tags/interface"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Data Manipulation Language Commands",tags:["Data","Manipulation","Commands","xfs","interface"]}},m=[{value:"INSERT INTO TABLE VALUES",id:"insert-into-table-values",children:[{value:"Description",id:"description",children:[],level:4},{value:"Syntax",id:"syntax",children:[],level:4}],level:3},{value:"INSERT INTO TABLE FROM FILE",id:"insert-into-table-from-file",children:[{value:"Description",id:"description-1",children:[],level:4},{value:"Syntax",id:"syntax-1",children:[],level:4}],level:3},{value:"SELECT * FROM TABLE",id:"select--from-table",children:[{value:"Description",id:"description-2",children:[],level:4},{value:"Syntax",id:"syntax-2",children:[],level:4}],level:3},{value:"SELECT Attrlist FROM TABLE",id:"select-attrlist-from-table",children:[{value:"Description",id:"description-3",children:[],level:4},{value:"Syntax",id:"syntax-3",children:[],level:4}],level:3},{value:"SELECT * FROM TABLE WHERE",id:"select--from-table-where",children:[{value:"Description",id:"description-4",children:[],level:4},{value:"Syntax",id:"syntax-4",children:[],level:4}],level:3},{value:"SELECT Attrlist FROM TABLE WHERE",id:"select-attrlist-from-table-where",children:[{value:"Description",id:"description-5",children:[],level:4},{value:"Syntax",id:"syntax-5",children:[],level:4}],level:3},{value:"SELECT * FROM JOIN WHERE",id:"select--from-join-where",children:[{value:"Description",id:"description-6",children:[],level:4},{value:"Syntax",id:"syntax-6",children:[],level:4}],level:3},{value:"SELECT Attrlist FROM JOIN WHERE",id:"select-attrlist-from-join-where",children:[{value:"Description",id:"description-7",children:[],level:4},{value:"Syntax",id:"syntax-7",children:[],level:4}],level:3}],p={toc:m};function c(t){var e=t.components,a=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Data Manipulation Language(DML) commands are used to manipulate the data stored in the relations of the database. DML Commands are supported by both XFS Interface and Frontend Interface. The following are the DML commands supported by NITCBase:"),(0,r.kt)("h3",{id:"insert-into-table-values"},"INSERT INTO TABLE VALUES"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"This command is used to insert a single record into the given relation."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INSERT INTO tablename VALUES ( value1, value2, value3, ... )\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The attribute values of the record are to be given as comma separated values in the same as the order of attributes in the relation."),(0,r.kt)("li",{parentName:"ul"},"The number and types of the attribute values of the record to be inserted into relation must match.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Given below are the records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"CGPA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"9.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"7")))),(0,r.kt)("p",{parentName:"div"},"Suppose that we need to insert a new record ",(0,r.kt)("inlineCode",{parentName:"p"},"2, Amy, 9.5")," into the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students"),"."),(0,r.kt)("p",{parentName:"div"},"The query for doing that will be the following:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INSERT INTO Students VALUES (2, Amy, 9.5)\n")),(0,r.kt)("p",{parentName:"div"},"The records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students")," will now be:"),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"CGPA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"9.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Amy"),(0,r.kt)("td",{parentName:"tr",align:null},"9.5")))))),(0,r.kt)("h3",{id:"insert-into-table-from-file"},"INSERT INTO TABLE FROM FILE"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"This command is used to insert multiple records into an already existing relation, ",(0,r.kt)("inlineCode",{parentName:"p"},"tablename")," from a CSV file, ",(0,r.kt)("inlineCode",{parentName:"p"},"filename.csv")," containing values for the attributes of the relation."),(0,r.kt)("h4",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INSERT INTO tablename VALUES FROM filename\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Each line in the CSV file corresponds to a record to be inserted in to the specified relation."),(0,r.kt)("li",{parentName:"ul"},"The order of attribute values in each line of the CSV file must be same as that of the attributes of the relation."),(0,r.kt)("li",{parentName:"ul"},"The number and types of attribute values in each row should match the number and types of the attributes of the specified relation."),(0,r.kt)("li",{parentName:"ul"},"The CSV file should not contain any ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," values."),(0,r.kt)("li",{parentName:"ul"},"The CSV file from which the values are to be inserted, must be stored in the path ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/NITCBase/Files/"),".")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Here is an example of a CSV file, ",(0,r.kt)("inlineCode",{parentName:"p"},"students.csv")," containing the records for insertion into an already existing relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="/Files/students.csv"',title:'"/Files/students.csv"'},"3,Sunny,8\n5,Sania,6\n7,Ralph,7.5\n")),(0,r.kt)("p",{parentName:"div"},"The query to insert all records contained in above file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Students")," relation will be:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INSERT INTO Students VALUES FROM students.csv\n")))),(0,r.kt)("h3",{id:"select--from-table"},"SELECT * FROM TABLE"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"This command creates a new target relation with the same attributes as that of source relation, and inserts into it all records from the source relation."),(0,r.kt)("h4",{id:"syntax-2"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM source_relation INTO target_relation\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM Students INTO Target_Students\n")))),(0,r.kt)("h3",{id:"select-attrlist-from-table"},"SELECT Attrlist FROM TABLE"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"This command creates a new target relation with the attributes specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"Attrlist"),", and inserts all records(only the values corresponding to the specified attributes) of the source relation, into the newly created target relation."),(0,r.kt)("h4",{id:"syntax-3"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Attribute1, Attribute2, ... FROM source_relation INTO target_relation\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Name, CGPA FROM Students INTO Target_Students\n")))),(0,r.kt)("h3",{id:"select--from-table-where"},"SELECT * FROM TABLE WHERE"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"This command is used to retrieve all records of a given source relation, and insert them into a target relation, based on the the given condition. All records in the source relation that satisfy the condition, will be inserted into the newly created target relation."),(0,r.kt)("h4",{id:"syntax-4"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM source_relation INTO target_relation WHERE attrname OP value\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Here, ",(0,r.kt)("inlineCode",{parentName:"li"},"OP")," should only take a value from the set ",(0,r.kt)("inlineCode",{parentName:"li"},"{ =, >, <, >=, <=, != }"),".")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM Students INTO Target_Students WHERE CGPA > 8\n")))),(0,r.kt)("h3",{id:"select-attrlist-from-table-where"},"SELECT Attrlist FROM TABLE WHERE"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"This command creates a new target relation with the attributes specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"Attrlist"),", and inserts those records (only the values corresponding to the attributes specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Attrlist"),") from the source relation which satisfy the given condition."),(0,r.kt)("h4",{id:"syntax-5"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Attribute1, Attribute2, ... FROM source_relation INTO target_relation WHERE attrname OP value\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Here, ",(0,r.kt)("inlineCode",{parentName:"li"},"OP")," should only take a value from the set ",(0,r.kt)("inlineCode",{parentName:"li"},"{ =, >, <, >=, <=, != }"),".")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Name, CGPA FROM Students INTO Target_Students WHERE CGPA > 8\n")))),(0,r.kt)("h3",{id:"select--from-join-where"},"SELECT * FROM JOIN WHERE"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"This command creates a new target relation with attributes constituting from both the source relations (excluding specified attribute from second source relation). It inserts the records obtained by ",(0,r.kt)("inlineCode",{parentName:"p"},"equi-join")," of both the source relations (an attribute from each relation specified in arguments are used for ",(0,r.kt)("inlineCode",{parentName:"p"},"equi-join"),") into the target relation."),(0,r.kt)("h4",{id:"syntax-6"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM source_relation1 JOIN source_relation2 INTO target_relation WHERE source_relation1.attribute1 = source_relation2.attribute2\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attribute1")," should belong to ",(0,r.kt)("inlineCode",{parentName:"li"},"source_relation1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute2")," should belong to ",(0,r.kt)("inlineCode",{parentName:"li"},"source_relation2"),"."),(0,r.kt)("li",{parentName:"ul"},"The join attributes (i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute2"),") can have the same name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Excluding the join attributes, there should be no other attributes with the same name in these relations."))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Given below are the records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Student1"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Batch"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Amy"),(0,r.kt)("td",{parentName:"tr",align:null},"B")))),(0,r.kt)("p",{parentName:"div"},"Given below are the records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Student2"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Marks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"67")))),(0,r.kt)("p",{parentName:"div"},"An example for a join query is:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM Students1 JOIN Students2 INTO Students WHERE Students1.Rollno = Students2.Rollno\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Equi-join")," on these two relations based on the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"Rollno")," would result in the following target relation, ",(0,r.kt)("inlineCode",{parentName:"p"},"Students"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Batch"),(0,r.kt)("th",{parentName:"tr",align:null},"Marks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Amy"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"97")))))),(0,r.kt)("h3",{id:"select-attrlist-from-join-where"},"SELECT Attrlist FROM JOIN WHERE"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"This command creates a new target relation with attributes given in ",(0,r.kt)("inlineCode",{parentName:"p"},"Attrlist"),". It inserts the records (only the values of the specified attributes in ",(0,r.kt)("inlineCode",{parentName:"p"},"Attrlist")," obtained by ",(0,r.kt)("inlineCode",{parentName:"p"},"equi-join")," of both the source relations (an attribute from each relation specified in arguments are used for equi-join) into the target relation."),(0,r.kt)("h4",{id:"syntax-7"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Attribute1, Attribute2, ... FROM source_relation1 JOIN source_relation2 INTO target_relation WHERE source_relation1.attribute1 = source_relation2.attribute2\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attribute1")," should belong to ",(0,r.kt)("inlineCode",{parentName:"li"},"source_relation1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute2")," should belong to ",(0,r.kt)("inlineCode",{parentName:"li"},"source_relation2"),"."),(0,r.kt)("li",{parentName:"ul"},"The join attributes(ie ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attribute2"),") can have the same name."),(0,r.kt)("li",{parentName:"ul"},"Excluding the join attributes, there should be no other attributes with the same name in these relations.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Given below are the records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Student1"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Batch"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Amy"),(0,r.kt)("td",{parentName:"tr",align:null},"B")))),(0,r.kt)("p",{parentName:"div"},"Given below are the records of the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Student2"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Marks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"67")))),(0,r.kt)("p",{parentName:"div"},"An example for a join query is:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT Rollno, Name, Marks FROM Students1 JOIN Students2 INTO Students WHERE Students1.Rollno = Students2.Rollno\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Equi-join")," on these two relations based on the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"Rollno")," would result in the following target relation, ",(0,r.kt)("inlineCode",{parentName:"p"},"Students"),"."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rollno"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Marks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anu"),(0,r.kt)("td",{parentName:"tr",align:null},"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Cody"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Amy"),(0,r.kt)("td",{parentName:"tr",align:null},"97")))))))}c.isMDXComponent=!0}}]);