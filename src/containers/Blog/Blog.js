import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth: true
    }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/"
                                exact
                                activeClassName="my-active" // default active
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink> </li>
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
                    {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render = {() =><h1>404 not found...</h1>}/>

                   {/* <Redirect from="/" to="/posts" />
                     <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;