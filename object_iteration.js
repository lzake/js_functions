//iteration examples


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

//module.exports = store2;

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2015-01-06': 4,
//   '2015-01-07': 3,
// }

  var mintWafers = [];
  mintWafers = Object.values(store2['inventory prices']).sort().forEach(console.log);


Object.keys({"b": 1, "c": 3, "a": 2}).sort().forEach(console.log);
/*    var neww = [1,2,3,4];
    for (var i = 0; i < neww.length; i++) {
      neww.push(1)
      for (var j = 0; j < neww.length; j++) {
        mint
  }
}*/

console.log('    ');
console.log('/////////');
console.log('    ');
console.log(mintWafers);
console.log('    ');
console.log('/////////');
console.log('    ');
