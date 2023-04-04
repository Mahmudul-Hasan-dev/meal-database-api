// console.log('meal connected')
const loadmeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}
loadmeal();

const displayMeal = (meals) => {
    console.log(meals)
    //step 1:get container element for meal
    const mealContainer = document.getElementById('mealContainer')
    meals.forEach(meal => {
        // console.log(meal)
        //step 2:create element for meal
        const mealdiv = document.createElement('div')

        //step 2.5: add class if you want
        // mealdiv.classList.add('col')
        mealdiv.classList = "col"

        //step 3: set content of the child element
        mealdiv.innerHTML = `
         <div class="card h-100">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${meal.strMeal}</h5>
                    <div class="car-text">
                         <p class="">Category: ${meal.strCategory}</p>
                        <p class="">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>`
        //step 4: append the child
        mealContainer.appendChild(mealdiv)
    });
}