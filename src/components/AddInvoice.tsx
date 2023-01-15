import React, { useState } from 'react';
import { InvoiceType } from './Invoice';

export default function AddInvoice({
    setInvoices,
}: {
    setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
}) {
    const [input, setInput] = useState<{
        name: string;
        company: string;
        ocr: undefined | number;
        deadline: string | undefined;
        amount: number;
    }>({
        name: '',
        company: '',
        ocr: undefined,
        deadline: undefined,
        amount: 0,
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            input.name === '' ||
            input.company === '' ||
            input.ocr === undefined ||
            input.deadline === undefined ||
            input.deadline === '' ||
            input.amount === 0
        ) {
            console.log('bad input');
            return;
        }
        const UUID = crypto.randomUUID();
        let invoices = localStorage.getItem('invoices');
        if (invoices) {
            let _invoices: [any] = JSON.parse(invoices);
            _invoices.unshift({ ...input, id: UUID });
            localStorage.setItem('invoices', JSON.stringify(_invoices));
        } else {
            localStorage.setItem(
                'invoices',
                JSON.stringify([{ ...input, id: UUID }])
            );
        }
        const test = { ...input, id: UUID } as InvoiceType;
        setInvoices((invoices) => [test, ...invoices]);
    };
    return (
        <div className='py-2 px-6 '>
            <h1 className='font-bold text-lg mb-2'>Lägg till faktura</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-2'>
                    <label>Name</label>
                    <input
                        value={input.name}
                        onChange={(e) =>
                            setInput({ ...input, name: e.target.value })
                        }
                        className='border border-2'
                        type='text'
                    />
                    <label>Amount</label>
                    <input
                        value={input.amount ? input.amount : undefined}
                        onChange={(e) => {
                            setInput({
                                ...input,
                                amount: Number(e.target.value),
                            });
                        }}
                        className='border border-2'
                        type='number'
                    />
                    <label>Company</label>
                    <input
                        value={input.company}
                        onChange={(e) =>
                            setInput({ ...input, company: e.target.value })
                        }
                        className='border border-2'
                        type='text'
                    />
                    <label>OCR</label>
                    <input
                        value={input.ocr}
                        onChange={(e) =>
                            setInput({ ...input, ocr: Number(e.target.value) })
                        }
                        className='border border-2'
                        type='number'
                    />
                    <label>Deadline</label>
                    <input
                        value={input.deadline}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setInput({ ...input, deadline: e.target.value });
                        }}
                        className='border border-2'
                        type='date'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Add invoice
                    </button>{' '}
                </div>
            </form>
        </div>
    );
}
