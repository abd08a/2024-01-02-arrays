// masyvai 
// let arr =     [5, 15, -5, 5.5, 4531, 'du', true, [1, 2, 5]] 
// // indeksai    0  1    2   3   4       5    6         7
// console.log(arr)
// console.log(arr.length) 

// // masyvo nariu pasiekimas
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])

// console.log(arr[7][0])
// console.log(arr[7][1])
// console.log(arr[7][2])

// let cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys']; 
// console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// cities.pop()

// console.log(cities) 

// let arr = [2, 3, 4] 
// console.log(arr) 

// console.log(arr.unshift(1))

// arr.unshift(1) 

// console.log(arr) 


//Pratimas Unikalus elementai kiekis
// let uniqueArray = [1, 2, 2, 3, 3, 3, 4] 
// let getUniqueValues = (array) => (
//   array.filter((currentValue, index, arr)) (
//     arr.indexOf(currentValue) === index 
//   ))

//   console.log(getUniqueValues(uniqueArray))

//cao atsakymas 
// const arr = [1, 2, 2, 3, 3, 3, 4];

// const uniqueElements = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i]);
//     }
// }

// console.log(uniqueElements.length);

// Set metodas 
// const someArray = [1, 2, 2, 3, 3, 3, 4];

// const getUniqueValues = (array) => (
// 	[...new Set(array)]
// )

// console.log(getUniqueValues(someArray)) 

// Pratimas tik teigiami 

// function keepPositive() {
//   console.log('keepPositive')
// }

// keepPositive()

//cao atsakymas
// function keepPositive(arr) {
//   const positiveNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//           positiveNumbers.push(arr[i]);
//       }
//   }
//   return positiveNumbers;
// } 

// console.log();


// How to use JS return 

let login = function (password) {
  if (password === 'test123') {
    return 'Successfully logged in'
  } else {
    return 'Password incorrect, please try again'
  }
}

console.log(login('jasfjljlas'));

// Pratimas Ar elementas pasikartoja? 

// function arPasikartoja(arr, i) {
//     return arr.indexOf(i) !== arr.lastIndexOf(i)
// }

// console.log(arPasikartoja([1, 2, 3, 4, 5, 3], 3)) 


// pratimas skaiciu transformacija 

function transformNumber(arr) {
  const transformed = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      transformed.push(arr[i] / 2)
    } else {
      transformed.push(arr[i] * 3)
    }
  }
  return transformed
}

console.log(transformNumber([1, 2, 3, 4, 5]));

// SLICE  --- nemodifikuoja originalaus masyvo 
// let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'] 

// console.log(countries)

// let = slicedCountries1 = countries.slice()

// let = slicedCountries2 = countries.slice(0)

// let = slicedCountries3 = countries.slice(2)
// console.log(slicedCountries3) 

// let = slicedCountries4 = countries.slice(2, 4)
// console.log(slicedCountries4) 

// let = slicedCountries5 = countries.slice(0, 3)
// console.log(slicedCountries5) 

// let = slicedCountries6 = countries.slice(-4)
// console.log(slicedCountries6) 

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1      

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('----------SLICE----------')
console.log(countries)

let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)

let slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)


// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [1, 2, 3, 4, 5, 6, 7, 10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(0, 2)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-1)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(-3, 2, 2)
// let splicedNums = nums.splice(3, 2, 'Trys')
// let splicedNums = nums.splice(2, 1, 2.5)
// let splicedNums = nums.splice(2, 0, 2.5)
let splicedNums = nums.splice(2, 0, 2.5, 2.7, 2.8)

console.log(splicedNums)
console.log(nums)


console.groupCollapsed('Masyvu uzduotis nr1')

// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.



let array100 = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

console.log(array100);

// 1.1. Pašalinti pirmą masyvo narį.
let arrayDeleteFirst = array100.shift()
console.log(arrayDeleteFirst)

// 1.2. Pašalinti paskutinį masyvo narį.
let arrayDeleteLast = array100.pop()
console.log(arrayDeleteLast);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let arrayFindTheMiddleElement = Math.floor(array100.length / 2) 
console.log(arrayFindTheMiddleElement) 

