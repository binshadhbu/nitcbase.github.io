"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[9889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(m,l(l({ref:t},h),{},{components:n})):a.createElement(m,l({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Stage 4 : Linear Search on Relations"},l="Stage 4 : Linear Search on Relations (10 hours)",o={unversionedId:"Roadmap/Stage04",id:"Roadmap/Stage04",title:"Stage 4 : Linear Search on Relations",description:"- Familiarise with the mechanism of receiving commands from the Frontend User Interface and calling the appropriate function in the lower layers through the Frontend Programming Interface",source:"@site/docs/Roadmap/Stage04.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage04",permalink:"/docs/Roadmap/Stage04",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 4 : Linear Search on Relations"},sidebar:"Roadmap",previous:{title:"Stage 3 : The Disk Buffer and Catalog Caches",permalink:"/docs/Roadmap/Stage03"},next:{title:"Stage 5 : Opening Relations",permalink:"/docs/Roadmap/Stage05"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"The Search Operation",id:"the-search-operation",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Exercises",id:"exercises",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage-4--linear-search-on-relations-10-hours"},"Stage 4 : Linear Search on Relations (10 hours)"),(0,r.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Familiarise with the mechanism of receiving commands from the Frontend User Interface and calling the appropriate function in the lower layers through the Frontend Programming Interface"),(0,r.kt)("li",{parentName:"ul"},"Implement linear search on a relation whose metadata is available in the relation and attribute caches to display the records"))),(0,r.kt)("admonition",{title:"PREREQUISITE READING",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/User%20Interface%20Commands/efs"},"External Filesystem (XFS) Commands")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We discussed the relation and attribute cache in the previous stage. Your implementation must now be able to read the rows and columns of the relations ",(0,r.kt)("inlineCode",{parentName:"p"},"RELCAT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTRIBUTECAT")," from the caches and display the attributes for these relations. In this stage, we'll implement a search functionality so that we can search through all the records of these relations too."),(0,r.kt)("h2",{id:"the-search-operation"},"The Search Operation"),(0,r.kt)("p",null,"A search operation involves fetching all records that satisfy some condition. This is also known as a selection operation in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_algebra"},"relational algebra"),". NITCbase supports selection with the following operators: ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," ",(0,r.kt)("inlineCode",{parentName:"p"},">="),". We'll implement a function that will do the appropriate search and return to us a record that satisfies our condition each time it's called. Higher levels can call this function repeatedly until there are no more records to be found."),(0,r.kt)("p",null,"You might've realized that the above function would require some global state to work as intended. We'll need to keep track of the previously found record so that we can fetch the next record that satisfies the condition. And that is exactly what the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," field in the relation cache does. ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," in a relation cache entry stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"rec-id = {block, slot}")," of the last hit during linear search on that relation. A value of ",(0,r.kt)("inlineCode",{parentName:"p"},"rec-id = {-1, -1}")," indicates that the search should start over from the beginning again."),(0,r.kt)("p",null,"The search functionality is implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer")," of NITCbase and made available to the user through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#select--from-table-where"},"SELECT")," command. This command will be parsed and handled by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Frontend#frontend-programming-interface"},"Frontend Interface")," which will call the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," field and it's operations will be implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"A sequence diagrams documenting the flow of data between the layers is shown below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The functions are denoted with circles as follows.",(0,r.kt)("br",null),"\n\ud83d\udd35 -> methods that are already in their final state",(0,r.kt)("br",null),"\n\ud83d\udfe2 -> methods that will attain their final state in this stage",(0,r.kt)("br",null),"\n\ud83d\udfe0 -> methods that we will modify in this stage, and in subsequent stages ",(0,r.kt)("br",null),"\n\ud83d\udfe4 -> methods that we built earlier and require more work later, but will leave as is in this stage")),(0,r.kt)("br",null),(0,r.kt)("mermaid",{value:" %%{init: { 'sequence': {'mirrorActors':false} } }%%\nsequenceDiagram\n    actor User\n    participant Frontend User Interface\n    participant Frontend Programming Interface\n    participant Algebra Layer\n    participant Block Access Layer\n    participant Cache Layer\n    participant Buffer Layer\n    User->>Frontend User Interface: SELECT\n    activate Frontend User Interface\n    Frontend User Interface->>Frontend Programming Interface:select_from_table_where()\ud83d\udfe2\n    activate Frontend Programming Interface\n    Frontend Programming Interface->>Algebra Layer:select()\ud83d\udfe0\n    activate Algebra Layer\n    loop until all records found\n      Algebra Layer->>Block Access Layer:linearSearch()\ud83d\udfe2\n      activate Block Access Layer\n      Block Access Layer->>Cache Layer:cache functions\n      activate Cache Layer\n      Cache Layer--\x3e>Block Access Layer:relCatEntry, attrCatEntry\n      deactivate Cache Layer\n      Block Access Layer->>Buffer Layer:getHeader()\ud83d\udd35, getRecord()\ud83d\udd35, getSlotmap()\ud83d\udfe2\n      activate Buffer Layer\n      Buffer Layer--\x3e>Block Access Layer: record block info\n      deactivate Buffer Layer\n      Block Access Layer--\x3e>Algebra Layer:recId\n      deactivate Block Access Layer\n    end\n    Algebra Layer--\x3e>User:operation status\n    deactivate Algebra Layer\n    deactivate Frontend Programming Interface\n    deactivate Frontend User Interface\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A class diagram showing the methods relevant to this functionality in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer")," is shown below."),(0,r.kt)("mermaid",{value:"classDiagram\n  class Algebra{\n    +select(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], char attr[ATTR_SIZE], int op, char strVal[ATTR_SIZE])$ int\ud83d\udfe0\n  }\n  class BlockAccess{\n    +linearSearch(int relId, char attrName[ATTR_SIZE], Attribute attrVal, int op)$ RecId\ud83d\udfe2\n  }"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cache Layer")),(0,r.kt)("mermaid",{value:"classDiagram\n  direction RL\n  RelCacheTable <|.. OpenRelTable : friend\n  AttrCacheTable <|.. OpenRelTable : friend\n\n  class RelCacheTable{\n    -relCache[MAX_OPEN] : RelCacheEntry*\n    -recordToRelCatEntry(union Attribute record[RELCAT_NO_ATTRS], RelCatEntry *relCatEntry)$ void\ud83d\udd35\n    +getRelCatEntry(int relId, RelCatEntry *relCatBuf)$ int\ud83d\udd35\n    +getSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udfe2\n    +setSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udfe2\n    +resetSearchIndex(int relId)$ int\ud83d\udfe2\n  }\n  class AttrCacheTable{\n      -attrCache[MAX_OPEN] : AttrCacheEntry*\n      -recordToAttrCatEntry(union Attribute record[ATTRCAT_NO_ATTRS], AttrCatEntry *attrCatEntry)$ void\ud83d\udd35\n      +getAttrCatEntry(int relId, int attrOffset, AttrCatEntry *attrCatBuf)$ int\ud83d\udd35\n      +getAttrCatEntry(int relId, char attrName[ATTR_SIZE], AttrCatEntry *attrCatBuf)$ int\ud83d\udfe2\n  }\n  class OpenRelTable{\n      +OpenRelTable(): \ud83d\udfe4\n      +~OpenRelTable(): \ud83d\udfe4\n      +getRelId(char relName[ATTR_SIZE])$ int\ud83d\udfe0\n  }\n"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Buffer Layer")),(0,r.kt)("mermaid",{value:"classDiagram\n  direction LR\n  BlockBuffer <|-- RecBuffer\n  class RecBuffer{\n    +RecBuffer(int blockNum) \ud83d\udd35\n    +getRecord(union Attribute *rec, int slotNum) int\ud83d\udd35\n    +getSlotMap(unsigned char *slotMap) int\ud83d\udfe2\n  }\n  class BlockBuffer{\n    #int blockNum\n    +BlockBuffer(int blockNum) \ud83d\udd35\n    +getHeader(struct HeadInfo *head) int\ud83d\udd35\n    #loadBlockAndGetBufferPtr(unsigned char **buffPtr) int\ud83d\udfe4\n  }"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"We will be working with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Architecture"},"Frontend Interface")," from this stage onwards. For all subsequent stages, your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," only needs to have declarations of ",(0,r.kt)("inlineCode",{parentName:"p"},"Disk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable")," classes and a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleFrontend()")," function as shown below."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"main.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main(int argc, char *argv[]) {\n  Disk disk_run;\n  StaticBuffer buffer;\n  OpenRelTable cache;\n\n  return FrontendInterface::handleFrontend(argc, argv);\n}\n"))),(0,r.kt)("p",null,"As shown in the sequence diagram above, the Frontend User Interface will parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," command and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::select_from_table()")," function in the Frontend Programming Interface. The actual ",(0,r.kt)("em",{parentName:"p"},"select")," functionality is implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),". Hence, the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::select_from_table()")," function only involves a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Algebra::select()")," function."),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In the current stage, we will only be implementing the handler for a command of the form"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM RelName INTO TargetName WHERE Attribute `op` value;\n")),(0,r.kt)("p",{parentName:"admonition"},"There are other versions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," command which map to different handlers as shown below:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Frontend User Interface Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend Programming Interface Handler"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT Attribute1,Attribute2 FROM RelName INTO TargetName WHERE Attribute "),"op",(0,r.kt)("inlineCode",{parentName:"td"}," value;")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Frontend::select_attrlist_from_where()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT * FROM RelName INTO TargetName;")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Frontend::select_from_table()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT Attribute1,Attribute2 FROM RelName INTO TargetName;")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Frontend::select_attrlist_from_table_where()"))))),(0,r.kt)("p",{parentName:"admonition"},"Since we have only implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::select_from_table()")," function, the other commands do not currently do anything.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Frontend/Frontend.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int Frontend::select_from_table_where(char relname_source[ATTR_SIZE], char relname_target[ATTR_SIZE],\n                                      char attribute[ATTR_SIZE], int op, char value[ATTR_SIZE]) {\n  return Algebra::select(relname_source, relname_target, attribute, op, value);\n}\n"))),(0,r.kt)("p",null,"Before we can get into implementing search, we need to understand ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," and implement the associated functions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer"),"."),(0,r.kt)("p",null,"Each entry in the relation cache has a ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," field (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro#relcacheentry"},"struct RelCatEntry"),"). To start a search operation from the first record, we initialise this field with ",(0,r.kt)("inlineCode",{parentName:"p"},"{-1, -1}")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelCacheTable::resetSearchIndex()")," function. Once a linear search operation is executed and a record is found, we update ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," with the rec-id(",(0,r.kt)("inlineCode",{parentName:"p"},"{block, slot}"),") of that record using ",(0,r.kt)("inlineCode",{parentName:"p"},"RelCacheTable::setSearchIndex()"),". The next time ",(0,r.kt)("inlineCode",{parentName:"p"},"linearSearch()")," is called, search will resume from this block until a successful block is found."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/RelCacheTable"},"RelCacheTable")," defines methods to provide this functionality."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/RelCacheTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"\n/* will return the searchIndex for the relation corresponding to `relId\nNOTE: this function expects the caller to allocate memory for `*searchIndex`\n*/\nint RelCacheTable::getSearchIndex(int relId, RecId* searchIndex) {\n  // check if 0 <= relId < MAX_OPEN and return E_OUTOFBOUND otherwise\n\n  // check if relCache[relId] == nullptr and return E_RELNOTOPEN if true\n\n  // copy the searchIndex field of the Relation Cache entry corresponding\n  //   to input relId to the searchIndex variable.\n  *searchIndex = relCache[relId]->searchIndex;\n  return SUCCESS;\n}\n\n// sets the searchIndex for the relation corresponding to relId\nint RelCacheTable::setSearchIndex(int relId, RecId* searchIndex) {\n\n  // check if 0 <= relId < MAX_OPEN and return E_OUTOFBOUND otherwise\n\n  // check if relCache[relId] == nullptr and return E_RELNOTOPEN if true\n\n  // update the searchIndex value in the relCache for the relId to the searchIndex argument\n\n  return SUCCESS;\n}\n\nint RelCacheTable::resetSearchIndex(int relId) {\n  // use setSearchIndex to set the search index to {-1, -1}\n}\n\n"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#select--from-table-where"},"SELECT")," command specifies a condition expecting to fetch all the records that satisfy the condition. While checking for this condition, we will need to have the details of the attribute which is part of the condition. In the previous stage, we had implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::getAttrCatEntry()")," function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," which returned to us the attribute at a particular offset. Here, we overload that function to find an attribute of a relation with a particular name."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/AttrCacheTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/* returns the attribute with name `attrName` for the relation corresponding to relId\nNOTE: this function expects the caller to allocate memory for `*attrCatBuf`\n*/\nint AttrCacheTable::getAttrCatEntry(int relId, char attrName[ATTR_SIZE], AttrCatEntry* attrCatBuf) {\n\n  // check that relId is valid and corresponds to an open relation\n\n  // iterate over the entries in the attribute cache and set attrCatBuf to the entry that\n  //    matches attrName\n\n  // no attribute with name attrName for the relation\n  return E_ATTRNOTEXIST;\n}\n\n\n"))),(0,r.kt)("p",null,"One last thing we will need before implementing search is the ability to read the slotmap so that we can iterate through all the valid records of the relation. Let's add that function to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/RecBuffer"},"RecBuffer")," implementation in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Buffer/BlockBuffer.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/* used to get the slotmap from a record block\nNOTE: this function expects the caller to allocate memory for `*slotMap`\n*/\nint RecBuffer::getSlotMap(unsigned char *slotMap) {\n  unsigned char *bufferPtr;\n\n  // get the starting address of the buffer containing the block using loadBlockAndGetBufferPtr().\n  int ret = loadBlockAndGetBufferPtr(&bufferPtr);\n  if (ret != SUCCESS) {\n    return ret;\n  }\n\n  struct HeadInfo head;\n  // get the header of the block using getHeader() function\n\n  int slotCount = /* number of slots in block from header */;\n\n  // get a pointer to the beginning of the slotmap in memory by offsetting HEADER_SIZE\n  unsigned char *slotMapInBuffer = bufferPtr + HEADER_SIZE;\n\n  // copy the values from `slotMapInBuffer` to `slotMap` (size is `slotCount`)\n\n  return SUCCESS;\n}\n\n"))),(0,r.kt)("p",null,"Now, we finally implement linear search on our database. As mentioned earlier, NITCbase supports 6 operators in our search operation (",(0,r.kt)("inlineCode",{parentName:"p"},"="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," ",(0,r.kt)("inlineCode",{parentName:"p"},">="),")."),(0,r.kt)("p",null,"An attribute in NITCbase can be either a string or a number. In case the attribute is a number, the operators work as you'd expect. If it is a string, the operation is performed with respect to lexicographic order (i.e ",(0,r.kt)("inlineCode",{parentName:"p"},">")," would be checked on the first differing letter between two strings). It would be convenient in our operation to abstract this implementation detail to a separate function. That is exactly what the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#compareattrs"},"compareAttrs function")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer/BlockBuffer.cpp")," does."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TASK"),": Implement the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#compareattrs"},"compareAttrs function")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer/BlockBuffer.cpp")," before proceeding further.")),(0,r.kt)("p",null,"Now, we implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::linearSearch()")," function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"BlockAccess/BlockAccess.cpp"),(0,r.kt)("p",null,"Implement this function by looking at the algorithm given in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer#blockaccess--linearsearch"},"design docs"),".")),(0,r.kt)("p",null,"The last thing we need to do is to make use of the records that we get from ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::linearSearch()")," and print it to the console so that we can see it. This functionality is implemented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Algebra::select()")," function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),"."),(0,r.kt)("p",null,"In actuality, NITCbase only allows you to ",(0,r.kt)("em",{parentName:"p"},"select")," records into another relation. But, at this stage we will ignore the target relation and just print the selected records onto the console. This will be modified later according to the actual specification."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Algebra/Algebra.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\n/* used to select all the records that satisfy a condition.\nthe arguments of the function are\n- srcRel - the source relation we want to select from\n- targetRel - the relation we want to select into. (ignore for now)\n- attr - the attribute that the condition is checking\n- op - the operator of the condition\n- strVal - the value that we want to compare against (represented as a string)\n*/\nint Algebra::select(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], char attr[ATTR_SIZE], int op, char strVal[ATTR_SIZE]) {\n  int srcRelId = OpenRelTable::getRelId(srcRel);      // we\'ll implement this later\n  if (srcRelId == E_RELNOTOPEN) {\n    return E_RELNOTOPEN;\n  }\n\n  AttrCatEntry attrCatEntry;\n  // get the attribute catalog entry for attr, using AttrCacheTable::getAttrcatEntry()\n  //    return E_ATTRNOTEXIST if it returns the error\n\n\n  /*** Convert strVal (string) to an attribute of data type NUMBER or STRING ***/\n  int type = attrCatEntry.attrType;\n  Attribute attrVal;\n  if (type == NUMBER) {\n    if (isNumber(strVal)) {       // the isNumber() function is implemented below\n      attrVal.nVal = atof(strVal);\n    } else {\n      return E_ATTRTYPEMISMATCH;\n    }\n  } else if (type == STRING) {\n    strcpy(attrVal.sVal, strVal);\n  }\n\n  /*** Selecting records from the source relation ***/\n\n  // Before calling the search function, reset the search to start from the first hit\n  // using RelCacheTable::resetSearchIndex()\n\n  RelCatEntry relCatEntry;\n  // get relCatEntry using RelCacheTable::getRelCatEntry()\n\n  /************************\n  The following code prints the contents of a relation directly to the output\n  console. Direct console output is not permitted by the actual the NITCbase\n  specification and the output can only be inserted into a new relation. We will\n  be modifying it in the later stages to match the specification.\n  ************************/\n\n  printf("|");\n  for (int i = 0; i < relCatEntry.numAttrs; ++i) {\n    AttrCatEntry attrCatEntry;\n    // get attrCatEntry at offset i using AttrCacheTable::getAttrCatEntry()\n\n    printf(" %s |", attrCatEntry.attrName);\n  }\n  printf("\\n");\n\n  while (true) {\n    RecId searchRes = BlockAccess::linearSearch(srcRelId, attr, attrVal, op);\n\n    if (searchRes.block != -1 && searchRes.slot != -1) {\n\n      // get the record at searchRes using BlockBuffer.getRecord\n\n      // print the attribute values in the same format as above\n\n    } else {\n\n      // (all records over)\n      break;\n    }\n  }\n\n  return SUCCESS;\n}\n\n\n// will return if a string can be parsed as a floating point number\nbool isNumber(char *str) {\n  int len;\n  float ignore;\n  /*\n    sscanf returns the number of elements read, so if there is no float matching\n    the first %f, ret will be 0, else it\'ll be 1\n\n    %n gets the number of characters read. this scanf sequence will read the\n    first float ignoring all the whitespace before and after. and the number of\n    characters read that far will be stored in len. if len == strlen(str), then\n    the string only contains a float with/without whitespace. else, there\'s other\n    characters.\n  */\n  int ret = sscanf(str, "%f %n", &ignore, &len);\n  return ret == 1 && len == strlen(str);\n}\n\n'))),(0,r.kt)("p",null,"In the above function, we made use of the function ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable::getRelId()")," to get the rel-id of the source relation. Since we're currently only working with the relation and attribute catalog, we define the function as follows."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/OpenRelTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/* This function will open a relation having name `relName`.\nSince we are currently only working with the relation and attribute catalog, we\nwill just hardcode it. In subsequent stages, we will loop through all the relations\nand open the appropriate one.\n*/\nint OpenRelTable::getRelId(char relName[ATTR_SIZE]) {\n\n  // if relname is RELCAT_RELNAME, return RELCAT_RELID\n  // if relname is ATTRCAT_RELNAME, return ATTRCAT_RELID\n\n  return E_RELNOTOPEN;\n}\n"))),(0,r.kt)("p",null,"And that's it! Your NITCbase should now support searching through records. Let's try it out. Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," and run the program. Run the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# SELECT * FROM ATTRIBUTECAT INTO null WHERE RelName=RELATIONCAT;\n| RelName | AttributeName | AttributeType | PrimaryFlag | RootBlock | Offset |\n| RELATIONCAT | RelName |  1 | -1 | -1 |  0 |\n| RELATIONCAT | #Attributes |  0 |  1 | -1 |  1 |\n| RELATIONCAT | #Records |  0 |  1 | -1 |  2 |\n| RELATIONCAT | FirstBlock |  0 | -1 | -1 |  3 |\n| RELATIONCAT | LastBlock |  0 |  1 | -1 |  4 |\n| RELATIONCAT | #Slots |  0 |  1 | -1 |  5 |\nSelected successfully into null\n\n# SELECT * FROM RELATIONCAT INTO null WHERE #Records>10;\n| RelName | #Attributes | #Records | FirstBlock | LastBlock | #Slots |\n| ATTRIBUTECAT |  6 | 22 |  5 |  6 | 20 |\nSelected successfully into null\n")),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1"),". In the exercises of the previous stages, you created a relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students(RollNumber STR, Name STR, Marks NUM, Batch STR)"),". Insert the following values into the relation using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#insert-into-table-values"},"INSERT")," command in the ",(0,r.kt)("strong",{parentName:"p"},"XFS Interface"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"B220502CS, Keerthana, 99, J\nB220983CS, Gokul,     84, B\nB221002CS, Jessiya,   84, B\nB220763CS, Cliford,   90, J\nB220110CS, James,     74, B\nB220439CS, Anna,      89, J\nB220287CS, Arun,      93, B\n")),(0,r.kt)("p",null,"Populate the entries of the relation in the caches (by updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable")," constructor) and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable::getRelId()")," function to return the rel-id of the same. Then, run the following search queries ",(0,r.kt)("strong",{parentName:"p"},"in your NITCbase")," and confirm whether it is working."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Students INTO null WHERE Batch=J;\nSELECT * FROM Students INTO null WHERE Batch!=J;\nSELECT * FROM Students INTO null WHERE Marks>=90;\n")))}d.isMDXComponent=!0}}]);