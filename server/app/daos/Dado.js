class Dado {

    constructor() {
        this._dados = [{
            name: 'ciro',
            age: new Date(1989, 9, 5),
            last_name: 'stodulski de azevedo',
        }, {
            name: 'yuri',
            age: new Date(1995, 8, 10),
            last_name: 'do santos'
        }]
    }


    load(callback) {

        callback(null, this._dados);
    }

}

module.exports = () => Dado;