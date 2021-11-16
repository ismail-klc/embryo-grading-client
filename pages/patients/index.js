import React from 'react'
import Admin from '../../components/Layouts/Admin'
import DataTable from 'react-data-table-component';
import Link from "next/link";

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
        selector: row => row.fullName,
        sortable: true
    },
    {
        name: '',
        selector: row => 
            <Link href={`/patients/${row.id}`}>
                <a className="py-2 px-3 flex text-white rounded-md bg-gray-600">
                    Detay
                </a>
            </Link>,
    },
];

const data = [
    {
        id: 1,
        tcNo: '12345678901',
        fullName: 'Hasta 1',
    },
    {
        id: 2,
        tcNo: '12345678902',
        fullName: 'Hasta 2',
    },
    {
        id: 3,
        tcNo: '12345678903',
        fullName: 'Hasta 3',
    },
    {
        id: 4,
        tcNo: '12345678904',
        fullName: 'Hasta 4',
    },
    {
        id: 5,
        tcNo: '12345678905',
        fullName: 'Hasta 5',
    },
    {
        id: 6,
        tcNo: '12345678906',
        fullName: 'Hasta 6',
    },
]

const PatientsPage = () => {

    return (
        <Admin>
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
