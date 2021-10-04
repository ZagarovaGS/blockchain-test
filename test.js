//task1, 2 minutes
const cities = ['Moskow', 'Kiev', 'Kazan', 'Sankt-Peterburg', 'Orenburg'];

const createCitiesList=()=>{
  console.log(cities.join(),'.');
};

createCitiesList();

//task2, 2 minutes

const createNumMultipleFive =(number)=>{
  console.log(Math.round(number/5)*5);
}

createNumMultipleFive(28);

//task3 2 minutes(делала раньше)

const getPlural = (count) => {
    const c10 = count % 10;
    const c100 = count % 100;
    if (c10 === 1 && c100 !== 11) {
      return `${count} компьютер`;
    }
  
    if (c10 >= 2 && c10 <= 4 && (c100 < 10 || c100 >= 20)) {
      return `${count} компьютера`;
    }
  
    return `${count} компьютеров`;

  };
  
  console.log(getPlural(21))

  //task4 2minutes

  const isNumSimple=(num)=>{
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log('number is not simple')
            break;
        } else {
            console.log('it is simple number');
            break;
        }
  };

};
isNumSimple(7);

//task5 30 minutes

const numbers1 = [7,17,1,9,1,17,56,56,23];
const numbers2 = [56,17,17,1,23,34,23,1,8,1];

const findRecurringNumbers = (array1, array2) =>{

const findDoubleNumbers = (arr)=>{
const arr2 = arr.filter(function(item, index){
  return arr.indexOf(item)!==index;
})
return arr2;
};

const newNumbers1 = findDoubleNumbers(array1);
const newNumbers2 = findDoubleNumbers(array2);
const totalNumbers = newNumbers1.concat(newNumbers2);

const newArray = findDoubleNumbers(totalNumbers);
const findUnicNumbers = (arr)=>{
    const arr2 = arr.filter(function(item, index){
      return arr.indexOf(item)===index;
    })
    return arr2;
    };
const finalNumbers = findUnicNumbers(newArray);
console.log(finalNumbers);
};

findRecurringNumbers(numbers1, numbers2);
