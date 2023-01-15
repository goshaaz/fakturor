import React, { useEffect, useState } from 'react';
import AddInvoice from './AddInvoice';
import Invoice from './Invoice';
import { InvoiceType } from './Invoice';

export default function InvoiceList() {
    const [invoices, setInvoices] = useState<InvoiceType[]>([]);
    useEffect(() => {
        const _invoices = localStorage.getItem('invoices');
        if (_invoices) {
            setInvoices(JSON.parse(_invoices));
        }
    }, []);
    return (
        <div className='flex flex-col flex-1'>
            <div className='relative overflow-x-auto'>
                <div className='w-full text-lg text-left px-6 py-3 font-bold bg-gray-50 dark:bg-gray-700 dark:text-white'>
                    Mina fakturor
                </div>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Invoice
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Amount
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Company
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                OCR
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Förfallodatum
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <Invoice
                                key={invoice.id}
                                id={invoice.id}
                                name={invoice.name}
                                ocr={invoice.ocr}
                                company={invoice.company}
                                deadline={invoice.deadline}
                                amount={invoice.amount}
                                setInvoices={setInvoices}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full py-2 px-6 float-right text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white'>
                Total kostnad:{' '}
                {invoices.reduce((sum, invoice) => sum + invoice.amount, 0)} kr
            </div>
            <AddInvoice setInvoices={setInvoices} />
        </div>
    );
}
