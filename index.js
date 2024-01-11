let users = [];
let selectedUser = null;

function generateHTML(user) {
  return `<div class="individual_user_input_container"><span>${user}</span><input id="${user}-contributions" type="number"></input> <input id="${user}-expenses" type="number"></input></div>`;
}

function generateResultsHTML(user, amount) {
  return `<div class="individual_user_input_container"><span>${user}</span><span>${amount}</span></div>`;
}

function initializeIndividualUserData() {
  let selectElement = document.getElementById("individualUserData");
  const individualUserData = users.map((user) => generateHTML(user));
  selectElement.innerHTML = individualUserData.join("");
}

function generateResults() {
  let selectElement = document.getElementById("totalExpenses");
  let total = 0;
  users.forEach((user) => {
    let contribution = document.getElementById(`${user}-contributions`);
    total += Number(contribution.value);
  });
  selectElement.innerText = total;

  let finalSettlementData = document.getElementById(
    `individualUsersFinalAmount`
  );
  let resultsHTML = [];
  users.forEach((user) => {
    let expenses = document.getElementById(`${user}-expenses`);
    let contributions = document.getElementById(`${user}-contribution`);
    resultsHTML.push(
      generateResultsHTML(
        user,
        Number(contributions?.value || 0) - Number(expenses?.value || 0)
      )
    );
  });
  finalSettlementData.innerHTML = resultsHTML.join("");
}

function clearResults() {
  users = ["Rohit", "Aditya", "Prabin", "Jonesh"];
  initializeIndividualUserData();
}

function addNewUser() {
  let selectElement = document.getElementById("addUser");
  users.push(selectElement.value);
  initializeIndividualUserData();
}

document.addEventListener("DOMContentLoaded", initializeIndividualUserData);
