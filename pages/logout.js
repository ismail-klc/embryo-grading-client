import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect } from 'react'
import useRequest from '../hooks/use-request'

function Logout() {
    const { doRequest } = useRequest({
        url: `${process.env.API}/doctors/signout`,
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/login')
    })

    useEffect(() => {
        doRequest();
    }, [])

    return (
        <>
            <Head>
                <title>Signing out</title>
            </Head>
            <div className="container-fluid text-center mt-5">
                Çıkış yapılıyor ...
            </div>
        </>
    )
}

export default Logout