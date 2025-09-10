import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ScrollArea } from "../../components/ui/scroll-area";
import { formatPrice } from "../../lib/utils";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { cartItems } from "../../data/cart";
import { Separator } from "../../components/ui/separator";
import { Icons } from "../icons";
import CartItem from "../cart/CartItem";

export default function CartSheet() {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Open cart"
        >
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader className="mb-2">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4 h-[68vh] pb-8">
              <div className="">
                {cartItems.map((cart) => (
                  <CartItem />
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{formatPrice(amountTotal.toFixed(2))}</span>
                </div>{" "}
              </div>
              <SheetFooter className="mt-4">
                <SheetClose asChild>
                  <Button type="submit" className="w-full" asChild>
                    <Link to="/checkout" aria-label="check out ">
                      Continue to checkout
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex flex-col h-full justify-center items-center space-y-1">
            <Icons.cart className="size-16 mb-4 text-muted-foreground" />
            <div className="">Your cart is empty.</div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
