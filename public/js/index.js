 
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
 
 
 
 let all = container.querySelectorAll('.container__pokemons')
 let close = container.querySelectorAll('.container__close')

 
for(let i=0; i<all.length; i++){
	close[i].addEventListener("click", ()=>{
		all[i].remove()
	})
}


 