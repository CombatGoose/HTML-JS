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
  btn.addEventListener("click", () => {
    const checkInf = (btn) => {

      while (true) {
        if (saveInf.name == undefined) {
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
        if (username.length > 0 && isNaN(username) == true && age.length > 0 && isNaN(age) == false && mail.length > 10 && mail.endsWith("@gmail.com")) {

          if (saveInf.name == undefined) {
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
          //Make button inactive when user clicks on it
          btn.setAttribute('disabled', true)

          //Save button from .innerHTML
          let deleteButtons = document.querySelectorAll(".delete")

          deleteButtons.forEach((deleteButton) => {
            //Delete parent element when user clicks on delete button
            deleteButton.addEventListener("click", () => {
            let productCard = deleteButton.parentNode
            productCard.parentNode.removeChild(productCard)
        
           //Remove attribute "disabled" to do button active
           btn.removeAttribute("disabled")
            })
          })

          break
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
  })
})

//Function which will delete all element in the cart and make buttons active when user clicks
deleteEl.onclick = () => {

  //Delete all elements from the cart
  cart.innerHTML = ""

  //Make buttons active
  buttons.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
}

//Change theme

//Create lets to change styles
let themeWrapper = document.querySelector("#theme-wrapper")
let theme = document.querySelector("#theme")
let lorems = document.querySelectorAll(".lorem")
let header = document.querySelector("header")
let main = document.querySelector("main")
let product = document.querySelector(".product_card")
let respond = document.querySelector(".respond")
let sum = document.querySelector(".sum")

//Create a let to understand which theme is selected
let light = true

//Create a function which change a theme
const changeTheme = () => {
 if(light) {
  themeWrapper.innerHTML = ""
  themeWrapper.innerHTML += `<img src="./img/moon-svgrepo-com.svg" alt="moon">`

  //Lorem
  lorems.forEach((lorem) => {
    lorem.classList.replace("lorem", "dark_lorem")
  })

  //Header
  header.classList.add("dark_header")

  //Header profile block
  headerBlock.classList.replace("profile", "dark_profile_block")

  //Main
  main.classList.add("dark_main")

  //Product card
  product.classList.replace("product_card", "dark_product_card")
    
  //Respond
  respond.classList.replace("respond", "dark_p")

  //Sum
  sum.classList.replace("sum", "dark_p")

  light = false
  } else {
    themeWrapper.innerHTML = ""
    themeWrapper.innerHTML += `<img id="theme" src="./img/sun-svgrepo-com.svg" alt="sun">`
   
    //Lorem
    lorems.forEach((lorem) => {
      lorem.classList.replace("dark_lorem", "lorem")
    })

    //Header
    header.classList.remove("dark_header")

    //Header profile block
    headerBlock.classList.replace("dark_profile_block", "profile")

    //Main
    main.classList.remove("dark_main")
  
    //Product
    product.classList.replace("dark_product_card", "product_card")
      
    //Respond
    respond.classList.replace("dark_p", "respond")
    
    //Sum
    sum.classList.replace("dark_p", "sum")
   
    light = true
  }
}

//Start "changeTheme" when user clicks
themeWrapper.addEventListener("click", changeTheme)