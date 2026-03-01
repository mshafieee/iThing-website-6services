'use client';

function IHotelPreview({ ar }) {
  const rooms = [
    'bg-emerald-500','bg-emerald-500','bg-amber-400','bg-emerald-500',
    'bg-emerald-500','bg-slate-600','bg-emerald-500','bg-amber-400',
    'bg-emerald-500','bg-emerald-500','bg-emerald-500','bg-slate-600',
  ];
  const metrics = ar
    ? [['الإشغال','83%','text-emerald-400'],['الحرارة','22.4°C','text-amber-400'],['الطاقة','-40%','text-blue-300']]
    : [['Occupancy','83%','text-emerald-400'],['Avg Temp','22.4°C','text-amber-400'],['Energy','-40%','text-blue-300']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-400 font-semibold text-[10px]">{ar ? 'لوحة الغرف' : 'Room Dashboard'}</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span className="text-emerald-400">{ar ? 'مباشر' : 'LIVE'}</span>
        </span>
      </div>
      <div className="grid grid-cols-6 gap-1 mb-2">
        {rooms.map((c, i) => (
          <div key={i} className={`${c} rounded h-5 opacity-90 flex items-center justify-center text-[7px] text-white font-bold`}>
            {String(101 + i).slice(-2)}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IBmsPreview({ ar }) {
  const bars = [65, 82, 70, 45, 90, 55, 38, 72];
  const metrics = ar
    ? [['التكييف','نشط','text-emerald-400'],['الدخول','42 داخل','text-blue-300'],['التشغيل','99.5%','text-emerald-400']]
    : [['HVAC','Active','text-emerald-400'],['Access','42 in','text-blue-300'],['Uptime','99.5%','text-emerald-400']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-emerald-400 font-semibold text-[10px]">{ar ? 'مراقبة الطاقة' : 'Energy Monitor'}</span>
        <span className="text-emerald-400 font-semibold">{ar ? 'وفورات 35%' : '35% saved'}</span>
      </div>
      <div className="flex items-end gap-1 h-12 mb-2 px-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div className="rounded-sm w-full" style={{ height: `${h}%`, background: i === 4 ? '#059669' : '#064e3b' }} />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IFactoryPreview({ ar }) {
  const machines = [
    { id:'M-01', pct: 92, color:'#22c55e' },{ id:'M-02', pct: 88, color:'#22c55e' },
    { id:'M-03', pct: 74, color:'#f59e0b' },{ id:'M-04', pct: 95, color:'#22c55e' },
    { id:'M-05', pct:  0, color:'#ef4444' },{ id:'M-06', pct: 91, color:'#22c55e' },
  ];
  const metrics = ar
    ? [['التوقف','-42%','text-emerald-400'],['تنبيهات','2 تحذير','text-amber-400'],['الإنتاج','2.5×','text-blue-300']]
    : [['Downtime','-42%','text-emerald-400'],['Alerts','2 warns','text-amber-400'],['Output','2.5×','text-blue-300']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-amber-400 font-semibold text-[10px]">{ar ? 'خط الإنتاج' : 'Production Line'}</span>
        <span className="text-amber-400 font-semibold">{ar ? 'كفاءة 87%' : 'OEE 87%'}</span>
      </div>
      <div className="space-y-1.5 mb-2">
        {machines.map(m => (
          <div key={m.id} className="flex items-center gap-2">
            <span className="w-7 text-slate-500">{m.id}</span>
            <div className="flex-1 bg-white/10 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ width: `${m.pct}%`, background: m.color }} />
            </div>
            <span style={{ color: m.color }} className="w-10 text-right font-bold">
              {m.pct > 0 ? `${m.pct}%` : (ar ? 'متوقف' : 'OFF')}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IAgrixPreview({ ar }) {
  const params = ar
    ? [{ label:'الرطوبة',pct:68,color:'#22c55e'},{ label:'الحرارة',pct:48,color:'#f59e0b'},{ label:'pH',pct:65,color:'#3b82f6'},{ label:'EC',pct:42,color:'#10b981'}]
    : [{ label:'Moisture',pct:68,color:'#22c55e'},{ label:'Temp',pct:48,color:'#f59e0b'},{ label:'pH',pct:65,color:'#3b82f6'},{ label:'EC',pct:42,color:'#10b981'}];
  const metrics = ar
    ? [['المياه','-45%','text-blue-300'],['المحصول','+30%','text-green-400'],['الحقول','14 نشط','text-emerald-400']]
    : [['Water','-45%','text-blue-300'],['Yield','+30%','text-green-400'],['Fields','14 live','text-emerald-400']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-green-400 font-semibold text-[10px]">{ar ? 'مستشعرات الحقل' : 'Field Sensors'}</span>
        <span className="text-blue-300 font-semibold">{ar ? 'الري نشط' : 'Irrigation ON'}</span>
      </div>
      <div className="space-y-1.5 mb-2">
        {params.map(p => (
          <div key={p.label} className="flex items-center gap-2">
            <span className="w-12 text-slate-500">{p.label}</span>
            <div className="flex-1 bg-white/10 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
            </div>
            <span style={{ color: p.color }} className="w-6 text-right font-bold">{p.pct}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IRtlsPreview({ ar }) {
  const dots = [
    {x:22,y:28,c:'#22c55e'},{x:62,y:48,c:'#22c55e'},{x:44,y:68,c:'#f59e0b'},
    {x:78,y:22,c:'#22c55e'},{x:14,y:62,c:'#3b82f6'},{x:55,y:78,c:'#22c55e'},
  ];
  const metrics = ar
    ? [['نشط','48 شاحنة','text-emerald-400'],['التأخير','<1ث','text-violet-300'],['الوقود','-25%','text-blue-300']]
    : [['Active','48 trucks','text-emerald-400'],['Latency','<1s','text-violet-300'],['Fuel','-25%','text-blue-300']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-violet-400 font-semibold text-[10px]">{ar ? 'تتبع الأسطول' : 'Fleet Tracking'}</span>
        <span className="text-violet-400 font-semibold">{ar ? '+50K أصل' : '50K+ assets'}</span>
      </div>
      <div className="relative bg-[#0d2040] rounded-lg h-14 mb-2 overflow-hidden">
        {[20,40,60,80].map(x => <div key={x} className="absolute top-0 bottom-0 border-l border-white/5" style={{ left:`${x}%` }} />)}
        {[33,66].map(y => <div key={y} className="absolute left-0 right-0 border-t border-white/5" style={{ top:`${y}%` }} />)}
        {dots.map((d,i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full shadow-md"
            style={{ left:`${d.x}%`, top:`${d.y}%`, transform:'translate(-50%,-50%)', background:d.c }} />
        ))}
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IMedicalPreview({ ar }) {
  const ecgPath = 'M0,18 L20,18 L25,18 L28,4 L32,30 L36,18 L56,18 L61,18 L64,4 L68,30 L72,18 L100,18';
  const metrics = ar
    ? [['النبض','72 نبضة','text-red-400'],['SpO₂','98%','text-blue-300'],['أصول','-70%','text-emerald-400']]
    : [['HR','72 bpm','text-red-400'],['SpO₂','98%','text-blue-300'],['Assets','-70%','text-emerald-400']];
  return (
    <div className="bg-[#0a1628] rounded-xl p-3 font-mono text-[9px] select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-red-400 font-semibold text-[10px]">{ar ? 'المراقبة السريرية' : 'Clinical Monitor'}</span>
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
          {ar ? 'مباشر' : 'LIVE'}
        </span>
      </div>
      <div className="bg-[#0d2040] rounded-lg px-3 py-2 mb-2">
        <div className="text-slate-500 mb-1">{ar ? 'غرفة 204 — العلامات الحيوية' : 'Room 204 — Patient Vitals'}</div>
        <svg viewBox="0 0 100 36" className="w-full h-8" preserveAspectRatio="none">
          <polyline points={ecgPath} fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex gap-1.5">
        {metrics.map(([l,v,c]) => (
          <div key={l} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-slate-500 mb-0.5">{l}</div>
            <div className={`${c} font-bold text-[10px]`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PREVIEWS = { ihotel:IHotelPreview, ibms:IBmsPreview, ifactory:IFactoryPreview, iagrix:IAgrixPreview, irtls:IRtlsPreview, imedical:IMedicalPreview };

export default function DashboardPreview({ slug, locale }) {
  const Preview = PREVIEWS[slug];
  if (!Preview) return null;
  return <Preview ar={locale === 'ar'} />;
}
