import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const SpreadSheet = () => {
  return (
    <div className="main">
      <div className="text-center text-4xl font-bold mb-[5rem] mt-[5rem]">
        <h1>Things your spreadsheet wishes it could do</h1>
      </div>
      <div className="grid md:grid-cols-2 ">
        <div className="writing ml-10 mr-10">
          <Accordion type="single" collapsible className="no-underline"  >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl text-center">Accurate Demand Forcasting</AccordionTrigger>
              <AccordionContent>
                Dynamically predict future demand across all channels, with high
                accuracy and lowest granularity. Crest takes into account what
                traditional forecasts don't: trends, real-time market signals,
                promotional activities, and even logistics disruptions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-xl text-center">HELIX: Workflow Automation</AccordionTrigger>
              <AccordionContent>
                Build and automate custom S&OP workflows to enhance productivity
                and streamline your processes. Crest helps you get a bird's eye
                view of your supply chain, and help you do things a spreadsheet
                never can.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl text-center">Automated Purchase Planning</AccordionTrigger>
              <AccordionContent>
                Never miss an order, and know exactly how much to order, when,
                and from whom. This is made possible with constant inventory
                tracking and automated PO generation. What's more, Crest
                improves with every planning cycle as the data set gets richer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl text-center">
                Automated Distribution Planning
              </AccordionTrigger>
              <AccordionContent>
                Automated Purchase Planning Faster replenishment cycles mean
                more working capital for you. Granular warehouse and store-level
                insights help you optimally allocate materials and inventory.
                Say goodbye to stock-outs and excess inventory.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl text-center">Easy Integration</AccordionTrigger>
              <AccordionContent>
                From all online store solutions to cloud ERPs, Crest integrates
                seamlessly with your current tech and ops stack. What's more?
                Connecting them to Crest will give you actionable insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl text-center">Custom Dashboards</AccordionTrigger>
              <AccordionContent>
                Create customised dashboards to identify important trends,
                patterns, and insights. Tailor them to match the unique
                requirements of your team, empowering them to extract data in a
                user-friendly format that can be easily comprehended.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl text-center">Consensus Planning</AccordionTrigger>
              <AccordionContent>
                Get inputs from all major stakeholders for the forecast numbers
                with a multi-level approval process. Compare & visualise the
                impact of the numbers on major KPIs in real time and take
                informed decisions with Scenario Planning
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div  className="md:block hidden bg-indigo-500 rounded-l-lg bg-gradient-to-r from-pink-500 to-purple-400 ">
            <div>
          <img className="flex justify-center items-center m-auto mt-20 relative w-[35rem] z-20"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-2000.webp"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadSheet;
