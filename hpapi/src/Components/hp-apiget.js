import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            <div className='characters'>
            {characters.map((character, Index) => (
                <div key={Index}> 
                    <ul>{[character.name, character.alternate_names, "    ", character.species, character.gender]}</ul>
                    <img src="character.image"></img>
                </div>
            ))}
            </div>
  )
};

export default Hpapiget;