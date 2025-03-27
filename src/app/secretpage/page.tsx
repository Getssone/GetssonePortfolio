import { Column, Flex, RevealFx, Text, InlineCode } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { secretpage, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = secretpage.title;
  const description = secretpage.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/secretpage`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Gallery() {
  return (

    <Column fillWidth>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: secretpage.title,
            description: secretpage.description,
            url: `https://${baseURL}/secretpage`,
            image: secretpage.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
        <Text wrap="pretty" onBackground="neutral-weak" variant="heading-default-xl">
          {secretpage.description}
        </Text>
      </RevealFx>
      <Flex fillWidth>
        <MasonryGrid />
      </Flex>
    </Column>
  );
}
