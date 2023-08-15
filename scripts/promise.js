const aPromise = new Promise((resolve, reject) => {
	resolve({echo: "I resolved."});
})

aPromise.then((data) => {
	console.log('first then.');
	console.log('data: ',data);
	return data;
})
.then((data) => {
	console.log('second then.');
	console.log('data: ',data);
	throw new Error('error!');
})
.then((data) => {
	console.log('third then.');
	console.log('data: ',data);
})
// .catch((reason) => {
// 	console.log('catch.')
// 	console.log(reason);
// })
.then((data) => {
	console.log('finally then.');
	console.log('data: ',data);
}, (reason) => {
	console.log('finally then.');
	console.log('reason: ',reason);
})