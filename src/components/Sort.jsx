export default function Sort({
    setSortAsc,
    setSortDesc,
    setYearAsc,
    setYearDesc,
}) {
    function handleSortOne(e) {
        if (e.target.value === 'name_asc') {
            setSortDesc(false);
            setYearAsc(false);
            setYearDesc(false);
            setSortAsc(true);
        }
        if (e.target.value === 'name_desc') {
            setSortAsc(false);
            setYearAsc(false);
            setYearDesc(false);
            setSortDesc(true);
        }
        if (e.target.value === 'year_asc') {
            setSortAsc(false);
            setSortDesc(false);
            setYearDesc(false);
            setYearAsc(true);
        }
        if (e.target.value === 'year_desc') {
            setSortAsc(false);
            setSortDesc(false);
            setYearAsc(false);
            setYearDesc(true);
        }
    }

    return (
        <>
            <div className="flex items-stretch space-x-3">
                {/*Sort*/}
                <select
                    className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                    name="sortBy"
                    id="sortBy"
                    onChange={handleSortOne}
                >
                    <option value="">Sort</option>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="year_asc">Publication Year (Oldest)</option>
                    <option value="year_desc">Publication Year (Newest)</option>
                </select>
            </div>
        </>
    );
}