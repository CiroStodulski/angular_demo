module.exports = app => {


    const controller = app.app.controllers.dado;


    app.route('/dado')
        .get(controller.load)
        .post(controller.save)

    app.delete('/dado/:dado', controller.delete);


}