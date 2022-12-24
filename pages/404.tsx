import React from "react"

import { NextPage } from "next"
import Link from "next/link"

import MainLayout from "../common/components/layout/MainLayout"

const Page404: NextPage = () => {
    return (
        <MainLayout
            pageTitle={"Page not found"}
            withHeader={false}
            withFooter={false}
        >
            <div className="page404">

                <p>
                    404 | Page not found
                </p>
                <Link href="/">
                    <button
                        className="button page404__button"
                    >
                        To Home
                    </button>
                </Link>

            </div>
        </MainLayout>
    )
}

export default Page404
