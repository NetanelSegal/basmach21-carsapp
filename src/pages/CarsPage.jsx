import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarsList from '../components/CarsList';

export default function CarsPage() {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <Heading text="Cars Page" />
                <CarsList />
            </div>
            <Footer />
        </div>
    );
}
