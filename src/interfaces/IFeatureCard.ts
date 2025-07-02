export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: string;
  label: string;
  url: string;
  iconSize?: number;
  textSize?: string;
}
