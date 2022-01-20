import React from 'react'
import Admin from '../../components/Layouts/Admin'
import DataTable from 'react-data-table-component';
import Link from "next/link";
import useSWRImmutable from 'swr/immutable';
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'TC No',
        selector: row => row.tcNo,
    },
    {
        name: 'Ad Soyad',
        selector: row => row.firstName + " " + row.lastName,
        sortable: true
    },
    {
        name: 'Telefon No',
        selector: row => row.phoneNumber,
    },
    {
        name: 'Doğum Tarihi',
        selector: row => format(new Date(row.birthDate), 'dd MMMM, yyyy', { locale: tr }),
    },
    {
        name: '',
        selector: row =>
            <Link href={`/patients/${row.id}`}>
                <a aria-label="detail-page" className="flex px-3 py-2 text-white bg-gray-600 rounded-md">
                    Detay
                </a>
            </Link>,
    },
];

const PatientsPage = () => {
    const { data, error } = useSWRImmutable(`${process.env.API}/patients`)

    return (
        <Admin title={"Hastalar"}>
            <DataTable
                title="Hastalar"
                columns={columns}
                noDataComponent="Kayıtlı hastanız bulunmamaktadır"
                data={data}
                pagination
                responsive
                striped
            />
        </Admin>
    )
}

export default PatientsPage
