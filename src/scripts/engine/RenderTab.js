import Tab from "./Tab.js";

export default class RenderTab extends Tab{
   constructor(){
      super();
   }

   setTitle(title){
      this.title.textContent = title;
      this.tabWrapper.append(this.title);
   }

   setBanner(src){
      this.banner.src = src;
      this.tabWrapper.append(this.banner);
   }

   setVideoBanner(src){
      this.banner = document.createElement('video');
      this.banner.classList.add('banner');
      this.banner.src = src;
      this.tabWrapper.append(this.banner);
   }

   addParagraph(text){
      this.paragraph = document.createElement('p');
      this.paragraph.textContent = text;
      this.tabWrapper.append(this.paragraph);
   }
}