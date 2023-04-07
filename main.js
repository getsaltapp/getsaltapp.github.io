$("#emailForm").submit(function(e) {
    e.preventDefault();
  
    var email = $("#emailInput").val();
    var url = "https://script.google.com/macros/s/AKfycbxLbxXPkqvk7Xw57i8pzTAt7rvu2Qo08y48cGv0x50m0EDtfsQMSBZE07zckh-s8MLAFw/exec";
  
    $.ajax({
      url: url,
      method: "POST",
      data: {
        email: email
      },
      success: function() {
        $("#successMessage").removeClass("hidden");
        $("#emailInput").val("");
      },
      error: function() {
        $("#errorMessage").removeClass("hidden");
      },
    });
  });
  
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  $("#emailInput").on("input", function() {
    var email = $(this).val();
    var isValid = validateEmail(email);
  
    if (isValid) {
      $("#checkmark").removeClass("hidden");
    } else {
      $("#checkmark").addClass("hidden");
    }
  });
  