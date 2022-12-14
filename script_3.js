let styles = [
    {
        name: "color",
        value: "yellow"
    },
    {
        name: "font-size",
        value: "50px"
    },
    {
        name: "font-family",
        value: "Consolas"
    },
    {
        name: "background-color",
        value: "blue"
    },
    {
        name: "padding",
        value: "15px"
    }
]

function show(st){
    document.write(`<p style = "${st[0].name}: ${st[0].value}; ${st[1].name}: ${st[1].value}; ${st[2].name}: ${st[2].value}; ${st[3].name}: ${st[3].value};${st[4].name}: ${st[4].value};"> Lorem ipsum</p>`)
}

show(styles);