

exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://news100times.com/because-the-family-is-expecting-a-baby-a-pit-bull-was-taken-to-a-shelter/'
      }
    }
  }
}

