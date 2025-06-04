import React from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { StatisticsCard } from "../components/dashboard/StatisticsCard";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { JobDistribution } from "../components/dashboard/JobDistribution";
import { CommuneDistribution } from "../components/dashboard/CommuneDistribution";
import { useFormStore } from "../store/formStore";
import { Users, Briefcase, Map } from "lucide-react";

const Dashboard: React.FC = () => {
  const { forms } = useFormStore();

  // Calculate statistics
  const totalParticipants = forms.length;
  const uniqueJobs = new Set(
    forms.map((f) => f.professionalBackground.desiredJob)
  ).size;
  const uniqueCommunes = new Set(
    forms
      .filter((f) => f.participant?.address?.commune)
      .map((f) => f.participant?.address?.commune ?? "")
  ).size;

  // Participants added in the last month
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  const recentParticipants = forms.filter(
    (f) => f.participant?.createdAt && f.participant.createdAt > lastMonthDate
  ).length;

  // Calculate percentage increase
  const percentageIncrease = Math.round(
    (recentParticipants / totalParticipants) * 100
  );

  return (
    <PageContainer
      title="Tableau de bord"
      description="Aperçu des statistiques et des activités récentes."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <StatisticsCard
          title="Total des participants"
          value={totalParticipants}
          icon={<Users size={20} />}
          trend={{
            value: percentageIncrease,
            isPositive: percentageIncrease > 0,
          }}
        />

        <StatisticsCard
          title="Métiers souhaités"
          value={uniqueJobs}
          icon={<Briefcase size={20} />}
        />

        <StatisticsCard
          title="Communes représentées"
          value={uniqueCommunes}
          icon={<Map size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <JobDistribution />
        <CommuneDistribution />
      </div>

      <RecentActivity />
    </PageContainer>
  );
};

export default Dashboard;
