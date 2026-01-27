import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import FadeIn from "../common/FadeIn";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeIn delay={100}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-gray-500 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-gray-900 mr-2 animate-pulse"></span>
              New: School/University ERP System
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Future-Proof Your <br />
              <span className="bg-gradient-to-r from-amber-800 to-yellow-200 bg-clip-text text-transparent">Digital Infrastructure</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              To become a trusted global technology partner by creating innovative digital solutions that drive growth, efficiency, and long‑term value.

            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button className="bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-900 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg shadow-gray-900/30 group text-sm sm:text-base">
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
            </div>

            {/* Social Proof / Trust Bar */}
            <div className="border-t border-gray-100 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-medium">TRUSTED BY INNOVATORS AT</p>
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 opacity-50 grayscale mix-blend-multiply">
                 {/* Placeholders for logos */}
                 <span className="text-base sm:text-lg md:text-xl font-bold font-serif">Morisika</span>
                 <span className="text-base sm:text-lg md:text-xl font-bold font-sans">HBTU</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
             {/* Abstract Graphic Representation */}
             <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-4 sm:p-6 shadow-2xl">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-4 sm:mb-6 border-b border-gray-200/50 pb-3 sm:pb-4">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-mono">system_status: active</div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle2 size={16} className="sm:hidden" />
                        <CheckCircle2 size={20} className="hidden sm:block" />
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-3/4 mb-1.5 sm:mb-2"></div>
                        <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-1/2"></div>
                      </div>
                      <span className="text-green-600 font-bold text-xs sm:text-sm">+24%</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                         <Loader2 size={16} className="animate-spin sm:hidden" />
                         <Loader2 size={20} className="animate-spin hidden sm:block" />
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-full mb-1.5 sm:mb-2"></div>
                        <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-2/3"></div>
                      </div>
                      <span className="text-blue-600 font-bold text-xs sm:text-sm">Processing</span>
                    </div>
                     <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-gray-900">99.9%</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-gray-900">50ms</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Latency</div>
                            </div>
                        </div>
                     </div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg text-green-600">
                            <CheckCircle2 size={16} className="sm:hidden" />
                            <CheckCircle2 size={20} className="hidden sm:block" />
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-gray-900">Deployment</div>
                            <div className="text-[10px] sm:text-xs text-gray-500">Successful</div>
                        </div>
                    </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default Hero;
