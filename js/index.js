let house = document.getElementById('house');
let syria = document.getElementById('syria');

function showdata()

gettotal()
    let table = '';
    for(let i = 0; i < datapro.length;i++){
        table += `
        ${datapro[i].house}
        ${datapro[i].syria}
      `}
let searchmood = 'house';
function getsearchmood(id)
{
  let saw = document.getElementById('saw');
  if(id == 'searchtitle'){
    searchmood = 'house';
  }else{
    searchmood = 'syria';
    
}
search.placeholder = 'search By '+ searchmood;
search.focus()
search.value = '';
showdata()


}
    


const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");

if (hamburger) {
    hamburger.addEventListener('click', ()=>{
        navlist.classList.toggle("open");
    });
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
  let bt = document.getElementById('bt');
  onscroll = function(){
if(this.scrollY >= 600){
    bt.style.display = 'block';
}else{
    bt.style.display = 'none';
}
  }
  bt.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"

    })
  }
 let saw = document.getElementById('saw')