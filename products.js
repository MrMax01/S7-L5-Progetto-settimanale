const products = [
  {
    imageUrl: "https://m.media-amazon.com/images/I/619luX-nOyL._AC_SL1000_.jpg",
    name: "ASUS X509JA-EJ026T",
    brand: "Asus",
    price: 369,
    description:
      "Argento Computer portatile 39,6 cm (15.6) 1920 x 1080 Pixel Intel® Core? i3 di decima generazione 4 GB 256 GB SSD Wi-Fi 5 (802.11ac) Windows 10 Home",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71fMZDz2sEL._AC_SL1500_.jpg",
    name: "Apple MacBook Air",
    brand: "Apple",
    price: 1369,
    description: "chip Apple M1 (13 pollici, 8 GB di RAM, SSD da 512 GB) - Grigio siderale",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/61-MaU+7hML._AC_SL1000_.jpg",
    name: "Lenovo Notebook",
    brand: "Leonovo",
    price: 295,
    description:
      "Monitor 15.6 pollici Full HD Intel Core N4500 fino a 2,8ghz Ram 8GB SSD 256GB Pacchetto Office Pro 2021 Windows 11 pro PRONTO ALL'USO - MOUSE WIRELESS e CHIAVETTA USB 32gb",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/61wTbavMKFL._AC_SL1200_.jpg",
    name: "OnePlus 10T",
    brand: "OnePlus",
    price: 619,
    description:
      "6GB RAM 256GB, Smartphone con 150W SUPERVOOC Endurance Edition e Sistema con Tripla Fotocamera 50MP, Jade Green",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71x5ntU43-L._AC_SL1500_.jpg",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 650,
    description:
      "Smartphone 256 GB + 12 GB Ram, Glyph Interface, Nothing OS 2.0, Doppia fotocamera 50 MP,OIS, Display LTPO OLED 6,7pollici, Batteria 4700 mAh, IP54, cellulare Android, Grigio scuro",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71QSGjXKagL._AC_SL1500_.jpg",
    name: "KODAK Mini 2 Retro 4PASS",
    brand: "Kodak",
    price: 110,
    description: "Stampante Fotografica Portatile (5.3x8.6cm) + Pacchetto con 68 Fogli, Bianco",
  },
];

// console.log("heeeeeeeeey");

// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTI5NTMzNDQsImV4cCI6MTY5NDE2Mjk0NH0.Vqq2KoBSxfnpNDdf5M-LAVWlmj4K2HJoEG6mY1n5Hsk",
//   },
//   body: JSON.stringify(prodotto), // body data type must match "Content-Type" header
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log("Prodotto aggiunto con successo!");
//     } else {
//       console.error("Si è verificato un errore:", response.status);
//     }
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// for (let i = 0; i < products.length; i++) {
//   fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTI5NTMzNDQsImV4cCI6MTY5NDE2Mjk0NH0.Vqq2KoBSxfnpNDdf5M-LAVWlmj4K2HJoEG6mY1n5Hsk",
//     },
//     body: JSON.stringify(products[i]), // body data type must match "Content-Type" header
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("Prodotto aggiunto con successo!");
//       } else {
//         console.error("Si è verificato un errore:", response.status);
//       }
//     })
//     .catch((error) => {
//       console.error("Errore nella richiesta:", error);
//     });
// }

// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   // method: "DELETE",
//   headers: {
//     // "Content-type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTI5NTMzNDQsImV4cCI6MTY5NDE2Mjk0NH0.Vqq2KoBSxfnpNDdf5M-LAVWlmj4K2HJoEG6mY1n5Hsk",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// fetch("https://striveschool-api.herokuapp.com/api/product/64e87cdd685ec4001450bc26", {
//   method: "DELETE",
//   headers: {
//     "Content-type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTI5NTMzNDQsImV4cCI6MTY5NDE2Mjk0NH0.Vqq2KoBSxfnpNDdf5M-LAVWlmj4K2HJoEG6mY1n5Hsk",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });
btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjkxOTEwYmNhMDAwMTQ1ODQwMTMiLCJpYXQiOjE2OTI5NTMzNDQsImV4cCI6MTY5NDE2Mjk0NH0.Vqq2KoBSxfnpNDdf5M-LAVWlmj4K2HJoEG6mY1n5Hsk",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: document.getElementById("price").value,
      brand: document.getElementById("brand").value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("SUCCESS");
      }
    })
    .catch((err) => console.log(err));
});
