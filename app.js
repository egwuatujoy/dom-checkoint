const heartBtn = document.querySelectorAll(".fa-heart");
const addBtn = document.querySelectorAll(".gadget-btn");
const cartAmount = document.querySelector(".cart-amount");
const plus = document.querySelectorAll(".gadget-plus");
const minus = document.querySelectorAll(".gadget-minus");
const cartContainer = document.querySelector(".cart-container");
const cartWindow = document.querySelector(".cartWindow");

heartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fa-solid");
    btn.classList.toggle("bop");
  });
});

plus.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    parent.querySelector(".cart-quantity").textContent++;
  });
});

minus.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const quantity = parent.querySelector(".cart-quantity");
    if (quantity.textContent > 0) {
      quantity.textContent--;
    }
  });
});

addBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const quantity =
      e.target.parentNode.parentNode.querySelector(
        ".cart-quantity"
      ).textContent;

    cartAmount.textContent =
      parseInt(cartAmount.textContent) + parseInt(quantity);

    const section = e.target.parentNode.parentNode.parentNode.parentNode;
    console.log(section);

    if (section.querySelector(".cart-quantity").textContent > 0) {
      const item = document.createElement("div");
      item.classList.add("item");
      const img = document.createElement("img");
      img.src = section.querySelector(".gadget-pic").getAttribute("src");
      const content = document.createElement("div");
      content.classList.add("content");
      item.append(img);
      const h3 = document.createElement("h3");
      h3.textContent = section.querySelector("h1").textContent;
      const h5 = document.createElement("h5");
      h5.textContent = section.querySelector("p").textContent;
      const counter = document.createElement("div");
      counter.classList.add("counter");
      const itemPlus = document.createElement("button");
      itemPlus.classList.add("itemPlus");
      itemPlus.textContent = "+";
      const itemMinus = document.createElement("button");
      itemMinus.classList.add("itemMinus");
      itemMinus.textContent = "-";
      const itemQuantity = document.createElement("p");
      itemQuantity.classList.add("itemQuantity");
      itemQuantity.textContent =
        section.querySelector(".cart-quantity").textContent;
      counter.append(itemMinus);
      counter.append(itemQuantity);
      counter.append(itemPlus);
      content.append(h3);
      content.append(h5);
      content.append(counter);
      item.append(content);
      cartWindow.append(item);
    }
  });
});

cartContainer.addEventListener("click", () => {
  cartWindow.classList.toggle("displayToggle");
});
