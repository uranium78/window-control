// const index = require('./../index')
const path = require('path')
const { exec } = require('child_process')

// // make sure to enter a valid pid
// index.sendKeys(23561, 'echo "hello"', {resetFocus: true, pressEnterOnceDone: false, callback: (e, m) => {
//   console.log(`error: ${e}\nmessage: ${m}`)
// }})

// index.getProcessList((pslist) => {
//   console.log(pslist)
// })

const getWindowList = (callback) => {
  if (process.platform === 'linux') {
    const linuxGetWindowList = path.join(__dirname, 'linux', 'getWindowList.sh')
    exec(linuxGetWindowList, (error, stdout, stderr) => {
      if (error) {
        callback(error, null)
        return
      }
      if (stderr) {
        callback(stderr, null)
        return
      }
      callback(null, stdout)
    })
  } else {
    console.log('platform not supported yet')
  }
}

getWindowList((error, windowList) => {
  console.log(error)
  console.log(windowList)
})

