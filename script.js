const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})




let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Living-Room-1-2000.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/IMG_8960-2000.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Premier-Deluxe-Twin-2000.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Grand-Deluxe-Double1-2000.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Bedroom-2000-1.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/IMG_8957-2000.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Bedroom-2-2000.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'PRODUCT NAME 6',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Premier-Deluxe-Twin-2000-1.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'PRODUCT NAME 6',
        image: 'https://peridotgrandhotel.com/wp-content/uploads/2022/07/Connecting-2000.jpg',
        price: 120000
    },
    {
        id: 10,
        name: 'PRODUCT NAME 6',
        image: 'https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 11,
        name: 'PRODUCT NAME 6',
        image: 'https://images.pexels.com/photos/7535060/pexels-photo-7535060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 12,
        name: 'PRODUCT NAME 6',
        image: 'https://images.pexels.com/photos/7535034/pexels-photo-7535034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 13,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6587906/pexels-photo-6587906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 14,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6492400/pexels-photo-6492400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 15,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6957084/pexels-photo-6957084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 16,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/5883738/pexels-photo-5883738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 17,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 18,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/7534539/pexels-photo-7534539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 19,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/4290711/pexels-photo-4290711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 20,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6957080/pexels-photo-6957080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 21,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/7005281/pexels-photo-7005281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 22,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/7512041/pexels-photo-7512041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 23,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/7031716/pexels-photo-7031716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 24,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6207819/pexels-photo-6207819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 25,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/6186815/pexels-photo-6186815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 26,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/5998055/pexels-photo-5998055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 27,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/12949619/pexels-photo-12949619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 28,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/8082228/pexels-photo-8082228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 29,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/5575832/pexels-photo-5575832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
    {
        id: 30,
        name: 'PRODUCT NAME 1',
        image: 'https://images.pexels.com/photos/4946767/pexels-photo-4946767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 120000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = 
            `<img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">BOOK NOW!</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
