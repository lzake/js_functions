var houses = [{
        "id": 7,
        "address": "2040 Federal Blvd, Denver, CO 80211",
        "price": "$305,000",
        "year-built": 1910,
        "bedrooms": 2,
        "bathrooms": 1,
        "square-footage": 4356,
        "parking": 3,
        "rental": false
    },
    {
        "id": 8,
        "address": "534 N Marion St, Denver, CO 80218",
        "price": "$429,000",
        "year-built": 1908,
        "bedrooms": 2,
        "bathrooms": 1,
        "square-footage": 1443,
        "parking": 1,
        "rental": false
    },
    {
        "id": 9,
        "address": "1714 W 33rd Ave, Denver, CO 80211",
        "price": "$2,590",
        "year-built": null,
        "bedrooms": 2,
        "bathrooms": 1.5,
        "square-footage": 1320,
        "parking": 1,
        "rental": true
    },
    {
        "id": 10,
        "address": "260 N Grove St, Denver, CO 80219",
        "price": "$1,495",
        "year-built": null,
        "bedrooms": 2,
        "bathrooms": 1,
        "square-footage": 728,
        "parking": 0,
        "rental": true
    },
    {
        "id": 11,
        "address": "562 Steele St, Denver, CO 80206",
        "price": "$1,000,000",
        "year-built": 1926,
        "bedrooms": 2,
        "bathrooms": 1,
        "square-footage": 1732,
        "parking": 3,
        "rental": false
    },
    {
        "id": 12,
        "address": "1170 S Utica St, Denver, CO 80219",
        "price": "$270,000",
        "year-built": 1951,
        "bedrooms": 3,
        "bathrooms": 1.5,
        "square-footage": 1198,
        "parking": 2,
        "rental": false
    }
]






// console.log(houses[0]['id'])

var housechoice = houses.filter(function(el) {
    return (el.bedrooms === 3);
});

console.log(housechoice)


//outputs whatever number you set in filter function