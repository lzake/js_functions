//object to object count/multiplication method

var store2 = {
    'inventory prices': {
        'Dark Chocolate Crunchies': 4.29,
        'Mint Wafers': 1.09,
        'Peppermint Poppers': 2.38,
        'Peanut Butter Buttered Peanuts': 1.79,
        'Berry Bites': 7.89,
        'Caramel Twists': .50,
        'Banana Bunches': 4.53
    },
    'sale dates': {
        'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
        'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
        'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
        'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
        'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
        'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
        'Banana Bunches': ['2015-01-10', '2015-01-10']
    }
};

function challenge1() {
    var array = [];
    var obj = {};
    array.push(store2);
    var chocolateTotal = array[0]["sale dates"]["Dark Chocolate Crunchies"].length * array[0]["inventory prices"]["Dark Chocolate Crunchies"];
    var mintTotal = array[0]["sale dates"]["Mint Wafers"].length * array[0]["inventory prices"]["Mint Wafers"];
    var pepperMintTotal = array[0]["sale dates"]["Peppermint Poppers"].length * array[0]["inventory prices"]["Peppermint Poppers"];
    var peanutButterTotal = array[0]["sale dates"]["Peanut Butter Buttered Peanuts"].length * array[0]["inventory prices"]["Peanut Butter Buttered Peanuts"];
    var berryTotal = array[0]["sale dates"]["Berry Bites"].length * array[0]["inventory prices"]["Berry Bites"];
    var caramelTotal = array[0]["sale dates"]["Caramel Twists"].length * array[0]["inventory prices"]["Caramel Twists"];
    var bananaTotal = array[0]["sale dates"]["Banana Bunches"].length * array[0]["inventory prices"]["Banana Bunches"];
    obj["Dark Chocolate Crunchies"] = chocolateTotal.toFixed(2);
    obj["Mint Wafers"] = mintTotal.toFixed(2);
    obj["Peppermint Poppers"] = pepperMintTotal.toFixed(2);
    obj["Peanut Butter Buttered Peanuts"] = peanutButterTotal.toFixed(2);
    obj["Berry Bites"] = berryTotal.toFixed(2);
    obj["Caramel Twists"] = caramelTotal.toFixed(2);
    obj["Banana Bunches"] = bananaTotal.toFixed(2);
    return obj;
}

challenge1();


//[10:33]
// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.