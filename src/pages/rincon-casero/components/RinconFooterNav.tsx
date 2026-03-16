import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function RinconFooterNav() {
  return (
    <ProjectFooterNav
      prevProject={{
        title: "RC Commander",
        href: "/work/rc-commander"
      }}
      nextProject={{
        title: "Torneitos",
        href: "/work/torneitos"
      }}
      accentColor="group-hover:text-p-rincon-primary-foreground"
      className="bg-[#1a1a1a]"
    />
  );
}
