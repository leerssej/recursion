// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases: all primitives (except for strings) => convert to strings [no undefined in tests?]

  // typeof includes(
                  // Object,	 "object"
                  // boolean,	 "boolean"
                  // function, "function"
                  // number,	 "number"
                  // string,	 "string"
                  // undefined,"undefined"
  //)
    // (number, boolean, undefined, function) => toString
      // null is bugged so needs special treatment as direct search
    // string get wrapped in double quotes
    
  // objects - the branches (base cases get called on these)
  // Arrays 
    // if (Array.isArray(obj)) open brace, send back up to base case, close brace
  // Object Literals

};

const test = value => {
  console.log(JSON.stringify(value), ': ', typeof (value), '  arr?:', Array.isArray(value));
}

test('hello world');

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  { 'a': 'apple' },
  { 'foo': true, 'bar': false, 'baz': null },
  { 'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  { 'a': { 'b': 'c' } },
  { 'a': ['b', 'c'] },
  [{ 'a': 'b' }, { 'c': 'd' }],
  { 'a': [], 'c': {}, 'b': true }
];

stringifiableObjects.map(test);
