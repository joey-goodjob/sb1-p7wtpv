"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BRICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waistCircumference, setWaistCircumference] = useState('');
  const [bri, setBRI] = useState<number | null>(null);

  const calculateBRI = () => {
    const h = parseFloat(height) / 100; // convert cm to m
    const w = parseFloat(weight);
    const wc = parseFloat(waistCircumference) / 100; // convert cm to m

    if (h && w && wc) {
      const bri = 364.2 - (365.5 * Math.sqrt(1 - ((wc / (2 * Math.PI)) ** 2) / ((0.5 * h) ** 2)));
      setBRI(parseFloat(bri.toFixed(2)));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border-2 border-primary">
      <h2 className="text-2xl font-bold mb-4 text-center">BRI 计算器</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="height">身高 (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="例如：170"
          />
        </div>
        <div>
          <Label htmlFor="weight">体重 (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="例如：70"
          />
        </div>
        <div>
          <Label htmlFor="waist">腰围 (cm)</Label>
          <Input
            id="waist"
            type="number"
            value={waistCircumference}
            onChange={(e) => setWaistCircumference(e.target.value)}
            placeholder="例如：80"
          />
        </div>
        <Button onClick={calculateBRI} className="w-full mt-6">计算 BRI</Button>
      </div>
      {bri !== null && (
        <div className="mt-6 p-4 bg-primary/10 text-primary rounded-md border border-primary">
          <p className="text-lg font-bold">您的 BRI: {bri}</p>
          <p className="text-sm mt-2">
            BRI值越低越好。一般来说，BRI &lt; 1 表示健康体型，
            1 ≤ BRI &lt; 2 表示超重，BRI ≥ 2 表示肥胖。
          </p>
        </div>
      )}
    </div>
  );
};

export default BRICalculator;