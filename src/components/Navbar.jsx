export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <h2 className="text-xl font-bold">CarShop</h2>
                <ul className="flex gap-6">
                    <li><a href="#" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400">Cars</a></li>
                    <li><a href="#" className="hover:text-blue-400">About</a></li>
                    <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
