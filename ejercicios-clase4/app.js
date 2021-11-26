const names = document.getElementById('name')
const dateBirthday = document.getElementById('date')
const result = document.getElementById('result')
const calculate = document.querySelector('#btnSend')

calculate.addEventListener('click', calculateAge)

function calculateAge() {
    let nameUser = names.value

    let birthdayUser = dateBirthday.value
    let birthday = birthdayUser.split('-')

    let currentYear = new Date
    let yearActually = currentYear.getFullYear()
    let monthActually = currentYear.getMonth()+1
    let dayActually = currentYear.getDate()

    let yearUser = parseInt(birthday[0])
    let monthUser = parseInt(birthday[1])
    let dayUser = parseInt(birthday[2])

    let ageYear = yearActually - yearUser
    let ageMonth = monthActually - monthUser
    let ageDay = dayActually - dayUser

    if (ageYear>=18 && ageMonth>=0 && ageDay>=0 || ageYear<=18 && ageMonth>=1) {
        result.textContent = `${nameUser} Eres mayor de edad`
    } else {
        result.textContent = `${nameUser} Aun eres ilegal`
    }

}
