import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/"
                                exact
                                activeClassName="my-active" // default active
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Home </NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} >New Post </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route
                    path='/'
                    exact
                    render={() => <Posts/> }>
                </Route>*//**
                    /:id covers /new-post, id can be new-post,
                    so use switch and oder is important. or dont use /:id.
                    */
                }

                < Switch >
                    <Route path="/" exact component={Posts} />
                    <Route path="/full-post-:id" exact component={FullPost} />
                    <Route path="/new-post" exact component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;