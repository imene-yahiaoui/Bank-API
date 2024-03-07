import Header from "./containers/header";
import Footer from "./containers/footer";
import RoutesPath from "./pages/helpers/routesPath";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
