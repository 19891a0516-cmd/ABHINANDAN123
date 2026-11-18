import type { Metadata } from 'next';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Customer churn & retention',
  description: 'Research-validated temporal modelling for understanding changing customer behaviour.',
};

export default function CustomerRetentionPage() {
  return <ProjectDetail project={projects[0]} />;
}
