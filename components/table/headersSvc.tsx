import Link from "next/link";
import { IconEdit } from "../icons";

export const headers = [
    {
        Header: 'ID',
        accessor: 'idService'
    },
    {
        Header: 'Nomes',
        accessor: 'name',
        disableSortBy: true
    },
    {
        Header: 'Detalhes',
        accessor: (row: any) => row,
        Cell: ({ value }) => (
            <div>
                <button className='text-black font-bold py-2 px-4 rounded'>
                    <Link href={`/service/${value.idService}`}>
                        <a>
                            {IconEdit()}
                        </a>
                    </Link>
                </button>
            </div>
        )
    },


]