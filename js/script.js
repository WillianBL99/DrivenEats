window.onload = function(){
    initialState();
}

let food_opt = "";
let drink_opt = "";
let dessert_opt = "";

function initialState(){    
    document.getElementById('btn_next_step').disabled = true;
    alert('chamou');
}


/* food selection */
function select_food(food){
    
    var tag_div = document.querySelector('#food');
    var tag_div_item = tag_div.querySelectorAll('.item');
    
    for(var i=0; i<tag_div_item.length; i++){
        tag_div_item[i].style.padding = "14px";
        tag_div_item[i].style.border = "0 solid black";
        var btn = tag_div_item[i].querySelector('div button');
        btn.style.display = "none";
    }

    if(food_opt != food){
        food.style.border = "3px solid #32B72F";
        food.style.padding = "11px";

        food.querySelector('div button').style.display = "block";
        food_opt = food;
    }
    
    else {
        food_opt = "";
        food.querySelector('div button').style.display = "none";
    }   
    btn_active();
}

/* drink selection */
function select_drink(drink){
    var tag_div = document.querySelector('#drink');
    var tag_div_item = tag_div.querySelectorAll('.item');
    
    for(var i=0; i<tag_div_item.length; i++){
        tag_div_item[i].style.padding = "14px";
        tag_div_item[i].style.border = "0 solid black";
        var btn = tag_div_item[i].querySelector('div button');
        btn.style.display = "none";
    }

    if(drink_opt != drink){
        drink.style.border = "3px solid #32B72F";
        drink.style.padding = "11px";

        drink.querySelector('div button').style.display = "block";
        drink_opt = drink;
    }
    
    else {
        drink_opt = "";
        drink.querySelector('div button').style.display = "none";
    }   
    btn_active();
}

/* dessert selection */
function select_dessert(dessert){
    
    var tag_div = document.querySelector('#dessert');
    var tag_div_item = tag_div.querySelectorAll('.item');
    
    for(var i=0; i<tag_div_item.length; i++){
        tag_div_item[i].style.padding = "14px";
        tag_div_item[i].style.border = "0 solid black";
        var btn = tag_div_item[i].querySelector('div button');
        btn.style.display = "none";
    }

    if(dessert_opt != dessert){
        dessert.style.border = "3px solid #32B72F";
        dessert.style.padding = "11px";

        dessert.querySelector('div button').style.display = "block";
        dessert_opt = dessert;
    }
    
    else {
        dessert_opt = "";
        dessert.querySelector('div button').style.display = "none";
    }   
    btn_active();
}

function btn_active(){    
    var btn = document.getElementById('btn_next_step');

    if(food_opt != "" && drink_opt != "" && dessert_opt != ""){
        btn.style.backgroundColor = "#32B72F";
        btn.disabled = false;        
    } 
    else{
        btn.style.backgroundColor = "#CBCBCB";
        btn.disabled = true;
    } 
}

function closerOrder(){
    alert('foi');
}

function popup(state){
    const btnNext = document.getElementById('btn_next_step');
    if(state){
        btnNext.style.display = "flex";
        
    } else {
        btnNext.style.display = "none";
    }
}