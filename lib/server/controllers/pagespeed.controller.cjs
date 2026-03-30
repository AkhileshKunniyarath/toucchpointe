const axios = require("axios");
const { PageSpeedReport } = require("../../../models/page-speed-report.model.cjs");

async function getPageSpeedAnalysis(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    const response = await axios.get(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
      {
        params: {
          url,
          key: process.env.GOOGLE_PAGESPEED_API_KEY,
          category: ["performance", "accessibility", "best-practices", "seo"],
          strategy: "desktop",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("PAGESPEED FETCH ERROR:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to fetch PageSpeed data" });
  }
}

async function recordPageSpeedReport(req, res) {
  const { url, email, performance, accessibility, bestPractices, seo } = req.body;

  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  const report = await PageSpeedReport.create({
    url,
    email: email || null,
    performanceScore: performance ?? 0,
    accessibilityScore: accessibility ?? 0,
    bestPracticesScore: bestPractices ?? 0,
    seoScore: seo ?? 0,
  });

  if (process.env.RESEND_API_KEY) {
    const summary = `
      <p><strong>Website:</strong> ${url}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Performance:</strong> ${performance ?? 0}</p>
      <p><strong>Accessibility:</strong> ${accessibility ?? 0}</p>
      <p><strong>Best Practices:</strong> ${bestPractices ?? 0}</p>
      <p><strong>SEO:</strong> ${seo ?? 0}</p>
    `;

    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "no-reply@updates.touchpointe.digital",
        to: "contact@touchpointe.digital",
        subject: "New PageSpeed Report Submitted",
        html: summary,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  res.json({ message: "Report saved and email sent", report: report.toJSON() });
}

async function getPageSpeedReports(req, res) {
  const limit = Math.min(parseInt(req.query.limit, 10) || 100, 250);
  const reports = await PageSpeedReport.find({})
    .sort({ createdAt: -1 })
    .limit(limit);

  res.json(reports.map((report) => report.toJSON()));
}

module.exports = {
  getPageSpeedAnalysis,
  recordPageSpeedReport,
  getPageSpeedReports,
};
