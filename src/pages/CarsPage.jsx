import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarsList from '../components/CarsList';

export default function CarsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <Heading text="Cars Page" />
                <CarsList />
            </main>
            <Footer />
        </div>
    );
}
