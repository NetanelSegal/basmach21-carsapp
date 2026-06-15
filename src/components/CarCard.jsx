export default function CarCard({ car }) {
    return (
        <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-3 sm:p-4 shadow-sm h-full">
            <img
                className="w-full h-40 sm:h-48 object-cover rounded-xl"
                src={car.image}
                alt={`${car.make} ${car.model}`}
            />
            <h3 className="text-lg sm:text-xl font-bold">{car.make} {car.model}</h3>
            <p className="text-sm sm:text-base text-gray-600">{car.type}</p>
            <p className="text-sm sm:text-base">Year: {car.year}</p>
            <p className="text-sm sm:text-base font-semibold">${car.price_usd.toLocaleString()}</p>
            <p className="text-sm sm:text-base">{car.is_electric ? '⚡ Electric' : 'Gas'}</p>
            <button className="mt-auto w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm sm:text-base">
                Add to cart
            </button>
        </div>
    );
}