function removeAndReturnMiddle(array100) {
    const middleIndex = Math.floor(array100.length / 2);
    
    if (array100.length % 2 === 1) {
        // Odd length array
        const middleElement = array100[middleIndex];
        array100.splice(middleIndex, 1); // Pašaliname vidurinį elementą
        return middleElement;
    } else {
        // Even length array (returning an array with two middle elements)
        const middleElements = array100.splice(middleIndex - 1, 2); // Pašaliname du vidurinius elementus
        return middleElements;
    }
}

const middleElement = removeAndReturnMiddle(array100);

console.log('Vidurinis elementas:', middleElement);
console.log('Masyvas be vidurinio elemento:', array100);


// 1.4. Pašalinti priešpaskutinį masyvo narį.
let pasalintiPriespaskutini = array100.slice(-2, -1) 
console.log(pasalintiPriespaskutini); 

// 1.5. Pašalinti antrą masyvo narį.
let pasalintiAntraNari = array100.slice(1, 2) 
console.log(pasalintiAntraNari); 

// 1.6. Pašalinti 7 ir 8 masyvo narius.
let pasalinti7ir8narius = array100.slice(6, 8) 
console.log(pasalinti7ir8narius); 

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
let pasalinti4ir5ir6nariusNuoGalo = array100.slice(-6, -3)
console.log(pasalinti4ir5ir6nariusNuoGalo);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
let pasalintiTreciaIrIdeti = array100.splice(2, 1, 888)
console.log(pasalintiTreciaIrIdeti);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
let pasalinti10NariIrIdetiTrisSkaicius = array100.splice(11, 1, 33, 789, 6543) 
console.log(pasalinti10NariIrIdetiTrisSkaicius); 

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
let pasalintiPaskutiniIrIdetiTrisSkaicius = array100.splice(-1, 1, 321, 654, 987) 
console.log(pasalintiPaskutiniIrIdetiTrisSkaicius);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
let idetiSkaiciuTarpNariu = array100.splice(1, 0, 11) 
console.log(idetiSkaiciuTarpNariu);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
let idetiSkaiciuTarpNariu2 = array100.splice(13, 0, 1) 
console.log(idetiSkaiciuTarpNariu2);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
let idetiTarpPaskutIrPriespask = array100.splice(-1, 0, -1) 
console.log(idetiTarpPaskutIrPriespask) 

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
let pridetiIpradziaTrisSk = array100.unshift(1, 2, 3) 
console.log(pridetiIpradziaTrisSk); 

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
let pridetiIpabaigaTrisSk = array100.push(-333, -321, -312) 
console.log(pridetiIpabaigaTrisSk);

// 1.16. Į masyvo vidurį pridėti skaičių 0.

// Apskaičiuojame masyvo vidurio indeksą
const middleIndex = Math.floor(array100.length / 2);

// Įterpiame skaičių 0 į masyvo vidurį
array100.splice(middleIndex, 0, 0);

console.log('Masyvas su įterptu 0 viduryje:', array100);

// 1.17. Pašalinti pirmą masyvo narį.
let removeFirstElement = array100.shift() 
console.log(removeFirstElement);

// 1.18. Pašalinti paskutinį masyvo narį.
let removeLastElement = array100.pop() 
console.log(removeLastElement);

// 1.19. Į masyvo pradžią pridėti žodį "start".
let addElementToStart = array100.unshift('start') 
console.log(addElementToStart);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
let addElementToEnd = array100.push('end') 
console.log(addElementToEnd); 

console.log(array100);
console.log(array100.length);

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

let array200 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'] 

console.log(array200);
console.log(array200.length);


console.groupEnd()


console.groupCollapsed('Masyvu uzduotis nr2')
// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
let sliceAllButFirst = array100.slice(0, 1) 
console.log(sliceAllButFirst) 
console.log(array100);

// 2.2. Gauti paskutinį masyvo narį.
let sliceAllButLast = array100.slice(-1)
console.log(sliceAllButLast);

// 2.3. Gauti antrą masyvo narį. 
let sliceAllButSecond = array100.slice(1, 2) 
console.log(sliceAllButSecond);

// 2.4. Gauti priešpaskutinį masyvo narį. 
let sliceAllButPenult = array100.slice(-2, -1)
console.log(sliceAllButPenult); 

