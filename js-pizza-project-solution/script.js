function order(){
    var totalOrder = 0;

    var totalSize = 0;
    var totalMeat = 0;
    var totalVeggie = 0;
    var totalSauce = 0;
    var totalCheese = 0;
    var totalCrust = 0;
    
    var sizeArr = document.getElementsByClassName("size");
    var meatArr = document.getElementsByClassName("meat");
    var veggieArr = document.getElementsByClassName("veggie");
    var sauceArr = document.getElementsByClassName("sauce");
    var cheeseArr = document.getElementsByClassName("cheese");
    var crustArr = document.getElementsByClassName("crust");

    var sizePicked = "";
    var meatPick = [];
    var veggiePick = [];
    var saucePick = "";
    var cheesePick = "";
    var crustPick = "";




    /*==========
    PIZZA SIZE
    ============
    - if pizza size is personal, totalSize = 6 and
    sizePicked = "Personal Pizza";
    - else if pizza size is medium...;
    - " large, add $14 to total order...;
    - " extra large, add $16 to total order...;*/

    //SOLUTION USING SWITCH:

    for(var i = 0; i < sizeArr.length; i++){
        if(sizeArr[i].checked){
            switch(sizeArr[i].value){
                case "personal":
                    sizePicked = "Personal Pizza";
                    totalSize = 6;
                    break;
                case "medium":
                    sizePicked = "Medium Pizza";
                    totalSize = 10;
                    break;
                case "large":
                    sizePicked = "Large Pizza";
                    totalSize = 14;
                    break;
                case "extraLarge":
                    sizePicked = "Extra Large Pizza";
                    totalSize = 16;
                    break;
            }
        }
    }

    //SOLUTION USING IF:

    /*if(sizeArr[0].checked){
        sizePicked = "Personal Pizza";
        totalSize = 6;
    } else if(sizeArr[1].checked){
        sizePicked = "Medium Pizza";
        totalSize = 10;
    } else if(sizeArr[2].checked){
        sizePicked = "Large Pizza";
        totalSize = 14;
    } else if(sizeArr[3].checked){
        sizePicked = "Extra Large Pizza";
        totalSize = 16;
    }*/




    /*==========
    MEAT TOPPING
    ============
    - if a meat is picked, add 1 to totalMeat 
    and push it to meatPick array
    - if totalMeat >= 1, subtract 1 (complimentary topping)*/

    for(var i = 0; i < meatArr.length; i++){
        if(meatArr[i].checked){
            totalMeat += 1;
            switch (meatArr[i].value){
                case "pepperoni":
                    meatPick.push(" Pepperoni");
                    break;
                case "sausage":
                    meatPick.push(" Sausage");
                    break;
                case "bacon":
                    meatPick.push(" Bacon");
                    break;
                case "groundBeef":
                    meatPick.push(" Ground Beef");
                    break;
                case "anchovy":
                    meatPick.push(" Anchovy");
                    break;
                case "chicken":
                    meatPick.push(" Chicken");
                    break;
            }
        }
    }

    if(totalMeat >= 1){
        totalMeat -= 1;
    }




    /*==========
    VEGGIE TOPPING
    ============
    - if a veggie topping is picked:
        - add 1 to totalVeggie
        - take its value, uppercase the first letter,
        push to veggiePick array
    - if total veggie topping >= 1, subtract 1 (complimentary topping)*/

    for(var i = 0; i < veggieArr.length; i++){
        if(veggieArr[i].checked){
            totalVeggie += 1;
            var capVeggie = " " + veggieArr[i].value.charAt(0).toUpperCase() + veggieArr[i].value.slice(1);
            veggiePick.push(capVeggie);
        }
    }

    if(totalVeggie >= 1){
        totalVeggie -= 1;
    }




    /*==========
    SAUCE
    ============
    - if a sauce is picked, assign it to saucePick*/

    //SOLUTION USING IF:

    if(sauceArr[0].checked){
        saucePick = "Marinera Sauce";
    } else if(sauceArr[1].checked){
        saucePick = "White Sauce";
    } else if(sauceArr[2].checked){
        saucePick = "Barbeque Sauce";
    } else{
        saucePick = "No sauce";
    }

    //SOLUTION USING SWITCH:

    /*for(var i = 0; i < sauceArr.length; i++){
        if(sauceArr[i].checked){
            switch(sauceArr[i].value){
                case "marineraSauce":
                    saucePick = "Marinera Sauce";
                    break;
                case "whiteSauce":
                    saucePick = "White Sauce";
                    break;
                case "barbequeSauce":
                    saucePick = "Barbeque Sauce";
                    break;
                case "noSauce":
                    saucePick = "No Sauce";
                    break;
            }
        }
    }*/




    /*==========
    EXTRA CHEESE
    ============
    - if a cheese is picked, assign it to cheesePick
    - if cheese picked == "extraCheese", totalCheese = 3*/

    for(var i = 0; i < cheeseArr.length; i++){
        if(cheeseArr[i].checked){
            if(cheeseArr[i].value == "regular"){
                cheesePick = "Regular Cheese";
            } else if(cheeseArr[i].value == "extraCheese"){
                cheesePick = "Extra Cheese";
                totalCheese = 3;
            } else if(cheeseArr[i].value == "noCheese"){
                cheesePick = "No Cheese";
            }
        } 
    }




    /*==========
    CHEESE STUFFED CRUST
    ============
    - if a crust is picked, assign it to crustPick
    - if crust picked == "cheeseStuffedCrust", totalCrust = 3*/

    for(var i = 0; i < crustArr.length; i++){
        if(crustArr[i].checked){
            switch(crustArr[i].value){
                case "plainCrust":
                    crustPick = "Plain Crust";
                    break;
                case "garlicButterCrust":
                    crustPick = "Garlic Butter Crust";
                    break;
                case "cheeseStuffedCrust":
                    crustPick = "Cheese Stuffed Crust";
                    totalCrust = 3;
                    break;
                case "spicyCrust":
                    crustPick = "Spicy Crust";
                    break;
                case "houseSpecialCrust":
                    crustPick = "House Special Crust";
                    break;
            }
        }
    }




    /*==========
    TOTAL ORDER
    ============
    - add everything to get total order*/

    totalOrder = totalSize + totalMeat + totalVeggie + totalCheese
        + totalCrust;




    /*==========
    RECEIPT TABLE
    ============
    - HTML NODE TREE/MODEL:
    <div id="tableDiv">
        <table id="table">
            <tr>
                <td>
                    Order
                </td>
                <td>
                    Price
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>*/

   // - checks if there is a current table. if so, remove it:
   // if id="table" is true, remove it
   var tableCheck = document.getElementById("table");
   if(tableCheck){
       tableCheck.remove();
   }
    
   // - create table element
   var table = document.createElement("table");
   // - create id for table element
   table.id = "table";
   // - appendChild table element to <div id="tableDiv">
   document.getElementById("tableDiv").appendChild(table);

   // - create heading row
   var headingRow = table.insertRow(0);
   // - create heading cells for order and price columns
   var headingOrderCell = headingRow.insertCell(0);
   var headingPriceCell = headingRow.insertCell(1);
   // - create heading texts and appendChild to cells
   var headingOrderCellText = document.createTextNode("Order:");
   headingOrderCell.appendChild(headingOrderCellText);
   var headingPriceCellText = document.createTextNode("Price:");
   headingPriceCell.appendChild(headingPriceCellText);

    // - create size row, cells for order and price columns, texts
    var sizeRow = table.insertRow(-1);
    var sizeOrderCell = sizeRow.insertCell(0);
    var sizePriceCell = sizeRow.insertCell(1);
    var sizeOrderCellText = document.createTextNode(sizePicked);
    sizeOrderCell.appendChild(sizeOrderCellText);
    var sizePriceCellText = document.createTextNode("$" + totalSize);
    sizePriceCell.appendChild(sizePriceCellText);

    // - if meat is picked, create meat row,
    // cells for order and price columns, texts
    if(meatPick.length >= 1){
        var meatRow = table.insertRow(-1);
        var meatOrderCell = meatRow.insertCell(0);
        var meatPriceCell = meatRow.insertCell(1);
        var meatOrderCellText = document.createTextNode(meatPick);
        meatOrderCell.appendChild(meatOrderCellText);
        var meatPriceCellText = document.createTextNode("$" + totalMeat);
        meatPriceCell.appendChild(meatPriceCellText);
    }

    // - if veggie is picked, create veggie row,
    // cells for order and price columns, texts
    if(veggiePick.length >= 1){
        var veggieRow = table.insertRow(-1);
        var veggieOrderCell = veggieRow.insertCell(0);
        var veggiePriceCell = veggieRow.insertCell(1);
        var veggieOrderCellText = document.createTextNode(veggiePick);
        veggieOrderCell.appendChild(veggieOrderCellText);
        var veggiePriceCellText = document.createTextNode("$" + totalVeggie);
        veggiePriceCell.appendChild(veggiePriceCellText);
    }

    // - create sauce row, cells for order and price columns, texts
    var sauceRow = table.insertRow(-1);
    var sauceOrderCell = sauceRow.insertCell(0);
    var saucePriceCell = sauceRow.insertCell(1);
    var sauceOrderCellText = document.createTextNode(saucePick);
    sauceOrderCell.appendChild(sauceOrderCellText);
    var saucePriceCellText = document.createTextNode("$" + totalSauce);
    saucePriceCell.appendChild(saucePriceCellText);

    // - create cheese row, cells for order and price columns, texts
    var cheeseRow = table.insertRow(-1);
    var cheeseOrderCell = cheeseRow.insertCell(0);
    var cheesePriceCell = cheeseRow.insertCell(1);
    var cheeseOrderCellText = document.createTextNode(cheesePick);
    cheeseOrderCell.appendChild(cheeseOrderCellText);
    var cheesePriceCellText = document.createTextNode("$" + totalCheese);
    cheesePriceCell.appendChild(cheesePriceCellText);

    // - create crust row, cells for order and price columns, texts
    var crustRow = table.insertRow(-1);
    var crustOrderCell = crustRow.insertCell(0);
    var crustPriceCell = crustRow.insertCell(1);
    var crustOrderCellText = document.createTextNode(crustPick);
    crustOrderCell.appendChild(crustOrderCellText);
    var crustPriceCellText = document.createTextNode("$" + totalCrust);
    crustPriceCell.appendChild(crustPriceCellText);

    // - create total row, cells for order and price columns, texts
    var totalRow = table.insertRow(-1);
    var totalOrderCell = totalRow.insertCell(0);
    var totalPriceCell = totalRow.insertCell(1);
    var totalOrderCellText = document.createTextNode("Total:");
    totalOrderCell.appendChild(totalOrderCellText);
    var totalPriceCellText = document.createTextNode("$" + totalOrder);
    totalPriceCell.appendChild(totalPriceCellText);
}




/*==========
NOTES
============
- dom selectors: class (array), id (first instance), tag name (array)
- select, then manipulate
- google:
    - javascript add dom element
    - javascript add node to dom
    - javascript add table

TO DO:
- */