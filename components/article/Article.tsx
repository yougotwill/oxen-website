import { ArticleContained } from '@/components/ArticleContained';
import { ArticleSectionContent } from '@/components/article/sections/ArticleSectionContent';
import { ArticleSectionFeatureImage } from '@/components/article/sections/ArticleSectionFeatureImage';
import { ArticleSectionTitle } from '@/components/article/sections/ArticleSectionTitle';
import { ArticleSubtitleSection } from '@/components/article/sections/ArticleSubtitleSection';
import { ArticleWidgetAuthor } from '@/components/article/widgets/ArticleWidgetAuthor';
import { IPost } from '@/types/cms';
import React from 'react';
import { Spacer } from '@/components/Spacer';
import { TagRow } from '@/components/TagRow';

export function Article(props: IPost) {
  const {
    title,
    subtitle,
    author,
    tags,
    publishedDate,
    featureImage,
    description,
  } = props;

  // const { isMobile } = useScreen();

  return (
    <article>
      <div className="flex flex-col items-center mb-20 space-y-4">
        <ArticleSectionFeatureImage featureImage={featureImage} title={title} />

        <ArticleContained>
          <div className="flex flex-col mb-6 space-y-6">
            <ArticleSectionTitle title={title} />
            <ArticleSubtitleSection subtitle={subtitle} />

            <ArticleWidgetAuthor
              author={author}
              publishedDate={publishedDate}
            />

            {/* Brendan requested that descriptions are only shown on cards. -t 2nd Mar 2021 */}
            {/* <ArticleCallout>{description}</ArticleCallout> */}
          </div>

          <ArticleSectionContent {...props} />

          <Spacer spaceY={4} />
          <TagRow tags={tags} size="medium" />
        </ArticleContained>
      </div>
    </article>
  );
}
