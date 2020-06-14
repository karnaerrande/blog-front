import React from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Write from './views/Write'
import { Admin } from './views/Admin';
import KNavbar from './components/KNavbar';

const lightTheme = {
  backgroundColor: 'ghostwhite',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}
const darkTheme = {
  backgroundColor: 'black',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}
const fallTheme = {
  backgroundColor: '#fce8b1',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}
const winterTheme = {
  backgroundColor: '#c0f2fc',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}
const springTheme = {
  backgroundColor: '#b0ffb7',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}
const summerTheme = {
  backgroundColor: '#ffd5c2',
  fontFamily: 'Iconsolata',
  fontSize: '19px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      theme: 'DARK'
    };
    this.fetchData();
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme = (val) => {
    this.setState({ theme: val })
    console.log(this.state)
  }

  fetchData() {
    axios.get('http://localhost:5000/getPosts')
      .then(res => {
        this.setState({ posts: res.data.results });
        console.log(res.data.results)
      })
  }

  render() {
    return (
      <div style={(this.state.theme === 'LIGHT')
        ? lightTheme
        : (this.state.theme === 'DARK')
          ? darkTheme
          : (this.state.theme === 'FALL')
            ? fallTheme
            : (this.state.theme === 'WINTER')
              ? winterTheme
              : (this.state.theme === 'SPRING')
                ? springTheme : summerTheme}>
        <Router>
          <KNavbar theme={this.state.theme} />
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/write">
                <Write theme={this.state.theme} />
              </Route>
              <Route path="/about">
                <About theme={this.state.theme} />
              </Route>
              <Route path="/proj">
                <Projects theme={this.state.theme} />
              </Route>
              <Route path="/cont">
                <Contact theme={this.state.theme} />
              </Route>
              <Route path="/admin">
                <Admin theme={this.state.theme} />
              </Route>
              <Route path="/">
                <Home theme={this.state.theme} change={this.changeTheme} posts={this.state.posts} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
