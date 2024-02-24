/*
1. new Set([1,1,2,2,3,4])
will retrun a Set(4) {1,2,3,4};

2. [...new Set("referee")].join("")
    will retrun a string ref;

3. let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);

    will return Map(2) {[1,2,3] => true}, {[1,2,3] => false}

*/

// hasDuplicate
const hasDuplicate = (arr) => {
  const arrSetArray = [...new Set(arr)];
  return arrSetArray.length !== arr.length;
};
// console.log(hasDuplicate([1,2,2,4,5,3,3]));

//vowelCount
const vowelCount = (string) => {
  const vowelsMap = new Map();
  const vowels = "aeiou";

  const stringArray = string.toLowerCase().split("");
  //iterate over string
  for (let i = 0; i < stringArray.length; i++) {
    
    if (vowels.includes(stringArray[i])) {
      let n = stringArray[i];
      if(!vowelsMap.has(n)) {
        vowelsMap.set(n, 1);   

        } else {
            vowelsMap.set(n,vowelsMap.get(n)+1)
        }
    }
  }

  return vowelsMap;
};

// console.log(vowelCount("One must always be alert"));
