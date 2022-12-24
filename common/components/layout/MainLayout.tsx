import React, { FC } from "react"

import { motion } from "framer-motion"

import Footer from "../footer/Footer"
import Header from "../header/Header"
import NextSeo from "./NextSeo"

type Props = {
    children: React.ReactElement,
    pageDescription?: string,
    pageTitle?: string,
    withFooter?: boolean,
    withHeader?: boolean,
    animateDuration?: number
    animateExitDuration?: number
}

const MainLayout: FC<Props> = (props) => {
    const {
        children,
        pageDescription,
        pageTitle,
        withFooter = true,
        withHeader = true,
        animateDuration = 0.4,
        animateExitDuration = 0.4,
    } = props

    return (
        <>
            <NextSeo
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            />

            <div className="main-container">
                {withHeader ? <Header /> : null}

                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: animateExitDuration } }}
                    transition={{
                        type: "tween",
                        duration: animateDuration
                    }}
                >
                    {children}
                </motion.div>

                {withFooter ? <Footer /> : null}
            </div>
        </>
    )
}

export default MainLayout
