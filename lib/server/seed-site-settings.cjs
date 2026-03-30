const siteDefaults = require("../site-defaults.json");
const { SiteSetting } = require("../../models/site-setting.model.cjs");

let seeded = false;

async function ensureDefaultSiteSettings() {
  if (seeded) {
    return;
  }

  const keys = Object.keys(siteDefaults);

  for (const key of keys) {
    const existing = await SiteSetting.findOne({ settingKey: key }).lean();
    if (!existing) {
      await SiteSetting.create({
        settingKey: key,
        settingValue: siteDefaults[key],
      });
    }
  }

  seeded = true;
}

module.exports = { ensureDefaultSiteSettings };
