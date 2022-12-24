import React from "react"

import "../styles/root.scss"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

const AppWrapper = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    return (
        <AnimatePresence
            exitBeforeEnter={true}
            initial={true}
            mode="wait"
            onExitComplete={() => typeof window !== "undefined" ? window.scrollTo(0, 0) : null}
        >
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    )
}

export default AppWrapper
