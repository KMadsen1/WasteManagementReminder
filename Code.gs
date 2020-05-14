function GarbagePickupEvent() {
//editable variables
//Label to search messages for. Make sure you create them before running this script.
    var label = "Waste Management Notifications/Garbage Pickup Notifications";
    var labelNew = "Waste Management Notifications/Garbage Pickup Notifications/Processed";
//What color should the event be?
    var color = 10; //for valid values, see https://developers.google.com/apps-script/reference/calendar/event-color
//Add Text to your event title (leave blank if not required)
    var title = "Garbage Day";
//Stop changing variables now ************************************************************

    //Prepare the supplied variables for use
    var searchLabel = GmailApp.getUserLabelByName(label);
    var doneLabel = GmailApp.getUserLabelByName(labelNew);
    var threads = searchLabel.getThreads();
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

    var changes = {
    transparency: "transparent"
    };
  
    //Start the loop to get threads and create calendar events
    if (threads.length > 0) {
    //var calendar = CalendarApp.getCalendarsByName(calendarName);
    for (var i in threads){
    //for (i = 0; i < threads.length; i++)
    var event = CalendarApp.getDefaultCalendar().createAllDayEvent(title, new Date(tomorrow)).setColor(color).removeAllReminders().addPopupReminder(300).setDescription(threads[i].getMessages()[0].getPlainBody());
    var eventId = event.getId();
        eventId = eventId.slice(0,eventId.length-11);
    var calId = CalendarApp.getDefaultCalendar().getId();
    Calendar.Events.patch(changes,calId,eventId);
    }
   threads[i].markRead().removeLabel(searchLabel).addLabel(doneLabel);
    }
  
}

function RecyclingPickupEvent() {
//editable variables
//Label to search messages for. Make sure you create them before running this script.
    var label = "Waste Management Notifications/Recycling Pickup Notifications";
    var labelNew = "Waste Management Notifications/Recycling Pickup Notifications/Processed";
//What color should the event be?
    var color = 10; //for valid values, see https://developers.google.com/apps-script/reference/calendar/event-color
//Add Text to your event title (leave blank if not required)
    var title = "Recycling Day";
//Stop changing variables now ************************************************************

    //Prepare the supplied variables for use
    var searchLabel = GmailApp.getUserLabelByName(label);
    var doneLabel = GmailApp.getUserLabelByName(labelNew);
    var threads = searchLabel.getThreads();
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

    var changes = {
    transparency: "transparent"
    };
  
    //Start the loop to get threads and create calendar events
    if (threads.length > 0) {
    //var calendar = CalendarApp.getCalendarsByName(calendarName);
    for (var i in threads){
    //for (i = 0; i < threads.length; i++)
    var event = CalendarApp.getDefaultCalendar().createAllDayEvent(title, new Date(tomorrow)).setColor(color).removeAllReminders().addPopupReminder(300).setDescription(threads[i].getMessages()[0].getPlainBody());
    var eventId = event.getId();
        eventId = eventId.slice(0,eventId.length-11);
    var calId = CalendarApp.getDefaultCalendar().getId();
    Calendar.Events.patch(changes,calId,eventId);
    }
   threads[i].markRead().removeLabel(searchLabel).addLabel(doneLabel);
    }
  
}