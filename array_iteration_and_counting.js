function contamination(text, char){
  if(text === null || char === null){
  return ""
  } else {
      var neww = '';
  for(i=0;i<text.length;i++){
    neww += char
    }
    return neww
  }
}

contamination("abc","z")

/*
Test.assertEquals(contamination("abc","z"), "zzz")
Test.assertEquals(contamination("","z"), "")
Test.assertEquals(contamination("abc",""), "")
Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
Test.assertEquals(contamination("//case"," "), "      ")

*/


//or more simply

function contamination(text, char){
  return char.repeat(text.length)
}
