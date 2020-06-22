const should = require('chai').should();
const app = require('./test_score');

describe('# App test', function () {

    describe('# ljh test', function () {
        
        it('ljh id should equal 10', function() {
            app.ljh.id.should.equal(10)
        })
        it('ljh name should equal 이준희', function () {
            app.ljh.name.should.equal('이준희')
        })
        it('ljh kor should equal 85', function () {
            app.ljh.kor.should.equal(85)
        })
        it('ljh eng should equal 70', function () {
            app.ljh.eng.should.equal(70)
        })
        it('ljh math should equal 90', function () {
            app.ljh.math.should.equal(90)
        })
        it('ljh total should equal 245', function () {
            app.ljh.total.should.equal(245)
        })
        it('ljh avg should equal 81.7', function () {
            app.ljh.avg.should.equal(81.7)
        })
    });


    describe('# scores.csv test', function () {
        it('getInfo() should return Array type', function () {
            app.scoreSystem.getInfo().should.be.a('Array')
        });
        it('ranks should a Array type', function () {
            app.scoreSystem.rank().should.be.a('Array')
        });
        it('scores Array 0th name should = 강호민', function () {
            app.scoreSystem._scores[0].name.should.equal('강호민')
        })
        it('should a Number type', function () {
            for (let i = 0; app.scoreSystem._scores.length > i; i++) {
                app.scoreSystem._scores[i].kor.should.be.a('Number')
                app.scoreSystem._scores[i].eng.should.be.a('Number')
                app.scoreSystem._scores[i].math.should.be.a('Number')
                app.scoreSystem._scores[i].total.should.be.a('Number')
                app.scoreSystem._scores[i].avg.should.be.a('Number')
            }
        })
        it('should a String type', function () {
            for (let i = 0; app.scoreSystem._scores.length > i; i++) {
                app.scoreSystem._scores[i].name.should.be.a('String')
            }
        })
    });
});