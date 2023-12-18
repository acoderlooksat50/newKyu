/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
P: Create a function that returns the number of years required when given the following parameters:  p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

    Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02

    There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
E: nb_year(1500, 5, 100, 5000) -> 15
   nb_year(1500000, 2.5, 10000, 2000000) -> 10
R: the function nb_year should return n number of entire years needed to get a population  greater or equal to p
P: 1. convert percent to a decimal (percent/100)
    2. While loop - while p0 > p do the population formula then have count increase each loop.
*/
function nbYear(p0, percent, aug, p) {
    percent = percent/100
    let count = 0
    let population = 0
    while(population < p){
      population = Math.floor(p0 + (p0 * percent) + aug) 
      console.log(population)
      count += 1  
      }
  console.log(count)
}