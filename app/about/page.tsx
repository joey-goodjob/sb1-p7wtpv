import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">关于BRI</h1>
        <div className="space-y-6">
          <p>
            Body Roundness Index (BRI) 是一种创新的健康指标，由Thomas et al. 于2013年提出。
            它旨在提供比传统的身体质量指数 (BMI) 更全面、更准确的身体健康评估。
          </p>
          <p>
            BRI的计算结合了身高、体重和腰围的测量，特别关注了腹部脂肪的分布。这一特点使得BRI
            在评估与中心性肥胖相关的健康风险方面表现出色，如心血管疾病、糖尿病等。
          </p>
          <p>
            BRI的计算公式为：
            BRI = 364.2 - 365.5 * √(1 - ((WC / (2π))² / (0.5H)²))
            其中，WC是腰围（米），H是身高（米）。
          </p>
          <p>
            BRI值的解读：
            - BRI &lt; 1：健康体型
            - 1 ≤ BRI &lt; 2：超重
            - BRI ≥ 2：肥胖
          </p>
          <p>
            需要注意的是，BRI只是健康评估的一个方面。为了全面了解您的健康状况，
            建议您结合其他健康指标，并咨询医疗专业人士的意见。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}