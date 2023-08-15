console.log('define start.');
const pro = new Promise((resolve, reject) => {
	console.log('exe...');
	setTimeout(() => {
		console.log('inner exe...')
		resolve(new Promise((innerResolve, innerReject) => {
			setTimeout(() => innerResolve('done.'), 3000);
		}))
	}, 5000)
	
})

pro.then((data) => {
	console.log(data);
})

console.log('define end.')