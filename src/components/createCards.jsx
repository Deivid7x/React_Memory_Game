import { useEffect } from "react";
import '../styles/style.css'

function CreateCards({pokemonInfos, setPokemonClicked, setRandomizedPokemonInfos, randomizedPokemonInfos, interacted, setInteracted}) {

    useEffect(() => {
        const randomized = pokemonInfos.sort(() => Math.random() - 0.5);
        
        setRandomizedPokemonInfos(randomized);

    }, [interacted, pokemonInfos]);

    const userInteract = function(pokemonName) {
        if (interacted === 0) {
            setInteracted(1);
        }
        else{
            setInteracted(0);
        };
        
        setPokemonClicked(pokemonName);
    };


    return (
        <div className="container">

            <h2>Clique no Pokémon que você ainda NÃO clicou.</h2>
            <div className="pokemonContainer">
                {randomizedPokemonInfos.map(pokemon => (
                    <div className="pokemonCard" key={pokemon.name} onClick={() => userInteract(pokemon.name)}>
                        <img src={pokemon.pokeImg} alt={pokemon.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateCards;