const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");
console.log(listRef);

// const listItems = images.map(({ url, alt }) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("gallery_item");
//   const linkEl = document.createElement("a");
//   linkEl.href = "#";
//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   linkEl.append(imgEl);
//   itemEl.append(linkEl);
//   return itemEl;
// });
// listRef.append(...listItems);

// console.log(listRef.innerHTML);

const listItems = images.map(({ url, alt }) => {
  return ` <li  class="gallery_item"><a href="#"><img src="${url}" alt="${alt}"></a></li>`;
});
console.log(listItems);

const listEl = listItems.join("");
console.log(listEl);

listRef.insertAdjacentHTML("afterbegin", listItems);
