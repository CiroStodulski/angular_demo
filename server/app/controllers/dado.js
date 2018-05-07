module.exports = app => {


    let controller = {};

    controller.load = (req, res) => {
        
        const Dado = new app.app.daos.Dado();

        Dado.load((err, result) => res.status(200).json(result));

    }

    return controller;

}