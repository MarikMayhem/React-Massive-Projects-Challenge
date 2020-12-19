
import React from 'react';
import './Switchtab.scss'

const SwitchTab = ({ search, changeSearchCategory }) => {

    return (
        <section className="switch-tab">
            <button name="search" className={`switch-button ${!search && 'active'}`} onClick={changeSearchCategory}>Search</button>
            | <button name="category" className={`switch-button ${search && 'active'}`} onClick={changeSearchCategory}>Category</button>
        </section>
    );
}

export default (React.memo(SwitchTab));
