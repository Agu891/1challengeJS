const datos = [
    {
        id: 1,
        title: "Batman returns",
        year : 1992
    },
    {
        id: 2,
        title: "Avengers infinity war",
        year : 2018
    },
    {
        id: 3,
        title: "Avengers Endgame",
        year : 2019
    }
]


datos.push({id: 4, title: "Wonderwoman 1984", year : 2020})

console.log(datos.flatMap(item => item.year ))
