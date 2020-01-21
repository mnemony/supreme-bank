const theSymbol = [];
const currentPrice = [];
const changePercent = [];
const companyName = [];
const insideTable = document.querySelector('#freshdata');

const fetchData = async () => {
    const response = await axios.get('https://financialmodelingprep.com/api/v3/stock/gainers');

    const stockData = [...response.data.mostGainerStock];
    stockData.forEach(consoleLoger)


    for (i = 0; i < theSymbol.length; i++) {
        if (i % 2 != 0) {
            insideTable.innerHTML += `
            <tr>
                <td >${companyName[i]}</td>
                <td>${theSymbol[i]}</td>
                <td>${currentPrice[i]}</td>
                <td class="increaser">${changePercent[i]}</td>
            </tr>
            `
        } else {
            insideTable.innerHTML += `
            <tr class="unround">
                <td>${companyName[i]}</td>
                <td>${theSymbol[i]}</td>
                <td>${currentPrice[i]}</td>
                <td class="increaser">${changePercent[i]}</td>
            </tr>
            `
        }



    }



}
fetchData()

function consoleLoger(item) {
    theSymbol.push(item.ticker);
    currentPrice.push(item.price);
    changePercent.push(item.changesPercentage);
    companyName.push(item.companyName);
}