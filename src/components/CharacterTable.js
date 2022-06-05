import React from 'react'
import PropTypes from "prop-types"

//* For local image import
import shield from "../images/55572.jpg"

/*========== MY COMPONENT ==========*/
import Character from "./Character"

const CharacterTable = ({ characters, isLoading }) => {
    //? If the data from isLoading is false then the loading bar will work.
    //? if data from isLoading is true then characters will be listed
    return isLoading ? <div className='loading'>
        <img className='shield' src={shield} alt='captain_america_shield'></img>
        <h1>Loading...</h1>
        <p>Wait a little</p>
    </div> : <section className='contents'>
        {
            characters.map((character, index) => (
                <Character key={index} character={character} />
            ))
        }
    </section>
}

//? character: Specifying that the incoming prop will be an array and will be required
//? isLoading: Specifying that the incoming prop will be an boolean and will be required
CharacterTable.prototype = {
    character: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default CharacterTable