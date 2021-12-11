import { NextResponse } from 'next/server'

async function authMiddleware(req, ev) {
    // const data = await fetch(`${process.env.API}/doctors/me`,
    //     {
    //         credentials: true, headers: req.headers
    //     })
    // const authUrls = ["/login", "/register"]
    // if (data.status === 200 && authUrls.includes(req.url)) {
    //     return NextResponse.redirect('/')
    // }

    // if (data.status === 401 && !authUrls.includes(req.url)) {
    //     return NextResponse.redirect('/login');
    // }

    return NextResponse.next()
}

export default authMiddleware