import apiHelper from './apiHelper';
import chai from 'chai';
const expectChai = chai.expect;

const url = 'https://jsonplaceholder.typicode.com';
const uri = '/todos/1';
test('Validate the schema', (done) => {

    apiHelper.get(url,uri,{},{})
    .expect(200)
    .expect(response => {
        console.log(response.body);
        expectChai(response.body.title.length).to.be.at.least(1);
    })
    .end (error => apiHelper.handleError(error, done));
})