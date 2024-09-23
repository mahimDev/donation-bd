// const btn_1 = eventHandle("donation-btn");
// function eventHandle(id) {
//   document.getElementById(id).addEventListener("click", function (event) {
//     event.preventDefault();

//     const previousBalance = donatedPrevious("previous-balance");
//     const donatedPre = donatedPrevious("donated-previous");
//     const input = inputValue("donation-input-value");

//     document.getElementById("donated-previous").innerText = input + donatedPre;
//     document.getElementById("previous-balance").innerText =
//       previousBalance - input;

//     console.log(previousBalance, donatedPre, input);
//     console.log(input);
//   });
// }
document
  .getElementById("donation-section-btn")
  .addEventListener("click", function () {
    document.getElementById("donation-section-btn").classList.add(`bg-red-500`);
    document
      .getElementById("history-section-btn")
      .classList.remove(`bg-red-500`);

    showsection("donadet-card-container");
  });
document
  .getElementById("history-section-btn")
  .addEventListener("click", function () {
    document.getElementById("history-section-btn").classList.add(`bg-red-500`);
    document
      .getElementById("donation-section-btn")
      .classList.remove(`bg-red-500`);

    showsection("history-container");
  });

//  history function
function showsection(id) {
  document.getElementById("history-container").classList.add("hidden");
  document.getElementById("donadet-card-container").classList.add("hidden");
  // showig
  document.getElementById(id).classList.remove("hidden");
}
// ...........................
document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const input = "donation-input-value";
    const donated = "donated-previous";
    const balance = "previous-balance";
    const donatedHeading = "donated-Noakhali";
    calculationTheHandle(input, donated, balance, donatedHeading);
    // console.log(input, donated, balance);
  });
function calculationTheHandle(
  donationInputValu,
  donatedPrev,
  previousBal,
  donatedHeading
) {
  const previousBalance = donatedPrevious(previousBal);
  const donatedPre = donatedPrevious(donatedPrev);
  const input = inputValue(donationInputValu);
  if (isNaN(input) || input <= 0) {
    alert(`"this is" is no doneted`);
    return;
  }
  if (previousBalance < input) {
    return alert(`sorry ${input} this is unpossible amount`);
  }
  document.getElementById(donatedPrev).innerText = input + donatedPre;
  document.getElementById(previousBal).innerText = previousBalance - input;

  //  history work
  const donatedHead = document.getElementById(donatedHeading).innerText;
  const history = document.getElementById("history-container");
  console.log(history);
  const createHistory = document.createElement("div");
  createHistory.className = `border py-5 pl-7 rounded-md shadow-md my-5 `;
  createHistory.innerHTML = `
<h1 class="font-semibold text-xl mb-3">
  ${input} Taka is ${donatedHead}
 </h1>
  <p>${new Date()}</p>      
`;

  // const textHistoryNode = document.createTextNode("History");
  // history.appendChild(createHistory);
  history.insertBefore(createHistory, history.firstChild);
  // console.log(history);
}
function inputValue(id) {
  const inpValue = document.getElementById(id).value;
  const parseValue = parseFloat(inpValue);
  // if (isNaN(parseValue)) {
  //   alert(`"${inpValue}" is no doneted`);
  //   return;
  // }
  return parseValue;
}

function donatedPrevious(id) {
  const donatedPreviousValue = document.getElementById(id).innerText;
  const parseFloatPrevious = parseFloat(donatedPreviousValue);
  return parseFloatPrevious;
}

// //  history function
// function showsection(id) {
//   document.getElementById("history-container").classList.add("hidden");
//   document.getElementById("donadet-card-container").classList.add("hidden");
//   // showig
//   document.getElementById(id).classList.remove("hidden");
// }
