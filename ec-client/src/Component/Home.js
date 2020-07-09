import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";
import HomeDisplay from "./HomeDisplay";

// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, Dropdown, MenuItem, Container } from "react-bootstrap";

function Home({ userData, userstatus }) {
  const [yogaMatState, setYogaMatState] = useState("---Select Yogamats---");
  const [yogaEquipState, setYogaEquipState] = useState("---Select Equipments---");

  const [yogaClothsState, setYogaClothsState] = useState("---Select Cloths---");
  const [accessoriesState, setAccessoriesState] = useState("---Select Accessories---");
  const [showPage, setShowPage] = useState(undefined);

  const [homePage, setHomepage] = useState(undefined);

  function reset() {
    setYogaMatState("---Select Yogamats---");
    setAccessoriesState("---Select Accessories---");
    setYogaClothsState("---Select Cloths---");
    setYogaEquipState("---Select Equipments---");
  }

  function yogaMatSelected(e) {
    // e.preventDefault(); uasing this will prenent to go to other links

    reset();
    setYogaMatState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function equipmentSelected(e) {
    reset();
    setYogaEquipState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function accessoriesselected(e) {
    reset();
    setAccessoriesState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function Clothsselected(e) {
    reset();
    setYogaClothsState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }

  function tabsearch(selection) {


    // const headers = new Headers();
    // //  const userselection=
    // const datasent = { selectitem: selection };

    // let options = {
    //   method: "POST",
    //   headers,
    //   crendtials: "include",
    //   body: JSON.stringify(datasent),
    // }; let url = `http://localhost:5000/api/#/${selection}`;

    let url = `http://localhost:5000/api/#/${selection}`;
    let request = new Request(url);

    (async () => {
      let tabsearchback = await fetch(request).then((res) => {
        console.log(res);
      });

      // setHomepage(res.json());
      setShowPage(1);
    })();
  }
  return (
    // TODO: <React.Fragment> its a wrapper and then we dont need to wrap around divs...
    //FIXME:

    <React.Fragment>
      <div className="homestyle">
        <h3>
          <hr />
          <ul className="homebarstyle">
            <li>
              {/* <Button variant="primary">Primary</Button> */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {yogaMatState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* // whe delete the # it will not dispaly anything? why */}
                  {/* // we dont use yogaMatSelected() here as it will fire right away and we
                  dont want that we want when it get executed by onclick event */}
                  <Dropdown.Item href="#/Eco-YogaMats" onClick={yogaMatSelected}>
                    Eco-YogaMats
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Travel-YogaMats" onClick={yogaMatSelected}>
                    Travel-YogaMats
                  </Dropdown.Item>
                  <Dropdown.Item href="#/YogaMat-Towel" onClick={yogaMatSelected}>
                    YogaMat-Towel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {yogaEquipState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/yoga-Block&Bricks" onClick={equipmentSelected}>
                    Yoga-Block&Bricks
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Chairs&Feetup" onClick={equipmentSelected}>
                    Yoga-Chairs&Feetup
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Ropes&swing" onClick={equipmentSelected}>
                    Yoga-Ropes&swing
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Belts" onClick={equipmentSelected}>
                    Yoga-Belts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {yogaClothsState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/Bottoms" onClick={Clothsselected}>
                    Bottoms
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Tops" onClick={Clothsselected}>
                    Tops
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Socks" onClick={Clothsselected}>
                    Socks
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {accessoriesState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/Travelsize-SkinCare"
                    onClick={accessoriesselected}
                  >
                    Travelsize-SkinCare
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Bath&Body" onClick={accessoriesselected}>
                    Bath&Body
                  </Dropdown.Item>
                  <Dropdown.Item href="#/WaterBottles" onClick={accessoriesselected}>
                    WaterBottles
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <hr />
        </h3>
      </div>
      <Container>
        {showPage ? <HomeDisplay props={homePage} /> : null}
        {`The user is looged in ${userstatus}and the email is ${userData}`}
      </Container>
    </React.Fragment>
  );
}

export default Home;
