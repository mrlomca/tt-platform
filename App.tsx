import React, { useState } from 'react';
import { Toggle } from './components/Toggle';
import { 
  IconReuse, 
  IconLanguage, 
  IconDisclosure, 
  IconAI, 
  IconCopyright,
  IconEarn,
  IconChevronLeft,
  IconClose,
  IconChevronRight
} from './components/Icons';

// BackgroundContent (The content behind the modal)
const BackgroundContent = () => (
  <div className="flex-1 flex flex-col px-4 pt-2">
    {/* Header */}
    <div className="flex items-center py-2">
      <button className="p-1 -ml-2">
        <IconChevronLeft />
      </button>
    </div>

    {/* Content Input Area */}
    <div className="flex mt-4 gap-4">
      <div className="flex-1 flex flex-col gap-8 pt-2">
        <p className="text-[15px] text-gray-800">clothes haul day</p>
        <div className="space-y-1">
          <p className="text-[15px] font-medium text-gray-900">#clothes #trend #explore</p>
        </div>
      </div>

      {/* Preview Image */}
      <div className="relative w-[110px] h-[150px] rounded-lg overflow-hidden bg-gray-100 shrink-0">
        <img 
          src="https://i.ibb.co/r2g4sbyG/video-cover.png" 
          alt="Preview" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-2 left-2 text-white text-xs font-medium drop-shadow-md">Preview</div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
          <span className="text-white text-[11px] font-medium">Edit cover</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  // State for toggles
  const [reuseContent, setReuseContent] = useState(true);
  const [aiContent, setAiContent] = useState(false);
  const [checkCopyright, setCheckCopyright] = useState(false);
  const [watchEarn, setWatchEarn] = useState(false);

  // State for bottom sheet visibility (always true for the clone view)
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  return (
    <div className="w-full h-full bg-white flex flex-col relative font-sans">
      <BackgroundContent />

      {/* Dimmed Overlay */}
      {isSheetOpen && (
        <div 
          className="absolute inset-0 bg-black/40 z-10 transition-opacity"
          onClick={() => setIsSheetOpen(false)}
        ></div>
      )}

      {/* Bottom Sheet */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-white z-20 rounded-t-[12px] overflow-hidden transition-transform duration-300 ease-out transform ${
          isSheetOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 relative border-b border-gray-100/50">
          <div className="absolute left-0 right-0 text-center pointer-events-none">
            <span className="text-[17px] font-bold text-black">More options</span>
          </div>
          <div className="flex-1"></div>
          <button onClick={() => setIsSheetOpen(false)} className="p-1 z-10">
            <IconClose />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full max-h-[70vh] pb-10 no-scrollbar">
          
          {/* Section 1 */}
          <div className="px-4 pt-2 pb-4">
             <div className="flex items-start py-3">
               <div className="mt-0.5 mr-3 shrink-0">
                 <IconReuse />
               </div>
               <div className="flex-1 mr-4">
                 <h3 className="text-[15px] font-medium text-black leading-tight mb-1">Allow reuse of content</h3>
                 <p className="text-[12px] text-gray-500 leading-snug">Duet, Stitch, stickers, and add to Story</p>
               </div>
               <div className="mt-1 shrink-0">
                 <Toggle checked={reuseContent} onChange={setReuseContent} />
               </div>
             </div>
          </div>

          {/* Divider Section */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
             <h4 className="text-[13px] text-gray-500 font-normal">Advanced settings</h4>
          </div>

          {/* Section 2 */}
          <div className="px-4 pb-8">
             
             {/* Select video language */}
             <div className="flex items-center py-4 active:bg-gray-50 transition-colors">
               <div className="mr-3 shrink-0 text-gray-900">
                 <IconLanguage />
               </div>
               <div className="flex-1 mr-2">
                 <h3 className="text-[15px] font-medium text-black leading-tight mb-1">Select video language</h3>
                 <p className="text-[12px] text-gray-500 leading-snug w-[95%]">Videos in supported languages will show auto-generated captions</p>
               </div>
               <div className="flex items-center text-gray-500 gap-1 shrink-0">
                 <span className="text-[15px]">English</span>
                 <IconChevronRight />
               </div>
             </div>

             {/* Content disclosure */}
             <div className="flex items-center py-4 active:bg-gray-50 transition-colors">
               <div className="mr-3 shrink-0">
                 <IconDisclosure />
               </div>
               <div className="flex-1 mr-2">
                 <h3 className="text-[15px] font-medium text-black leading-tight">Content disclosure and ads</h3>
               </div>
               <div className="shrink-0">
                 <IconChevronRight />
               </div>
             </div>

             {/* Watch Tiktoks & Earn */}
             <div className="flex items-start py-4">
               <div className="mt-0.5 mr-3 shrink-0">
                 <IconEarn />
               </div>
               <div className="flex-1 mr-4">
                 <h3 className="text-[15px] font-medium text-black leading-tight mb-1">Watch Tiktoks & Earn</h3>
                 <p className="text-[12px] text-gray-500 leading-snug">
                   Enable this feature to get paid while watching videos
                 </p>
                 {watchEarn && (
                   <p className="text-[12px] leading-snug mt-1">
                     <span className="text-cyan-500 font-medium">Balance: 827.28 Total Videos Watched: </span>
                     <span className="text-black">89 </span>
                     <span className="font-bold text-black">Learn more</span>
                   </p>
                 )}
               </div>
               <div className="mt-1 shrink-0">
                 <Toggle checked={watchEarn} onChange={setWatchEarn} />
               </div>
             </div>

             {/* AI-generated content */}
             <div className="flex items-start py-4">
               <div className="mt-0.5 mr-3 shrink-0">
                 <IconAI />
               </div>
               <div className="flex-1 mr-4">
                 <h3 className="text-[15px] font-medium text-black leading-tight mb-1">AI-generated content</h3>
                 <p className="text-[12px] text-gray-500 leading-snug">
                   Add this label to tell viewers your content was generated or edited with AI. <span className="font-semibold text-black">Learn more</span>
                 </p>
               </div>
               <div className="mt-1 shrink-0">
                 <Toggle checked={aiContent} onChange={setAiContent} />
               </div>
             </div>

             {/* Auto-check sound copyright */}
             <div className="flex items-start py-4">
               <div className="mt-0.5 mr-3 shrink-0">
                 <IconCopyright />
               </div>
               <div className="flex-1 mr-4">
                 <h3 className="text-[15px] font-medium text-black leading-tight mb-1">Auto-check sound copyright</h3>
                 <p className="text-[12px] text-gray-500 leading-snug">
                   Your video's sounds will be automatically checked for copyright issues before posting, with results shown immediately.
                 </p>
               </div>
               <div className="mt-1 shrink-0">
                 <Toggle checked={checkCopyright} onChange={setCheckCopyright} />
               </div>
             </div>
             
             {/* Extra spacer for safe area */}
             <div className="h-12"></div>

          </div>
        </div>
      </div>
    </div>
  );
}