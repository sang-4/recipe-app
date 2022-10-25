import React from "react";

function Middle() {
  const WeeklyRecipes = [
    {
      id: 1,
      title: "Chicken biryani",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "Chicken biryani",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Chicken biryani",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamsodales, sem a pretium ullamcorper, lorem lectus auctor ligula,semper mattis velit purus vel urna. Duis porta felis ac semposuere convallis.",
      imageUrl:
        "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="middle">
      <h2>Weekly Recipes</h2>
      <div className="middle-container">
        {WeeklyRecipes.map(({ id, title, content, imageUrl }) => (
          <div
            className="panel"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            key={id}
          >
            <h3 className="heading">{title}</h3>
            <div className="middle-desc">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
