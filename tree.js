function tree (arr, parentId) { 
    const len = arr.length

    function loop(id) {
        let newArr = []
        for(let i = 0; i < len; i++) {
            if(arr[i].parentId === id) {
                arr[i].children = loop(arr[i].id)
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    
    return loop(parentId)
}

const arr = [
    {name: 'fsdasd', id: 1, parentId: 0},
    {name: 'fsdasd', id: 2, parentId: 1},
    {name: 'fsdasd', id: 3, parentId: 2},
    {name: 'fsdasd', id: 4, parentId: 3},
    {name: 'fsdasd', id: 5, parentId: 0},
    {name: 'fsdasd', id: 6, parentId: 5},
    {name: 'fsdasd', id: 7, parentId: 6},
    {name: 'fsdasd', id: 8, parentId: 7}
]


console.log(tree(arr, 0))

