import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header titleName='Zayon Nieves' navBarData={[
        {
          'navBarName': 'About'
        },
        {
          'navBarName': 'Experience'
        },
        {
          'navBarName': 'Projects'
        },
        {
          'navBarName': 'Contact'
        }
        ]}/>
    </div>
  );
}

export default App;
