// Partial solution to Day 6 assignment

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am' , '11:00am' , '12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function LocationObj(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;// let us use += later
  this.calcCookiesEachHour();
};

LocationObj.prototype.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var custForEachHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(custForEachHour);
  }
};

LocationObj.prototype.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for(var i = 0; i < hours.length; i++) {
    var cookiesForEachHour = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(cookiesForEachHour);
    //this.cookiesForEachHour[i] = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.totalDailyCookieSales += cookiesForEachHour;
  }
};

var pikePlace = new LocationObj('First and Pike',23,65,6.3);
var seaTacAirport = new LocationObj('Sea Tac Airport', 3, 24,1.2);
var seattleCenter = new LocationObj('Seattle Center', 11, 38,3.7);
var capitolHill	= new LocationObj('Capitol Hill',20,38,	2.3);
var alki = new LocationObj('Alki',2	,16,4.6);

var stores = [pikePlace, seaTacAirport,seattleCenter, capitolHill, alki];
var headerTable = ['Daily Location total','6:00am', '7:00am', '8:00am', '9:00am', '10:00am' , '11:00am' , '12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
var sum = 0;
var holdTable = document.getElementById('Cookies');


function tableHead() {
  var trElhead = document.createElement('tr');
  tdElhead = document.createElement('td');
  tdElhead.textContent = ' ';
  trElhead.appendChild(tdElhead);
  for(var k = 0; k < headerTable.length ; k++) {
    tdElhead = document.createElement('td');
    tdElhead.textContent = headerTable[k];
    trElhead.appendChild(tdElhead);
  }
  holdTable.appendChild(trElhead);
};

function tableBody() {
  for(var i = 0 ; i < stores.length ; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = stores[i].locationName;
    trEl.appendChild(tdEl);
    var tdElFirst = document.createElement('td');
    tdElFirst.textContent = stores[i].totalDailyCookieSales;
    sum = sum + stores[i].totalDailyCookieSales;
    trEl.appendChild(tdElFirst);
    for(var j = 0 ; j < hours.length ; j++){
      var tdEl1 = document.createElement('td');
      tdEl1.textContent = stores[i].cookiesEachHourArray[j];
      trEl.appendChild(tdEl1);
    }
    holdTable.appendChild(trEl);
  }
};
function tableFooter() {
  var trElFooter = document.createElement('tr');
  var tdElFooter = document.createElement('td');
  tdElFooter.textContent = 'Total ';
  trElFooter.appendChild(tdElFooter);
  holdTable.appendChild(trElFooter);
  tdElFooter = document.createElement('td');
  tdElFooter.textContent = sum;
  trElFooter.appendChild(tdElFooter);
  holdTable.appendChild(trElFooter);
};

tableHead();
tableBody();
tableFooter();
