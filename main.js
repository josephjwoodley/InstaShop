window.onload = populateSelect;

function populateSelect() {
    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(),
        method = "GET",
        overrideMimeType = "application/json",
        url = "items.json"; // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // PARSE JSON DATA.
            var theList = JSON.parse(xhr.responseText);
            console.log('inside if statement inside populateSelect');

            var ele = document.getElementById("theSelect");
            for (var i = 0; i < theList.grocery_items.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML =
                    ele.innerHTML +
                    "<option value=>" +
                    theList.grocery_items[i].name +
                    "</option>";
                console.log(i);
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById("msg");
    msg.innerHTML = "Selected Item: <b>" + ele.options[ele.selectedIndex].text;

    function myFunction() {
        let item = ele.options[ele.selectedIndex].text;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log('inside if statement inside show');
                var response = JSON.parse(xhttp.responseText);
                for (var i = 0; i < response.grocery_items.length; i++) {
                    if ((response.grocery_items[i].name) == item) {
                        //var results = (response.grocery_items[i].aisle_location);
                        var results = (response.grocery_items[i].aisle_location);
                        var results2 = (response.grocery_items[i].price);
                        document.getElementById("myList").innerHTML = results;
                        document.getElementById("myList2").innerHTML = results2;
                    }
                }
            }
        }
        xhttp.open("GET", "items.json", true);
        xhttp.send();
    }
    myFunction();
}

// document.getElementById('theButton').addEventListener('click', myFunction2)

// function myFunction2() {
//     let item = document.getElementById("item").value

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var response = JSON.parse(xhttp.responseText);
//             for (var i = 0; i < response.grocery_items.length; i++) {
//                 if ((response.grocery_items[i].name) == item) {
//                     var results = (response.grocery_items[i].aisle_location);
//                     console.log(results);
//                     document.getElementById("myList").innerHTML = results;
//                 }
//             }
//         }
//     }
//     xhttp.open("GET", "items.json", true);
//     xhttp.send();
// }

