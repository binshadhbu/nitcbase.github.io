"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[6736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),N=r,h=u["".concat(m,".").concat(N)]||u[N]||s[N]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4,title:"Schema Layer"},i=void 0,o={unversionedId:"Design/Schema Layer",id:"Design/Schema Layer",title:"Schema Layer",description:"https://nitcbase.github.io/archived-site/design/schema.html",source:"@site/docs/Design/Schema Layer.md",sourceDirName:"Design",slug:"/Design/Schema Layer",permalink:"/docs/Design/Schema Layer",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Schema Layer"},sidebar:"Design",previous:{title:"Algebra Layer",permalink:"/docs/Design/Algebra Layer"},next:{title:"Block Access Layer",permalink:"/docs/Design/Block Access Layer"}},m={},p=[{value:"Layout",id:"layout",level:2},{value:"class Schema",id:"class-schema",level:2},{value:"Schema :: createRel()",id:"schema--createrel",level:2},{value:"Description",id:"description",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return value",id:"return-value",level:4},{value:"Algorithm",id:"algorithm",level:4},{value:"Schema :: deleteRel()",id:"schema--deleterel",level:2},{value:"Description",id:"description-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return value",id:"return-value-1",level:4},{value:"Algorithm",id:"algorithm-1",level:4},{value:"Schema :: createIndex()",id:"schema--createindex",level:2},{value:"Description",id:"description-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Return value",id:"return-value-2",level:4},{value:"Algorithm",id:"algorithm-2",level:4},{value:"Schema :: dropIndex()",id:"schema--dropindex",level:2},{value:"Description",id:"description-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Return value",id:"return-value-3",level:4},{value:"Algorithm",id:"algorithm-3",level:4},{value:"Schema :: renameRel()",id:"schema--renamerel",level:2},{value:"Description",id:"description-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Return value",id:"return-value-4",level:4},{value:"Algorithm",id:"algorithm-4",level:4},{value:"Schema :: renameAttr()",id:"schema--renameattr",level:2},{value:"Description",id:"description-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Return value",id:"return-value-5",level:4},{value:"Algorithm",id:"algorithm-5",level:4},{value:"Schema :: openRel()",id:"schema--openrel",level:2},{value:"Description",id:"description-6",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:"Return value",id:"return-value-6",level:4},{value:"Algorithm",id:"algorithm-6",level:4},{value:"Schema :: closeRel()",id:"schema--closerel",level:2},{value:"Description",id:"description-7",level:4},{value:"Arguments",id:"arguments-7",level:4},{value:"Return value",id:"return-value-7",level:4},{value:"Algorithm",id:"algorithm-7",level:4},{value:"Schema :: getSchema()",id:"schema--getschema",level:2}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nitcbase.github.io/archived-site/design/schema.html"},"https://nitcbase.github.io/archived-site/design/schema.html")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Schema Layer code is to be written in ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.cpp")," and it's header file ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.h")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/stub/schema_stub"},"The stub code for these files can be found here.")))),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"The SQL-Like queries that alter the schema of the database are converted into a sequence of schema layer function calls by front end. These schema layer function calls processes the ",(0,r.kt)("strong",{parentName:"p"},"basic schema alteration requests to the database.")),(0,r.kt)("p",null,"The functions of Schema layer include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--createrel"},(0,r.kt)("strong",{parentName:"a"},"createRel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--deleterel"},(0,r.kt)("strong",{parentName:"a"},"deleteRel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--renamerel"},(0,r.kt)("strong",{parentName:"a"},"renameRel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--renameattr"},(0,r.kt)("strong",{parentName:"a"},"renameAttr"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--createindex"},(0,r.kt)("strong",{parentName:"a"},"createIndex"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--dropindex"},(0,r.kt)("strong",{parentName:"a"},"deleteIndex"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--openrel"},(0,r.kt)("strong",{parentName:"a"},"openRel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--closerel"},(0,r.kt)("strong",{parentName:"a"},"closeRel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#schema--getschema"},(0,r.kt)("strong",{parentName:"a"},"getSchema"))," - YET TO BE DESIGNED")),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"openRel")," is used to the open a relations for access, ",(0,r.kt)("inlineCode",{parentName:"p"},"closeRel")," to close a relation and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSchema")," to get the schema of the relation. NITCbase follows an Object-Oriented design for Schema Layer. The class definition is as shown below:"),(0,r.kt)("h2",{id:"class-schema"},"class Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Schema {\npublic:\n    static int createRel(char relName[], int numOfAttributes, char attrNames[][ATTR_SIZE], int attrType[]);\n    static int deleteRel(char relName[ATTR_SIZE]);\n    static int createIndex(char relName[ATTR_SIZE], char attrName[ATTR_SIZE]);\n    static int dropIndex(char relName[ATTR_SIZE], char attrName[ATTR_SIZE]);\n    static int renameRel(char oldRelName[ATTR_SIZE], char newRelName[ATTR_SIZE]);\n    static int renameAttr(char relName[ATTR_SIZE], char oldAttrName[ATTR_SIZE], char newAttrName[ATTR_SIZE]);\n    static int openRel(char relName[ATTR_SIZE]);\n    static int closeRel(char relName[ATTR_SIZE]);\n};\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--createrel"},"Schema :: createRel()"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"This method creates a new Relation with the name, attribute/column list as specified in arguments."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nAttrs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"No. of attributes in the relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attrs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char [][ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"pointer to array of Attribute/column names of the Relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attrtype"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int []")),(0,r.kt)("td",{parentName:"tr",align:null},"pointer to an array of attribute types.")))),(0,r.kt)("h4",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful creation of the relation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation with name relName already exists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_DUPLICATEATTR"))),(0,r.kt)("td",{parentName:"tr",align:null},"If two any two of the given attributes have same name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_DISKFULL"))),(0,r.kt)("td",{parentName:"tr",align:null},"If disk space is not sufficient for creating the new relation.")))),(0,r.kt)("h4",{id:"algorithm"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int createRel(char relName[],int nAttrs, char attrs[][ATTR_SIZE],int attrtype[]){\n\n    // let relNameAsAttribute be of type Attribute\n    // copy the relName into relNameAsAttribute.sVal\n\n    // let targetRelId be of type recId\n\n    /*\n        Reset the searchIndex using RelCacheTable::resetSearhIndex()\n        Search the relation RELCAT(relId RELCAT_RELID,which is equal to 0) for attribute value attribute "RelName" = relNameAsAttribute using search() of Block Access Layer with OP = EQ\n        Let the return value of search be retVal\n        Hint: retVal = BlockAccess::search(RELCAT_RELID, relCatSearchResultRecord, "RelName", relNameAsAttribute, EQ);\n    */\n\n    // if retVal == SUCCESS (i.e relation with relation name as relName already exists)\n    // return E_RELEXIST;\n\n    // compare every pair of attributes of attrNames[] array\n    // if any attribute names have same string value, return E_DUPLICATEATTR (i.e 2 attributes have same value)\n\n    // let Attribute relCatRecord[6] be the new record to be inserted into relation catalog corresponding to new relation)\n    // fill relCatRecord fields as given below\n    // offset RELCAT_REL_NAME_INDEX: relName\n    // offset RELCAT_NO_ATTRIBUTES_INDEX: numOfAttributes\n    // offset RELCAT_NO_RECORDS_INDEX: 0\n    // offset RELCAT_FIRST_BLOCK_INDEX: -1\n    // offset RELCAT_LAST_BLOCK_INDEX: -1\n    // offset RELCAT_NO_SLOTS_PER_BLOCK_INDEX: floor((2016 / (16 * nAttrs + 1)))\n\n    // retVal = BlockAccess::insert(RELCAT_RELID(=0), relCatRecord);\n    // if BlockAccess::insert fails return retVal\n\n    // iterate through 0 to numOfAttributes - 1 :\n    {\n        // let Attribute attrCatRecord[6] be the record in attribute catalog corresponding to i\'th Attribute)\n        // (where i is the iterator of the loop)\n        // fill attrCatRecord fields(corresponding to i\'th attribute of the relation) as given below\n        // offset ATTRCAT_REL_NAME_INDEX: relName\n        // offset ATTRCAT_ATTR_NAME_INDEX: attrNames[i]\n        // offset ATTRCAT_ATTR_TYPE_INDEX: attrTypes[i]\n        // offset ATTRCAT_PRIMARY_FLAG_INDEX: -1\n        // offset ATTRCAT_ROOT_BLOCK_INDEX: -1\n        // offset ATTRCAT_OFFSET_INDEX: i\n\n        // retVal = BlockAccess::insert(ATTRCAT_RELID(=1), attrCatRecord);\n        /* if insert fails:\n            delete the relation by calling deleteRel(targetrel) of schema layer\n            return E_DISKFULL\n        */\n    }\n\n    // return SUCCESS\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--deleterel"},"Schema :: deleteRel()"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"This method deletes the Relation with name as specified in arguments."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")))),(0,r.kt)("h4",{id:"return-value-1"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful deletion of the relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation is open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If relName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),". i.e., when the user tries to delete the catalogs.")))),(0,r.kt)("h4",{id:"algorithm-1"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int Schema::deleteRel(char *relName) {\n    // if the relation to delete is either Relation Catalog or Attribute Catalog, return E_NOTPERMITTED\n        // compare the input relName with "RELATIONCAT" and "ATTRIBUTECAT"\n        // OR use the following constants: RELCAT_NAME and ATTRCAT_NAME\n\n\n    // get the open relation id using appropriate method of OpenRelTable class by passing relation name as argument\n\n    // if relation is opened in open relation table, return E_RELOPEN\n\n    // Call deleteRelation method of the Block Access Layer by passing appropriate argument.\n\n    // return the value returned by the above deleteRelation() call\n    // Errors from deleteRelation -> E_RELNOTEXIST\n        //  AS OF NOW, It can return E_OUT_OF_BOUND from loadBlockAndGetBufferPtr call,\n        //  but if done properly we will not reach this point\n        //  this comes up only when BlockBuffer(or RecBuffer) was initialized with an Invalid Block Number\n\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--createindex"},"Schema :: createIndex()"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"This method creates a bplus indexing on an attribute attrName in a relation relName as specified in arguments."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attrName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char [ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Attribute.")))),(0,r.kt)("h4",{id:"return-value-2"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful creation of B+ tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation is not open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_ATTRNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the attribute with name attrName does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_DISKFULL"))),(0,r.kt)("td",{parentName:"tr",align:null},"If there is no enough space in the disk to create the tree")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),". i.e, when the user tries to create an index for catalogs.")))),(0,r.kt)("h4",{id:"algorithm-2"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int createIndex(char relName[ATTR_SIZE],char attrName[ATTR_SIZE]){\n    // if the relation name is either Relation Catalog or Attribute Catalog, return E_NOTPERMITTED\n        // compare the input relName with "RELATIONCAT" and "ATTRIBUTECAT"\n        // OR use the following constants: RELCAT_NAME and ATTRCAT_NAME\n    // get the relation\'s open relation id using OpenRelTable::getRelId() method\n\n    // if relation is not open in open relation table, return E_RELNOTOPEN\n    // (check if the value returned from getRelationId function call = E_RELNOTOPEN)\n\n    // TODO: Update once BPlus Layer algorithms are completed\n    // BPlusTree bPlusTree = BPlusTree(relId, attrName);\n    // if(bPlusTree.blockNum == DISK_FULL)\n    // return DISK_FULL;\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--dropindex"},"Schema :: dropIndex()"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"This method drops the bplus indexing on an attribute attrName in a relation relName as specified in arguments."),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attrName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char [ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Attribute.")))),(0,r.kt)("h4",{id:"return-value-3"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful deletion of the B+ tree")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation is not open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_ATTRNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the attribute with name attrName does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),".")))),(0,r.kt)("h4",{id:"algorithm-3"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int Schema::dropIndex(char *relName, char *attrName) {\n    // if the relation name is either Relation Catalog or Attribute Catalog, return E_NOTPERMITTED\n        // compare the input relName with "RELATIONCAT" and "ATTRIBUTECAT"\n        // OR use the following constants: RELCAT_NAME and ATTRCAT_NAME\n    // get the open relation id using appropriate method of OpenRelTable class by passing relation name as argument\n\n    // if relation is opened in open relation table, return E_RELOPEN\n\n    // ret = bplus_destroy(relid,attrName);\n\n    // return ret\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--renamerel"},"Schema :: renameRel()"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"This method changes the relation name of specified relation to new name as specified in arguments."),(0,r.kt)("h4",{id:"arguments-4"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldRelName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Old Name of Relation to which name has to be changed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newRelName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"New name for the Relation.")))),(0,r.kt)("h4",{id:"return-value-4"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful renaming of the relation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation is open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation with name oldRelName does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation with name newRelName already exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the oldrelName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),". i.e, when the user tries to rename either of the catalogs.")))),(0,r.kt)("h4",{id:"algorithm-4"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int renameRel(char oldRelName[ATTR_SIZE], char newRelName[ATTR_SIZE]) {\n    // if the oldRelName or newRelName is either Relation Catalog or Attribute Catalog, return E_NOTPERMITTED\n        // compare the input relName with "RELATIONCAT" and "ATTRIBUTECAT"\n        // OR use the following constants: RELCAT_NAME and ATTRCAT_NAME\n    // get the relation\'s open relation id using OpenRelTable::getRelId() method\n\n    // if relation is open in open relation table, return E_RELOPEN\n    // (check if the value returned from getRelId function call != E_RELNOTOPEN)\n\n    // retVal = BlockAccess::renameRelation(oldRelName, newRelName);\n    // return retVal\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--renameattr"},"Schema :: renameAttr()"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"This method changes the name of an attribute/column present in a specified relation, to new name as specified in arguments."),(0,r.kt)("h4",{id:"arguments-5"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldAttrName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Old Name of attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newAttrName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"New name for attribute.")))),(0,r.kt)("h4",{id:"return-value-5"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful renaming of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation is open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation with name relName does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_ATTRNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the attribute with name oldAttrName does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_ATTREXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the attribute with name newAttrName already exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),". i.e, when the user tries to rename any attribute value of either of the catalogs.")))),(0,r.kt)("h4",{id:"algorithm-5"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int Schema::renameAttr(char *relName, char *oldAttrName, char *newAttrName) {\n    // if the relName is either Relation Catalog or Attribute Catalog, return E_NOTPERMITTED\n        // compare the input relName with "RELATIONCAT" and "ATTRIBUTECAT"\n        // OR use the following constants: RELCAT_NAME and ATTRCAT_NAME\n\n    // get the open relation id using appropriate method of OpenRelTable class by passing relation name as argument\n\n    // if relation is opened in open relation table, return E_RELOPEN\n\n    // Call renameAttribute method of Block Access Layer by passing appropriate arguments.\n\n    // return the value returned by the above renameAttribute() call\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--openrel"},"Schema :: openRel()"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"This method opens the relation specified as name in cache/OpenRelTable."),(0,r.kt)("h4",{id:"arguments-6"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")))),(0,r.kt)("h4",{id:"return-value-6"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"relId")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the relId on succesful opening of the relation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTEXIST"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relation with name relName does not exist in the disk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_CACHEFULL"))),(0,r.kt)("td",{parentName:"tr",align:null},"If there are no free slots in the Open Relation table.")))),(0,r.kt)("h4",{id:"algorithm-6"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int Schema::openRel(char *relName) {\n    // Call openRelation method of OpenRelTable by passing appropriate arguments\n    int ret = OpenRelTable::openRel(relName);\n\n    // return the value returned by the above openRelation() call\n    return ret;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--closerel"},"Schema :: closeRel()"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"This method closes the relation specified as name in cache/OpenRelTable."),(0,r.kt)("h4",{id:"arguments-7"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char[ATTR_SIZE]")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Relation.")))),(0,r.kt)("h4",{id:"return-value-7"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"SUCCESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"On successful closing of the relation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_RELNOTOPEN"))),(0,r.kt)("td",{parentName:"tr",align:null},"If relation with given name is not open")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/constants"},(0,r.kt)("inlineCode",{parentName:"a"},"E_NOTPERMITTED"))),(0,r.kt)("td",{parentName:"tr",align:null},"If the relName is either ",(0,r.kt)("em",{parentName:"td"},'"RELATIONCAT"')," or ",(0,r.kt)("em",{parentName:"td"},'"ATTRIBUTECAT"'),". i.e, when the user tries to close either of the catalogs.")))),(0,r.kt)("h4",{id:"algorithm-7"},"Algorithm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int closeRel(char relName[ATTR_SIZE]) {\n    // check if relName is either "RELATIONCAT" or "ATTRIBUTECAT". If so then return E_NOTPERMITTED.\n\n    // get the relation\'s open relation id using OpenRelTable::getRelationId() method\n\n    // if relation is not open in open relation table, return E_RELNOTOPEN\n    // (check if the value returned from getRelationId function call = E_RELNOTOPEN)\n\n    // close the relId\'th relation using OpenRelTable::closeRelation(relId) of Cache Layer\n    // let the return value be retVal\n    // return retVal;\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schema--getschema"},"Schema :: getSchema()"),(0,r.kt)("p",null,"YET TO BE DESIGNED"))}s.isMDXComponent=!0}}]);