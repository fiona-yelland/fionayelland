var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


<script>
function changeImage()
{
element=document.getElementById('example')
if (element.src.match("out"))
  {
  element.src="Fiona-thegem-person.jpg"; 
  }
else
  {
  element.src="Fiona-thegem-person.jpg";
  }
}
</script>