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
  const itemRef = document.createElement("li");
  itemRef.textContent = `${element}`;
  itemRef.classList.add("item");
  return listItems.push(itemRef);
});
console.log(listItems);

const itemRef = document.querySelector("ul#ingredients");
itemRef.append(...listItems);
