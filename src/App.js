import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Glossary from './Component/Glossary';
import Manage from './Component/Manage';
import Breadcrumbs from './Component/Breadcrumbs';
import Footer from './Component/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Glossary />
      <Manage />
      <Breadcrumbs />
      <Footer />
    </Router>
  );
}

export default App;
