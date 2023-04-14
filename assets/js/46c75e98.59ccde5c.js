"use strict";(self.webpackChunknitcbase=self.webpackChunknitcbase||[]).push([[144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Stage 12: Join on Relations"},o="Stage 12: Join on Relations (10 hours)",i={unversionedId:"Roadmap/Stage12",id:"Roadmap/Stage12",title:"Stage 12: Join on Relations",description:"- Implement the equi-join operation between relations in NITCbase",source:"@site/docs/Roadmap/Stage12.md",sourceDirName:"Roadmap",slug:"/Roadmap/Stage12",permalink:"/docs/Roadmap/Stage12",draft:!1,tags:[],version:"current",frontMatter:{title:"Stage 12: Join on Relations"},sidebar:"Roadmap",previous:{title:"Stage 11: Index Creation and Deletion",permalink:"/docs/Roadmap/Stage11"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Exercises",id:"exercises",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage-12-join-on-relations-10-hours"},"Stage 12: Join on Relations (10 hours)"),(0,r.kt)("admonition",{title:"Learning Objectives",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Implement the equi-join operation between relations in NITCbase"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The join operation is used to combine the records of two relations with respect to a condition on two columns from the respective relations. NITCbase allows us to combine two relations into a new relation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," condition. This is called an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_algebra#%CE%B8-join_and_equijoin"},"equijoin"),"."),(0,r.kt)("p",null,"For example, consider the relations ",(0,r.kt)("inlineCode",{parentName:"p"},"Shops(id NUM, shopName STR, contact STR)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Products(id NUM, productName STR, shopId NUM)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," relation is used to store a list of all the products and the shop to find them. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Shops")," relation stores details about all the shops."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shops")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"shopName"),(0,r.kt)("th",{parentName:"tr",align:null},"contact"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"WezCafe"),(0,r.kt)("td",{parentName:"tr",align:null},"1234509876")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"BakeHouse"),(0,r.kt)("td",{parentName:"tr",align:null},"3434238983")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"BurgerLounge"),(0,r.kt)("td",{parentName:"tr",align:null},"9892389331")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Monarch"),(0,r.kt)("td",{parentName:"tr",align:null},"6739383883")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Products")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"productName"),(0,r.kt)("th",{parentName:"tr",align:null},"shopId"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Burger"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Cake"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Steak"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"Pizza"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Suppose a customer stops by and asks for a list of products and the numbers to contact to get them. Clearly, we have all the data for this in the database. Essentially, what we need is a single relation which has data from both the above relations. So, we do a join operation. Let's call the target relation ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductShops"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ProductShops")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"productName"),(0,r.kt)("th",{parentName:"tr",align:null},"shopId"),(0,r.kt)("th",{parentName:"tr",align:null},"shopName"),(0,r.kt)("th",{parentName:"tr",align:null},"contact"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Burger"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"BurgerLounge"),(0,r.kt)("td",{parentName:"tr",align:null},"9892389331")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Cake"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Monarch"),(0,r.kt)("td",{parentName:"tr",align:null},"6739383883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Steak"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Monarch"),(0,r.kt)("td",{parentName:"tr",align:null},"6739383883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"Pizza"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"WezCafe"),(0,r.kt)("td",{parentName:"tr",align:null},"1234509876")))),(0,r.kt)("p",null,"Now, we see that our target relation has everything that the customer asked for."),(0,r.kt)("p",null,"A join operation results in the creation of a target relation which will consist of all the attributes from both source relations aside from the join attribute of the second relation (why?). That is, the total number of attributes in the target relation will be ",(0,r.kt)("inlineCode",{parentName:"p"},"numAttrs(Rel1) + numAttrs(Rel2) - 1"),"."),(0,r.kt)("p",null,"NITCbase also allows you to do a combination of join and project operations together in a single command to create a new target relation with the specified attributes from both relations. The associated commands are specified below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Frontend User Interface Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/User%20Interface%20Commands/dml#select--from-join-where"},"SELECT ","*"," FROM Rel1 JOIN Rel2 INTO TargetRel WHERE Rel1.Attr1 = Rel2.Attr2")),(0,r.kt)("td",{parentName:"tr",align:null},"join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/User%20Interface%20Commands/dml#select-attrlist-from-join-where"},"SELECT Attr1,Attr2 FROM Rel1 JOIN Rel2 INTO TargetRel WHERE Rel1.Attr1 = Rel2.Attr2")),(0,r.kt)("td",{parentName:"tr",align:null},"join + project")))),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("p",null,"Q. Consider we have a relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," with the attributes (",(0,r.kt)("inlineCode",{parentName:"p"},"id"),": NUM, ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),": STR, ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),": STR) and a relation ",(0,r.kt)("inlineCode",{parentName:"p"},"Locations")," with the attributes name(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": STR, ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity"),": NUM). We run the following commands in NITCbase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPEN TABLE Events;\nSELECT * FROM Events INTO Lectures WHERE location=ELHC;\nOPEN TABLE Locations;\nOPEN TABLE Lectures;\nSELECT title, location, capacity FROM Lectures JOIN Locations INTO LectureCapacities WHERE Lectures.location = Locations.name;\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What are the attribute cache entries for the relation ",(0,r.kt)("inlineCode",{parentName:"li"},"LectureCapacities"),"?"),(0,r.kt)("li",{parentName:"ol"},"Suppose we add a relation ",(0,r.kt)("inlineCode",{parentName:"li"},"Participants")," with attributes (",(0,r.kt)("inlineCode",{parentName:"li"},"regNo"),": NUM, ",(0,r.kt)("inlineCode",{parentName:"li"},"eventTitle"),": STR). Write commands to filter the ",(0,r.kt)("inlineCode",{parentName:"li"},"regNo")," of all the participants who are attending events happening in the location ",(0,r.kt)("inlineCode",{parentName:"li"},"Auditorium"),".")),(0,r.kt)("p",null,"(click to view answer)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RelName"),(0,r.kt)("th",{parentName:"tr",align:null},"AttributeName"),(0,r.kt)("th",{parentName:"tr",align:null},"AttributeType"),(0,r.kt)("th",{parentName:"tr",align:null},"PrimaryFlag"),(0,r.kt)("th",{parentName:"tr",align:null},"RootBlock"),(0,r.kt)("th",{parentName:"tr",align:null},"Offset"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LectureCapacities"),(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"STR"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LectureCapacities"),(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"STR"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LectureCapacities"),(0,r.kt)("td",{parentName:"tr",align:null},"capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"NUM"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPEN TABLE Events;\nOPEN TABLE Participants;\nSELECT regNo,location FROM Participants JOIN Events INTO ParticipantLocations WHERE Participants.eventTitle = Events.title;\nOPEN TABLE ParticipantLocations;\nSELECT regNo FROM ParticipantLocations INTO AuditoriumParticipants WHERE location=Auditorium;\n"))),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To do a join operation, we fetch every record from the first relation specified one by one. For every record, we do a search operation on the second relation to fetch the records that have the specified attribute value equal to the value in the record from the first relation. For every record of the first relation, there will be a corresponding search call to the second relation."),(0,r.kt)("p",null,"If the only option we had was to do a linear search every time, we would end up with a time complexity of O(n",(0,r.kt)("sup",null,"2"),") for the join operation. But that is not the only option we have. If we were to do an indexed search instead, the complexity reduces to O(n","\xa0","log","\xa0","n). This is a significant improvement and would reduce the time required to complete the operation by a significant amount, especially as we approach upwards of a million records. Because of this, the NITCbase design mandates the following. If the second relation in a join operation does not have an index on the join attribute, one will be created for it."),(0,r.kt)("p",null,"The target relation produced from a join operation would contain all the attributes from both source relation (aside from the join attribute of the second relation). So, NITCbase requires that there be no attribute names that are common between the two relations except for the join attribute."),(0,r.kt)("p",null,"A sequence diagram documenting the call sequence involved in a call to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#select--from-join-where"},"SELECT ","*"," FROM JOIN")," command is shown below. The calls to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Schema%20Layer"},"Schema Layer"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Cache%20Layer/intro"},"Cache Layer")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Buffer%20Layer/intro"},"Buffer Layer")," are omitted for the sake of clarity."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The functions are denoted with circles as follows.",(0,r.kt)("br",null),"\n\ud83d\udd35 -> methods that are already in their final state",(0,r.kt)("br",null),"\n\ud83d\udfe2 -> methods that will attain their final state in this stage",(0,r.kt)("br",null))),(0,r.kt)("mermaid",{value:" %%{init: { 'sequence': {'mirrorActors':false} } }%%\nsequenceDiagram\n  actor User\n  participant Frontend User Interface\n  participant Frontend Programming Interface\n  participant Algebra Layer\n  participant Block Access Layer\n  participant B-Plus Tree Layer\n  User->>Frontend User Interface: SELECT * FROM Rel1 JOIN Rel2\n  activate Frontend User Interface\n  Frontend User Interface->>Frontend Programming Interface:select_from_join_where()\ud83d\udfe2\n  activate Frontend Programming Interface\n  Frontend Programming Interface->>Algebra Layer:join()\ud83d\udfe2\n  activate Algebra Layer\n  note over Algebra Layer, B-Plus Tree Layer: ensure that index exists on Rel2\n  Algebra Layer->>B-Plus Tree Layer: bPlusCreate()\ud83d\udd35\n  activate B-Plus Tree Layer\n  B-Plus Tree Layer--\x3e>Algebra Layer: operation status\n  deactivate B-Plus Tree Layer\n  note over Algebra Layer: get attributes of source<br/>relations from attribute cache<br/>and create the target relation\n  loop for every record of Rel1\n    Algebra Layer->>Block Access Layer: project()\ud83d\udd35\n    activate Block Access Layer\n    Block Access Layer--\x3e>Algebra Layer: a record\n    deactivate Block Access Layer\n    loop for every record in Rel2 that matches the condition with the Rel1 record\n      Algebra Layer->>Block Access Layer: search()\ud83d\udd35\n      activate Block Access Layer\n      Block Access Layer->>B-Plus Tree Layer: bPlusSearch()\ud83d\udd35\n      activate B-Plus Tree Layer\n      B-Plus Tree Layer--\x3e>Algebra Layer: a record\n      deactivate B-Plus Tree Layer\n      deactivate Block Access Layer\n      note over Algebra Layer, Block Access Layer: insert matching record into target\n      Algebra Layer->>Block Access Layer: insert()\ud83d\udd35\n      activate Block Access Layer\n      Block Access Layer--\x3e>Algebra Layer: operation status\n      deactivate Block Access Layer\n    end\n  end\n  Algebra Layer--\x3e>User: operation status\n  deactivate Algebra Layer\n  deactivate Frontend Programming Interface\n  deactivate Frontend User Interface\n"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"The only class that you will be modifying in this stage is the class corresponding to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),". The class diagram is shown below."),(0,r.kt)("mermaid",{value:"classDiagram\n  class Algebra{\n    +insert(char relName[ATTR_SIZE], int nAttrs, char record[][ATTR_SIZE])$ int\ud83d\udd35\n\t\t+project(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE])$ int\ud83d\udd35\n\t\t+project(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], int tar_nAttrs, char tar_Attrs[][ATTR_SIZE])$ int\ud83d\udd35\n    +select(char srcRel[ATTR_SIZE], char targetRel[ATTR_SIZE], char attr[ATTR_SIZE], int op, char strVal[ATTR_SIZE])$ int\ud83d\udd35\n    +join(char srcRel1[ATTR_SIZE], char srcRel2[ATTR_SIZE], char targetRel[ATTR_SIZE], char attr1[ATTR_SIZE], char attr2[ATTR_SIZE])$ int\ud83d\udfe2\n  }"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer"),", we add the ",(0,r.kt)("inlineCode",{parentName:"p"},"join()")," function which receives two relations and the attributes on which an equi-join is to be performed. This function results in the creation of a target relation which is the join of both the source relations as we mentioned earlier."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Algebra/Algebra.cpp"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Algebra::join()")," function by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer#join"},"design docs"),".")),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Frontend#frontend-programming-interface"},"Frontend Programming Interface"),", we update the handlers of the functions to call the respective ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer")," methods."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#select--from-join-where"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT * FROM JOIN")," command")," maps to the function ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::select_from_join_where()"),". This function only involves a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Algebra::join()")," function that we implemented earlier."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/dml#select-attrlist-from-join-where"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT AttrList FROM JOIN")," command")," maps to the function ",(0,r.kt)("inlineCode",{parentName:"p"},"Frontend::select_attrlist_from_join_where()"),". This function involves a join operation as well as a projection operation. Thus, both the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Algebra%20Layer"},"Algebra Layer")," methods are called."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Frontend/Frontend.cpp"),(0,r.kt)("p",null,"Implement the following functions looking at their respective design docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Frontend#frontend--select_from_join_where"},(0,r.kt)("inlineCode",{parentName:"a"},"Frontend::select_from_join_where()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Design/Frontend#frontend--select_attrlist_from_join_where"},(0,r.kt)("inlineCode",{parentName:"a"},"Frontend::select_attrlist_from_join_where()"))))),(0,r.kt)("p",null,"And with that, we end our implementation of NITCbase! We've implemented a fully-fledged database with algebraic operations, schema operations, and worked with buffering disk blocks, caching, indexing and a whole lot more. Quite impressive! Hope you had fun building NITCbase this semester \u2764\ufe0f."),(0,r.kt)("p",null,"The only thing left to do is for you to evaluate your implementation with some exercises."),(0,r.kt)("p",null,"But, before that we need to cover the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User%20Interface%20Commands/test#function"},"FUNCTION command"),". This is a test command that is provided to you implement any other feature you want to implement. The Frontend User Interface will pass along any command beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"FUNCTION")," to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Design/Frontend#frontend--custom_function"},(0,r.kt)("inlineCode",{parentName:"a"},"Frontend::custom_function()"))," method. The implementation of this method is left entirely to your imagination."),(0,r.kt)("p",null,"Now, moving on to the exercises."),(0,r.kt)("h2",{id:"exercises"},"Exercises"))}d.isMDXComponent=!0}}]);