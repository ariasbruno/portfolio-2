
import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function RCCommanderFooterNav() {
  return (
    <ProjectFooterNav
      prevProject={{
        title: "ImpoStar",
        href: "/work/impostar"
      }}
      nextProject={{
        title: "Rincón Casero",
        href: "/work/rincon-casero"
      }}
      accentColor="group-hover:text-[#ef4444]"
      className="bg-black"
    />
  );
}
