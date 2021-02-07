
const mealName = mealItems => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealItems}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealCard(data))
}

const searchMealItem = document.getElementById('searchBtn');
searchMealItem.addEventListener('click', () =>{
    const mealItem = document.getElementById('meal-item').value;
    mealName(mealItem);
})

const mealCard = meal =>{
    let searchMealItem = meal.meals;
    const mealItems = document.getElementById('displayMeal');
    searchMealItem.forEach(searchMealItem => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'div-arrange';

        const divInfo =`
            <div class="wholeItemDiv" onclick="mealDescription(${searchMealItem.idMeal})"> 
                <img class="wholeItemDivImg" src= "${searchMealItem.strMealThumb}">
                <h3>${searchMealItem.strMeal}</h3>
            </div>
         `;
        foodDiv.innerHTML = divInfo;
        mealItems.appendChild(foodDiv);
    });
}

    const mealDescription = idMeal => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => {
            selectedItem(data.meals[0])
        });
    }

const selectedItem = mealItem =>{
    console.log(mealItem);
    const foodItems = document.getElementById('clickDisplay');
    
    const ul = document.createElement('ul');
        const foodIngredients = `
        
        <div class="ShowAll">

            <h5>${mealItem.strMeal}</h5>
            <img class="clickDisplayImg" src= "${mealItem.strMealThumb}">
            
            <h5>Ingredients</h5>
            
            <ul class="listStyle">
                <li>1. ${mealItem.strIngredient1}</li>
                <li>2. ${mealItem.strIngredient2}</li>
                <li>3. ${mealItem.strIngredient3}</li>
                <li>4. ${mealItem.strIngredient4}</li>
                <li>5. ${mealItem.strIngredient5}</li>
            </ul>
        </div>

        `
        ul.innerHTML = foodIngredients;
        foodItems.appendChild(ul);
}