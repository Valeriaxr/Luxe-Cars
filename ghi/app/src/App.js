import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechForm from './Forms/TechForm';
import ApptList from './Lists/ApptList';
import ApptForm from './Forms/ApptForm';
import ServiceHistory from './Lists/ServiceHistory';
import CreateManuForm from './Forms/ManuForm';
import ModelList from './Lists/ModelList';
import ModelForm from './Forms/ModelForm';
// import ManuList from './Lists/ManuList';
import AutoForm from './Forms/AutoForm';
import AutoList from './Lists/AutoList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />


          <Route path="models/">
          <Route path="lists/" element={<ModelList />} />
          <Route path="create/" element={<ModelForm />} />
          </Route>


          <Route path="manufacturers/">
          {/* <Route path="list/" element={<ManuList />} /> */}
          <Route path="create/" element={<CreateManuForm />} />
          </Route>

          <Route path="automobiles/">
          <Route path="lists/" element={<AutoList />} />
          <Route path="create/" element={<AutoForm />} />
          </Route>




          <Route path="technician/">
          <Route path="create/" element={<TechForm />} />
          </Route>


          <Route path="appointment/">
          <Route path="list/" element={<ApptList />} />
          <Route path="create/" element={<ApptForm />} />
          <Route path="history/" element={<ServiceHistory/>} />
          </Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
