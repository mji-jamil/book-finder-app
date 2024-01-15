import BookCard from './BookCard.jsx';

export default function BookGrid({
    query,
    sortAsc,
    sortDesc,
    yearAsc,
    yearDesc,
}) {
    return (
        <>
            <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <BookCard
                    query={query}
                    sortAsc={sortAsc}
                    sortDesc={sortDesc}
                    yearAsc={yearAsc}
                    yearDesc={yearDesc}
                />
            </div>
        </>
    );
}