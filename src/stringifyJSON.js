// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = obj => {
  const foulCases = ['functions', 'undefined'];
  let result = '';
  if (typeof obj === 'string') return result += `"${obj}"`;
  if (typeof obj !== 'object' || obj === null) return String(obj);
    
  if (Array.isArray(obj)) {
    result += '[';
    obj.forEach((val, i) => {
      if (i > 0) result += ',';
      result += stringifyJSON(val);
    });
    return result + ']';
  }

  result += '{';
  Object.keys(obj).forEach((key, i) => {
    if (!foulCases.includes(key)) {
      if (i > 0) result += ',';
      result += `"${key}":${stringifyJSON(obj[key])}`;
    }
  });
  return result += '}';
};
