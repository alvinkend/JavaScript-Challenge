function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "Bukan Palindrome";
    }
  }
  return "Palindrome";
}
console.log(palindrome("ibu ratna antar ubii"));
// palindrome("kasur ini rusakk");
// palindrome("A nut for a jar of tuna.");
// palindrome("Ibu Ratna antar ubi");
// palindrome("Borrow or rob?");
// palindrome("Was it a car or a cat I saw?");
// palindrome("Yo, banana boy!");
// palindrome("UFO tofu?");
