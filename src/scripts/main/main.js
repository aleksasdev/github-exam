import RenderTab from "../engine/RenderTab.js";

// Constants
const TAB_INTRO = "intro";
const TAB_WORK = "work";
const TAB_ABOUT = "about";
const TAB_CONTACT = "contact";

// Handle button clicks
document.querySelectorAll("*[target]").forEach(button=> button.addEventListener( 'click', e=>openTab(e) ));

function openTab(e){
   const tabInstance = new RenderTab();
   tabInstance.setTitle(e.target.getAttribute('target').toUpperCase());
   
   if(e.target.getAttribute('target') === TAB_INTRO) renderIntro(tabInstance);
   if(e.target.getAttribute('target') === TAB_WORK) renderWork(tabInstance);
   if(e.target.getAttribute('target') === TAB_ABOUT) renderAbout(tabInstance);
   if(e.target.getAttribute('target') === TAB_CONTACT) renderContact(tabInstance);
}

function renderIntro(tabInstance){
   tabInstance.setVideoBanner("../../../assets/tab-1.mp4");
   tabInstance.addParagraph("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis iusto? Hic officiis perferendis neque asperiores quae eaque consequuntur velit.");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas explicabo odio soluta placeat esse recusandae reiciendis deleniti. Quaerat, sint!");
   tabInstance.show();
}
function renderWork(tabInstance){
   tabInstance.setBanner("../../../assets/tab-2.jpg");
   tabInstance.addParagraph("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis iusto? Hic officiis perferendis neque asperiores quae eaque consequuntur velit.");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas explicabo odio soluta placeat esse recusandae reiciendis deleniti. Quaerat, sint!");
   tabInstance.show();
}
function renderAbout(tabInstance){
   tabInstance.setBanner("../../../assets/tab-3.jpg");
   tabInstance.addParagraph("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis iusto? Hic officiis perferendis neque asperiores quae eaque consequuntur velit.");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas explicabo odio soluta placeat esse recusandae reiciendis deleniti. Quaerat, sint!");
   tabInstance.show();
}
function renderContact(tabInstance){
   tabInstance.setBanner("../../../assets/tab-4.jpg");
   tabInstance.addParagraph("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis iusto? Hic officiis perferendis neque asperiores quae eaque consequuntur velit.");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas explicabo odio soluta placeat esse recusandae reiciendis deleniti. Quaerat, sint!");
   tabInstance.show();
}
// TODO: Delete this
const tabInstance = new RenderTab();
tabInstance.setTitle("test");
renderIntro(tabInstance);