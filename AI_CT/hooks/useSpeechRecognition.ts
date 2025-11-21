import { useState, useEffect, useCallback, useRef } from 'react';

interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  setTranscript: (text: string) => void;
  hasRecognitionSupport: boolean;
}

export const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscriptState] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [hasRecognitionSupport, setHasRecognitionSupport] = useState(false);
  
  // Use a ref to keep track of the recognition instance
  // Using 'any' as SpeechRecognition types might not be available in the global scope
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setHasRecognitionSupport(true);
      const SpeechRecognitionConstructor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognitionConstructor();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'zh-CN'; // Chinese (Mainland)

      recognition.onresult = (event: any) => {
        let finalTranscriptChunk = '';
        let interimTranscriptChunk = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscriptChunk += event.results[i][0].transcript;
          } else {
            interimTranscriptChunk += event.results[i][0].transcript;
          }
        }

        if (finalTranscriptChunk) {
            setTranscriptState(prev => prev + finalTranscriptChunk);
        }
        setInterimTranscript(interimTranscriptChunk);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        // If we are supposed to be listening (e.g. paused by silence), restart could happen here,
        // but we'll rely on manual toggle for better control in this app.
        setIsListening(false);
        setInterimTranscript('');
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error("Failed to start recognition:", e);
      }
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [isListening]);

  const resetTranscript = useCallback(() => {
    setTranscriptState('');
    setInterimTranscript('');
  }, []);
  
  // Helper to manually update transcript (for editing)
  const setTranscript = useCallback((text: string) => {
      setTranscriptState(text);
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    startListening,
    stopListening,
    resetTranscript,
    setTranscript,
    hasRecognitionSupport,
  };
};