import RenderTab from "../engine/RenderTab.js";

// Constants
const TAB_INTRO = "intro";

// Handle button clicks
document.querySelectorAll("*[target]").forEach(button=> button.addEventListener( 'click', e=>openTab(e) ));

function openTab(e){
   if(e.target.getAttribute('target') === TAB_INTRO) renderIntro();
}

function renderIntro(){
   const tabInstance = new RenderTab();
   tabInstance.setTitle("Intro");
   tabInstance.setVideoBanner("../../../assets/tab-1.mp4");
   tabInstance.addParagraph("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
   tabInstance.addParagraph("Gro vel suscipit facilis libero ipsam doloribus cupiditate vitae culpa!");
   tabInstance.show();
}
renderIntro();