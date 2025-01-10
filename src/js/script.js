const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const regex = /^1?\s?(\(\d{3}\)|\d{3})([\s-]?)\d{3}\2\d{4}$/;

checkBtn.addEventListener("click", (e) => {
  const number = userInput.value;
  const divResult = document.getElementById("results-div");

  if (number === "") {
    alert("Please provide a phone number");
    return;
  } else {
    resultsDiv.innerHTML = `${
      regex.test(number) ? "Valid" : "Invalid"
    } US number: ${number}`;
  }
});

clearBtn.addEventListener("click", (e) => {
  userInput.value = "";
  resultsDiv.innerHTML = "";
});
