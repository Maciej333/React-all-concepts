import { Outlet } from 'react-router-dom';
import './App.style.scss';
import AppNav from './core/components/AppNav/AppNav';
import AppRoutes from './core/routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes NavElemet={<AppNav />}></AppRoutes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
