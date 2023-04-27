import { useNavigate } from 'react-router';
import { GiSoundWaves } from 'react-icons/gi';
import { ReactComponent as SprintIcon } from './sprint.svg';

const gameItems = [
  {
    title: 'Спринт',
    description: `Это игра на время.
      Твоя задача - выбрать правильный перевод слов.
      Чем больше ты дашь правильных ответов за 60 секунд, тем больше баллов получишь.`,
    icon: SprintIcon,
    link: 'sprint',
  },
  {
    title: 'Аудиовызов',
    description: `Это игра улучшает восприятие речи на слух.
      Твоя задача - выбрать правильный перевод слов.
      Чем больше ты дашь правильных ответов, тем больше баллов получишь.`,
    icon: GiSoundWaves,
    link: 'audiochallenge',
  },
];

const GamesEntry = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">
      <div className="container flex max-w-3xl flex-wrap justify-between gap-8 pt-20">
        {gameItems.map(({ title, description, link, icon: Icon }) => (
          <div
            key={link}
            className="flex-grow basis-2/5 cursor-pointer rounded-lg px-5 pb-8 pt-5 text-base text-gray-200 outline outline-1 outline-blue-100 duration-200 hover:text-gray-100 hover:outline-highlite"
            onClick={() => navigate(link)}
          >
            <div className="flex items-center justify-center gap-x-2">
              <h4 className="text-2xl font-bold">{title}</h4>
              <Icon className="h-11 w-10" />
            </div>
            <p className="mt-5">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GamesEntry;
