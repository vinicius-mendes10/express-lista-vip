const controller = {}

controller.index = (req, res) => res.render ('index',{title: 'Pagina inicial'})

module.exports = controller