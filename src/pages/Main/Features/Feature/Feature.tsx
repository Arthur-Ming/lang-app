import text from './text';

type Props = {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Feature = ({ label, icon: Icon }: Props) => (
  <div className="flex max-w-lg flex-grow items-center gap-x-8 rounded-lg bg-section-dark p-6">
    <Icon className="h-24 w-24 flex-shrink-0 flex-grow text-highlite opacity-70" />
    <div className="text-xl">{text[label]}</div>
  </div>
);

export default Feature;
