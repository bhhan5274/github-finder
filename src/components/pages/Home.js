import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {CLEAR_USERS, REMOVE_ALERT, SEARCH_USERS, SET_ALERT, SET_LOADIG} from "../../actions/types";
import axios from 'axios';
import Search from "../search/Search";
import Users from "../users/Users";

const Home = ({dispatch, loading, users}) => {
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

        setTimeout(() => {
            dispatch({type: SEARCH_USERS, payload: res.data.items});
        }, 2000);
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS});

    const setLoading = () => dispatch({type: SET_LOADIG});

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            });
        }, 2000);
    }

    return (
        <Fragment>
            <Search searchUsers={searchUsers} users={users} clearUsers={clearUsers} setAlert={setAlert}/>
            <Users loading={loading} users={users} />
        </Fragment>
    );
};

const mapStateToProps = (state, ownProps) => ({
    loading: state.github.loading,
    users: state.github.users
});

export default connect(mapStateToProps)(Home);
