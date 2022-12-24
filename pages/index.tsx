import React from "react"

import type { NextPage } from "next"

import MainLayout from "../common/components/layout/MainLayout"

const Home: NextPage = () => {
    return (
        <MainLayout withFooter={false} animateDuration={2}>
            <div className="main-page">

            </div>
        </MainLayout>
    )
}

export default Home
