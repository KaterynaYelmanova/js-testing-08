const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "gallery-item");

  const link = document.createElement("a");
  link.setAttribute("class", "gallery-link");
  link.setAttribute("href", image.original);

  const img = document.createElement("img");
  img.setAttribute("class", "gallery-image");
  img.setAttribute("src", image.preview);
  img.setAttribute("data-source", image.original);
  img.setAttribute("alt", image.description);

  link.appendChild(img);
  galleryItem.appendChild(link);
  fragment.appendChild(galleryItem);
});
galleryList.appendChild(fragment);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName === "IMG") {
    //підключаємо бібліотеку
    const instance = basicLightbox.create(
      ` <img src="${event.target.dataset.source}"
        width="800" height="600"> `,
      {
        onShow: (instance) => {
          const keydownHandler = function (event) {
            if (event.key === "Escape") {
              instance.close();
              document.removeEventListener("keydown", keydownHandler);
            }
          };
          document.addEventListener("keydown", keydownHandler);
        },
      }
    );
    instance.show();
  }
});

//локальне сховище

//console.log(window.localStorage);
// Storage {length: 0}

localStorage.setItem("ui-theme", "light");
console.log(localStorage); // Storage {ui-theme: "light", length: 1}

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object

//видалення даних---------------------------------

/*localStorage.setItem("ui-theme", "dark"); //тут додаємо
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme"); //тут видаляємо
console.log(localStorage.getItem("ui-theme")); // null*/

//повністю очистити-------------------------------

/*localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

localStorage.clear(); //очистка
console.log(localStorage); // Storage {length: 0}*/

//сховище сесії-------------------------------

console.log(window.sessionStorage); // Storage {length: 0}

sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

//так можна читати методом getItem(key)
const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

//видаляти елементи за ключем і очищати сховище цілком методами
//removeItem(key) і clear() відповідно.

/*sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}*/
