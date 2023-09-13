import { Table } from "@fluentui/react-northstar";

const header = {
  key: 'header',
  items: [
    { content: 'Categroy', key: 'm365ln_category', },
    { content: 'Priority', key: 'm365ln_priority', },
    { content: 'Issue', key: 'm365ln_description' },
  ],
};

const data = [
  {
    key: 1,
    items: [
      {
        content: 'Hardware',
      },
      {
        content: '1-High',
      },
      {
        content: 'My computer keeps restarting automatically for no reason.',
        truncateContent: true,
      },
    ],
  },
  {
    key: 2,
    items: [
      {
        content: 'Network',
      },
      {
        content: '0-Urgent',
      },
      {
        content: 'My WIFI is not working, please help to fix.',
        truncateContent: true,
      },
    ],
  },
  {
    key: 3,
    items: [
      {
        content: '',
      },
      {
        content: '2-Medium',
      },
      {
        content: 'My internet is very slow, please check it for me.',
        truncateContent: true,
      },
    ],
  },
  {
    key: 4,
    items: [
      {
        content: 'Software',
      },
      {
        content: '1-High',
      },
      {
        content: 'I have a problem with my email, please help.',
        truncateContent: true,
      },
    ],
  },
  {
    key: 5,
    items: [
      {
        content: '',
      },
      {
        content: '1-High',
      },
      {
        content: 'My laptop keeps bluescreening, any suggestions.',
        truncateContent: true,
      },
    ],
  },
  {
    key: 5,
    items: [
      {
        content: '',
      },
      {
        content: '2-Medium',
      },
      {
        content: 'I can login in to the HR system, but I am unable to summit data.',
        truncateContent: true,
      },
    ],
  },
];

export function Tickets(props: { environment?: string }) {
  const { environment } = {
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <h1 className="center">Contoso IT Help desk Dashboard</h1>
        <p className="center">Your app is running in your {friendlyEnvironmentName}</p>
        <div className="table">
          <Table variables={{ cellContentOverflow: 'none' }} header={header} rows={data} aria-label="Static table" />
        </div>
      </div>
    </div>
  );
}
