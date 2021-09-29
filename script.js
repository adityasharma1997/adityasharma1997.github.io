
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block"; 
}
showPanel(0,'#f44336');
function display_c(){
var refresh=1000;
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var i = new Date()
document.getElementById('ct').innerHTML = i;
display_c();
 }