import { Separator } from "../../components/ui/separator";
import { formatPrice } from "../../lib/utils";
import type { Cart } from "../../types";
import Editable from "./Editable";
interface CartProps {
  cart: Cart;
}

function CartItem({ cart }: CartProps) {
  return (
    <div className="space-y-3 ">
      <div className="flex gap-4">
        <img
          src={cart.image.url}
          alt="cart picture"
          className="object-cover w-16 "
        />
        <div className="flex flex-col space-y-1">
          <span className="line-clamp-1 text-sm font-medium">{cart.name}</span>
          <span className="text-muted-foreground text-sm">
            {formatPrice(cart.price)} x {cart.quantity} ={" "}
            {formatPrice((cart.price * cart.quantity).toFixed(2))}
          </span>
          <span className="line-clamp-1 text-muted-foreground capitalize">
            {cart.category} / {cart.subcategory}
          </span>
        </div>
      </div>
      <div className="">
        <Editable />
        <Separator className="mt-4" />
      </div>
    </div>
  );
}

export default CartItem;