// 2.5. Gauti aštuntą masyvo narį.
let get8th = array100.slice(7, 8) 
console.log(get8th);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let getMinus9th = array100.slice(-9, -8) 
console.log(getMinus9th); 

// 2.7. Gauti vidurinį masyvo narį.
let getTheMiddleIndex = Math.floor(array100.length / 2) 
let middleArrayElement = array100.slice(getTheMiddleIndex, getTheMiddleIndex + (array100.length % 2 === 0 ? 2 : 1)) 
console.log(middleArrayElement) 

// 2.8. Gauti pirmus tris masyvo narius.
let getFirstThree = array100.slice(0, 3)
console.log(getFirstThree);

// 2.9. Gauti paskutinius tris masyvo narius.
let getLastThree = array100.slice(-3, 34)
console.log(getLastThree); 

// 2.10. Gauti pirmus 10 masyvo narius.
let getFirstTen = array100.slice(0, 10) 
console.log(getFirstTen);

// 2.11. Gauti paskutinius 10 masyvo narius.
let getLastTen = array100.slice(-10, 34) 
console.log(getLastTen); 

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let getThirdToEight = array100.slice(2, 8) 
console.log(getThirdToEight); 

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let getFifthToNinethFromTheEnd = array100.slice(-9, -4) 
console.log(getFifthToNinethFromTheEnd);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let get11thTo19th = array100.slice(10, 19)
console.log(get11thTo19th)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let get9To17FromTheEnd = array100.slice(-17, -8)
console.log(get9To17FromTheEnd)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let getAllExceptFirst = array100.slice(-33)
console.log(getAllExceptFirst)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let getAllExceptLast = array100.slice(0, 33)
console.log(getAllExceptLast)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let getAllExceptFirstFive = array100.slice(5, 34)
console.log(getAllExceptFirstFive) 

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let getAllExceptLastFive = array100.slice(-34, -5)
console.log(getAllExceptLastFive)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let middleIndex2 = Math.floor(array100.length / 2 -[1]) 
let getAllTillTheMiddle = array100.slice(0, middleIndex2)
console.log(getAllTillTheMiddle)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių). 
let middleIndex3 = Math.floor(array100.length / 2) 
let getAllAfterTheMiddle = array100.slice(middleIndex3, array100.length)
console.log(getAllAfterTheMiddle)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį. 
let getAllButFirstAndLast = array100.slice(1, array100.length - 1) 
console.log(getAllButFirstAndLast);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let getAllButFirstFiveAndLastThree = array100.slice(5, array100.length -3)
console.log(getAllButFirstFiveAndLastThree)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let getAllButFirstAndLast8 = array100.slice(1, array100.length -8)
console.log(array100)
console.log(getAllButFirstAndLast8)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let getAllButFirstSevenAndLastOne = array100.slice(7, -1)
console.log(getAllButFirstSevenAndLastOne);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let getAllButFirst9AndLast12 = array100.slice(9, -12)
console.log(getAllButFirst9AndLast12)

// 2.27. Gauti 9 narius skaičiuojant nuo 11. 
let getNineMembersFrom11 = array100.slice(11, 20)
console.log(getNineMembersFrom11) 

// 2.28. Gauti 12 narių skaičiuojant nuo 8. 
let get12MembersStartingFrom8 = array100.slice(8, 20)
console.log(get12MembersStartingFrom8)
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let getFirstFive = array100.slice(0, 5) 
console.log(getFirstFive)
let getLastSix = array100.slice(-6)
console.log(getLastSix) 
let getIntoOneArray = [...getFirstFive, ...getLastSix] 
console.log(getIntoOneArray)
let getIntoOneArray2 = getFirstFive.concat(getLastSix)
console.log(getIntoOneArray2)
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
console.log(array100)
let getThreeToFive = array100.slice(2, 5)
console.log(getThreeToFive)  
let get15To17 =  array100.slice(14, 17)
console.log(get15To17) 
let combineArrays = [...getThreeToFive, ...get15To17]
console.log(combineArrays); 

console.groupEnd()


// CALLBACK function 
function renderAnswer(answer) {
  return `Atsakymas yra: ${answer}`
}

function renderAnswer2(answer) {
  return `Jusu atsakymas yra: ${answer}`
}

