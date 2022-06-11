const date = new Date()

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('location').textContent = data.location.name;
    })
setInterval(startingCurr,1000)

function startingCurr(){
    fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then(res=>{
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()})
    .then(data=>{
        document.getElementById('crypto').innerHTML=`<div id="crypto-top">
        </div>`
        document.getElementById('crypto-top').innerHTML = `<img class="crypto-img" src=${data.image.small} />
        <p>${data.name}</p>
        `
        document.getElementById("crypto").innerHTML += `
            <p>&#x2705: $${data.market_data.current_price.usd}</p>
            <p>&#128070: $${data.market_data.high_24h.usd}</p>
            <p>&#128071: $${data.market_data.low_24h.usd}</p>
        `})
    .catch(err => console.error("Something went wrong"))
}
setInterval(()=>{
    const date = new Date()
    document.getElementById('time').innerHTML=`<p>${date.toLocaleTimeString("en-us",{timeStyle:"short"})}</P>`
}, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res=>{
            if(!res.ok){
                throw Error("Something went wrong!")
            }
            return res.json()
        })
        .then(data=>{
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}&degC</p>
            `})
            .catch(err=>console.log(err))
});