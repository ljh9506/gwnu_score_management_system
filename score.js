var fs = require('fs');

class ScoreSystem {
    constructor(scoreInfos) {
        this._scores = [];
        for (let scoreInfo of scoreInfos) {
            this._scores.push(new Score(scoreInfo));
        }
    }

    getInfo() {
        return this._scores;
    }


    rank() {
        var scores = this._scores;
        let avgs = []; //평균점수를 넣을 배열 
        scores.forEach(score => {
            avgs.push(score._avg)
        })
        var ranks = new Array(avgs.length);
        var rnk = avgs.length;

        for (var i = 0; i < avgs.length; i++) {
            rnk = 1;
            for (var j = 0; j < avgs.length; j++) {
                if (parseFloat(avgs[i]) < parseFloat(avgs[j])) rnk++;
            }
            for (var j = 0; j < ranks.length; j++) {
                if (ranks[j] == rnk) rnk++;
            }
            ranks[i] = rnk;
        }

        return ranks; // rank 배열 return
    }
}

class Score {
    constructor(scoreInfo) {
        let studentInfoItems = scoreInfo.split(',');
        this._id = JSON.parse(studentInfoItems[0]);
        this._name = String(studentInfoItems[1]);
        this._kor = JSON.parse(studentInfoItems[2])
        this._eng = JSON.parse(studentInfoItems[3]);
        this._math = JSON.parse(studentInfoItems[4]);
        this._total = JSON.parse(this._kor + this._eng + this._math)
        this._avg = JSON.parse(((this._kor + this._eng + this._math) / 3).toFixed(1))
        this._rank = '';
    }
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get kor() {
        return this._kor
    }

    get eng() {
        return this._eng
    }

    get math() {
        return this._math
    }

    get total() {
        return this._total
    }
    get avg() {
        return this._avg
    }
    get rank() {
        return this._rank
    }
}


fs.readFile('./data/score.csv', "utf8", (err, data) => {
    let scoreInfo = data.split('\n');
    scoreSystem = new ScoreSystem(scoreInfo)
    let scores = scoreSystem.getInfo();

    for (let i = 0; i < scores.length; i++) {
        scores[i]._rank = scoreSystem.rank()[i];
    } // sorting된 배열요소 반복삽입

    function printScores(scores) {
        return scores.reduce((acc, score) => {
            let text = `번호: ${score.id}  이름: ${score.name} 국: ${score.kor} 영: ${score.eng} 수: ${score.math} 총점: ${score.total} 평균: ${score.avg} 순위: ${score.rank}위 \n`
            acc += text
            return acc
        }, '')
    }
    const result = printScores(scores)
    console.log(result)
})

