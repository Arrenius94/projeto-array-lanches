const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

let myLi = "";

function showAll(productsArray) {
  myLi = "";

  productsArray.forEach((product) => {
    myLi = 
      myLi +
      `
             <li>
                 <img src=${product.src}>
                 <p>${product.name}</p>
                 <p class="item-price">R$ ${product.price} </p>
             </li> 
        `;
  });
  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product, // Spread Operator
    price: product.price * 0.9, // dar 10% de desconto
  }));

  showAll(newPrices);
}

const sumAllItems = () => {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `
    <li>
       <p>O valor total dos items é de R$ ${totalValue}</p> 
    </li> 
`;
};

const filterAllItems = () => {
  const filterJustVegan = menuOptions.filter(
    (product) => product.vegan === true
  );

  showAll(filterJustVegan);
};

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems);
filterAll.addEventListener("click", filterAllItems);
