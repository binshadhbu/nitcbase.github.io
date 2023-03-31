"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[2329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,p=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(p,o(o({ref:t},f),{},{components:a})):n.createElement(p,o({ref:t},f))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Stage 3 : The Disk Buffer and Catalog Caches"},o="Stage 3 : The Disk Buffer and Catalog Caches(10 hours)",l={unversionedId:"Roadmap/Stage03",id:"Roadmap/Stage03",title:"Stage 3 : The Disk Buffer and Catalog Caches",description:"- Understand disk buffering in NITCbase in the Buffer Layer",source:"@site/docs/Roadmap/Stage03.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage03",permalink:"/docs/Roadmap/Stage03",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 3 : The Disk Buffer and Catalog Caches"},sidebar:"Roadmap",previous:{title:"Stage 2: Record Blocks and Catalogs",permalink:"/docs/Roadmap/Stage02"},next:{title:"Stage 4 : Linear Search on Relations",permalink:"/docs/Roadmap/Stage04"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Disk Buffer",id:"disk-buffer",level:2},{value:"Using the disk buffer",id:"using-the-disk-buffer",level:3},{value:"Caches",id:"caches",level:2},{value:"Setting up the cache",id:"setting-up-the-cache",level:3},{value:"Exercises",id:"exercises",level:2}],f={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage-3--the-disk-buffer-and-catalog-caches10-hours"},"Stage 3 : The Disk Buffer and Catalog Caches(10 hours)"),(0,r.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Understand disk buffering in NITCbase in the Buffer Layer"),(0,r.kt)("li",{parentName:"ul"},"Understand the structure and functionality of the relation cache and attribute cache"),(0,r.kt)("li",{parentName:"ul"},"Implement disk read operations through the Buffer Layer"),(0,r.kt)("li",{parentName:"ul"},"Initialise the relation and attribute caches and display the values stored in it"))),(0,r.kt)("admonition",{title:"PREREQUISITE READING",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Physical%20Layer#catalog-structures"},"Catalog Structures")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We have seen record blocks, the way they are represented on the NITCbase disk, and how to read and write from them. However, disk operations are quite slow and a bottleneck to the efficient functioning of our database. Memory operations are much more efficient, but are subject to space constraints. We should ensure that our system makes optimum use of memory wherever possible to build a fast and responsive database."),(0,r.kt)("h2",{id:"disk-buffer"},"Disk Buffer"),(0,r.kt)("p",null,"Following the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Locality_of_reference"},"principle of locality"),", NITCbase buffers all the disk i/o operations. We will be pre-allocating memory for holding 32 disk blocks in memory at a given time. Whenever a disk block is accessed for the first time, it will be loaded into the buffer. All subsequent operations on that block will be done on that buffer until that disk block is swapped out by a more recently required disk block. All the changes done to the buffer will be commited back to the disk at that point. This functionality is implemented as part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," of NITCbase."),(0,r.kt)("p",null,"However, in the present stage, we will not be implementing the write-back functionality. Here, we will modify our disk read operations to work from a buffer instead of the disk directly. This allows all subsequent read operations to be much quicker than repeatedly reading from the disk."),(0,r.kt)("h3",{id:"using-the-disk-buffer"},"Using the disk buffer"),(0,r.kt)("p",null,"The disk buffer is implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/StaticBuffer"},"StaticBuffer")," class. This class declares a static two dimensional array ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"unsigned char blocks[][]"))," of size ",(0,r.kt)("a",{parentName:"p",href:"/constants"},"BUFFER_CAPACITY")," \xd7 ",(0,r.kt)("a",{parentName:"p",href:"/constants"},"BLOCK_SIZE")," (= 32 \xd7 2048). The methods relevant to adding this functionality are shown in the class diagram below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The functions are denoted with circles as follows.",(0,r.kt)("br",null),"\n\ud83d\udd35 -> methods that are already in their final state",(0,r.kt)("br",null),"\n\ud83d\udfe2 -> methods that will attain their final state in this stage",(0,r.kt)("br",null),"\n\ud83d\udfe0 -> methods that we will modify in this stage, and in subsequent stages")),(0,r.kt)("br",null),(0,r.kt)("mermaid",{value:"classDiagram\n  direction LR\n  BlockBuffer <|-- RecBuffer\n  StaticBuffer<|..RecBuffer : uses\n  StaticBuffer<|..BlockBuffer : uses\n  class RecBuffer{\n    +RecBuffer(int blockNum) \ud83d\udd35\n    +getRecord(union Attribute *rec, int slotNum) int\ud83d\udfe2\n  }\n  class BlockBuffer{\n    #blockNum: int\n    +BlockBuffer(int blockNum) \ud83d\udd35\n    +getHeader(struct HeadInfo *head) int\ud83d\udfe2\n    #loadBlockAndGetBufferPtr(unsigned char **buffPtr) int\ud83d\udfe0\n  }\n  class StaticBuffer{\n    -blocks[BUFFER_CAPACITY][BLOCK_SIZE]: unsigned char\n    -metainfo[BUFFER_CAPACITY]: struct BufferMetaInfo\n    +StaticBuffer() \ud83d\udfe0\n    +~StaticBuffer() \ud83d\udfe0\n    -getFreeBuffer(int blockNum)$ int\ud83d\udfe0\n    -getBufferNum(int blockNum)$ int\ud83d\udfe2\n  }"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Modify your ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockBuffer.cpp")," file to read from the buffer instead of the disk directly(as we did in the previous stage). We will be making use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBlockAndGetBufferPtr()")," method instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Disk::readBlock()"),". This function will call the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer")," functions to load the block from the disk to a free buffer block and get a pointer to it."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Buffer/BlockBuffer.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// the declarations for these functions can be found in "BlockBuffer.h"\n\n\n/*\nUsed to get the header of the block into the location pointed to by `head`\nNOTE: this function expects the caller to allocate memory for `head`\n*/\nint BlockBuffer::getHeader(struct HeadInfo *head) {\n\n  unsigned char *bufferPtr;\n  int ret = loadBlockAndGetBufferPtr(&bufferPtr);\n  if (ret != SUCCESS) {\n    return ret;   // return any errors that might have occured in the process\n  }\n\n  // ... (the rest of the logic is as in stage 2)\n\n  memcpy(&head->numSlots, bufferPtr + 24, 4);\n  // ... (the rest of the logic is as in stage 2)\n}\n\n/*\nUsed to get the record at slot `slotNum` into the array `rec`\nNOTE: this function expects the caller to allocate memory for `rec`\n*/\nint RecBuffer::getRecord(union Attribute *rec, int slotNum) {\n  // ...\n  unsigned char *bufferPtr;\n  int ret = loadBlockAndGetBufferPtr(&bufferPtr);\n  if (ret != SUCCESS) {\n    return ret;\n  }\n  // ... (the rest of the logic is as in stage 2\n}\n\n/*\nUsed to load a block to the buffer and get a pointer to it.\nNOTE: this function expects the caller to allocate memory for the argument\n*/\nint BlockBuffer::loadBlockAndGetBufferPtr(unsigned char **buffPtr) {\n  // check whether the block is already present in the buffer using StaticBuffer.getBufferNum()\n  int bufferNum = StaticBuffer::getBufferNum(this->blockNum);\n\n  if (bufferNum == E_BLOCKNOTINBUFFER) {\n    bufferNum = StaticBuffer::getFreeBuffer(this->blockNum);\n\n    if (bufferNum == E_OUTOFBOUND) {\n      return E_OUTOFBOUND;\n    }\n\n    Disk::readBlock(StaticBuffer::blocks[bufferNum], this->blockNum);\n  }\n\n  // store the pointer to this buffer (blocks[bufferNum]) in *buffPtr\n  *buffPtr = StaticBuffer::blocks[bufferNum];\n\n  return SUCCESS;\n}\n'))),(0,r.kt)("p",null,"Now, we define all the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer")," functions that we made use of. The ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer")," class has two member fields we are concerned about here. The ",(0,r.kt)("inlineCode",{parentName:"p"},"blocks")," field is the actual buffer as we mentioned earlier. ",(0,r.kt)("inlineCode",{parentName:"p"},"metainfo")," is an array of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#buffer-structure"},"struct BufferMetaInfo")," which is used to store the metadata of the 32 (=",(0,r.kt)("a",{parentName:"p",href:"/constants"},"BUFFER_CAPACITY"),") blocks that are in the buffer. At this stage, we'll use this structure to keep track of whether a buffer block is free or if it is storing a particular disk block. ",(0,r.kt)("em",{parentName:"p"},"Both these arrays are static members of the class and hence need to be explicitly declared before they can be used.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Buffer/StaticBuffer.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// the declarations for this class can be found at "StaticBuffer.h"\n\nunsigned char StaticBuffer::blocks[BUFFER_CAPACITY][BLOCK_SIZE];\nstruct BufferMetaInfo StaticBuffer::metainfo[BUFFER_CAPACITY];\n\nStaticBuffer::StaticBuffer() {\n\n  // initialise all blocks as free\n  for (/*bufferIndex = 0 to BUFFER_CAPACITY-1*/) {\n    metainfo[bufferIndex].free = true;\n  }\n}\n\n/*\nAt this stage, we are not writing back from the buffer to the disk since we are\nnot modifying the buffer. So, we will define an empty destructor for now. In\nsubsequent stages, we will implement the write-back functionality here.\n*/\nStaticBuffer::~StaticBuffer() {}\n\nint StaticBuffer::getFreeBuffer(int blockNum) {\n  if (blockNum < 0 || blockNum > DISK_BLOCKS) {\n    return E_OUTOFBOUND;\n  }\n  int allocatedBuffer;\n\n  // iterate through all the blocks in the StaticBuffer\n  // find the first free block in the buffer (check metainfo)\n  // assign allocatedBuffer = index of the free block\n\n  metainfo[allocatedBuffer].free = false;\n  metainfo[allocatedBuffer].blockNum = blockNum;\n\n  return allocatedBuffer;\n}\n\n/* Get the buffer index where a particular block is stored\n   or E_BLOCKNOTINBUFFER otherwise\n*/\nint StaticBuffer::getBufferNum(int blockNum) {\n  // Check if blockNum is valid (between zero and DISK_BLOCKS)\n  // and return E_OUTOFBOUND if not valid.\n\n  // find and return the bufferIndex which corresponds to blockNum (check metainfo)\n\n  // if block is not in the buffer\n  return E_BLOCKNOTINBUFFER;\n}\n'))),(0,r.kt)("p",null,"You've now implemented a rudimentary version of a buffer. The only pending operation is to declare an instance of the class ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticBuffer")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," so that our constructor is called. ",(0,r.kt)("em",{parentName:"p"},"Ensure that this declaration happens after the instance of the ",(0,r.kt)("inlineCode",{parentName:"em"},"Disk")," class is declared"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"main.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main(int argc, char *argv[]) {\n\n  Disk disk_run;\n  StaticBuffer buffer;\n\n  // ...\n  // ...\n}\n"))),(0,r.kt)("p",null,"Compile the program and execute it. You should get output identical to what you were getting in the previous stage."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"caches"},"Caches"),(0,r.kt)("p",null,"Almost all operations on a relation require access to its corresponding relation catalog and attribute catalog entries. Since this is such a common operation, NITCbase uses a more specialised data structure for operations on these structures. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer"},"Cache Layer")," handles the implementation of these structures."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"relation cache")," and the ",(0,r.kt)("strong",{parentName:"p"},"attribute cache")," are specialised data structures used for accessing the catalogs. These caches are both arrays of size 12 (",(0,r.kt)("a",{parentName:"p",href:"/constants"},"MAX_OPEN"),"). Each entry in these arrays can store the catalog entries for a single relation. The entries in both the caches for a given index ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," < ",(0,r.kt)("a",{parentName:"p",href:"/constants"},"MAX_OPEN")," will correspond to the same relation."),(0,r.kt)("p",null,"An entry of the relation cache stores the relation catalog entry, the rec-id (block & slot number) of the entry on the disk, and some other runtime data. An entry of the attribute cache is a linked list where each node contains one of the attribute catalog entries for the relation, the corresponding rec-ids and some runtime metadata. A relation which has it's entries stored in the caches is called ",(0,r.kt)("em",{parentName:"p"},"open"),". We'll learn more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," operation in later stages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Take a quick look at the documentation for ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Design/Cache%20Layer#relation-cache-table-structures"},"relation cache table structures")," and ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Design/Cache%20Layer#attribute-cache-table-structures"},"attribute cache table structures")," before proceeding further.")," You don't need to understand any of the fields not mentioned here explicitly."),(0,r.kt)("p",null,"The index corresponding to a relation in the relation/attribute cache is called it's ",(0,r.kt)("strong",{parentName:"p"},"relation id")," or rel-id. NITCbase fixes that the catalog entries for the relation catalog will always be stored at ",(0,r.kt)("strong",{parentName:"p"},"rel-id 0")," (recall that the first relation in both the catalogs is the relation catalog). The catalog entries for the attribute catalog will always be stored at ",(0,r.kt)("strong",{parentName:"p"},"rel-id 1"),". At this stage, we will only be implementing the cache operations for these two relations."),(0,r.kt)("h3",{id:"setting-up-the-cache"},"Setting up the cache"),(0,r.kt)("p",null,"The next feature that we will add to NITCbase is a rudimentary version of the relation and attribute cache. This functionality is implemented in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-relcachetable"},"RelCacheTable"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-attrcachetable"},"AttrCacheTable")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-openreltable"},"OpenRelTable")," classes. The details of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-openreltable"},"OpenRelTable")," are not relevant at this stage and will be covered in later stages. In this stage, we will only be using the constructor of this class to initialise our caches. The class diagram below shows the functions we will be implementing."),(0,r.kt)("mermaid",{value:"classDiagram\n    direction RL\n    RelCacheTable <|.. OpenRelTable : friend\n    AttrCacheTable <|.. OpenRelTable : friend\n\n    class RelCacheTable{\n        -relCache[MAX_OPEN] : RelCacheEntry*\n        -recordToRelCatEntry(union Attribute record[RELCAT_NO_ATTRS], RelCatEntry *relCatEntry)$ void \ud83d\udfe2\n        +getRelCatEntry(int relId, RelCatEntry *relCatBuf)$ int \ud83d\udfe2\n    }\n    class AttrCacheTable{\n        -attrCache[MAX_OPEN] : AttrCacheEntry*\n        -recordToAttrCatEntry(union Attribute record[ATTRCAT_NO_ATTRS], AttrCatEntry *attrCatEntry)$ void \ud83d\udfe2\n        +getAttrCatEntry(int relId, int attrOffset, AttrCatEntry *attrCatBuf)$ int \ud83d\udfe2\n    }\n    class OpenRelTable{\n        +OpenRelTable() \ud83d\udfe0\n        +~OpenRelTable() \ud83d\udfe0\n    }\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A diagram showing the sequence of operations at system start is shown below."),(0,r.kt)("mermaid",{value:" %%{init: { 'sequence': {'mirrorActors':false} } }%%\nsequenceDiagram\n    actor User\n    participant Cache Layer\n    participant Buffer Layer\n    User--\x3e>Buffer Layer:*start system*\n    activate Buffer Layer\n    Note right of Buffer Layer: set up the static buffer\n    Buffer Layer--\x3e>User: *initialization complete*\n    deactivate Buffer Layer\n    User--\x3e>Cache Layer:*start system*\n    activate Cache Layer\n    Note right of Cache Layer: create a RecBuffer for the catalogs\n    activate Buffer Layer\n    Cache Layer->>Buffer Layer: getRecord()\ud83d\udd35\n    Buffer Layer--\x3e>Cache Layer: catalog block info\n    deactivate Buffer Layer\n    Note right of Cache Layer: set up the caches with the values from the record\n    Cache Layer--\x3e>User: *initialization complete*\n    deactivate Cache Layer\n"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"A NOTE ABOUT STATIC CLASSES",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A class is called static if all its member fields and functions are declared static. In the case of such classes, memory is allocated ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Static_variable"},"statically"),". Generally, static classes arise when only one instance of the class is required during run time. ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-relcachetable"},"RelCacheTable"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-attrcachetable"},"AttrCacheTable"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-openreltable"},"OpenRelTable")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/StaticBuffer"},"StaticBuffer")," are examples of static classes."),(0,r.kt)("p",{parentName:"admonition"},"Generally, there is no need to create an instance of a static class (by defining a variable of the class) as the declaration of the class itself fixes the storage and access to the members and methods of the class."),(0,r.kt)("p",{parentName:"admonition"},"However, there is one exception to this rule. The exception arises when we wish to run a constructor and destructor for the class for initialization. In such cases, an instance of the class needs to be declared. ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-openreltable"},"OpenRelTable")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/StaticBuffer"},"StaticBuffer")," are examples of classes that require such instantiation. On the other hand, ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-relcachetable"},"RelCacheTable")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-attrcachetable"},"AttrCacheTable")," require no initializer code to run and hence, no instance variables are declared."),(0,r.kt)("p",{parentName:"admonition"},"Many of the classes encapsulating the implementation of higher layers of NITCbase are static classes that require no initializer code to run, and hence do not require instances to be created.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"We'll start by implementing ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-relcachetable"},"RelCacheTable"),". Here, we have two functions; ",(0,r.kt)("inlineCode",{parentName:"p"},"getRelCatEntry()")," which is used to the get the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#relcatentry"},"RelCatEntry")," from the relation cache and ",(0,r.kt)("inlineCode",{parentName:"p"},"recordToRelCatEntry()")," which converts a record (array of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#attribute"},"union Attribute"),") to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#relcatentry"},"RelCatEntry")," struct. We also need to declare the static member field ",(0,r.kt)("inlineCode",{parentName:"p"},"relCache"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/RelCacheTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"RelCacheEntry* RelCacheTable::relCache[MAX_OPEN];\n\n/*\nGet the relation catalog entry for the relation with rel-id `relId` from the cache\nNOTE: this function expects the caller to allocate memory for `*relCatBuf`\n*/\nint RelCacheTable::getRelCatEntry(int relId, RelCatEntry* relCatBuf) {\n  if (relId < 0 || relId >= MAX_OPEN) {\n    return E_OUTOFBOUND;\n  }\n\n  // if there's no entry at the rel-id\n  if (relCache[relId] == nullptr) {\n    return E_RELNOTOPEN;\n  }\n\n  // copy the value to the relCatBuf argument\n  *relCatBuf = relCache[relId]->relCatEntry;\n\n  return SUCCESS;\n}\n\n/* Converts a relation catalog record to RelCatEntry struct\n    We get the record as Attribute[] from the BlockBuffer.getRecord() function.\n    This function will convert that to a struct RelCatEntry type.\nNOTE: this function expects the caller to allocate memory for `*relCatEntry`\n*/\nvoid RelCacheTable::recordToRelCatEntry(union Attribute record[RELCAT_NO_ATTRS],\n                                        RelCatEntry* relCatEntry) {\n  strcpy(relCatEntry->relName, record[RELCAT_REL_NAME_INDEX].sVal);\n  relCatEntry->numAttrs = (int)record[RELCAT_NO_ATTRIBUTES_INDEX].nVal;\n\n  /* fill the rest of the relCatEntry struct with the values at\n      RELCAT_NO_RECORDS_INDEX,\n      RELCAT_FIRST_BLOCK_INDEX,\n      RELCAT_LAST_BLOCK_INDEX,\n      RELCAT_NO_SLOTS_PER_BLOCK_INDEX\n  */\n}\n"))),(0,r.kt)("p",null,"Similarly, in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#class-attrcachetable"},"AttrCacheTable"),", we have a static member field ",(0,r.kt)("inlineCode",{parentName:"p"},"attrCache")," and two functions; ",(0,r.kt)("inlineCode",{parentName:"p"},"getAttrCatEntry()")," which is used to the get the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#attrcatentry"},"AttrCatEntry")," from the attribute cache and ",(0,r.kt)("inlineCode",{parentName:"p"},"recordToAttrCatEntry()")," which converts a record (array of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro#attribute"},"union Attribute"),") to an ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer#attrcatentry"},"AttrCatEntry")," struct. ",(0,r.kt)("em",{parentName:"p"},"Note that an attribute cache entry is a linked list"),". The attribute cache is an array of linked lists."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/AttrCacheTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"AttrCacheEntry* AttrCacheTable::attrCache[MAX_OPEN];\n\n/* returns the attrOffset-th attribute for the relation corresponding to relId\nNOTE: this function expects the caller to allocate memory for `*attrCatBuf`\n*/\nint AttrCacheTable::getAttrCatEntry(int relId, int attrOffset, AttrCatEntry* attrCatBuf) {\n  // check if 0 <= relId < MAX_OPEN and return E_OUTOFBOUND otherwise\n\n  // check if attrCache[relId] == nullptr and return E_RELNOTOPEN if true\n\n  // traverse the linked list of attribute cache entries\n  for (AttrCacheEntry* entry = attrCache[relId]; entry != nullptr; entry = entry->next) {\n    if (entry->attrCatEntry.offset == attrOffset) {\n\n      // copy entry->attrCatEntry to *attrCatBuf and return SUCCESS;\n    }\n  }\n\n  // there is no attribute at this offset\n  return E_ATTRNOTEXIST;\n}\n\n/* Converts a attribute catalog record to AttrCatEntry struct\n    We get the record as Attribute[] from the BlockBuffer.getRecord() function.\n    This function will convert that to a struct AttrCatEntry type.\n*/\nvoid AttrCacheTable::recordToAttrCatEntry(union Attribute record[ATTRCAT_NO_ATTRS],\n                                          AttrCatEntry* attrCatEntry) {\n  strcpy(attrCatEntry->relName, record[ATTRCAT_REL_NAME_INDEX].sVal);\n\n  // copy the rest of the fields in the record to the attrCacheEntry struct\n}\n"))),(0,r.kt)("p",null,"Making use of the above defined functions, we can now modify our ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp")," file to fetch the catalog entries from the cache instead of the records. Additionally, we also declare an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable")," to invoke it's constructor. We'll implement this later. ",(0,r.kt)("em",{parentName:"p"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"em"},"OpenRelTable")," object is declared after the ",(0,r.kt)("inlineCode",{parentName:"em"},"Disk")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"StaticBuffer")," objects"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"main.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'int main(int argc, char *argv[]) {\n  Disk disk_run;\n  StaticBuffer buffer;\n  OpenRelTable cache;\n\n  /*\n  for i = 0 and i = 1 (i.e RELCAT_RELID and ATTRCAT_RELID)\n\n      get the relation catalog entry using RelCacheTable::getRelCatEntry()\n      printf("Relation: %s\\n", relname);\n\n      for j = 0 to numAttrs of the relation - 1\n          get the attribute catalog entry for (rel-id i, attribute offset j)\n           in attrCatEntry using AttrCacheTable::getAttrCatEntry()\n\n          printf("  %s: %s\\n", attrName, attrType);\n  */\n\n  return 0;\n}\n'))),(0,r.kt)("p",null,"You must now have an idea of the general flow of data between various functions. The only thing left to implement now is the constructor (and destructor) of class ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenRelTable"),". We'll use this constructor to read our ",(0,r.kt)("inlineCode",{parentName:"p"},"RELCAT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTRIBUTECAT")," records from the disk into the cache. Recall that the index of a relation in the caches is called it's rel-id. The relation catalog has rel-id 0 (",(0,r.kt)("a",{parentName:"p",href:"/constants"},"RELCAT_RELID"),") and the attribute catalog has rel-id 1(",(0,r.kt)("a",{parentName:"p",href:"/constants"},"ATTRCAT_RELID"),")."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Cache/OpenRelTable.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"OpenRelTable::OpenRelTable() {\n\n  // initialize relCache and attrCache with nullptr\n  for (int i = 0; i < MAX_OPEN; ++i) {\n    RelCacheTable::relCache[i] = nullptr;\n    AttrCacheTable::attrCache[i] = nullptr;\n  }\n\n  /************ Setting up Relation Cache entries ************/\n  // (we need to populate relation cache with entries for the relation catalog\n  //  and attribute catalog.)\n\n  /**** setting up Relation Catalog relation in the Relation Cache Table****/\n  RecBuffer relCatBlock(RELCAT_BLOCK);\n\n  Attribute relCatRecord[RELCAT_NO_ATTRS];\n  relCatBlock.getRecord(relCatRecord, RELCAT_SLOTNUM_FOR_RELCAT);\n\n  struct RelCacheEntry relCacheEntry;\n  RelCacheTable::recordToRelCatEntry(relCatRecord, &relCacheEntry.relCatEntry);\n  relCacheEntry.recId.block = RELCAT_BLOCK;\n  relCacheEntry.recId.slot = RELCAT_SLOTNUM_FOR_RELCAT;\n\n  // allocate this on the heap because we want it to persist outside this function\n  RelCacheTable::relCache[RELCAT_RELID] = (struct RelCacheEntry*)malloc(sizeof(RelCacheEntry));\n  *(RelCacheTable::relCache[RELCAT_RELID]) = relCacheEntry;\n\n  /**** setting up Attribute Catalog relation in the Relation Cache Table ****/\n\n  // set up the relation cache entry for the attribute catalog similarly\n  // from the record at RELCAT_SLOTNUM_FOR_ATTRCAT\n\n  // set the value at RelCacheTable::relCache[ATTRCAT_RELID]\n\n\n  /************ Setting up Attribute cache entries ************/\n  // (we need to populate attribute cache with entries for the relation catalog\n  //  and attribute catalog.)\n\n  /**** setting up Relation Catalog relation in the Attribute Cache Table ****/\n  RecBuffer attrCatBlock(ATTRCAT_BLOCK);\n\n  Attribute attrCatRecord[ATTRCAT_NO_ATTRS];\n\n  // iterate through all the attributes of the relation catalog and create a linked\n  // list of AttrCacheEntry (slots 0 to 5)\n  // for each of the entries, set\n  //    attrCacheEntry.recId.block = ATTRCAT_BLOCK;\n  //    attrCacheEntry.recId.slot = i   (0 to 5)\n  //    and attrCacheEntry.next appropriately\n  // NOTE: allocate each entry dynamically using malloc\n\n  // set the next field in the last entry to nullptr\n\n  AttrCacheTable::attrCache[RELCAT_RELID] = /* head of the linked list */;\n\n  /**** setting up Attribute Catalog relation in the Attribute Cache Table ****/\n\n  // set up the attributes of the attribute cache similarly.\n  // read slots 6-11 from attrCatBlock and initialise recId appropriately\n\n  // set the value at AttrCacheTable::attrCache[ATTRCAT_RELID]\n}\n\nOpenRelTable::~OpenRelTable() {\n  // free all the memory that you allocated in the constructor\n}\n"))),(0,r.kt)("p",null,"And that's it; your NITCbase now uses buffers and caches! On compiling and executing this program, you should see the following output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"Relation: RELATIONCAT\n  RelName: STR\n  #Attributes: NUM\n  #Records: NUM\n  FirstBlock: NUM\n  LastBlock: NUM\n  #Slots: NUM\n\nRelation: ATTRIBUTECAT\n  RelName: STR\n  AttributeName: STR\n  AttributeType: NUM\n  PrimaryFlag: NUM\n  RootBlock: NUM\n  Offset: NUM\n")),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1"),". Modify the program to cache and print the catalog entries for the relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Students")," we created in the last stage."))}h.isMDXComponent=!0}}]);