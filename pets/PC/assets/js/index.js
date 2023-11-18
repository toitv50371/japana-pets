// tabbar product
function openOptions(evt, option) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active__tabMenu", "");
    }
    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active__tabMenu";
}


function openOptionSubs(evt, option) {
  var i, tabcontentSub, tablinksSub;
  tabcontentSub = document.getElementsByClassName("tabcontentSub");
  for (i = 0; i < tabcontentSub.length; i++) {
    tabcontentSub[i].style.display = "none";
  }
  tablinksSub = document.getElementsByClassName("tablinksSub");
    for (i = 0; i < tablinksSub.length; i++) {
      tablinksSub[i].className = tablinksSub[i].className.replace(" active", "");
    }
  document.getElementById(option).style.display = "block";
  evt.currentTarget.className += " active";

}