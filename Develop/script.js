
$(function () {
  var today = dayjs();
  var currentDayEl = $('#currentDay');
  currentDayEl.text(today.format('dddd, MMMM D '));
  var currentHour = dayjs().hour();

  var container = $('#container');
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (let i = 0; i < workHours.length; i++) {
    
    let row = $("<div class='row time-block'>")
    let colHr = $("<div class='col-4 col-lg hour text-center'>")

    let usaHrs = workHours[i] + ' a.m.'
    if(workHours[i] > 12){
      usaHrs = workHours[i] + ' p.m.'
      if(workHours[i] >= 13){
        usaHrs = workHours[i] - 12 + ' p.m.'
      }
    }
  }
})