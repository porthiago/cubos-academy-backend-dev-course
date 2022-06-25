const { listarPokemons, detalharPokemon } = require("utils-playground");

const pokedex = async (req, res) => {
  const { pagina } = req.query;

  try {
    const listaDePokemons = await listarPokemons(pagina);

    return res.status(200).json(listaDePokemons.results);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};

const aWildPokemonAppeared = async (req, res) => {
  const { idOuNome } = req.params;

  try {
    const pokemonCapturado = await detalharPokemon(idOuNome);

    const {
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    } = pokemonCapturado;

    return res.status(200).json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    });
  } catch (err) {
    res.status(404).json(`Wild pokemon fled, because: ${err.message}`);
  }
};

module.exports = {
  pokedex,
  aWildPokemonAppeared,
};
