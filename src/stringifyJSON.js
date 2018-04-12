// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases: all primitives (except for strings) =>
    // convert to strings [no undefined in tests?]
  // objects (arrays, objectLits) =>
    // pull off braces/brackets and send elements back to base case

// declare the string to begin building upon: assembledString;

// baseCase
  // typeof includes(
    // convert to string
      // (
      // boolean,	 "boolean"
      // function, "function"
      // number,	 "number"
      // undefined,"undefined"
      // )
    
   // wrap in quotes
     // string,	 "string"
   
// higherNode
   // Object,	 "object"
    // handle exception null
      // null is bugged up so needs special treatment as direct search
    // if array - 
      // filet out each element and send up to base case again
      // drop on brackets at both ends
    // if object - tear off brace
      // filet out each element and send up to base case again
      // drop on braces at both ends
  //)
    // (number, boolean, undefined, function) => toString
    // string get wrapped in double quotes
    
// return assembledString;
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
