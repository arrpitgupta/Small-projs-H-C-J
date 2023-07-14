 // Define an array to store the schedule
 var schedule = [];
  
 // Function to add an event to the schedule
 function addEvent(event, time) {
   var newEvent = {
     event: event,
     time: time
   };
   schedule.push(newEvent);
 }

 // Function to display the schedule
 function displaySchedule() {
   var scheduleList = document.getElementById("schedule-list");
   scheduleList.innerHTML = "";
   
   for (var i = 0; i < schedule.length; i++) {
     var eventItem = document.createElement("li");
     eventItem.classList.add("event-item");

     var eventName = document.createElement("span");
     eventName.classList.add("event-name");
     eventName.textContent = schedule[i].event;

     var eventTime = document.createElement("span");
     eventTime.classList.add("event-time");
     eventTime.textContent = schedule[i].time;

     eventItem.appendChild(eventName);
     eventItem.appendChild(document.createTextNode(" - "));
     eventItem.appendChild(eventTime);

     scheduleList.appendChild(eventItem);
   }
 }

 // Get input values and add event on button click
 var addEventBtn = document.getElementById("add-event-btn");
 addEventBtn.addEventListener("click", function() {
   var eventInput = document.getElementById("event-input");
   var timeInput = document.getElementById("time-input");

   var event = eventInput.value;
   var time = timeInput.value;

   if (event && time) {
     addEvent(event, time);
     displaySchedule();
     eventInput.value = "";
     timeInput.value = "";
   }
 });