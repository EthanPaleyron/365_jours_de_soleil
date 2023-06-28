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
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
    },

    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
        over_eight: "over_eight",
    },
    {
        days: "lun",
        number: "20",
        sky: "../public/fog.png",
        higherTemp: "14",
        lowerTemp: "14",
        over_eight: "over_eight",
    },
];

for (let article of newPrevisions) {
    articles.innerHTML += `
    <article class="${article.over_eight}">
        <h2>${article.days} <span>${article.number}</span></h2>
        <img src="${article.sky}" alt="prévisions météo">
        <p>
            <span class="higher_temperature degree_celsius">${article.higherTemp}</span> | <span class="lower_temperature degree_celsius">${article.lowerTemp}</span></p>
    </article>
    `
}