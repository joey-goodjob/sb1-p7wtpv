import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BRICalculator from '@/components/BRICalculator';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Body Roundness Index (BRI) Calculator</h1>
            <p className="text-xl mb-8">Discover a more comprehensive way to assess your health</p>
            <Button size="lg" variant="secondary">Start Now</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Calculate Your BRI Now</h2>
            <BRICalculator />
          </div>
        </section>

        <Testimonials />

        <section className="py-16">
          <div className="container mx-auto">
            <FAQ />
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Start Using BRI Calculator Now to Understand Your Health Status</h2>
            <Button size="lg" variant="secondary">Calculate My BRI for Free</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}