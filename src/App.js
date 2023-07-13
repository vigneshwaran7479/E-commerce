import axios from "axios"
import { useEffect,useState } from "react"
import Card from "./Card"
import "./App.css"
import Nav from "./Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Cart"
import Footer from "./Footer"

let App=()=>{
  let [data,setData]=useState([])
  let [res,setRes]=useState([])
  let [Carts,setCart]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setData(res.data)
      setRes(res.data)
    })  

  },[]);
// let upd=(e)=>{
//   if(e.target.value==""){
//     setRes(data)
//   }
//   else{
//     let r=new RegExp(e.target.value)
//   setRes(data.filter((item)=>r.test(item.title))) 
//   }
// };
//   let filter=(e)=>{
//     if(e.target.value!=""){
//       let r=new RegExp(e.target.value)
//     }

//   };


let updtion=(info)=>{
  let obj=Carts.filter((item)=>item.id==info.id)
  if(obj.length==0){
    setCart([...Carts,{...info,"Qty":1}])
  }

};
let inc=(id)=>{
  let obj=Carts.map((item)=>{
    if(item.id==id){
      item.Qty=item.Qty+1
    }
    return item
  })
  setCart(obj)


};
let dec=(id)=>{
  let obj=Carts.map((item)=>{
    if(item.id==id && item.Qty>1){
      item.Qty=item.Qty-1
    }
    return item
  })
  setCart(obj)


};
let del=(id)=>{
  let obj=Carts.filter((item)=>item.id!=id)
  setCart(obj)

}

  return(
    <BrowserRouter>
     <Nav/>
     {/* <div>
       <input type="text" onChange={upd}/>
      <input  type="text" onChange={filter}/>

</div> */}
     <Routes>
    
 

    
      <Route path="/"  element={
    <div className="productmain">
      {
        res.map((item,index)=><Card product={item} fun={updtion} key={index}/>)
      }

    </div>
    }/>
   
   

    <Route path="/Cart" element={<Cart data={Carts} inc={inc} dec={dec} del={del}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App;