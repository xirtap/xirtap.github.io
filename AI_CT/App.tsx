import React, { useState, useEffect } from 'react';
import { NeoCard } from './components/NeoCard';
import { NeoButton } from './components/NeoButton';
import { NeoTextArea } from './components/NeoTextArea';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { convertToPinyin } from './services/geminiService';

// Icons
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const StopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
  </svg>
);

const TranslateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5 text-rose-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const App: React.FC = () => {
  const {
    isListening,
    transcript,
    interimTranscript,
    startListening,
    stopListening,
    setTranscript,
    hasRecognitionSupport
  } = useSpeechRecognition();

  const [pinyinResult, setPinyinResult] = useState<string>('');
  const [isLoadingPinyin, setIsLoadingPinyin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle toggle for transcription
  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      setError(null);
      startListening();
    }
  };

  // Handle Pinyin Conversion
  const handleConvertToPinyin = async () => {
    if (!transcript.trim()) {
      setError("Please transcribe or type some Chinese text first.");
      return;
    }
    
    setIsLoadingPinyin(true);
    setError(null);
    try {
      const result = await convertToPinyin(transcript);
      setPinyinResult(result);
    } catch (err) {
      setError("Failed to fetch Pinyin. Please try again.");
    } finally {
      setIsLoadingPinyin(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffe4e9] flex items-center justify-center p-4 sm:p-8">
      <main className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Header Section */}
        <div className="lg:col-span-2 text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-rose-950 tracking-tight drop-shadow-sm">
            Patrick's Chinese Transcriber
          </h1>
          <p className="text-rose-800/70 mt-2 text-sm sm:text-base font-medium">
            Speech-to-Text & AI-Powered Pinyin Converter
          </p>
        </div>

        {/* Left Column: Transcribe */}
        <NeoCard title="Transcribe" className="flex flex-col gap-6 h-full justify-between">
            <div className="flex-grow flex flex-col gap-2 relative">
               <NeoTextArea 
                 label="Chinese Input"
                 rows={10}
                 placeholder="Speak or type Chinese here..."
                 value={transcript}
                 onChange={(e) => setTranscript(e.target.value)}
               />
               {isListening && interimTranscript && (
                 <div className="absolute bottom-4 left-4 right-4 bg-rose-100/80 p-2 rounded-lg text-rose-600 text-sm truncate animate-pulse border border-rose-200">
                    Listening: {interimTranscript}
                 </div>
               )}
            </div>

            {/* Status & Controls */}
            <div className="flex flex-col items-center gap-4">
                <div className="h-6">
                    {isListening ? (
                        <span className="text-red-500 font-bold animate-pulse flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            Recording...
                        </span>
                    ) : (
                        <span className="text-rose-400/80 text-sm font-semibold">Click Mic to start</span>
                    )}
                </div>

                {!hasRecognitionSupport && (
                  <div className="text-red-500 text-xs text-center">
                    Browser not supported. Please use Chrome or Safari.
                  </div>
                )}

                <div className="flex gap-6">
                    <NeoButton 
                        onClick={handleToggleListening} 
                        disabled={!hasRecognitionSupport}
                        isActive={isListening}
                        variant={isListening ? "danger" : "primary"}
                        className="w-16 h-16 rounded-full !p-0 flex items-center justify-center"
                        title={isListening ? "Stop Recording" : "Start Recording"}
                    >
                        {isListening ? <StopIcon /> : <MicIcon />}
                    </NeoButton>
                </div>
            </div>
        </NeoCard>

        {/* Right Column: Pinyin Output */}
        <NeoCard title="Hanyu Pinyin" className="flex flex-col gap-6 h-full justify-between">
            <div className="flex-grow flex flex-col gap-2">
                <NeoTextArea 
                    label="Pinyin Output"
                    rows={10}
                    placeholder="Pinyin translation will appear here..."
                    value={pinyinResult}
                    onChange={(e) => setPinyinResult(e.target.value)} 
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="h-6">
                    {error && <span className="text-red-500 text-sm font-semibold">{error}</span>}
                </div>
                
                <NeoButton 
                    onClick={handleConvertToPinyin}
                    disabled={isLoadingPinyin}
                    className="w-full py-4 text-lg"
                    variant="success"
                >
                    {isLoadingPinyin ? (
                        <>
                           <LoadingSpinner /> Converting...
                        </>
                    ) : (
                        <>
                            <TranslateIcon /> Convert to Pinyin
                        </>
                    )}
                </NeoButton>
            </div>
        </NeoCard>

        {/* Footer */}
        <div className="lg:col-span-2 text-center text-rose-400/60 text-xs mt-8 font-semibold">
             Powered by Gemini API & Web Speech API
        </div>

      </main>
    </div>
  );
};

export default App;