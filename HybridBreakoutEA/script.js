// Smooth scroll

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', e => {
    
    e.preventDefault();
    
    document.querySelector(link.getAttribute('href')).scrollIntoView({
    behavior:'smooth'
    })
    
    })
    
    })
    
    
    // Counter animation
    
    const counters = document.querySelectorAll('.counter')
    
    counters.forEach(counter => {
    
    let value = counter.innerText
    
    counter.innerText = 0
    
    let update = () => {
    
    let target = parseFloat(value)
    
    let current = parseFloat(counter.innerText)
    
    let increment = target / 50
    
    if(current < target){
    
    counter.innerText = (current + increment).toFixed(2)
    
    setTimeout(update,20)
    
    }else{
    
    counter.innerText = value
    
    }
    
    }
    
    update()
    
    })

    //
    const questions = document.querySelectorAll(".faq-question")

questions.forEach(q => {

q.addEventListener("click", () => {

let answer = q.nextElementSibling

if(answer.style.maxHeight){
answer.style.maxHeight = null
}else{
answer.style.maxHeight = answer.scrollHeight + "px"
}

})

})

//
const ctx = document.getElementById("equityChart");

new Chart(ctx, {
type: "line",

data: {

labels: [
"Jan","Feb","Mar","Apr","May","Jun",
"Jul","Aug","Sep","Oct","Nov","Dec"
],

datasets: [{

label: "Account Balance",

data: [
10000,
10250,
10400,
10800,
11000,
11250,
11800,
12050,
12500,
12900,
13200,
13500
],

fill: true,
tension: 0.3

}]
},

options: {

plugins:{
legend:{display:false}
},

scales:{
y:{
beginAtZero:false
}
}

}

});

//
function calculateProfit(){

    let deposit = parseFloat(document.getElementById("deposit").value)
    let growth = parseFloat(document.getElementById("growth").value)/100
    let months = parseInt(document.getElementById("months").value)
    
    let balance = deposit
    
    for(let i=0;i<months;i++){
    
    balance = balance + (balance * growth)
    
    }
    
    document.getElementById("result").innerText =
    "Estimated Balance: $" + balance.toFixed(2)
    
    }

    //
    function activateLicense(){

        let key = document.getElementById("licenseKey").value
        
        if(key === "HYBRID-2026-PRO"){
        
        document.getElementById("licenseMessage").innerText =
        "License Activated Successfully"
        
        }else{
        
        document.getElementById("licenseMessage").innerText =
        "Invalid License Key"
        
        }
        
        }

        //
        async function buyEA(){

            let email = prompt("Enter your email")
            
            let response = await fetch("http://localhost:3000/buy",{
            
            method:"POST",
            
            headers:{
            "Content-Type":"application/json"
            },
            
            body:JSON.stringify({email})
            
            })
            
            let data = await response.json()
            
            alert("License sent to your email: " + data.license)
            
            }

//
function animateValue(id,start,end,duration){

    let range=end-start
    let current=start
    let increment=end>start?1:-1
    let stepTime=Math.abs(Math.floor(duration/range))
    
    let obj=document.getElementById(id)
    
    let timer=setInterval(function(){
    
    current+=increment
    
    obj.innerText=current
    
    if(current==end){
    clearInterval(timer)
    }
    
    },stepTime)
    
    }
    
    animateValue("trades",0,515,2000)
    animateValue("profit",0,216,2000)
    animateValue("years",0,2,2000)