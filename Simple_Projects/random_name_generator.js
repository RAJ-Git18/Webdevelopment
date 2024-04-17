// crazy
// amazing
// fire

// engine
// food
// garments

// bros
// limited
// hub

console.log("New Business Name Generator");
let ad1 = "crazy";
let ad2 = "amazing";
let ad3 = "fire";
let shop1 = "engine";
let shop2 = "food";
let shop3 = "garments";
let another1 = "bros";
let another2 = "limited";
let another3 = "hub";

let adjective;
let shop_name;
let another_name;
let count = 3;

// console.log('Do you wanna generate a new random business name?(yes/no)');

do {
  random_adjective = Math.random();
  random_shop = Math.random();
  random_another_name = Math.random();

  if (random_adjective < 0.1) {
    adjective = ad1;
  } else if (random_adjective < 0.7) {
    adjective = ad2;
  } else {
    adjective = ad3;
  }

  if (random_shop < 0.1) {
    shop_name = shop1;
  } else if (random_shop < 0.7) {
    shop_name = shop2;
  } else {
    shop_name = shop3;
  }

  if (random_another_name < 0.1) {
    another_name = another1;
  } else if (random_another_name < 0.7) {
    another_name = another2;
  } else {
    another_name = another3;
  }

  count--;

  console.log(
    `Your new random business name is ${adjective} ${shop_name} ${another_name}`
  );
} while (count != 0);
