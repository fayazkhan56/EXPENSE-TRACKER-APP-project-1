import React, {useContext, useState} from 'react';
import {transcontext} from './transcontext';

function Child() {
  let {transaction, addtransaction} = useContext(transcontext);
  let [newdecs, setdesc]= useState("");
  let [newamount, setamount]= useState(0);
  const handeladdition=(event)=>{

      event.preventDefault();
      addtransaction(
        {
          amount: Number(newamount),
          desc: newdecs
        }
      )

  }
     const getincome=()=>{
       let income=0
       for(var i=0; i< transaction.length; i++){
         if (transaction[i].amount > 0)
            income += transaction[i].amount;
       }
       return income; 
     }

     const getexpense=()=>{
      let expense=0
      for(var i=0; i<transaction.length; i++){
        if (transaction[i].amount < 0)
           expense += transaction[i].amount;
      }
      return expense;
    }
  return (
    <div className="container">
      <h1 className="text-center">Expense tracker App</h1>

      <h3>Your balance <br/> {getincome()+getexpense()}</h3>
      <div className="expense-container">
      <h3>income <br/> {getincome()} </h3>
       <h3>expense <br/> {getexpense()}</h3>
      </div>
     <h3>History</h3>
     <hr/>
     <ul className="transaction-list">
        {transaction.map((transobj, ind) => {
             
             return(
              <li key={ind}>
              <span>{transobj.desc}</span>
              <span>{transobj.amount}</span>
     
              </li>
              
             );
        })}
       
              
     </ul>
     <h3>add new transaction</h3>
     <hr/>
     <form className="transaction-form" onSubmit={handeladdition}>
         <label>
             Enter Text <br/>
             <input type="text" onChange={(ev)=> setdesc(ev.target.value)} required/>
         </label>
         <br/>
         <label>
             Enter amount <br/>
             <input type="number" onChange={(ev)=> setamount(ev.target.value)} required/>
         </label>
         <br/>
         <input type="submit" value="Add transaction" />
     </form>
    </div>
  );
}

export default Child;
