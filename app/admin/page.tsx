
import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  ChartNoAxesCombined,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Clock,
  Menu,
  MoreHorizontal,
  Plus,
  Shirt,
} from "lucide-react";

const navigation = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard, active: true },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: ChartNoAxesCombined },
];


function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Processing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Pending: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Shipped: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider ${styles[status] ?? "border-white/10 text-white/50"}`}>
      {status}
    </span>
  );
}

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = createAdminClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Dashboard orders error:", error.message);
  }

  const allOrders = orders ?? [];

  const paidOrders = allOrders.filter(
    (order) => order.payment_status === "paid"
  );

  const productSales = paidOrders.flatMap((order) =>
  (order.items ?? []).map((item: {
    name: string;
    quantity: number;
    amount_total: number;
  }) => ({
    name: item.name,
    quantity: item.quantity,
    revenue: item.amount_total,
  }))
);

  const totalRevenue = paidOrders.reduce(
    (sum, order) => sum + order.total_amount,
    0
  );

  const pendingOrders = allOrders.filter(
    (order) => order.fulfillment_status === "unfulfilled"
  ).length;

  const customers = new Set(
    allOrders
      .map((order) => order.customer_email)
      .filter(Boolean)
  ).size;

  const stats = [
    {
      label: "Total Revenue",
      value: `$${(totalRevenue / 100).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      })}`,
      change: "All paid orders",
      positive: true,
      icon: DollarSign,
    },
    {
      label: "Total Orders",
      value: allOrders.length.toString(),
      change: "All orders",
      positive: true,
      icon: ShoppingBag,
    },
    {
      label: "Pending Orders",
      value: pendingOrders.toString(),
      change: "Needs attention",
      positive: false,
      icon: Clock,
    },
    {
      label: "Customers",
      value: customers.toString(),
      change: "Unique customer emails",
      positive: true,
      icon: Users,
    },
  ];

  const recentOrders = allOrders.slice(0, 5);

  const salesByDay = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));

    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    const revenue = paidOrders
      .filter((order) => {
        const createdAt = new Date(order.created_at);
        return createdAt >= date && createdAt < nextDate;
      })
      .reduce((sum, order) => sum + order.total_amount, 0);

    return {
      label: date.toLocaleDateString("en-US", { weekday: "short" }),
      revenue: revenue / 100,
    };
  });

  const maxSales = Math.max(...salesByDay.map((day) => day.revenue), 1);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-black lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-7 py-8">
            <p className="font-serif text-2xl tracking-wide">DRAMA CLUB</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/40">
              Brand Administration
            </p>
          </div>

          <div className="px-5 py-8">
            <p className="mb-5 px-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Workspace
            </p>

            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-sm px-4 py-3 text-sm transition ${
                      item.active
                        ? "bg-white text-black"
                        : "text-white/50 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={17} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <p className="mb-5 mt-12 px-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Preferences
            </p>

            <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-sm px-4 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              <Settings size={17} />
              Settings
            </Link>
          </div>

          <div className="mt-auto border-t border-white/10 p-6">
            <p className="text-xs text-white/60">Drama Club Brand</p>
            <p className="mt-1 text-[10px] text-white/30">
              Store Administration
            </p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1">

          {/* TOP BAR */}
          <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 md:px-10">
            <div className="flex items-center gap-3">
              <Menu className="text-white/50 lg:hidden" size={21} />
              <div>
                <p className="text-xs text-white/40">Workspace / Overview</p>
                <h1 className="mt-1 text-lg font-medium">Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button aria-label="Search" className="text-white/50 hover:text-white">
                <Search size={19} />
              </button>
              <button aria-label="Notifications" className="text-white/50 hover:text-white">
                <Bell size={19} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs">
                DC
              </div>
            </div>
          </header>

          {/* DASHBOARD BODY */}
          <div className="mx-auto max-w-[1500px] space-y-10 px-5 py-8 md:px-10 md:py-10">

            {/* WELCOME */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Store performance
                </p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                  Ganzito
                </h2>
                <p className="mt-2 text-sm text-white/40">
                  Here's what's happening with your store.
                </p>
              </div>

              <Link
                href="/shop"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                View Store <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-[#0d0d0d] p-6 transition hover:border-white/25"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-white/40">{stat.label}</p>
                      <Icon size={18} className="text-white/40" />
                    </div>

                    <h3 className="mt-6 text-3xl font-medium tracking-tight">
                      {stat.value}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      {stat.positive ? (
                        <ArrowUpRight size={14} className="text-green-400" />
                      ) : (
                        <Clock size={14} className="text-orange-400" />
                      )}
                      <span className={`text-xs ${stat.positive ? "text-green-400" : "text-orange-400"}`}>
                        {stat.change}
                      </span>
                      {stat.positive && (
                        <span className="text-xs text-white/30">vs last month</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SALES OVERVIEW */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="border border-white/10 bg-[#0d0d0d] p-6 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Sales Overview</h3>
                    <p className="mt-1 text-xs text-white/40">
                      Revenue performance
                    </p>
                  </div>

                  <select
                    aria-label="Sales period"
                    defaultValue="7"
                    className="border border-white/10 bg-black px-3 py-2 text-xs text-white/70 outline-none"
                  >
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                  </select>
                </div>

                <div className="mt-10 flex h-52 items-end justify-between gap-3 border-b border-white/10 px-2">
                  {salesByDay.map((day) => (
                    <div
                      key={day.label}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        title={`${day.label}: $${day.revenue.toFixed(2)}`}
                        className="w-full bg-white/80 transition hover:bg-white"
                        style={{
                          height: `${Math.max((day.revenue / maxSales) * 100, 2)}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-[10px] text-white/30">
                  {salesByDay.map((day) => (
                    <span key={day.label}>{day.label}</span>
                  ))}
                </div>

                <p className="mt-6 text-[10px] text-white/30">
                  Illustrative chart — live sales data will be connected later.
                </p>
              </div>

              {/* QUICK ACTIONS */}
              <div className="border border-white/10 bg-[#0d0d0d] p-6">
                <h3 className="text-sm font-medium">Quick Actions</h3>
                <p className="mt-1 text-xs text-white/40">
                  Manage your store
                </p>

                <div className="mt-7 space-y-3">
                  <Link
                    href="/admin/products"
                    className="flex items-center justify-between border border-white/10 p-4 text-xs transition hover:border-white/40"
                  >
                    <span className="flex items-center gap-3">
                      <Plus size={16} /> Add Product
                    </span>
                    <ArrowUpRight size={14} className="text-white/40" />
                  </Link>

                  <Link
                    href="/admin/orders"
                    className="flex items-center justify-between border border-white/10 p-4 text-xs transition hover:border-white/40"
                  >
                    <span className="flex items-center gap-3">
                      <ShoppingBag size={16} /> Manage Orders
                    </span>
                    <ArrowUpRight size={14} className="text-white/40" />
                  </Link>

                  <Link
                    href="/admin/customers"
                    className="flex items-center justify-between border border-white/10 p-4 text-xs transition hover:border-white/40"
                  >
                    <span className="flex items-center gap-3">
                      <Users size={16} /> View Customers
                    </span>
                    <ArrowUpRight size={14} className="text-white/40" />
                  </Link>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[10px] uppercase tracking-widest text-white/30">
                    Store status
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="text-xs text-white/60">
                      Development mode
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT ORDERS */}
            <div id="orders" className="border border-white/10 bg-[#0d0d0d]">
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div>
                  <h3 className="text-sm font-medium">Recent Orders</h3>
                  <p className="mt-1 text-xs text-white/40">
                    Latest customer purchases
                  </p>
                </div>

                <Link
                  href="/admin/orders"
                  className="text-[10px] uppercase tracking-widest text-white/50 transition hover:text-white"
                >
                  View All →
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/30">
                      <th className="px-6 py-4 font-normal">Order</th>
                      <th className="px-6 py-4 font-normal">Customer</th>
                      <th className="px-6 py-4 font-normal">Date</th>
                      <th className="px-6 py-4 font-normal">Total</th>
                      <th className="px-6 py-4 font-normal">Status</th>
                      <th className="px-6 py-4 font-normal"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentOrders.map((order) => {
                      const status =
                        order.fulfillment_status === "unfulfilled"
                          ? "Pending"
                          : order.fulfillment_status === "processing"
                          ? "Processing"
                          : order.fulfillment_status === "shipped"
                          ? "Shipped"
                          : order.fulfillment_status === "delivered"
                          ? "Delivered"
                          : order.fulfillment_status;

                      return (
                        <tr
                          key={order.id}
                          className="border-b border-white/5 text-xs last:border-0 hover:bg-white/[0.02]"
                        >
                          <td className="px-6 py-5 font-medium">{order.order_number}</td>
                          <td className="px-6 py-5 text-white/60">
                            {order.customer_name ?? "Guest"}
                          </td>
                          <td className="px-6 py-5 text-white/40">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-5">
                            ${(order.total_amount / 100).toFixed(2)}
                          </td>
                          <td className="px-6 py-5">
                            <StatusBadge status={status} />
                          </td>
                          <td className="px-6 py-5 text-right">
                            <MoreHorizontal size={17} className="text-white/40" />
                          </td>
                        </tr>
                      );
                    })}
                    {recentOrders.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-white/40">
                        No orders found yet.
                      </td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* TOP PRODUCTS */}
            <div className="border border-white/10 bg-[#0d0d0d]">
              <div className="border-b border-white/10 p-6">
                <h3 className="text-sm font-medium">Top Selling Products</h3>
                <p className="mt-1 text-xs text-white/40">
                  Best performing products
                </p>
              </div>

            <div className="px-6 py-10 text-center">
              <Package
                size={24}
                className="mx-auto text-white/30"
              />
              <p className="mt-3 text-xs text-white/50">
                Product sales data will appear here.
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                Complete orders will populate this section.
              </p>
            </div>
            </div>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                Drama Club Brand · Administration
              </p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
