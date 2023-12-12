
import './App.css'
import GoogleFont from 'react-google-fonts';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePostPage';
import PostPage from './pages/PostPage';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post' element={<CreatePostPage />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
    
  )
}

export default App
