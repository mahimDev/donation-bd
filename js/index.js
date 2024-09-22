const btn_1 = eventHandle("donation-btn");
function eventHandle(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    const input = inputValue("donation-input-value");
    console.log(input);
  });
}

function inputValue(id) {
  const inpValue = document.getElementById(id).value;
  const parseValue = parseFloat(inpValue);
  if (isNaN(parseValue)) {
    // alert(`"${inpValue}" is no doneted`);
    return;
  }
  return parseValue;
}
