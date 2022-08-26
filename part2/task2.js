// function searchName(query, max, callback) {
//     const name = [
//         'Abigail', 'Alexandra', 'Aliison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
//     ]
//     let result = [];
//     for (i = 0; i < name.length; i++) {
//         if (name[i].toLowerCase().indexOf(query) !== 1) {
//             result.push(name[i]);
//             if (result.length == max) {
//                 break;
//             }
//         }
//     }
//     callback(result);
// }

// searchName('an', 3, console.log);

function searchName(query, max, callback) {
    const name = [
        'Abigail', 'Alexandra', 'Aliison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
    ]

    function lowerCaseName(element, i) {
        return element.toLowerCase()
    }

    const reslowerCaseName = name.map(lowerCaseName)
    const result = reslowerCaseName.filter(element => element.includes(query))
    console.log(reslowerCaseName);
    console.log(result);

    const cond = max === 0 ? result.length : max
    const lastResult = result.slice(0, cond)

    let lastLastResult = []
    lastResult.forEach(element => {
        const first = element.charAt(0).toUpperCase()
        const lastWord = `${first}${element.slice(1, element.length)}`
        lastLastResult.push(lastWord)
    })

    callback(lastLastResult)
}

searchName('ca', 2, console.log);