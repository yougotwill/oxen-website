import { IPost } from '@/types/cms';
import { RichBody } from '@/components/RichBody';
import { useScreen } from '@/contexts/screen';

export function ArticleSectionContent(post: IPost) {
  const { isDesktop, isHuge, isEnormous } = useScreen();
  return (
    <>
      {!(isDesktop || isHuge || isEnormous) ? (
        <MobileContent {...post} />
      ) : (
        <DesktopContent {...post} />
      )}
    </>
  );
}

const MobileContent = (post: IPost) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div>
        <RichBody body={post.body} />
      </div>
    </div>
  );
};

const DesktopContent = (post: IPost) => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="w-full">
        <RichBody body={post.body} />
      </div>
    </div>
  );
};
