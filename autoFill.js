// ==UserScript==
// @name     TSV Autofill
// @version  1
// @grant    none
// ==/UserScript==

// THIS STUFF WILL GO IN THE FUNCTIONS FOR THE WEBSITES AND ONLY POPUP ON BUTTON CLICK - NOT AUTO ON PAGELOAD
window.setTimeout(5000); // so it loads the whole page before doing anything
var txt = prompt("Paste your JSON data here"); // enter the JSON data
var obj = JSON.parse(txt); // turns the JSON data into a javascript object

console.log(obj.title); // now we have access to the JSON data in the DOM as a javascript object

// THIS WILL BE AT THE START OF THE CODE
var currentUrl = window.location.href; // gets the url of the current page
console.log(currentUrl); // logs the current URL for testing so that I know it's working


if (currentUrl = "https://www.framinghamma.gov/calendar.aspx?CID=14"){
  	var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
  	// this button will trigger the prompt through the creation of the object
}
else if (currentUrl = "https://www.metrowestdailynews.com/calendar") {
  	var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}


/*
  document.getElementById("ctl00_ctl00_MainContent_ModuleContent_ctl00_lnkSubmitEvent").click()
  // wait?
  document.getElementById(‘selCalendarID’).value = 14;
  document.getElementById(‘ctl00_txtEventTitle’).value = obj.title; 
  // seems like it might have a different input thing going on here??? Other than value???
  document.getElementById(“ctl00_dtiEventBegins”).value = event.framStartDate;
  document.getElementById(“ctl00_dtiEventEnds”).value = event.framStartDate;
  document.getElementById(“ctl00_txtEventStartTime”).value = event.timeStart;
  document.getElementById(“ctl00_txtEventEndTime”).value = event.timeEnd;
  document.getElementById(“ctl00_drpFacilities”).value = -2;
  document.getElementById(“ctl00_txtDescription”).value = event.description;
  // upload image - it’s the same image every single time
  document.getElementById(“ctl00_txtURLLink”).value = event.link;
  document.getElementById(“ctl00_txtURLTitle”).value = event.title;
  document.getElementById(“ctl00_txtContactPhone”).value = event.organiserPhone;
	
}
/*
{"title":"Ruths Thing","categories":null,"venue":"Costin Room","startDate":"15-Oct-18","framStartDate":"10/4/2018","timeStart":"1:45 PM","timeEnd":"10:30 PM","summary":"whatever","description":"whatever","imageSource":null,"link":"www.google.com","organiserTitle":"Senator","organiserName":"Alan","organiserEmail":"alan@google.com","organiserPhone":"532-550-5570","framCalAddr":"49 Lexington St"}
*/
