// document.getElementById("count-el").innerText = 5

let username = "per"

let message = "You have three new notifications"

console.log(message + username)

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
    countEl.innerText = count
}