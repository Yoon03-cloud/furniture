import { Button } from "../../components/ui/button";
import { Icons } from "../../components/icons";
import { cn } from "../../lib/utils";

interface FavouriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string;
  rating: number;
  isFavourite: boolean;
}

function AddToFavourite({
  productId,
  rating,
  className,
  ...props
}: FavouriteProp) {
  return (
    <Button
      className={cn("size-8 shrink-0 ", className)}
      {...props}
      variant="secondary"
      size="icon"
    >
      <Icons.heartIcon className="size-4" />
    </Button>
  );
}

export default AddToFavourite;
