import CardProfile from "../components/Cards/CardProfile";
import CardStats from "../components/Cards/CardStats";
import useSWRImmutable from 'swr/immutable';
import Admin from "../components/Layouts/Admin";

export default function Home(props) {
  const { data, error } = useSWRImmutable(`${process.env.API}/doctors/stats`)
  
  if(!data) return null

  return (
    <Admin title="Anasayfa">
      <CardProfile />
      <div className="flex justify-around">
        <CardStats title={"Doktor sayısı"} count={data.doctorCount}/>
        <CardStats title={"Hasta sayısı"} count={data.patientCount}/>
        <CardStats title={"Kayıt sayısı"} count={data.recordCount}/>
      </div>
    </Admin>
  );
}