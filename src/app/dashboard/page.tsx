import Link from 'next/link';

import applianceData from '../../data/PGS930YPFS.json';

export default function Dashboard() {
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
    <div className='min-h-screen bg-gray-100 flex items-center p-6'>
      <div className='max-w-4xl mx-auto bg-white shadow rounded-lg p-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Your Home Guide
        </h1>

        <section className='mb-8'>
          <ul className='space-y-4'>
            <Link href='/dashboard/stove'>
              <li
                key={0}
                className='p-4 bg-gray-50 rounded shadow-sm border border-gray-200 font-bold text-gray-900'
              >
                Stove
              </li>
            </Link>
          </ul>
        </section>
      </div>
    </div>
  );
}
