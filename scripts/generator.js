function* gene(){
	let result = yield 2+2;
	console.log(result);
}

const geneinstance = gene();
console.log(geneinstance.next());
console.log(geneinstance.next(5))