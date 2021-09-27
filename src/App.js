import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPosts from './pages/BlogPosts';
import ContactPage from './pages/ContactPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/blog" component={BlogPosts} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  )
}

export default App;
