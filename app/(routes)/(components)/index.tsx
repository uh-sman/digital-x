import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import CardWrapper from "@/app/(routes)/(components)/card-wrapper";
import { OurRecentProjects } from "@/app/(routes)/(components)/our-recent-projects";
import { OurTeam } from "@/app/(routes)/(components)/our-team";
import { Testimonials } from "@/app/(routes)/(components)/testimonials";
import { Footer } from "@/components/footer";
// import { currentUser, auth } from "@clerk/nextjs";
import Modal from "@/components/modal";
import OrganizationModalWrapper from "./organization-modal-warpper";
async function Components() {
  // const user = await currentUser();
  // const { userId } = auth()

  return (
    <div>
      <OrganizationModalWrapper />
      <Navbar />
      <Hero
        label="Hero"
        title="Building Digital Products, Brands & Experience."
        description="We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using."
        buttonTitle="Start a Project"
        image="/Frame 3.png"
        bgStyle="bg-[#F2F7F6]"
      />
      <Hero
        label="About"
        title="About us"
        description="Sample is an operating organization. W are on of the Nigeria's fastest growing information technology service and software development companies utilizing an extensive and robust indigenous infrastructure to provide bespoken software solutions to clients and partners worldwide. We are a team of seasoned experts dedicated to our craft of choice"
        image="/Frame 7.png"
      />
      <CardWrapper />
      <OurRecentProjects />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Components;
