/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      label: "Drop",
      type: "category",
      items: [
        "introduction",
        {
          label: "About",
          type: "category",
          items: ["about/alliance", "about/droplets"],
        },
        {
          label: "For Partners",
          type: "category",
          items: [
            "integrations/overview",
            "integrations/referral",
            "integrations/lsm_staking",
            "integrations/tvl",
            "integrations/nft_status",
          ],
        },
        {
          label: "Validators",
          type: "category",
          items: [
            "validators/overview",
            "validators/valset",
            "validators/onboard",
            "validators/roadmap",
            "validators/faq",
          ],
        },
        {
          label: "Deployments",
          type: "category",
          items: [
            "deployments/overview",
            "deployments/mainnet",
            "deployments/testnet",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
