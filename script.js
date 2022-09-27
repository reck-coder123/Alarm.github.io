let b1=document.getElementById("increase");
let b2= document.getElementById("decrese");
let b3=document.getElementById("increase1");
let b4= document.getElementById("decrese1");
let set=document.getElementById("set");
let alarmtime;
let isalarm=false;
var sound = new Audio("./files/Alarm.mp3");
		sound.loop = true;

function alarm(){

b1.addEventListener("click",function(){
    let h2=parseInt(document.getElementById("hour2").innerHTML);
    let h1=parseInt(document.getElementById("hour1").innerHTML);
    
    if(h2<9){
        document.getElementById("hour2").innerHTML=h2+1;
        if(h2==3 && h1==2){
            document.getElementById("hour1").innerHTML=0;
            document.getElementById("hour2").innerHTML=0;
        }
    }
    else if(h2>=9){
        document.getElementById("hour2").innerHTML=0;
        document.getElementById("hour1").innerHTML=h1+1;
    }

})

b2.addEventListener("click",function(){
    let h2=parseInt(document.getElementById("hour2").innerHTML);
    let h1=parseInt(document.getElementById("hour1").innerHTML);
    
    if(h2>=1){
        document.getElementById("hour2").innerHTML=h2-1;
    }
    else if(h2<1){
        
        document.getElementById("hour2").innerHTML=9;
        if(h2==0&&h1==0){
            document.getElementById("hour1").innerHTML=2;
            document.getElementById("hour2").innerHTML=3;
        }
        else{document.getElementById("hour1").innerHTML=h1-1;}
        

    }

})

b3.addEventListener("click",function(){
    let m2=parseInt(document.getElementById("minute2").innerHTML);
    let m1=parseInt(document.getElementById("minute1").innerHTML);
    
    if(m2<9){
        document.getElementById("minute2").innerHTML=m2+1;
    }
    else if(m2>=9){
        if(m2==9 && m1==5){
            document.getElementById("minute1").innerHTML=0;
            document.getElementById("minute2").innerHTML=0;
        }
        else{document.getElementById("minute2").innerHTML=0;
        document.getElementById("minute1").innerHTML=m1+1;}
        
    }

})

b4.addEventListener("click",function(){
    let m2=parseInt(document.getElementById("minute2").innerHTML);
    let m1=parseInt(document.getElementById("minute1").innerHTML);
    
    if(m2>=1){
        document.getElementById("minute2").innerHTML=m2-1;
    }
    else if(m2<1){
        
        document.getElementById("minute2").innerHTML=9;
        if(m2==0&&m1==0){
            document.getElementById("minute1").innerHTML=5;
            document.getElementById("minute2").innerHTML=9;
        }
        else{document.getElementById("minute1").innerHTML=m1-1;}
        

    }

})
set.addEventListener("click",function(){
    let h2=parseInt(document.getElementById("hour2").innerHTML);
    let h1=parseInt(document.getElementById("hour1").innerHTML);
    let m2=parseInt(document.getElementById("minute2").innerHTML);
    let m1=parseInt(document.getElementById("minute1").innerHTML);
    if(isalarm){
        alarmtime=" ";
        sound.pause();
        document.getElementById("set").innerHTML="<button>Set alarm</button>";
        return isalarm = false;
    }
    let timee=h1.toString()+h2.toString()+":"+m1.toString()+m2.toString();
    isalarm=true;
    alarmtime=timee;
    // console.log(timee);
    document.getElementById("set").innerHTML="<button>clear alarm</button>";
    
})
setInterval(() => {
    var datetime = new Date();
    if (datetime.getHours()==0){
        var time="0"+datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
    }
    else{var time=datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();}
    
    //console.log(time);
    document.getElementById("time").textContent = time; 
    if(datetime.getHours()<=9 && datetime.getMinutes()<=9){if(alarmtime=="0"+datetime.getHours() + ":" +"0"+datetime.getMinutes() ){
        sound.play();
    }}
    else if(datetime.getMinutes()>9 && datetime.getHours()<=9){if(alarmtime=="0"+datetime.getHours() + ":" +datetime.getMinutes() ){
        sound.play();
    }}
    else{
        if(datetime.getHours()>9){if(alarmtime==datetime.getHours() + ":" + datetime.getMinutes() ){
            sound.play();
        } 
    }
    
} 
}, 1000);


}



alarm();




