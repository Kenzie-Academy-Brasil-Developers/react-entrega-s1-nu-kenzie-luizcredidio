import { useEffect, useState } from "react";
import "./App.css";
import Form from "./form/form";
import TotalMoney from "./TotalMoney/totalmoney";
import NuKenzie from "./NuKenzie.png";
import FiltroSection from "./FiltroSection/filtroSection";
import List from "./List/list";
import Card from "./Card/card";
function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [list, setList] = useState([])
  const [saldo, setSaldo] = useState(0)
     
  useEffect(() => {
    setList(listTransactions)
  }, [listTransactions])

  useEffect(() => {
    calcularSaldo()
  }, [listTransactions])

  function calcularSaldo(){
    let total = 0
    listTransactions.forEach((transaction) => {
      if(typeof transaction.value !== 'number'){return}
      else  if(transaction.type === 'Entrada'){total += transaction.value}
      else{total -= transaction.value}
    })
    setSaldo(total)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="divTitulo">
          <figure>
            <img src={NuKenzie} alt="NuKenzie"></img>
          </figure>
        </div>
        <div className="divBtn">
          <button className="btnInicio">Inicio</button>
        </div>
      </header>
      <main>
        <section>
          <div className="form">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              calcularSaldo={calcularSaldo}
              setList={setList}
            />
            {list.length > 0? (<TotalMoney listTransactions={listTransactions} saldo={saldo}/>):(
              console.log('Sem transferências')
            )
            }
          </div>
          <div className="listTransactions">
            <FiltroSection setList={setList} listTransactions={listTransactions}/>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions} list={list} Card={Card}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
