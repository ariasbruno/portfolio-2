import { rcCommander } from '@/i18n/es/projects/rc-commander';
import { FormattedText } from '@/components/ui/formatted-text';

export const RCCommanderOverview = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-linear-to-r from-[#ef4444] to-red-900 bg-clip-text text-transparent">
              <FormattedText text={rcCommander.detail?.challenge?.title || ''} />
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed font-light">
            <FormattedText text={rcCommander.detail?.challenge?.text || ''} />
          </p>
        </div>

        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-linear-to-r from-[#ef4444] to-red-900 bg-clip-text text-transparent">
              <FormattedText text={rcCommander.detail?.solution?.title || ''} />
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed font-light">
            <FormattedText text={rcCommander.detail?.solution?.text || ''} />
          </p>
        </div>
      </div>
    </section>
  );
};
