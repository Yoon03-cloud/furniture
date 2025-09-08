import React from "react";
import { Link, useParams } from "react-router-dom";
// ProductDetail.tsx
import { Button } from "../../components/ui/button";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import ProductCard from "../../components/products/ProductCard";
import { Icons } from "../../components/icons";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { Separator } from "../../components/ui/separator";
import { formatPrice } from "../../lib/utils";
import { products } from "../../data/product";
import Rating from "../../components/products/Rating";
import AddToFavourite from "./AddToFavourite";
import AddToCartForm from "./AddToCartForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto px-4 md:px-0">
      <Button asChild variant="outline" className="mt-8">
        <Link to="/products">
          <Icons.arrowLeft /> All Products
        </Link>
      </Button>

      <section className="my-6 flex flex-col gap-6 md:flex-row md:gap-16">
        <Carousel plugins={[plugin.current]} className="w-full md:w-1/2">
          <CarouselContent>
            {product?.images.map((image) => (
              <CarouselItem key={image} className="basis-full">
                <div className="h-80 w-full overflow-hidden rounded-md bg-muted">
                  <img
                    src={image}
                    alt="test"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="mt-4 md:hidden" />

        <div className="flex w-full flex-col gap-4 md:w-1/2 md:flex-1 ">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">
              {product?.name}{" "}
            </h2>
            <p className="text-base text-muted-foreground">
              {formatPrice(Number(product?.price))}
            </p>
          </div>

          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {product?.inventory} in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Number(product?.rating)} />
            <AddToFavourite
              productId={String(product?.id)}
              rating={Number(product?.rating)}
              isFavourite={false}
            />
          </div>
          <AddToCartForm canBuy={product?.status === "active"} />
          <Separator className="my-4" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {product?.description ??
                  "There is no description for this product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Separator className="mt-4 md:hidden" />

      <section className="space-y-6 overflow-hidden mt-8">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products from Furniture Shop
        </h2>
        <ScrollArea className="pb-8">
          <div className="flex gap-4">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
