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
import Footer from "../components/layouts/Footer";
import { Icons } from "../components/icons";

function error() {
  return (
    <div className=" flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className=" mx-auto flex flex-1 items-center my-16">
        <Card className="w-full max-w-sm  lg:w-[500px]">
          <CardHeader className="flex place-items-center gap-2">
            <div className="size-24 border border-dashed border-muted-foreground/70 rounded-full grid place-items-center mt-2 mb-4">
              <Icons.exclamation
                className="size-10 text-muted-foreground/75 "
                aria-hidden="true"
              />
            </div>

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
      <Footer />
    </div>
  );
}

export default error;
