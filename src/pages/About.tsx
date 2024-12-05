import GanttChart from "../components/GanttChart";
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
  Creative: "Oleksandr Kletsko",
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

const feasibilityStudy = {
  sections: [
    {
      title: "Project Summary",
      content: [
        "The project aims to create a recipe library platform focused on affordable and nutritious meals.",
        "The goal is to provide users with easy-to-follow recipes catering to various dietary needs while remaining budget-friendly.",
        "Revenue will be generated through premium subscriptions, advertising partnerships, and affiliate marketing.",
      ],
    },
    {
      title: "Technological Considerations",
      content: [
        "Use of React and Vite for fast, responsive web development.",
        "Web hosting through Firebase or similar platforms.",
        "UI/UX design with tools like Figma or Adobe XD.",
        "Integration with third-party services for affiliate marketing and payment gateways.",
        "Estimated initial cost: €1,000; ongoing cost: €50/month.",
      ],
    },
    {
      title: "Existing Market and Competition",
      content: [
        "The online recipe and food-sharing market is growing, with a focus on healthy eating and budget-friendly meals.",
        "Competition includes established platforms like Allrecipes, Epicurious, and niche blogs.",
        "The platform will focus on affordable, healthy meals with user-generated content and exclusive premium features.",
      ],
    },
    {
      title: "Marketing Strategy",
      content: [
        "Targeting budget-conscious individuals, young professionals, college students, and families.",
        "Using social media (Facebook, Instagram, Pinterest) and SEO for organic growth.",
        "Collaborating with influencers and nutrition experts.",
        "First-year marketing budget: €2,500.",
      ],
    },
    {
      title: "Personnel Requirements",
      content: [
        "Web developers for site improvements.",
        "Content creators for recipe writing and media production.",
        "Marketing managers for user acquisition and engagement.",
        "Monthly personnel costs: €100 (freelancers).",
      ],
    },
    {
      title: "Project Timeline and Milestones",
      content: [
        "Phase 1: Website setup, content creation, beta testing (1–2 months).",
        "Phase 2: Official launch with premium subscriptions and marketing campaigns (3–6 months).",
        "Phase 3: Scaling up with content expansion and partnerships (6+ months).",
        "Milestones: Website launch (Month 2), 150 premium users (Month 6), break-even (Month 14).",
      ],
    },
    {
      title: "Financial Considerations",
      content: [
        "Initial investment: €5,000 (development, marketing, legal setup).",
        "Ongoing costs: €300/month (hosting, content, marketing).",
        "Year 1 Revenue: €7,900; Year 1 Loss: €700.",
        "Profitability expected in Year 2 with a projected profit of €6,660.",
      ],
    },
    {
      title: "Cash Flow Analysis",
      content: [
        "Year 1: Revenue €7,900; Costs €8,600; Net Loss €700.",
        "Year 2: Revenue €10,560; Costs €3,900; Net Profit €6,660.",
      ],
    },
    {
      title: "Risk Analysis",
      content: [
        "Market risks: Consumer preferences, competition, market saturation.",
        "Operational risks: Delays in development or scaling difficulties.",
        "Financial risks: Slower-than-expected user acquisition or revenue.",
      ],
    },
    {
      title: "Go/No-Go Criteria",
      content: [
        "Go: Achieve 150 paying subscribers in 6 months and positive marketing results.",
        "No-Go: Fewer than 50 active users in 6 months or insufficient marketing traffic.",
      ],
    },
    {
      title: "Stakeholder Feedback",
      content: [
        "Feedback from users, investors, and experts will be continuously incorporated.",
        "Strategies will be refined based on stakeholder input.",
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
          <div className="swot__grid about-us__grid">
            {Object.entries(swotData).map(([key, values]) => (
              <div className="swot__item about-us__item" key={key}>
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
        <div className="feasibility-study__container">
          <h2 className="section-title">Feasibility Study</h2>
          <div className="feasibility-study__grid about-us__grid">
            {feasibilityStudy.sections.map((section, index) => (
              <div key={index} className="feasibility-study__item about-us__item">
                <h3 className="section-subtitle">{section.title}</h3>
                <ul className="list-style-1">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="list-style-1__point">
                      {item}
                    </li>
                  ))}
                </ul>
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

        <GanttChart />

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
