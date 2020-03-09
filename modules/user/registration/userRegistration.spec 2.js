import axios from axios;

describe('USER REGISTRATION', () => {


  it('should verify from database', () => {
    console.log('START');
    const data = await axios
      .get('https://server-stage.pasv.us/info')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log('ERROR', err)
      })

    expect(data).eq(200)
    console.log('DATA' + data);
    console.log('END');
  });

});
