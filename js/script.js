window.onload = function(){
    initialState();
}

function initialState(){    
    document.querySelector('footer button').disabled = true;
}

let food_opt = "";
let drink_opt = "";
let dessert_opt = "";

/* food selection */
function select_food(food){
    
    const foods = document.querySelectorAll('#food .item');
    const btnFood = document.querySelectorAll('#food button');
    
    for(i = 0; i < foods.length; i++){
        foods[i].classList.remove('selected');
        foods[i].style.padding = "14px";
        btnFood[i].classList.remove('selected_button');
    }

    if(food_opt != food){
        food.classList.add('selected');
        food.style.padding = "11px";
        food.querySelector('button').classList.add('selected_button');
        food_opt = food;        
    }
    
    else {
        food_opt = "";
       // food.querySelector('div button').style.display = "none";
    }   

    btn_active();
}

/* drink selection */
function select_drink(drink){
    
    const drinks = document.querySelectorAll('#drink .item');
    const btnDrink = document.querySelectorAll('#drink button');
    
    for(i = 0; i < drinks.length; i++){
        drinks[i].classList.remove('selected');
        drinks[i].style.padding = "14px";
        btnDrink[i].classList.remove('selected_button');
    }
    
    if(drink_opt != drink){
        drink.classList.add('selected');
        drink.style.padding = "11px";
        drink.querySelector('button').classList.add('selected_button');
        drink_opt = drink;
    }
    
    else {
        drink_opt = "";
       // drink.querySelector('div button').style.display = "none";
    }   

    btn_active();
}

/* dessert selection */
function select_dessert(dessert){
    
    const desserts = document.querySelectorAll('#dessert .item');
    const btnDessert = document.querySelectorAll('#dessert button');
    
    for(i = 0; i < desserts.length; i++){
        desserts[i].classList.remove('selected');
        desserts[i].style.padding = "14px";
        btnDessert[i].classList.remove('selected_button');
    }
    
    if(dessert_opt != dessert){
        dessert.classList.add('selected');
        dessert.style.padding = "11px";
        dessert.querySelector('button').classList.add('selected_button');
        dessert_opt = dessert;
    }
    
    else {
        dessert_opt = "";
       // dessert.querySelector('div button').style.display = "none";
    }   

    btn_active();
}




// ativa/destiva botão de fechar pedido
function btn_active(){    
    const btn = document.querySelector('footer button');

    if(food_opt != "" && drink_opt != "" && dessert_opt != ""){
        btn.classList.add('closeOrder');
        btn.disabled = false;        
    } 
    else{
        btn.classList.remove('closeOrder');
        btn.disabled = true;
    } 
}

function popup(){
    const confirmOrder = document.querySelector('.background');

    const foodName = confirmOrder.querySelector('div>div:nth-child(2)>p:nth-child(1)');
    const foodPrice = confirmOrder.querySelector('div>div:nth-child(2)>p:nth-child(2)');

    const drinkName = confirmOrder.querySelector('div>div:nth-child(3)>p:nth-child(1)');
    const drinkPrice = confirmOrder.querySelector('div>div:nth-child(3)>p:nth-child(2)');

    const dessertName = confirmOrder.querySelector('div>div:nth-child(4)>p:nth-child(1)');
    const dessertPrice = confirmOrder.querySelector('div>div:nth-child(4)>p:nth-child(2)');

    
    foodName.innerHTML = food_opt.querySelector('strong').innerHTML;
    foodPrice.innerHTML = food_opt.querySelector('.valor > span').innerHTML;
    
    drinkName.innerHTML = drink_opt.querySelector('strong').innerHTML;
    drinkPrice.innerHTML = drink_opt.querySelector('.valor > span').innerHTML;
    
    dessertName.innerHTML = dessert_opt.querySelector('strong').innerHTML;
    dessertPrice.innerHTML = dessert_opt.querySelector('.valor > span').innerHTML;

    const val1 = parseFloat(foodPrice.innerHTML.replace(/,/,"."));
    const val2 = parseFloat(drinkPrice.innerHTML.replace(/,/,"."));
    const val3 = parseFloat(dessertPrice.innerHTML.replace(/,/,"."));
    
    const valTot = (val1 + val2 + val3).toFixed(2).replace(/\./, ",");

    const total = confirmOrder.querySelector('div>div>strong:nth-child(2)');
    total.innerHTML = `R$ ${valTot}`;
    
    confirmOrder.classList.toggle('hide');
}

/* Envia mensagem whatsapp */

function sendMensage(){
    // Recebe nome e endreço do usuário
    const txtHeader = "Por favor preencha as seguintes informações:\n";
    const name = prompt(txtHeader + 'nome:')
    const address = prompt(txtHeader + 'endereco:')
    
    let optFood = "";
    let optDrink = "CocaCola";
    let optDessert = "Mussi de maracujá";
    let total = "R$ 27,93";

    // montagem da mensagem
    let text = "Olá, gostaria de fazer o pedido:";
    text += `\n- Prato: ${optFood}`;
    text += `\n- Bebida: ${optDrink}`;
    text += `\n- Sobremesa: ${optDessert}`;
    text += `\nTotal: ${total}`;
    text += `\n\nNome: ${name}`;
    text += `\nEndereço: ${address}`;

    // Converte mensagem para url
    text = window.encodeURIComponent(text);

    // Abre link na mesma tela
    window.open(`https://wa.me/5573998573119?text=${text}`);
}