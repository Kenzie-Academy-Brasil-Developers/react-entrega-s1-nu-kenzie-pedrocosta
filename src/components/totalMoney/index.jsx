
import "./totalMoney.css"


let AppTotalMoney = ({listTransactions}) => {

const totalValue = listTransactions.reduce((cont, actual) =>{
    
    return cont + actual.value
},0)


return (
    <section className="totalValue">
        <div>
        <h3>Valor total:</h3>
        <h3 id="totalAmount">$ {totalValue}</h3>
        </div>
        
    </section>
)

}

export default AppTotalMoney