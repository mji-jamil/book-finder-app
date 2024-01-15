import ContainerHead from './ContainerHead.jsx';
import BookGrid from './BookGrid.jsx';
import { useState } from 'react';

export default function Container() {
    const [query, setQuery] = useState('');
    const [sortAsc, setSortAsc] = useState(false);
    const [sortDesc, setSortDesc] = useState(false);
    const [yearAsc, setYearAsc] = useState(false);
    const [yearDesc, setYearDesc] = useState(false);
    return (
        <>
            <main className="my-10 lg:my-14">
                <ContainerHead
                    setQuery={setQuery}
                    setSortAsc={setSortAsc}
                    setSortDesc={setSortDesc}
                    setYearAsc={setYearAsc}
                    setYearDesc={setYearDesc}
                />
                <BookGrid
                    query={query}
                    sortAsc={sortAsc}
                    sortDesc={sortDesc}
                    yearAsc={yearAsc}
                    yearDesc={yearDesc}
                />
            </main>
        </>
    );
}