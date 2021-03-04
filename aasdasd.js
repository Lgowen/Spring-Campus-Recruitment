const peopleArrs = [
    let people = 0
    let year = 0
    [2, 3, 4],
    [2, 3],
    people = 2
    year = 2
    [2, 3]
    [],
    people = 0
    yaer = 0
    [5, 6, 7, 8, 9]
    people = 0
    yaer = 0
]
const peopleArr = []
for(let i = 2; i < 5; i++) {
    peopleArr.push(i)
}
peopleArrs.push(peopleArr)
console.log(peopleArrs)

function compute (arr) {
    let maxPeople = 0
    let maxYear = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            // 说明存在两对有公共年数
            if(arr[i] === arr[j]) {
               maxPeople = 2
               maxYear ++
            }
        }
    }
    return {

    }
}
compute(peopleArrs)

function aa() {

}



const sumPeople = readInt()
const len = sumPeople.length
let maxPeople = 0
let maxYear = 0
const peopleArrs = []
while((line = read_line()) != ''){
    const arr = line.split(' ')
    const begin = arr[0]
    const end = arr[1]
    const peopleArr = []
    for(let i = begin; i < end; i++ ){
        peopleArr.push(i)
    }
    peopleArrs.push(peopleArr)
}
print(peopleArrs)