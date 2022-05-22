
fetch("https://open.er-api.com/v6/latest/USD")
.then(function(res) {
    console.log(res);
    return res.json();
})

.then(function(data) {
    console.log(data);

    document.getElementById("Exchange_Rate").innerHTML = data[0].url;
})