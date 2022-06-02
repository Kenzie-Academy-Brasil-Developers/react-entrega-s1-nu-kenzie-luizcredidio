import './list.css'


export default function List({listTransactions, setListTransactions, Card, list}){

   return (
       <>
       {
        list.length > 0 ? 
           (<div className='list'>
             
            {
                list.map((transaction, index) => <Card transaction={transaction} listTransactions={listTransactions} setListTransactions={setListTransactions} key={index} />)
            }
            </div>
            ) : (
                <div className='list'>
                    <h2 className='noTransactions'>Você ainda não possui nenhum lançamento</h2>
                    <div className="fakeDiv">
                        <div className="fakeOne"></div>
                        <div className="fakeTwo"></div>
                    </div>
                    <div className="fakeDiv">
                        <div className="fakeOne"></div>
                        <div className="fakeTwo"></div>
                    </div>
                    <div className="fakeDiv">
                        <div className="fakeOne"></div>
                        <div className="fakeTwo"></div>
                    </div>
                </div>
            
            )
       }
       </>
   );
}