function getPerimeter(height, width, giveAnswer) {
  let perimeter = (height + width) * 2
  console.log(giveAnswer(perimeter))
}

getPerimeter(10, 15, renderAnswer) 
getPerimeter(10, 15, renderAnswer2) 

// MAP Method
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let forNumsArr = []
for (let i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i] * numsArr[i])
}

console.groupCollapsed('Masyvu uzduotis nr3: FILTER')

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
const array3 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(array3)
// 3.1. Gauti tik teigiamus skaičius.
let getPositiveNums = []
for (let i = 0; i < array3.length; i++) {
  if (array3[i] > 0) {
  getPositiveNums.push(array3[i])
  }
} 
console.log(getPositiveNums) 

let getPositiveNums2 = array3.filter(function(num){
  return num > 0
}) 
console.log(getPositiveNums2); 

let getPositiveNums3 = array3.filter(num => num > 0) 
console.log(getPositiveNums3) 

// 3.2. Gauti tik neigiamus skaičius. 
let getNegativeNums = [] 
for (let i = 0; i < array3.length; i++) {
  if (array3[i] < 0) {
    getNegativeNums.push(array3[i])
  }
}
console.log(getNegativeNums) 

let getNegativeNums2 = array3.filter(function(negativeNums){
  return negativeNums < 0
}) 
console.log(getNegativeNums2) 

let getNegativeNums3 = array3.filter((negativeNums) => negativeNums < 0) 
console.log(getNegativeNums3);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let getNumsThatDividesByTwo = [] 
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 === 0) {
    getNumsThatDividesByTwo.push(array3[i])
  }
}
console.log(getNumsThatDividesByTwo) 

let getNumsThatDividesByTwo2 = array3.filter(function(dalinasi){
  return dalinasi % 2 === 0
}) 
console.log(getNumsThatDividesByTwo2); 

