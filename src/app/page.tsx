"use client";

import {QuoteProvider} from "@/app/quote/QuoteContext";
import QuoteCard from "@/app/quote/QuoteCard";
import {createTheme, Stack, ThemeProvider} from "@mui/material";
import {Container} from "@mui/system";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#00ffff',
            main: '#00ffff',
            dark: '#00ffff'
        },
    },
});

export default function Home() {
    return (
        // ThemeProvider must be used in a client component ("use client";). Layouts must not me client components. FUN.
        <ThemeProvider theme={darkTheme}>
        <QuoteProvider>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{height: '100%', backgroundColor: 'background.paper'}}>
                <Container maxWidth="sm">
                    <QuoteCard></QuoteCard>
                </Container>
            </Stack>
        </QuoteProvider>
        </ThemeProvider>
    )
}
