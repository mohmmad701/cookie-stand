let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function CookieStand(storeLocations, minCustHr, maxCustHr, avgPerCust) {
  this.storeLocations = storeLocations;
  this.minCustHr = minCustHr;
  this.maxCustHr =  maxCustHr;
  this.avgPerCust = avgPerCust;
  this.hourlySales = [];
  this.dailyTotal = 0;

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.calcHourlySales = function() {
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.floor(this.avgPerCust * this.custCalc()));
      this.dailyTotal += this.hourlySales[i];
    }
  };

  this.displayData = function() {
    this.calcHourlySales();

    let row = document.createElement('tr');
    let location = document.createElement('th');
    location.textContent = this.storeLocations;
    row.appendChild(location);

    for(let i = 0; i < hours.length; i++){
      let numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
    let totalCookie = document.createElement('tr');
      totalCookie.textContent = this.dailyTotal;
      row.appendChild(totalCookie);
      tbl.appendChild(row);
  }
};

let seattle = new CookieStand("Seattle", 17, 88, 5.2);
let Tokyo = new CookieStand("tokyo", 6, 44, 1.2);
let Dubai = new CookieStand("dubia", 11, 38, 1.9);
let Paris = new CookieStand("paris", 20, 48, 3.3);
let Lima = new CookieStand("lima", 3, 24, 2.6);


// this is where the table is made
let tbl = document.createElement('table');
let headerRow = document.createElement('thead');
//Makes an empty cell
let emptyCell = document.createElement('td');
    headerRow.appendChild(emptyCell);
//Hours are put in the top row...
for (let i = 0; i < hours.length; i++) {
  let td = document.createElement('td');
  td.attribute = 'class', 'td';
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};
// Makes the word 'Total' in the top row
let dailyTotal = document.createElement('th');
dailyTotal.textContent = "Total";
headerRow.appendChild(dailyTotal);
tbl.appendChild(headerRow);

seattle.displayData();
Tokyo.displayData();
Dubai.displayData();
Paris.displayData();
Lima.displayData();
document.body.appendChild(tbl);