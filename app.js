document.write("<h1>AGE CALCULATOR</h1>")

let currDate = new Date()
let curryear = currDate.getFullYear()
let userDob = new Date( prompt("YYYY-MM-DD"))
console.log(userDob)
let useCurrYear = userDob.getFullYear()
let day = userDob.getDay()

console.log(day)
    if(day == "0"){
    day = "Sunday"
    }else if(day == "1"){
        day = "Monday"
    }else if(day == "2"){
        day = "Tuesday"
    }else if(day == "3"){
        day = "Wednesday"
    }else if(day == "4"){
        day = "Thursday"
    }else if(day == "5"){
        day = "Friday"
    }else if(day == "6"){
        day = "Saturday"
    }

let diff = curryear - useCurrYear
console.log(diff)
document.write(`Current year is:  ${curryear}<br>
Birth year is: ${useCurrYear} <br>
 Your age is: ${diff}<br>
   Day is: ${day}`);
