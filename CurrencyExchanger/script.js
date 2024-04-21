let fromCountry;
let toCountry;

let selectbox = document.querySelectorAll(".countrybox select");
let image = document.querySelectorAll("#flag");

for (let i = 0; i < selectbox.length; i++) {
  for (const key in countryList) {
    let newOption = document.createElement("option");
    selectbox[i].insertAdjacentElement("beforeend", newOption);
    newOption.innerHTML = key;
    newOption.value = key;
    if (key == "USD" && i == 0) {
      newOption.selected = "selected";
    } else if (key == "AUD" && i == 1) {
      newOption.selected = "selected";
    }

    selectbox[i].addEventListener("change", () => {
      // let currcode = e.target;
      const countrycode = countryList[key];
      image[i].src = `https://flagsapi.com/${countrycode}/flat/64.png`;
    });
  }
}

//EVENT LISTENER FOR THE EXCHANGE BUTTON

let exchangeButton = document.querySelector(".btn-exchange");
exchangeButton.addEventListener("click", async (e) => {
  let finalRate;

  fromCountry = selectbox[0].value;
  console.log(fromCountry);
  toCountry = selectbox[1].value;
  console.log(toCountry);

  e.preventDefault();
  let amount = document.querySelector(".amount");
  if (amount.value <= 0) {
    amount.value = 1;
  }
  console.log(amount.value);

  let response = await fetch(
    `https://api.frankfurter.app/latest?amount=10&from=${fromCountry}&to=${toCountry}`
  );
  let data = await response.json();
  let rates = data.rates[toCountry];
  finalRate = rates / 10;
  console.log(rates / 10);

  //Working with the amount

  let finalFromValue = amount.value;
  let finalToValue = (amount.value * finalRate).toFixed(3);
  console.log(finalToValue);

  // Working with the final result

  let finalfromCurr = selectbox[0].value;
  let finaltoCurr = selectbox[1].value;

  let result = document.querySelector(".result");
  result.innerHTML = `<h3>${finalFromValue}${finalfromCurr} = ${finalToValue}${finaltoCurr}</h3>`;
});





//API URL

// async function getApiResult() {
//   let response = await fetch(
//     `https://api.frankfurter.app/latest?amount=10&from=USD&to=AUD`
//   );
//   let data = await response.json();
//   console.log(data[3]);
// }

// getApiResult()


///SECOND APPROACH TO SELECT THE OPTIONS
// for (const key in countryList) {
//   let newOption = document.createElement("option");
//   selectbox[0].insertAdjacentElement("beforeend", newOption);
//   newOption.innerHTML = key;
//   if (key == "USD") {
//     newOption.selected = "selected";
//   }
//   selectbox[0];
// }
// for (const key in countryList) {
//   let newOption = document.createElement("option");
//   selectbox[1].insertAdjacentElement("beforeend", newOption);
//   newOption.innerHTML = key;
//   if (key == "NPR") {
//     newOption.selected = "selected";
//   }
// }