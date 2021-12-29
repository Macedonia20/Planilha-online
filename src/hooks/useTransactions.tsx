import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';
// importei de dentro do react a função createContext//

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionIpunt = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionIpunt) => Promise <void>;
}


export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

   async function createTransaction(TransactionIpunt: TransactionIpunt) {
    const response =  await   api.post('/transactions',{
     ...TransactionIpunt,
     createdAt: new Date(),
    })
    const { transaction } = response.data;

    setTransactions([
        ...transactions,
        transaction,
    ]);
    }
    
  
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}

        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}