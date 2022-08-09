import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hp-apiget.css';

const Hpapiget = () => {

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        
    const getCharacters = async () => {
        const url = `http://hp-api.herokuapp.com/api/characters/students`;
        
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setCharacters(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    getCharacters();
  }, []);

    if (!characters.length) return <h3>Loading...</h3>

    return ( 
            <div className='characterContainerBody'>
            {characters.map ((character, Index) => (
                <div key={Index} className='characterContainer'> 
                    <img className='imageData' src={character.image}></img>
                    <ul className='characterData'>{[
                        "Name: ", character.name, <br/>,
                        "Species: ", character.species, <br/>, "Gender: ", character.gender, <br/>,
                        "House: ", character.house, <br/>, "Date Of Birth: ", character.dateOfBirth, <br/>,
                        "Year Of Birth: ", character.yearOfBirth, <br/>,
                        "Ancestry: ", character.ancestry, <br/>,
                        "Eye Colour: ", character.eyeColour, <br/>,
                        "Hair Colour: ", character.hairColour, <br/>, "Wand Wood: ", character.wand.wood, <br/>,
                        "Wand Core: ", character.wand.core, <br/>, "Wand length: ", character.wand.length, <br/>,
                        "Patronus: ", character.patronus, <br/>,
                        "Actor: ", character.actor, <br/>
                    ]}</ul>
                </div>
            ))}
            </div>
  )
};

export default Hpapiget;