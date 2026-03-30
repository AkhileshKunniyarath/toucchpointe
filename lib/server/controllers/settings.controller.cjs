const { SiteSetting } = require("../../../models/site-setting.model.cjs");

async function getSetting(req, res) {
  const { key } = req.params;
  const setting = await SiteSetting.findOne({ settingKey: key }).lean();
  res.json(setting?.settingValue || {});
}

async function upsertSetting(req, res) {
  const { key } = req.params;

  await SiteSetting.findOneAndUpdate(
    { settingKey: key },
    { settingKey: key, settingValue: req.body },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  res.json({ message: "Saved successfully" });
}

async function deleteSetting(req, res) {
  const { key } = req.params;
  await SiteSetting.deleteOne({ settingKey: key });
  res.json({ message: "Deleted successfully" });
}

async function getSettingsInventory(_req, res) {
  const settings = await SiteSetting.find({})
    .sort({ settingKey: 1 })
    .lean();

  res.json(
    settings.map((setting) => ({
      key: setting.settingKey,
      updatedAt: setting.settingValue?.updatedAt || setting.updatedAt || null,
      title:
        setting.settingValue?.pageTitle ||
        setting.settingValue?.heroTitle ||
        setting.settingKey,
    }))
  );
}

module.exports = { getSetting, upsertSetting, deleteSetting, getSettingsInventory };
