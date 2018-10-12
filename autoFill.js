// ==UserScript==
// @name     TSV Autofill
// @version  1
// @grant    none
// ==/UserScript==

// THIS STUFF WILL GO IN THE FUNCTIONS FOR THE WEBSITES AND ONLY POPUP ON BUTTON CLICK - NOT AUTO ON PAGELOAD
// console.log(obj.title); // now we have access to the JSON data in the DOM as a javascript object

// THIS WILL BE AT THE START OF THE CODE
var currentUrl = window.location.href; // gets the url of the current page
// console.log(currentUrl); // logs the current URL for testing so that I know it's working
window.setTimeout(5000); // so it loads the whole page before doing anything


if (currentUrl = "https://www.framinghamma.gov/calendar.aspx?CID=14"){

  	var btn = document.createElement("button");
  	btn.id = "callButton";
    var t = document.createTextNode("Click Here");
    btn.appendChild(t);
    document.body.appendChild(btn);

  	// this button will trigger the prompt through the creation of the object
		document.getElementById("callButton").onclick = function runFramCalFill() { // THIS IS WHERE IT WILL NEED TO LOOP AND THEN WAIT FOR SUBMIT TO CONTINUE THE LOOP
			var txt = prompt("Paste your JSON data here"); // enter the JSON data
			var obj = JSON.parse(txt); // turns the JSON data into a javascript object      
      document.getElementById("ctl00_ctl00_MainContent_ModuleContent_ctl00_lnkSubmitEvent").click(); // gets this far and gets stuck - won't do anything beyond
      // do I need to take the focus off the calendar thing? do I need to give it all time to load in?
     	document.getElementById("selCalendarID").value = "14"; 
      document.getElementById("ctl00_txtEventTitle").value = obj.title; 
      // seems like it might have a different input thing going on here??? Other than value???
      document.getElementById("ctl00_dtiEventBegins").value = obj.framStartDate;
      document.getElementById("ctl00_dtiEventEnds").value = obj.framStartDate;
      document.getElementById("ctl00_txtEventStartTime").value = obj.timeStart;
      document.getElementById("ctl00_txtEventEndTime").value = obj.timeEnd;
      document.getElementById("ctl00_drpFacilities").value = "-2";
      document.getElementById("ctl00_txtDescription").value = obj.description;
      // upload image - it’s the same image every single time
      document.getElementById("ctl00_txtURLLink").value = obj.link;
      document.getElementById("ctl00_txtURLTitle").value = obj.title;
      document.getElementById("ctl00_txtContactPhone").value = obj.organiserPhone;
    }
}
else if (currentUrl = "https://www.metrowestdailynews.com/calendar") {
  	var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}


/*
      window.setTimeout(1000);

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
