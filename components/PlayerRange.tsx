interface PlayerRangeProps {
  sound: any;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

export const PlayerRange: React.FC<PlayerRangeProps> = ({
  sound,
  currentTime,
  setCurrentTime,
}) => {
  return (
    <div>
      <input
        type="range"
        min={0}
        max={sound ? sound.duration() : 0}
        value={currentTime}
        onChange={(e) => {
          const newTime = parseFloat(e.target.value);
          setCurrentTime(newTime);
          sound.seek(newTime);
        }}
      />
    </div>
  );
};
