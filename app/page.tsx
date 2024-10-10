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
            <h1 className="text-5xl font-bold mb-4">Calculate Your Body Roundness Index (BRI) Accurately</h1>
            <p className="text-xl mb-8">Gain a comprehensive understanding of your health status and receive personalized advice</p>
            <Button size="lg" variant="secondary">Start Calculating Now</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is Body Roundness Index (BRI)?</h2>
            <p className="text-lg mb-4">
              Body Roundness Index (BRI) is a new health indicator that combines measurements of height, weight, and waist circumference,
              providing a more comprehensive assessment of body health than the traditional Body Mass Index (BMI). BRI not only considers
              overall weight but also focuses on abdominal fat distribution, which is particularly important for assessing health risks.
            </p>
          </div>
        </section>

        <section className="bg-background-secondary py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose BRI Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Accurate Assessment</h3>
                <p>BRI provides a more accurate assessment of body health than BMI, especially in evaluating abdominal obesity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Personalized Advice</h3>
                <p>We offer customized health recommendations and improvement plans based on your BRI results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Track Progress</h3>
                <p>Easily track your health improvement progress by calculating BRI regularly.</p>
              </div>
            </div>
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