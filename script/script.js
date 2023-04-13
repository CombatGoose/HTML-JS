//Save elements which we need in lets
let buttons = document.querySelectorAll("button")
let cart = document.querySelector("#cart")
let deleteEl = document.querySelector("#delete")
let headerBlock = document.querySelector("#headerBlock")

//Create an empty object to save information in it
let saveInf = {
  name: undefined,
  age: undefined,
  mail: undefined,
}

//Create prompts which will take information from user
let username, age, mail

//Create a function which will add the product card to cart when user clicks
buttons.forEach((btn) => {
  btn.onclick = () => {
    const checkInf = (btn) => {

      while (true) {
        if(saveInf.name == undefined) {
          username = prompt("Введіть ваше ім'я")
          age = prompt("Введіть ваш вік")
          mail = prompt("Введіть вашу електронну адресу")
  
          //Save all messages with the small letters
          username = username.toLowerCase()
          age = age.toLowerCase()
          mail = mail.toLowerCase()
  
          saveInf.name = username
          saveInf.age = age
          saveInf.mail = mail  
        }
        //Create a "if" which check all information which we need
        if (username.length > 0) {

          if(saveInf.name == undefined) {
            headerBlock.innerHTML = `<p>Поки у вас немає профілю ${saveInf}</p>`
          } else {
            headerBlock.innerHTML = `<p>Username: ${saveInf.name} <br> Age: ${saveInf.age} <br> Email: ${saveInf.mail}</p>`
          }

          //Add element to the cart when user click on the button 
          cart.innerHTML += `
            <div class="product_card">

              <img src="../img/macbook.png" alt="">
              <p>Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A</p>
              <div class="stars">
                <div class="star_wrapper">
                  <img src="../img/Star 1.svg" alt="">
                  <p class="star-text">4,5</p>
                </div>
                <p class="respond">83 відгуки</p>
              </div>
              <p>Артикул: 879876</p>
              <p>В наявності: 13</p>
              <p class="sum">85499,41</p>
              <button class="delete">Видалити з кошику</button>
            </div>
          `
          //Make button inacrive when user clicks on it
          btn.setAttribute('disabled', true)

          break;
        } else {
          saveInf = {
            name: undefined,
            age: undefined,
            mail: undefined,
          }
        }
      }
    }

    checkInf(btn)
  }
});

//Function which will delete all element in the cart and make buttons active when user clicks
deleteEl.onclick = () => {

  //Delete all elements from the cart
  cart.innerHTML = ""

  //Make buttons active
  buttons.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
};