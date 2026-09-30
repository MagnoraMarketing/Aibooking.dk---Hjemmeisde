import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Pause, ArrowRight, Headphones, CheckCircle2, Phone } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from '../utils/demoPhone';

// A real recorded example call where the AI books a job for a craftsman, so
// visitors can hear the voice quality. The recording is in Danish, so the
// whole block only renders on the Danish site.

const AUDIO_SRC = '/audio/eksempel-booking-haandvaerker.mp3';
const DURATION_SECONDS = 285;
const DURATION_ISO = 'PT4M45S';

// Loudness peaks of the recording (one per bar), used to draw the waveform
// without decoding the audio in the browser.
const PEAKS = [
  0.1, 0.15, 0.14, 0.12, 0.13, 0.05, 0.09, 0.09, 0.08, 0.08, 0.15, 0.15, 0.14, 0.12, 0.09, 0.09,
  0.09, 0.09, 0.08, 0.11, 0.11, 0.16, 0.09, 0.11, 0.1, 0.09, 0.08, 0.1, 0.11, 0.11, 0.1, 0.08,
  0.1, 0.07, 0.16, 0.07, 0.1, 0.12, 0.14, 0.09, 0.08, 0.13, 0.1, 0.08, 0.08, 0.09, 0.09, 0.04,
  0.08, 0.08, 0.11, 0.09, 0.04, 0.1, 0.07, 0.1, 0.14, 0.09, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
];
const MAX_PEAK = Math.max(...PEAKS);

const POINTS = [
  'Naturligt, flydende dansk — ingen robotstemme',
  'Forstår opgaven og stiller de rigtige opfølgende spørgsmål',
  'Finder en ledig tid og booker direkte i kalenderen',
];

const audioSchema = {
  '@context': 'https://schema.org',
  '@type': 'AudioObject',
  name: 'Eksempel på en booking hos en håndværker med AI-telefonassistent',
  description:
    'Lydoptagelse af et rigtigt eksempel, hvor Aibooking.dk’s AI-telefonassistent tager imod et opkald og booker en opgave for en håndværker på dansk.',
  contentUrl: `https://www.aibooking.dk${AUDIO_SRC}`,
  encodingFormat: 'audio/mpeg',
  duration: DURATION_ISO,
  inLanguage: 'da',
};

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function AudioPlayer({ dark }: { dark: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(DURATION_SECONDS);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => Number.isFinite(audio.duration) && setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onPause);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const seekTo = (fraction: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(fraction, 0), 1) * duration;
    setCurrent(audio.currentTime);
  };

  const progress = duration ? current / duration : 0;

  return (
    <div
      className={
        dark
          ? 'bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur'
          : 'bg-white border border-ink-200 rounded-3xl p-5 sm:p-6 shadow-lg'
      }
    >
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />
      <div className="flex items-center gap-4 sm:gap-5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause optagelsen' : 'Afspil optagelsen'}
          className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-400 text-ink-950 flex items-center justify-center shadow-xl hover:bg-accent-300 hover:scale-105 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-400/40"
        >
          {!playing && <span className="absolute inset-0 rounded-full bg-accent-400/40 animate-ping" />}
          {playing ? (
            <Pause className="relative w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" />
          ) : (
            <Play className="relative w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className={`text-sm font-semibold mb-2 ${dark ? 'text-white' : 'text-ink-900'}`}>
            Opkald: kunde booker håndværker
          </div>
          <div
            role="slider"
            tabIndex={0}
            aria-label="Spol i optagelsen"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(current)}
            aria-valuetext={`${formatTime(current)} af ${formatTime(duration)}`}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              seekTo((e.clientX - rect.left) / rect.width);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') seekTo((current + 10) / duration);
              if (e.key === 'ArrowLeft') seekTo((current - 10) / duration);
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle();
              }
            }}
            className="flex items-center gap-[2px] h-12 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
          >
            {PEAKS.map((peak, i) => {
              const played = (i + 0.5) / PEAKS.length <= progress;
              const height = 12 + (peak / MAX_PEAK) * 88;
              return (
                <span
                  key={i}
                  className={`flex-1 rounded-full transition-colors ${
                    played ? 'bg-accent-400' : dark ? 'bg-white/20' : 'bg-ink-200'
                  } ${i % 2 === 1 ? 'hidden sm:block' : ''}`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className={`flex justify-between text-xs mt-2 tabular-nums ${dark ? 'text-ink-400' : 'text-ink-600'}`}>
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BookingAudioDemoProps {
  /** `section`: full-width page section. `inline`: compact card inside a blog post. */
  variant?: 'section' | 'inline';
  className?: string;
}

export default function BookingAudioDemo({ variant = 'section', className = '' }: BookingAudioDemoProps) {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  if (lang !== 'da') return null;

  const trialHref = buildLocalizedPath(lang, '/proeveperiode');
  const schema = <script type="application/ld+json">{JSON.stringify(audioSchema)}</script>;

  if (variant === 'inline') {
    return (
      <aside className={`relative overflow-hidden rounded-3xl bg-ink-950 p-6 sm:p-8 ${className || 'my-12'}`}>
        {schema}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/5 text-accent-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/10 mb-4">
            <Headphones className="w-3.5 h-3.5" />
            Lydeksempel · 4:45 min
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Hør AI’en booke en opgave — på dansk</h2>
          <p className="text-ink-300 mb-6">
            Et rigtigt eksempel på et opkald, hvor vores AI-telefonassistent tager imod en kunde og booker en opgave for en
            håndværker. Tryk play, og hør selv kvaliteten.
          </p>
          <AudioPlayer dark />
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={trialHref}
              className="inline-flex items-center justify-center gap-2 bg-accent-400 text-ink-950 px-6 py-3 rounded-xl font-bold hover:bg-accent-300 transition-colors"
            >
              Prøv det gratis i 7 dage
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${DEMO_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Ring til demo: {DEMO_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <section className={`relative py-20 md:py-28 bg-ink-950 overflow-hidden ${className}`}>
      {schema}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:32px_32px]" />
      <div className="absolute -top-32 -left-24 w-[520px] h-[520px] bg-brand-600/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-[480px] h-[480px] bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/10 mb-6">
            <Headphones className="w-4 h-4" />
            Lyt til et rigtigt opkald
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Hør vores AI booke en opgave for en håndværker
          </h2>
          <p className="text-lg text-ink-300 leading-relaxed mb-8">
            Det er nemt at love en god AI-stemme — det er bedre at høre den. Her er et eksempel på et opkald, hvor en kunde
            ringer til en håndværker, og AI’en klarer hele samtalen og bookingen. Tryk play, og hør kvaliteten.
          </p>
          <ul className="space-y-3 mb-10">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink-200">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={trialHref}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-accent-400 text-ink-950 px-8 py-4 rounded-xl font-bold hover:bg-accent-300 transition-all shadow-xl"
            >
              Prøv gratis i 7 dage
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${DEMO_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Ring selv: {DEMO_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-600/30 to-accent-500/10 rounded-[2rem] blur-2xl" />
          <div className="relative">
            <AudioPlayer dark />
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              {[
                ['4:45', 'min. samtale'],
                ['100%', 'dansk tale'],
                ['24/7', 'klar til opkald'],
              ].map(([value, label]) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-2">
                  <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-ink-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
