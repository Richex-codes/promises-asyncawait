// Callbacks
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback();
//   }, 5000);
// }

// fetchData(() => {
//   console.log("Callback executed");
// });

// function spreadPeanutButter(callback) {
//   setTimeout(() => {
//     console.log("Peanut butter spread!");
//     // callback()
//   });
// }

// function addJelly(callback) {
//   setTimeout(() => {
//     console.log("Jelly added!");
//     callback();
//   });
// }

// function makeSandwich() {
//   spreadPeanutButter(() => {
//     addJelly(() => {
//       console.log("Sandwich is ready");
//     });
//   });
// }

// makeSandwich();

function spreadPeanutButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                console.log('Peanut butter spread!')
                resolve()
            } else {
                reject('Oops! Something went wrong')
            }
        }, 1000)
    })
}

function addJelly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                console.log('Jelly added')
                resolve()
            } else {
                reject('Oops! Something went wrong')
            }
        }, 1000)
    })
}

function makeSandwich() {
    spreadPeanutButter()
        .then(() => addJelly())
        .then(() => console.log('Sandwich is ready'))
        .catch( error => console.error(error))
}

makeSandwich()

// Creating promises
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve('Number is positive')
        } else {
            reject('Number is negative')
        }
    })
}

checkNumber(Math.random())
    .then( result => {
        console.log(result)
    })
    .catch( error => {
        console.error(error)
    })

// Consuming Promises
// function stepOne() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Step One Completed');
//         }, 1000);
//     });
// }

// function stepTwo(message) {
//     console.log(message)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Step two Completed');
//         }, 2000);
//     });
// }

// stepOne()
//     .then(stepTwo)
//     .then( result => {
//         console.log(result)
//     })

// Queuing promises

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// console.log('Start');

// delay(1000)
//     .then(() => console.log('Promise 1 resolved'));

// delay(500)
//     .then(() => console.log('Promise 2 resolved'));

// console.log('End');

// async/await
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved after 2 seconds');
//         }, 5000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall()

//Error handling
// function asyncTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.random();
//             if (randomNumber > 0.5) {
//                 resolve('Task completed successfully');
//             } else {
//                 reject(new Error('Task failed'));
//             }
//         }, 1000);
//     });
// }

//   // Usage
// asyncTask()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
