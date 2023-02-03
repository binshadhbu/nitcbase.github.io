"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[4240],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={title:"Stage 1 : Understanding NITCbase and its filesystem"},o="Stage 1 : Understanding NITCbase and its filesystem (4 hours)",s={unversionedId:"Roadmap/Stage01",id:"Roadmap/Stage01",title:"Stage 1 : Understanding NITCbase and its filesystem",description:"- Understand the fundamentals of a relational DBMS",source:"@site/docs/Roadmap/Stage01.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage01",permalink:"/docs/Roadmap/Stage01",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 1 : Understanding NITCbase and its filesystem"},sidebar:"Roadmap",previous:{title:"Stage 0 : Installation and Preparation",permalink:"/docs/Roadmap/Stage00"},next:{title:"Stage 2: The Grand Picture",permalink:"/docs/Roadmap/Stage02"}},l={},d=[{value:"The Filesystem",id:"the-filesystem",level:2},{value:"XFS Interface",id:"xfs-interface",level:2},{value:"The Disk Class",id:"the-disk-class",level:2},{value:"Reading and Writing",id:"reading-and-writing",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stage-1--understanding-nitcbase-and-its-filesystem-4-hours"},"Stage 1 : Understanding NITCbase and its filesystem (4 hours)"),(0,i.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Understand the fundamentals of a relational DBMS"),(0,i.kt)("li",{parentName:"ul"},"Gain a basic understanding of the different types of blocks on our XFS disk - record and index blocks"),(0,i.kt)("li",{parentName:"ul"},"Familiarise with the catalog data structures used in NITCbase - relation and attribute catalog"),(0,i.kt)("li",{parentName:"ul"},"Learn to read and write from the XFS disk"))),(0,i.kt)("p",null,"A database management system is a software that allows us to easily store, organize and retrieve data. Databases can be classified into ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Database_model"},"various types")," depending on the logical structure of data within them. Here, we will only be talking about relational databases."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_database"},"relational database")," models data as rows and columns in a series of tables. Three key terms are used extensively in relational database models: ",(0,i.kt)("em",{parentName:"p"},"relations"),", ",(0,i.kt)("em",{parentName:"p"},"attributes"),", and ",(0,i.kt)("em",{parentName:"p"},"domains"),". A ",(0,i.kt)("strong",{parentName:"p"},"relation")," is a table with columns and rows. The named columns of the relation are called ",(0,i.kt)("strong",{parentName:"p"},"attributes"),", and the domain is the set of values the attributes are allowed to take."),(0,i.kt)("p",null,"A relation in a production database might consist of millions of rows(or ",(0,i.kt)("strong",{parentName:"p"},"records"),"). These records spread across several blocks when stored in the disk. On developing a database of our own, it is essential that we have access to records stored in the disk without much time delay. Disk access is a high-latency operation. Therefore, as the size of relation increases, searching records that satisfy certain conditions by accessing every record in the disk blocks, can adversely affect the performance. This necessitates indexing."),(0,i.kt)("p",null,"In essence, a relational database will contain a collection of records corresponding to many relations and a proportional number of indexes to facilitate searching and other operations on the database. There's also need for a data structure to store the schema and metadata of the relations stored in the database. In NITCbase, we have the relation catalog and attribute catalog for these purposes."),(0,i.kt)("p",null,"We will get into the implementation details of all these parts as we go further into the roadmap."),(0,i.kt)("h2",{id:"the-filesystem"},"The Filesystem"),(0,i.kt)("p",null,"In the previous stage, we created the ",(0,i.kt)("inlineCode",{parentName:"p"},"disk.xfs")," file. This file represents a disk in our experimental setup. Similar to a physical disk, the XFS disk too is divided into blocks. As mentioned earlier, we'll be organising the blocks into 2 main types: ",(0,i.kt)("strong",{parentName:"p"},"record blocks")," and index blocks. Index blocks are further classified as ",(0,i.kt)("strong",{parentName:"p"},"leaf index blocks")," and ",(0,i.kt)("strong",{parentName:"p"},"internal index blocks"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Read the documentation for ",(0,i.kt)("a",{parentName:"strong",href:"/docs/Design/Physical%20Layer#disk-model"},"Disk Model")," before proceeding further.")),(0,i.kt)("h2",{id:"xfs-interface"},"XFS Interface"),(0,i.kt)("p",null,"XFS Interface is a tool that will allow you to interface with the NITCbase filesystem (on ",(0,i.kt)("inlineCode",{parentName:"p"},"disk.xfs"),") from the host system. We can use it to initialize the disk, transfer relations between the host system and the XFS disk, and a variety of other operations. It will be immensely useful for debugging purposes throughout our implementation of NITCbase."),(0,i.kt)("p",null,"This tool is provided to you and is available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"XFS_Interface")," directory. We will look into the commands provided by the XFS Interface as we go along. Note that all the filesystem operations that you will be implementing in the course of this project are already made available to you in the XFS Interface. This will aid you in verifying your own implementation."),(0,i.kt)("h2",{id:"the-disk-class"},"The Disk Class"),(0,i.kt)("p",null,"Now, we finally begin working on NITCbase. At the lowest level, our database will need to interface with the filesystem. Similar to how an OS would provide you with read/write functionalities in it's standard library, here too you are provided with an API to access the XFS disk. The Disk Class exposes to you functions to read and write disk blocks."),(0,i.kt)("p",null,"Read the section on ",(0,i.kt)("a",{parentName:"p",href:"/docs/Design/Physical%20Layer#disk-class"},"Disk Class")," before proceeding further."),(0,i.kt)("p",null,"An important thing to note about NITCbase is it's runtime disk. ",(0,i.kt)("strong",{parentName:"p"},"While NITCbase is running, all the disk operations are done on a copy of the disk. All the updates to the disk are only copied to the actual disk on successful termination of the program. This helps us to avoid issues where the actual disk is an indeterminate state due to runtime errors in the program.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/Design/Physical%20Layer#disk-class"},"Disk class")," has a constructor and destructor that is meant to be run on beginning and end of execution of the program respectively. These functions are responsible for copying to and from the runtime disk as mentioned earlier. So, we will be declaring a single instance of the disk at the very top of our program. The ",(0,i.kt)("inlineCode",{parentName:"p"},"readBlock")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeBlock")," methods are static and can be accessed as ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk::readBlock()"),"."),(0,i.kt)("h2",{id:"reading-and-writing"},"Reading and Writing"),(0,i.kt)("p",null,"In this stage, we will try to use the provided Disk functions to do I/O operations on the disk.In your ",(0,i.kt)("inlineCode",{parentName:"p"},"mynitcbase")," folder, you'll find a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.c")," file. We'll be editing this file to read and write from a random block on the disk. In the very first line of the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function, you'll find a declaration of an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk")," class for reasons we mentioned earlier. The commented-out lines following this declaration are relevant only in later stages and will be covered in due time."),(0,i.kt)("p",null,"As you read in ",(0,i.kt)("a",{parentName:"p",href:"/docs/Design/Physical%20Layer#disk-model"},"Disk model"),", each block of the disk is 2048 bytes. The disk functions expect two arguments: a buffer of size 2048 bytes and the block number that we want to work with."),(0,i.kt)("p",null,"These 2048 bytes of memory/disk will have to be managed by us. We know that in C/C++, an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned char")," is a type that can hold one byte and can hold a value between 0 and 255. So, we can declare the memory buffer for the disk block as this type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"unsigned char buffer[BLOCK_SIZE];\n//BLOCK_SIZE is a constant that has value 2048\n")),(0,i.kt)("p",null,"Now, we can read into this buffer using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk::readBlock()")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Disk::readBlock(buffer, 7000);\n// 7000 is a random block number that's unused.\n")),(0,i.kt)("p",null,"Let's edit a few bytes of the buffer and write it back to the disk. We'll be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"memcpy")," function provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cstring")," header for this. The function takes three arguments; the destination pointer, the source pointer, and the number of bytes. It copies the required number of bytes from the source to the destination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"char message[] = \"hello\";\nmemcpy(buffer + 20, message, 6);\n//Now, buffer[20] = 'h', buffer[21] = 'e' ...\nDisk::writeBlock(buffer, 7000);\n")),(0,i.kt)("p",null,"Now, our modified buffer has been written to the disk. Let's try reading this back from the disk into a new buffer to see if our changes have been made."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned char buffer2[BLOCK_SIZE];\nchar message2[6];\nDisk::readBlock(buffer2, 7000);\nmemcpy(message2, buffer2 + 20, 6);\nstd::cout << message2;\n")),(0,i.kt)("p",null,"Additionally comment out the call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"handleFrontend")," function for now. We will be looking into it later."),(0,i.kt)("p",null,"So, in summary, your main function should look like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="the modified main.c file"',title:'"the',modified:!0,"main.c":!0,'file"':!0},'int main(int argc, char *argv[]) {\n  Disk disk_run;\n\n  unsigned char buffer[BLOCK_SIZE];\n  Disk::readBlock(buffer, 7000);\n  char message[] = "hello";\n  memcpy(buffer + 20, message, 6);\n  Disk::writeBlock(buffer, 7000);\n\n  unsigned char buffer2[BLOCK_SIZE];\n  char message2[6];\n  Disk::readBlock(buffer2, 7000);\n  memcpy(message2, buffer2 + 20, 6);\n  std::cout << message2;\n\n  return 0;\n}\n')),(0,i.kt)("p",null,"A Makefile has been provided to you with this project. So, to build NITCbase, open a terminal and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mynitcbase")," directory. This will create an executable file with name ",(0,i.kt)("inlineCode",{parentName:"p"},"nitcbase")," in the same directory. We can run this file to see if our message is being printed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="In your terminal"',title:'"In',your:!0,'terminal"':!0},"cd mynitcbase\nmake\n./nitcbase\n")),(0,i.kt)("p",null,"You should be seeing the following output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hello\n")),(0,i.kt)("p",null,"What we've covered now will form the lowest layer of NITCbase, ",(0,i.kt)("strong",{parentName:"p"},"the physical layer"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't forget to undo your changes and revert the ",(0,i.kt)("inlineCode",{parentName:"strong"},"main.c")," file to it's ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Nitcbase/nitcbase/blob/master/main.cpp"},"original state")," before proceeding further.")))}p.isMDXComponent=!0}}]);