exports.handler = async (event, context) => {

    const redirectUrl = 'https://grvsh.xyz/readme.json'
    var loc =  event.user_agent;
    if (loc.includes("curl")) { 
    return {
      statusCode: 302,
      headers: {
        Location: redirectUrl,
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({})
    }
  }
}