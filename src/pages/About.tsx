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

const businessPlan = {
  sections: [
    {
      title: "Vision",
      content:
        "To become the go-to platform for affordable, delicious, and easy-to-prepare recipes.",
    },
    {
      title: "Mission",
      content:
        "Empower individuals and families to cook cost-effective meals without compromising on taste or nutrition.",
    },
    {
      title: "Products",
      content: [
        "Affordable and tasty recipes.",
        "Step-by-step instructions with photos and tips.",
        "Budget breakdown for each recipe.",
      ],
    },
    {
      title: "Services",
      content: [
        "Personalized recommendations based on dietary preferences.",
        "Integration with shopping lists for easier grocery planning.",
      ],
    },
    {
      title: "Pricing",
      content: [
        "Free basic access.",
        "Premium subscription for advanced features like meal planning and ad-free experience.",
      ],
    },
    {
      title: "Advantages",
      content: [
        "Saves time and money.",
        "Promotes healthy eating habits.",
        "Accessible and user-friendly platform.",
      ],
    },
  ],
};

const financialAnalysis = {
  sections: [
    {
      title: "Startup Costs",
      items: [
        { name: "Website Development", value: "€900" },
        { name: "Marketing Launch Campaigns", value: "€2,500" },
        { name: "Personnel", value: "€100" },
        { name: "Legal and Miscellaneous", value: "€1,500" },
      ],
    },
    {
      title: "Recurring Costs",
      items: [
        { name: "Website Hosting and Maintenance", value: "€50/month" },
        { name: "Content Creation", value: "€100/month" },
        { name: "Marketing", value: "€100/month" },
        { name: "Miscellaneous Expenses", value: "€50/month" },
      ],
    },
    {
      title: "Revenue Streams",
      items: [
        { name: "Premium Subscriptions", value: "€5,400/year" },
        { name: "Advertising Partnerships", value: "€1,500/year" },
        { name: "Affiliate Marketing", value: "€1,000/year" },
      ],
    },
    {
      title: "Summary",
      items: [
        { name: "Year 1 Revenue", value: "€7,900" },
        { name: "Year 1 Cost", value: "€8,600" },
        { name: "Year 1 Profit", value: "-€700" },
        { name: "Break-Even", value: "Month 14" },
      ],
    },
  ],
};

export default function About() {
  return (
    <div className="section about-us">
      <div className="container">
        <div className="swot__container">
          <h2 className="swot__title section-title">SWOT Analysis</h2>
          <div className="swot__grid">
            {Object.entries(swotData).map(([key, values]) => (
              <div className="swot__item about-us_time" key={key}>
                <h3 className="swot__card-title section-subtitle">{key}</h3>
                <ul className="list-style-1">
                  {values.map((item, index) => (
                    <li key={index} className="list-style-1__point">
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="business-plan__container">
          <h2 className="section-title">Business Plan</h2>
          <div className="business-plan__grid about-us__grid">
            {businessPlan.sections.map((section, index) => (
              <div key={index} className="business-plan__item about-us__item">
                <h3 className="section-subtitle">{section.title}</h3>

                {Array.isArray(section.content) ? (
                  <ul className="list-style-1">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="list-style-1__point">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="list-style-1__point">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="financial-analysis__container">
          <h2 className="section-title">Financial Analysis</h2>
          <div className="financial-analysis__grid about-us__grid">
            {financialAnalysis.sections.map((section, index) => (
              <div key={index} className="financial-analysis__item about-us__item">
                <h3 className="section-subtitle">{section.title}</h3>
                <ul className="list-style-1">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="list-style-1__point">
                      <strong>{item.name}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="team__container">
          <h2 className="section-title">Our Team</h2>
          <ul className="list-style-1">
            {Object.keys(team).map((key) => (
              <li key={key} className="list-style-1__point">
                <strong>{key}:</strong> {team[key]}
              </li>
            ))}
          </ul>
        </div>
        <TransitionOverlay />
      </div>
    </div>
  );
}
