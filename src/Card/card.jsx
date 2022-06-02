import trash from "../img/trash.png";
import './card.css'


export default function Card({transaction, listTransactions, setListTransactions}){

    function handleTransactions(index) {
        const newList = [...listTransactions]
        newList.splice(index, 1)
        setListTransactions(newList);
      }

    return(
        <>
        {
            transaction.type === 'Entrada'?(
                <div className="card" id="entrada" >
                    <div className="header">
                        <h1 className="titulo">{transaction.description}</h1>
                        <p className="valor">R${transaction.value}</p>
                        <button className="deletBtn" onClick={() => handleTransactions()}>
                            <img src={trash} alt=''></img>
                        </button>
                    </div>
                    <h3 className="type">{transaction.type}</h3>
                </div>
            ) : (
                <div className="card" id="saida">
                    <div className="header">
                        <h1 className="titulo">{transaction.description}</h1>
                        <p className="valor">R${transaction.value}</p>
                        <button className="deletBtn" onClick={() => handleTransactions()}>
                            <img src={trash} alt=''></img>
                        </button>
                    </div>
                        <h3 className="type">{transaction.type}</h3>
                </div>
            )
            }
        </>
    )
}