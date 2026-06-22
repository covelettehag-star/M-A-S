"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function LostRevenueCalculator() {
  const [newLeads, setNewLeads] = useState(250);
  const [currentCustomers, setCurrentCustomers] = useState(500);
  const [agedLeads, setAgedLeads] = useState(2000);

  const { missed, total } = useMemo(() => {
    const missedNewLeadRevenue = newLeads * 0.05 * 2500;
    const missedUpsellRevenue = currentCustomers * 0.05 * 1000;
    const missedAgedLeadRevenue = agedLeads * 0.03 * 500;
    const totalLostRevenue = missedNewLeadRevenue + missedUpsellRevenue + missedAgedLeadRevenue;
    return {
      missed: { newLead: missedNewLeadRevenue, upsell: missedUpsellRevenue, aged: missedAgedLeadRevenue },
      total: totalLostRevenue,
    };
  }, [newLeads, currentCustomers, agedLeads]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Calculate Your{" "}
            <span className="text-shimmer">Lost Revenue</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-cream-200/70 sm:text-lg">
            See how much revenue your business could be losing from missed leads, slow follow-ups, and inactive customers.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Sliders card */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <SliderField
              label="New leads per month"
              value={newLeads}
              min={10}
              max={5000}
              step={10}
              onChange={setNewLeads}
              estimate={fmt(missed.newLead)}
            />
            <SliderField
              label="Current customers to upsell"
              value={currentCustomers}
              min={10}
              max={5000}
              step={10}
              onChange={setCurrentCustomers}
              estimate={fmt(missed.upsell)}
            />
            <SliderField
              label="Aged leads to reactivate"
              value={agedLeads}
              min={50}
              max={50000}
              step={50}
              onChange={setAgedLeads}
              estimate={fmt(missed.aged)}
            />
          </div>

          {/* Result card */}
          <div className="flex flex-col gap-4">
            <div className="gradient-border flex flex-1 flex-col items-center justify-center rounded-2xl bg-ink-950/80 p-8 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-champagne-400/80">
                Estimated revenue you may be missing
              </p>
              <p className="mb-6 text-5xl font-bold text-shimmer sm:text-6xl">
                {fmt(total)}
              </p>
              <p className="mb-8 text-sm leading-relaxed text-cream-200/60">
                AI automation can help capture more leads, follow up faster, reactivate aged contacts, and convert more opportunities.
              </p>
              <Link
                href="/#contact"
                className="btn-gold w-full justify-center text-center"
              >
                Book a Free AI Audit
              </Link>
            </div>

            <p className="text-center text-xs leading-relaxed text-cream-200/40">
              This is an estimate based on common lead response, upsell, and reactivation opportunities. Actual results vary by business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  estimate,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  estimate: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-cream-200/80">{label}</span>
        <span className="rounded-lg border border-champagne-500/20 bg-ink-900/60 px-3 py-1 text-sm font-semibold text-champagne-300">
          {value.toLocaleString()}
        </span>
      </div>
      <div className="relative mb-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="calculator-slider w-full"
          style={
            {
              "--pct": `${pct}%`,
            } as React.CSSProperties
          }
        />
      </div>
      <p className="text-right text-xs text-cream-200/40">
        Potential missed: <span className="text-champagne-400">{estimate}</span>
      </p>
    </div>
  );
}
