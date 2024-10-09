import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">BRI Calculator</h3>
            <p>您的个人健康管理助手</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">快速链接</h4>
            <ul className="space-y-2">
              <li><Link href="/about">关于我们</Link></li>
              <li><Link href="/features">功能介绍</Link></li>
              <li><Link href="/terms">使用条款</Link></li>
              <li><Link href="/privacy">隐私政策</Link></li>
              <li><Link href="/contact">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">社交媒体</h4>
            <ul className="space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <p>&copy; 2024 BRI Calculator. All rights reserved.</p>
            <div className="mt-2">
              <Link href="/privacy" className="mr-4">隐私政策</Link>
              <Link href="/terms">服务条款</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;