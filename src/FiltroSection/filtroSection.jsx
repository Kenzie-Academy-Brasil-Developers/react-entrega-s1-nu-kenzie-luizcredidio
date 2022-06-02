import './filtroSection.css'
export default function FiltroSection({listTransactions, setList}){

    function filterEntry(){
      const entradas = listTransactions.filter((transacao) => transacao.type === 'Entrada')
        setList(entradas)
    }

    function filterOut(){
        const saida = listTransactions.filter((transacao) => transacao.type === 'Saída')
        setList(saida)
      }

    return(
        <div className="filtroSection">
            <div className='divH2'>
            <h2 id="h2">Resumo financeiro</h2>
            </div>
            
            <div className="btnSec">
                <button className="filtro" onClick={() => setList(listTransactions)}>Todos</button>
                <button className="filtro" onClick={filterEntry}>Entradas</button>
                <button className="filtro" onClick={filterOut}>Despesas</button>
            </div>
        </div>
    )
}