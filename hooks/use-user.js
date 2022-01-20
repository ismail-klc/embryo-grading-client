import { useEffect, useState } from "react";
import Router from "next/router";
import useSWRImmutable from "swr/immutable";
import axios from "axios";

const fetcher = url => axios.get(url, { withCredentials: true }).then(res => res.data)

export default function useUser({
    redirectTo = "",
    redirectIfFound = false,
} = {}) {

    const [loading, setLoading] = useState(true)
    const { data: user, mutate: mutateUser, error, isValidating } = useSWRImmutable(`${process.env.API}/doctors/me`, fetcher);
    const authNotRequired = ["/login", "/register"]

    useEffect(() => {

        if (isValidating) {
            return;
        }

        if (!redirectTo) {
            setLoading(false)
            return;
        }

        if (redirectTo && !user && !authNotRequired.includes(Router.pathname)) {
            Router.push(redirectTo).then(() => setLoading(false));
        } else setLoading(false)
    }, [user, redirectIfFound, redirectTo, error]);

    return { user, mutateUser, loading };
}