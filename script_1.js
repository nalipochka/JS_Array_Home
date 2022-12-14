let shoppingList = [
    {
        name: "Apple",
        count: 15,
        isBuy: true
    },
    {
        name: "Juice",
        count: 2,
        isBuy: false
    },
    {
        name: "Bread",
        count: 1,
        isBuy: false
    },
    {
        name: "Meat",
        count: 3,
        isBuy: true
    },
];

function showList(list) {
    tmp = [];
    Object.assign(tmp, list);
    document.write("<div>");
    for (i = 0; i < tmp.length; i++) {
        if (tmp[i].isBuy == true) {
            document.write(`<p>${tmp[i].name}, ${tmp[i].count}, ${tmp[i].isBuy}</p>`);
            tmp.splice(i--, 1);
        }
    }
    for (i = 0; i < tmp.length; i++){
        document.write(`<p>${tmp[i].name}, ${tmp[i].count}, ${tmp[i].isBuy}</p>`);
    }
    document.write("</div>");
}

function addProduct(list, productName){
    let selectedProduct = list.findIndex((elem) =>{
        return elem.name === productName
    });
    if(selectedProduct == -1){
        list.push({
            name: productName,
            count: 1,
            isBuy: false
        });
    }
    else{
        list[selectedProduct].count = list[selectedProduct].count + 1;
    }
}

function buyProduct(list, productName){
    let selectedProduct = list.findIndex((elem) =>{
        return elem.name === productName
    });
    if(selectedProduct == -1){
        throw new Error("Not found!");
    }
    else{
        list[selectedProduct].isBuy = true;
    }
}

showList(shoppingList);
document.write("<hr>");
addProduct(shoppingList, "Lobster");
showList(shoppingList);
document.write("<hr>");
buyProduct(shoppingList, "Bread");
showList(shoppingList);
