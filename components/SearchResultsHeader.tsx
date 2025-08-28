'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SortOption } from '@/lib/enums';
import { formatTotalResults } from '@/lib/formatters';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface SearchResultsHeaderProps {
  totalResults: number;
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
}

const sortOptions = [
  { value: SortOption.MOST_RELEVANT, label: 'Most Relevant' },
  { value: SortOption.HIGHEST_RATED, label: 'Highest Rated' },
  { value: SortOption.NEAREST, label: 'Nearest' },
  { value: SortOption.NEWEST, label: 'Newest' },
];

export default function SearchResultsHeader({ totalResults, sortBy, onSortChange }: SearchResultsHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-text-primary">{formatTotalResults(totalResults)}</h2>
        <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-text-primary font-semibold">Sort by:</span>
        <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger className="w-40">
            <SelectValue />
            <ChevronDownIcon width={14} height={8} color="#000000" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}