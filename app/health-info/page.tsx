import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HealthInfo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">健康资讯</h1>
        <div className="space-y-8">
          <article>
            <h2 className="text-2xl font-bold mb-4">腹部脂肪与健康风险</h2>
            <p>
              研究表明，腹部脂肪（特别是内脏脂肪）的堆积与多种健康问题密切相关，
              包括心血管疾病、2型糖尿病和某些癌症。BRI通过考虑腰围，
              能更好地反映腹部脂肪的分布，从而更准确地评估相关健康风险。
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">健康饮食的重要性</h2>
            <p>
              均衡的饮食对维持健康体重和降低BRI至关重要。建议增加蔬菜、水果、
              全谷物和瘦肉的摄入，减少加工食品和饱和脂肪的消费。适量控制总热量摄入，
              同时确保必要的营养素供给。
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">运动与BRI改善</h2>
            <p>
              规律的体育锻炼不仅有助于降低体重，还能特别针对腹部脂肪。建议每周进行至少150分钟
              中等强度有氧运动（如快走、游泳）或75分钟高强度有氧运动（如跑步、
              HIIT训练）。同时，加入力量训练可以增加肌肉量，提高基础代谢率。
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">压力管理与睡眠质量</h2>
            <p>
              长期压力和睡眠不足可能导致体重增加，特别是腹部脂肪的堆积。
              学习有效的压力管理技巧（如冥想、深呼吸练习）和保证充足的优质睡眠
              （每晚7-9小时）对维持健康的BRI很重要。
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">定期健康检查的重要性</h2>
            <p>
              虽然BRI是一个有用的健康指标，但它不能替代全面的健康评估。
              建议定期进行体检，包括血压、血糖、血脂等指标的检查。
              结合这些数据和BRI，可以更全面地了解自己的健康状况。
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}