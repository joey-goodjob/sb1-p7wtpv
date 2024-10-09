import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">常见问题解答</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>什么是Body Roundness Index (BRI)?</AccordionTrigger>
          <AccordionContent>
            Body Roundness Index (BRI) 是一种新型的健康指标，它结合了身高、体重和腰围的测量，
            提供了比传统的身体质量指数 (BMI) 更全面的身体健康评估。BRI特别关注了腹部脂肪的分布，
            这对评估健康风险尤为重要。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>BRI与BMI有什么区别?</AccordionTrigger>
          <AccordionContent>
            BRI比BMI更全面，因为它不仅考虑了身高和体重，还包括了腰围的测量。这使得BRI能更准确地
            评估腹部肥胖，而腹部肥胖与多种健康风险密切相关。相比之下，BMI只考虑身高和体重，
            无法区分肌肉和脂肪，也不能反映脂肪分布。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>如何解读我的BRI结果?</AccordionTrigger>
          <AccordionContent>
            BRI值越低越好。一般来说，BRI &lt; 1 表示健康体型，1 ≤ BRI &lt; 2 表示超重，
            BRI ≥ 2 表示肥胖。但请记住，BRI只是健康评估的一个方面，应结合其他指标和医生的建议
            来全面评估您的健康状况。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>使用BRI Calculator需要付费吗?</AccordionTrigger>
          <AccordionContent>
            不需要。我们的BRI Calculator是完全免费的。我们致力于为所有用户提供免费、准确的健康评估工具。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>我的数据安全吗?</AccordionTrigger>
          <AccordionContent>
            是的，您的数据安全是我们的首要任务。我们采用先进的加密技术保护您的个人信息，
            并且绝不会将您的数据出售或分享给第三方。您可以放心使用我们的服务。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;