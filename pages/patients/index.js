import React from 'react'
import Admin from '../../components/Layouts/Admin'
import DataTable from 'react-data-table-component';
import Link from "next/link";
import useSWR from 'swr';
import axios from 'axios';
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
                <a aria-label="detail-page" className="py-2 px-3 flex text-white rounded-md bg-gray-600">
                    Detay
                </a>
            </Link>,
    },
];

const fetcher = url => axios.get(url, { withCredentials: true }).then(res => res.data)

const PatientsPage = () => {
    const { data, error } = useSWR(`${process.env.API}/patients`, fetcher)

    return (
        <Admin title={"Hastalar"}>
            <DataTable
                title="Hastalar"
                columns={columns}
                data={data}
                pagination
                responsive
                striped
            />
        </Admin>
    )
}

export default PatientsPage
