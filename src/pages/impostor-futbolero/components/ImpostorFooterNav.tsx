
import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function ImpostorFooterNav() {
  return (
    <ProjectFooterNav
      prevProject={{
        title: "Torneitos",
        href: "/work/torneitos"
      }}
      nextProject={{
        title: "Dilegno",
        href: "/work/dilegno"
      }}
      accentColor="group-hover:text-[#13ae4c]"
      className="bg-brand-dark"
    />
  );
}
