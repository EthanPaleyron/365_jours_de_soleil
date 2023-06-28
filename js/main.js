const articles = document.getElementById("articlePrevisions");

const newPrevisions = [
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "mar",
        number: "21",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "mer",
        number: "22",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "jeu",
        number: "23",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "ven",
        number: "24",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "sam",
        number: "25",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "dim",
        number: "26",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "27",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },

    {
        days: "mar",
        number: "28",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
        over_eight: "over_eight",
    },
    {
        days: "mer",
        number: "29",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
        over_eight: "over_eight",
    },
];

for (let article of newPrevisions) {
    articles.innerHTML += `
    <article class="previsions ${article.over_eight}">
        <h2>${article.days} <span>${article.number}</span></h2>
        <img src="${article.sky}" alt="prévisions météo">
        <p>
            <span class="higher_temperature degree_celsius">${article.higherTemp}</span> | <span class="lower_temperature degree_celsius">${article.lowerTemp}</span></p>
    </article>
    `
}