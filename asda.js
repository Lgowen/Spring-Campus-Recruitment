var simplifyPath = function(path) {
    const arr = path.split('/').filter(item => {
        return item !== '.'
    })  // 
    const newArr = arr.filter(item => item !== '')
    console.log(newArr);
    let answer = []
    newArr.forEach( item => {
        if(item === '..'){
            answer.pop()
        }else {
            answer.push(item)
        }
        console.log(answer);
    })
    // newArr.forEach()
    // a b .. .. c

    // 
    console.log('/' + answer.join('/'));
    return '/' + answer.join('/')
    
};

// path = "/home/"  -> /home
// /../             -> /    
// /home//foo/      -> /home/foo
// /a/./b/../../c/  -> /c

const path = '/a/./b/../../c/'
simplifyPath(path)