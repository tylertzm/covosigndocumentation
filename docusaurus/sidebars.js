/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Essentials',
      collapsible: false,
      items: [
        'authentication',
        'api-keys',
        'sandbox',
        'best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        'guides',
        'workflows',
        'webhooks',
        'statuses',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsible: false,
      items: [
        'request-response',
        'errors',
        'rate-limits',
        'pagination',
        'idempotency',
        'correlation-ids',
        'field-types',
        'audit-trail',
      ],
    },
  ],
};

export default sidebars;
