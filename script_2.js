let cheque = [
    {
        name: "Apple",
        count: 15,
        price: 12.90
    },
    {
        name: "Juice",
        count: 2,
        price: 30.90
    },
    {
        name: "Bread",
        count: 1,
        price: 20.90
    },
    {
        name: "Meat",
        count: 3,
        price: 90.50
    },
]

function showCheque(check) {
    document.write(`<div>`)
    for (i = 0; i < check.length; i++) {
        document.write(`<p>${check[i].name}, ${check[i].count}, ${check[i].price} UAH</p>`);
    }
    document.write(`</div>`)
}

function sum(check) {
    s = 0;
    for (i = 0; i < check.length; i++) {
        s += check[i].count * check[i].price;
    }
    return s;
}

function maxPrice(check) {
    max = check[0];
    for (i = 1; i < check.length; i++) {
        if (check[i].count * check[i].price > max.count * max.price)
            max = check[i];
    }
    return max;
}

showCheque(cheque);
document.write("<hr>");
document.write(`<p> SUM: ${sum(cheque)} UAH</p>`);
document.write("<hr>");
max = maxPrice(cheque);
document.write(`<p> MAX: ${max.name}, ${max.count}, ${max.price} UAH</p>`);
document.write("<hr>");