let getNumsThatDividesByTwo3 = array3.filter((dalinasi) => dalinasi % 2 === 0) 
console.log(getNumsThatDividesByTwo3);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3. 
let getNumsThatDivideByThree = array3.filter((divideByThree) => divideByThree % 3 === 0) 
console.log(getNumsThatDivideByThree);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5. 
let getNumsThatDivideByFive = array3.filter((divideByFive) => divideByFive % 5 === 0) 
console.log(getNumsThatDivideByFive); 

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11. 
let getNumsThatDivideByEleven = array3.filter((dividesByEleven) => dividesByEleven % 11 === 0) 
console.log(getNumsThatDivideByEleven); 

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31. 
let getNumsThatDivideBy31 = array3.filter((dividesBy31) => dividesBy31 % 31 === 0)
console.log(getNumsThatDivideBy31);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let getNumsThatDivideBy2And3 = array3.filter((dividesBy2And3) => dividesBy2And3 % 2 ===0 && dividesBy2And3 % 3 === 0) 
console.log(getNumsThatDivideBy2And3); 

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let getNumsThatDivideBy3And7 = array3.filter((dividesBy3And7) => dividesBy3And7 % 3 ===0 && dividesBy3And7 % 7 === 0)
console.log(getNumsThatDivideBy3And7)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let getNumsThatDivideBy5And9 = array3.filter((dividesBy5And9) => dividesBy5And9 % 5 === 0 && dividesBy5And9 % 9 === 0)
console.log(getNumsThatDivideBy5And9)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let getNumsThatDivideBy5And11 = array3.filter((dividesBy5And11) => dividesBy5And11 % 5 === 0 && dividesBy5And11 % 11 === 0)
console.log(getNumsThatDivideBy5And11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let getNumsThatDivideBy2And8And12 = array3.filter((dividesBy2And8And12) => dividesBy2And8And12 % 2 === 0 && dividesBy2And8And12 % 8 === 0 && dividesBy2And8And12 % 12 === 0)
console.log(getNumsThatDivideBy2And8And12) 

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let getNumsThatDivideBy2or3 = array3.filter((dividesBy2or3) => dividesBy2or3 % 2 === 0 || dividesBy2or3 % 3 === 0) 
console.log(getNumsThatDivideBy2or3); 

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let getNumsThatDivideBy3or5 = array3.filter((dividesBy3or5) => dividesBy3or5 % 3 === 0 || dividesBy3or5 % 5 === 0) 
console.log(getNumsThatDivideBy3or5); 

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let getNumsThatDivideBy5or6 = array3.filter((dividesBy5or6) => dividesBy5or6 % 5 === 0 || dividesBy5or6 % 6 === 0) 
console.log(getNumsThatDivideBy5or6); 

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let getNumsThatDivideBy7or8 = array3.filter((dividesBy7or8) => dividesBy7or8 % 7 === 0 || dividesBy7or8 % 8 === 0) 
console.log(getNumsThatDivideBy7or8); 

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let getNumsThatDivideBy9or13 = array3.filter((dividesBy9or13) => dividesBy9or13 % 9 === 0 || dividesBy9or13 % 13 === 0) 
console.log(getNumsThatDivideBy9or13); 

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5. 
let getNumsThatDivideBy2And3or5 = array3.filter((dividesBy2And3or5) => dividesBy2And3or5 % 2 === 0 || dividesBy2And3or5 % 3 === 0 || dividesBy2And3or5 % 5 === 0) 
console.log(getNumsThatDivideBy2And3or5);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let task319 = array3.filter((num) => num % 5 === 0 || num % 7 === 0 || num % 9 === 0) 
console.log('Task 319', task319) 

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let task320 = array3.filter((num) => num % 7 === 0 || num % 8 === 0 || num % 11 === 0) 
console.log('Task 320', task320) 

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13. 
let task321 = array3.filter((num) => num % 9 === 0 || num % 12 === 0 || num % 13 === 0) 
console.log(task321) 

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let task322 = array3.filter((num) => num > 100) 
console.log(task322) 

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let task323 = array3.filter((num) => num > 555) 
console.log(task323)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let task324 = array3.filter((num) => num >= 888) 
console.log(task324)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let task325 = array3.filter((num) => num >= 6789) 
console.log(task325)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50. 
let task326 = array3.filter((num) => num < 50) 
console.log(task326)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let task327 = array3.filter((num) => num < 1000) 
console.log(task327)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let task328 = array3.filter((num) => num <= -1) 
console.log(task328)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let task329 = array3.filter((num) => num <= -5564) 
console.log(task329)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let task330 = array3.filter((num) => num < 1000 && num > 500) 
console.log(task330)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let task331 = array3.filter((num) => num < 100 && num > 0) 
console.log(task331)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let task332 = array3.filter((num) => num < 0 && num > -50) 
console.log(task332)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let task333 = array3.filter((num) => num <= 0 && num > -100) 
console.log(task333)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55. 
let task334 = array3.filter((num) => num >= 0 && num < 55) 
console.log(task334)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let task335 = array3.filter((num) => num >= 444 && num <= 654) 
console.log(task335)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let task336 = array3.filter((num) => num > 0 && num % 2 === 0) 
console.log(task336)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3. 
let task337 = array3.filter((num) => num > 0 && num % 3 === 0) 
console.log(task337)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4. 
let task338 = array3.filter((num) => num > 0 && num % 4 === 0) 
console.log(task338)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let task339 = array3.filter((num) => num < 0 && num % 111 === 0) 
console.log(task339)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let task340 = array3.filter((num) => num > 500 && num % 2 === 0) 
console.log(task340)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let task341 = array3.filter((num) => num > 1000 && num % 3 === 0) 
console.log(task341)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let task342 = array3.filter((num) => num < 1000 && num % 9 === 0) 
console.log('??? Task342', task342, '???')

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let task343 = array3.filter((num) => num < 500 && num % 2 === 0) 
console.log(array3)
console.log(task343) 

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let task344 = array3.filter((num) => num >= 33 && num % 3 === 0) 
console.log(task344) 

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12. 
let task345 = array3.filter((num) => num >= 444 && num % 12 === 0) 
console.log(task345) 

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let task346 = array3.filter((num) => num <= 155 && num % 5 === 0) 
console.log(task346) 

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let task347 = array3.filter((num) => num <= -333 && num % 9 === 0) 
console.log(task347) 

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let task348 = array3.filter((num) => num > 100 && num < 500 && num % 5 === 0) 
console.log(task348) 

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let task349 = array3.filter((num) => num >= 888 && num < 1000 && num % 2 === 0) 
console.log(task349) 

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let task350 = array3.filter((num) => num <= 888 && num >= -333 && num % 3 === 0 && num !== 0) 
console.log(task350) 

console.groupEnd() 

console.groupCollapsed('Masyvu uzduotis nr3 su strings') 

const array04 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(array04)

// 3.51. Gauti tik skaičius. 
let task351 = array04.filter(item => typeof item === 'number') 
console.log(task351)

// 3.52. Gauti tik tekstus (string). 
let task352 = array04.filter(item => typeof item === 'string') 
console.log(task352);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// let task353 = array04.filter(item => item.length > 5) 
// console.log(task353); 

let task353 = array04.filter(item => typeof item === 'string' && item.length > 5) 
console.log(task353);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task354 = array04.filter(item => typeof item === 'string' && item.length <= 5) 
console.log(task354);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius. 
let task355 = array04.filter(item => typeof item === 'string' && item.length < 7) 
console.log(task355);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task356 = array04.filter(item => typeof item === 'string' && item.includes('t')) 
console.log(task356)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task357 = array04.filter(item => typeof item === 'string' && item.includes('y')) 
console.log(task357)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let task358 = array04.filter(item => typeof item === 'string' && item.includes('e') || typeof item === 'string' && item.includes('a')) 
console.log(task358) 

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i. 
let task359 = array04.filter(item => typeof item === 'string' && item.includes('t') || typeof item === 'string' && item.includes('i')) 
console.log(task359) 

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task360 = array04.filter(item => typeof item === 'string' && item.includes('t') && !item.includes('k'))  
console.log(task360) 

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task361 = array04.filter(item => typeof item === 'string' && item.includes('a') && !item.includes('s'))  
console.log(task361) 

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t. 
let task362 = array04.filter(item => typeof item === 'string' && item.split('t').length - 1 > 1);

console.log(task362);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task363 = array04.filter(item => typeof item === 'string' && item.includes('st'))  
console.log(task363) 

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task364 = array04.filter(item => typeof item === 'string' && item.includes('nd'))  
console.log(task364) 

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s. 
let task365 = array04.filter(item => typeof item === 'string' && !item.includes('s'))  
console.log(task365) 

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task366 = array04.filter(item => typeof item === 'string' && !item.includes('t'))  
console.log(task366) 

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task367 = array04.filter(item => typeof item === 'string' && !item.includes('r') && !item.includes('l'))  
console.log(task367) 

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi. 
let task368 = array04.filter(item => isNaN(item) && !isNaN(item[0]));
console.log(task368);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task369 = array04.filter(item => typeof item === 'string' && item.startsWith('s'))  
console.log(task369)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o. 
let task370 = array04.filter(item => typeof item === 'string' && item.startsWith('o'))  
console.log(task370)

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d. 
let task3700 = array04.filter(item => typeof item === 'string' && item.endsWith('d'))  
console.log(task3700)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let task371 = array04.filter(item => typeof item === 'string' && item.endsWith('s'))  
console.log(task371)

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o. 
let task372 = array04.filter(item => typeof item === 'string' && item.length > 4 && item.includes('o'))  
console.log(task372)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task373 = array04.filter(item => typeof item === 'string' && item.length >= 5 && item.includes('a'))  
console.log(task373)

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių. 
let task374 = array04.filter(item => typeof item === 'string' && item.length % 2 === 0)  
console.log(task374)

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task375 = array04.filter(item => typeof item === 'string' && item.length % 2 !== 0 && item.includes('s'))  
console.log(task375)

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a. 
let task376 = array04.filter(item => typeof item === 'string' && item.startsWith('a', 2))  
console.log(task376)

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task377 = array04.filter(item => typeof item === 'string' && item.startsWith('l', 3))  
console.log(task377)

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4. 
let task378 = array04.filter(item => typeof item === 'string' && !item.startsWith('t', 4) && item.length > 4)  
console.log(task378) 

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let task379 = array04.filter(item => isNaN(item) && item[0] !== 'e' && item.length < 6 && isNaN(item[0]));
console.log(task379) 

console.groupEnd() 

console.group('Pamoka 11, pratimai Callbacks ir Array metodai') 

// Pratimas Vardas 
function alertName(text) {
  alert(text)
}

function consoleName(text) {
  console.log(text)
} 

function coreFunction(name, callback) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() 
  callback(capitalizedName) 
} 

