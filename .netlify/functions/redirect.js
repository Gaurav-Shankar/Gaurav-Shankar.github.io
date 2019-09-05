exports.handler = (event, context, callback) => {

    const redirectUrl = 'https://grvsh.xyz/readme.json'
    var loc =  event.user_agent;
    if (loc === "curl/7.54.0") { 
    return {
      statusCode: 302,
      headers: {
        Location: redirectUrl,
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({})
    }
  }
  else{
      console.log("Coming soon....")
  }
}