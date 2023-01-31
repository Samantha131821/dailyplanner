
$(function () {
  var today = dayjs();
  var currentDayEl = $('#currentDay');
  currentDayEl.text(today.format('dddd, MMMM D '));
  var currentHour = dayjs().hour();

  var container = $('#container');
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

};