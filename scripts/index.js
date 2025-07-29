// fetch, load and show categories on html

// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create displayCategories
const displayCategories = (categories) => {
  const createContainer = document.getElementById("categories-Container");

  // add data in html
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const buttonCategories = document.createElement("button");
    buttonCategories.classList = "btn";
    buttonCategories.innerText = item.category;

    //add button to category container
    createContainer.append(buttonCategories);
  });
};


//create video load content
const loadVideos = () =>{
    fetch('')
}


// create display load content 

loadCategories();
