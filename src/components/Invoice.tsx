import React from 'react';

export type InvoiceType = {
    id: string;
    name: string;
    amount: number;
    company: string;
    ocr: number;
    deadline: string;
};

export default function Invoice({
    id,
    name,
    company,
    ocr,
    deadline,
    amount,
    setInvoices,
}: InvoiceType & {
    setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
}) {
    return (
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
                {name}
            </th>
            <td className='px-6 py-4 dark:text-white'>{amount}</td>
            <td className='px-6 py-4 dark:text-white'>{company}</td>
            <td className='px-6 py-4 dark:text-white'>{ocr}</td>
            <td className='px-6 py-4 flex justify-between items-center dark:text-white'>
                {deadline}{' '}
                <div>
                    <button
                        onClick={() => {
                            // const invoices = localStorage.getItem('invoices');
                            // const invArr = JSON.parse(invoices!);
                            // localStorage.setItem(
                            //     'invoices',
                            //     JSON.stringify(
                            //         invArr.filter((inv: any) => inv.id !== id)
                            //     )
                            // );
                            // setInvoices((invoices) =>
                            //     invoices.filter((inv) => inv.id !== id)
                            // );
                        }}
                        className='inline-flex mr-4 items-center px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 mr-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                        </svg>
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            const invoices = localStorage.getItem('invoices');
                            const invArr = JSON.parse(invoices!);
                            localStorage.setItem(
                                'invoices',
                                JSON.stringify(
                                    invArr.filter((inv: any) => inv.id !== id)
                                )
                            );
                            setInvoices((invoices) =>
                                invoices.filter((inv) => inv.id !== id)
                            );
                        }}
                        className='inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 mr-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                        </svg>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
