window.onload = populateSelect();

function populateSelect() {

    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = "items.json";        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // PARSE JSON DATA.
            var theList = JSON.parse(xhr.responseText);

            var ele = document.getElementById('theSelect');
            for (var i = 0; i < theList.grocery_items.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = ele.innerHTML +
                    '<option value>' + theList.grocery_items[i].name + '</option>';
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Selected Item: <b>' + ele.options[ele.selectedIndex].text;
}

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
