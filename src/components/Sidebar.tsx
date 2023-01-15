import React, { Dispatch, SetStateAction } from 'react';

export default function Sidebar({
    viewUnpaid,
    setViewUnpaid,
}: {
    viewUnpaid: boolean;
    setViewUnpaid: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className='flex flex-col p-6 gap-6 px-10'>
            <ul className='flex flex-col gap-4'>
                <li className='mr-6'>
                    <a
                        onClick={() => setViewUnpaid(false)}
                        className={`text-blue-300 cursor-pointer ${
                            !viewUnpaid ? 'text-blue-600' : ''
                        } hover:text-blue-600`}
                    >
                        Fakturor
                    </a>
                </li>
                <li className='mr-6'>
                    <a
                        onClick={() => setViewUnpaid(true)}
                        className={`text-blue-300 cursor-pointer ${
                            viewUnpaid ? 'text-blue-600' : ''
                        } hover:text-blue-600`}
                    >
                        Betalda
                    </a>
                </li>
            </ul>
        </div>
    );
}
