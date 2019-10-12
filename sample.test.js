import apiHelper from './apiHelper';
import chai from 'chai';
const expectChai = chai.expect;

const url = 'http://my-json-server.typicode.com';
const uri = '/shridharkalagi/SupertestSample/posts/1';
test('Validate the schema', (done) => {

    apiHelper.get(url,uri,{},{})
    .expect(200)
    .expect(response => {
        console.log(response.body);
        expectChai(response.body.title.length).to.be.at.least(1);
        expectChai(response.body.title).equals('Shridhar');
    })
    .end (error => apiHelper.handleError(error, done));
})