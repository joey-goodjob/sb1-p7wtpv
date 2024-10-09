import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">联系我们</h1>
        <div className="max-w-2xl mx-auto">
          <p className="mb-6">
            如果您有任何问题、建议或反馈，请随时与我们联系。我们的团队将尽快回复您。
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">姓名</label>
              <Input type="text" id="name" placeholder="请输入您的姓名" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">电子邮箱</label>
              <Input type="email" id="email" placeholder="请输入您的电子邮箱" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">留言</label>
              <Textarea id="message" placeholder="请输入您的留言" rows={5} />
            </div>
            <Button type="submit">发送消息</Button>
          </form>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">其他联系方式</h2>
            <ul className="space-y-2">
              <li>电子邮箱：info@bricalculator.com</li>
              <li>电话：+86 123 4567 8900</li>
              <li>地址：中国北京市朝阳区健康路100号</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}