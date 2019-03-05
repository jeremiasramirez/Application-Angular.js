 
let modul = function(){
	let appModule = angular.module('moduleApp',[]);

	appModule.controller('appController',function(){

		 this.pokemons={
		 	nombre: 'Bulbasaur',
		 	ides: 1,
		 	species: 'Seed pokemons',
		 	tipo: ['Overgrown' , 'Grown'],
		 	peso: '3.2',
		 	altura: '6'

		 }
})

	appModule.controller('appControllerPrice',function(){
		this.price={
			priceName: 'Price',
			priceValue: '12.80'
		}

	})



}

modul()






 
 let logoClick = document.getElementById("main__logo__js")
 
 
 	logoClick.addEventListener("click",function(){
 	 
 	
 		if(window.scrollY > 0){

 				window.scroll(0,0)
 			 	
 		}
 	},false);




let container= document.getElementById("container__controll");

let Close = container.querySelectorAll("div")
 
	for(let i=0;i<Close.length; i++){
		 Close[i].addEventListener("click",(e)=>{
  	 		 Close[i].remove();
  	 		 let container= document.getElementById("message");
  	 		 let message= document.createElement("p");
  	 		 	message.textContent= "Eliminado";
  	 		 	message.classList.add("trans")
  	 		 	// message.style.top=window.scrollY+'px';
  	 		 	container.appendChild(message);
  	 		 	let timeAnimation = setTimeout(()=>{
  	 		 	message.classList.add("scale");
  	 		 		
  	 		 	},1000)
  	 		 	let timeDelete = setTimeout(()=>{
  	 		 	 
  	 		 		// message.remove();
  	 		 	},2000)
  			},false)
	}
 
  





 