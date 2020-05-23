function solve(){
  let row = document.getElementById('theRow');
  row.innerHTML = '';
let arr = ['🍕', '🎱', '👶🏾', '👁', '👽', '🌞', '🍺', '🎮', '🚀', '🧪', '🔒', '🔕', '☢️', '♻️', '💣', '🧭', '💾', '🚸',
'🍕', '🎱', '👶🏾', '👁', '👽', '🌞', '🍺', '🎮', '🚀', '🧪', '🔒', '🔕', '☢️', '♻️', '💣', '🧭', '💾', '🚸'];
shuffle(arr);
for(let i = 0; i < 36; i++){
  let x = document.createElement('div');
  let p = document.createElement('p');
  x.classList.add('col-2');
  p.textContent = arr[i]
  p.classList.add('hide', 'addAnimation')
  x.append(p)
  row.append(x);
  }
let press = Array.from(document.getElementsByClassName('col-2'));
press.map(a => a.addEventListener('click', (ev) => {
  ev.target.firstChild.classList.remove('hide');
  ev.target.firstChild.classList.add('show'); 
  ev.target.setAttribute('name', 'shown');
  checkShown()
}));

}

function checkShown(){
  let elem = document.querySelectorAll('[name=shown]');
  if(elem.length === 2){
    if(elem[0].firstChild.textContent === elem[1].firstChild.textContent){
      elem[0].removeAttribute('name', 'shown')
      elem[0].setAttribute('name', 'ready')
      elem[1].removeAttribute('name', 'shown')
      elem[1].setAttribute('name', 'ready')
      elem[0].style.pointerEvents = 'none';
      elem[1].style.pointerEvents = 'none';
    }
    else{
      elem[0].removeAttribute('name', 'shown')
      elem[1].removeAttribute('name', 'shown')
      setTimeout(function(){ 
      elem[0].firstChild.classList.remove('show');
      elem[0].firstChild.classList.add('hide');
      elem[1].firstChild.classList.remove('show');
      elem[1].firstChild.classList.add('hide');
        }, 600);
    }
  }
}
function shuffle(array) {
    for (var k = array.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = array[k];
        array[k] = array[j];
        array[j] = temp;
    }
}