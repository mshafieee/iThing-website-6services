import { Link } from '../../lib/navigation-helpers';
import { ChevronRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const p = product;
  return (
    <Link href={`/solutions/${p.slug}`}
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200 border-t-4"
      style={{ borderTopColor: p.color }}>
      <div className="flex items-start justify-between mb-4">
        {p.image ? (
          <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-lg" />
        ) : (
          <span className="text-4xl">{p.icon}</span>
        )}
        <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-xl font-black text-gray-900 mb-1">{p.name}</h3>
      <p className="text-sm font-semibold mb-3" style={{ color: p.color }}>{p.tagline}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{p.shortDesc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stats.slice(0, 2).map(s => (
          <span key={s.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold"
            style={{ background: p.color + '14', color: p.color }}>
            {s.value} {s.label}
          </span>
        ))}
      </div>
    </Link>
  );
}
