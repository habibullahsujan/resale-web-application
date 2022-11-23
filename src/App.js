
import './App.css';
import UserContext from './Context/UserContext';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div>
      <UserContext>
        <RouterProvider router={routes}/>
      </UserContext>
    </div>
  );
}

export default App;
