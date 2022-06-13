websiteData=[
    {
        quote:'The purpose of our lives is to be happy.',
        givenBy:'Dalai Lama.',
        src:'https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'Life is what happens when you’re busy making other plans.',
        givenBy:'John Lennon.',
        src:'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'Get busy living or get busy dying',
        givenBy:'Stephen King.',
        src:'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
        givenBy:'Thomas A. Edison',
        src:'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'Train your mind to see the good in every situation.',
        givenBy:'Anonymous',
        src:'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'The happiness of your life depends upon the quality of your thoughts.',
        givenBy:'Marcus Aurelius',
        src:'https://images.pexels.com/photos/776632/pexels-photo-776632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        quote:'No matter what you’re going through, there’s a light at the end of the tunnel, and it may seem hard to get to it, but you can do it and just keep working towards it, and you’ll find the positive side of things.',
        givenBy:'Demi Lovato',
        src:'https://images.pexels.com/photos/2313677/pexels-photo-2313677.jpeg'
    },
]
let generateBtn=document.getElementById("generate");
let quote=document.getElementById("quote");
let givenBy=document.getElementById("givenby")
let quoteCon=document.getElementById("quote-container")

generateBtn.addEventListener('click',function(){
    let x=Math.floor(Math.random()*(websiteData.length));
    let html=`<h3>"${(websiteData[x]).quote}"</h3><br>
    <p>~${(websiteData[x]).givenBy}</p>`

    document.body.style.backgroundImage=`linear-gradient(to bottom, rgba(0, 0,0 , 0.5), rgba(0, 0, 0, 0.5)), url(${(websiteData[x]).src})`
   
   quoteCon.innerHTML=html;

})
