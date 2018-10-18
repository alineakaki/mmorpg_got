module.exports.cadastro = function(application, req, res) {
   res.render('cadastro', {validacao : {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros) {
        res.render('cadastro', {validacao : erros, dadosForm : dadosForm});
        return;
    }   

        var connection = application.config.dbConnection;

        var DAO =  application.app.models.UsuariosDAO;
        var UsuariosDAO = new DAO(new connection());

        UsuariosDAO.inserirUsuario(dadosForm);

        res.send('Podemos cadastrar!');

        consol.log("tijolo")
}