coreFunction('progRamErsas', consoleName) 

// Array metoday: Uzduotys
// Pratimas Automobiliai 

const cars = ["BMW", "VW", "Audi"] 

cars.forEach((car) => console.log(car)) 

console.log(cars)

// Pratimas Automobiliai (papildymas) 

const cars2 = ["BMW", "VW", "Audi"] 

cars.forEach((car, index) => console.log(car +":", index)) 

// Pratimas Draugai
const drauguVardai = ['stePonas', 'anAkLetas', 'RadegundA', 'alfaBetijA'] 
const wellWritten = drauguVardai.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
console.log(wellWritten) 

// Pratimas Pilnameciai 
let friendsAndAge = ["Laura 23", "Stasys 53", "Marius 45", "Judita 31", "Jaronimas 82", "Sigis 13"] 
let result = friendsAndAge.filter((str) => str >= "18" ) 
console.log(result)

//Pratimas Prasideda is K
// let LTmiestai = ['Radviliskis', 'Pakruojis', 'Kursenai', 'Telsiai'] 
// let prasidedaIsK = LTmiestai.find((miestasIsK) => miestasIsK.charAt(0) ==='K') 
// console.log(prasidedaIsK) 

// // Pratimas Miestai is mazosios 
// let LTmiestai = ['Radviliskis', 'Pakruojis', 'Kursenai', 'telsiai'] 
// console.log(LTmiestai.some(v => v.charAt(0) === v.charAt(0).toLowerCase())) 

