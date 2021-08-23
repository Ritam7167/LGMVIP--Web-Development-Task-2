import React, {useState} from 'react';
import './App.css'; //Inject Styles
import Cards from "./My_Components/cards";
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () => {
      try {
          setButtonClick(true);

          fetch('https://reqres.in/api/users?page=1')
              .then((response) => response.json())
              .then((json) => {
                  setCardData(json.data);
              })

              setInterval(() => {
                  setLoading(true);
              }, 1500);

      }
      catch(e){
          console.log(e)
      }
  };

  return (
    <>
    {/* NavBar Section */}
    <nav className="navbar_section">
        <div className="nav-part">
            <h1 id="nav-head">Welcome To LetsGrowMore</h1>
            </div>
        <div className="Nav-1">
            <button className="button" type="button" onClick={btnClick}>GET USERS</button>
        </div>
    </nav>

    <div className='container'>
        <div className='row justify-content-center'>

            {buttonClick ?(loading ? (<Cards cardData={cardData} />) : <ReactBootStrap.Spinner animation="border" variant="danger"/> )
                : (<div className='container-part'>
                    
                    </div>)
            }
        </div>
    </div>
    </>
);

}

export default App;
