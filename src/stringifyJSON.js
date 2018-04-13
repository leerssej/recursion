// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = obj => {
  // base cases: all primitives to string (strings wrapped in ")
  // objects (null, arrays, objectLiterals) =>
  // log braces/brackets/separators and send elements back to baseCase

  // declare cases and string to begin building upon
  const baseCases = ['number', 'boolean'];
  const foulCases = ['functions', 'undefined'];
  let result = '';

  const baseCaseConverterOrHigherLevelSplitter = obj => {
    // baseCase
    if (typeof obj !== 'object') {
      // wrap strings in quotes
      if (typeof obj === 'string') return result += `"${obj}"`;
      // check if obj type is a base case ? T => add to assembled string
      if (baseCases.includes(typeof obj)) return result += obj.toString();
    }
     
    // higherNodes
    // handle null = bugged up so needs special treatment: direct search
    if (obj === null) return result += 'null';
      
    // array - filet out each element and send up to base case again
    if (Array.isArray(obj)) {
      // handle empty array exception 
      if (obj.length === 0) return result += '[]';
      
      obj.forEach((val, i) => {
        if (i === 0) result += '['; // set opener
        if (i > 0) result += ','; // set separator
        baseCaseConverterOrHigherLevelSplitter(val);
      });
      return result += ']'; // close array up at end
    }

    // Objects non-array
    // handle exception of empty object
    if (Object.keys(obj).length === 0) return result += '{}';
    
    Object.entries(obj).forEach((kvPr, i) => {
      if (i === 0) result += '{'; // set opener
      if (!foulCases.includes(kvPr[0])) { // check if has bad key
        if (i > 0) result += ','; // set separator
        baseCaseConverterOrHigherLevelSplitter(kvPr[0]); // key
        result += ':';
        baseCaseConverterOrHigherLevelSplitter(kvPr[1]); // value
      }
    });
    return result += '}'; // close array up at end
  }; 
  // feed the trunk into the chipper
  baseCaseConverterOrHigherLevelSplitter(obj);

  return result;
};
