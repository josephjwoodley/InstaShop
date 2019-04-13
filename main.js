function myFunction()
                    {
                        var x;
                        var input_item = prompt("Please enter your name Grocery item");
        
                        if (input_item!=null)
                        {
                            x = "Grocery item: " + input_item;
                            document.getElementById("demo").innerHTML = x;
                        }
                    }

                    var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var response = JSON.parse(xhttp.responseText);
                                console.log(response.grocery_items);
                                console.log(response.grocery_items[0].aisle_location);                                
                                console.log(response.grocery_items[1]);

                                // for (var i = 0; i < grocery_items.length; i++) {
                                //     if input_item === (response.grocery_items.name[i]) {
                                //         console.log(grocery_items[i].aisle_location);
                                //     }
                                // }
                            }
                        };
                        xhttp.open("GET", "items.json", true);
                        xhttp.send();