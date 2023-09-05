'use client';

import {useQuoteContext} from "@/app/quote/QuoteContext";
import React, {useEffect, useState} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CircularProgress, Stack, Typography} from "@mui/material";

export default function QuoteCard() {
    const context = useQuoteContext();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(!context.quote)
    }, [context.quote])

    return (
        <Card variant="elevation">
            <CardContent>
                {isLoading
                    ? <Stack direction="row" justifyContent="center"><CircularProgress /></Stack>
                    : (<>
                        <Typography variant="h5" align="center">{context.quote?.text}</Typography>
                        <Typography variant="subtitle2" align="right">- {context.quote?.author}</Typography>
                    </>)
                }
            </CardContent>
                <CardActions>
                    <Button variant="text" disabled={isLoading} onClick={() => context.refresh()}>New Quote</Button>
                </CardActions>
        </Card>

    )
}