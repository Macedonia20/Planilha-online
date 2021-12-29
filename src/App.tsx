import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";



Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
     setIsNewTrasactionModalOpen(true);
 }

  function handleCloseNewTransactionModal() {
    setIsNewTrasactionModalOpen(false);
}

  return (
    <TransactionsProvider>
  
     <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal}/> 

     
     <Dashboard />
     
     <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
       />

       <GlobalStyle />
       </TransactionsProvider>
  );
}

