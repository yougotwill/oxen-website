import { useScreen } from '../../../contexts/screen';

import { Contained } from '../../Contained';

interface Props {
  subtitle: string;
}

export function ArticleSubtitleSection({ subtitle }: Props) {
  const { isDesktop, isHuge } = useScreen();

  if (!subtitle) {
    return null;
  }

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span
          style={{
            maxWidth: isDesktop || isHuge ? '700px' : undefined,
          }}
          className="w-full mb-3 text-lg font-medium text-center text-gray-900 desktop:mb-6 desktop:text-2xl"
        >
          {subtitle}
        </span>
      </div>
    </Contained>
  );
}
