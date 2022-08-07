import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hp-apiget.css';

const Hpapiget = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        
    const getCharacters = async () => {
        const url = `http://hp-api.herokuapp.com/api/characters`;

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
            <div className='characterContainer'>
            {characters.map((character, Index) => (
                <div key={Index}> 
                    <ul className='characterData'>{[
                        character.name,"" ,character.alternate_names, character.species, character.gender,
                        character.house, character.dateOfBirth, character.yearOfBirth,
                        character.wizard, character.ancestry, character.eyeColour,
                        character.hairColour, character.wand.wood, character.wand.core, character.wand.length,
                        character.patronus, character.hogwartsStudent,
                        character.howartsStaff, character.actor, character.alternate_actors, character.alive
                    ]}</ul>
                </div>
            ))}
            </div>
  )
};

export default Hpapiget;