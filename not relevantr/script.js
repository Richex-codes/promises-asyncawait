let stock = {
  Fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts "],
};
let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve()
      }, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruit[0]}`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended shop is closed");
  }
}

kitchen();

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log('which toppings would you like'))
//     },3000)
//   })
// }

// async function kitchen (){
//   console.log('A')
//   console.log('B')
//   console.log('C')
//   await toppings_choice()
//   console.log('D')
//   console.log('E')

// }

// kitchen()

// console.log('cleaning the dishes')
// console.log('cleaning the tables')
// console.log('taking orders')

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc does not exist", error);
//   } finally {
//     console.log("run code anyway");
//   }
// }

// order();

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject("sorry shop is closed");
//     }
//   });
// };

// order(2000, () => console.log(`${stock.Fruit[0]} was selected`))
//   .then(() => {
//     return order(0000, () => {
//       console.log("production has started");
//     });
//   })

//   .then(() => {
//     return order(2000, () => console.log("the fruit has been chopped"));
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`);
//     });
//   })

//   .then(() => {
//     return order(1000, console.log("start the machine"));
//   })

//   .then(() => {
//     return order(2000, () => {
//       console.log(`ice cream placed on ${stock.holder[0]}`)
//     });
//   })

//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stock.toppings[0]} was selected`)
//     })
//   })

//   .then(() => {
//     return order(1000, () => console.log('ice cream was served'))
//   })

//   .catch(() => {
//     console.log('customer left')
//   })

// function order(fruit_name, callback) {
//   setTimeout(() => {
//     console.log(`${stock.Fruit[fruit_name]} was selected`);
//     callback();
//   }, 2000);
// }

// function production() {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {
//             console.log(`${stock.holder[0]} was selected`);

//             setTimeout(() => {
//               console.log(`${stock.toppings[0]} was added as toppings`);

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// }

// order(0, production);
