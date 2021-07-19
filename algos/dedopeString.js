//  Dedupe SList 
// Remove nodes with duplicate values. Following  this call, all remaining nodes should have unique  values. Retain only first instance of each value.  

const dedupeChars = (stringInput)=> {
    let tempArr = [];
    // loop through the stringInput and push each charcter in the tempArr. if the character already exists in the tempArr, then remonve theexisting character, and push the new/latest instance of that character into tempArr
    for(var i=0; i< stringInput.length; i++){
    //    if(tempArr.push(stringInput[i])){
        tempArr.push(stringInput[i])
    //    }
    //    tempArr.push(stringInput[i])
    }
    console.log(tempArr)
}

dedupeChars("Snaps! crackles! pops!");








// ["S", "n", "r", "a", "k", "l", "e", " ", "o", "p", "s", "!"] => "Smarackle ops!"