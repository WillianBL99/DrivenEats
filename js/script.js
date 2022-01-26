


let food_opt;

function select_food(food){
    var tag_div = document.getElementById('food');
    var tag_div_item = tag_div.getElementsByClassName('item');
    
    for(var i=0; i<tag_div_item.length; i++){
        tag_div_item[i].style.padding = "14px";
        tag_div_item[i].style.border = "0 solid black";
    }

    if(food_opt != food){
        food.style.border = "3px solid #32B72F";
        food.style.padding = "11px";
        food_opt = food;
    }

    else {
        food_opt = "";
    }

    
}