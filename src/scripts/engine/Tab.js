export default class Tab{

   constructor(){
      this.container = document.querySelector('body');
      this.header = document.querySelector('header');
      this.#render();
   }

   #render(){
      this.tab = document.createElement('div');
      this.tab.classList.add('tab-container');

      this.tabWrapper = document.createElement('div');
      this.tabWrapper.classList.add('tab-wrapper');
      
      this.titleWrapper = document.createElement('div');
      this.titleWrapper.classList.add('title-wrapper');
      this.closeButton = document.createElement('img');
      this.closeButton.src = "../../../assets/xmark-solid.svg";
      this.closeButton.classList.add('close-button');
      this.closeButton.addEventListener('click', e=>this.close());

      this.title = document.createElement('h1');
      this.title.classList.add('title');
      this.titleWrapper.append(this.title, this.closeButton);

      this.banner = document.createElement('img');
      this.banner.classList.add('banner');
      this.body = document.createElement('p');
      this.body.classList.add('body');

      this.tab.append(this.tabWrapper);
   }

   show(){
      this.header.style.visibility = "hidden";
      this.container.append(this.tab);
   }

   close(){
      this.header.style.visibility = "visible";
      this.container.removeChild(this.tab);
   }

   append(element){
      this.tabWrapper.append(element);
   }

}