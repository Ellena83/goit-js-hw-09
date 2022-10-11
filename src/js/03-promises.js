// const delayFirst = document.querySelector('input[name=delay]');
// console.log(delayFirst)
// const delayStep = document.querySelector('input[name=step]');
// console.log(delayStep)
// const amount = document.querySelector('input[name=amount]');
// console.log(amount)

// const createPromise = (position, delay) => {
//   return new Promise((resolve, reject) => {
// setTimeout(() => {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     resolve( {position: position.id, delay: delayFirst.value} );
//     } 
//     else {
//      reject(position);
//   }
// }, delay)
//   })
// }

// const formRef = document.querySelector('.form');
// formRef.addEventListener('submit', () => {
//   createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// })



import { Notify } from "notiflix/build/notiflix-notify-aio";

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(evt.currentTarget.delay.value);
  const step = Number(evt.currentTarget.step.value);
  const amount = Number(evt.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    }
    reject({ position, delay });
  });
}