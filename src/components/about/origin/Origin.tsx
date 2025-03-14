export default function Origin() {
  const timeline = [
    {
      year: "2016",
      title: "Founded as a CBO",
      description:
        "Swahilipot Hub founded as a community-based organization (CBO) with programs/activities focused on technology and innovation."
    },
    {
      year: "2017",
      title: "Becomes NGO",
      description:
        "The ambitions of Swahilipot Hub grows and upgrades from a community-based organization (CBO) to a Non-Governmental Organization (NGO) regulated by The Non-Governmental Organizations Co-ordination Board of Kenya. The official name becomes Swahilipot Hub Foundation."
    },
    {
      year: "2018",
      title: "First Pwani Innovation Week",
      description:
        "Swahilipot Hub hosts the first edition of Pwani Innovation Week, its first major activity focused on promoting technology and innovation in the Coastal region of Kenya. On the last day of PIW, Swahilipot hosts Pwani Gat Talent, its major event focused on promoting arts in the coastal region of Kenya."
    },
    {
      year: "2021",
      title: "Anchor Partner for GOYN",
      description:
        "Swahilipot Hub Foundation becomes the anchor partner for the Global Opportunity Youth Network (GOYN) in Mombasa and secures its first grant as an NGO. GOYN is a multi-stakeholder initiative that seeks to create place-based systemic shifts for youth economic opportunity. GOYN is based at the Aspen Institute’s Forum for Community Solutions. Opportunity Youth are young people aged 18 - 35 who are out of school, unemployed, not in education or training. With this support, Swahilipot transitions from a volunteer-led organization to hiring full-time staff on payroll."
    },
    {
      year: "2022",
      title: "Modern Heritage of Africa (MoHoA) Workshop",
      description:
        "Swahilipot Hub Foundation hosts the Modern Heritage of Africa (MoHoA) workshop, its first major event under the heritage program area. Hosted in a hybrid format (in-person at Swahilipot Hub and virtual), it brought together speakers and participants from across the globe. Key partners included National Museums of Kenya, ICCROM, University of Cape Town, University College London, African World Heritage Fund, ICOMOS, IUCN, and UNESCO."
    },
    {
      year: "2023",
      title: "Certified Public Charity (US)",
      description:
        "Swahilipot Hub Foundation is certified as being equivalent to a Certified Public Charity in the United States of America. This means that U.S. grantmakers can now fund Swahilipot directly."
    }
  ];

  return (
    <section className="py-12 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            How did Swahilipot Hub come to be?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            Why are all technology, innovation, and incubation hubs based in Nairobi? 
            Nairobi is not Kenya and Kenya is not Nairobi. Something has to change. 
            This was the “aha” moment that inspired the founding of Swahilipot.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            In 2016, Mahmoud Noor (alias Mentor001) took action and founded Swahilipot 
            with support from the National Museums of Kenya (NMK), Seacom, ICT Authority, 
            and Cisco.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Swahilipot started as a community-based organization (CBO) with programs 
            focused on technology & innovation. It has grown over the years to become 
            a non-profit organization (NGO) with diverse program areas and an expanded reach.
          </p>
        </div>

        {/* Timeline Title (optional) */}
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Timeline</h3>

        <div className="relative">
          {/* Vertical line down the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary dark:bg-primary-dark" />

          {/* Timeline events with less vertical spacing */}
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Offset for the timeline line */}
                <div className="w-1/4" />

                {/* Main content occupies 3/4 */}
                <div className="w-3/4 bg-orange-50 dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <div className="text-xs text-primary dark:text-primary-light font-bold mb-1">
                    {event.year}
                  </div>
                  {event.title && (
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      {event.title}
                    </h4>
                  )}
                  <p className="text-sm text-gray-700 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
