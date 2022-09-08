const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const element = item.querySelectorAll("li");
  console.log(`Elements: ${element.length}`);
});
