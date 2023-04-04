// console.log('meal connected')
const loadmeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

loadmeal('rice');

const displayMeal = (meals) => {
    console.log(meals)
    //step 1:get container element for meal
    const mealContainer = document.getElementById('mealContainer')
    mealContainer.innerHTML = '';
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
                    <!-- Button trigger modal -->
                    <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                        View Details
                    </button>
                </div>
            </div>`
        //step 4: append the child
        mealContainer.appendChild(mealdiv)
    });
}

// search function
const searchMeals = () => {
    // console.log('btn clicked')
    //get search input from field
    const searchText = document.getElementById('search-input').value;
    console.log(searchText);
    //call the load meal function to show search result

    loadmeal(searchText)
}

//load meal details
const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => console.log(error))

}
//another way of fetch data from api
//use of asynce await
const loadMealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
}
//another way of fetch data from api with try catch
//use of asynce await
const loadMealDetails3 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0])
    }
    catch (error) {
        console.log(error);
    }
}

// display meal details
const displayMealDetails = data => {
    // console.log(data);
    document.getElementById('mealDetailsModalLabel').innerText = data.strMeal;
    document.getElementById('mealDetailsModalbody').innerHTML = `
    <img src="${data.strMealThumb}" class="card-img-top img-fluid" alt="...">`
}


