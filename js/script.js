const body = document.body

const header = document.createElement('header')
const logo = document.createElement('div')
logo.classList.add('logo')

const logoImg = document.createElement('img')
logoImg.setAttribute('src', './images/logo.png')

const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

header.append(logo)
logo.append(logoImg)
logo.append(h1)
body.append(header)

let ul = document.createElement('ul')
ul.classList.add('nav')

const  menuItems = ['Главная','О приложении','О проекте','Скачать','Контакты']



menuItems.forEach(element => {
    let li = document.createElement('li')
    // li.classList.add('menu-item')
    let a =document.createElement('a')

    a.textContent = element
    li.append(a)
    ul.append(li)
})

header.append(ul)
body.append(header)


// const ul = document.querySelectorAll('ul')




// const li1 = document.createElement('li')
// ul.append(li1)
// const a = document.createElement('a')
// li1.append(a)
// a.innerHTML='Главная'

// const li2 = document.createElement('li')
// ul.append(li2)
// const b = document.createElement('a')
// li2.append(b)
// b.innerHTML='О приложении'

// const li3 = document.createElement('li')
// ul.append(li3)
// const c = document.createElement('a')
// li2.append(c)
// c.innerHTML='О проекте'

// const li4 = document.createElement('li')
// ul.append(li4)
// const d = document.createElement('a')
// li4.append(d)
// d.innerHTML = 'Скачать'

// body.append(ul)



const cards = document.createElement('section')
cards.classList.add('cards')

for(let i = 0; i<3;i++){
let card = document.createElement('div')
card.classList.add('card')
 let cardImg = document.createElement('img')
 cardImg.setAttribute("src", "./images/work.png")
 const p1 = document.createElement('p')
 p1.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'

 cards.append(card)
 card.append(cardImg)
 card.append(p1)}
 body.append(cards)

 const app = document.createElement('section')
 app.classList.add('app')

let h2 = document.createElement('h2')
h2.textContent='О приложении'
const baner = document.createElement('div')
baner.classList.add('baner')
let play = document.createElement('img')
play.classList.add('play')
let video = document.createElement('img')
video.classList.add('video')

video.setAttribute('src','./images/banner.jpg')
play.setAttribute('src','./images/play-button.png')
app.append(h2)
baner.append(video)
baner.append(play)
app.append(baner)
body.append(app)

const fivecards = document.createElement('div')
fivecards.classList.add('fivecards')
for(let i = 0;i<5;i++){
    let fivecardsImg =document.createElement('img')
    fivecardsImg.setAttribute('src','./images/card.png')
    fivecards.append(fivecardsImg)

}
body.append(fivecards)

const project = document.createElement('div')
project.classList.add('project')
let h2h2 = document.createElement('h2')
h2h2.textContent='О проекте'
let p = document.createElement('p')
p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. 
Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех 
этапах развития их бизнеса: от разработки идеи до ее реализации.         `

project.append(h2h2)
project.append(p)
body.append(project)


const downLoad = document.createElement('section')
downLoad.classList.add('downLoad')
let h2h3 = document.createElement('h2')
h2h3.textContent= 'Скачать'
const icons = document.createElement('div')
icons.classList.add('icons')
const android = document.createElement('img')
android.classList.add('android')
android.setAttribute('src','./images/android.png')
const qr = document.createElement('img')
qr.classList.add('qr')
qr.setAttribute('src','./images/qr.png')
let pp = document.createElement('p')
p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. 
Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех 
этапах развития их бизнеса: от разработки идеи до ее реализации.`
downLoad.append(h2h3)
downLoad.append(icons)
icons.append(android)
icons.append(qr)
downLoad.append(pp)
body.append(downLoad)

const footer = document.createElement('footer')
let h3 = document.createElement('h3')
h3.textContent='SOME'
const social = document.createElement('div')
social.classList.add('social')

for(let i = 0; i<3; i++){
let fb = document.createElement('img')

    if(i==0){
        fb.setAttribute('src','./images/facebook.png')
        
        
    }else if (i==1){
        fb.setAttribute('src','./images/instagram (1).png')
    }else{
        fb.setAttribute('src','./images/vk.png')
    }
social.append(fb)


}
const descr = document.createElement('div')
descr.classList.add('descr')
const descrItem = document.createElement('div')
descrItem.classList.add('descr-item')
let h4 = document.createElement('h4')
h4.textContent='Контакты'
let p4 = document.createElement('p')
p4.innerHTML=` Tel.: +996 (312) 915000 + Еxt. <br>
Fax: +996 (312) 915 028`


const descrItem2 = document.createElement('div')
descrItem2.classList.add('descr-item')
let h5 = document.createElement('h4')
h5.textContent='Адреса'
let p5 = document.createElement('p')
p5.innerHTML=`    American University of Central Asia <br>
7/6 Aaly Tokombaev Street <br>
Bishkek, Kyrgyz Republic 720060`

const descrItem3 = document.createElement('div')
descrItem3.classList.add('descr-item')
let h6 = document.createElement('h4')
h6.textContent='Помощь'
let p6 = document.createElement('p')
p6.innerHTML=`       Помощь <br>
Помощь <br> 
Помощь`


footer.append(h3)
footer.append(social)

descr.append(descrItem,descrItem2,descrItem3 )
descrItem.append(h4)
descrItem.append(p4)
footer.append(descr)
descrItem2.append(h5)
descrItem2.append(p5)

descrItem3.append(h6)
descrItem3.append(p6)


body.append(footer)





