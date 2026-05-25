import { BookingFlow } from "@/components/site/BookingFlow";
import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { PageIntro } from "@/components/site/PageIntro";
import { Services } from "@/components/site/Services";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function LessonsPage() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Makeup Lessons in Ado-Ekiti — Glam By Dove Tutorials"
        description="Book beginner-friendly makeup lessons in Ado-Ekiti with Glam By Dove for brows, base work, eyes, lips, product use, and event-ready glam."
        path="/lessons"
      />
      <PageIntro
        eyebrow="Makeup Lessons"
        title="Learn your"
        italic="own face"
        body="Book beginner-friendly makeup lessons and tutorials in Ado-Ekiti for product knowledge, skin prep, brows, eyes, base work, lips, and confident everyday or event-ready glam."
      />
      <Services
        onlyService="lessons"
        eyebrow="Lesson Details"
        title="Makeup lessons &"
        italic="tutorials"
        body="A practical one-on-one makeup tutorial in Ado-Ekiti for beginners and beauty lovers who want better product use, brows, base work, eyes, lips, and event-ready technique."
      />
      <BookingFlow />
      <Contact />
    </SiteLayout>
  );
}
