import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "@/components/StatCard";

type CommitResponse = {
  totalContributions: number;
};

export default function GithubContributions() {
  const [contributionCount, setContributionCount] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCommitData() {
      try {
        const response = await axios.get<CommitResponse>("/api/get-commits");
        setContributionCount(response.data.totalContributions);
      } catch (error) {
        console.error("Error fetching commit data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommitData();
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <StatCard
        title="GitHub Stats"
        subtitle={year.toString()}
        value={contributionCount || 0}
        loading={loading}
        subtext={`Contributions`}
      />
    </>
  );
}
