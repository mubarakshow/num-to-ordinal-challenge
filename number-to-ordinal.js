const numberToOrdinal = number => {
  let end = ['st', 'nd', 'rd', 'th']
  let numberArr = number.toString().split("")
  let ordinal; 
  
  // checking for zero only
  const checkZero = num => num === 0 ? true : false;
  
  // checking for the teen numbers
  const checkTeens = numArr => {
    let clonedArr = [...numArr] 
    let teens = ['11', '12', '13', '14', '15', '16', '17', '18', '19']
    let teen = clonedArr.splice(-2).join("")
    if (teens.includes(teen)) {
      return true;
    }
    return false;
  }
  
  // check for other numbers
  const checkOthers = numArr => {
    let clonedArr = [...numArr]
    let digit = clonedArr.pop()
    
    let result;
    if (digit === "1"){
      result = `${number}${end[0]}`
    } else if (digit === "2") {
      result = `${number}${end[1]}`
    } else if (digit === "3") {
      result = `${number}${end[2]}`
    } else {
      result = `${number}${end[3]}`
    }
    return result;
  }  
  
  if (checkZero(number) === true) {
    ordinal = number.toString()
  } else if (checkTeens(numberArr)) {
    ordinal = `${number}${end[3]}`
  } else {
    return checkOthers(numberArr)
  }
  
  
  return ordinal; 
};