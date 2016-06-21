var hours = ['6 am', '7am', '8 am', '9 am', '10 am', '11am', '12am', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var randomArray ;

var pikeList = {
  placeName: '1st and Pike',
  randomArray : [],
  total:0,
  max : 65,
  min :23,
  avg: 6.3,
};
console.log(pikeList);
var sea_tac = {
  placeName: 'SeaTac Airport',
  randomArray : [],
  total:0,
  max : 24,
  min :3,
  avg: 1.2,
};
var seattle_center = {
  randomArray : [],
  total:0,
  max : 38,
  min :11,
  avg: 3.7,
};
var capitol_hill = {
  randomArray : [],
  total:0,
  max : 38,
  min :20,
  avg: 2.3,
};
var alki = {
  randomArray : [],
  total:0,
  max : 16,
  min :2,
  avg: 4.6,
};
  // Access the DOM element where this will go
pikeList.listCookies = function(minimum, maximum) {
  var storeHour = document.getElementById('storeHours');
  var randArray = function(){
    return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  };
  for (var i = 0; i < hours.length; i++) {
    pikeList.randomArray[i] = randArray();
    console.log(pikeList.randomArray);
    pikeList.total = pikeList.total + pikeList.randomArray[i];
    console.log(hours[i]);
// 1. Create the HTML element
    var listItem = document.createElement('li');
    // 2. Give the element content
    listItem.textContent = hours[i] + '    ' + pikeList.randomArray[i] + '   cookies';
    // 3. Attach/insert the element to/in the DOM
    console.log(storeHour);
    console.log(listItem);
    storeHour.appendChild(listItem);
  }
  var listTotal = document.createElement('li');
  listTotal.textContent = 'Total: ' + pikeList.total;
  storeHour.appendChild(listTotal);
  console.log(pikeList.total);
};
sea_tac.listCookies1 = function(minimum, maximum) {
  var cookiesList = document.getElementById('sea_tac_Airport');
  var randArray = function(){
    return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  };
  for (var i = 0; i < hours.length; i++) {
    sea_tac.randomArray[i] = randArray();
    console.log(sea_tac.randomArray);
    sea_tac.total = sea_tac.total + sea_tac.randomArray[i];
    console.log(hours[i]);
// 1. Create the HTML element
    var listItem = document.createElement('li');
    // 2. Give the element content
    listItem.textContent = hours[i] + '    ' + sea_tac.randomArray[i] + '   cookies';
    // 3. Attach/insert the element to/in the DOM
    console.log(listItem);
    cookiesList.appendChild(listItem);
  }
  var listTotal = document.createElement('li');
  listTotal.textContent = 'Total: ' + sea_tac.total;
  cookiesList.appendChild(listTotal);
  console.log(sea_tac.total);
};
//seattle center
seattle_center.listCookies2 = function (minimum,maximum) {
  var cookiesList = document.getElementById('seattle_center');
  var randomVar = function() {
    return (Math.floor (Math.random() * (maximum - minimum + 1)) + minimum);
  };
  for(var i = 0 ; i < hours.length ; i++) {
    seattle_center.randomArray[i] = randomVar();
    seattle_center.total = seattle_center.total + seattle_center.randomArray[i];
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + '  ' + seattle_center.randomArray[i] + ' Cookies';
    cookiesList.appendChild(listItem);
  }
  var listTotal = document.createElement('li');
  listTotal.textContent = 'Total: ' + seattle_center.total;
  cookiesList.appendChild(listTotal);
};
capitol_hill.listCookies3 = function (minimum,maximum) {
  var cookiesList = document.getElementById('capitol_hill');
  var randomVar = function() {
    return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  };
  for(var i = 0 ; i < hours.length ; i++) {
    capitol_hill.randomArray[i] = randomVar();
    capitol_hill.total = capitol_hill.total + capitol_hill.randomArray[i];
  //create Html element
    var listItem = document.createElement('li');
  //put the stuff on it
    listItem.textContent = hours[i] + '  ' + capitol_hill.randomArray[i] + '  ' + 'cookies';
    cookiesList.appendChild(listItem);
  }
  var listTotal = document.createElement('li');
  listTotal.textContent = 'Total: ' + capitol_hill.total;
  cookiesList.appendChild(listTotal);
};
alki.listCookies4 = function(minimum,maximum) {
  var listCookies = document.getElementById('alki');
  var randomVar = function() {
    return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  };
  for(var i = 0 ; i < hours.length ; i++) {
    alki.randomArray[i] = randomVar();
    alki.total = alki.total + alki.randomArray[i];
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + '  ' + alki.randomArray[i] + ' cookies ';
    listCookies.appendChild(listItem);
  }
  var totalItem = document.createElement('li');
  totalItem.textContent = 'Total: ' + alki.total;
  listCookies.appendChild(totalItem);
};
pikeList.listCookies(pikeList.min, pikeList.max);
sea_tac.listCookies1(sea_tac.min, sea_tac.max);
seattle_center.listCookies2(seattle_center.min, seattle_center.max);
capitol_hill.listCookies3(capitol_hill.min,capitol_hill.max);
alki.listCookies4(alki.min, alki.max);
