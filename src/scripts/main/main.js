import RenderTab from "../engine/RenderTab.js";

// Constants
const TAB_INTRO = "intro";

// Handle button clicks
document.querySelectorAll("*[target]").forEach(button=> button.addEventListener( 'click', e=>openTab(e) ));

function openTab(e){
   const tabInstance = new RenderTab();
   tabInstance.setTitle(e.target.getAttribute('target').toUpperCase());
   
   if(e.target.getAttribute('target') === TAB_INTRO) renderIntro(tabInstance);
}

function renderIntro(tabInstance){
   tabInstance.setVideoBanner("../../../assets/tab-1.mp4");
   tabInstance.addParagraph("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis iusto? Hic officiis perferendis neque asperiores quae eaque consequuntur velit.");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas explicabo odio soluta placeat esse recusandae reiciendis deleniti. Quaerat, sint!");
   tabInstance.show();
}
// TODO: Delete this
const tabInstance = new RenderTab();
tabInstance.setTitle("test");
renderIntro(tabInstance);