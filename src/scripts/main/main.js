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
   tabInstance.show();
}
renderIntro();