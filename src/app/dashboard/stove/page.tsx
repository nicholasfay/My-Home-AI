import classNames from 'classnames';
import { loadData, getTextColorFromCategory } from '@/app/dashboard/utils';

export default function StoveDashboard() {
  const stoves = loadData('./src/app/dashboard/stove/data/');

  const stovesToRender = stoves.map(
    (
      { metadata, optimal_care, support, safety, cleaning, maintenance },
      index,
    ) => {
      const sections = [
        { title: 'Optimal Care', data: optimal_care },
        { title: 'Support', data: support },
        { title: 'Safety', data: safety },
        { title: 'Cleaning', data: cleaning },
        { title: 'Maintenance', data: maintenance },
      ];

      return (
        <div className='min-h-screen bg-gray-100 p-6' key={index}>
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
    },
  );

  return stovesToRender;
}
