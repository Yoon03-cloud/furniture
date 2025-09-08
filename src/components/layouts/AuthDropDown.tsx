import { Icons } from "../icons";
import { Link } from "react-router-dom";
import type { User } from "../../types";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

interface UserProps {
  user: User;
}

function AuthDropDown({ user }: UserProps) {
  if (!user) {
    return (
      <Button asChild size="sm">
        <Link to="/signin">
          Sign In
          <span className="sr-only">Sign In </span>
        </Link>
      </Button>
    );
  }
  const initialName = `${user.firstName.charAt(0)} ${
    user.lastName.charAt(0) ?? ""
  }`;

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="size-8 rounded-full">
            <Avatar className="size-8">
              <AvatarImage src={user.imageUrl} alt={initialName} />
              <AvatarFallback>{initialName}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex felx-col space-y-1">
              <p className="font-medium  text-sm leading-none">
                {user.firstName ?? ""} {user.lastName ?? ""}
              </p>
              <p className="text-sm leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="#">
                <Icons.dashboard className="size-4 mr-2" aria-hidden="true" />
                Dashboard
                <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link to="#">
                <Icons.gear className="size-4 mr-2" aria-hidden="true" />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/login">
              <Icons.exit className="size-4 mr-2" aria-hidden="true" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AuthDropDown;
