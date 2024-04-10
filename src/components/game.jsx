import { useState } from "react"
import GetPokemon from "./getPokemon";
import ScoreBoard from "./scoreboard";
import CreateCards from "./createCards";


function Game() {

    const [pokemonInfos, setPokemonInfos] = useState([]);

    const [pokemonClicked, setPokemonClicked] = useState('');

    const [randomizedPokemonInfos, setRandomizedPokemonInfos] = useState([]);

    const [interacted, setInteracted] = useState(0);
    

    return (
        <div>
            <GetPokemon setPokemonInfos={setPokemonInfos} setRandomizedPokemonInfos={setRandomizedPokemonInfos}/>

            <ScoreBoard pokemonClicked={pokemonClicked} interacted={interacted}/>

            <CreateCards 
            pokemonInfos={pokemonInfos} 
            setPokemonClicked={setPokemonClicked} 
            randomizedPokemonInfos={randomizedPokemonInfos}
            setRandomizedPokemonInfos={setRandomizedPokemonInfos} 
            interacted={interacted}
            setInteracted={setInteracted}
            />
            
            
        </div>
    );
}

export default Game;