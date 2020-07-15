let initialvalue = () => {
  return window.localStorage.getItem("user-basket");
};
function App() {
  const [basketItems, setBasketItems] = useState(initialvalue);

  const addBasketitems = (product, quantity) => {
    setBasketItems((prevItems) => [...prevItems, { ...product, quantity }]);

    // let w=window.localStorage.getItem("user-basket");
    window.localStorage.setItem("user-basket", JSON.stringify([...prevItems, { ...product, quantity }])); // it works fine but return single object only when new object recieved then it just replace with existing one rather then add another object in an array
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Nav userinfo={userData} userstatus={siginalready} />
        </header>

        <div className="main">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} addBasketitems={addBasketitems} />}
            />

            <Route
              path="/basket"
              exact
              render={(props) => (
                <Basket
                  {...props}
                  userData={userData}
                  userstatus={siginalready}
                  basketItems={basketItems}
                />
              )}
            />
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
