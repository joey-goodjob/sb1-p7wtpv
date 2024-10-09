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
            <h1 className="text-5xl font-bold mb-4">精准计算您的Body Roundness Index (BRI)</h1>
            <p className="text-xl mb-8">全面了解您的健康状况，获取个性化建议</p>
            <Button size="lg" variant="secondary">立即开始计算</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">什么是Body Roundness Index (BRI)?</h2>
            <p className="text-lg mb-4">
              Body Roundness Index (BRI) 是一种新型的健康指标，它结合了身高、体重和腰围的测量，
              提供了比传统的身体质量指数 (BMI) 更全面的身体健康评估。BRI 不仅考虑了整体体重，
              还特别关注了腹部脂肪的分布，这对评估健康风险尤为重要。
            </p>
          </div>
        </section>

        <section className="bg-background-secondary py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">为什么选择BRI Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">精确评估</h3>
                <p>BRI提供比BMI更准确的身体健康评估，特别是在评估腹部肥胖方面。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">个性化建议</h3>
                <p>根据您的BRI结果，我们提供定制的健康建议和改善计划。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">追踪进展</h3>
                <p>定期计算BRI，轻松追踪您的健康改善进展。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">立即计算您的BRI</h2>
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
            <h2 className="text-3xl font-bold mb-8">立即开始使用BRI Calculator，了解您的健康状况</h2>
            <Button size="lg" variant="secondary">免费计算我的BRI</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}