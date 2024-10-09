import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Guide() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">BRI Calculator 使用指南</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">如何使用BRI Calculator</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>准备一个软尺和体重秤。</li>
              <li>测量您的身高（厘米）。</li>
              <li>测量您的体重（公斤）。</li>
              <li>测量您的腰围（厘米）：站直，在最后一根肋骨下方和髂骨顶部之间的中点处测量。</li>
              <li>打开BRI Calculator，输入您的身高、体重和腰围数据。</li>
              <li>点击"计算BRI"按钮，获取您的BRI值和相应的健康建议。</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">如何解读BRI结果</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>BRI &lt; 1：健康体型，继续保持良好的生活习惯。</li>
              <li>1 ≤ BRI &lt; 2：超重，建议适当调整饮食和增加运动。</li>
              <li>BRI ≥ 2：肥胖，建议咨询医生或营养师，制定健康改善计划。</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">使用技巧</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>定期计算BRI（如每月一次），追踪您的健康状况变化。</li>
              <li>结合其他健康指标（如血压、血糖等）全面评估健康状况。</li>
              <li>遵循我们提供的个性化健康建议，逐步改善您的生活方式。</li>
              <li>如有任何疑问或特殊情况，请咨询专业医疗人员。</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}