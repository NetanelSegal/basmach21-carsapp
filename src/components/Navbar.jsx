import EngineType from "./EngineType";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-4 sm:px-6 py-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">CarShop</h2>
                <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-sm sm:text-base">
                    <li><a href="#" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400">Cars</a></li>
                    <li><a href="#" className="hover:text-blue-400">About</a></li>
                    <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
