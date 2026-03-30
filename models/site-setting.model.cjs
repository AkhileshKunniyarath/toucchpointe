const mongoose = require("mongoose");

const siteSettingSchema = new mongoose.Schema(
  {
    settingKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    settingValue: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const SiteSetting =
  mongoose.models.SiteSetting || mongoose.model("SiteSetting", siteSettingSchema);

module.exports = { SiteSetting };
