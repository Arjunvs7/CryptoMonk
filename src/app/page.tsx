"use client";

import * as React from "react";
import { getColumns } from "./columns";
import { DataTable } from "@/components/data-table";
import { initialData } from "@/lib/initial-data";
import type { UserData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { DataForm } from "@/components/data-form";
import { DeleteConfirmationDialog } from "@/components/delete-confirmation-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DataManagerPage() {
  const [data, setData] = React.useState<UserData[]>(initialData);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<UserData | undefined>(undefined);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [userToDelete, setUserToDelete] = React.useState<string | null>(null);
  const { toast } = useToast();

  const handleAddNew = () => {
    setEditingUser(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (user: UserData) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteRequest = (userId: string) => {
    setUserToDelete(userId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      setData((prevData) => prevData.filter((user) => user.id !== userToDelete));
      toast({
        title: "Success!",
        description: "User data has been deleted.",
        variant: "default",
      });
    }
    setIsDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const handleFormSubmit = (formData: UserData) => {
    if (editingUser) {
      // Edit existing user
      setData((prevData) =>
        prevData.map((user) => (user.id === editingUser.id ? { ...user, ...formData } : user))
      );
      toast({
        title: "Success!",
        description: "User data has been updated.",
      });
    } else {
      // Add new user
      const newUser = { ...formData, id: Date.now().toString() }; // Ensure unique ID
      setData((prevData) => [newUser, ...prevData]);
      toast({
        title: "Success!",
        description: "New user has been added.",
      });
    }
    setIsFormOpen(false);
    setEditingUser(undefined);
  };
  
  const columns = React.useMemo(() => getColumns(handleEdit, handleDeleteRequest), []);

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">React Data Manager</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A powerful and intuitive interface for managing your data.
        </p>
      </header>
      
      <DataTable
        columns={columns}
        data={data}
        onAddNew={handleAddNew}
        onEdit={handleEdit} // Pass down, but handled by columns
        onDelete={handleDeleteRequest} // Pass down, but handled by columns
      />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{editingUser ? "Edit User" : "Add New User"}</DialogTitle>
            <DialogDescription>
              {editingUser ? "Modify the details below." : "Fill in the details to add a new user."}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] p-6">
            <DataForm
              onSubmit={handleFormSubmit}
              initialData={editingUser}
              onCancel={() => setIsFormOpen(false)}
            />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <DeleteConfirmationDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        itemName={data.find(u => u.id === userToDelete)?.name || "this user"}
      />
    </div>
  );
}
