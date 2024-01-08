// Given a number, return a reverse array of the number. (ex: 1234 = [4,3,2,1])

function digitize(n) {
    let newArr = n.toString().split('').reverse()
    return newArr.map((i) => Number(i))
   }

/*   function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
*/