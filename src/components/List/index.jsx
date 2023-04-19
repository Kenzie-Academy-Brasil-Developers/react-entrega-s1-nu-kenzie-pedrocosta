import "./List.css";

import { useState } from "react";
let AppEntriesMenu = ({ listTransactions , setListTransactions }) => {

  const [filteredItens, setFilteredItens] = useState([]);





const deleteEntry = (obj) => {
const newEntries = listTransactions.filter(element => element !== obj)
setListTransactions(newEntries)
}



  return (
    <section>
      <div className="transactionsArea">
        <h3>Resumo financeiro</h3>
        <div className="transactionsArea__filterButtons">
          <button  onClick={() =>  setFilteredItens([])}   id="allTransactions">Todos</button>
          <button onClick={() =>  setFilteredItens(listTransactions.filter(element => element.type === "entrada")) }>Entradas</button>
          <button onClick={() =>  setFilteredItens(listTransactions.filter(element => element.type === "saída")) }>Despesas</button>
        </div>
      </div>

      <div className="transactionsArea">
        {listTransactions.length === 0 ? (
          <h2>Você ainda não possui nenhum lançamento</h2>
        ) : null}



        <ul>
          { filteredItens.length === 0 ?    (listTransactions.map((element, index) =>
            element.type === "saída" ? (
              <li key={index}>
                <div className="grayCard"></div>

                <div className="transactionData">
                  <div className="transactionDescription">
                    <h3>{element.description}</h3>
                    <span>{element.type}</span>
                  </div>

                  <span>R$ {element.value}</span>
                  <button onClick={() => deleteEntry(element)}>X</button>
                </div>
              </li>
            ) : (
              <li key={index}>
                <div className="greenCard"></div>
                <div className="transactionData">
                  <div className="transactionDescription">
                    <h3>{element.description}</h3>
                    <span>{element.type}</span>
                  </div>
                  <span>R$ {element.value}</span>
                  <button onClick={() => deleteEntry(element)}>X</button>
                </div>
              </li>
            )
          )): (filteredItens.map((element, index) =>
          element.type === "saída" ? (
            <li key={index}>
              <div className="grayCard"></div>

              <div className="transactionData">
                <div className="transactionDescription">
                  <h3>{element.description}</h3>
                  <span>{element.type}</span>
                </div>

                <span>R$ {element.value}</span>
                <button onClick={() => deleteEntry(element)}>X</button>
              </div>
            </li>
          ) : (
            <li key={index}>
              <div className="greenCard"></div>
              <div className="transactionData">
                <div className="transactionDescription">
                  <h3>{element.description}</h3>
                  <span>{element.type}</span>
                </div>
                <span>R$ {element.value}</span>
                <button onClick={() => deleteEntry(element)}>X</button>
              </div>
            </li>
          )
        ))}
        </ul>
      </div>
    </section>
  );
};

export default AppEntriesMenu;
