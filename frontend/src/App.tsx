import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
