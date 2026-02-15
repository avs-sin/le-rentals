import type { RentalItem } from "@/lib/types";

export function PricingTable({ items }: { items: RentalItem[] }) {
  const pricedItems = items.filter(
    (item) => item.pricing?.daily || item.pricing?.weekly || item.pricing?.monthly
  );

  if (pricedItems.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-brand-accent">
            <th className="px-4 py-3 text-left font-semibold text-brand-text">Item</th>
            <th className="px-4 py-3 text-right font-semibold text-brand-text">Daily</th>
            <th className="px-4 py-3 text-right font-semibold text-brand-text">Weekly</th>
            <th className="px-4 py-3 text-right font-semibold text-brand-text">Monthly</th>
          </tr>
        </thead>
        <tbody>
          {pricedItems.map((item, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="px-4 py-3 font-medium text-brand-text">{item.name}</td>
              <td className="px-4 py-3 text-right">
                {item.pricing?.daily ? `$${item.pricing.daily}` : "—"}
              </td>
              <td className="px-4 py-3 text-right">
                {item.pricing?.weekly ? `$${item.pricing.weekly}` : "—"}
              </td>
              <td className="px-4 py-3 text-right">
                {item.pricing?.monthly ? `$${item.pricing.monthly}` : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
