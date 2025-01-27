var slider = document.getElementById('mySlider');
var output = document.getElementById('demo');

slider.oninput = function() {
  let age = this.value;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (age >= 0 && age <= 1) {
    ageLevel = 'infant';
  } else if (age >= 2 && age <= 4) {
    ageLevel = 'toddler';
  } else if (age >= 5 && age <= 12) {
    ageLevel = 'child';
  } else if (age >= 13 && age <= 19) {
    ageLevel = 'teen';
  } else if (age >= 20 && age <= 39 ) {
    ageLevel = 'adult';
  } else if (age >= 40 && age <= 59) {
    ageLevel = 'middle age adult';
  } else {
    ageLevel = 'senior adult'
  }

  checkStr = vowels.includes(ageLevel.charAt(0).toLowerCase());
  switch (checkStr) {
    case true:
      article = 'an';
      break;
    default:
      article = 'a';
  }

  output.innerHTML = 'The age ' + age + ' is ' + article + ' ' + ageLevel + '.';
}
