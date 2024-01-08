/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds

minutes multiple by 60000; hours multiplied by 360000, secounds multiplied by 1000
then add them together */

function past(h, m, s){
    let newh = h * 3600000
    let newm = m * 60000
    let news = s * 1000
    let sum = newh + newm + news
    return sum
  }

  // const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s)