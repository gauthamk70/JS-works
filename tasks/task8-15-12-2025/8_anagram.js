// ⿨ Write a program to check whether two strings are anagrams.
function isAnagram(str1,str2){
    return str1.split('').sort().join()==str2.split('').sort().join()
}
console.log(isAnagram("dog","god"));
console.log(isAnagram("dog","godd"));
console.log(isAnagram("listen","silent"));
