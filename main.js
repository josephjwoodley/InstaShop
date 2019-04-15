document.getElementById('theButton').addEventListener('click', myFunction)


function myFunction() {
    let item = document.getElementById("item").value
    // console.log(item);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log(item);
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            console.log(response.grocery_items);
            for (var i = 0; i < response.grocery_items.length; i++) {
                if ((response.grocery_items[i].name) == item) {
                    var results = (response.grocery_items[i].aisle_location);
                    console.log(results);
                    document.getElementById('myList').innerHTML = results;
                }
            }
        }
    }
    xhttp.open("GET", "items.json", true);
    xhttp.send();
}
