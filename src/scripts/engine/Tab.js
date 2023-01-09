export default class Tab{

   constructor(){
      this.container = document.querySelector('body');
      this.header = document.querySelector('header');
      this.#render();
   }

   #render(){
      this.tab = document.createElement('div');
      this.tab.classList.add('tab-container');

      this.closeButton = document.createElement('img');
      this.closeButton.src = "../../../assets/xmark-solid.svg";
      this.closeButton.classList.add('close-button');

      this.title = document.createElement('h1');
      this.title.classList.add('title');
      this.banner = document.createElement('img');
      this.banner.classList.add('banner');
      this.body = document.createElement('p');
      this.body.classList.add('body');

      this.tab.append(this.closeButton, this.title, this.banner, this.body);
   }

   show(){
      this.header.style.visibility = "hidden";
      this.container.append(this.tab);
   }

   close(){
      this.header.style.visibility = "visible";
      this.container.remove(this.tab);
   }

}