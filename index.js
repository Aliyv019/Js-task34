let i=0

setInterval(()=>{
    if(i>=3){
        i=0
    }
    
        document.querySelector('div').style.backgroundImage=`url("./photo_${i}.png")`
        i++
    
},5000)
document.querySelectorAll('button')[0].addEventListener('click',()=>{
    if(i<=0){
        i=2
    }
    else{
        i--
    }
    console.log(i);
    document.querySelector('div').style.backgroundImage=`url("./photo_${i}.png")`
})
document.querySelectorAll('button')[1].addEventListener('click',()=>{
    if(i>=2){
        i=0
    }
    else{
        i++
    }
    document.querySelector('div').style.backgroundImage=`url("./photo_${i}.png")`
})