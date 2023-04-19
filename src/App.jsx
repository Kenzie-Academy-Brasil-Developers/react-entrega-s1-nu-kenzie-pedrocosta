import "./App.css";
import AppHeader from "./components/header";
import AppFormArea from "./components/form";
import AppEntriesMenu from "./components/List";
import { useState } from "react";
import AppTotalMoney from "./components/totalMoney";


function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [logIn, setLogIn] = useState(false);
  return (
    <>
      {logIn ? (
        <div id="dashboard">
          <AppHeader logIn={logIn} setLogIn={setLogIn} />
          <main>
            <div>
              <AppFormArea
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <AppTotalMoney listTransactions={listTransactions} />
            </div>

            <AppEntriesMenu
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </main>
        </div>
      ) : (
        <div id="homePage">
          <div id="homeContent">
            <section id="homeDescription">
              <h2>
                <span>Nu </span>Kenzie
              </h2>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rápida e segura</p>
              <button onClick={ () => setLogIn(true)}>Iniciar</button>
            </section>
            <section id="homeImage">
            </section>
          </div>
        </div>
      )}

      
    </>
  );
}

export default App;
