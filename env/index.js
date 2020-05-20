const arkenv = require('../env/ark.env')
const devenv = require('../env/dev.env')
const prodenv = require('../env/prod.env')
let env = {}

switch (process.env.NODE_ENV) {
  case 'development' :
    env = devenv
    break;
  case 'ark' :
    env = arkenv
    break;
  case 'prod' :
    env = prodenv
    break;       
}

console.log(env,'环境变量')


module.exports = env