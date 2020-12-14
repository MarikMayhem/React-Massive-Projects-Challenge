import React from 'react';
import Category from '../../Components/Category/Category';
import Search from '../../Components/Search/Search';
import { connect } from 'react-redux'

const Sort = (props) => {
    return (
        <section className="sort">
            {props.search ? <Category /> : <Search />}
        </section>
    );
}

const mapStateToProps = state => {
    return {
        search: state.search.search
    }
}

export default connect(mapStateToProps)(React.memo(Sort));
