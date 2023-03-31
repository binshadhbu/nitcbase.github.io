"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[3769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,h=s["".concat(u,".").concat(k)]||s[k]||f[k]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"class BlockBuffer",sidebar_position:2},o=void 0,i={unversionedId:"Design/Buffer Layer/BlockBuffer",id:"Design/Buffer Layer/BlockBuffer",title:"class BlockBuffer",description:"The class BlockBuffer is a generic class for representing a disk block of any type (Record, Internal Index, or Leaf Index). Its only field is blockNum. The field blockNum stores the disk block number corresponding to the block object. The block has to be loaded and stored in one of the 32 buffers of the StaticBuffer class before its data can be accessed. Adding to the complexity is the fact that the block, once loaded, may not even be present in the buffer memory later on because of the buffer replacement algorithm implemented by Buffer Layer. In order to work with data of the block, any method of the BlockBuffer class or its descendent classes need to know the address of the buffer memory to which the block has been loaded. Hence any method of this class operating on the block data should first get the pointer to the buffer memory that holds the contents of the block. The loadBlockAndGetBufferPtr() method is used for this purpose. The public methods of BlockBuffer deal with information like header and block type, which are generic to all blocks. RecBuffer and IndBuffer classes extend the class BlockBuffer, thereby, inheriting all the fields and methods of BlockBuffer.",source:"@site/docs/Design/Buffer Layer/BlockBuffer.md",sourceDirName:"Design/Buffer Layer",slug:"/Design/Buffer Layer/BlockBuffer",permalink:"/docs/Design/Buffer Layer/BlockBuffer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"class BlockBuffer",sidebar_position:2},sidebar:"Design",previous:{title:"class StaticBuffer",permalink:"/docs/Design/Buffer Layer/StaticBuffer"},next:{title:"class RecBuffer",permalink:"/docs/Design/Buffer Layer/RecBuffer"}},u={},c=[{value:"BlockBuffer :: BlockBuffer() (Constructor1)",id:"blockbuffer--blockbuffer-constructor1",level:3},{value:"Description",id:"description",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Values",id:"return-values",level:4},{value:"Algorithm",id:"algorithm",level:4},{value:"BlockBuffer :: BlockBuffer() (Constructor2)",id:"blockbuffer--blockbuffer-constructor2",level:3},{value:"Description",id:"description-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"Algorithm",id:"algorithm-1",level:4},{value:"BlockBuffer :: getBlockNum()",id:"blockbuffer--getblocknum",level:3},{value:"Description",id:"description-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"Algorithm",id:"algorithm-2",level:4},{value:"BlockBuffer :: getHeader()",id:"blockbuffer--getheader",level:3},{value:"Description",id:"description-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"Algorithm",id:"algorithm-3",level:4},{value:"BlockBuffer :: setHeader()",id:"blockbuffer--setheader",level:3},{value:"Description",id:"description-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"Algorithm",id:"algorithm-4",level:4},{value:"BlockBuffer :: releaseBlock()",id:"blockbuffer--releaseblock",level:3},{value:"Description",id:"description-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Return Values",id:"return-values-5",level:4},{value:"Algorithm",id:"algorithm-5",level:4},{value:"BlockBuffer :: loadBlockAndGetBufferPtr()",id:"blockbuffer--loadblockandgetbufferptr",level:3},{value:"Description",id:"description-6",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:"Return Values",id:"return-values-6",level:4},{value:"Algorithm",id:"algorithm-6",level:4},{value:"BlockBuffer :: getFreeBlock()",id:"blockbuffer--getfreeblock",level:3},{value:"Description",id:"description-7",level:4},{value:"Arguments",id:"arguments-7",level:4},{value:"Return Values",id:"return-values-7",level:4},{value:"Algorithm",id:"algorithm-7",level:4},{value:"BlockBuffer :: setBlockType()",id:"blockbuffer--setblocktype",level:3},{value:"Description",id:"description-8",level:4},{value:"Arguments",id:"arguments-8",level:4},{value:"Return Values",id:"return-values-8",level:4},{value:"Algorithm",id:"algorithm-8",level:4}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"class BlockBuffer")," is a generic class for representing a disk block of any type (",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Internal Index"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Leaf Index"),"). Its only field is ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum"),". The field ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum")," stores the disk block number corresponding to the block object. The block has to be loaded and stored in one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"32")," buffers of the ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticBuffer class")," before its data can be accessed. Adding to the complexity is the fact that the block, once loaded, may not even be present in the buffer memory later on because of the ",(0,a.kt)("strong",{parentName:"p"},"buffer replacement algorithm")," implemented by Buffer Layer. In order to work with data of the block, any method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockBuffer class")," or its descendent classes need to know the address of the buffer memory to which the block has been loaded. Hence any method of this class operating on the block data should first get the pointer to the buffer memory that holds the contents of the block. The ",(0,a.kt)("inlineCode",{parentName:"p"},"loadBlockAndGetBufferPtr()")," method is used for this purpose. The public methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockBuffer")," deal with information like ",(0,a.kt)("strong",{parentName:"p"},"header")," and ",(0,a.kt)("strong",{parentName:"p"},"block type"),", which are generic to all blocks. ",(0,a.kt)("inlineCode",{parentName:"p"},"RecBuffer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IndBuffer")," classes extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"class BlockBuffer"),", thereby, inheriting all the fields and methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockBuffer"),"."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If the class definition of a class (say A) declares another class (say B) as a ",(0,a.kt)("strong",{parentName:"li"},"friend class"),", then an instance of class B can access the private fields and methods of class A. ",(0,a.kt)("strong",{parentName:"li"},"This friendship is, however, not inherited by the child classes of B.")),(0,a.kt)("li",{parentName:"ul"},"As per the NITCbase design, the definition of the ",(0,a.kt)("inlineCode",{parentName:"li"},"class StaticBuffer")," contains the declaration: ",(0,a.kt)("inlineCode",{parentName:"li"},"friend class BlockBuffer"),". Hence, the methods in ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockBuffer")," can access the private fields and methods of the ",(0,a.kt)("inlineCode",{parentName:"li"},"class StaticBuffer"),"."),(0,a.kt)("li",{parentName:"ul"},"On the other hand, ",(0,a.kt)("inlineCode",{parentName:"li"},"RecBuffer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"IndBuffer")," classes can access them only through the public functions of ",(0,a.kt)("inlineCode",{parentName:"li"},"StaticBuffer class")," and through the public and protected functions of ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockBuffer class"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class BlockBuffer{\npublic:\n    //methods\n    BlockBuffer(char blockType);\n    BlockBuffer(int blockNum);\n    int getBlockNum();\n    int getHeader(struct HeadInfo* head);\n    int setHeader(struct HeadInfo* head);\n    void releaseBlock();\n\nprotected:\n    //field\n    int blockNum;\n\n    //methods\n    unsigned char *getBufferPtr();\n    int getBlock();\n    int getFreeBlock(int blockType);\n    int setBlockType(int blockType);\n};\n")),(0,a.kt)("p",null,"The following are the specifications for the methods in class BlockBuffer."),(0,a.kt)("h3",{id:"blockbuffer--blockbuffer-constructor1"},"BlockBuffer :: BlockBuffer() (Constructor1)"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One of the",(0,a.kt)("inlineCode",{parentName:"li"},"Constructors")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"class BlockBuffer")),(0,a.kt)("li",{parentName:"ul"},"Called if a new block of the input type is to be allocated in the disk.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the block has already been initialised as a record or index block, use ",(0,a.kt)("a",{parentName:"p",href:"#blockbuffer--blockbuffer-constructor-2"},"constructor 2"),".")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"char")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the new block to be allotted. It can be one of the following: ",(0,a.kt)("inlineCode",{parentName:"td"},"'R'"),",",(0,a.kt)("inlineCode",{parentName:"td"},"'I'")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"'L'")," where, ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"td"},"R"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"REC")," ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"td"},"I"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"IND_INTERNAL")," ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"td"},"L"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"IND_LEAF"))))),(0,a.kt)("h4",{id:"return-values"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("admonition",{title:"Important",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If the block could not be allocatted in the disk, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum")," field of this class will contain the appropriate error code. The callers of this constructor and the following constructors: ",(0,a.kt)("a",{parentName:"p",href:"#recbuffer--recbuffer-constructor-1"},"RecBuffer :: RecBuffer() (Constructor 1)"),", ",(0,a.kt)("a",{parentName:"p",href:"#indbuffer--indbuffer-constructor-1"},"IndBuffer :: IndBuffer() (Constructor 1)"),", ",(0,a.kt)("a",{parentName:"p",href:"#indinternal--indinternal-constructor1"},"IndInternal :: IndInternal() (Constructor1)")," and ",(0,a.kt)("a",{parentName:"p",href:"#indleaf--indleaf-constructor-1"},"IndLeaf :: IndLeaf() (Constructor 1)")," should check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum")," field to verify if the disk block was allocatted succesfully.")),(0,a.kt)("h4",{id:"algorithm"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"BlockBuffer::BlockBuffer(char blockType){\n    // allocate a block on the disk and a buffer in memory to hold the new block of\n    // given type using getFreeBlock function and get the return error codes if any.\n\n    // set the blockNum field of the object to that of the allocated block\n    // number if the method returned a valid block number,\n    // otherwise set the error code returned as the block number.\n\n    // (The caller must check if the constructor allocatted block successfully\n    // by checking the value of block number field.)\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--blockbuffer-constructor2"},"BlockBuffer :: BlockBuffer() (Constructor2)"),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One of the",(0,a.kt)("inlineCode",{parentName:"li"},"Constructors")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"class BlockBuffer")),(0,a.kt)("li",{parentName:"ul"},"Called when the block has already been initialised as a record or index block on the disk.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If a new block is to be allocated in the disk use ",(0,a.kt)("a",{parentName:"p",href:"#blockbuffer--blockbuffer-constructor-1"},"constructor 1"),".")),(0,a.kt)("h4",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockNum"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"Block number of the block whose object is to be created.")))),(0,a.kt)("h4",{id:"return-values-1"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"algorithm-1"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"BlockBuffer::BlockBuffer(int blockNum){\n\n    // set the blockNum field of the object to input argument.\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--getblocknum"},"BlockBuffer :: getBlockNum()"),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"Returns the block number of the block."),(0,a.kt)("h4",{id:"arguments-2"},"Arguments"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"return-values-2"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockNum"),(0,a.kt)("td",{parentName:"tr",align:null},"Block number of the block.")))),(0,a.kt)("h4",{id:"algorithm-2"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int BlockBuffer::getBlockNum(){\n\n    //return corresponding block number.\n\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--getheader"},"BlockBuffer :: getHeader()"),(0,a.kt)("h4",{id:"description-3"},"Description"),(0,a.kt)("p",null,"Gives the header of the block."),(0,a.kt)("admonition",{title:"note",type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Any type of block(",(0,a.kt)("inlineCode",{parentName:"li"},"Record"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Internal Index"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"Leaf Index"),") of NITCbase has the same header structure. Therefore, ",(0,a.kt)("inlineCode",{parentName:"li"},"getHeader()")," method is kept in abstract ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockBuffer class"),"."),(0,a.kt)("li",{parentName:"ul"},"Higher layer must allocate memory for the ",(0,a.kt)("inlineCode",{parentName:"li"},"struct HeadInfo")," variable before calling this function."))),(0,a.kt)("h4",{id:"arguments-3"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"head"),(0,a.kt)("td",{parentName:"tr",align:null},"struct HeadInfo","*"),(0,a.kt)("td",{parentName:"tr",align:null},"Pointer to the HeadInfo structure to which the block header is copied.")))),(0,a.kt)("h4",{id:"return-values-3"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"algorithm-3"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int BlockBuffer::getHeader(struct HeadInfo *head){\n\n    unsigned char *bufferPtr;\n    // get the starting address of the buffer containing the block using loadBlockAndGetBufferPtr(&bufferPtr).\n\n    // if loadBlockAndGetBufferPtr(&bufferPtr) != SUCCESS\n        // return the value returned by the call.\n\n    // Use type casting here to cast the returned pointer type to the appropriate struct pointer to get the headInfo\n\n    // copy the header of block to the memory location pointed to by the argument head.\n        // not copying reserved\n\n    // return SUCCESS\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--setheader"},"BlockBuffer :: setHeader()"),(0,a.kt)("h4",{id:"description-4"},"Description"),(0,a.kt)("p",null,"Sets the header of the block."),(0,a.kt)("admonition",{title:"note",type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Any type of block(",(0,a.kt)("inlineCode",{parentName:"li"},"Record"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Internal Index"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"Leaf Index"),") of NITCbase has the same header structure. Therefore, ",(0,a.kt)("inlineCode",{parentName:"li"},"setHeader()")," method is kept in abstract ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockBuffer class"),"."),(0,a.kt)("li",{parentName:"ul"},"Higher layer must allocate memory for the ",(0,a.kt)("inlineCode",{parentName:"li"},"struct HeadInfo")," variable before calling this function."),(0,a.kt)("li",{parentName:"ul"},"After the ",(0,a.kt)("inlineCode",{parentName:"li"},"blockType")," is set at block allocation, the ",(0,a.kt)("inlineCode",{parentName:"li"},"setHeader()")," function should not be used to change the ",(0,a.kt)("inlineCode",{parentName:"li"},"blockType"),". The block will need to freed and reallocated to reuse it as a different block type."))),(0,a.kt)("h4",{id:"arguments-4"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"head"),(0,a.kt)("td",{parentName:"tr",align:null},"struct HeadInfo","*"),(0,a.kt)("td",{parentName:"tr",align:null},"Pointer to the HeadInfo structure to which the block header is copied.")))),(0,a.kt)("h4",{id:"return-values-4"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"algorithm-4"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int BlockBuffer::setHeader(struct HeadInfo *head){\n\n    unsigned char *bufferPtr;\n    // get the starting address of the buffer containing the block using\n    // loadBlockAndGetBufferPtr(&bufferPtr).\n\n    // if loadBlockAndGetBufferPtr(&bufferPtr) != SUCCESS\n        // return the value returned by the call.\n\n    // Use type casting here to cast the returned pointer type to the appropriate\n    // struct pointer to get the headInfo\n\n    // copy the fields of the HeadInfo pointed to by head to the header of block.\n    // not copying reserved\n\n    // update dirty bit by calling appropriate method of StaticBuffer class.\n    // if setDirtyBit() failed, return the error code\n\n    // return SUCCESS;\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--releaseblock"},"BlockBuffer :: releaseBlock()"),(0,a.kt)("h4",{id:"description-5"},"Description"),(0,a.kt)("p",null,"Deletes the block from both the buffer memory and the disk. The ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum")," field of the object is invalidated (set to ",(0,a.kt)("inlineCode",{parentName:"p"},"INVALID_BLOCK")," (-1))."),(0,a.kt)("h4",{id:"arguments-5"},"Arguments"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"return-values-5"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("admonition",{title:"note",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseBlock()")," method is called again after having successfully released for the first time (or if the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNum")," field is invalid), then this method will not perform any operation.")),(0,a.kt)("h4",{id:"algorithm-5"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void BlockBuffer::releaseBlock(){\n\n    // if blockNum is INVALID_BLOCK (-1), or it is invalidated already, do nothing\n\n    // else\n        /* get the buffer number of the buffer assigned to the block\n           using StaticBuffer::getBufferNum(). */\n\n        // if the buffer number is valid (!=E_BLOCKNOTINBUFFER), free the buffer\n        // by setting the free flag of its metaInfo entry to true.\n\n        // free the block in disk by setting the data type of the entry corresponding\n        // to the block number in StaticBuffer::blockAllocMap to UNUSED_BLK.\n\n        // set the object's blockNum to INVALID_BLOCK (-1)\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--loadblockandgetbufferptr"},"BlockBuffer :: loadBlockAndGetBufferPtr()"),(0,a.kt)("h4",{id:"description-6"},"Description"),(0,a.kt)("p",null,"Returns a pointer to the first byte of the buffer storing the block. This function will load the block to the buffer if it is not already present."),(0,a.kt)("h4",{id:"arguments-6"},"Arguments"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"return-values-6"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bufferPtr"),(0,a.kt)("td",{parentName:"tr",align:null},"Pointer to the buffer containing the block.")))),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The block number that is to be loaded is already available as a member field in the ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockBuffer")," instance."),(0,a.kt)("li",{parentName:"ul"},"All get and set methods accessing the block's data should call the ",(0,a.kt)("inlineCode",{parentName:"li"},"loadBlockAndGetBufferPtr()")," method to get the starting address of the buffer block holding the block's data. ",(0,a.kt)("strong",{parentName:"li"},"This ensures that the block is reloaded back to buffer memory if it had been replaced by the buffer replacement algorithm since the last data access.")),(0,a.kt)("li",{parentName:"ul"},"This function will NOT check if the block has been initialised as a record or an index block. It will copy whatever content is there in that disk block to the buffer."))),(0,a.kt)("h4",{id:"algorithm-6"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/* NOTE: This function will NOT check if the block has been initialised as a\n   record or an index block. It will copy whatever content is there in that\n   disk block to the buffer.\n   Also ensure that all the methods accessing and updating the block's data\n   should call the loadBlockAndGetBufferPtr() function before the access or\n   update is done. This is because the block might not be present in the\n   buffer due to LRU buffer replacement. So, it will need to be bought back\n   to the buffer before any operations can be done.\n */\nint BlockBuffer::loadBlockAndGetBufferPtr(unsigned char ** buffPtr) {\n    /* check whether the block is already present in the buffer\n       using StaticBuffer.getBufferNum() */\n    int bufferNum = StaticBuffer::getBufferNum(this->blockNum);\n\n    // if present (!=E_BLOCKNOTINBUFFER),\n        // set the timestamp of the corresponding buffer to 0 and increment the\n        // timestamps of all other occupied buffers in BufferMetaInfo.\n\n    // else\n        // get a free buffer using StaticBuffer.getFreeBuffer()\n\n        // if the call returns E_OUTOFBOUND, return E_OUTOFBOUND here as\n        // the blockNum is invalid\n\n        // Read the block into the free buffer using readBlock()\n\n    // store the pointer to this buffer (blocks[bufferNum]) in *buffPtr\n\n    // return SUCCESS;\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--getfreeblock"},"BlockBuffer :: getFreeBlock()"),(0,a.kt)("h4",{id:"description-7"},"Description"),(0,a.kt)("p",null,"Returns the block number of a free block of the input type in the disk and allots a buffer to that block. If free block is not available FAILURE is returned."),(0,a.kt)("h4",{id:"arguments-7"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the required block(",(0,a.kt)("inlineCode",{parentName:"td"},"REC"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"IND_INTERNAL"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"IND_LEAF"),")")))),(0,a.kt)("h4",{id:"return-values-7"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockNum"),(0,a.kt)("td",{parentName:"tr",align:null},"Block number of the free block.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/constants"},(0,a.kt)("inlineCode",{parentName:"a"},"E_DISKFULL"))),(0,a.kt)("td",{parentName:"tr",align:null},"No free block is available in the disk.")))),(0,a.kt)("h4",{id:"algorithm-7"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int BlockBuffer::getFreeBlock(int blockType){\n\n    //iterate through the StaticBuffer::blockAllocMap and find the block number\n    // of a free block in the disk.\n\n    //if no block is free, return E_DISKFULL.\n\n    //set the object's blockNum to the block number of the free block.\n\n    //find a free buffer using StaticBuffer::getFreeBuffer() .\n\n    //initialize the header of the block with\n    //pblock: -1, lblock: -1, rblock: -1, numEntries: 0, numAttrs: 0 and numSlots: 0\n    //using setHeader().\n\n    //update the block type of the block to the input block type using setBlockType().\n\n    //return block number of the free block.\n\n}\n")),(0,a.kt)("h3",{id:"blockbuffer--setblocktype"},"BlockBuffer :: setBlockType()"),(0,a.kt)("h4",{id:"description-8"},"Description"),(0,a.kt)("p",null,"Sets the type of the block with the input block type. This method sets the type in both the header of the block and also in the block allocation map."),(0,a.kt)("h4",{id:"arguments-8"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the block(",(0,a.kt)("inlineCode",{parentName:"td"},"REC"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"IND_INTERNAL"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"IND_LEAF"),")")))),(0,a.kt)("h4",{id:"return-values-8"},"Return Values"),(0,a.kt)("p",null,"Nil"),(0,a.kt)("h4",{id:"algorithm-8"},"Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int BlockBuffer::setBlockType(int blockType){\n\n    unsigned char *bufferPtr;\n    // get the starting address of the buffer containing the block using loadBlockAndGetBufferPtr(&bufferPtr).\n\n    // if loadBlockAndGetBufferPtr(&bufferPtr) != SUCCESS\n        // return the value returned by the call.\n\n    // store the input block type in the first 4 bytes of the buffer.\n\n    // update the StaticBuffer::blockAllocMap entry corresponding to the object's block number.\n\n    // update dirty bit by calling appropriate method of StaticBuffer class.\n    // if setDirtyBit() failed\n        // return the returned value from the call\n\n    // return SUCCESS\n}\n")))}f.isMDXComponent=!0}}]);