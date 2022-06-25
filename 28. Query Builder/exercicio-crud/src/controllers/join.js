const knex = require('../conexao');

module.exports = {
  async joinTest(req, res) {
    const { id } = req.params;
    const { nota } = req.body;

    const anotacoes = await knex('anotacoes')
      .insert({
        agenda_id: id,
        nota
      })
      .returning('*');
    return res.json(anotacoes);
  },
  async getAllNotes(req, res) {
    const anotacoes = await knex('anotacoes')
      .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
      .select('anotacoes.*', 'agenda.nome')
      .debug();
    return res.json(anotacoes);
  }
};
