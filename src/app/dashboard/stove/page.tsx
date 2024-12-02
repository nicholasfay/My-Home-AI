import classNames from 'classnames';

import applianceData from './data/PGS930YPFS.json';

const getTextColorFromCategory = (category: string) => {
  switch (category) {
    case 'care':
      return 'text-blue-500';
    case 'support':
      return 'text-green-500';
    case 'safety':
      return 'text-pink-500';
    case 'cleaning':
      return 'text-yellow-500';
    case 'maintenance':
      return 'text-purple-500';
    case 'emergency':
      return 'text-red-500';
    case 'contact':
      return 'text-indigo-500';
    default:
      return 'text-gray-500';
  }
};

export default function StoveDashboard() {
  const { metadata, optimal_care, support, safety, cleaning, maintenance } =
    applianceData;

  const sections = [
    { title: 'Optimal Care', data: optimal_care },
    { title: 'Support', data: support },
    { title: 'Safety', data: safety },
    { title: 'Cleaning', data: cleaning },
    { title: 'Maintenance', data: maintenance },
  ];

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-4xl mx-auto bg-white shadow rounded-lg p-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Gas Stove: {metadata.model_number}
        </h1>

        <section className='mb-8'>
          <p className='text-gray-500'>
            <strong>Model:</strong> {metadata.model_number}
          </p>
          <p className='text-gray-500'>
            <strong>Manufacturer:</strong> {metadata.manufacturer}
          </p>
        </section>

        {sections.map((section, idx) => (
          <section key={idx} className='mt-8'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>
              {section.title}
            </h2>
            <ul className='space-y-4'>
              {section.data.map((item, index) => {
                const colorClass = getTextColorFromCategory(item.category);
                return (
                  <li
                    key={index}
                    className='p-4 bg-gray-50 rounded shadow-sm border border-gray-200'
                  >
                    <p className={classNames(colorClass)}>
                      {item.description}{' '}
                    </p>
                    <p className='text-gray-400'>
                      <strong>
                        Additional info: Page {item.page_number} of manual
                      </strong>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
