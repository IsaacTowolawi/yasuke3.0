
let  carts = document.querySelectorAll('.add-cart');

let yasuke = [
    {

    name: "Volume 1",
    tag: "image1",
    price: 25,
    inStore: 0
},
    {

    name: "Volume 2",
    tag: "image2",
    price: 30,
    inStore: 0
},
    {

    name: "Volume 3",
    tag: "image3",
    price: 37,
    inStore: 0
}
];

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(yasuke[i]);
        totalCost(yasuke[i]);
    });
}

function onLoadCartNumbers() {
    let yasukeNumbers = localStorage.getItem('cartNumbers');

    if( yasukeNumbers ) {
        document.querySelector('.item span').textContent = yasukeNumbers;
    }
}

function cartNumbers(yasuke){
    let yasukeNumbers = localStorage.getItem("cartNumbers");
        yasukeNumbers = parseInt(yasukeNumbers)

    let yasukeItems = localStorage.getItem('yasukeInStore');
    yasukeItems = JSON.parse(yasukeItems);
    
  if (yasukeNumbers){
        localStorage.setItem("cartNumbers", yasukeNumbers + 1);
        document.querySelector(".item span").textContent = yasukeNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers" , 1 );
        document.querySelector(".item span").textContent = 1;
    }
    setItem(yasuke)
}

function setItem(yasuke){
    let yasukeItems = localStorage.getItem('yasukeInStore');
    console.log("My Items are", yasukeItems);
    yasukeItems = JSON.parse(yasukeItems);

    if (yasukeItems != null){
        let currentProduct = yasuke.tag;

        if( yasukeItems[currentProduct] == undefined) {
            yasukeItems = {
            ...yasukeItems,
            [currentProduct]: yasuke
            }
    }
    yasukeItems[currentProduct].inStore += 1;

    } else    {
        yasuke.inStore = 1;
        yasukeItems = {
            [yasuke.tag]: yasuke
        }
    }
    
    yasuke.inStore = 1
    localStorage.setItem("yasukeInStore", JSON.stringify (yasukeItems));
}

    function totalCost(yasuke){
    console.log("The total amount", yasuke.price + yasuke.price)
    let cartCost = localStorage.getItem('totalCost');

        if (cartCost){
            cartCost = parseInt(cartCost)
            localStorage.setItem("totalCost", cartCost + yasuke.price);
        } else if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem ("totalCost", cartCost + yasuke.price);
        } else {
        localStorage.setItem("totalCost", yasuke.price);
        }
}


function displayCart() {
  let yasukeItems = localStorage.getItem("yasukeInStore");
  yasukeItems = JSON.parse(yasukeItems);
  let productContainer = document.querySelector (".products-container");
 
  if(yasukeItems && productContainer ){
      productContainer.innerHTML = '';
      Object.values(yasukeItems).map(item =>{
          productContainer.innerHTML +=  `
          <div class="products">
          <ion-icon name="close-circle"></ion-icon>
          <img src="./img/${item.tag}.png" />
          <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inStore}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
          `
      });
  }
  
}

onLoadCartNumbers();
displayCart();
