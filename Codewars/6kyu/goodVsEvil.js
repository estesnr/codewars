// Description

// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

//     Hobbits: 1
//     Men: 2
//     Elves: 3
//     Dwarves: 3
//     Eagles: 4
//     Wizards: 10

// On the side of evil we have:

//     Orcs: 1
//     Men: 2
//     Wargs: 2
//     Goblins: 2
//     Uruk Hai: 3
//     Trolls: 5
//     Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side 
// of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
// Input:

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count 
// of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

//     Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

// The second parameter will contain the count of each race on the side of evil in the following order:

//     Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
// Output:

// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on 
// this battle field" if it ends in a tie.

function goodVsEvil(good, evil){
  // split the good value into an array
  let goodArr = good.split(" ")
  // split the evil value into an array
  let evilArr = evil.split(' ')
  // create counters for both good an evil
  let goodCount = 0;
  let evilCount = 0;
  // look through the array of good and tally the strength of good
    goodCount += 1 * goodArr[0]
    goodCount += 2 * goodArr[1]
    goodCount += 3 * goodArr[2]
    goodCount += 3 * goodArr[3]
    goodCount += 4 * goodArr[4]
    goodCount += 10 * goodArr[5]
  // look through the array of evil and tally the strength of evil
    evilCount += 1 * evilArr[0]
    evilCount += 2 * evilArr[1]
    evilCount += 2 * evilArr[2]
    evilCount += 2 * evilArr[3]
    evilCount += 3 * evilArr[4]
    evilCount += 5 * evilArr[5]
    evilCount += 10 * evilArr[6]
  // ternary operator to evaluate the strength of good vs evil
  return goodCount > evilCount ? "Battle Result: Good triumphs over Evil" 
  : goodCount < evilCount ? "Battle Result: Evil eradicates all trace of Good"
  : "Battle Result: No victor on this battle field"
