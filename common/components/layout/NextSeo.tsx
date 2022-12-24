import React, { FC } from "react"

import Head from "next/head"

interface INextSeoProps {
    pageTitle?: string
    pageDescription?: string
}

const NextSeo: FC<INextSeoProps> = ({ pageTitle, pageDescription }) => {

    return (
        <Head>
            <title>
                {pageTitle ? pageTitle : "App"}
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
                content={pageDescription ? pageDescription : "App desc"}
                name="description"
            />
        </Head>
    )
}

export default NextSeo
