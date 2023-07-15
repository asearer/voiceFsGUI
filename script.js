   // Function to handle button click events
   function handleButtonClick(command) {
    $.ajax({
      url: "/command",
      type: "POST",
      data: { command: command },
      success: function(response) {
        $("#response").text(response);
      },
      error: function() {
        $("#response").text("An error occurred.");
      }
    });
  }

  // Attach event listeners to the buttons
  $(document).ready(function() {
    $("#listButton").click(function() {
      handleButtonClick("list files");
    });

    $("#openButton").click(function() {
      var fileName = prompt("Enter the file name:");
      if (fileName) {
        handleButtonClick("open file " + fileName);
      }
    });
  });