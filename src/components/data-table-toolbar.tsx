
"use client";

import type { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, X } from "lucide-react";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { allHobbies, places } from "@/lib/initial-data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onAddNew: () => void;
}

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const placeOptions = places.map(place => ({ label: place, value: place }));
const hobbyOptions = allHobbies.map(hobby => ({ label: hobby, value: hobby }));


export function DataTableToolbar<TData>({
  table,
  onAddNew,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex flex-1 items-center space-x-2 flex-wrap gap-2">
        <Input
          placeholder="Filter by name, email, phone, hobbies, place, gender..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-10 w-full sm:w-[250px] lg:w-[350px] placeholder:text-muted-foreground"
        />
        {table.getColumn("gender") && (
          <DataTableFacetedFilter
            column={table.getColumn("gender")}
            title="Gender"
            options={genderOptions}
          />
        )}
        {table.getColumn("place") && (
          <DataTableFacetedFilter
            column={table.getColumn("place")}
            title="Place"
            options={placeOptions}
          />
        )}
        {table.getColumn("hobbies") && (
           <DataTableFacetedFilter
            column={table.getColumn("hobbies")}
            title="Hobbies"
            options={hobbyOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-10 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <DataTableViewOptions table={table} />
        <Button
          variant="outline"
          size="sm"
          className="h-10 gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onAddNew}
        >
          <PlusCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Add New Entry</span>
        </Button>
      </div>
    </div>
  );
}
