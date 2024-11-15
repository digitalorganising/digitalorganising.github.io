import SimpleCard from "@/components/SimpleCard";
import ToolCard from "@/components/ToolCard";
import {
  TypographyA,
  TypographyP,
  TypographyStrong,
  TypographyUl,
} from "@/components/typography";
import {
  AccessibilityIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LockClosedIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import searchIllustration from "../public/undraw_people_search_re_5rre.svg";
import dataIllustration from "../public/undraw_personal_data_re_ihde.svg";

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
        <h3 className="text-3xl font-semibold tracking-tight mb-8 lg:ml-2">
          Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <ToolCard
            name="Outlook Directory Exporter"
            gradientClass="from-amber-200"
            href="/outlook-directory-bookmarklet/"
            image={{
              alt: "An illustration of a woman searching through a directory of people",
              image: searchIllustration,
            }}
          >
            <TypographyP>
              <TypographyStrong>
                A simple tool for automating the process of finding everyone in
                an Outlook directory.
              </TypographyStrong>
            </TypographyP>
            <TypographyP>
              Exports a CSV, and only uses data that the worker already has
              access to via Outlook.
            </TypographyP>
          </ToolCard>
          <ToolCard
            name="Staff/membership matcher"
            gradientClass="from-blue-200"
            href="/name-joiner/"
            image={{
              alt: "An illustration representing detailed personal data",
              image: dataIllustration,
            }}
          >
            <TypographyP>
              <TypographyStrong>
                A tool for matching up lists of staff with lists of members.
              </TypographyStrong>
            </TypographyP>
            <TypographyP>
              To be used for workplace mapping: the tool matches entries based
              on names and emails, and where exact matches can't be found it
              suggests possibilities based on name similarity. It also
              identifies members who can't be found in the staff list.
            </TypographyP>
          </ToolCard>
        </div>
        <h3 className="text-3xl font-semibold tracking-tight mb-8 mt-10 lg:ml-2">
          Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <SimpleCard title="Secure" icon={<LockClosedIcon />}>
            <TypographyUl>
              <li>
                Workers must remain in control of their data, union membership
                data, and employer data.
              </li>
              <li>
                No data that is input into a tool by a worker can leave their
                device (ie, no data is ever sent to a server).
              </li>
              <li>
                Tools must not compromise any system of an employer or other
                third party.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Accessible" icon={<AccessibilityIcon />}>
            <TypographyUl>
              <li>
                No tool should require anything in order to function other than
                a modern web browser.
              </li>
              <li>
                Tools should follow accessibility (
                <TypographyA href="https://www.w3.org/WAI/standards-guidelines/wcag/">
                  WCAG
                </TypographyA>
                ) best practices where possible.
              </li>
              <li>
                Tools should not require technical expertise beyond basic
                workplace IT skills to use.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Simple" icon={<MagicWandIcon />}>
            <TypographyUl>
              <li>One tool should solve one known problem.</li>
              <li>
                Tools should be straightforward to use and should not aim to be
                a complete product for workplace organising.
              </li>
            </TypographyUl>
          </SimpleCard>
          <SimpleCard title="Open" icon={<GlobeIcon />}>
            <TypographyUl>
              <li>
                Workers should be able to modify a tool and create their own
                version if they want to.
              </li>
              <li>
                Tools must be open source (
                <TypographyA href="https://choosealicense.com/licenses/mit/">
                  MIT License
                </TypographyA>
                ) and should not use any external server, database or other
                hosted service: they are static web pages that can be saved in
                their entirety.
              </li>
              <li>
                Tools must not gain unauthorised access to employer systems or
                data.
              </li>
            </TypographyUl>
          </SimpleCard>
        </div>
      </section>
      <section>
        <a
          className="flex justify-center items-center text-2xl mx-auto mt-12 mb-9"
          href="https://github.com/digitalorganising"
        >
          <GitHubLogoIcon className="size-10 mr-2" />
          github.com/digitalorganising
        </a>
      </section>
    </div>
  );
}
