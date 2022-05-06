function foo () {
  return 42
}

function fiberwait () {
  return 42
}

const a = foo();
const b = fiberwait(Promise.resolve(42));
fiberwait(Promise.resolve(console)).log('Hello');
