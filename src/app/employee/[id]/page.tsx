import { notFound } from "next/navigation";
import Tabs from "@/app/components/ui/Tabs";

// Dummy data loader
async function getEmployee(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function EmployeePage({ params }: { params: { id: string } }) {
  const user = await getEmployee(params.id);

  if (!user) return notFound();

  const tabs = [
    {
      title: "Overview",
      content: (
        <div>
          <p className="text-sm">This employee is a top performer in their department.</p>
          <p className="text-sm mt-2">They&apos;ve consistently exceeded quarterly targets.</p>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Employee Engagement App</li>
          <li>Internal Knowledge Base</li>
          <li>Onboarding Automation</li>
        </ul>
      ),
    },
    {
      title: "Feedback",
      content: (
        <div className="text-sm space-y-2">
          <p>🌟 “Always proactive and reliable.”</p>
          <p>🌟 “Leads with empathy and clarity.”</p>
          <p>🌟 “Strong contributor in cross-team projects.”</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 text-sm mb-2">📧 {user.email}</p>
      <p className="text-gray-600 text-sm mb-4">📱 {user.phone}</p>

      <Tabs tabs={tabs} />
    </div>
  );
}