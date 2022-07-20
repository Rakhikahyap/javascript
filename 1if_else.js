var day=require('readline-sync').question('enter the day');
var menu=require('readline-sync').question('enter the menu');
if ("sunday"==day){
    if ("breakfast"==menu){
        console.log("poha")
    }else if("lunch"==menu){
        console.log("dal,chawal")
    }else{
        console.log("roti sabji")
    }
}
else if("monday"==day){
    if ("dinner"==menu){
        console.log("paresta")
    }else if("breakfast"==menu){
        console.log("poori,sbji")
    }else{
        console.log("rice")
    }
}
else if("tuesday"==day){
    if ("dinner"==menu){
        console.log("kadi,rice,roti")
    }else if("lunch"==menu){
        console.log("pulao")
    }else if ("breakfast"==menu){
        console.log("aalu,pakaude")
    }
}
else if("wednesday"==day){
    if ("breakfast"==menu){
        console.log("tea,and macroni")
    }else if("lunch"==menu){
        console.log("finger,chips")
    }else if("dinner"==menu){
        console.log("samosa")
    }
}
else if("thursday"==day){
    if("dinner"==menu){
        console.log("papad,pulao")
    }else if("lunch"==menu){
        console.log("sbji,rice")
    }else if("breakfast"){
        console.log("momoj")
    }
}