// Pratimas Visi is didziosios 
let LTmiestai = ['Radviliskis', 'Pakruojis', 'Kursenai', 'telsiai'] 
console.log(LTmiestai.every(v => v.charAt(0) === v.charAt(0).toUpperCase())) 


//----Pamoka 10---- String Number Boolean metodai
//Pratimas Didziosios raides
let word = '' 
let convertToUpperCase = (word) => word.toUpperCase()
console.log(convertToUpperCase('kukis mukis')); 

//Pratimas Teksto iskarpa 
let extractSubstring = (iskarpa) => iskarpa.slice(2, 7) 
console.log(extractSubstring('Sveikas pasauli')); 

// Pratimas Is didziosios raides
// const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() && !text.charAt(0).toLowerCase() 
// console.log(capitalizeFirstLetter('rytas prasidejo puikiai'));

const capitalizeFirstLetter = (text) => {
  const words = text.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word) {
          result += word.charAt(0).toUpperCase() + word.slice(1);
      }
      if (i < words.length - 1) {
          result += ' ';
      }
  }

  return result;
}; 
console.log(capitalizeFirstLetter('rytas prasidejo puikiai')); 

// Pratimas Nepadoriu zodziu cenzura 
const censorCurseWords = (text, curseWords) => {
  let censoredText = text;
  for (let i = 0; i < curseWords.length; i++) {
      const curseWord = curseWords[i];
      while (censoredText.includes(curseWord)) {
          censoredText = censoredText.replace(curseWord, '****');
      }
  }
  return censoredText;
};
console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); 

//Number metodai: uzduotys
// Milk price 
// let milkPrice = 1.18
// if (Number.isInteger(milkPrice)) {
//   alert ('smulkiu nereiks') 
// } else {
//   alert('smulkiu prireiks')
// }

// Pratimas Skaiciai po kablelio 
// let milkPrice = 1
// if (Number.isInteger(milkPrice)) {
//   alert (milkPrice.toFixed(2)) 
// } else {
//   alert(milkPrice)
// }

//cao atsakymas 
// const milkPrice = 3.677; // Vėliau pakeisti kainą į 3

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// alert(milkPrice.toFixed(2))

// Pratimas Maksimalus skaicius 
// let findMax = Math.max(1, 5, 9, 18, 11, 2) 
// console.log(findMax);

const findMax = (...numbers) => Math.max(...numbers); 

// Boolean metodai: uzduotys
//Legal age 

let isLegalAge = true
console.log(isLegalAge)
console.log(isLegalAge.toString()); 