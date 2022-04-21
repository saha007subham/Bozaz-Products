document.querySelector("form").addEventListener("submit", bozazFn);

function bozazFn(){
    event.preventDefault()

    var catagory = document.querySelector("#category").value
    var title = document.querySelector("#name").value
    var price = document.querySelector("#price").value

    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = catagory
    var td2 = document.createElement("td")
    td2.innerText = title
    var td3 = document.createElement("td")
    td3.innerText = price

    tr.append(td1,td2,td3)

    document.querySelector("tbody").append(tr)
}