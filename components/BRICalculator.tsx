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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">BRI Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 170"
          />
        </div>
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
          />
        </div>
        <div>
          <Label htmlFor="waist">Waist Circumference (cm)</Label>
          <Input
            id="waist"
            type="number"
            value={waistCircumference}
            onChange={(e) => setWaistCircumference(e.target.value)}
            placeholder="e.g., 80"
          />
        </div>
        <Button onClick={calculateBRI} className="w-full">Calculate BRI</Button>
      </div>
      {bri !== null && (
        <div className="mt-4 p-4 bg-primary text-white rounded-md">
          <p className="text-lg font-bold">Your BRI: {bri}</p>
          <p className="text-sm mt-2">
            Lower BRI values are better. Generally, BRI &lt; 1 indicates a healthy body shape,
            1 ≤ BRI &lt; 2 indicates overweight, and BRI ≥ 2 indicates obesity.
          </p>
        </div>
      )}
    </div>
  );
};

export default BRICalculator;