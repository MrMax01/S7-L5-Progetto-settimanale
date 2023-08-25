const eventId = new URLSearchParams(window.location.search).get("eventId");
if (eventId) {
  const btnAdd = document.getElementById("add");
  btnAdd.innerText = "Modifica";

  fetch();
} else {
  const btnAdd = document.getElementById("add");
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
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
          console.log("SUCCESS!");
        }
      })
      .catch((err) => console.log(err));
  });
}
