import { NextResponse } from 'next/server'
import jwt from '@tsndr/cloudflare-worker-jwt'

async function authMiddleware(req, res) {
    const token = req.cookies.jwt || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    const authUrls = ["/login", "/register"]
    const secret = process.env.SECRET || "a"

    let isValid = await jwt.verify(token, secret)

    console.log(isValid, token);
    
    if(isValid && authUrls.includes(req.url))
        return NextResponse.redirect("/")

    if(isValid){
        console.log("authenticated");
        return NextResponse.next()
    }

    if (!isValid && !authUrls.includes(req.url))
        return NextResponse.redirect("/login")

    return NextResponse.next();

    // let data;

    // try {
    //     data = await fetch(`${process.env.API}/doctors/me`,
    //         {
    //             credentials: true, headers: req.headers
    //         })

    //     if (data.status === 200 && authUrls.includes(req.url)) {
    //         return NextResponse.redirect('/')
    //     }

    //     if (data.status === 401 && !authUrls.includes(req.url)) {
    //         return NextResponse.redirect('/login');
    //     }

    //     return NextResponse.next()
    // } catch (error) {
    //     console.log(error.message);
    // }

    // return new Response('Server not working', {
    //     status: 401,
    // })

}

export default authMiddleware