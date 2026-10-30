import { CertificateCard } from "@/components/sections/CertificateCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/content/certificates";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Certificates() {
  return (
    <section id={SECTION_IDS.certificates} aria-labelledby="certificates-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="certificates-title" {...sections.certificates} />

        {/* Flex + fixed widths (not grid) so a short last row stays centred. */}
        <ul className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert) => (
            <li key={cert.slug} className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <CertificateCard cert={cert} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
