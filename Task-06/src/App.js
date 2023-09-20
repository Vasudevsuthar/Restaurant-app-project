import { Fragment, useState } from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  const [cartIsShow, setcartIsShow] = useState(false);

  const showCartHandler = () => {
    setcartIsShow(true);
  };

  const hideCartHandler = () => {
    setcartIsShow(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
