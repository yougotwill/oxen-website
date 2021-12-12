import { IAuthor } from '@/types/cms';
import React from 'react';

interface Props {
  author: IAuthor;
  publishedDate: string;
}

export function ArticleWidgetAuthor({ author, publishedDate }: Props) {
  return (
    <div className="flex items-center space-x-3 text-gray-800">
      {/* <Avatar size={10} imageSrc={author?.avatar?.imageUrl} /> */}

      <div className="flex leading-tight">
        <span>{publishedDate}</span> —
        <span className="ml-1 text-sm tracking-wider">{author?.name}</span>
      </div>
    </div>
  );
}
