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



function loopingData2() {
    var zach = [];
    dark = Object.values(store2['sale dates']['Dark Chocolate Crunchies']);
    mint = Object.values(store2['sale dates']['Mint Wafers']);
    pmint = Object.values(store2['sale dates']['Peppermint Poppers']);
    peanut = Object.values(store2['sale dates']['Peanut Butter Buttered Peanuts']);
    berry = Object.values(store2['sale dates']['Berry Bites']);
    caramel = Object.values(store2['sale dates']['Caramel Twists']);
    ban = Object.values(store2['sale dates']['Banana Bunches']);
    var current = 0;
    var all = 0;
for(var i=0;i<dark.length;i++){if(dark[i]!=current){current=dark[i];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var j=0;j<mint.length;j++){if(mint[j]!=current){current=mint[j];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var k=0;k<pmint.length;k++){if(pmint[k]!=current){current=pmint[k];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var l=0;l<peanut.length;l++){if(peanut[l]!=current){current=peanut[l];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var m=0;m<berry.length;m++){if(berry[m]!=current){current=berry[m];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var n=0;n<caramel.length;n++){if(caramel[n]!=current){current=caramel[n];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
for(var o=0;o<ban.length;o++){if(ban[o]!=current){current=ban[o];zach.push(current);all=1;}else{all++;}zach.push(current);}if(all>0){zach.push(current);}
//compile start
    total = Object.values(zach);
    zach.sort();
    var zach1 = [];
    var ripper = 0;
    for(var p = 0; p < zach.length; p++) {
        if (zach[p] != current) {
            current = zach[p];
            zach1[current] = ripper;
            ripper = 1;
        } else {
            ripper++;
        }zach1[current] = ripper;
    }
    if (ripper > 0) {
        zach1[current] = ripper;
    } return zach1
//  console.log(zach)
return zach
}
loopingData2();

/*returns:
=> [ '2015-01-06': 11,
  '2015-01-07': 9,
  '2015-01-08': 9,
  '2015-01-09': 13,
  '2015-01-10': 17 ]
   */
