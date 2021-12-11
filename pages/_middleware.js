import { NextResponse } from 'next/server'

async function authMiddleware(req, ev) {
    // const token = req.cookies.jwt;

    const authUrls = ["/login", "/register"]
    let data;

    try {
        data = await fetch(`${process.env.API}/doctors/me`,
            {
                credentials: true, headers: req.headers
            })
        if (data.status === 200 && authUrls.includes(req.url)) {
            return NextResponse.redirect('/')
        }

        if (data.status === 401 && !authUrls.includes(req.url)) {
            return NextResponse.redirect('/login');
        }

        return NextResponse.next()
    } catch (error) {
    }

    return new Response('Server not working', {
        status: 401,
    })

}

export default authMiddleware