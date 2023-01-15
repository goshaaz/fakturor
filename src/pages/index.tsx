import InvoiceList from '@/components/InvoiceList';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
    const [viewUnpaid, setViewUnpaid] = useState(false);
    return (
        <div className='flex'>
            <InvoiceList />
        </div>
    );
}
