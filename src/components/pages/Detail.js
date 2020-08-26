import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import User from "../users/User";
import {GET_REPOS, GET_USER, SET_LOADIG} from "../../actions/types";
import Spinner from "../layout/Spinner";

const Detail = ({match, dispatch, user, loading, repos}) => {
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);

        setTimeout(() => {
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        }, 2000);
    };

    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

        setTimeout(() => {
            dispatch({
                type: GET_REPOS,
                payload: res.data
            });
        }, 2000);
    };

    const setLoading = () => dispatch({type: SET_LOADIG});

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);

    if(loading) {
        return <Spinner/>;
    } else {
        return (
            user && repos && <Fragment>
                <User user={user} repos={repos} />
            </Fragment>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.github.user,
    loading: state.github.loading,
    repos: state.github.repos
});

export default connect(mapStateToProps)(Detail);
