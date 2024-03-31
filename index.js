const nameOne = document.getElementById('name')
const salary = document.getElementById('salary')
const veteran = document.getElementById('veteran')
const friendsNames = document.getElementById('friends')
const salaries = document.getElementById('salaries')
const button = document.querySelector('#friendButton')
const submitButton = document.getElementById('submit')

let friendsArray = []
const friendsSalaries = []



   






button.addEventListener('click', function(e){
    console.log(friendsNames.value)
    friendsArray = friendsNames.value.split(', ')
    console.log(friendsArray)
    
    

})

/*
button.addEventListener('click', function(e) {
    friendsArray.push(friendsNames.value)
    friendsNames.value = ""


})
*/

salaries.addEventListener("change", function(e){
    friendsSalaries.push(e.target.value)
    console.log(friendsSalaries)
})

submitButton.addEventListener('click', function(e){
    const personObject = {
        name: nameOne.value,
        salary: salary.value,
        veteran: veteran.value,
        friends: friendsArray,
        friendsSalaries: friendsSalaries
    }
    console.log(personObject)


})

