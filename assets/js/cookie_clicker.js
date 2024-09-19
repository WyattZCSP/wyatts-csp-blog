const cookieButton = document.getElementById("cookie-clicker-btn") 
const moneyDisplay = document.getElementById("money")
const upgradeCostDisplay = document.getElementById("cost")
const upgradeButton = document.getElementById("upgrade-btn")
const levelDisplay = document.getElementById("level")
upgradeButton.addEventListener("click", upgradeCookie)
cookieButton.addEventListener("click", () => {
    addCookie(20*level)
})
let cookies = 0
let level = 1
let upgradeCost = 20
levelDisplay.innerHTML = level
upgradeCostDisplay.innerHTML = upgradeCost
moneyDisplay.innerHTML = cookies
function addCookie (amount) {
    cookies += amount
    console.log(cookies)
    moneyDisplay.innerHTML = cookies
}
function upgradeCookie () {
    if (cookies<upgradeCost) {
        return;
    }
    cookies -= upgradeCost
    level += 1
    upgradeCost *= 2
    upgradeCostDisplay.innerHTML = upgradeCost
    moneyDisplay.innerHTML = cookies
    levelDisplay.innerHTML = level
}


