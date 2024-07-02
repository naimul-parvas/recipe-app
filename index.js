const input = document.getElementById("input")
const search = document.getElementById("button")
const watch = document.getElementById("watch")
const viewRecipe = document.getElementById("view")

const newMeal = document.querySelector(".new-meal ")


function searchMeal(){

  
    if(input.value){
    
        console.log(input.value)
       
        let URL = `https://themealdb.com/api/json/v1/1/search.php?s=${input.value}`
        fetch(URL)
        .then(res => res.json())
         
        .then((meals) => showMeal(meals.meals));
        document.getElementById("noMeal").style.display = "none" ;
    }
    else{
        alert("search for a food first")
    }
   
}

function  showMeal(meals){
  console.log(meals)
   meals.forEach(meal => {

   
  newMeal.innerHTML +=
    `


 <div  class="  border border-gray-700 rounded-xl">
   <img
     src=${meal.strMealThumb}
     alt=""
     class="rounded h-[200px] w-full object-cover"
   />
   <div class="p-3">
     <h2 class="heading">${meal.strMeal}
      </h2>
     <p class="paragraph">
       
     </p>
     
     <a href=${meal.strYoutube} target="_blank" id="watch" class="btn p-2 mt-2  inline-block text-white bg-orange-400 rounded-md">Watch</a>
     <button class="btn ml-2" id="view">View Recipe</button>
   </div> 
   </div> 
`
   });
       
}


search.addEventListener("click", (e)=>{
    e.preventDefault()
   
    searchMeal()
    input.value = ""
    newMeal.innerHTML = ""
    
})



