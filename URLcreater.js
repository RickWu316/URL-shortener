
// define sample function to randomly return an item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// define generatePassword function
function generateURL(options) {
    // define random scope
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890'

    let collection = []
    collection = collection.concat(lowerCaseLetters.split(''))
    collection = collection.concat(numbers.split(''))

    // start generating password
    let password = ''
    for (let i = 0; i < options; i++) {
        password += sample(collection)
    }

    // return the generated password
    return password
}

// export generatePassword function for other files to use
module.exports = generateURL