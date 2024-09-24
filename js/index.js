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
    document
      .getElementById("donation-section-btn")
      .classList.add(`bg-[#55a630]`);
    document
      .getElementById("history-section-btn")
      .classList.remove(`bg-[#55a630]`);

    showsection("donadet-card-container");
  });
document
  .getElementById("history-section-btn")
  .addEventListener("click", function () {
    document
      .getElementById("history-section-btn")
      .classList.add(`bg-[#55a630]`);
    document
      .getElementById("donation-section-btn")
      .classList.remove(`bg-[#55a630]`);

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
// card 1
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
// card 2
document
  .getElementById("donation-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const input = "donation-input-value2";
    const donated = "donated-previous2";
    const balance = "previous-balance";
    const donatedHeading = "donated-feni";
    calculationTheHandle(input, donated, balance, donatedHeading);
    // console.log(input, donated, balance);
  });
// card 3
document
  .getElementById("donation-btn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const input = "donation-input-value3";
    const donated = "donated-previous3";
    const balance = "previous-balance";
    const donatedHeading = "quota-Movement";
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
    alert(`Your donation is incorrect`);
    return;
  }
  if (previousBalance < input) {
    return alert(`sorry your account does not have a balance of ${input}`);
  }
  // alert("done com");
  // document.getElementById("my_modal_1").showModal();
  my_modal_1.showModal();
  // document.getElementById("my_modal_1").close();
  document.getElementById(donatedPrev).innerText = input + donatedPre;
  document.getElementById(previousBal).innerText = previousBalance - input;

  //  history work

  const donatedHead = document.getElementById(donatedHeading).innerText;
  const history = document.getElementById("history-container");
  // console.log(history);
  const createHistory = document.createElement("div");

  createHistory.className = `  py-5  rounded-md shadow-md my-5 bg-[#e6f1d1] `;
  createHistory.innerHTML = `
<h1 class="font-semibold text-xl mb-3  mx-4">
  ${input} Taka is ${donatedHead}
 </h1>
  <p class="bg-[#e0ddb3] py-2 px-4 mx-4 rounded">Date:${new Date()} </p>      
        
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

//..............
