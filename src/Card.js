let Card=(props)=>{
    let data= props.product
    return(
       
        <div className="maincon">
            <div className="proimg"><img src={data.image}/></div>
            <div className="cardtext">
            <div>title:{data.title}</div>
            <div>Price:{data.price}</div>
            <div>Description:{data.description}</div>
            <div>Rating:{data.rating.rate} by{data.rating.count}</div>
            </div>

            <button className="probtn" onClick={()=>props.fun(data)}>Add Card</button>
        </div>
    
    )
}
export default Card;