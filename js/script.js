window.onload = function(){
    initialState();
}

function initialState(){    
    const btn = document.querySelector('footer button');
    btn.disabled = true;
}

let food = null;
let drink = null;
let dessert = null;

let foodName;
let foodPrice;

let drinkName;
let drinkPrice;

let dessertName;
let dessertPrice;

let valTot

/* Fução que marca os items selecionados */
function selectFood(element, classFather){
    const selectedFood = document.querySelector(`#${classFather} .selected`);
    if(selectedFood !== null && selectedFood !== element) {
        selectedFood.classList.remove('selected');
        selectedFood.querySelector('button').classList.add('hide');
    }
    
    element.classList.toggle('selected');
    element.querySelector('button').classList.toggle('hide');
    btn_active();
}




// ativa/destiva botão de fechar pedido
function btn_active(){    
    const btn = document.querySelector('footer button');

    food = document.querySelector('#food .selected');
    drink = document.querySelector('#drink .selected');
    dessert = document.querySelector('#dessert .selected');

    // se foi escolhido food e drink e dessert
    if(food != null && drink != null && dessert != null){
        btn.classList.add('closeOrder','cursorEnable');
        btn.disabled = false;
        btn.innerHTML = "Fechar pedido";
         
        // nome preço food
        foodName = food.querySelector('strong').innerHTML;
        foodPrice = food.querySelector('.valor').innerHTML.replace(/R\$ /, "").replace(/,/, ".");
        // nome preço drink        
        drinkName = drink.querySelector('strong').innerHTML;
        drinkPrice = drink.querySelector('.valor').innerHTML.replace(/R\$ /, "").replace(/,/, ".");
        // nome preço dessert 
        dessertName = dessert.querySelector('strong').innerHTML;
        dessertPrice = dessert.querySelector('.valor').innerHTML.replace(/R\$ /, "").replace(/,/, ".");
        
    } 
    else{
        btn.classList.remove('closeOrder','cursorEnable');
        btn.disabled = true;
        btn.innerHTML = "<p>Selecione os 3 itens</p><p>para fechar o pedido</p>";

    } 
}

function popup(){
    const confirmOrder = document.querySelector('.background');

    confirmOrder.querySelector('div>div:nth-child(2)>p:nth-child(1)').innerHTML = foodName;
    confirmOrder.querySelector('div>div:nth-child(2)>p:nth-child(2)').innerHTML = foodPrice.replace(/\./, ",");

    confirmOrder.querySelector('div>div:nth-child(3)>p:nth-child(1)').innerHTML = drinkName;
    confirmOrder.querySelector('div>div:nth-child(3)>p:nth-child(2)').innerHTML = drinkPrice.replace(/\./, ",");

    confirmOrder.querySelector('div>div:nth-child(4)>p:nth-child(1)').innerHTML = dessertName;
    confirmOrder.querySelector('div>div:nth-child(4)>p:nth-child(2)').innerHTML = dessertPrice.replace(/\./, ",");

    const val1 = parseFloat(foodPrice);
    const val2 = parseFloat(drinkPrice);
    const val3 = parseFloat(dessertPrice);
    

    valTot = (val1 + val2 + val3).toFixed(2).replace(/\./, ",");

    const total = confirmOrder.querySelector('div>div>strong:nth-child(2)');
    total.innerHTML = `R$ ${valTot}`;
    
    confirmOrder.classList.toggle('hide');
}

/* ## Retirado por só poder utilizar prompt ## */
// alterna entra tela de confirmar pedido e dados pessoais
//function order_data(){
//    document.querySelector('.confirmOrder').classList.toggle('hide');    
//    document.querySelector('.personData').classList.toggle('hide');
//}

/* Envia mensagem whatsapp */

function sendMensage(){
    // Recebe nome e endreço do usuário
    const name = prompt("Seu nome");
    if(name === null) return;
    const address = prompt("Seu endereço");
    if(address === null) return;

    /* ## Retirado por só poder utilizar prompt ## */
    //const name = document.querySelector('.personData .name').value;
    //const address = document.querySelector('.personData .address').value;

    // montagem da mensagem
    let text = "Olá, gostaria de fazer o pedido:";
    text += `\n- Prato: ${foodName}`;
    text += `\n- Bebida: ${drinkName}`;
    text += `\n- Sobremesa: ${dessertName}`;
    text += `\nTotal: R$ ${valTot}`;
    text += `\n\nNome: ${name}`;
    text += `\nEndereço: ${address}`;

    // Converte mensagem para url
    text = window.encodeURIComponent(text);

    // Abre link na mesma tela
    window.open(`https://wa.me/5573999517956?text=${text}`);
}