let dateOfBirth = document.querySelector("#dateOfBirth");
let luckyNumber = document.querySelector("#luckyNumber");
let checkBtn = document.querySelector("#btn");
let output = document.querySelector("#outputBox");

checkBtn.addEventListener("click", function isLucky() {
  let dob = dateOfBirth.value;
  let sum = calculateSum(dob);
  calculateLucky(sum);
});

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

function calculateLucky(sum) {
  const result = sum % luckyNumber.value;
  if (result === 0) {
   output.innerHTML = "Yes you are a lucky Guy 😇😇"
  } else {
    output.innerHTML = "NO!! luck is not today with you 😥😥 "
  }
}
