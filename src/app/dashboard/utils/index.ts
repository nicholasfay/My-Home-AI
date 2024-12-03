import fs from 'fs';
import path from 'path';

import { ApplianceData } from '@/types/ApplianceData';

export const loadData = (dir: string) => {
  const results: ApplianceData[] = [];

  const readDirectory = (directory: string) => {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        readDirectory(filePath);
      } else if (file.endsWith('.json')) {
        const data = fs.readFileSync(filePath, 'utf8');
        results.push(JSON.parse(data));
      }
    });
  };

  readDirectory(dir);
  return results;
};

export const getTextColorFromCategory = (category: string) => {
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
