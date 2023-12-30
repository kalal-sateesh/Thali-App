import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AppHeader from './components/AppHeader/AppHeader'
import PageRoutes from './routes/PageRoutes'
import AuthProvider from './contexts/AuthContext';
import AppFooter from './components/AppFooter/AppFooter';

export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <AppHeader></AppHeader>
        <main>
          <PageRoutes></PageRoutes>
        </main>
        <AppFooter></AppFooter>
      </AuthProvider>
    </div>
  )
}
