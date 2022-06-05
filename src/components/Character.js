import React from 'react';
import PropTypes from "prop-types"

const Character = ({ character }) => {

    //? Function to sort comics by date from old to new
    const sortComics = character.comics.items.sort((a, b) => {
        return a.name.match(/[0-9]+/) - b.name.match(/[0-9]+/)
    })

    return (
        <div className='content' data-testid="content">
            <div className='content_inner'>
                <div className='content_front'>
                    <img className='front_img' src={character.thumbnail.path + "/portrait_xlarge.jpg"} alt={`character_img${character.id}`} />
                    <h1 className='content_title' >{character.name}</h1>
                </div>
                <div className='content_back'>
                    <ul>
                        <li>
                            <strong className='title'>Name :</strong>
                            <hr />
                            {character.name}
                        </li>
                        <li>
                            <strong className='title'>Description :</strong>
                            <hr />
                            {character.description}
                        </li>
                        <li>
                            <strong className='title'>Comics :</strong>
                            <hr />

                            {sortComics.slice(0, 10).map((item, index) => (
                                <p key={index}>{item.name}</p>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

//? Specifying that the incoming prop will be an object and will be required
Character.prototype = {
    character: PropTypes.object.isRequired
}

export default Character