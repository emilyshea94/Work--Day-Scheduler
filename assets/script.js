
  $(function () {
  
    function updateBlockStatus() {
      var currentHour = dayjs().hour();
      //var currentHour = 12;
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    $(".container-fluid").on("click", ".saveBtn", function () {
      var timeBlock = $(this).parent();
      var eventText = timeBlock.find(".description").val();
      var blockId = timeBlock.attr("id");
  
      localStorage.setItem(blockId, eventText);
    });
  
    function loadSavedEvents() {
      $(".time-block").each(function () {
        var blockId = $(this).attr("id");
        var savedEvent = localStorage.getItem(blockId);
  
        if (savedEvent !== null) {
          $(this).find(".description").val(savedEvent);
        }
      });
    }
  
    function displayCurrentDate() {
      var currentDay = dayjs().format("dddd, MMMM D");
      $("#currentDay").text("Today is " + currentDay);
    }
  
    updateBlockStatus();
    loadSavedEvents();
    displayCurrentDate();
    
  });
