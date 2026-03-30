const mongoose = require("mongoose");

const pageSpeedReportSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: null,
      trim: true,
      lowercase: true,
    },
    performanceScore: {
      type: Number,
      required: true,
    },
    accessibilityScore: {
      type: Number,
      required: true,
    },
    bestPracticesScore: {
      type: Number,
      required: true,
    },
    seoScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

pageSpeedReportSchema.set("toJSON", {
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    ret.created_at = ret.createdAt;
    ret.performance_score = ret.performanceScore;
    ret.accessibility_score = ret.accessibilityScore;
    ret.best_practices_score = ret.bestPracticesScore;
    ret.seo_score = ret.seoScore;
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.performanceScore;
    delete ret.accessibilityScore;
    delete ret.bestPracticesScore;
    delete ret.seoScore;
    return ret;
  },
});

const PageSpeedReport =
  mongoose.models.PageSpeedReport ||
  mongoose.model("PageSpeedReport", pageSpeedReportSchema);

module.exports = { PageSpeedReport };
