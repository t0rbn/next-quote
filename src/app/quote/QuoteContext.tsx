"use client";

import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {Quote} from "@/app/quote/Quote";

const QuoteContext = createContext({
    quote: undefined as Quote | undefined,
    refresh: () => {},
})

function QuoteProvider(props: PropsWithChildren) {
    const [quote, setQuote] = useState<Quote | undefined>(undefined)

    useEffect(() => {
        refresh().catch(() => {})
    }, [])

    const refresh = async () => {
        setQuote(undefined)

        const response = await fetch('https://api.quotable.io/random')
        const json = await response.json() as any;
        setQuote({
            author: json.author,
            text: json.content
        })
    }

    return <QuoteContext.Provider value={{quote, refresh}}>{props.children}</QuoteContext.Provider>
}


function useQuoteContext() {
    return useContext(QuoteContext)
}

export {
    useQuoteContext,
    QuoteProvider
}