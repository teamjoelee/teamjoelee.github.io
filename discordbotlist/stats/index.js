const https = require('https')
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijc5MjMxMTcyNTE4MTIzOTMwNyIsImlhdCI6MTYxMDUxMDkxMn0.BdWwzvfJr1IYCDjsKEAtlcSafdrjfWhKuLXTjgEOxJ4"
let data = JSON.stringify({
    'guilds':  30,
    'shard_id':  22,
    'users': 20
  });
  let options = {
    hostname: 'discordbotlist.com',
    port: 443,
    path: `/api/v1/bots/792311725181239307/`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'authorization': token
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[discordbotlist.com] Post success!')
      }
    } else {
      console.log(`[discordbotlist.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
