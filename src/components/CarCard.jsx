export default function CarCard({ car }) {
    return (
        <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-4 shadow-sm">
            <img
                className="w-full h-48 object-cover rounded-xl"
                src={car.image}
                alt={`${car.make} ${car.model}`}
            />
            <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
            <p className="text-gray-600">{car.type}</p>
            <p>Year: {car.year}</p>
            <p className="font-semibold">${car.price_usd.toLocaleString()}</p>
            <p>{car.is_electric ? '⚡ Electric' : 'Gas'}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Add to cart
            </button>
        </div>
    );
}
