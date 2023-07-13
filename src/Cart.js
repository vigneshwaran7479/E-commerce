let Cart=(props)=>{
    let x=props.data
    return(
        <div>
            {
            x.map((data)=>{
                return(
                    <div className="cartmain">
                    <div className="cartimg"><img src={data.image}/></div>
                    <div className="cardtext">
                    <div>title:{data.title}</div>
                    <div>Price:{data.price}</div>
                    <div>Description:{data.description}</div>
                    <div>Rating:{data.rating.rate} by{data.rating.count}</div>
                    </div>
                
                    <div>
                        <button id="btn2" onClick={()=>props.dec(data.id)}>-</button>
                        {data.Qty}
                        <button id="btn1" onClick={()=>props.inc(data.id)}>+</button>
                        <button id="btn3" onClick={()=>props.del(data.id)}>delete </button>
                       
                        
                    </div>
                </div>
                
               
                )
            })
}
        </div>
    )

}
export default Cart;