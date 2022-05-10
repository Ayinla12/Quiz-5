const correctAnswers=["A","B","B","A","B"];
const form=document.querySelector(".main-questions");
const span=document.querySelector(".score");





form.addEventListener("submit", e =>{
    e.preventDefault();
    scrollTo(0,0);
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value,form.q3.value,form.q4.value,form.q5.value];
//check score
userAnswers.forEach((answer,index)=>{
    if(answer===correctAnswers[index]){
        score+=20;
    }
    //show score on page 
    span.style.display="block"
})
//animate score
let output=0;
const timer=setInterval(()=>{
    span.textContent=` Your score: ${output}%`
    if(output===score){
        clearInterval(timer)
    }else{
        output++;
    }
})

},10);