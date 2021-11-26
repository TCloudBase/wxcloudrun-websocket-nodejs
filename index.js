const ws = require('nodejs-websocket')
ws.createServer(connection => {
  console.log('建立新的链接')
  connection.on('text', function (data) {
    console.log('接收到的客户端消息:' + data)
    connection.sendText('收到消息:' + data)
  })
  connection.on('close', function (code, reason) {
    console.log('服务关闭')
  })
  connection.on('error', () => {
    console.log('服务异常关闭')
  })
}).listen(3000)
