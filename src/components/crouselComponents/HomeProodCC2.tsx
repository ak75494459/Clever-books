import { Card, CardHeader, CardTitle } from "../ui/card";
const HomeProofCC2 = () => {
  return (
    <div className="m-10 md:flex md:flex-row md:flex-row-reverse  gap-2">
      <div className="md:flex md:justify-center md:w-1/3 justify-center items-center flex w-full">
        <img
          className="rounded "
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"
          alt=""
        />
      </div>
      <div className="md:w-2/3  text-center w-full flex flex-col">
        <p>
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to run their demand forecast manually. Crest
          automates all the workflows and helps brands predict high demand
          periods and be ready to cater to customer demands. It has a direct
          impact on the revenue readiness of a company and that's the value we
          see Crest unlocking for many companies in the future. Rahul and team
          have built a robust product with years of their experience distilled
          into the workflows.
        </p>
        <div className="md:flex md:flex-row flex-row flex ">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
            className="w-10 rounded-full mt-10 ml-10"
          />
          <div className="mt-10 ml-10 ">
            <h1 className="font-bold">Diksha Pande</h1>
            <p>Co-founder , Samosa Party</p>
          </div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
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

export default HomeProofCC2;
