window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};

const myData = new Array();

var swiper = new Swiper(".mySwiper", {
  observer: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
    },
  },
  mousewheel: true,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
});

function myPopup() {
  let popup = document.getElementById("myPopup");
  let div = document.getElementById("popup");
  div.style.display = "block";
  popup.classList.toggle("show");
  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}

//Get Special

const getSpecial = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");
  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts["Size Özel"];

      let card = document.querySelector("#swiper-wrapper");
      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide "><div class="card list_item">
        <img  loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas.name}</h5>
          <br/>
          <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
          <br/>
          <br class='none'/>
          
          <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
          <br class='none' />
          <br/>
          <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
        </div>
      </div></div>
       
      `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
        <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas.name}</h5>
          <br/>
          <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
          <br/>
          <br class='none'/>
          <br class='none' />
          <br/>
          <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
        </div>
      </div></div>
       
      `);
        }
      });
    });
};
fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let specialData =
      data.responses[0][0].params.recommendedProducts["Size Özel"];

    let card = document.querySelector("#swiper-wrapper");
    specialData.map((datas) => {
      if (datas.params.shippingFee === "FREE") {
        return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
        <img  loading="lazy" src=${datas.image} class="card-img-top img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas.name}</h5>
          <br/>
          <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
          <br/>
          <br class='none'/>
          
          <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
          <br class='none' />
          <br/>
          <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
        </div>
      </div></div>
       
      `);
      } else {
        return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
        <img loading="lazy" src=${datas.image} class="card-img-top img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas.name}</h5>
          <br/>
          <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
          <br/>
          <br class='none'/>
          <br class='none' />
          <br/>
          <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
        </div>
      </div></div>
       
      `);
      }
    });
  });

//  Get  Workshop

const getWorkShop = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");
  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts[
          "Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"
        ];

      let card = document.querySelector("#swiper-wrapper");
      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        
        <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        }
      });
    });
};

//Get Mobilya

const getMobilya = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");
  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts[
          "Ev, Dekorasyon, Bahçe > Mobilya"
        ];

      let card = document.querySelector("#swiper-wrapper");

      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        
        <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        }
      });
    });
};

//Get Sağlık

const getSaglik = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");

  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts[
          "Kozmetik & Kişisel Bakım > Sağlık, Medikal"
        ];

      let card = document.querySelector("#swiper-wrapper");
      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        
        <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        }
      });
    });
};

//Get Pc

const getPc = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");
  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts[
          "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
        ];

      let card = document.querySelector("#swiper-wrapper");
      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        
        <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        }
      });
    });
};

//Get Isitma

const getIsitma = async (event) => {
  let card = document.querySelector("#swiper-wrapper");
  card.innerHTML = null;
  let btn = document.getElementById(event.target.id);
  btn.setAttribute("class", "btn btn-primary");

  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let specialData =
        data.responses[0][0].params.recommendedProducts[
          "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
        ];

      let card = document.querySelector("#swiper-wrapper");
      specialData.map((datas) => {
        if (datas.params.shippingFee === "FREE") {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        
        <p class="card-text"> <i class="fas fa-truck"></i>  Ücretsiz Kargo</p>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        } else {
          return (card.innerHTML += `<div class="swiper-slide col-12"><div class="card list_item">
      <img loading="lazy" src=${datas.image} class="card-img-top lazy" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datas.name}</h5>
        <br/>
        <div class="price-band bg-light"><h2 class="bg-light "> ${datas.price} TL</h2></div>
        <br/>
        <br class='none'/>
        <br class='none' />
        <br/>
        <button onclick="myPopup()" class='btn btn-success'>Sepete Ekle</button>
      </div>
    </div></div>
     
    `);
        }
      });
    });
};

const notClicked = (event) => {
  let btn = document.getElementById(event.target.id);
  btn.removeAttribute("class");
  btn.setAttribute("class", "btn");
};
