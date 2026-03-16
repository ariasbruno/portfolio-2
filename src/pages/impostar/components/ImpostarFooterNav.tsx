
import { ProjectFooterNav } from '@/components/ProjectFooterNav';

export function ImpostarFooterNav() {
  return (
    <ProjectFooterNav
      className="!bg-black"
      prevProject={{
        title: "Impostor Futbolero",
        href: "/work/impostor-futbolero"
      }}
      nextProject={{
        title: "RC Commander",
        href: "/work/rc-commander"
      }}
      accentColor="group-hover:text-cyan-400"
    />
  );
}
