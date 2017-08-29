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

var value1 = Object.values(store2['sale dates']);
var value2 = Object.keys(value1[1])
var value3 = value2.length
function loopingData2() {
}
console.log('value1 equals ', value1)
console.log('    ');
console.log('/////////');
console.log('    ');
console.log('value2 equals ', value2)
console.log('    ');
console.log('/////////');
console.log('    ');
console.log('value3 equals ', value3)
console.log('    ');
console.log('/////////');
