import {
  Card,
  CardHeader,
  CardTitle,
} from "../ui/card";
const HomeProofCC1 = () => {
  return (
    <div className="m-10 md:flex md:flex-row md:flex-row-reverse  gap-2">
      <div className="md:flex md:justify-center md:w-1/3 justify-center items-center flex w-full">
        <img
          className="rounded "
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp"
          alt=""
        />
      </div>  
      <div className="md:w-2/3  w-full flex flex-col">
        <p>
          As Co-founders, we had zero clue on the real time stock levels in our
          warehouse. It felt like a battle to manually update invoices from EE
          to Zoho, so that at least some data points can be tracked. While we
          had already implemented Crest I had no clue that they could make this
          API integration work for us and exactly the way we wanted it to work.
          Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the
          problem and being so quick with the solution, kudos to the amazing
          team you have.
        </p>
        <div className="md:flex md:flex-row flex-row flex">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg"
            className="w-00 rounded-full mt-10 ml-10 "
          />
          <div className="mt-10 ml-10 ">
            <h1 className="font-bold">Kirti Goel</h1>
            <p>Co-founder , P-TAL</p>
          </div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg"
            className="w-10 m-auto mt-10 hidden md:block"
            alt=""
          />
        </div>
        <div className="cards lg:grid-cols-3 mt-24 gap-3 grid w-full md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-center ">
                Automated Invoice Reconciliation
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Automated Invoice Reconciliation
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      
    </div>
  );
};

export default HomeProofCC1;
