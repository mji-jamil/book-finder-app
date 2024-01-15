import AddToCart from './AddToCart.jsx';
import Favourite from './Favourite.jsx';

export default function BookCardFooter() {
    return (
        <>
            <div className="flex items-center gap-3 text-xs lg:text-sm">
                <AddToCart />
                <Favourite />
            </div>
        </>
    );
}