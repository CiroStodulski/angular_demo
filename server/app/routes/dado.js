module.exports = app => {


    const controller = app.app.controllers.dado;


    app.get('/dado', controller.load);


}