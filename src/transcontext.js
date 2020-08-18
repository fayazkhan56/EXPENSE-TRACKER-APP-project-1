import React, {createContext, useReducer} from 'react';
import Transactionreducer from './transreducer';

const initialtransaction = [
    

]

export const transcontext = createContext(initialtransaction);
export const Transactionprovider = ({children}) =>{

    let [state, dispatch] = useReducer(Transactionreducer, initialtransaction);
     
     function addtransaction(transobj){
        dispatch({
            type:"ADD Transaction",
            payload:{ 
                      amount:transobj.amount,
                      desc:transobj.desc
                     }
        })

     }
     return (
           <transcontext.Provider value={{
               transaction: state,
               addtransaction
           }}>

            {children}

           </transcontext.Provider>
     )
 }