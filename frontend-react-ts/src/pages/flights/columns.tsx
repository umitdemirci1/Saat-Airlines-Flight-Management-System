import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import EditModal from "@/components/edit-modal/edit-modal";
import { Flight } from "@/interfaces/flights";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Flight>[] = [
  {
    accessorKey: "flightNumber",
    header: "Flight No",
  },
  {
    accessorKey: "departureAirport",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Departure Airport
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "arrivalAirport",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Arrival Airport
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "departureTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Departure Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("departureTime"));
      const formattedTime = date.toLocaleTimeString();
      const formattedDate = date.toLocaleDateString();
      return (
        <div className="text-right font-medium">
          {formattedDate + " " + formattedTime}
        </div>
      );
    },
  },
  {
    accessorKey: "arrivalTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Arrival Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("arrivalTime"));
      const formattedTime = date.toLocaleTimeString();
      const formattedDate = date.toLocaleDateString();
      return (
        <div className="text-right font-medium">
          {formattedDate + " " + formattedTime}
        </div>
      );
    },
  },
  {
    accessorKey: "flightStatus",
    header: "Status",
  },
  {
    accessorKey: "distanceInMiles",
    header: "Distance",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "capacity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Capacity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formattedTime = date.toLocaleTimeString();
      const formattedDate = date.toLocaleDateString();
      return (
        <div className="text-right font-medium">
          {formattedDate + " " + formattedTime}
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      const formattedTime = date.toLocaleTimeString();
      const formattedDate = date.toLocaleDateString();
      return (
        <div className="text-right font-medium">
          {formattedDate + " " + formattedTime}
        </div>
      );
    },
  },
  {
    accessorKey: "isRemoved",
    header: "Is Removed",
  },
  {
    accessorKey: "notification",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Notification
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original;
      const [openModal, setOpenModal] = useState<boolean>(false);
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {openModal === true ? (
            <EditModal
              setOpenModal={setOpenModal}
              openModal={openModal}
              flight={flight}
            />
          ) : (
            ""
          )}
        </div>
      );
    },
  },
];
