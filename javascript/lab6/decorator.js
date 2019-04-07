window.onload=function(){
    "use strict"
    /** 1st part **/

    // document.getElementById("clickme").onclick=function(){
    //     document.getElementById("sizeplus").style.fontSize="24pt";

    // };



    /** 2nd part **/

    // document.getElementById("check").onchange=function(){
    //   if(document.getElementById("check").checked){
    //    document.getElementById("sizeplus").style.fontWeight="bold";
    //    document.getElementById("sizeplus").style.color="green";
    //    document.getElementById("sizeplus").style.textDecoration="underline"
    //   }else{
    //     document.getElementById("sizeplus").style.fontWeight="normal";
    //     document.getElementById("sizeplus").style.color="black";
    //    document.getElementById("sizeplus").style.textDecoration="none";
    //   }
    // }


    /** 3th part **/
    var addFontSize=function(){
        var size=window.getComputedStyle(document.getElementById("sizeplus")).fontSize;
        document.getElementById("sizeplus").style.fontSize=(parseInt(size,10)+2)+"px";

    }
    var timer=null;
    document.getElementById("clickme").onclick=function(){
        if(timer===null){
            timer= setInterval(addFontSize, 500);
        }else{
            clearInterval(timer);
            timer=null;
        }
    }
    /** 4th part **/
    document.getElementById("check").onchange=function(){
        var body1=document.getElementsByTagName("body")[0];
        if(document.getElementById("check").checked){
            body1.style.backgroundImage="url(hundred-dollar-bill.jpg)";
            // body1.style.backgroundImage=   "hundred-dollar-bill.jpg";
            ;        }else{
            body1.style.backgroundImage="none";
        }
    }

    /** 5th part **/
    function igpayConvert(){
        let value = document.getElementById("sizeplus").value.split(" ");
        let newValue = "";

        for(let i = 0; i < value.length; i++){
            for(let j = 0; j < value[i].length; j++){
                switch(value[i][j]){
                    case "a":
                    case "A":
                    case "e":
                    case "E":
                    case "i":
                    case "I":
                    case "o":
                    case "O":
                    case "u":
                    case "U":
                    case "y":
                    case "Y":
                        newValue += value[i].substring(j,value[i].length)+value[i].substring(0,j)+"ay ";
                        j = value[i].length;
                        break;
                }
            }
        }

        document.getElementById("sizeplus").value = newValue;
    }

    document.getElementsByName("igpay")[0].onclick = igpayConvert;

    /** 6th part **/
    function malko(){
        let value = document.getElementById("sizeplus").value.split(" ");
        let newValue = "";
        for(let i = 0; i < value.length; i++){
            newValue += ((value[i].length >=5) ? "Malkovitch" : value[i]) + " ";
        }

        document.getElementById("sizeplus").value = newValue;

    }
    document.getElementsByName("malko")[0].onclick = malko;
}


