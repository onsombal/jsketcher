
export function findDiff(arr1, arr2) {
  
  let both = [];
  let firstOnly = [];
  let secondOnly = [];
  
  for (let e1 of arr1) {
    for (let e2 of arr2) {
      if (e1 === e2) {
        both.push(e1);
      } 
    }    
  }

  for (let e1 of arr1) {
    if (both.indexOf(e1) === -1) {
      firstOnly.push(e1);
    }
  }

  for (let e2 of arr2) {
    if (both.indexOf(e2) === -1) {
      secondOnly.push(e2);
    }
  }

  return [both, firstOnly, secondOnly]
}

export function flatten(arr, result = [], depth, _currLevel) {
  _currLevel = _currLevel || 1;
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value) && depth && _currLevel !== depth) {
      flatten(value, result, depth, _currLevel ++);
    } else {
      result.push(value);
    }
  }
  return result;
}

export function indexArray(array, getKey, getValue = v => v) {
  let obj = {};
  array.forEach(item => obj[getKey(item)] = getValue(item))
  return obj;
}

export const EMPTY_ARRAY = Object.freeze([]);
