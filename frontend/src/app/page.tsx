'use client';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';

import { RainbowButton } from '@/components/magicui/rainbow-button';
import { RetroGrid } from '@/components/magicui/retro-grid';
import Survey from '@/app/survey';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [start, setStart] = useState(false);

  return (
    <div
      className='relative flex h-lvh w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background'
      suppressHydrationWarning>
      <FlickeringGrid
        className='absolute inset-0 z-0 size-full'
        squareSize={6}
        gridGap={8}
        color='#6B7280'
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <TypingAnimation className='z-10 md:text-6xl font-bold text-2xl'>
        Start journey!
      </TypingAnimation>
      {start ? (
        <div className='m-10 flex flex-row items-center justify-center'>
          <div className='mx-4 relative flex h-10 w-fit items-center justify-center overflow-hidden rounded-lg bg-primary  text-primary-foreground'>
            <input
              type='email'
              id='email'
              name='email'
              playholder='Email'
              className='w-full p-2 text-black placeholder-slate-800 bg-transparent focus:outline-none'
            />
          </div>

          <AnimatedSubscribeButton subscribeStatus={false} className='w-32'>
            <span className='group inline-flex items-center'>
              Follow
              <ChevronRightIcon className='ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1' />
            </span>
            {false ? (
              <span className='group inline-flex items-center'>
                <CheckIcon className='mr-2 size-4' />
                Subscribed
              </span>
            ) : (
              <span className='group inline-flex items-center text-red-500'>
                Invalid
                <X className='mr-2 size-4 translate-x-2' strokeWidth={3} />
              </span>
            )}
          </AnimatedSubscribeButton>
        </div>
      ) : (
        <RainbowButton
          className='m-10'
          onClick={() => {
            setStart(true);
          }}>
          Join now!
        </RainbowButton>
      )}
    </div>
  );
}
