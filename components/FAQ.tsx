import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Body Roundness Index (BRI)?</AccordionTrigger>
          <AccordionContent>
            Body Roundness Index (BRI) is a new type of health indicator that combines measurements of height, weight, and waist circumference,
            providing a more comprehensive assessment of body health than the traditional Body Mass Index (BMI). BRI particularly focuses on
            the distribution of abdominal fat, which is especially important for assessing health risks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How is BRI different from BMI?</AccordionTrigger>
          <AccordionContent>
            BRI is more comprehensive than BMI because it considers not only height and weight but also waist circumference. This allows BRI to
            more accurately assess abdominal obesity, which is closely related to various health risks. In contrast, BMI only considers height
            and weight, cannot distinguish between muscle and fat, and cannot reflect fat distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I interpret my BRI result?</AccordionTrigger>
          <AccordionContent>
            The lower the BRI value, the better. Generally, BRI &lt; 1 indicates a healthy body shape, 1 ≤ BRI &lt; 2 indicates overweight,
            and BRI ≥ 2 indicates obesity. However, please remember that BRI is just one aspect of health assessment and should be considered
            along with other indicators and your doctor's advice for a comprehensive evaluation of your health status.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is there a fee to use the BRI Calculator?</AccordionTrigger>
          <AccordionContent>
            No, our BRI Calculator is completely free. We are committed to providing free, accurate health assessment tools for all users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Is my data safe?</AccordionTrigger>
          <AccordionContent>
            Yes, your data security is our top priority. We use advanced encryption technology to protect your personal information,
            and we never sell or share your data with third parties. You can use our service with peace of mind.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;