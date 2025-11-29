import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

export default function RiskSlider() {
  const [risk, setRisk] = useState(50);

  const getRiskLevel = () => {
    if (risk < 33) return { label: 'Нисък риск', color: '#264653', bgColor: '#264653', icon: CheckCircle };
    if (risk < 67) return { label: 'Среден риск', color: '#F4A261', bgColor: '#F4A261', icon: AlertCircle };
    return { label: 'Висок риск', color: '#E76F51', bgColor: '#E76F51', icon: AlertTriangle };
  };

  const riskLevel = getRiskLevel();
  const RiskIcon = riskLevel.icon;

  return (
    <div className="w-full max-w-md">
      <motion.div
        className="bg-white/30 dark:bg-[#242938]/30 backdrop-blur-xl border border-white/50 dark:border-white/20 rounded-3xl p-8 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Risk level display */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              key={riskLevel.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${riskLevel.bgColor}15` }}
            >
              <RiskIcon size={28} style={{ color: riskLevel.color }} />
            </motion.div>
            <div>
              <motion.div
                key={riskLevel.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#264653] dark:text-[#F2E9D8]"
              >
                {riskLevel.label}
              </motion.div>
              <div style={{ fontSize: '0.875rem' }} className="text-[#264653]/60 dark:text-[#F2E9D8]/60">
                Текуща оценка
              </div>
            </div>
          </div>
          <motion.div
            key={risk}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="tabular-nums"
            style={{ fontSize: '2rem', color: riskLevel.color }}
          >
            {risk}%
          </motion.div>
        </div>

        {/* Slider */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none cursor-pointer slider-custom"
            style={{
              background: `linear-gradient(to right, 
                #264653 0%, 
                #264653 33%, 
                #F4A261 33%, 
                #F4A261 67%, 
                #E76F51 67%, 
                #E76F51 100%)`
            }}
          />
        </div>

        {/* Risk bar visualization */}
        <div className="space-y-2">
          {[
            { label: 'Нисък', value: 33, color: '#264653' },
            { label: 'Среден', value: 67, color: '#F4A261' },
            { label: 'Висок', value: 100, color: '#E76F51' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div style={{ fontSize: '0.875rem' }} className="w-16 text-[#264653]/70 dark:text-[#F2E9D8]/70">
                {item.label}
              </div>
              <div className="flex-1 h-2 bg-white/30 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  animate={{
                    width: risk >= item.value - 33 ? `${Math.min(100, Math.max(0, (risk - (item.value - 33)) / 33 * 100))}%` : '0%'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Demo label */}
        <div style={{ fontSize: '0.75rem' }} className="text-center text-[#264653]/50 dark:text-[#F2E9D8]/50 mt-6">
          Демо оценка • Преместете плъзгача
        </div>
      </motion.div>

      <style>{`
        .slider-custom::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 4px ${riskLevel.bgColor}40;
          transition: box-shadow 0.3s ease;
        }
        .slider-custom::-webkit-slider-thumb:hover {
          box-shadow: 0 6px 16px rgba(0,0,0,0.2), 0 0 0 6px ${riskLevel.bgColor}50;
        }
        .slider-custom::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 4px ${riskLevel.bgColor}40;
          transition: box-shadow 0.3s ease;
        }
        .slider-custom::-moz-range-thumb:hover {
          box-shadow: 0 6px 16px rgba(0,0,0,0.2), 0 0 0 6px ${riskLevel.bgColor}50;
        }
      `}</style>
    </div>
  );
}
