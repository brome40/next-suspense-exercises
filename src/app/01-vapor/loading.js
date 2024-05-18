import React from 'react';
import { range } from '@/utils';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import ArticleWrapper from './ArticleWrapper';

function VaporLoading () {
  return (
    <ArticleWrapper>
      {range(12).map((num) => (
        <LibraryGameCardSkeleton key={num}/>
      ))}
    </ArticleWrapper>
  );
}

export default VaporLoading;
