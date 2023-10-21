let cardNumber = document.getElementById("cardNumber");
let images = document.getElementById("images");
let wrapper = document.querySelector(".wrapper");
let loading = document.getElementById("loading");
let failed = document.getElementById("failed");
let emoji = document.getElementById("emoji");
let title = document.getElementById("title");

let url = "https://jsonplaceholder.typicode.com/photos";

async function imgFunc() {
  try {
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(`${emoji} ${failed}`);

    let dataObj = await resp.json();
    let twelveImg = dataObj.splice(0, 12);
    cardNumber.innerText = `(${twelveImg.length}) Products`;

    twelveImg.map(img => {
      const item = document.createElement("div");
      item.classList.add("cards");
      item.innerHTML = `
    <img  class="images" src="${img.url}" alt="" /> 
    <h3>${img.title}</h3>`;

      wrapper.appendChild(item);
    });
  } catch (err) {
    failed.style.display = "block";
    emoji.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
}

imgFunc();
