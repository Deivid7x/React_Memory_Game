import { useEffect } from "react"


function GetPokemon({setPokemonInfos, setRandomizedPokemonInfos}) {

    const pokemonList = [
        'bulbasaur', 'ivysaur', 'venusaur','charmander','charmeleon','charizard','squirtle', 'wartortle', 'blastoise', "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
        "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina",
        "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
        "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
        "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
        "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck",
        "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
        "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
        "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool",
        "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash",
        "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo",
        "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
        "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
        "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
        "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
        "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela",
        "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu",
        "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar",
        "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
        "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
        "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno",
        "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo",
        "mew"
    ];


    useEffect(() => {
        
        const fetchPokemonData = async () => {
            const promises = pokemonList.map(async pokemon => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

                const data = await response.json();

                return { name: pokemon, pokeImg: data.sprites.front_default };
            });

            const updatedPokemonInfos = await Promise.all(promises);
            
            setPokemonInfos(updatedPokemonInfos);

            setRandomizedPokemonInfos(updatedPokemonInfos.sort(() => Math.random() - 0.5));
            
        };

        fetchPokemonData();
        
    }, []);

    return null;
    
};

export default GetPokemon;