const fundForm = document.getElementById('investform')

const yearlyIcome = document.getElementById('investvalue');
const fundLength = document.getElementById('investyears');

const resultOfInvest = document.getElementById('valuevisual');

let totalValue;
let lengthO;


//calculate total total value of investment

const calculateIt = function (e) {
    const value = parseInt(yearlyIcome.value);
    lengthO = parseInt(fundLength.value);
    let basicPercent;
    const firstIncome = 5000;
    if (value < 6000) {
        basicPercent = 0.03;
    } else {
        basicPercent = 0.035;
    }
    totalValue = firstIncome * (1 + basicPercent) ** lengthO;

    for (i = lengthO; i > 0; i--) {
        let capital = value * (1 + basicPercent) ** i;
        totalValue = totalValue + capital;
    }

    totalValue = Math.round(totalValue)

    resultOfInvest.innerHTML = `
    <h2 class="orange-flash"> Po ${lengthO} latach uda Ci się zaoszczędzić ${totalValue} zł</h2>
    <h3>To wystarczy na:</h3>
    `;

    //inject correct info about investment possibilities
    if (totalValue < 25000) {
        resultOfInvest.innerHTML += investBasic;
    } else if (totalValue < 35000) {
        resultOfInvest.innerHTML += investBasicPlus;
    } else if (totalValue < 45000) {
        resultOfInvest.innerHTML += investSilver;
    } else if (totalValue < 60000) {
        resultOfInvest.innerHTML += investSilverPlus;
    } else if (totalValue < 80000) {
        resultOfInvest.innerHTML += investGold;
    } else {
        resultOfInvest.innerHTML += investPrime;
    }
}

fundForm.addEventListener('submit', calculateIt)