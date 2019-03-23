//const fetch = require("node-fetch");
fetch(
  "https://api.bestbuy.com/v1/products(offers.type=deal_of_the_day)?apiKey=gO92rmSFU1CQOz9KzxHi7LQm&format=json&pageSize=15&show=name,image,salePrice&sort=bestSellingRank"
)
  .then(function(response) {
    return response.json();
  })
  .then(function what(myJson) {
    //variables
    let arr = [];
    let objectArray = myJson.products;
    let imageArr = [];
    let priceArr = [];
    let descriptionArr = [];

    //fill arrays with API data
    for (let i = 0; i < objectArray.length; i++) {
      arr.push(objectArray[i]);
      imageArr.push(arr[i].image);
      priceArr.push(arr[i].salePrice);
      descriptionArr.push(arr[i].name);
    }
    //return priceArr;
    function display() {
      console.log(imageArr, priceArr, descriptionArr);
    }
    display();

    //---------------------------
    //alert(priceArr);
    let basicH1 = document.getElementById("basicH1");
    let basicH2 = document.getElementById("basicH2");
    console.log(basicH1.innerHTML);
    basicH1.innerHTML = descriptionArr;
    console.log(basicH1.innerHTML);
    let button01 = document.getElementById("button01");
    let button02 = document.getElementById("button02");
    let blueButton = document.getElementById("blueButton");
    // function changeH1() {
    //   basicH1.innerHTML = "changed by magic";
    // }
    function count() {
      let arr = [];
      for (let i = 0; i < 11; i++) {
        arr.push(i);
      }
      basicH1.innerHTML = arr;
    }
    button01.addEventListener("click", changeH1);
    button02.addEventListener("click", count);
    blueButton.addEventListener("mouseover", makeBlue);
    
    //let image01 = document.getElementById("img01");
    
    function changeH1() {
      let image01 = document.getElementById("img01");
      
      
     
      //console.log(input);
      let count = Math.floor(Math.random() * imageArr.length);
      basicH1.innerHTML = descriptionArr[count];
      basicH2.innerHTML = "The actual price was: " + priceArr[count];
      image01.src = imageArr[count];
      
      //count++;
      //console.log(count);
    }
    let image01 = document.getElementById("img01");
    //let image02 = document.getElementById("img02");
    function makeBlue() {
      if (basicH1.classList.contains("blue")) {
        basicH1.classList.remove("blue");
      } else {
        basicH1.classList.add("blue");
      }
    }
  });
