/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import restApi, {fetchCategories, fetchCategory, fetchFriends} from 'services/api';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    /**
     * when initial state username is not null, submit the form to load repos
     */
    componentDidMount() {
        if (this.props.username && this.props.username.trim().length > 0) {
            this.props.onSubmitForm();
        }
    }

    render() {
        const { loading, error, repos } = this.props;
        const reposListProps = {
            loading,
            error,
            repos,
        };

        return (
            <article>
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="A React.js Boilerplate application homepage" />
                </Helmet>
                <div className="home-page">
                    <section>
                        <div className="nav-bar">
                            <Link className="" to="/">
                                Home
                            </Link>
                            <Link className="" to="/features">
                                Features
                            </Link>
                        </div>
                    </section>
                    <section className="centered">
                        <h2>Start your next react project in seconds</h2>
                        <p>A minimal <i>React-Redux</i> boilerplate with all the best practices</p>


                        <Button color="primary" onClick={ async () => {
                            //const aaa = await fetchCategories().then(res => res.data).catch(e => e.response.data);
                            //const aaa = await fetchCategory(1).then(res => res.data).catch(e => e.response.data);
                            const aaa = await fetchFriends({
                                per_page: 10,
                            }).then(res => res.data).catch(e => e.response.data);

                            console.log(aaa);

                        }}>Danger!</Button>


                    </section>

                    <section>
                        <h2>Try me!</h2>
                        <form onSubmit={this.props.onSubmitForm}>
                            <label htmlFor="username">
                                Show Github repositories by
                                <span className="at-prefix">@</span>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="flexdinesh"
                                    value={this.props.username}
                                    onChange={this.props.onChangeUsername}
                                />
                            </label>
                        </form>
                        <ReposList {...reposListProps} />
                    </section>
                </div>
            </article>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    repos: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
    ]),
    onSubmitForm: PropTypes.func,
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
};
