import Header from "./componants/header/headerComponant";
import Footer from "./componants/footer/footerComponant";
import Summary from "./componants/summary/summaryComponant";
import Developer from "./componants/developer/developerComponent";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Developer />
      <Footer />
    </div>
  );
}

export default App;
