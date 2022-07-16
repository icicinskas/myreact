const MonsterCard = ({ char }) => {
  const randomMonster = char[Math.floor(Math.random() * char.length)];

  return (
    <div className="post p5">
      <img src={randomMonster.image} alt="" />
      <h3>{randomMonster.name}</h3>
      <div>Damage: {randomMonster.maxDamage}</div>
      <div>Helth: {randomMonster.health} </div>
    </div>
  );
};

export default MonsterCard;
