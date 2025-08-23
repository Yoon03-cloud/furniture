import { Link } from "react-router-dom";
import Header from "../components/layouts/Header";
import { Button } from "../components/ui/button";
import {
  Card,
  //CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function error() {
  return (
    <div className=" flex min-h-screen flex-col ">
      <Header />
      <main className=" mx-auto flex flex-1 items-center ">
        <Card className="w-full max-w-sm  lg:w-[500px]">
          <CardHeader>
            <CardTitle className="text-center">Opps! </CardTitle>
            <CardDescription className="text-center">
              An error occurs accidently.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/"> Go to Home Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

export default error;
