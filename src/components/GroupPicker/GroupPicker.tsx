import GroupItem from '../GroupItem/GroupItem';

type Props = {
  groups: number[];
  selectedGroup: number;
  onSelect: (group: number) => void;
};

const GroupPicker = ({ groups, selectedGroup, onSelect }: Props) => {
  return (
    <div className="flex w-full justify-between gap-x-2">
      {groups.map((group) => (
        <GroupItem key={group} group={group} selectedGroup={selectedGroup} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default GroupPicker;
