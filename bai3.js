function foo(x, y, z) {
	console.log(x, y, z);
}

const foo = (x, y, z) => console.log(x, y, z);

foo(1, 2, 3);

function foo() {
	alert('Hello');
}

const foo = () => alert('hello');

foo();

function foo(a, b) {
	let m = a + b * 100;
	return m;
}

const foo = (a, b) => a + b * 100;

console.log(foo(2, 5));