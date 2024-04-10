import { useEffect, useState } from "react";

function ScoreBoard({pokemonClicked, interacted}) {
    const [score, setScore] = useState(0);

    const [listOfPokemonClicked, setListOfPokemonClicked] = useState([]);

    const [maxScore, setMaxScore] = useState(0);

    useEffect(() => {
        function updateScore(pokemonClicked) {

            if (listOfPokemonClicked.includes(pokemonClicked)) {

                setScore(0);
                setListOfPokemonClicked([]);
            }
            else if (pokemonClicked.length > 0) {
                console.log('teste')
                setScore(score + 1);
                setListOfPokemonClicked([...listOfPokemonClicked, pokemonClicked]);
    
                if (score +1 > maxScore){
                    console.log('e aqui?')
                    setMaxScore(maxScore+1);
                };
            };
        };
    
        updateScore(pokemonClicked);

        return () => {
            
          };

    }, [interacted]);

    
    return (
        <div>
            <h2>Pontos: {score}</h2>
            <h3>Recorde: {maxScore}</h3>
        </div>
    )
}

export default ScoreBoard;