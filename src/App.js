import { ExchangeRatesProvider } from "./context/ExchangeContext";
import ExchangePage from "./pages/ExchangePage";

function App() {
  return (
    <ExchangeRatesProvider>
      <div className="App">
        <title>Uphold - challenge</title>
        <meta name="description" content="Julio`s assessment challenge" />
        <ExchangePage />
      </div>
    </ExchangeRatesProvider>
  );
}

export default App;
