import Tab from "./Tab.js";

export default class RenderTab extends Tab{
   constructor(){
      super();
   }

   setTitle(title){
      this.title.textContent = title;
      this.append(this.titleWrapper);
   }

   setBanner(src){
      this.banner.src = src;
      this.append(this.banner);
   }

   setVideoBanner(src){
      this.banner = document.createElement('iframe');
      this.banner.classList.add('banner');
      this.banner.src = src;
      this.append(this.banner);
   }

   addParagraph(text){
      this.paragraph = document.createElement('p');
      this.paragraph.textContent = text;
      this.append(this.paragraph);
   }
}