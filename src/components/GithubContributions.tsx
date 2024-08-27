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

  return (
    <>
      <StatCard
        title="GitHub Contributions"
        value={contributionCount || 0}
        loading={loading}
        subtext="This Year"
      />
    </>
  );
}
