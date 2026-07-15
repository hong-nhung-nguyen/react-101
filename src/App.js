import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavigationMenu from './components/NavigationMenu/index';
import Content from './components/Content/index';
import MainContent from './components/MainContent/index';

function App() {

  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={10} active={true} />
        <MainContent />
        <Content text="Content 2" number={5} active={false} />
      </div>
      <Footer />
    </>
    
    
  );
}

export default App;
