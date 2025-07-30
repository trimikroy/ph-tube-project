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
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => videoDisplay(data.videos))
    .catch((error) => console.log(error));
};

/*
{
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,
}


*/

// create display load content
const videoDisplay = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = " card bg-base-100 ";
    card.innerHTML = `
     
          <figure class = "h-[200px]">
            <img
              src=${video.thumbnail}
              alt="Shoes"
              class = " h-full w-full object-cover rounded-lg"
              />
          </figure>
          <div class="px-0 py-2 flex gap-2">
              <div>
                  <img class =" w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture}/>
              </div>
              <div>
                  <h2 class=" text-[16px] font-bold ">${video.title}</h2>
                 <div class = " flex  gap-2">
                    <p class = " text-[12px] text-gray-400"> ${video.authors[0].profile_name}</p>
                    <img class =" w-4 h-4 " src = "https://img.icons8.com/?size=100&id=59733&format=png&color=228BE6"/>
                 </div> 
                  <p class = " text-[12px] text-gray-400"> ${video.others.views}</p>

              </div>
          
          </div>

        `;

    videoContainer.append(card);
  });
};

loadCategories();
loadVideos();
