import Tab from "./Tab.js";

export default class RenderTab extends Tab{
   constructor(){
      super();
   }

   setTitle(title){
      this.title.textContent = title;
   }
}