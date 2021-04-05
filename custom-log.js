function customLog(message, color='black') {
     switch (color) {
         case 'success':
              color = '\x1b[32m'
              break
         case 'info':
                 color = '\x1b[1m'
              break;
         case 'error':
              color = '\x1b[31m'
              break;
         default:
              color = color
     }

     console.log(color, message,'\x1b[0m')
}

module.exports = customLog
