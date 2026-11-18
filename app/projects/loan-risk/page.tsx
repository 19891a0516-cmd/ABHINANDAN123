import type { Metadata } from 'next';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Loan risk management',
  description: 'An implementation area exploring changing repayment behaviour and portfolio risk.',
};

export default function LoanRiskPage() {
  return <ProjectDetail project={projects[1]} />;
}
