module.exports = app => {


    let controller = {};
    const Dado = new app.app.daos.Dado();
    controller.load = (req, res) => {
        Dado.load((err, result) => res.status(200).json(result));
    }

    controller.save = (req, res) => {
        Dado.save(req.body, (err, result) => res.status(200).json({ result: result }));
    }

    controller.delete = (req, res) => {
        Dado.delete(req.params.dado, (err, result) => err ? res.status(200).json({ result: err }) : res.status(200).json({ result: result })  );
    }

    return controller;

}