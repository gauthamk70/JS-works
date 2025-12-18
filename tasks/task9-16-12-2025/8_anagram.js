

//  Write a program to check whether two strings are anagrams using string methods.

function isAnagram(str1,str2){

    return str1.toLowerCase().split('').sort().join('')==str2.toLowerCase().split('').sort().join('')

}

console.log(isAnagram("dog","god"));
