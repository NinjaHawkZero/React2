import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


//Home page component
function Home({snacks, drinks}) {
  
  //Render home page
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!</h3>
              <p>
              # Of Snacks: {snacks.length}
              </p>
              <p>
              # Of Drinks:{drinks.length}
              </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
