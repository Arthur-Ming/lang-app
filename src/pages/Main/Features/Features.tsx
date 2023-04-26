import Feature from './Feature';
import features from './data';

const Features = () => (
  <section className="px-20 text-gray-200">
    <h2 className="text-center text-3xl font-bold">ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА</h2>
    <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-6">
      {features.map(({ label, icon }) => (
        <Feature key={label} label={label} icon={icon} />
      ))}
    </div>
  </section>
);

export default Features;
