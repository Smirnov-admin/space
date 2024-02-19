import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListPost from './components/Page/Blog/ListPost'
import ViewPost from './components/Page/Blog/ViewPost/ViewPost'
import SearchPosts from './components/Page/SearchPosts/SearchPosts'
import SignIn from './components/Page/SignIn/SignIn'
import SignUp from './components/Page/SignUp/SignUp'
import Success from './components/Page/Success/Success'
import { useThemeContext } from './provider/ThemeProvider'

function App() {

  const [isSignIn, setIsSignIn] = useState (false);
  const {theme} = useThemeContext()
  

  return (
    <>
      <div className={theme}>
        <div className="App">
          <Header />

          <SignUp />

          {!isSignIn ? <SignIn setIsSignIn = {setIsSignIn}/> : <Success />}

          <ViewPost />

          <ListPost />

          <SearchPosts />

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
