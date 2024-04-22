const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
function addItem() {
  const categorySelect = document.getElementById("categorySelect");
  const nameInput = document.getElementById("nameInput");
  const quantityInput = document.getElementById("quantityInput");
  // const h3 = document.querySelector("h3")

  const selectedCategory = categorySelect.value;
  const itemName = nameInput.value;
  const itemQuantity = Number(quantityInput.value);

  if (itemName === "") {
    alert("Please enter a name");
    return;
  }

  const categoryBox = document.getElementById(selectedCategory);
  const items = categoryBox.querySelector(".items");

  const newItem = document.createElement("div");
  newItem.classList.add("item");

  const itemContent = document.createElement("p");
  itemContent.classList.add("item-content");
  itemContent.innerHTML = itemName;

  const quantity = document.createElement("p");
  quantity.classList.add("quantity");
  quantity.innerHTML = itemQuantity;

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "&times;";
  removeButton.classList.add("remove-btn");
  removeButton.addEventListener("click", (e) => {
    items.removeChild(newItem);
  });

  newItem.appendChild(itemContent);
  newItem.appendChild(quantity);
  newItem.appendChild(removeButton);

  items.appendChild(newItem);

  nameInput.value = "";
  quantityInput.value = "";
}


