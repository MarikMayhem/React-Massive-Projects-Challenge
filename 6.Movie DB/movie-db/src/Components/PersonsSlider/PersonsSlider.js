import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import Person from './Person/Person';
import './PersonsSlider.scss';

const PersonsSlider = ({ personsList = [], infoType }) => {

    const [personsSlider, setPersonsSlider] = useState([]);
    const [firstFourPersons, setFirstFourPersons] = useState([]);


    useEffect(() => {
        setPersonsSlider(personsList)
        setFirstFourPersons(personsList.splice(0, 4));
    }, [personsList])

    const nextPersonsHandler = () => {
        setFirstFourPersons(personsSlider.splice(0, 4))
        setPersonsSlider([...personsSlider, ...firstFourPersons]);
    }

    return (
        <section className="persons-slider">
            {personsList.length > 0 && <FaArrowRight className="next-button" onClick={nextPersonsHandler} />}
            <div className="persons">
                {firstFourPersons.map(person => {
                    return <Person
                        key={person.id}
                        personPortrait={person.profile_path}
                        name={person.name}
                        {...(infoType === 'role-name' ? { roleName: person.character } : { knownFor: person.known_for_department })}
                    />
                })}
            </div>
        </section>
    );
}

export default PersonsSlider;
