import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { MoreVertical } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ProductModal } from "@/components/ProductModal/ProductModal";
import { DialogContext } from "@/contexts/DialogContext/DialogContext";
import { Product } from "@/lib/product/schema";

export type ProductPopoverProps = {
  id: Product["id"];
  position?: "BOTTOM" | "TOP";
};

export const ProductPopover = ({
  id,
  position = "BOTTOM",
}: ProductPopoverProps) => {
  const { "popover-product": popoverProduct } = React.useContext(DialogContext);

  return (
    <Popover className="sm:flex sm:items-center sm:justify-end sm:relative">
      <Popover.Button
        className={twMerge(
          "sm:duration-standard sm:ease-standard sm:flex sm:h-fit sm:text-white sm:transition-colors sm:w-fit",
          "sm:hover:text-main-purple",
        )}
        onClick={() => popoverProduct.setOpen(true)}
      >
        <MoreVertical className="sm:h-6 sm:w-6" />
      </Popover.Button>

      {popoverProduct.open === true && (
        <Transition.Child
          as={React.Fragment}
          enter={twMerge(
            "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-all",
          )}
          enterFrom={twMerge("sm:opacity-0 sm:scale-75")}
          enterTo={twMerge("sm:opacity-100 sm:scale-100")}
          leave={twMerge(
            "sm:duration-emphasized-decelerate sm:ease-emphasized-decelerate sm:transition-all",
          )}
          leaveFrom={twMerge("sm:opacity-100 sm:scale-100")}
          leaveTo={twMerge("sm:opacity-0 sm:scale-75")}
        >
          <Popover.Panel
            className={twMerge(
              "sm:absolute sm:bg-very-dark-grey-dark-bg sm:flex sm:flex-col sm:gap-4 sm:rounded sm:p-4 sm:z-10",
              position === "BOTTOM" && "sm:-bottom-2 sm:translate-y-full",
              position === "TOP" && "sm:-top-2 sm:-translate-y-full",
            )}
            static
          >
            <ProductModal.DeleteProduct id={id} />
          </Popover.Panel>
        </Transition.Child>
      )}
    </Popover>
  );
};
