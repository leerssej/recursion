// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = (obj) => {
  // base cases: all primitives (except for strings) =>
    // convert to strings [no undefined in tests?]
  // objects (arrays, objectLits) =>
    // pull off braces/brackets and send elements back to base case

  // declare the string to begin building upon: assembledString;
  const baseCases = ['number', 'boolean'];
  const foulCases = ['functions', 'undefined'];
  let assembledString = '';

  const baseCaseConverterOrHigherLevelSplitter = obj => {
  //  if (!foulCases.includes(obj)) {
    // baseCase
    if (typeof obj !== 'object') {
      // check if obj type is a base case ? T => add to assembled string
      if (baseCases.includes(typeof obj)) return assembledString += obj.toString();
      // wrap strings in quotes
      if (typeof obj === 'string') return assembledString += `"${obj}"`;
      
    } else { // higherNode // objects
      // handle exception null = bugged up so needs special treatment: direct search
      if (obj === null) return assembledString += 'null';
      // if array - filet out each element and send up to base case again
      if (Array.isArray(obj)) {
        // handle empty array exception 
        if (obj.length === 0) { 
          return assembledString += '[]';
        } else {
          obj.forEach((val,i) => {
            if (i === 0) assembledString += '['; // set opener
            if (i > 0) assembledString += ','; // set separator
            baseCaseConverterOrHigherLevelSplitter(val);
          });
          return assembledString += ']'; // close array up at end
        }
      } else { // only object subtype that remains is Object literal
        // handle exception of empty object
        if (Object.keys(obj).length === 0) {
          return assembledString += '{}';
        } else {
          Object.entries(obj).forEach((kvPr, i) => {
          // drop on braces at both ends
            if (i === 0) assembledString += '{'; // set opener
            if (!foulCases.includes(kvPr[0])) { // check if has a good key
              // string out key value pairs
              if (i > 0) assembledString += ','; // set separator
              baseCaseConverterOrHigherLevelSplitter(kvPr[0]); // key
              assembledString += ':'; 
              baseCaseConverterOrHigherLevelSplitter(kvPr[1]); // value
              }
            }
          });
          return assembledString += '}'; // close array up at end
        }
      } // object literal 
    } // all objects
  //  }
  }; // baseCaseConverterFunction

  // feed the trunk into the chipper
  baseCaseConverterOrHigherLevelSplitter(obj);
  // return all that was found    
  return assembledString;
};
    
const test = value => {
      console.log(JSON.stringify(value), ': ', typeof (value), '  arr?:', Array.isArray(value));
    }
// test('hello world');

const stringyObjects = [
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
// stringyObjects.map(test);

