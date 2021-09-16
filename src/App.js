import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Projects from './pages/Projects';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Themes'
import Login from './pages/Login';
import QuestionDetails from './pages/QuestionDetails';
import Notifications from './pages/Notifications';
import Register from './pages/Register';
import Feed from './pages/Feed';

export default function App() {

  const [theme, setTheme] = useState('d');

  const toggleTheme = (currentTheme) => {
    if (currentTheme === 'l') {
      setTheme('d');
    } else {
      setTheme('l');
    }
  }

  return (
    <ThemeProvider theme={theme === 'l' ? light : dark}>
      <GlobalStyles />
      <Typography />
      <Router forceRefresh={true}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/question/:id">
            <QuestionDetails />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/**">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
