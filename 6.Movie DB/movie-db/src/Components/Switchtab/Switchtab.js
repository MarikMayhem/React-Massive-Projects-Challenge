import React, { useState } from 'react';
import './Switchtab.scss'
import * as actionTypes from '../../Store/Actions/actionTypes';
import { connect } from 'react-redux';

const SwitchTab = (props) => {

    const [defaultTab, setDefaultTab] = useState('search')
    const changeTabHandler = (e) => {
        e.preventDefault()
        if (defaultTab !== e.target.name) {
            props.onChangeTab()
            setDefaultTab(e.target.name)
        }
    }
    return (
        <section className="switch-tab">
            <button name="search" className={`switch-button ${!props.search && 'active'}`} onClick={changeTabHandler}>Search</button>
            | <button name="category" className={`switch-button ${props.search && 'active'}`} onClick={changeTabHandler}>Category</button>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        search: state.search.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeTab: () => dispatch({ type: actionTypes.CHANGED })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SwitchTab));
