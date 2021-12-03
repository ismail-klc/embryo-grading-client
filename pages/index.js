import { useEffect } from "react";
import CardBarChart from "../components/Cards/CardBarChart";
import CardLineChart from "../components/Cards/CardLineChart";
import CardPageVisits from "../components/Cards/CardPageVisits";
import CardProfile from "../components/Cards/CardProfile";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic";
import CardStats from "../components/Cards/CardStats";

import Admin from "../components/Layouts/Admin";

export default function Home(props) {

  useEffect(() => {
    console.log(props);
    var tokens = props.cookies.jwt.split(".");
    console.log(JSON.parse(atob(tokens[1])).id);
  }, [])


  return (
    <Admin>
      <CardBarChart />
      <CardLineChart />
      <CardPageVisits />
      <CardProfile />
      <CardSocialTraffic />
      <CardStats />
    </Admin>
  );
}



export const getServerSideProps = async (ctx) => {
  const { req } = ctx
  const { cookies } = req

  return { props: { cookies } }
}