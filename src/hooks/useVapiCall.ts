import { useCallback, useEffect, useRef, useState } from 'react';
import type Vapi from '@vapi-ai/web';
import { VAPI_PUBLIC_KEY } from '../utils/vapi';

export type VapiCallState = 'idle' | 'connecting' | 'active' | 'error';

// Vapi's SDK pulls in Daily's WebRTC client, which is only useful once a
// visitor actually wants to try the demo, so it's imported lazily on first
// call rather than added to every page load.
export function useVapiCall(assistantId: string) {
  const [state, setState] = useState<VapiCallState>('idle');
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    return () => {
      vapiRef.current?.stop();
    };
  }, []);

  const start = useCallback(async () => {
    setState((current) => {
      if (current === 'connecting' || current === 'active') return current;
      return 'connecting';
    });
    try {
      if (!vapiRef.current) {
        const { default: VapiClient } = await import('@vapi-ai/web');
        const vapi = new VapiClient(VAPI_PUBLIC_KEY);
        vapi.on('call-start', () => setState('active'));
        vapi.on('call-end', () => {
          setState('idle');
          setIsAssistantSpeaking(false);
        });
        vapi.on('error', () => {
          setState('error');
          setIsAssistantSpeaking(false);
        });
        vapi.on('speech-start', () => setIsAssistantSpeaking(true));
        vapi.on('speech-end', () => setIsAssistantSpeaking(false));
        vapiRef.current = vapi;
      }
      await vapiRef.current.start(assistantId);
    } catch {
      setState('error');
    }
  }, [assistantId]);

  const stop = useCallback(() => {
    vapiRef.current?.stop();
    setState('idle');
    setIsAssistantSpeaking(false);
  }, []);

  return { state, isAssistantSpeaking, start, stop };
}
