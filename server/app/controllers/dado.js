module.exports = app => {

    const Dado = new app.app.daos.Dado();

    let controller = {};

    controller.load = (req, res) => {

        Dado.load((err, result) => res.status(200).json(result));


    }

    return controller;

}