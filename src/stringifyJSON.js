// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = (obj) => {
  // base cases: all primitives (except for strings) =>
    // convert to strings [no undefined in tests?]
  // objects (arrays, objectLits) =>
    // pull off braces/brackets and send elements back to base case

  // declare the string to begin building upon: assembledString;
  const baseCases = ['number', 'boolean', 'undefined', 'function']
  let assembledString = '';

  const baseCaseConverterOrHigherLevelSplitter = obj => {
    // baseCase
    if (typeof obj !== 'object') {
      // check if obj type is a base case ? T => add to assembled string
      if (baseCases.includes(typeof obj)) assembledString += obj.toString();
          
          // wrap in quotes
          // string,	 "string"

    } else { // objects
    //   // Object,	 "object"
    //   // handle exception null
    //   // null is bugged up so needs special treatment as direct search
      console.log('found!', obj);
      if (obj === null) assembledString += 'null';
    //   // if array - 
    //   // filet out each element and send up to base case again
    //   // drop on brackets at both ends
    //   // if (Array.isArray(obj))
    //   // higherNode
    //   // if object - tear off brace
    //   // filet out each element and send up to base case again
    //   // drop on braces at both ends
    }
      
  };
  // feed the trunk into the chipper
  baseCaseConverterOrHigherLevelSplitter(obj);
  // return all that was found    
  return assembledString;
};
    
const test = value => {
      console.log(JSON.stringify(value), ': ', typeof (value), '  arr?:', Array.isArray(value));
    }
// test('hello world');

const stringifiableObjects = [
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
// stringifiableObjects.map(test);

