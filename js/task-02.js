const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = [];
ingredients.forEach((element) => {
  const items = document.createElement("li");
  items.textContent = `${element}`;
  items.classList.add("item");
  return listItems.push(items);
});
console.log(listItems);

const items = document.querySelector("ul#ingredients");
items.append(...listItems);
