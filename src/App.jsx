import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Admission from "./components/Admission";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    gender: "",
    dateOfBirth: "",
    postalAddress: "",
    domacileDistrict: "",
    email: "",
    contactNo: "",
    photo: "",
    marksheetPhoto: "",
    cnicPhoto: "",
    domacilePhoto: ""

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(formData);

  }

  return (
    <><Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/admission" element={<Admission formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        </Routes>
      

      <Footer />
      </Router>
    </>
  );
}

export default App;
