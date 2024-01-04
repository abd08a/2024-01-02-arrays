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


console.group('Masyvu uzduotis nr2')
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