export interface NavItems {
  label: string;
     href: string;
}

export type AboutHeadingProps = {
  title: string;
};

 export type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
   extraClass?: string;
};