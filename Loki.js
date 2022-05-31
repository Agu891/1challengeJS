const enemigo = "Hulk"

const loki_disfraces = {
    Ironman: "Thanos",
    Thor : "Odin",
    Hulk : "Spiderman",
    Wolwerine : "Magneto"
   
}

const lokiEnemies = (lokiDisfraces, enemigo) => {
    return lokiDisfraces[enemigo] ? lokiDisfraces[enemigo] : "Loki"
}

// const loki_default = "Loki"

// const loki = loki_disfraces[enemigo] || loki_default

console.log(lokiEnemies(loki_disfraces, "Ironman"))