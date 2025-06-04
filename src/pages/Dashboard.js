import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer } from "../components/layout/PageContainer";
import { StatisticsCard } from "../components/dashboard/StatisticsCard";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { JobDistribution } from "../components/dashboard/JobDistribution";
import { CommuneDistribution } from "../components/dashboard/CommuneDistribution";
import { useFormStore } from "../store/formStore";
import { Users, Briefcase, Map } from "lucide-react";
const Dashboard = () => {
    const { forms } = useFormStore();
    // Calculate statistics
    const totalParticipants = forms.length;
    const uniqueJobs = new Set(forms.map((f) => f.professionalBackground.desiredJob)).size;
    const uniqueCommunes = new Set(forms
        .filter((f) => f.participant?.address?.commune)
        .map((f) => f.participant?.address?.commune ?? "")).size;
    // Participants added in the last month
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    const recentParticipants = forms.filter((f) => f.participant?.createdAt && f.participant.createdAt > lastMonthDate).length;
    // Calculate percentage increase
    const percentageIncrease = Math.round((recentParticipants / totalParticipants) * 100);
    return (_jsxs(PageContainer, { title: "Tableau de bord", description: "Aper\u00E7u des statistiques et des activit\u00E9s r\u00E9centes.", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6", children: [_jsx(StatisticsCard, { title: "Total des participants", value: totalParticipants, icon: _jsx(Users, { size: 20 }), trend: {
                            value: percentageIncrease,
                            isPositive: percentageIncrease > 0,
                        } }), _jsx(StatisticsCard, { title: "M\u00E9tiers souhait\u00E9s", value: uniqueJobs, icon: _jsx(Briefcase, { size: 20 }) }), _jsx(StatisticsCard, { title: "Communes repr\u00E9sent\u00E9es", value: uniqueCommunes, icon: _jsx(Map, { size: 20 }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6", children: [_jsx(JobDistribution, {}), _jsx(CommuneDistribution, {})] }), _jsx(RecentActivity, {})] }));
};
export default Dashboard;
