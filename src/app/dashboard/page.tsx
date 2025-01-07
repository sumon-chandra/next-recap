import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "10,483",
    icon: Users,
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Total Revenue",
    value: "$45,231",
    icon: DollarSign,
    color: "text-green-500 dark:text-green-400",
  },
  {
    title: "Total Orders",
    value: "1,324",
    icon: ShoppingCart,
    color: "text-orange-500 dark:text-orange-400",
  },
  {
    title: "Growth",
    value: "+12.5%",
    icon: TrendingUp,
    color: "text-purple-500 dark:text-purple-400",
  },
];

export default function Dashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
