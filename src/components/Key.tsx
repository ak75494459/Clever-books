import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";


const Key = () => {
  return (
    <div>
    <div className="text-center font-bold text-5xl my-6 ">
        <h1>Four key questions answered by Crest</h1>
        </div>
        <div className="flex justify-center grid xl:grid-cols-4 sm:grid-cols-2 gap-3 " >
      <div className="mx-2">
        <Card className="bg-gray-300 h-56">
          <CardHeader>
          <div><img className="h-8" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"/></div>
            <CardTitle>What is Order</CardTitle>
            <CardDescription>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="mx-2">
        <Card className="bg-gray-300 h-56">
          <CardHeader>
            <div><img className="h-8" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"/></div>
            <CardTitle>When to order</CardTitle>
            <CardDescription>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="mx-2">
        <Card className="bg-gray-300 h-56">
          <CardHeader>
            <div><img className="h-8" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"/></div>
            <CardTitle>How much to stock</CardTitle>
            <CardDescription>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="mx-2" >
        <Card className="bg-gray-300 h-56">
          <CardHeader>
            <div><img className="h-8" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"/></div>
            <CardTitle>Where to place</CardTitle>
            <CardDescription>DOur tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
    </div>
    
  );
};

export default Key;
