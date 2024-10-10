import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mr. Johnson",
    comment: "BRI Calculator helped me understand my health status more comprehensively. Compared to BMI, it provides more targeted advice."
  },
  {
    name: "Ms. Smith",
    comment: "After using BRI Calculator, I realized the importance of abdominal fat. Now I pay more attention to waist exercises."
  },
  {
    name: "Dr. Brown",
    comment: "As a doctor, I believe BRI is a powerful tool for assessing patients' health status. It provides more comprehensive information than BMI."
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-background-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Users Say About BRI Calculator</h2>
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