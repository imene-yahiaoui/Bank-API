/**
 * App Component
 *
 * The main component of the application.
 *
 * @returns {JSX.Element} - Rendered component.
 */
import Header from "./containers/header";
import Footer from "./containers/footer";
import RoutesPath from "./helpers/routesPath";

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
