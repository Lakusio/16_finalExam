// Taken from https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" open", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " open";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
