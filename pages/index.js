import CardProfile from "../components/Cards/CardProfile";
import CardStats from "../components/Cards/CardStats";
import useSWRImmutable from 'swr/immutable';
import Admin from "../components/Layouts/Admin";

export default function Home(props) {
  const { data, error } = useSWRImmutable(`${process.env.API}/doctors/stats`)

  if (!data) return null

  return (
    <Admin title="Anasayfa">
      <div className="flex justify-around space-x-10">
        <CardStats title={"Doktor sayısı"} count={data.doctorCount} color={"bg-red-500"}/>
        <CardStats title={"Hasta sayısı"} count={data.patientCount} color={"bg-blue-500"}/>
        <CardStats title={"Kayıt sayısı"} count={data.recordCount} color={"bg-green-500"}/>
      </div>
      <CardProfile />
    </Admin>
  );
}