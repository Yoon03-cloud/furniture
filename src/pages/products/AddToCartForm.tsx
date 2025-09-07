import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { z } from "zod";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Icons } from "../../components/icons";
import { toast } from "sonner";
import { cn } from "../../lib/utils";
// import { Toaster } from "../../components/ui/sonner";

const quantitySchema = z.object({
  quantity: z.number().min(0).default(1),
});

interface showBuyNowProps {
  canBuy: boolean;
}

export default function AddToCartForm({ canBuy }: showBuyNowProps) {
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: z.infer<typeof quantitySchema>) {
    console.log(values);
    //call api
    toast.success("Product is added to cart successfully.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 max-w-[260px] flex-col"
      >
        <div className="flex items-center">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-r-none"
          >
            <Icons.minus className="size-3" aria-hidden="true" />
            <span className="sr-only">Remove one item</span>
          </Button>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="sr-only">Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    {...field}
                    className="pr-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-l-none"
          >
            <Icons.plus className="size-3" aria-hidden="true" />
            <span className="sr-only">Add one item</span>
          </Button>
        </div>
        <div className="flex gap-4 ">
          <Button
            type="button"
            size="sm"
            aria-label="Buy now"
            className={cn("w-full font-bold ", canBuy && "bg-slate-500")}
          >
            Buy Now
          </Button>
          <Button
            type="submit"
            size="sm"
            variant={canBuy ? "outline" : "default"}
            aria-label="Buy now"
            className="w-full font-semibold"
          >
            Add To Cart
          </Button>
        </div>
      </form>
    </Form>
  );
}
