// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = (obj) => {
  // base cases: all primitives (except for strings) =>
    // convert to strings [no undefined in tests?]
  // objects (arrays, objectLits) =>
    // pull off braces/brackets and send elements back to base case

  // declare the string to begin building upon: assembledString;
  const baseCases = ['number', 'boolean', 'undefined', 'function'];
  let assembledString = '';

  const baseCaseConverterOrHigherLevelSplitter = obj => {
    // baseCase
    if (typeof obj !== 'object') {
      // check if obj type is a base case ? T => add to assembled string
      if (baseCases.includes(typeof obj)) assembledString += obj.toString();
      // wrap strings in quotes
      if (typeof obj === 'string') assembledString += `"${obj}"`;
      console.log('obj', obj);

    } else { // higherNode // objects
      // handle exception null = bugged up so needs special treatment: direct search
      if (obj === null) assembledString += 'null';
      // if array - filet out each element and send up to base case again
      if (Array.isArray(obj)) {
        // handle empty array exception 
        if (obj.length === 0) { 
          assembledString += '[]';
        } else {
          obj.forEach((val,i) => {
            console.log('obj, val', obj, val, typeof val);
            // console.log(baseCaseConverterOrHigherLevelSplitter(val));
            if (i === 0) assembledString += '['; // set opener
            if (i > 0) assembledString += ','; // set transition separator
            baseCaseConverterOrHigherLevelSplitter(val);
          });
          assembledString += ']'; // close array up at end
        }
      }
    }
      //   // if object - tear off brace
      //   // filet out each element and send up to base case again
      //   // drop on braces at both ends
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

