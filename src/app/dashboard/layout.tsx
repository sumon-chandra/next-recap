import { ReactNode } from "react";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";

interface Props {
  children: ReactNode;
  users: ReactNode;
  orders: ReactNode;
}

export default function DashboardLayout({ children, orders, users }: Props) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-muted/50 p-6">
          {children}
          {users}
          {orders}
        </main>
      </div>
    </div>
  );
}
