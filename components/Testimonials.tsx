import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "张先生",
    comment: "BRI Calculator帮助我更全面地了解了自己的健康状况。比起BMI，它给出的建议更有针对性。"
  },
  {
    name: "李女士",
    comment: "使用BRI Calculator后，我意识到了腹部脂肪的重要性。现在我更注重腰部锻炼了。"
  },
  {
    name: "王医生",
    comment: "作为一名医生，我认为BRI是评估患者健康状况的有力工具。它提供了比BMI更全面的信息。"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-background-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">用户如何评价BRI Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="mb-4">{testimonial.comment}</p>
                <p className="font-bold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;