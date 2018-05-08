class Dado {

    constructor() {
        this._dados = [{
            id: 1,
            name: 'ciro',
            age: new Date(1989, 9, 5),
            last_name: 'stodulski de azevedo',
        }, {
            id: 2,
            name: 'yuri',
            age: new Date(1995, 8, 10),
            last_name: 'do santos'
        }]
    }


    load(callback) {
        callback(null, this._dados);
    }

    save(pessoa, callback) {
        pessoa.id = this._dados[this._dados.length - 1].id + 1;
        this._dados.push(pessoa);

        console.log(this._dados)
        callback(null, 'pessoa cadastrada')
    }

    delete(dado, callback) {
        console.log(dado.id)
        const pessoa = this._dados.filter(ds => ds.id == dado)
        this._dados = this._dados.filter(ds => ds.id != dado)

        if (pessoa.length > 0)
            callback(null, this._dados);
        else
            callback('usuario nao foi econtrado', null);

    }

}

module.exports = () => Dado;