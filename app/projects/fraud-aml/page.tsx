import type { Metadata } from 'next';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Fraud & AML monitoring',
  description: 'Active research exploring temporal event sequences for fraud and AML monitoring.',
};

export default function FraudAmlPage() {
  return <ProjectDetail project={projects[2]} />;
}
