"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Stage 5 : Opening Relations"},o="Stage 5 : Opening Relations (10 hours)",i={unversionedId:"Roadmap/Stage05",id:"Roadmap/Stage05",title:"Stage 5 : Opening Relations",description:"- Familiarise with the design of the Cache Layer and understand the maintenance of the catalog caches",source:"@site/docs/Roadmap/Stage05.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage05",permalink:"/docs/Roadmap/Stage05",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 5 : Opening Relations"},sidebar:"Roadmap",previous:{title:"Stage 4 : Linear Search on Relations",permalink:"/docs/Roadmap/Stage04"},next:{title:"Stage 6 : Buffer Management and Disk Write-back",permalink:"/docs/Roadmap/Stage06"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Open and Closed Relations",id:"open-and-closed-relations",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Exercises",id:"exercises",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage-5--opening-relations-10-hours"},"Stage 5 : Opening Relations (10 hours)"),(0,r.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Familiarise with the design of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," and understand the maintenance of the catalog caches"),(0,r.kt)("li",{parentName:"ul"},"Implement the functions for opening a relation and setting up it's cache entries to facilitate searching of records."))),(0,r.kt)("admonition",{title:"PREREQUISITE READING",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/User%20Interface%20Commands/dml"},"Data Manipulation Language (DML) Commands")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Your current NITCbase implementation must be able to read the rows and columns of the relations ",(0,r.kt)("inlineCode",{parentName:"p"},"RELCAT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTRIBUTECAT")," and filter the records based on a certain condition. In this stage, we'll extend all the functionality we have implemented so far to work with any arbitrary relation on the DBMS."),(0,r.kt)("h3",{id:"open-and-closed-relations"},"Open and Closed Relations"),(0,r.kt)("p",null,"A relation that has it's relation and attribute catalog entries stored in the respective caches is called an ",(0,r.kt)("strong",{parentName:"p"},"open relation"),". NITCbase supports opening 12 relations at once. Since the relation catalog and attribute catalog are always open, we can only open 10 other relations. If we want to open any more relations, we will have to ",(0,r.kt)("strong",{parentName:"p"},"close")," some relation. Note that the NITCbase specification does not allow closing of the relation and attribute catalog unless at the time of database exit. ",(0,r.kt)("strong",{parentName:"p"},"NITCbase requires that a relation be opened before any ",(0,r.kt)("a",{parentName:"strong",href:"/docs/User%20Interface%20Commands/dml"},"DML")," commands can be performed on it"),"."),(0,r.kt)("p",null,"We discussed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/RelCacheTable"},"RelCacheTable")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/AttrCacheTable"},"AttrCacheTable")," classes in the preceding stage. Here, we introduce the class ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/OpenRelTable"},"OpenRelTable"),". This class manages the opening and closing of relations and handles the caching operations. It has a member ",(0,r.kt)("inlineCode",{parentName:"p"},"tableMetaInfo")," which is a ",(0,r.kt)("a",{parentName:"p",href:"/constants"},"MAX_OPEN")," sized array of type ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro#openreltablemetainfo"},"struct OpenRelTableMetaInfo"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"tableMetaInfo")," is used to store which entries of the caches are free and the relation to which an occupied entry belongs."),(0,r.kt)("p",null,"For any index ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," that is occupied in the caches, the entries at index ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"relCache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attrCache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tableMetaInfo")," will correspond to the same relation. Recall that this index ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is called the relation's rel-id. These three tables comprise the core functionality of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," of NITCbase. A table can be opened and closed by the user with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/ddl#open-table"},"OPEN TABLE")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/ddl#close-table"},"CLOSE TABLE")," commands respectively, both handled by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To open a relation, we need to search through the relation and attribute catalog and fetch the records corresponding to the relation we want to open. To search through the records of a relation, we require that it's catalog entries be present in the caches i.e the relation is open. Hence, NITCbase ensures that the relation catalog and attribute catalog are always kept open."),(0,r.kt)("p",null,"A sequence diagrams documenting the flow of data between the layers is shown below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The functions are denoted with circles as follows.",(0,r.kt)("br",null),"\n\ud83d\udd35 -> methods that are already in their final state",(0,r.kt)("br",null),"\n\ud83d\udfe2 -> methods that will attain their final state in this stage",(0,r.kt)("br",null),"\n\ud83d\udfe0 -> methods that we will modify in this stage, and in subsequent stages ",(0,r.kt)("br",null))),(0,r.kt)("br",null),(0,r.kt)("mermaid",{value:" %%{init: { 'sequence': {'mirrorActors':false} } }%%\nsequenceDiagram\n    actor User\n    participant Frontend User Interface\n    participant Frontend Programming Interface\n    participant Schema Layer\n    participant Cache Layer\n    participant Block Access Layer\n    participant Buffer Layer\n    User->>Frontend User Interface: OPEN TABLE\n    activate Frontend User Interface\n    Frontend User Interface->>Frontend Programming Interface :open_table()\ud83d\udfe2\n    activate Frontend Programming Interface\n    Frontend Programming Interface->>Schema Layer:openRel()\ud83d\udfe2\n    activate Schema Layer\n    Schema Layer->>Cache Layer:openRel()\ud83d\udfe2\n    activate Cache Layer\n    loop until all catalog entries are read\n      Cache Layer->>Block Access Layer:linearSearch()\ud83d\udd35\n      activate Block Access Layer\n      Block Access Layer--\x3e>Cache Layer: recId\n      deactivate Block Access Layer\n      Cache Layer->>Buffer Layer:getHeader()\ud83d\udd35, getRecord()\ud83d\udd35, getSlotmap()\ud83d\udd35\n      activate Buffer Layer\n      Buffer Layer--\x3e>Cache Layer: record block info\n      deactivate Buffer Layer\n    end\n    Cache Layer--\x3e>Schema Layer:relId\n      deactivate Cache Layer\n    Schema Layer--\x3e>User:operation status\n    deactivate Schema Layer\n    deactivate Frontend Programming Interface\n    deactivate Frontend User Interface\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A class diagram showing the methods relevant to this functionality in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer")," is shown below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that we will be using functions from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"linearSearch")," function from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer")," that was already implemented by you in the earlier stages. However, these functions do not require any modification at this stage. Hence, their class diagrams are not included below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schema Layer")),(0,r.kt)("mermaid",{value:"classDiagram\n  class Schema{\n    +openRel(char relName[ATTR_SIZE])$ int\ud83d\udfe2\n    +closeRel(char relName[ATTR_SIZE])$ int\ud83d\udfe2\n  }"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cache Layer")),(0,r.kt)("mermaid",{value:"classDiagram\ndirection RL\n  RelCacheTable <|.. OpenRelTable : friend\n  AttrCacheTable <|.. OpenRelTable : friend\n  class RelCacheTable{\n    -relCache[MAX_OPEN] : RelCacheEntry*\n    -recordToRelCatEntry(union Attribute record[RELCAT_NO_ATTRS], RelCatEntry *relCatEntry)$ void\ud83d\udd35\n    +getRelCatEntry(int relId, RelCatEntry *relCatBuf)$ int\ud83d\udd35\n    +getSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udd35\n    +setSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udd35\n    +resetSearchIndex(int relId)$ int\ud83d\udd35\n  }\n  class AttrCacheTable{\n    -attrCache[MAX_OPEN] : AttrCacheEntry*\n    -recordToAttrCatEntry(union Attribute record[ATTRCAT_NO_ATTRS], AttrCatEntry *attrCatEntry)$ void\ud83d\udd35\n    +getAttrCatEntry(int relId, int attrOffset, AttrCatEntry *attrCatBuf)$ int\ud83d\udd35\n    +getAttrCatEntry(int relId, char attrName[ATTR_SIZE], AttrCatEntry *attrCatBuf)$ int\ud83d\udd35\n  }\n  class OpenRelTable{\n    -tableMetaInfo[MAX_OPEN] : OpenRelTableMetaInfo\n    +OpenRelTable(): \ud83d\udfe2\n    +~OpenRelTable(): \ud83d\udfe0\n    -getFreeOpenRelTableEntry()$ int\ud83d\udfe2\n    +getRelId(char relName[ATTR_SIZE])$ int\ud83d\udfe2\n    +openRel(char relName[ATTR_SIZE])$ int\ud83d\udfe2\n    +closeRel(int relId)$ int\ud83d\udfe0\n  }\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"As shown in the sequence diagram above, the Frontend User Interface will parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN TABLE")," command and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::open_table()")," function in the Frontend Programming Interface. This call is then transferred along to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer"),". Hence, the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::open_table()")," function only involves a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema::openRel()")," function. Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CLOSE TABLE")," command leads to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::close_table()")," function which in turn transfers control to ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema::closeRel()"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Frontend/Frontend.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int Frontend::open_table(char relname[ATTR_SIZE]) {\n  return Schema::openRel(relname);\n}\n\nint Frontend::close_table(char relname[ATTR_SIZE]) {\n  return Schema::closeRel(relname);\n}\n"))),(0,r.kt)("p",null,"Now, let us implement the functions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema::openRel()")," function invokes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable::openRel()"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema::closeRel()")," closes a relation if it is open by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable::closeRel()")," which frees that slot in the caches. Note that this function should not allow the closing of the relation catalog and the attribute catalog."),(0,r.kt)("p",null,"Closing a relation involves writing back to the disk any changes that have been made to the relation while the relation was open. At this stage, we have not implemented any such update operations and hence, your current implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema::closeRel()")," does not need to handle the same. We will add this functionality in later stages."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema/Schema.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int Schema::openRel(char relName[ATTR_SIZE]) {\n  int ret = OpenRelTable::openRel(relName);\n\n  // the OpenRelTable::openRel() function returns the rel-id if successful\n  // a valid rel-id will be within the range 0 <= relId < MAX_OPEN and any\n  // error codes will be negative\n  if(ret >= 0){\n    return SUCCESS;\n  }\n\n  //otherwise it returns an error message\n  return ret;\n}\n\nint Schema::closeRel(char relName[ATTR_SIZE]) {\n  if (/* relation is relation catalog or attribute catalog */) {\n    return E_NOTPERMITTED;\n  }\n\n  // this function returns the rel-id of a relation if it is open or\n  // E_RELNOTOPEN if it is not. we will implement this later.\n  int relId = OpenRelTable::getRelId(relName);\n\n  if (/* relation is not open */) {\n    return E_RELNOTOPEN;\n  }\n\n  return OpenRelTable::closeRel(relId);\n}\n\n"))),(0,r.kt)("p",null,"Next, we implement the functions of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable")," class will need to be modified to initialise and update the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tableMetaInfo")," array. We will also implement the functions for opening and closing relations."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that ",(0,r.kt)("inlineCode",{parentName:"em"},"tableMetaInfo")," is an array of type ",(0,r.kt)("a",{parentName:"em",href:"/docs/Design/Cache%20Layer/intro#openreltablemetainfo"},"struct OpenRelTableMetaInfo"),". It is static member of the class and will hence need to be explicitly declared before it can be used.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/OpenRelTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\nOpenRelTableMetaInfo OpenRelTable::tableMetaInfo[MAX_OPEN];\n\nOpenRelTable::OpenRelTable() {\n\n  // initialise all values in relCache and attrCache to be nullptr and all entries\n  // in tableMetaInfo to be free\n\n  // load the relation and attribute catalog into the relation cache (we did this already)\n\n  // load the relation and attribute catalog into the attribute cache (we did this already)\n\n  /************ Setting up tableMetaInfo entries ************/\n\n  // in the tableMetaInfo array\n  //   set free = false for RELCAT_RELID and ATTRCAT_RELID\n  //   set relname for RELCAT_RELID and ATTRCAT_RELID\n}\n\n\nOpenRelTable::~OpenRelTable() {\n\n  // close all open relations (from rel-id = 2 onwards. Why?)\n  for (int i = 2; i < MAX_OPEN; ++i) {\n    if (!tableMetaInfo[i].free) {\n      OpenRelTable::closeRel(i); // we will implement this function later\n    }\n  }\n\n  // free the memory allocated for rel-id 0 and 1 in the caches\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TASK"),": Implement the following functions looking at their respective design docs"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/OpenRelTable#openreltable--getfreeopenreltableentry"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenRelTable::getFreeOpenRelTableEntry()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/OpenRelTable#openreltable--getrelid"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenRelTable::getRelId()")))),(0,r.kt)("sub",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable::openRel()")," function involves dynamic memory allocation using ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc")," for creating entries in the relation cache and attribute cache (as a linked list). Please take care to avoid segmentation faults due to mishandling of the associated pointers and such.")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/OpenRelTable#openreltable--openrel"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenRelTable::openRel()"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\nint OpenRelTable::closeRel(int relId) {\n  if (/* rel-id corresponds to relation catalog or attribute catalog*/) {\n    return E_NOTPERMITTED;\n  }\n\n  if (/* 0 <= relId < MAX_OPEN */) {\n    return E_OUTOFBOUND;\n  }\n\n  if (/* rel-id corresponds to a free slot*/) {\n    return E_RELNOTOPEN;\n  }\n\n  // free the memory allocated in the relation and attribute caches which was\n  // allocated in the OpenRelTable::openRel() function\n\n  // update `tableMetaInfo` to set `relId` as a free slot\n  // update `relCache` and `attrCache` to set the entry at `relId` to nullptr\n\n  return SUCCESS;\n}\n\n")),(0,r.kt)("p",null,"You should now be able to open any relation present in your database and perform the ",(0,r.kt)("em",{parentName:"p"},"select")," operation on it.")),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1.")," Open the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students")," and do a select query on the relation with the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPEN TABLE Students;\nSELECT * FROM Students INTO null WHERE Batch=J;\nCLOSE TABLE Students;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q2.")," Open the relations ",(0,r.kt)("em",{parentName:"p"},"Events(",(0,r.kt)("inlineCode",{parentName:"em"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"NUM"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"title"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"STR"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"location"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"STR"),"), Locations(",(0,r.kt)("inlineCode",{parentName:"em"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"STR"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"capacity"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"NUM"),")")," and ",(0,r.kt)("em",{parentName:"p"},"Participants(",(0,r.kt)("inlineCode",{parentName:"em"},"regNo"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"NUM"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"em"},"STR"),")")," that you created earlier and do a ",(0,r.kt)("em",{parentName:"p"},"select")," query for all three relations. Ensure that you get the following output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"# SELECT * FROM Events INTO null WHERE id>0;\n| id | title | location |\nSelected successfully into null\n\n# SELECT * FROM Locations INTO null WHERE name!=none;\n| name | capacity |\nSelected successfully into null\n\n# SELECT * FROM Participants INTO null WHERE regNo>0;\n| name | capacity |\nSelected successfully into null\n")))}d.isMDXComponent=!0}}]);