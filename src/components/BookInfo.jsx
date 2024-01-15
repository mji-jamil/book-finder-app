import star from '../assets/star.svg';

export default function BookInfo({ book }) {
    return (
        <>
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
                <img
                    className="max-w-[144px] max-h-[190.41px]"
                    src={book.image}
                    alt={book.name}
                />
            </div>
            {/*info*/}
            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">
                    {book.name} ({book.publicationYear})
                </h4>
                <p className="text-xs lg:text-sm">
                    By : <span>{book.author} </span>
                </p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">
                        {book.price}
                    </h4>
                    {/*stars*/}
                    <div className="flex items-center space-x-1">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <span className="text-xs lg:text-sm">(4 Star)</span>
                    </div>
                    {/*stars ends */}
                </div>
            </div>
        </>
    );
}