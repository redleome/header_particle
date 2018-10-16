$(document).ready(function () {
  var content= [".net","java","oracle","PHP"];
  var size =["170px","200px","320px","150px"]
  var count = 0;

  setInterval(function () {
    if(count < content.length) {
      console.log(count + "- " + content[count]);
       transition();

       count = count + 1;
     }else{
       count = 0;
       $( "#placeholder" ).text("TECHPROS");
       $("#placeholder").css('opacity', '0');
       $("#placeholder").animate({

         width: "430px"
       },300, function(){
          $("#placeholder").css('height', '0');
          $("#placeholder").animate({ opacity: 1, height: "78px" },200); });
     }
   }, 1500);
   function transition(){
     $( "#placeholder" ).text(content[count]);
     $("#placeholder").css('opacity', '0');

      console.log("fade in");
      $("#placeholder").animate({
        height: "78px",
          width: size[count]
        },200, function(){
          $("#placeholder").css('height', '0');
          $("#placeholder").animate({ opacity: 1, height: "78px" },200); });
    }
});
