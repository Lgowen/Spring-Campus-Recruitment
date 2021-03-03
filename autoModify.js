const path = require('path')
const fs = require('fs')
const url = 'CTO_006_CN_PL_MINTEGRAL_EN.html'

async function readFile (url) {
    try {
        const data = await fs.readFileSync(url)
        // return data.toString()
        let fileContent = data.toString()
        // console.log(fileContent);
        let script = '<script src="data.js"></script> <br/> <script src="webaudio.js"></script> <br/>'
        let targetScript = '<script type="text/javascript"  id ="CREATIVE-parameters">'
        targetScript += ' '
        const scriptIndex = fileContent.indexOf('<script type="text/javascript"  id ="CREATIVE-parameters">')
        console.log(scriptIndex);

    } catch (err) {
        console.log(err)
    }
    
}

readFile(url)

// console.log(fileContent);