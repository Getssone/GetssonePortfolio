import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@/once-ui/components";
import { person, hebergeur, about, baseURL, mentionsLegales } from "@/app/resources";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/mentions-legales`,
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

export default function MentionsLegales() {
  return (
    <Column maxWidth="m">
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} gap="24" maxWidth={40} >
          <Heading variant="display-strong-l" marginBottom="xl">
            Mentions Légales
          </Heading>
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            {mentionsLegales.intro.display ? (
              <>
                <Heading as="h2" variant="display-strong-xl" marginBottom="m">
                  <u>{mentionsLegales.intro.title}</u>
                </Heading>
                <Text>
                  {mentionsLegales.intro.description}
                </Text>
              </>
            ) : null}
          </Column>
          <Column textVariant="body-default-l" fillWidth gap="m">
            {mentionsLegales.legalInfo.display ? (
              <>
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                  <u>{mentionsLegales.legalInfo.title}</u>
                </Heading>
                {mentionsLegales.legalInfo.content}
              </>
            ) : null}
            {mentionsLegales.privacyPolicy.display ? (
              <>
                <Heading as="h2" variant="display-strong-l" marginBottom="m">
                  <u>{mentionsLegales.privacyPolicy.title}</u>
                </Heading>
                {mentionsLegales.privacyPolicy.content}
              </>
            ) : null}
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
