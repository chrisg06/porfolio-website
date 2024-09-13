// pages/api/get-commits.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type GitHubResponse = {
  data: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
        totalRepositoryContributions: number;
        totalPullRequestReviewContributions: number;
      };
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const username = req.query.username || "chrisg06";

  const date = new Date();
  const currentDate = date.toISOString();
  const lastYear = date.setFullYear(date.getFullYear() - 1);
  // get date 1 year ago iso time at 00:00:00
  const lastYearDate =
    new Date(lastYear).toISOString().split("T")[0] + "T00:00:00Z";

  const query = `
  query {
    user(login: "${username}") {
      contributionsCollection(from: "${lastYearDate}", to: "${currentDate}") {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalRepositoryContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;

  try {
    const response = await axios.post<GitHubResponse>(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const totalContributions = response.data.data.user.contributionsCollection.totalCommitContributions +
                            response.data.data.user.contributionsCollection.totalPullRequestContributions +
                            response.data.data.user.contributionsCollection.totalIssueContributions +
                            response.data.data.user.contributionsCollection.totalRepositoryContributions +
                            response.data.data.user.contributionsCollection.totalPullRequestReviewContributions;
    

    res.status(200).json({ totalContributions });
  } catch (error) {
    console.error("Error fetching commits:", error);
    res.status(500).json({ error: "Failed to fetch commit data" });
  }
}
