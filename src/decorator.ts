function DecorationTry(target: Function): void{
	console.log('try: ', target);
}


@DecorationTry
class BeDecoratedClass{
	constructor(private name: string){}
}
