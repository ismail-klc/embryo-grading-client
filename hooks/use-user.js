import { useEffect, useState } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url, { withCredentials: true }).then(res => res.data)

export default function useUser({
    redirectTo = "",
    redirectIfFound = false,
} = {}) {

    const [loading, setLoading] = useState(true)
    const { data: user, mutate: mutateUser, error, isValidating } = useSWR(`${process.env.API}/doctors/me`, fetcher);

    useEffect(() => {
        if (isValidating) {
            return;
        }

        if (!redirectTo) {
            setLoading(false)
            return;
        }

        if (redirectTo && !user) {
            Router.push(redirectTo).then(() => setLoading(false));
        } else setLoading(false)
    }, [user, redirectIfFound, redirectTo, error]);

    return { user, mutateUser, loading };
}