import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function TorneitosFooterNav() {
  return (
    <ProjectFooterNav
      prevProject={{
        title: "Rincón Casero",
        href: "/work/rincon-casero"
      }}
      nextProject={{
        title: "Impostor Futbolero",
        href: "/work/impostor-futbolero"
      }}
      accentColor="group-hover:text-white"
      className="bg-[#050505]"
    />
  );
}
