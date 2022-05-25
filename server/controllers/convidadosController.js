const { path } = require('express/lib/application')
const fs = require('fs')
const patch = require('patch')
const controller = require('../data/convidados.json')


const controller = {}

controller.index = (req, res) => res.render ('convidados',
{title: 'Lista de Convidados',
 convidados})

controller.vip = (req, res) => res.render ('convidados',
{title: 'Lista de Convidados VIP',
convidados: convidados.filter(convidado => convidado.vip)
})

controller.add = (req, res) => res.render ('adicionar convidado',
{title: 'adicionar convidado',
})

controller.create = (req, res) =>{ 
let convidadoNovo = {
    id: convidado[convidados.length -1].id + 1,
 ...req.body
}
console.log({convidadoNovo})

let convidadosAtualizados = [...convidado, convidadoNovo]

fs.writeFileSync(
    path.join(__dirname, '../data/convidados.json'),
    JSON.stringify(convidadosAtualizados)
    'utf-8'
    )
    //res.JSON(convidadosAtualizados)

    res.render ('sucesso',{
        title: 'convidado(s) $ (convidado.nome) adicionado(s) com sucesso',
})
}



module.exports = controller