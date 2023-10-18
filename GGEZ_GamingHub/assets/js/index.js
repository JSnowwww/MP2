function user(){
    let name = JSON.parse(sessionStorage.getItem("login"));
    let userName = document.getElementById("loginName");
    let startName = "";
    if(name) {
        name.forEach(
            (username) => {
                startName = ` Hi ${username.email}`;
            }
        )
    }

    userName.innerText = startName;   
}

function selectCategory() {
    let categories = document.querySelectorAll(".category");
    categories.forEach(function(category) {
        category.addEventListener("click", function(choose) {
            //set active category
            localStorage.setItem("category", choose.target.getAttribute("data-key"));
            window.location.href = "catalogue.html";
        })
    })
}

function showQuantity(){
    let quantityList = document.getElementById("quantity");
    let bilang = 0;
    let quantity = JSON.parse(localStorage.getItem("order"));
    if (quantity == null || quantity == ""){
        quantityList.innerHTML = bilang;
    }else{
        quantity.forEach(
            () => {
                bilang += 1;
            }
        );
        quantityList.innerHTML = bilang;
    }
}


function loginBtn(){
    let user = JSON.parse(sessionStorage.getItem("login"));

    if(user == null || user == ""){
        window.location.href = "login.html";
    }else{
        alert(`Already Logged In, Please Log-out to Proceed on other account`);
    }   
}

function logout(){
    let user = JSON.parse(sessionStorage.getItem("login"));
    let btn = document.getElementById("logoutBtn");
    let logoutBtn = "";

    if(user){
        logoutBtn = `<!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" style="font-size:12px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa fa-sign-out">
        </i> Log off
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">You are about to logoff..</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Are you sure, you want to Logoff?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="proceedLogout();">Confirm</button>
              </div>
            </div>
          </div>
        </div>`;
        btn.innerHTML = logoutBtn;
    }
}

function proceedLogout(){
    localStorage.removeItem("order");
    sessionStorage.removeItem("login");
    window.location.href = "index.html";
    btn.innerHTML = logoutBtn;
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    let x = document.getElementById("location");
    x.innerHTML = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
}


// search-box open close js code
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// // let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// // sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// let menuCloseBtn = document.querySelector(".nav-links .bx-x");
// menuOpenBtn.onclick = function() {
// navLinks.style.left = "0";
// }
// menuCloseBtn.onclick = function() {
// navLinks.style.left = "-100%";
// }


// // sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function() {
//  navLinks.classList.toggle("show1");
// }
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }

user();
selectCategory();
showQuantity();
logout();
getLocation();