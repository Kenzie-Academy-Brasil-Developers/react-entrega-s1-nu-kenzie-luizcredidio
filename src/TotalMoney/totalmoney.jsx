import './totalmoney.css'

export default function TotalMoney({ listTransactions, saldo }) {
  return (
    <>
      {listTransactions.length > 0 ? (
        <div className="containerValorTotal">
          <div className="tituloValorTotal">
            <h2 className='valorTotal'>Valor Total:</h2>
            <span className='saldo'>{saldo + 0}</span>
          </div>
            <p className='explicacao'>O valor se refere ao saldo</p>
        </div>
      ) : (
        <div className="containerValorTotal">
          <div className="tituloValorTotal">
            <h2 className='valorTotal'>Valor Total:</h2>
            <span className='saldo'>$0</span>
          </div>
            <p className='explicacao'>O valor se refere ao saldo</p>
        </div>
      )}
    </>
  );
}
