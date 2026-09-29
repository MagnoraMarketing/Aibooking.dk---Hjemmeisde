import { useCallback, useEffect, useRef, useState } from 'react';
import type VoiceClient from '@vapi-ai/web';
import { VOICE_DEMO_PUBLIC_KEY } from '../utils/voiceDemo';

export type VoiceCallState = 'idle' | 'connecting' | 'active' | 'error';

// The voice SDK pulls in a WebRTC client, which is only useful once a visitor
// actually wants to try the demo, so it's imported lazily on first call rather
// than added to every page load.
export function useVoiceDemoCall(assistantId: string) {
  const [state, setState] = useState<VoiceCallState>('idle');
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);
  const clientRef = useRef<VoiceClient | null>(null);

  useEffect(() => {
    return () => {
      clientRef.current?.stop();
    };
  }, []);

  const start = useCallback(async () => {
    setState((current) => {
      if (current === 'connecting' || current === 'active') return current;
      return 'connecting';
    });
    try {
      if (!clientRef.current) {
        const { default: Client } = await import('@vapi-ai/web');
        const client = new Client(VOICE_DEMO_PUBLIC_KEY);
        client.on('call-start', () => setState('active'));
        client.on('call-end', () => {
          setState('idle');
          setIsAssistantSpeaking(false);
        });
        client.on('error', () => {
          setState('error');
          setIsAssistantSpeaking(false);
        });
        client.on('speech-start', () => setIsAssistantSpeaking(true));
        client.on('speech-end', () => setIsAssistantSpeaking(false));
        clientRef.current = client;
      }
      await clientRef.current.start(assistantId);
    } catch {
      setState('error');
    }
  }, [assistantId]);

  const stop = useCallback(() => {
    clientRef.current?.stop();
    setState('idle');
    setIsAssistantSpeaking(false);
  }, []);

  return { state, isAssistantSpeaking, start, stop };
}
