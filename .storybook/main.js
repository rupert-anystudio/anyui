module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    // This is where we change the order of resolution of main fields
    config.resolve.mainFields = ['src', 'module', 'main']
    // Return the altered config
    return config
  },
}