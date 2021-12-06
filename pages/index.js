import CardBarChart from "../components/Cards/CardBarChart";
import CardLineChart from "../components/Cards/CardLineChart";
import CardPageVisits from "../components/Cards/CardPageVisits";
import CardProfile from "../components/Cards/CardProfile";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic";
import CardStats from "../components/Cards/CardStats";

import Admin from "../components/Layouts/Admin";

export default function Home(props) {

  return (
    <Admin title="Anasayfa">
      <CardBarChart />
      <CardLineChart />
      <CardPageVisits />
      <CardProfile />
      <CardSocialTraffic />
      <CardStats />
    </Admin>
  );
}