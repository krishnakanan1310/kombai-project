'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { SortOption } from '@/lib/enums';
import { ArrowUpDown } from 'lucide-react';

interface SearchResultsHeaderProps {
  totalResults: number;
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
}

export default function SearchResultsHeader({
  totalResults,
  sortBy,
  onSortChange
}: SearchResultsHeaderProps) {
  const sortOptions = [
    { value: SortOption.MOST_RELEVANT, label: 'Most Relevant' },
    { value: SortOption.HIGHEST_RATED, label: 'Highest Rated' },
    { value: SortOption.NEAREST, label: 'Nearest' },
    { value: SortOption.NEWEST, label: 'Newest' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm border border-border">
      {/* Results Count */}
      <div className="flex items-center space-x-2">
        <h2 className="heading-secondary text-lg font-semibold">
          Search Results
        </h2>
        <Badge variant="secondary" className="text-sm">
          {totalResults.toLocaleString()} businesses found
        </Badge>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <ArrowUpDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="body-secondary text-sm font-medium">Sort by:</span>
        </div>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-48 focus:ring-2 focus:ring-focus-ring">
            <SelectValue placeholder="Select sort option" />
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