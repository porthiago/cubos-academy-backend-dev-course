const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokedex = async (req, res) => {
    const listaDePokemons = await listarPokemons();

    return res.status(200).json(listaDePokemons.results);
}

const aWildPokemonAppeared = async (req, res) => {
    const { idOuNome } = req.params;

    return await detalharPokemon(idOuNome).then((pokemonCapturado) => {
        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonCapturado;

        return res.status(200).json({
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        }
    );

    }).catch(err => res.status(404).json("Wild pokemon fled"))
}

module.exports = {
    pokedex,
    aWildPokemonAppeared
}