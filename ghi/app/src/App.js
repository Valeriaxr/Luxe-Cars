import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from "./CustomerForm";
import SalesForm from "./SalesForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers/new/" element={<CustomerForm />} />
          <Route path="sales_person_list/new/" element={<SalesForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
