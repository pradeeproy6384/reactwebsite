import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Master from './components/Master';
import Floor from './components/Floor';
import Location from './components/Location';

function App() {
  return (
    <>
   {/* ======  Start Popup ============== */}
  <div className="modal pr-pop fade" id="query"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        <div className="modal-body">
          <form  method="POST" name="queryform">
           <p className="pop-msg text-center" >
             Register here and Avail the <span className="text-danger">Best Offers!!</span>
            </p>
            <div className="form-group">
              <input id="first_name" className="form-control tpfrm"  name="first_name" size="20" type="text" placeholder="Name"  /> </div>
            <div className="form-group">
              <input id="email" className="form-control tpfrm"  name="email" size="20" type="text" placeholder="Email"  /> </div>
            <div className="form-group">
              <input id="phone" className="form-control tpfrm"  name="phone" size="20" type="text" placeholder="Mobile Number"  /> </div>
             <div className="form-group">
            <textarea name="description" placeholder="Description" className="form-control tpfrm"></textarea>
          </div>
            <div className="form-group">
              <div className="g-recaptcha" data-sitekey="6LdJHtkUAAAAAJD4ddRJ_mMFpt93gChBYLY02flM"></div>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button> 
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    {/* ======  End Popup ============== */}

    <Menu />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/master" element={<Master />} />
      <Route path="/floor" element={<Floor />} />
      <Route path="/location" element={<Location />} />
   </Routes>
   
    </>
  );
}

export default App;
