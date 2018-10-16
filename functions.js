window.onload= function(){
  var placeholder = document.getElementById("placeholder");
  var content= [".net","java","techpros"];
  var count = 0;
  var frames= 10;
  var current_frame=0;

  setInterval(function(){
    console.log(content.length);
    if(count < content.length) {

      placeholder.innerHTML = content[count];
      // placeholder.classList.add('switch');
      // placeholder.style.opacity ="1";
      count = count + 1;}
    else {  count = 0; }
  }, 1000);
}
