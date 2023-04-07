"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[3260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Stage 10: B+ Tree Search on Relations"},l="Stage 10: B+ Tree Search on Relations (20 hours)",o={unversionedId:"Roadmap/Stage10",id:"Roadmap/Stage10",title:"Stage 10: B+ Tree Search on Relations",description:"- Understand the fundamentals of the B+ tree data structure and how it can be used for the purposes of indexing.",source:"@site/docs/Roadmap/Stage10.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage10",permalink:"/docs/Roadmap/Stage10",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 10: B+ Tree Search on Relations"},sidebar:"Roadmap",previous:{title:"Stage 9 : Selection and Projection on Relations",permalink:"/docs/Roadmap/Stage09"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Exercises",id:"exercises",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage-10-b-tree-search-on-relations-20-hours"},"Stage 10: B+ Tree Search on Relations (20 hours)"),(0,r.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Understand the fundamentals of the B+ tree data structure and how it can be used for the purposes of indexing."),(0,r.kt)("li",{parentName:"ul"},"Understand how indexes are stored in the XFS disk"),(0,r.kt)("li",{parentName:"ul"},"Implement the B+ tree search operations to select records in NITCbase"))),(0,r.kt)("admonition",{title:"PREREQUISITE READING",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Misc/B+%20Trees"},"B+ Trees")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A relation in a production database can contain millions or records and might span over a large number of disk blocks. An index would help us to traverse these disk blocks much quicker than a linear search over every record. If we find ourselves frequently doing search operations on the values of one specific attribute of the relation, then creating an index on that attribute will immensely speed up the search."),(0,r.kt)("p",null,"For example, consider the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Student")," having 5 attributes (",(0,r.kt)("inlineCode",{parentName:"p"},"Roll No"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Marks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Grade"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Attendance"),"). As an administrator, we might have to frequently get the subset of students having ",(0,r.kt)("inlineCode",{parentName:"p"},"Marks")," greater than some amount ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),". Instead of going through each and every record and checking if it satisfies our condition, the index allows us to easily reach the first record with ",(0,r.kt)("inlineCode",{parentName:"p"},"Marks")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),". We know that in a B+ tree, every subsequent leaf node will also satisfy this condition (Why?). You can see how this would save us a lot of time."),(0,r.kt)("p",null,"In NITCbase, indexes are B+ trees with ",(0,r.kt)("strong",{parentName:"p"},"internal nodes of size 100"),", and ",(0,r.kt)("strong",{parentName:"p"},"leaf nodes of size 63"),". Each of these nodes will be stored in a separate disk block. A fully filled internal node would consist of a 100 attribute values from various records and 101 pointers to their respective children. A pointer here refers to the block number of the corresponding internal or leaf index block. A fully filled leaf node would consist of 63 attribute values from various records along with the block number and slot number where the record containing this attribute can be found."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Physical%20Layer#attribute-catalog"},"attribute catalog")," stores whether a particular attribute of a relation has an index. If it does, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootBlock")," field of the attribute catalog will store the block number of the root block of the index."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read the documentation for ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Design/Physical%20Layer#internal-index-block-structure"},"internal index blocks")," and ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Design/Physical%20Layer#leaf-index-block-structure"},"leaf index blocks")," before proceeding further.")),(0,r.kt)("p",null,"A high-end database might automatically create and dispose of indexes as required by the program without user intervention. In NITCbase, the user is expected to decide when the index is to be created and dropped (using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/ddl#create-index"},"CREATE INDEX")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/ddl#drop-index"},"DROP INDEX")," commands of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer"),"). Note that we will not be implementing these commands in the present stage and will instead be using them through the XFS Interface."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("p",null,"Q. Assume that we have an empty database with no relations. We start it and create a table ",(0,r.kt)("inlineCode",{parentName:"p"},"LibraryBooks(name STR, id NUM, shelf: NUM, borrower: STR)"),". We then insert 1000 records into the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"LibraryBooks")," in descending order of their ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". It is given that the records have ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from 1000 to 1."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If we were to do a search for a book with ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," > 500, which book would we get? What's the corresponding ",(0,r.kt)("em",{parentName:"li"},"record-id=(block, slot)"),"?"),(0,r.kt)("li",{parentName:"ol"},"We then create an index on ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"LibraryBooks"),". How many index blocks would be created?"),(0,r.kt)("li",{parentName:"ol"},"How many entries does the root block have? What is the rightmost value in the root node of the B+ tree?"),(0,r.kt)("li",{parentName:"ol"},"If we were to again do a search for a book with ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," > 500, which book would we get? What is the index of the entry corresponding to the found record in the leaf node of the B+ tree?")),(0,r.kt)("p",null,"(click to view answer)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We will get the record with ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"=1000 because that's the first record that will satisfy the condition when a linear search is done. Since this record will be the first relation in the first block of the relation, we get that the rec-id is ",(0,r.kt)("inlineCode",{parentName:"li"},"{6, 1}"),"."),(0,r.kt)("li",{parentName:"ol"},"There will be 31 leaf index blocks and 1 internal index block."),(0,r.kt)("li",{parentName:"ol"},"The root block will have 30 entries. The rightmost value in the node will be 968/969 depending on the implementation."),(0,r.kt)("li",{parentName:"ol"},"We would get the book with ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," 501 because the records will be sorted in ascending order in the leaf node. A B+ search will return the first node in the leaf that satisfies the condition."))),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In this stage, you will implement the B+ search operations on a relation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BPlusTree::bPlusSearch()")," function. We will also modify the functions we designed earlier to do an indexed search if an index is available."),(0,r.kt)("p",null,"Similar to the linear search operation that implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"BPlusTree::bPlusSearch()")," function, when called for the first time, will return the first record that satisfies the given condition. Every subsequent call to the function will return a proceeding record that satisfies the condition until there are no more records to be returned."),(0,r.kt)("p",null,"Recall that in ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::linearSearch()")," the position of the previously returned record was stored in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/RelCacheTable"},"RelCacheTable")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," field of the entry corresponding to the relation. This field was used to keep track of the position while searching through the records. To restart a search from the beginning, we would have to reset the search index using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelCacheTable::resetSearchIndex()")," function."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BPlusTree::bPlusSearch()")," function too makes use of a ",(0,r.kt)("inlineCode",{parentName:"p"},"searchIndex")," field to keep track of it's previous search position in the leaf of the B+ tree. For a B+ search on the B+ tree of an attribute, the search index is stored in the linked list entry corresponding to the attribute in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/AttrCacheTable"},"AttrCacheTable")," entry of the relation. The search index can be reset using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::resetSearchIndex()")," function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read the documentation about ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Misc/Indexing"},"indexing in NITCbase")," before proceeding further.")),(0,r.kt)("p",null,"To add this functionality, we will need to implement the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," methods to read from index blocks.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Here, we introduce three new classes ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#class-indbuffer"},"IndBuffer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#class-indinternal"},"IndInternal")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#class-indleaf"},"IndLeaf"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IndBuffer")," is an ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Abstract_type"},"abstract class")," which defines ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Virtual_function"},"virtual methods")," to access and update entries in index blocks. Note that ",(0,r.kt)("inlineCode",{parentName:"li"},"IndBuffer")," cannot be instantiated owing to it being abstract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IndInternal")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"IndLeaf")," are children of ",(0,r.kt)("inlineCode",{parentName:"li"},"IndBuffer")," used for buffered access to leaf blocks and internal index blocks respectively of the B+ tree."))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," methods to read and update the search index in the attribute cache"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/B+%20Tree%20Layer"},"B+ Tree Layer")," method to search through a B+ tree present in the disk"),(0,r.kt)("li",{parentName:"ul"},"Modifications to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer")," to call the B+ search if an index is present"),(0,r.kt)("li",{parentName:"ul"},"Modifications to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer")," to reset the search index in the attribute cache before beginning B+ search")),(0,r.kt)("p",null,"A sequence diagram documenting the call sequence for a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::search()")," function is shown below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The functions are denoted with circles as follows.",(0,r.kt)("br",null),"\n\ud83d\udd35 -> methods that are already in their final state",(0,r.kt)("br",null),"\n\ud83d\udfe2 -> methods that will attain their final state in this stage",(0,r.kt)("br",null),"\n\ud83d\udfe4 -> methods that we built earlier and require more work later, but will leave as is in this stage")),(0,r.kt)("mermaid",{value:"%%{init: { 'sequence': {'mirrorActors':false} } }%%\nsequenceDiagram\n  participant caller\n  participant Block Access Layer\n  participant B-Plus Tree Layer\n  participant Cache Layer\n  participant Buffer Layer\n  caller->>Block Access Layer: search()\ud83d\udfe2\n  activate Block Access Layer\n  alt if there is an index on the attribute\n  Block Access Layer->>B-Plus Tree Layer: bPlusSearch()\ud83d\udfe2\n  activate B-Plus Tree Layer\n  B-Plus Tree Layer->>Cache Layer: AttrCacheTable::getSearchIndex()\ud83d\udfe2\n  activate Cache Layer\n  Cache Layer--\x3e>B-Plus Tree Layer: the search index\n  deactivate Cache Layer\n  B-Plus Tree Layer->>Buffer Layer: IndBuffer::getEntry()\ud83d\udfe2\n  activate Buffer Layer\n  Buffer Layer--\x3e>B-Plus Tree Layer: index entry\n  deactivate Buffer Layer\n  B-Plus Tree Layer->>Cache Layer: AttrCacheTable::setSearchIndex()\ud83d\udfe2\n  activate Cache Layer\n  Cache Layer--\x3e>B-Plus Tree Layer: operation status\n  deactivate Cache Layer\n  B-Plus Tree Layer--\x3e>Block Access Layer: recId\n  deactivate B-Plus Tree Layer\n  else\n  Block Access Layer->>Block Access Layer: linearSearch()\ud83d\udd35\n  end\n  Block Access Layer->>Buffer Layer: RecBuffer::getRecord()\ud83d\udd35\n  activate Buffer Layer\n  Buffer Layer--\x3e>Block Access Layer: operation status\n  deactivate Buffer Layer\n  Block Access Layer--\x3e>caller:operation status\n  deactivate Block Access Layer"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A class diagram showing all the relevant methods is given below. Note that the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," classes corresponding to record blocks have been omitted for the sake of brevity."),(0,r.kt)("mermaid",{value:"classDiagram\n  class Algebra{\n    +insert(char relName[ATTR_SIZE], int nAttrs, char record[][ATTR_SIZE])$ int\ud83d\udd35\n\t\t+project(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE])$ int\ud83d\udd35\n\t\t+project(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], int tar_nAttrs, char tar_Attrs[][ATTR_SIZE])$ int\ud83d\udd35\n    +select(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], char attr[ATTR_SIZE], int op, char strVal[ATTR_SIZE])$ int\ud83d\udfe2\n  }"}),(0,r.kt)("mermaid",{value:"classDiagram\n  class BlockAccess{\n    +linearSearch(int relId, char attrName[ATTR_SIZE], Attribute attrVal, int op)$ RecId\ud83d\udd35\n    +renameRelation(char oldName[ATTR_SIZE], char newName[ATTR_SIZE])$ int\ud83d\udd35\n    +renameAttribute(char relName[ATTR_SIZE], char oldName[ATTR_SIZE], char newName[ATTR_SIZE])$ int\ud83d\udd35\n    +insert(int relId, union Attribute* record)$ int\ud83d\udfe4\n    +deleteRelation(char relName[ATTR_SIZE])$ int\ud83d\udfe4\n\t\t+project(int relId, Attribute *record)$ int\ud83d\udd35\n    +search(int relId, Attribute *record, char attrName[ATTR_SIZE], Attribute attrVal, int op)$ int\ud83d\udfe2\n  }"}),(0,r.kt)("mermaid",{value:"classDiagram\n  class BPlusTree{\n    +bPlusSearch(int relId, char attrName[ATTR_SIZE], Attribute attrVal, int op)$ int\ud83d\udfe2\n  }"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cache Layer")),(0,r.kt)("mermaid",{value:"classDiagram\ndirection BT\n  RelCacheTable <|.. OpenRelTable : friend\n  AttrCacheTable <|.. OpenRelTable : friend\n  class RelCacheTable{\n    -relCache[MAX_OPEN] : RelCacheEntry*\n    -recordToRelCatEntry(union Attribute record[RELCAT_NO_ATTRS], RelCatEntry *relCatEntry)$ void\ud83d\udd35\n    -relCatEntryToRecord(RelCatEntry *relCatEntry, union Attribute record[RELCAT_NO_ATTRS])$ void\ud83d\udd35\n    +getRelCatEntry(int relId, RelCatEntry *relCatBuf)$ int\ud83d\udd35\n    +setRelCatEntry(int relId, RelCatEntry *relCatBuf)$ int\ud83d\udd35\n    +getSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udd35\n    +setSearchIndex(int relId, RecId *searchIndex)$ int\ud83d\udd35\n    +resetSearchIndex(int relId)$ int\ud83d\udd35\n  }\n  class AttrCacheTable{\n    -attrCache[MAX_OPEN] : AttrCacheEntry*\n    -recordToAttrCatEntry(union Attribute record[ATTRCAT_NO_ATTRS], AttrCatEntry *attrCatEntry)$ void\ud83d\udd35\n    +getAttrCatEntry(int relId, int attrOffset, AttrCatEntry *attrCatBuf)$ int\ud83d\udd35\n    +getAttrCatEntry(int relId, char attrName[ATTR_SIZE], AttrCatEntry *attrCatBuf)$ int\ud83d\udd35\n    +getSearchIndex(int relId, char attrName[ATTR_SIZE], IndexId *searchIndex)$ int\ud83d\udfe2\n    +getSearchIndex(int relId, int attrOffset, IndexId *searchIndex)$ int\ud83d\udfe2\n    +setSearchIndex(int relId, char attrName[ATTR_SIZE], IndexId *searchIndex)$ int\ud83d\udfe2\n    +setSearchIndex(int relId, int attrOffset, IndexId *searchIndex)$ int\ud83d\udfe2\n    +resetSearchIndex(int relId, char attrName[ATTR_SIZE])$ int\ud83d\udfe2\n    +resetSearchIndex(int relId, int attrOffset)$ int\ud83d\udfe2\n\n  }\n  class OpenRelTable{\n    -tableMetaInfo[MAX_OPEN] : OpenRelTableMetaInfo\n    +OpenRelTable(): \ud83d\udd35\n    +~OpenRelTable(): \ud83d\udd35\n    -getFreeOpenRelTableEntry()$ int\ud83d\udd35\n    +getRelId(char relName[ATTR_SIZE])$ int\ud83d\udd35\n    +openRel(char relName[ATTR_SIZE])$ int\ud83d\udd35\n    +closeRel(int relId)$ int\ud83d\udfe4\n  }\n"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Buffer Layer")),(0,r.kt)("mermaid",{value:"classDiagram\n    direction TB\n    StaticBuffer <|.. BlockBuffer : friend\n    BlockBuffer <|-- IndBuffer\n    IndBuffer <|-- IndInternal\n    IndBuffer <|-- IndLeaf\n    class StaticBuffer{\n        -blocks[BUFFER_CAPACITY][BLOCK_SIZE]: unsigned char\n        -metainfo[BUFFER_CAPACITY]: struct BufferMetaInfo\n        -blockAllocMap[DISK_BLOCKS]: unsigned char\n        +StaticBuffer() \ud83d\udd35\n        +~StaticBuffer() \ud83d\udd35\n        -getFreeBuffer(int blockNum)$ int\ud83d\udd35\n        -getBufferNum(int blockNum)$ int\ud83d\udd35\n        +setDirtyBit(int blockNum)$ int\ud83d\udd35\n        +getStaticBlockType(int blockNum)$ int\ud83d\udfe2\n    }\n    class BlockBuffer{\n        #blockNum: int\n        +BlockBuffer(char blockType) \ud83d\udd35\n        +BlockBuffer(int blockNum) \ud83d\udd35\n        +getHeader(struct HeadInfo *head) int\ud83d\udd35\n        +setHeader(struct HeadInfo *head) int\ud83d\udd35\n        +releaseBlock() void\ud83d\udd35\n        #setBlockType(int blockType) int\ud83d\udd35\n        #getFreeBlock(int blockType) int\ud83d\udd35\n        #loadBlockAndGetBufferPtr(unsigned char **buffPtr) int\ud83d\udd35\n    }\n    class IndBuffer{\n        +IndBuffer(char blockType): \ud83d\udfe2\n        +IndBuffer(int blockType): \ud83d\udfe2\n        +getEntry(void *ptr, int indexNum)* int\n        +setEntry(void *ptr, int indexNum)* int\n    }\n    class IndInternal{\n        +IndInternal(): \ud83d\udfe2\n        +IndInternal(int blockNum): \ud83d\udfe2\n        +getEntry(void *ptr, int indexNum) int\ud83d\udfe2\n    }\n    class IndLeaf{\n        +IndLeaf(): \ud83d\udfe2\n        +IndLeaf(int blockNum): \ud83d\udfe2\n        +getEntry(void *ptr, int indexNum) int\ud83d\udfe2\n    }\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"When an index is created on an attribute of a relation, the attribute catalog entry of the attribute is updated to store the block number of the root block of the B+ tree on the disk. This may be a leaf index block or an internal index block."),(0,r.kt)("p",null,"Recall that the ",(0,r.kt)("inlineCode",{parentName:"p"},"search()")," function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer"},"Block Access Layer")," is used to either do a B+ search or a linear search depending on the presence of an index. Our earlier implementation did not account for indexes and directly called the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess:linearSearch()")," function. We now modify that function to check the attribute catalog entry and call the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/B+%20Tree%20Layer#bplustreebplussearch"},(0,r.kt)("inlineCode",{parentName:"a"},"BPlusTree::bPlusSearch()"))," function if there is an index (we will implement this function later in this stage)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"BlockAccess/BlockAccess.cpp"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::search()")," function by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Block%20Access%20Layer#blockaccess--search"},"design docs"),".")),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer"),", we add the methods to work with the search index in the attribute cache similar to what we had implemented for the search index in the relation cache. We have methods ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::getSearchIndex()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::setSearchIndex()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::resetSearchIndex()"),". Note that each of these methods are overloaded to identify an attribute with either the attribute name or attribute offset. Thus, we have a total of 6 functions to implement in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/AttrCacheTable"},"AttrCacheTable")," class."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/AttrCacheTable.cpp"),(0,r.kt)("p",null,"Implement the following functions looking at their respective design docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--getsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::getSearchIndex(relId, attrName, searchIndex*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--getsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::getSearchIndex(relId, attrOffset, searchIndex*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--setsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::setSearchIndex(relId, attrName, searchIndex*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--setsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::setSearchIndex(relId, attrOffset, searchIndex*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--resetsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::resetSearchIndex(relId, attrName, searchIndex*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Cache%20Layer/AttrCacheTable#attrcachetable--resetsearchindex"},(0,r.kt)("inlineCode",{parentName:"a"},"AttrCacheTable::resetSearchIndex(relId, attrOffset, searchIndex*)"))))),(0,r.kt)("p",null,"We had earlier modified ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::search()")," such that it can do either a linear search or a B+ search. Recall that in our current implementation, we always reset the search index in the relation cache before the first call to ",(0,r.kt)("inlineCode",{parentName:"p"},"linearSearch()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"search()")," to start searching from the beginning. It is now needed to modify the design to reset the search index in the attribute cache before the first call to ",(0,r.kt)("inlineCode",{parentName:"p"},"bPlusSearch()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"search()"),"."),(0,r.kt)("p",null,"Thus far in our implementation, ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAccess::search()")," has only been used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"select()")," function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),". So, we modify our earlier design to call ",(0,r.kt)("inlineCode",{parentName:"p"},"AttrCacheTable::resetSearchIndex()")," before the first call to ",(0,r.kt)("inlineCode",{parentName:"p"},"search()"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Algebra/Algebra.cpp"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Algebra::select()")," function by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer#select"},"design docs"),".")),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer"),", we implement the methods to read from index blocks using classes ",(0,r.kt)("inlineCode",{parentName:"p"},"IndInternal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IndLeaf")," as mentioned earlier. Similar to how we've used ",(0,r.kt)("inlineCode",{parentName:"p"},"RecBuffer")," to read from record blocks thus far, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IndBuffer")," class defines virtual methods ",(0,r.kt)("inlineCode",{parentName:"p"},"getEntry()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setEntry()")," to access the entry at a particular index in a B+ tree node. Note that every node of the B+ tree occupies an entire block of the XFS disk."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IndInternal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IndLeaf")," classes also define a ",(0,r.kt)("em",{parentName:"p"},"constructor 1"),"(which is used to read from an already allocated index block) and a ",(0,r.kt)("em",{parentName:"p"},"constructor 2")," (which is used to allocate a new index block) similar to what we had implemented for ",(0,r.kt)("inlineCode",{parentName:"p"},"RecBuffer"),". These constructors call their parent class ",(0,r.kt)("inlineCode",{parentName:"p"},"IndBuffer"),"'s ",(0,r.kt)("em",{parentName:"p"},"constructor 1")," and ",(0,r.kt)("em",{parentName:"p"},"constructor 2")," respectively which in turn calls the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockBuffer")," constructors that we implemented earlier."),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#attribute"},"struct Attribute")," that we used to hold the values in a record, we have helper structs to store index entries as well. An entry from a leaf index block is represented using ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#index"},"struct Index")," and an entry from an internal index block is represented using ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#internalentry"},"struct InternalEntry"),"."),(0,r.kt)("p",null,"Since we do not need to modify indexes at this stage, we will only be implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEntry()")," method. We will also define an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"setEntry()")," method to avoid compilation issues."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Buffer/BlockBuffer.cpp"),(0,r.kt)("p",null,"Implement the following constructors looking at the respective design docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indbuffer--indbuffer-constructor-1"},(0,r.kt)("inlineCode",{parentName:"a"},"IndBuffer::Constructor1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indinternal--indinternal-constructor-1"},(0,r.kt)("inlineCode",{parentName:"a"},"IndInternal::Constructor1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indleaf--indleaf-constructor-1"},(0,r.kt)("inlineCode",{parentName:"a"},"IndLeaf::Constructor1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indbuffer--indbuffer-constructor-2"},(0,r.kt)("inlineCode",{parentName:"a"},"IndBuffer::Constructor2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indinternal--indinternal-constructor-2"},(0,r.kt)("inlineCode",{parentName:"a"},"IndInternal::Constructor2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indleaf--indleaf-constructor-2"},(0,r.kt)("inlineCode",{parentName:"a"},"IndLeaf::Constructor2")))),(0,r.kt)("p",null,"Implement the following functions looking at the respective design docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indinternal--getentry"},(0,r.kt)("inlineCode",{parentName:"a"},"IndInternal::getEntry()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Buffer%20Layer/IndBuffer#indleaf--getentry"},(0,r.kt)("inlineCode",{parentName:"a"},"IndLeaf::getEntry()")))),(0,r.kt)("p",null,"Add the following empty definitions to avoid compilation issues. We will implement these function in later stages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int IndInternal::setEntry(void *ptr, int indexNum) {\n  return 0;\n}\n\nint IndLeaf::setEntry(void *ptr, int indexNum) {\n  return 0;\n}\n"))),(0,r.kt)("p",null,"An additional function we will need in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer::getStaticBlockType()")," function which takes a block number and returns the type of the block (",(0,r.kt)("inlineCode",{parentName:"p"},"REC"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"IND_INTERNAL"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"IND_LEAF"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"UNUSED_BLK"),"). We will use this function when we implement ",(0,r.kt)("inlineCode",{parentName:"p"},"bPlusSearch()")," later in this stage."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Buffer/StaticBuffer.cpp"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer::getStaticBlockType()")," function by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/StaticBuffer#staticbuffer--getstaticblocktype"},"design docs"),".")),(0,r.kt)("p",null,"Lastly, we implement the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/B+%20Tree%20Layer"},"B+ Tree Layer")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"bPlusSearch()")," which comprises all the logic for an indexed search operation. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Misc/Indexing#search-on-b-tree"},"algorithm for search")," if you have not done so already."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"BPlusTree/BPlusTree.cpp"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"BPlusTree::bPlusSearch()")," by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/B+%20Tree%20Layer#bplustreebplussearch"},"design docs"),".")),(0,r.kt)("h2",{id:"exercises"},"Exercises"))}h.isMDXComponent=!0}}]);