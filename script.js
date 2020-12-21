
//================================= Début Collection ============================================//
let collection = [{
 logo: "logo-Neon fab fa-10x fa-markdown" ,
 link:"./MarkdownEditor/markdown.html", 
 title: "MARKDOWN EDITOR",
},

{
  logo: "logo-Neon far fa-10x fa-clock" ,
  link:"./Pomodoro/pomodoro.html", 
  title: "POMODOROTIMER",
 },

 {
  logo: "logo-Neon far fa-10x fa-window-maximize" ,
  link:"./Horloge-Time/Horloge.html", 
  title: "LANDING PAGE",
 },

 {
  logo: "logo-Neon fas fa-10x fa-question-circle" ,
  link:"../Quizz-Api/quizz-Api.html", 
  title: "QUIZZ",
 },

 {
  logo: "logo-Neon fas fa-10x fa-paint-brush",
  link:"./Paint/paint.html", 
  title: "Paint",
 },
];
//================================= Collection Fin ============================================//
//================================= Début DOM  ============================================//
const sectionContainer = document.querySelector("section");
sectionContainer.innerHTML= "" ;

for (let element of collection ) {
  
  let cardBody = document.createElement('div')
  cardBody.className = "cardBody col-sm-6 col-lg-2 col-xl-2 mt-4 text-center"
  sectionContainer.appendChild(cardBody)

//------------------( Div: Logo )------------------//

  let Logo = document.createElement('div')
  Logo.className = "logo"
  cardBody.appendChild(Logo)

  let a_Logo = document.createElement('a')
  a_Logo.className = "aLogo"
  a_Logo.href = element.link
  //a_Logo.target = "_blank"
  Logo.appendChild(a_Logo)

  let i_Logo = document.createElement('i')
  i_Logo.className = element.logo
  a_Logo.appendChild(i_Logo)

  //------------------( Div: Text )------------------//
  
  let Text = document.createElement('div')
  cardBody.appendChild(Text)

  let a_Text = document.createElement('a')
  a_Text.className = "aText btn mt-4"
  a_Text.href = element.link
  //a_Text.target = "_blank"
  a_Text.textContent = element.title;
  Text.appendChild(a_Text)
 
}
//================================= DOM fin ============================================//
//================================= "click Event" ============================================//
