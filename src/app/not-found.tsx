

import { Button, Column, Flex, Heading, LetterFx, Line, SmartImage, Text, ToggleButton } from "@/once-ui/components";
import { home, person, work, blog } from "@/app/resources/content";
import { Posts } from "@/components/blog/Posts";
import { baseURL, routes } from "@/app/resources";

export default function NotFound() {

  return (

    <Column fillWidth center paddingBottom="160">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
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
      <Flex
        fillWidth
        gap="40"
        vertical="center"
      >
        <Line background="neutral-alpha-weak" />
        <Line
          vert
          height={12}
          background="neutral-alpha-medium"
        />
        <Line background="neutral-alpha-strong" />
        {/* <Line
    vert
    height={20}
    background="neutral-alpha-strong"
  /> */}
        <SmartImage
          src="/images/getssone/patch-panda-mignon-suspendu-404.webp"
          alt="Panda qui a louper une marche "
          aspectRatio="1 / 1"
          maxWidth={24}
          sizes="640px"
        />
        <Line background="neutral-alpha-strong" />
        <Line
          vert
          height={12}
          background="neutral-alpha-medium"
        />
        <Line background="neutral-alpha-weak" />
      </Flex>
      <Text marginBottom="s" variant="display-strong-xl">
        <LetterFx
          speed="medium"
          trigger="instant"
        >
          404
        </LetterFx>
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        <LetterFx
          speed="medium"
          trigger="instant"
        >
          Page non trouvée
        </LetterFx>
      </Heading>
      <Column center gap="64">
        <Text onBackground="neutral-weak">
          <LetterFx
            speed="medium"
            trigger="instant"
          >
            Attends, je me rattrape !
          </LetterFx>
        </Text>
        <Flex flex={3} gap="32" paddingX="20">
          {routes["/work"] && (
            <>
              <Button
                variant="secondary"
                className="s-flex-hide"
                prefixIcon="grid"
                href="/work"
                label={work.label}
              />
            </>
          )}
          {routes["/blog"] && (
            <>
              <Button
                variant="secondary"
                className="s-flex-hide"
                prefixIcon="book"
                href="/blog"
                label={blog.label}
              />
            </>
          )}
        </Flex>
      </Column>

    </Column>
  );
}
