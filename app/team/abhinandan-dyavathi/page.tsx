import type { Metadata } from 'next';
import AbhinandanProfile from '@/components/sections/AbhinandanProfile';

export const metadata: Metadata = {
  title: 'Abhinandan Dyavathi',
  description:
    'Software Developer and MSc Computer Science researcher focused on software engineering, AI, machine learning, and data-driven systems.',
};

export default function AbhinandanProfilePage() {
  return <AbhinandanProfile />;
}