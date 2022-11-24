
import './App.css';
import UserContext from './Context/UserContext';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <UserContext>
        <RouterProvider router={routes}/>
      </UserContext>
      </QueryClientProvider>
    </div>
  );
}

export default App;
