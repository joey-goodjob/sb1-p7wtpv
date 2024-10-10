import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">BRI Calculator</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About BRI</Link></li>
            <li><Link href="/guide">User Guide</Link></li>
            <li><Link href="/health-info">Health Info</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Button variant="secondary">Start Calculating</Button>
      </div>
    </header>
  );
};

export default Header;