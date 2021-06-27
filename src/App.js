import './App.css';
import DashboardCodemi from "./components/dasboardCodemi";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import {Provider} from "react-redux";
import store from "./config/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Header />
          <DashboardCodemi />
          <Content />
          {/*<Footer />*/}
      </Provider>
    </div>
  );
}

export default App;
