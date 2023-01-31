$(function () {
  var today = dayjs();
  var currentDayEl = $('#currentDay');
  currentDayEl.text(today.format('dddd, MMMM D '));
  var currentHour = dayjs().hour();

  var container = $('#container');
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//loop through work hours to determine AM or PM
  for (let i = 0; i < workHours.length; i++) {
    
    let row = $("<div class='row time-block'>")
    let colHr = $("<div class='col-4 col-lg hour text-center'>")

    let usaHrs = workHours[i] + ' A.M.'
    if(workHours[i] > 11){
      usaHrs = workHours[i] + ' P.M.'
      if(workHours[i] >= 13){
        usaHrs = workHours[i] - 12 + ' P.M.'
      }
    }
    colHr.append(usaHrs)

//add classes and IDs from HTML and append
    let textarea = $("<textarea class='col-6 col-md-10 description'>")
    textarea.attr('id', `textarea-${i}`)

// compare to current hour to determine past present or future
    if(currentHour > workHours[i]){
      textarea.addClass('past')
    }
    else if( currentHour === workHours[i]){
      textarea.addClass('present')
    }
    else{
      textarea.addClass('future')
    }

    let getTextArea = localStorage.getItem(`toDo-${i}`)
    textarea.text(getTextArea)

    let button = $("<button class='btn saveBtn col-2 col-md-1'>")
    let btnIcon = $("<i class='fas fa-save'>")
    button.append(btnIcon)



    row.append(colHr, textarea, button)
    container.append(row)
  }
// on click save text to local storage
  $('.saveBtn').on('click', function() {
    for (let j = 0; j < workHours.length; j++) {
      let textAreaValue = $(`#textarea-${j}`).val()
      localStorage.setItem(`toDo-${j}`, textAreaValue)
    }
  })
})
  

