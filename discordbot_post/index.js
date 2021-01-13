const url = "API_KEY"

const fetch = require('node-fetch');
const https = require('https')
let data = JSON.stringify({
    'server_count': 20
  });
  let options = {
    hostname: 'api.botlist.space',
    port: 443,
    path: `/v1/bots/792311725181239307`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': "API_KEY"
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
  
        console.log('[botlist.space] Post success!')
      
    } else {
      console.log(`[botlist.space] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
