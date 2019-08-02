const chaiHttp = require('chai-http');
const chai = require('chai');
const path = require('path');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("To test backend APIs", () => {

    it("Testing if the index page is up", (done) => {
        chai.request(app)
            .get(`/`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('Testing POST endpoint for getting store name', function (done) {
        chai.request(app)
            .post('/get-store')
            .send({'location_name':"Stumpergasse 51, 1060 Vienna"})
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });


});