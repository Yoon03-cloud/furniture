import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col  gap-2 text-center">
        <h1 className="text-2xl items-center font-bold">Sign Up </h1>
        <p className=" text-sm text-muted-foreground ">
          Enter your phone number below to create to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="text" placeholder="0977********" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            ></Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
            <Link
              to="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            ></Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full" asChild>
          <Link to="/">Sign Up</Link>
        </Button>

        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Sign In
        </Link>
      </div>
    </form>
  );
}
