import { searchQuery } from "@/app/dashboard/queries";
import { SearchDataResponse } from "@/app/dashboard/types";
import { useQuery } from "@apollo/client";
import { ReactNode, createContext, useEffect, useState } from "react";

const initData: SearchDataResponse = {
    addresses: [],
    transactions: []
}

export const SearchContext = createContext({
    query: '',
    setQuery: (query: string) => {},
    data: initData,
    loading: false
})

export const SearchContextProvider = ({ children } : { children: ReactNode }) => {
    const [query, setQuery] = useState("");
    const [finalQuery, setFinalQuery] = useState("");
  
    useEffect(() => {
      const timeout = setTimeout(() => setFinalQuery(query), 300);
      return () => clearTimeout(timeout);
    }, [query]);
    
    const { data, loading } = useQuery(searchQuery, {
      variables: {
        query: finalQuery,
      },
    });

    return (
        <SearchContext.Provider value={
           {
            query,
            setQuery,
            data,
            loading
           }
        }>
            { children }
        </SearchContext.Provider>
    )
  
}