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
    this.totalDailyCookieSales += cookiesForEachHour;
  }
};

var pikePlace = new LocationObj('First and Pike',23,65,6.3);
var seaTacAirport = new LocationObj('Sea Tac Airport', 3, 24,1.2);
var seattleCenter = new LocationObj('Seattle Center', 11, 38,3.7);
var capitolHill	= new LocationObj('Capitol Hill',20,38,	2.3);
var alki = new LocationObj('Alki',2	,16,4.6);

var stores = [pikePlace, seaTacAirport,seattleCenter, capitolHill, alki];
var headerTable = [' ','Daily Location total'];
var sum = 0;
var holdTable = document.getElementById('Cookies');
function buildElement(kind, content, where)
{
  var tdEl = document.createElement(kind);
  tdEl.textContent = content;
  where.appendChild(tdEl);
};

function tableHead() {
  var trElhead = document.createElement('tr');
  for(var k = 0; k < headerTable.length ; k++) {
    buildElement('td',headerTable[k],trElhead);
  }
  for(var j = 0 ; j < hours.length ; j++) {
    buildElement('td', hours[j], trElhead);
  }
  holdTable.appendChild(trElhead);
};

LocationObj.prototype.render = function(){
  var trEl = document.createElement('tr');
  buildElement('td',this.locationName, trEl);
  buildElement('td',this.totalDailyCookieSales,trEl);
  for(var j = 0 ; j < hours.length ; j++){
    buildElement('td',this.cookiesEachHourArray[j], trEl);
  }
  holdTable.appendChild(trEl);
};
function tableBody() {
  for(var i = 0 ; i < stores.length ; i++) {
    stores[i].render();
  }
};

tableHead();
tableBody();
var newStoreForm = document.getElementById('location-name');
newStoreForm.addEventListener('submit', function(event){
  event.preventDefault();
  if (!event.target.which.value && !event.target.newMin.value && !event.target.newMax.value && !event.target.newAvg.value) {
    return alert('Cannot be empty!');
  }
  var newStoreName = event.target.which.value;
  var newMinimum = parseFloat(event.target.newMin.value);
  var newMaximum = parseFloat(event.target.newMax.value);
  var newAverage = parseFloat(event.target.newAvg.value);
  var newStore = new LocationObj (newStoreName, newMinimum, newMaximum, newAverage);
  newStore.render();
});
