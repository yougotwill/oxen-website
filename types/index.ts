// Common types
export type SVG = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IPath {
  params: { page: string | string[] };
}

export interface IRedirection {
  source: string;
  destination: string;
  permanent: boolean;
}
