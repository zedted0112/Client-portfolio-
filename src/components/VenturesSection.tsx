import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { VentureCard } from './VentureCard';
import { VentureData } from '../types';
import { Building2, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VenturesSectionProps {
  ventures: VentureData[];
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ ventures }) => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const activeVenture = ventures[activeMobileIndex] || ventures[0];

  return (
    <section id="ventures" className="py-16 sm:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-[#1e232e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="ACTIVE ENTERPRISES"
          title="What I'm Building Now"
          subtitle="Directing strategic expansion across urban redevelopment, commercial IT parks, and luxury co-living ecosystems."
        />

        {/* --- MOBILE VIEW: ENTERPRISE TABS & COMPACT DECK (Visible on < md) --- */}
        <div className="block md:hidden">
          
          {/* Tab buttons */}
          <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-[#131720] border border-[#222836] rounded-md">
            {ventures.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setActiveMobileIndex(idx)}
                className={`py-2.5 px-3 text-xs font-mono font-semibold rounded-xs transition-all flex items-center justify-center gap-2 ${
                  activeMobileIndex === idx
                    ? 'bg-[#c5a880] text-[#0d0f12] shadow-md'
                    : 'text-[#8c92a0] hover:text-[#f3f2ee]'
                }`}
              >
                {idx === 0 ? <Building2 className="w-3.5 h-3.5" /> : <Home className="w-3.5 h-3.5" />}
                <span className="truncate">{v.name}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenture.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <VentureCard venture={activeVenture} />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* --- DESKTOP GRID (Visible on md+ screens) --- */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>

      </div>
    </section>
  );
};

