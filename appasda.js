const grass = [2,3,4,5,6]
const milk = [2,4,7,9,12]

function MaxMilk(grass, milk) {
    const grassLen = grass.length
    let maxMilk = 0
    const arr = new Array(grassLen - 1).fill(0).map(item => new Array(grassLen - 1).fill(0))
    for(let i = 0; i < grassLen; i ++) {
        for(let j = i + 1; j < grassLen; j++) {
            // 不打架的情况
            if(!(grass[i] > grass[j] && milk[i] < milk[j]) ) {
                arr[i][j - 1] = [milk[i], milk[j]]
            }else {
                arr[i][j - 1] = true
            }
        }
    }
    console.log(flatArr(arr));
    let asn = [...new Set(flatArr(arr))]
    console.log(asn);
    maxMilk = asn.filter(item => item !== true).reduce((pre, cur) => pre + cur)
    return maxMilk
}

function flatArr(arr) {
    

    if (!Array.isArray(arr)) return

            let result = [] // 存放结果

            // 拼接数组扁平化之后的值
            result = arr.reduce(function (preValue, currentValue) {
                return preValue.concat(Array.isArray(currentValue) ? flatArr(currentValue) : currentValue)
            }, [])

            return result
}

let asn = MaxMilk(grass, milk)
console.log(asn); 

var output = (function (x){
    delete x
    return x
})(0)
console.log(output);