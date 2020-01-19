let cashValue = document.querySelector('#input-cash');
let timeValue = document.querySelector('#input-time');
let showCash = document.querySelector('#cash-value');
let showTime = document.querySelector('#time-value');
let colorInside = document.querySelectorAll('.ranger');

const paymentPerMoth = document.getElementById('monthPaid');
const paymentTotal = document.getElementById('totalPaid');

const cardDestination = document.querySelector('#give-me-cards')


const fillCardBox = function () {
    if (cashValue >= 6000) {
        cardDestination.innerHTML = platinium;
    } else if (cashValue >= 3000) {
        cardDestination.innerHTML = gold;
    } else if (cashValue >= 800) {
        cardDestination.innerHTML = silver;
    } else {
        cardDestination.innerHTML = basic;
    }

}

//simplified credit calculation
const totalCost = function () {
    cashValue = parseInt(document.querySelector('#input-cash').value);
    timeValue = parseInt(document.querySelector('#input-time').value);

    let totalProv = cashValue * 0.15;
    let part = cashValue * (1 + 0.099 / 12) ** timeValue *
        ((1 + 0.099 / 12 - 1) / ((1 + 0.099 / 12) ** timeValue - 1));
    let payback = (part * timeValue) - cashValue + totalProv;
    let fullPart = part + (totalProv / timeValue);
    paymentPerMoth.innerHTML = Math.round(fullPart);
    paymentTotal.innerHTML = Math.round(payback)
}

const getCash = function () {
    //update values
    cashValue = document.querySelector('#input-cash').value;
    showCash.innerHTML = `${cashValue} zł`;

    //change bar color
    let x = cashValue / 100;
    let innerColor = `linear-gradient(90deg, #FF6600 ${x}%, white ${x}%)`
    colorInside[0].style.background = innerColor;
    totalCost();
    fillCardBox()
    // calculate total cost

    return cashValue
}


const getTime = function () {
    //update values
    timeValue = document.querySelector('#input-time').value;
    showTime.innerHTML = `${timeValue} mc`
    //change bar color
    let x = timeValue * 2.76;
    let innerColor = `linear-gradient(90deg, #FF6600 ${x}%, white ${x}%)`
    colorInside[1].style.background = innerColor;
    // calculate total cost
    totalCost()

    return getTime
}

cashValue.addEventListener("mousemove", getCash)
timeValue.addEventListener("mousemove", getTime)

getCash()
getTime()
fillCardBox()