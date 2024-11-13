import TransitionOverlay from "../components/TransitionOverlay";

const swotData = {
  strengths: [
    {
      title: "Affordability",
      description:
        "Appeals to budget-conscious users by offering recipes that help them save money on groceries.",
    },
    {
      title: "Accessibility",
      description:
        "Recipes with simple and readily available ingredients make it easier for a wide audience to access and try them.",
    },
    {
      title: "Clear Value Proposition",
      description:
        "Directly addresses a common problem (e.g., eating well on a budget), making the value easy to understand for visitors.",
    },
    {
      title: "Niche Market",
      description:
        "Targets a specific group of people—those looking for cost-effective cooking solutions—giving the site a unique angle compared to broader recipe sites.",
    },
  ],
  weaknesses: [
    {
      title: "Competition",
      description:
        "Many websites and apps offer recipes, including affordable ones, so standing out might be challenging.",
    },
    {
      title: "Limited Scope",
      description:
        "Focusing solely on affordability might limit appeal to those who seek more gourmet or specialized dietary needs.",
    },
    {
      title: "Initial Traffic Generation",
      description:
        "Building a user base from scratch can be difficult, especially without a significant marketing budget.",
    },
    {
      title: "Content Updates",
      description:
        "To stay relevant, the site needs regular updates with new recipes, which can be time-consuming.",
    },
  ],
  opportunities: [
    {
      title: "Partnerships with Food Brands",
      description: "Collaborate with affordable grocery brands for sponsored content or discounts.",
    },
    {
      title: "Social Media Presence",
      description:
        "Utilize platforms like Instagram, TikTok, or YouTube to share quick recipe videos and drive traffic to the website.",
    },
    {
      title: "Community Building",
      description:
        "Encourage user-submitted recipes or tips, creating a community of budget-conscious cooks.",
    },
    {
      title: "Expansion into Meal Planning",
      description:
        "Offer meal planning services based on affordable recipes, appealing to users who need help organizing their weekly meals.",
    },
  ],
  threats: [
    {
      title: "Market Saturation",
      description:
        "Many competitors might already offer similar services, making it harder to attract users.",
    },
    {
      title: "Economic Changes",
      description:
        'Changes in food prices or inflation can impact the effectiveness of "affordable" recipes.',
    },
    {
      title: "User Engagement",
      description:
        "Maintaining user interest and engagement might be difficult if the content does not keep evolving with user preferences.",
    },
    {
      title: "Ad Revenue Dependence",
      description:
        "If the website relies on ad revenue, changes in ad policies or market downturns can reduce earnings.",
    },
  ],
};

const team = {
  Leader: "Sviatoslav Naidenko",
  "Creative manager": "Oleksandr Kletsko",
  Universal: "Maxim Toporivskii",
  IT: "Vladyslav Kostromin",
};

export default function About() {
  return (
    <div className="section about-us">
      <div className="container">
        <div className="swot__container">
          <h2 className="swot__title section-title">SWOT</h2>
          <div className="swot__content">
            {Object.entries(swotData).map(([key, values]) => (
              <div className="swot__part" key={key}>
                <h3 className="swot__part-title section-subtitle">{key}</h3>
                <ul className="swot__list list-style-1">
                  {values.map((item, index) => (
                    <li className="swot__point list-style-1__point" key={index}>
                      <strong>{item.title}</strong>: {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="team__container">
          <h2 className="team__title section-title">Our team</h2>
          <div className="team__content">
            <ul className="team__list list-style-1">
              {Object.keys(team).map((key) => {
                return (
                  <li key={key} className="team__point list-style-1__point">
                    <strong>{key}</strong> - {team[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <TransitionOverlay />
    </div>
  );
}
