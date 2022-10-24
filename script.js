let fift = document.querySelector('.fift')
let start = document.querySelector('.start')
let item = Array.from(fift.querySelectorAll('.item'));
let moves = document.querySelector('.moves')
let time = document.querySelector('.time')
let stop = document.querySelector('.stop')
let song = document.querySelector('.sound');
let voice = document.querySelector('.voice')
let oSizes3 = document.querySelector('.oSizes3')
let item9 = document.querySelector('.item9')
let item10 = document.querySelector('.item10')
let item11 = document.querySelector('.item11')
let item12 = document.querySelector('.item12')
let item13 = document.querySelector('.item13')
let item14 = document.querySelector('.item14')
let item15 = document.querySelector('.item15')
let item16 = document.querySelector('.item16')
let popUp = document.querySelector('.popUp')
let result = document.querySelector('.result')
let name = document.querySelector('.name')
let saveinp = document.querySelector('.saveinp')
let itemLi1 = document.querySelector('.itemLi1')
let itemLi2 = document.querySelector('.itemLi2')
let itemLi3 = document.querySelector('.itemLi3')
let itemLi4 = document.querySelector('.itemLi4')
let itemLi5 = document.querySelector('.itemLi5')
let itemLi6 = document.querySelector('.itemLi6')
let itemLi7 = document.querySelector('.itemLi7')
let itemLi8 = document.querySelector('.itemLi8')
let itemLi9 = document.querySelector('.itemLi9')
let itemLi10 = document.querySelector('.itemLi10')
let saveOp = document.querySelector('.saveOp')
let count = 16;
let movescount = 0

  let savecount = 0
  saveOp.addEventListener('click', () =>{
if(savecount === 0){
    name.style.display = 'inline'
    saveinp.style.display = 'inline'
    savecount++
}
else{
    name.style.display = 'none'
    saveinp.style.display = 'none'
    savecount = 0
}
  })


moves.innerText = 'Moves: ' + movescount
item[count - 1].style.display = 'none';

let mat = getmatfour(
    item.map(m => Number(m.innerText))
    
);

let ccc = 0
voice.addEventListener('click', ()=>{
    if(ccc === 0){
    voice.style.background = "url('../lickoneyou-JSFE2022Q3/pic/pngwing.com\ \(1\).png')"
    song.src = ''
    ccc++
}
else{
    voice.style.background = "url('../lickoneyou-JSFE2022Q3/pic/pngwing.com.png')"
    song.src = '../lickoneyou-JSFE2022Q3/voice/Sound_23478.mp3'
ccc = 0
}
})


fift.addEventListener('click', (event) => {
    let whitePlese = 16
        let clickItem = event.target.closest('.item');
        if (!clickItem) {
            return;
        }
        let clickItemNum = Number(clickItem.innerText)
        let clickYX = XY(clickItemNum, mat)
        let clickYXwhitePlese = XY(whitePlese, mat)
        let OK = allOk(clickYX, clickYXwhitePlese)

        if(OK){
go(clickYXwhitePlese, clickYX, mat)
pos(mat)
movescount++
moves.innerText = 'Moves: ' + movescount
song.play()
        }
    })

    start.addEventListener('click', () => {
        let startmat = mat.flat()
        let shaff = shaffArr(startmat)
        mat = getmatfour(shaff)
        pos(mat)
        movescount = 0
        moves.innerText = 'Moves: ' + movescount
        min = 0
        sec = 0;
        
        clearInterval(dis)
        dis = setInterval(times, 1000)
        });

        stop.addEventListener('click', () => {
            let st = mat.flat()
           let sorr = sortz(st)
           mat = getmatfour(sorr)
            pos(mat)
            movescount = 0
            moves.innerText = 'Moves: ' + movescount
            min = 0
        sec = 0;
        time.innerText = `Time: 0:00`
        clearInterval(dis)
        clearInterval(dis)
            });


            let startmat = mat.flat()
            let shaff = shaffArr(startmat)
            mat = getmatfour(shaff)
            pos(mat)


function getmatfour(arr){
    const m = [[],[],[],[]]
let y = 0
let x = 0

for (let i = 0; i < arr.length; i++) {
    if(x>=4){
        y++
        x=0
    }
    m[y][x] = arr[i]
    x++
}
return m
}



