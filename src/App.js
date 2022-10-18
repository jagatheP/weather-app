import UilReact from '@iconscout/react-unicons/icons/uil-react';
import ApplicationContainer from './components/ApplicationContainer';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div class='w-full h-full min-h-screen bg-gradient-to-br from-cyan-700 to-blue-700'>
      <ApplicationContainer>
        <Header />
        <SearchContainer />
      </ApplicationContainer>
    </div>
  );
}

export default App;
