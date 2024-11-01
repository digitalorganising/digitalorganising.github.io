import SimpleCard from "@/components/SimpleCard";
import {
  TypographyP,
  TypographyStrong,
  TypographyUl,
} from "@/components/typography";
import {
  AccessibilityIcon,
  GlobeIcon,
  LockClosedIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";

export default function Index() {
  return (
    <div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-center my-16 sm:my-20 lg:my-24 text-wrap group leading-snug sm:leading-snug lg:leading-snug">
        <span className="group-hover:opacity-10 transition-opacity duration-150">
          Digital{" "}
        </span>
        organising is just organising
      </h1>

      <section>
        <input
          type="checkbox"
          id="expanded"
          className="opacity-0 absolute pointer-events-none peer"
        />

        <TypographyP className="mt-0">
          Today, <TypographyStrong>work happens online</TypographyStrong>.
          Regardless of whether workers are together in person, much of the
          subject of their labour lies in emails, calendars, virtual meetings,
          WhatsApp chats, presentations and spreadsheets. As trade unionists,
          our priority is to help workers to organise and build their power. We
          must organise where the workers are, and so{" "}
          <TypographyStrong>we must organise online</TypographyStrong>.
        </TypographyP>
        <label
          htmlFor="expanded"
          role="button"
          className="block mt-2 text-center text-sm font-medium text-primary underline underline-offset-4 peer-focus:ring-2 peer-checked:hidden"
        >
          read more...
        </label>

        <div className="mt-4 hidden peer-checked:block">
          <TypographyP>
            We already know well that there are no shortcuts in organising, and
            we must remind ourselves that this still applies to "digital
            organising": there is no online service that can build power; no
            data analysis that can substitute for a real collective voice; no
            social media communications strategy that can obviate the
            requirement for one-to-one conversations between workers.
          </TypographyP>
          <TypographyP>
            Our priority must be to{" "}
            <TypographyStrong>
              give workers the ability to organise themselves in the digital
              workplace
            </TypographyStrong>
            . We are wholly accustomed to staging interventions in the physical
            workplace - with noticeboards, with conversations, with pickets -
            but all too often we allow ourselves to consider the digital
            workplace to be a largely opaque entity under the employer's purview
            alone. Too many of our efforts are focused on the periphery of the
            online workplace, rather than inside it.
          </TypographyP>
          <TypographyP>
            More optimistically, the digital workplace provides workers with
            organising opportunities that were unimaginable not long ago. The
            strategic work of mapping and charting a workplace is a prerequisite
            for a successful organising campaign but it is arduous and - with
            hostile employers - can even place workers at risk. Trade unions
            have successfully used analysis and visualisation of sectoral and
            national membership data to inform bargaining agendas and organising
            priorities, and there is{" "}
            <TypographyStrong>
              huge potential for what workers can achieve
            </TypographyStrong>{" "}
            if we are able to empower them to do this within their own
            workplaces.
          </TypographyP>
        </div>
      </section>
      <section>
        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight my-20 text-center">
          Web tools for organising
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <SimpleCard title="Secure" icon={<LockClosedIcon />}>
            <TypographyUl>
              <li>No data should ever leave the worker's device.</li>
              <li>
                Workers are in control of where and when data is saved and who
                processes it.
              </li>
              <li>
                Nobody except the worker has access to the data they input.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Accessible" icon={<AccessibilityIcon />}>
            <TypographyUl>
              <li>
                No tool should require anything in order to function other than
                a modern web browser
              </li>
              <li>Tools should follow WCAG best practices where possible</li>
              <li>
                They are do not require technical expertise beyond basic
                workplace IT skills to use.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Simple" icon={<MagicWandIcon />}>
            <TypographyUl>
              <li>One tool should solve one known problem</li>
              <li>
                Tools should be straightforward to use and should not aim to be
                a complete product for workplace organising.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Open" icon={<GlobeIcon />}>
            <TypographyUl>
              <li>
                Workers should be able to "hack" and modify a tool if they want
                to
              </li>
              <li>
                Tools must be open source and (in keeping with the security
                requirement) should not use any external server, database or
                other hosted service.
              </li>
            </TypographyUl>
          </SimpleCard>
        </div>
      </section>
    </div>
  );
}
