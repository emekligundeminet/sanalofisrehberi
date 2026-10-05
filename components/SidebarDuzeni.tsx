import { Icindekiler, type IcindekilerOgesi } from "./Icindekiler";

export function SidebarDuzeni({
  baslik,
  ogeler,
  not,
  children,
}: {
  baslik: string;
  ogeler: IcindekilerOgesi[];
  not?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="kap pt-6 md:pt-8 lg:grid lg:grid-cols-[minmax(0,760px)_280px] lg:justify-between lg:gap-10">
      <div className="min-w-0">{children}</div>
      <aside className="hidden lg:block">
        <div className="sticky top-6 space-y-6">
          <Icindekiler baslik={baslik} ogeler={ogeler} />
          {not && <p className="rounded-xl border border-cizgi bg-yuzey p-4 text-[13px] leading-relaxed text-soluk">{not}</p>}
        </div>
      </aside>
    </div>
  );
}
