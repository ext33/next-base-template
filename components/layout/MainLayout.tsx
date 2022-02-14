import Head from "next/head"
import React, { FC } from "react"

import Footer from "../footer/Footer"
import Header from "../header/Header"


type Props = {
    children: React.ReactElement,
    pageDescription?: string,
    pageTitle?: string,
    withFooter?: boolean,
    withHeader?: boolean
}

const MainLayout: FC<Props> = props => {

    const {
        children,
        pageDescription,
        pageTitle,
        withFooter = true,
        withHeader = true
    } = props

    return (
        <>
            <Head>
                <title>
                    {pageTitle ? `App / ${pageTitle}` : "App"}
                </title>

                <meta
                    content="App"
                    name="apple-mobile-web-app-title"
                />

                <meta
                    content="App"
                    name="application-name"
                />

                <meta
                    content="App"
                    lang="en"
                    name="application-name"
                />

                <meta
                    content={pageDescription ? pageDescription : "App - description."}
                    name="description"
                />
            </Head>

            <div className="main-container">
                {withHeader ? <Header /> : null}

                {children}

                {withFooter ? <Footer /> : null}
            </div>
        </>
    )
}

export default MainLayout
