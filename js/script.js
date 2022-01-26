
let food_opt = "";
let drink_opt = "";
let dessert_opt = "";

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

    
}