import {Route,Routes,BrowserRouter} from "react-router-dom"
import LandingPage from './components/landing_page';
import PostView from './components/post_view';
import FormPage from './components/form-post';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<LandingPage/>}></Route>
      <Route  path="/postview" element={<PostView/>}></Route>
      <Route path="/form" element={<FormPage/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

