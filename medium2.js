//Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 

//We can create a map that tallies the number of characters for each input string. Then, we can compare the maps to see if they are identical.
const str1 = 'Madonna of the Rocks';
const str2 = 'So dark the con of man';
const charCount = string => {
   const table = {};
   for (let char of string.replace(/\W/g, "").toLowerCase()) table[char] = table[char] + 1 || 1;
   return table;
};
const anagrams = (stringA, stringB) => {
   const charCountA = charCount(stringA); const charCountB = charCount(stringB);
   if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
      return false;
      for (let char in charCountA)
      if (charCountA[char] !== charCountB[char])
         return false;
      return true;
};
console.log(anagrams(str1, str2));