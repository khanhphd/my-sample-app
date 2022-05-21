const app = require("../src/app")
const chai = require("chai")
const chaiHttp = require("chai-http")
const res = require("express/lib/response")

let should = chai.should()

let server = app

chai.use(chaiHttp)

before(done => {
    setTimeout(done, 3000)
})

describe('Test if server is ready', () => {

    beforeEach((done) => {
        done()
    })

    describe('Public ping', () => {
        
        it('Server is ready', done => {
            chai.request(server)
                .get('/public/ping')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.status.should.be.eql('ok')
                    done()
                })
        })

        it('Server returns Hello message', done => {
            chai.request(server)
                .get('/hello')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.message.should.be.eql('Hello')
                    done()
                })
        })

    })
})

describe('Invalid route', () => {

    beforeEach((done) => {
        done()
    })

    describe('Get something which is not present', () => {
        it('Get afsaf', done => {
            chai.request(server)
                .get('/afsaf')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })
})

after(done=>{
    done()
    process.exit(0)
})