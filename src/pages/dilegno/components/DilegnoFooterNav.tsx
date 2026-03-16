import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function DilegnoFooterNav() {
  return (
    <ProjectFooterNav
      prevProject={{
        title: "Impostor Futbolero",
        href: "/work/impostor-futbolero"
      }}
      nextProject={{
        title: "ImpoStar",
        href: "/work/impostar"
      }}
      accentColor="group-hover:text-p-dilegno-primary"
      className="bg-[#0A0A0A]"
    />
  );
}
