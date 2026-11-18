import type { Metadata } from 'next';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Property & collateral risk',
  description: 'Active research exploring property, collateral and related contextual signals over time.',
};

export default function PropertyCollateralPage() {
  return <ProjectDetail project={projects[3]} />;
}
