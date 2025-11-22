import PageTitle from '../../components/PageTitle';

export default function AboutPage() {
  return (
    <div>
      <PageTitle title="Hi" />
      <p>
        I am a leader in web software development with a focus on digital philanthropy.<br /> I take pride in building things for people who are making a difference in the world.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900">Work History</h2>
        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Manager of Development — Liquid Web (GiveWP)</h3>
            <p className="text-sm text-gray-600">Jan 2024 – Present</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Lead the GiveWP product development team.</li>
              <li>Mentor team members, fostering a happy and successful team.</li>
              <li>Guide technical direction and collaborate with Product, PM, Marketing, Customer Success, Support, and Stakeholders.</li>
              <li>Contribute to the codebase, review PRs, lead releases, and engage with the open‑source community.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Lead Software Developer — Liquid Web (GiveWP)</h3>
            <p className="text-sm text-gray-600">Jul 2022 – Jan 2024</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Co-led technical direction for GiveWP as a team member and technical leader.</li>
              <li>Heavily contributed to GiveWP 3.0: new visual donation form builder (Gutenberg) and a React-based rendering and processing system, maintaining backward compatibility across 8+ years of legacy versions.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Senior Software Developer — Liquid Web (GiveWP)</h3>
            <p className="text-sm text-gray-600">May 2021 – Jul 2022</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Transitioned from GiveIO SaaS to the GiveWP product team post‑acquisition.</li>
              <li>Built Text‑to‑Give premium add‑on integrating Twilio and Stripe for SMS donations.</li>
              <li>Built Give‑Salesforce premium add‑on to sync GiveWP data with NPSP Salesforce.</li>
              <li>Introduced key APIs including a Payment Gateway API plus first‑class Models and Repositories.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Full Stack Software Developer — Impress.org</h3>
            <p className="text-sm text-gray-600">Aug 2019 – May 2021</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Built a new fundraising SaaS (GiveIO) focused on public campaigns and recurring donations.</li>
              <li>Tech stack: Laravel, React, GraphQL, Tailwind CSS.</li>
              <li>Integrated Stripe, Algolia, Zapier, Cloudinary, Sentry, SendGrid, Intercom, Socialite, Vapor, PHPUnit, Dusk, Spark, and Nova.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Lead Web Developer — Zero Gravity Marketing</h3>
            <p className="text-sm text-gray-600">Feb 2018 – Jul 2019</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Built custom websites with WordPress, Craft CMS, Laravel, and Shopify.</li>
              <li>Wrote proposals, managed projects, created boilerplates, and authored documentation.</li>
              <li>Interviewed and managed freelancers.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Web Developer — Zero Gravity Marketing</h3>
            <p className="text-sm text-gray-600">Feb 2016 – Jan 2018</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Developed numerous marketing and eCommerce sites using WordPress and WooCommerce.</li>
            </ul>
          </div>
        </div>
        <hr className="my-12" />
        <h2 className="text-2xl font-semibold text-gray-900">Volunteer History</h2>
        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Board Member, Volunteer — Wood‑Pawcatuck Watershed Association</h3>
            <p className="text-sm text-gray-600">Jan 2017 – Present</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-800">
              <li>Serve on the Board of Directors; previously Secretary and Treasurer.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
