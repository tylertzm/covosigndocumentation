/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Essentials',
      items: [
        'guides',
        'workflows',
        'field-types',
        'statuses',
      ],
    },
    {
      type: 'category',
      label: 'Developer Onboarding',
      items: [
        {
          type: 'category',
          label: 'Authentication & Setup',
          items: [
            'authentication',
            'api-keys',
            'sandbox',
          ],
        },
        'webhooks',
        {
          type: 'category',
          label: 'Request/Response Format',
          items: [
            'request-response',
            'errors',
            'rate-limits',
            'idempotency',
          ],
        },
        'audit-trail',
      ],
    },
  ],
};

export default sidebars;
