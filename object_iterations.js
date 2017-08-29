// iteration push to array into object
function loopingData1() {
    caramel = Object.values(store2['sale dates']['Caramel Twists']);
    caramel.sort();
    var zach = [];
    var current = null;
    var car = 0;
    for (var i = 0; i < caramel.length; i++) {
        if (caramel[i] != current) {
            current = caramel[i];
            zach[current] = car;
            car = 1;
        } else {
            car++;
        }zach[current] = car;
    }
    if (car > 0) {
        zach[current] = car;
    } return zach
}
loopingData1();
