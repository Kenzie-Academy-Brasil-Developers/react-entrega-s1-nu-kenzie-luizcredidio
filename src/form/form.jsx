import './form.css'
export default function Form({ listTransactions, setListTransactions, calcularSaldo, setList }) {
  const transaction = {};
  function setTransactions() {
    setListTransactions([...listTransactions, transaction]);
    calcularSaldo()
  }
  return (
    <div className='containerOne'>
      
        <label className='descricao'>Descrição</label>
        <input
        className='inputText'
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) =>
            (transaction.description = event.currentTarget.value)
          }
        />
        <h4 className='ex'>Ex: Compra de roupas</h4>
      <div className='boxValor'>
          <div className='valueNumber'>
            <h2>Valor</h2>
            <input
              placeholder="1               R$"
              type="number"
              onChange={(event) =>
                (transaction.value = +event.currentTarget.value)
              }
            />
          </div>
          <div className='valueType'>
          <h2>Tipo de valor</h2>
          <select
            onChange={(event) => (transaction.type = event.currentTarget.value)}
          >
            <option value='Escolha'>Escolha aqui</option>
            <option value="Saída">Saída</option>
            <option value="Entrada">Entrada</option>
          </select>
        </div>
      </div>
        <button className='inserirValor' onClick={() => {
          setTransactions()
          setList(listTransactions)}}>Inserir valor</button>
    </div>
  );
}