function pos(mat){
for (let y = 0; y < mat.length; y++) {
    for (let x = 0; x < mat[y].length; x++) {
        let a = mat[y][x];
        let node = item[a-1]
        itemPos(node, x, y)
    }
}
}

function pos3(mat3){
    for (let y = 0; y < mat3.length; y++) {
        for (let x = 0; x < mat3[y].length; x++) {
            let a = mat3[y][x];
            let node = item[a-1]
            itemPos(node, x, y)
        }
    }
    }

function itemPos(node, x, y){
    let posi = 100;
    node.style.transform = `translate3D(${x*posi}%, ${y*posi}%, 0)`
}

function shaffArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function sortz(arr){
    return arr.sort((a,b) => a -b)
}

function XY(num, mat){
    for (let y = 0; y < mat.length; y++) {
        for (let x = 0; x < mat[y].length; x++) {
            if(mat[y][x] === num){
                return {x, y}
            }

        }
        
}
return null;
}

function allOk (a, b) {
  return (Math.abs(b.x - a.x) === 1 || Math.abs(b.y - a.y) === 1) && (b.x === a.x || b.y === a.y)
}

function go (a, b, mat){
    let c = mat[a.y][a.x]
    mat[a.y][a.x] = mat[b.y][b.x]
    mat[b.y][b.x] = c
    win()
}

let min = 0
let sec = 1

function times(){
sec = sec < 10 ? '0' + sec: sec
time.innerText = `Time: ${min}:${sec}`
sec++
if(sec === 60){
    sec = 0
    min++
}
}

let dis = setInterval(() => {
    times()
}, 1000);

function win(){
let defoltmat = mat.flat()
let winmat = sortz(mat.flat());
        if (JSON.stringify(defoltmat) != JSON.stringify(winmat)){
            return false
        }
        setTimeout(`alert('Hooray! You solved the puzzle in ${time.innerText} and ${movescount+1} moves!')`, 600)
}

let resCount = 0
result.addEventListener('click', () => {
    if(resCount === 0){
    popUp.style.display = 'block'
    resCount++
}
else{
  popUp.style.display = 'none' 
  resCount = 0
}
})


  let scoreArr = [];
  let sscoreArr;
  let saveJs;
function savej(){
    saveJs = localStorage.getItem('scorez')
    saveJs = JSON.parse(saveJs)  
    if(saveJs[0] != undefined){
        itemLi1.innerHTML = saveJs[0]
    }
    else{
        itemLi1.innerHTML = saveJs[0]
    }
    if(saveJs[1] === undefined){
        itemLi2.innerHTML = ''
    }
    else{
        itemLi2.innerHTML = saveJs[1] 
    }

    if(saveJs[2] === undefined){
        itemLi3.innerHTML = ''
    }
    else{
        itemLi3.innerHTML = saveJs[2]
    }

    if(saveJs[3] === undefined){
        itemLi4.innerHTML = ''
    }
    else{
        itemLi4.innerHTML = saveJs[3]
    }

    if(saveJs[4] === undefined){
        itemLi5.innerHTML = ''
    }
    else{
        itemLi5.innerHTML = saveJs[4]
    }

    if(saveJs[5] === undefined){
        itemLi6.innerHTML = ''
    }
    else{
        itemLi6.innerHTML = saveJs[5]
    }
        
    if(saveJs[6] === undefined){
        itemLi7.innerHTML = ''
    }
    else{
        itemLi7.innerHTML = saveJs[6]
    }

    if(saveJs[7] === undefined){
        itemLi8.innerHTML = ''
    }
    else{
        itemLi8.innerHTML = sscoreArr[7]
    }

    if(saveJs[8] === undefined){
        itemLi9.innerHTML = ''
    }
    else{
        itemLi9.innerHTML = saveJs[8]
    }

    if(saveJs[9] === undefined){
        itemLi10.innerHTML = ''
    }
    else{
        itemLi10.innerHTML = saveJs[9]
    } 
    scoreArr = saveJs
    console.log(scoreArr)
}


  saveinp.addEventListener('click', () => {
    
    scoreArr.push(`${movescount} Movies, ${time.innerText}, ${name.value}`)
    sscoreArr = scoreArr.sort((a,c) => a[0] - c[0])
    localStorage.setItem('scorez', JSON.stringify(sscoreArr))
    savej()
  })

  savej()



       
