#! /usr/bin/env node

let old =  process.argv[2] && process.argv[2].slice(1)
let newname= process.argv[3] && process.argv[3].slice(1)
const path = require('path')
const fs = require('fs')

if(fs.existsSync(path.join(process.cwd(),old))){
   fs.renameSync(old,newname); 
}
