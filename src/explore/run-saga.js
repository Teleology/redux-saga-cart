// const { delay } = require('redux-saga');
// const createSagaMiddleware = require('redux-saga').default();
//
// const delayGenerator = function* () {
// 	const data1 = yield delay(1000, 1);
// 	console.info("Step 1");
//
// 	const data2 = yield delay(1000, 2);
// 	console.info("Step 2");
//
// 	const data3 = yield delay(1000, 1);
// 	console.info("Step 3");
//
// 	console.log(data1 + data2 + data3);
// 	return data1 + data2 + data3;
// }

// const gen = delayGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(createSagaMiddleware);
// createSagaMiddleware().run(delayGenerator);