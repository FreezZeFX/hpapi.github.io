import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hp-apiget.css';

const Hpapiget = () => {

    const [characters, setCharacters] = useState([]);
    const [images, setImages] = useState([]);
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
            <div className='characterContainer'>
            {characters.map ((character, Index) => (
                <div key={Index}> 
                    <img className='imageData' src={character.image}></img>
                    <ul className='characterData'>{[
                        character.name, <br/>, character.alternate_names, <br/>, character.species, <br/>, character.gender,
                        character.house, <br/>, character.dateOfBirth, <br/>, character.yearOfBirth, <br/>,
                        character.wizard, <br/>, character.ancestry, <br/>, character.eyeColour, <br/>,
                        character.hairColour, <br/>, character.wand.wood, <br/>, character.wand.core, <br/>, character.wand.length, <br/>,
                        character.patronus, <br/>, character.hogwartsStudent, <br/>,
                        character.howartsStaff, <br/>, character.actor, <br/>, character.alternate_actors, <br/>, character.alive
                    ]}</ul>
                </div>
            ))}
            </div>
  )
};

export default Hpapiget;