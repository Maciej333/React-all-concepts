import { Outlet } from 'react-router-dom';
import './App.style.scss';
import AppNav from './core/components/AppNav/AppNav';
import { withAuth } from './core/hoc/withAuth';
import AppRoutes from './core/routes/AppRoutes';

function AppComponent() {
  return (
    <div className="App">
      <AppRoutes NavElemet={<AppNav />}></AppRoutes>
      <Outlet></Outlet>
    </div>
  );
}

const App = withAuth(AppComponent);
export default App;
