import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">BRI Calculator</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">首页</Link></li>
            <li><Link href="/about">关于BRI</Link></li>
            <li><Link href="/guide">使用指南</Link></li>
            <li><Link href="/health-info">健康资讯</Link></li>
            <li><Link href="/contact">联系我们</Link></li>
          </ul>
        </nav>
        <Button variant="secondary">开始计算</Button>
      </div>
    </header>
  );
};

export default Header;